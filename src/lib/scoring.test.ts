import { describe, expect, it } from 'vitest';
import { questions } from '../data/questions';
import { computeScores } from './scoring';
import type { Answers } from './types';

// 5점 리커트 응답을 만들어, "역채점 후 합산 = target raw" 가 되도록 answers를 구성한다.
function buildAnswers(overrides: Record<number, number>): Answers {
  const base: Answers = {};
  for (let id = 1; id <= 20; id++) base[id] = 3; // 중립값으로 채움
  return { ...base, ...overrides };
}

// 모든 문항의 "채점값"이 동일한 값이 되도록 응답을 역산한다 (역채점 문항은 6-값으로 응답).
function uniformScoreAnswers(scoreValue: number): Answers {
  const answers: Answers = {};
  for (const q of questions) answers[q.id] = q.reverse ? 6 - scoreValue : scoreValue;
  return answers;
}

describe('computeScores', () => {
  it('PRD 6-1 김나영 워크스루 예시와 동일한 결과를 낸다', () => {
    // 역채점 문항은 (6-응답)이 채점값이 되므로, 응답을 6-목표채점값으로 넣는다.
    const answers = buildAnswers({
      // planningTrait raw=16: q1=5,q2=5,q4=5(정방향) + q3 역채점 채점값=1(응답=5) → 5+5+1+5=16
      1: 5, 2: 5, 3: 5, 4: 5,
      // planningBehavior raw=7: q5=3,q7=3(정방향) + q6 역채점 채점값=1(응답=5) → 3+1+3=7
      5: 3, 6: 5, 7: 3,
      // riskTrait raw=13: q8=4,q10=4(정방향), q9,q11 역채점 채점값 합=5 → 예: q9채점=2(응답4), q11채점=3(응답3)
      8: 4, 9: 4, 10: 4, 11: 3,
      // riskBehavior raw=6: q12=2(정방향), q13,q14 역채점 채점값 합=4 → q13채점=2(응답4), q14채점=2(응답4)
      12: 2, 13: 4, 14: 4,
      // impulsivity raw=11: q15+q16+q17 정방향
      15: 4, 16: 4, 17: 3,
      // avoidance raw=12: q18+q19+q20 정방향
      18: 4, 19: 4, 20: 4,
    });

    const result = computeScores(answers);

    expect(result.planning.trait).toBe(75);
    expect(result.planning.behavior).toBe(33);
    expect(result.risk.trait).toBe(56);
    expect(result.risk.behavior).toBe(25);
    expect(result.impulsivity).toBe(67);
    expect(result.avoidance).toBe(75);

    expect(result.typeCode).toBe('PG');
    expect(result.planning.gapTier).toBe('large'); // |75-33|=42
    expect(result.impulsivityFlag).toBe(false); // 67 < 70
    expect(result.avoidanceFlag).toBe(true); // 75 >= 70
  });

  it('모든 문항의 채점값이 최저(1)가 되도록 응답하면 모든 축이 0점, 즉흥·안정형(SA)으로 분류된다', () => {
    const result = computeScores(uniformScoreAnswers(1));
    expect(result.planning.trait).toBe(0);
    expect(result.planning.behavior).toBe(0);
    expect(result.risk.trait).toBe(0);
    expect(result.risk.behavior).toBe(0);
    expect(result.impulsivity).toBe(0);
    expect(result.avoidance).toBe(0);
    expect(result.typeCode).toBe('SA');
    expect(result.impulsivityFlag).toBe(false);
    expect(result.avoidanceFlag).toBe(false);
  });

  it('모든 문항의 채점값이 최고(5)가 되도록 응답하면 모든 축이 100점, 계획·성장형(PG)으로 분류된다', () => {
    const result = computeScores(uniformScoreAnswers(5));
    expect(result.planning.trait).toBe(100);
    expect(result.risk.trait).toBe(100);
    expect(result.typeCode).toBe('PG');
    expect(result.impulsivityFlag).toBe(true);
    expect(result.avoidanceFlag).toBe(true);
  });

  it('모든 문항을 중립값(3)으로 응답하면 두 축 모두 정확히 50점 경계 구간이다', () => {
    // 각 축 4문항 중 역채점 1개: 3 + 3 + (6-3) + 3 = 12 → normalize(12,4,20)=50
    const answers = buildAnswers({});
    const result = computeScores(answers);
    expect(result.planning.trait).toBe(50);
    expect(result.risk.trait).toBe(50);
    expect(result.isBoundary).toBe(true);
    expect(result.boundaryAxes).toEqual(expect.arrayContaining(['planning', 'risk']));
  });
});
