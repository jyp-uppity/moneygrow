import { useState } from 'react';
import Landing from './components/Landing';
import Survey from './components/Survey';
import Report from './components/Report';
import { computeScores, isSurveyComplete } from './lib/scoring';
import { clearAnswers, loadAnswers, loadResult, resetAll, saveAnswers, saveResult } from './lib/storage';
import type { Answers, ScoringResult } from './lib/types';

type View = 'landing' | 'survey' | 'report';

function App() {
  const [view, setView] = useState<View>('landing');
  const [answers, setAnswers] = useState<Answers>(() => loadAnswers() ?? {});
  const [result, setResult] = useState<ScoringResult | null>(() => loadResult());

  const hasInProgress = Object.keys(answers).length > 0 && !isSurveyComplete(answers);
  const hasResult = result != null;

  function handleStart() {
    setAnswers({});
    clearAnswers();
    setView('survey');
  }

  function handleResume() {
    setView('survey');
  }

  function handleViewResult() {
    setView('report');
  }

  function handleAnswer(questionId: number, value: number) {
    setAnswers((prev) => {
      const next = { ...prev, [questionId]: value };
      saveAnswers(next);
      return next;
    });
  }

  function handleComplete() {
    if (!isSurveyComplete(answers)) return;
    const computed = computeScores(answers);
    setResult(computed);
    saveResult(computed);
    clearAnswers();
    setAnswers({});
    setView('report');
  }

  function handleRetake() {
    resetAll();
    setAnswers({});
    setResult(null);
    setView('landing');
  }

  if (view === 'survey') {
    return <Survey answers={answers} onAnswer={handleAnswer} onComplete={handleComplete} />;
  }

  if (view === 'report' && result) {
    return <Report result={result} onRetake={handleRetake} />;
  }

  return (
    <Landing
      hasInProgress={hasInProgress}
      hasResult={hasResult}
      onStart={handleStart}
      onResume={handleResume}
      onViewResult={handleViewResult}
    />
  );
}

export default App;
