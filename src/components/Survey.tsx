import { useMemo, useState } from 'react';
import { questions, LIKERT_LABELS } from '../data/questions';
import type { Answers } from '../lib/types';

interface SurveyProps {
  answers: Answers;
  onAnswer: (questionId: number, value: number) => void;
  onComplete: () => void;
}

const AXIS_LABEL: Record<string, string> = {
  planning: '계획성',
  risk: '위험선호',
  impulsivity: '충동성',
  avoidance: '회피성',
};

function firstUnansweredIndex(answers: Answers): number {
  const idx = questions.findIndex((q) => answers[q.id] == null);
  return idx === -1 ? questions.length - 1 : idx;
}

export default function Survey({ answers, onAnswer, onComplete }: SurveyProps) {
  const [index, setIndex] = useState(() => firstUnansweredIndex(answers));
  const question = questions[index];
  const selected = answers[question.id];
  const isLast = index === questions.length - 1;

  const progressPct = useMemo(() => Math.round((index / questions.length) * 100), [index]);

  function goNext() {
    if (isLast) {
      onComplete();
      return;
    }
    setIndex((i) => Math.min(i + 1, questions.length - 1));
  }

  function goPrev() {
    setIndex((i) => Math.max(i - 1, 0));
  }

  return (
    <div className="screen">
      <div className="progress-head">
        <span>{AXIS_LABEL[question.axis]} 문항</span>
        <b>{index + 1} / {questions.length}</b>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progressPct}%` }} />
      </div>

      <div style={{ marginTop: 32 }}>
        <span className="q-axis-tag">{question.category === 'trait' ? '성향' : '행동'}</span>
        {question.context && <div className="q-context">{question.context}</div>}
        <div className="q-text">{question.text}</div>

        <div className="likert" role="radiogroup" aria-label={question.text}>
          {LIKERT_LABELS.map((label, i) => {
            const value = i + 1;
            const isSelected = selected === value;
            return (
              <button
                key={value}
                type="button"
                role="radio"
                aria-checked={isSelected}
                className={`likert-option${isSelected ? ' selected' : ''}`}
                onClick={() => onAnswer(question.id, value)}
              >
                <span className="dot" />
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="survey-nav">
        <button className="btn btn-ghost" onClick={goPrev} disabled={index === 0}>
          이전
        </button>
        <button className="btn btn-primary" onClick={goNext} disabled={selected == null}>
          {isLast ? '결과 보기' : '다음'}
        </button>
      </div>
    </div>
  );
}
