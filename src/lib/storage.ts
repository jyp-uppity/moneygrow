import type { Answers, ScoringResult } from './types';

const ANSWERS_KEY = 'moneygrow.survey.answers';
const RESULT_KEY = 'moneygrow.survey.result';

export function loadAnswers(): Answers | null {
  const raw = localStorage.getItem(ANSWERS_KEY);
  return raw ? (JSON.parse(raw) as Answers) : null;
}

export function saveAnswers(answers: Answers): void {
  localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
}

export function clearAnswers(): void {
  localStorage.removeItem(ANSWERS_KEY);
}

export function loadResult(): ScoringResult | null {
  const raw = localStorage.getItem(RESULT_KEY);
  return raw ? (JSON.parse(raw) as ScoringResult) : null;
}

export function saveResult(result: ScoringResult): void {
  localStorage.setItem(RESULT_KEY, JSON.stringify(result));
}

export function clearResult(): void {
  localStorage.removeItem(RESULT_KEY);
}

export function resetAll(): void {
  clearAnswers();
  clearResult();
}
