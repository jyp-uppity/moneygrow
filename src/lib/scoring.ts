import { questions } from '../data/questions';
import type { Answers, Axis, GapTier, ScoringResult, TypeCode } from './types';

const GROUPS = {
  planningTrait: [1, 2, 3, 4],
  planningBehavior: [5, 6, 7],
  riskTrait: [8, 9, 10, 11],
  riskBehavior: [12, 13, 14],
  impulsivity: [15, 16, 17],
  avoidance: [18, 19, 20],
} as const;

const QUESTION_BY_ID = new Map(questions.map((q) => [q.id, q]));

/** 역채점 문항은 6 - 응답값으로 변환한다. */
function scoreValue(response: number, reverse: boolean): number {
  return reverse ? 6 - response : response;
}

function sumGroup(answers: Answers, ids: readonly number[]): number {
  return ids.reduce((sum, id) => {
    const q = QUESTION_BY_ID.get(id);
    if (!q) throw new Error(`unknown question id ${id}`);
    const response = answers[id];
    if (response == null) throw new Error(`missing answer for question ${id}`);
    return sum + scoreValue(response, q.reverse);
  }, 0);
}

/** 원점수를 0~100 스케일로 정규화한다. */
function normalize(raw: number, min: number, max: number): number {
  return Math.round(((raw - min) / (max - min)) * 100);
}

function gapTier(gap: number): GapTier {
  if (gap < 15) return 'match';
  if (gap < 30) return 'slight';
  return 'large';
}

const BOUNDARY_LOW = 45;
const BOUNDARY_HIGH = 55;
const FLAG_THRESHOLD = 70;

export function computeScores(answers: Answers): ScoringResult {
  const planningTrait = normalize(sumGroup(answers, GROUPS.planningTrait), 4, 20);
  const planningBehavior = normalize(sumGroup(answers, GROUPS.planningBehavior), 3, 15);
  const riskTrait = normalize(sumGroup(answers, GROUPS.riskTrait), 4, 20);
  const riskBehavior = normalize(sumGroup(answers, GROUPS.riskBehavior), 3, 15);
  const impulsivity = normalize(sumGroup(answers, GROUPS.impulsivity), 3, 15);
  const avoidance = normalize(sumGroup(answers, GROUPS.avoidance), 3, 15);

  const planningGap = Math.abs(planningTrait - planningBehavior);
  const riskGap = Math.abs(riskTrait - riskBehavior);

  const boundaryAxes: Axis[] = [];
  if (planningTrait >= BOUNDARY_LOW && planningTrait <= BOUNDARY_HIGH) boundaryAxes.push('planning');
  if (riskTrait >= BOUNDARY_LOW && riskTrait <= BOUNDARY_HIGH) boundaryAxes.push('risk');

  const planningCode = planningTrait >= 50 ? 'P' : 'S';
  const riskCode = riskTrait >= 50 ? 'G' : 'A';
  const typeCode = `${planningCode}${riskCode}` as TypeCode;

  return {
    planning: { trait: planningTrait, behavior: planningBehavior, gap: planningGap, gapTier: gapTier(planningGap) },
    risk: { trait: riskTrait, behavior: riskBehavior, gap: riskGap, gapTier: gapTier(riskGap) },
    impulsivity,
    avoidance,
    impulsivityFlag: impulsivity >= FLAG_THRESHOLD,
    avoidanceFlag: avoidance >= FLAG_THRESHOLD,
    typeCode,
    isBoundary: boundaryAxes.length > 0,
    boundaryAxes,
  };
}

export function isSurveyComplete(answers: Answers): boolean {
  return questions.every((q) => answers[q.id] != null);
}
