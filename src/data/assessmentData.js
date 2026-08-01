export const QUESTIONS = [
  {
    id: 1,
    axis: 'planning',
    subType: 'trait',
    text: '큰돈을 쓰기 전에 항상 예산을 먼저 확인하는 편이다.',
    isReverse: false
  },
  {
    id: 2,
    axis: 'planning',
    subType: 'trait',
    text: '저축·투자를 시작하기 전에 목표 금액과 기간을 구체적으로 정한다.',
    isReverse: false
  },
  {
    id: 3,
    axis: 'planning',
    subType: 'trait',
    text: '다음 달 지출 계획을 세우지 않아도 크게 불안하지 않다.',
    isReverse: true
  },
  {
    id: 4,
    axis: 'planning',
    subType: 'trait',
    text: '매달 정해진 날짜에 저축·투자를 실행한다.',
    isReverse: false
  },
  {
    id: 5,
    axis: 'planning',
    subType: 'action',
    text: '[최근 3개월] 예산 계획을 세우고 그 안에서 지출했다.',
    isReverse: false
  },
  {
    id: 6,
    axis: 'planning',
    subType: 'action',
    text: '[최근 3개월] 미리 정하지 않은 50만 원 이상의 지출이 있었다.',
    isReverse: true
  },
  {
    id: 7,
    axis: 'planning',
    subType: 'action',
    text: '[최근 3개월] 저축·투자 자동이체를 새로 설정하거나 유지했다.',
    isReverse: false
  },
  {
    id: 8,
    axis: 'risk',
    subType: 'trait',
    text: '원금 손실 가능성이 있어도 더 높은 수익을 기대할 수 있는 쪽을 선택하는 편이다.',
    isReverse: false
  },
  {
    id: 9,
    axis: 'risk',
    subType: 'trait',
    text: '예금·적금처럼 원금이 보장되는 상품이 가장 편안하게 느껴진다.',
    isReverse: true
  },
  {
    id: 10,
    axis: 'risk',
    subType: 'trait',
    text: '투자자산 가격이 20% 하락해도 장기적으로 버틸 수 있다고 생각한다.',
    isReverse: false
  },
  {
    id: 11,
    axis: 'risk',
    subType: 'trait',
    text: '검증되지 않은 새 투자 방법보다 익숙하고 안전한 방법을 선호한다.',
    isReverse: true
  },
  {
    id: 12,
    axis: 'risk',
    subType: 'action',
    text: '[최근 1년] 주식·ETF·코인 등 원금 손실 가능 자산에 새로 투자했다.',
    isReverse: false
  },
  {
    id: 13,
    axis: 'risk',
    subType: 'action',
    text: '[최근 1년] 투자 비중보다 예금·적금 비중을 더 늘렸다.',
    isReverse: true
  },
  {
    id: 14,
    axis: 'risk',
    subType: 'action',
    text: '[최근 1년] 시장이 하락했을 때 불안해서 보유 자산을 매도한 적이 있다.',
    isReverse: true
  },
  {
    id: 15,
    axis: 'impulsivity',
    subType: 'trait',
    text: '계획에 없던 물건을 발견하면 그 자리에서 바로 구매하는 편이다.',
    isReverse: false
  },
  {
    id: 16,
    axis: 'impulsivity',
    subType: 'trait',
    text: '스트레스를 받으면 소비로 푸는 편이다.',
    isReverse: false
  },
  {
    id: 17,
    axis: 'impulsivity',
    subType: 'action',
    text: '[최근 3개월] "사지 말았어야 했다"고 후회한 지출이 자주 있었다.',
    isReverse: false
  },
  {
    id: 18,
    axis: 'avoidance',
    subType: 'trait',
    text: '통장 잔액이나 카드값 확인이 부담스러워 미루는 편이다.',
    isReverse: false
  },
  {
    id: 19,
    axis: 'avoidance',
    subType: 'action',
    text: '연금·보험·대출 등 재무 관련 서류를 열어보지 않고 방치한 것이 있다.',
    isReverse: false
  },
  {
    id: 20,
    axis: 'avoidance',
    subType: 'trait',
    text: '정산·연봉 협상처럼 돈 이야기를 꺼내야 하는 상황을 피하고 싶다.',
    isReverse: false
  }
];

export const TYPES = {
  PA: {
    code: 'P · A',
    name: '차곡차곡형',
    tagline: '계획하고, 지킨다',
    desc: '계획 수립에 능숙하고 안정적인 지출 통제를 중시합니다. 리스크를 최소화하며 자산을 차곡차곡 쌓는 신중함이 돋보입니다.',
    strengths: [
      '저축 습관이 매우 안정적으로 유지됨',
      '세운 지출 계획을 꼼꼼히 잘 지킴',
      '충동구매가 적어 자산 손실 위험이 적음'
    ],
    pitfalls: [
      '변화에 소극적이라 성장의 기회를 놓치기 쉬움',
      '안전자산(예·적금)에 자산이 과도하게 편중될 수 있음',
      '물가상승률 대비 자산 증식 속도가 느릴 수 있음'
    ],
    firstAction: '비상금 3~6개월 치를 확인한 뒤, 여유자금의 일부를 정기적으로 글로벌 ETF 등 적립식 투자로 옮기는 자동이체 규칙을 만드세요.'
  },
  PG: {
    code: 'P · G',
    name: '설계가형',
    tagline: '계획하고, 키운다',
    desc: '장기적 재무 목표를 설정하고 논리적으로 자산을 배분하는 능력이 탁월합니다. 적극적 수익을 추구하면서도 분석에 깊이를 둡니다.',
    strengths: [
      '목표 지향적으로 정보를 탐색하고 빠르게 습득함',
      '자산을 다양하게 분산해 관리하는 감각이 탁월함',
      '중장기 재무 로드맵을 세우는 데 매우 익숙함'
    ],
    pitfalls: [
      '과도한 분석으로 실제 실행 타이밍이 늦어짐 (분석 마비)',
      '완벽한 시장 타이밍을 기다리다 기회비용이 발생함',
      '계획이 틀어졌을 때 유연하게 조정하거나 받아들이기 어려움'
    ],
    firstAction: '더 분석하기 전에, 현재 지식을 바탕으로 지금 바로 실행할 명확한 규칙(월 정액 투자금 및 상한선)을 정하고 자동화하세요.'
  },
  SA: {
    code: 'S · A',
    name: '소확행형',
    tagline: '필요한 만큼, 편안하게',
    desc: '돈에 연연하기보다 현재의 편안함과 안정감을 중요하게 여깁니다. 무리한 투자나 과도한 자산 비교로 인한 스트레스를 받지 않습니다.',
    strengths: [
      '무리한 지출이나 빚을 내는 투자를 하지 않음',
      '돈 관리에 대한 과도한 스트레스 없이 평온함을 유지함',
      '남들과 자산을 비교하며 무리하게 과소비하지 않음'
    ],
    pitfalls: [
      '구체적인 목표가 없어 자산 형성 속도가 다소 느림',
      '인플레이션(물가상승)에 대한 장기 대비가 부족할 수 있음',
      '금융 지식이 부족하거나 몰라서 혜택을 놓치는 상태가 오래 지속됨'
    ],
    firstAction: '복잡한 장부 작성 대신, 월급날 다음 날 자동으로 저축·연금 계좌로 돈이 빠져나가는 "무의식 시스템"부터 구축하세요.'
  },
  SG: {
    code: 'S · G',
    name: '모험가형',
    tagline: '기회를 보면, 움직인다',
    desc: '과감한 결단력과 뛰어난 트렌드 감각으로 새로운 투자 기회를 캐치합니다. 변화에 민첩하고 큰 성장 가능성을 추구합니다.',
    strengths: [
      '실행력이 매우 빠르고 새로운 금융 트렌드/기회를 잘 포착함',
      '시장 변화나 투자 리스크에 대한 거부감이 적음',
      '도전적인 재무 목표에도 적극적으로 기꺼이 시도함'
    ],
    pitfalls: [
      '감정에 휩쓸린 충동적 투자나 예산 외 지출 위험이 큼',
      '손실 관리(손절매)나 안전장치 기준이 미흡할 수 있음',
      '단기 수익률 변동에 따라 지나치게 일희일비하기 쉬움'
    ],
    firstAction: '새로운 투자를 시작하기 전에, 감정에 흔들리지 않도록 투자 상한선(원금의 10% 이하)과 손절 매도 기준을 서면으로 먼저 확정하세요.'
  }
};

export const COACHES = [
  {
    id: 'c1',
    name: '이지은 재무상담사',
    title: '국제재무설계사(CFP)',
    career: '12년 차 자산관리 전문가 · 전 신한은행 자산관리팀',
    specialty: '30대 직장인 현금흐름 최적화, 연금·절세 구조화',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
    tags: ['중립적 조언', '연금/절세', '월급관리']
  },
  {
    id: 'c2',
    name: '박서준 코치',
    title: '금융행동 심리 코치',
    career: '8년 차 재무코칭 전문가 · 저서 <소비의 심리학과 돈관리>',
    specialty: '충동지출·소비 습관 개선, 성향 맞춤 저축 루틴',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&auto=format&fit=crop&q=80',
    tags: ['행동변화', '충동소비개선', '사회초년생']
  },
  {
    id: 'c3',
    name: '김하나 자산관리사',
    title: '투자·포트폴리오 코치',
    career: '10년 차 증권사 PB 출신 · 금융웰니스 컨설턴트',
    specialty: '안정적 적립식 ETF 포트폴리오, 내집마련 자금 설계',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80',
    tags: ['ETF포트폴리오', '내집마련', '설계가형맞춤']
  }
];

export const INITIAL_ROUTINES = [
  {
    id: 'r1',
    week: 1,
    title: '이번 주 고정비 목록 & 자동이체 점검',
    desc: '숨어있는 구독 서비스와 매달 정기적으로 나가는 고정비를 파악하고 정리합니다.',
    category: '지출관리',
    completed: true,
    day: '월요일'
  },
  {
    id: 'r2',
    week: 1,
    title: '비상금 전용 계좌 분리하기',
    desc: '월 생활비 3개월 치의 비상금을 파킹통장(CMA 등)으로 이체해 안전하게 분리해둡니다.',
    category: '자산분리',
    completed: true,
    day: '수요일'
  },
  {
    id: 'r3',
    week: 2,
    title: '자동이체 날짜를 월급 다음 날로 일괄 변경',
    desc: '월급이 들어오자마자 저축과 투자금액이 먼저 나가도록 시스템화합니다.',
    category: '자동화',
    completed: false,
    day: '금요일'
  },
  {
    id: 'r4',
    week: 2,
    title: '연금저축/IRP 계좌 수수료 및 상품 확인',
    desc: '내가 가진 절세 계좌의 납입액과 운용 상품을 확인하고 수익률을 체크합니다.',
    category: '절세/연금',
    completed: false,
    day: '일요일'
  }
];
