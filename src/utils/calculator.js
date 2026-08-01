import { QUESTIONS, TYPES } from '../data/assessmentData';

export function calculateResult(answers) {
  // answers is an object like { 1: 4, 2: 5, ..., 20: 2 }
  
  let scores = {
    planningTraitRaw: 0,
    planningActionRaw: 0,
    riskTraitRaw: 0,
    riskActionRaw: 0,
    impulsivityRaw: 0,
    avoidanceRaw: 0,
  };

  QUESTIONS.forEach(q => {
    const val = answers[q.id] || 3; // default to 3 if unselected
    const finalVal = q.isReverse ? (6 - val) : val;

    if (q.axis === 'planning') {
      if (q.subType === 'trait') scores.planningTraitRaw += finalVal;
      else scores.planningActionRaw += finalVal;
    } else if (q.axis === 'risk') {
      if (q.subType === 'trait') scores.riskTraitRaw += finalVal;
      else scores.riskActionRaw += finalVal;
    } else if (q.axis === 'impulsivity') {
      scores.impulsivityRaw += finalVal;
    } else if (q.axis === 'avoidance') {
      scores.avoidanceRaw += finalVal;
    }
  });

  // Normalize scores to 0 ~ 100 scale
  // 4 items (raw 4~20): (raw - 4) / 16 * 100
  // 3 items (raw 3~15): (raw - 3) / 12 * 100
  const planningTrait = Math.round(((scores.planningTraitRaw - 4) / 16) * 100);
  const planningAction = Math.round(((scores.planningActionRaw - 3) / 12) * 100);
  const riskTrait = Math.round(((scores.riskTraitRaw - 4) / 16) * 100);
  const riskAction = Math.round(((scores.riskActionRaw - 3) / 12) * 100);
  const impulsivity = Math.round(((scores.impulsivityRaw - 3) / 12) * 100);
  const avoidance = Math.round(((scores.avoidanceRaw - 3) / 12) * 100);

  // Determine Type
  const isP = planningTrait >= 50;
  const isG = riskTrait >= 50;
  const typeKey = `${isP ? 'P' : 'S'}${isG ? 'G' : 'A'}`;
  const typeInfo = TYPES[typeKey] || TYPES.PA;

  // Boundary check (45~55)
  const isBoundary = (planningTrait >= 45 && planningTrait <= 55) || (riskTrait >= 45 && riskTrait <= 55);

  // Gap analysis
  const planningGap = Math.abs(planningTrait - planningAction);
  const riskGap = Math.abs(riskTrait - riskAction);
  const maxGap = Math.max(planningGap, riskGap);

  let gapLevel = '일치';
  let gapDesc = '원래 성향대로 실제 현금흐름과 투자를 안정적으로 실행하고 있습니다.';
  if (maxGap >= 30) {
    gapLevel = '크게 불일치';
    gapDesc = '생각하는 재무 방향과 최근 실제 소비·지출 행동 사이에 큰 격차가 존재합니다. 마음속 계획을 행동으로 옮기기 위한 환경 설정이 최우선입니다.';
  } else if (maxGap >= 15) {
    gapLevel = '약간 불일치';
    gapDesc = '성향과 다르게 행동하는 부분이 일부 존재합니다. 주위 환경이나 생활 습관의 방해 요인을 체크할 필요가 있습니다.';
  }

  // Warning signals
  const hasImpulsivityWarning = impulsivity >= 70;
  const hasAvoidanceWarning = avoidance >= 70;

  // Suggested questions for consultation
  const suggestedQuestions = [];
  if (maxGap >= 30) {
    suggestedQuestions.push('내 성향에 맞는 계획을 세웠는데도 실제 행동으로 이어지지 않는 가장 큰 장애물은 무엇인가요?');
  }
  if (hasImpulsivityWarning) {
    suggestedQuestions.push('스트레스 소비나 예산 외 지출이 생겼을 때 스스로 브레이크를 거는 구체적인 시스템을 어떻게 만드나요?');
  }
  if (hasAvoidanceWarning) {
    suggestedQuestions.push('통장 잔액이나 세무·보험 서류 확인에 대한 부담감을 줄이고 간단히 관리하는 방법은 무엇인가요?');
  }
  if (suggestedQuestions.length < 3) {
    suggestedQuestions.push('현재 내 소득 대비 비상금과 투자자산의 비중이 내 생애주기 목표에 적합한가요?');
    suggestedQuestions.push('저축과 투자의 성과를 높이기 위해 가장 먼저 자동화해야 할 금융 상품은 무엇인가요?');
  }

  return {
    typeKey,
    typeInfo,
    isBoundary,
    scores: {
      planningTrait,
      planningAction,
      riskTrait,
      riskAction,
      impulsivity,
      avoidance
    },
    gap: {
      planningGap,
      riskGap,
      maxGap,
      gapLevel,
      gapDesc
    },
    warnings: {
      impulsivity: hasImpulsivityWarning,
      avoidance: hasAvoidanceWarning
    },
    suggestedQuestions: suggestedQuestions.slice(0, 3)
  };
}
