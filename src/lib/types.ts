export type Axis = 'planning' | 'risk' | 'impulsivity' | 'avoidance';
export type Category = 'trait' | 'behavior';
export type GapTier = 'match' | 'slight' | 'large';
export type TypeCode = 'PA' | 'PG' | 'SA' | 'SG';

export interface Question {
  id: number;
  axis: Axis;
  category: Category;
  /** shown as a small hint under behavior questions, e.g. "최근 3개월" */
  context?: string;
  text: string;
  reverse: boolean;
}

/** questionId -> 1~5 Likert response */
export type Answers = Record<number, number>;

export interface PersonalityType {
  code: TypeCode;
  name: string;
  tagline: string;
  strengths: string[];
  cautions: string[];
  firstAction: string;
}

export interface AxisScore {
  trait: number;
  behavior: number;
  gap: number;
  gapTier: GapTier;
}

export interface ScoringResult {
  planning: AxisScore;
  risk: AxisScore;
  impulsivity: number;
  avoidance: number;
  impulsivityFlag: boolean;
  avoidanceFlag: boolean;
  typeCode: TypeCode;
  isBoundary: boolean;
  boundaryAxes: Axis[];
}
