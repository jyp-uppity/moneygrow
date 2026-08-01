import React, { useState } from 'react';
import { QUESTIONS } from '../data/assessmentData';
import { calculateResult } from '../utils/calculator';
import { ArrowLeft, ArrowRight, CheckCircle, Sparkles, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Assessment({ onComplete, setTab }) {
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);

  const currentQ = QUESTIONS[currentIndex];
  const progress = Math.round(((currentIndex + 1) / QUESTIONS.length) * 100);

  const handleSelect = (value) => {
    setAnswers(prev => ({ ...prev, [currentQ.id]: value }));
  };

  const handleNext = () => {
    if (!answers[currentQ.id]) {
      alert('답변을 선택해 주세요!');
      return;
    }
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Finished all 20 questions
      handleSubmit();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    setIsAnalyzing(true);
    setAnalysisStep(1);

    setTimeout(() => {
      setAnalysisStep(2);
    }, 900);

    setTimeout(() => {
      setAnalysisStep(3);
    }, 1800);

    setTimeout(() => {
      const result = calculateResult(answers);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      setIsAnalyzing(false);
      onComplete(result);
    }, 2700);
  };

  if (isAnalyzing) {
    return (
      <div className="container animate-fade-in" style={{ padding: '100px 0', textAlign: 'center', maxWidth: '600px' }}>
        <div className="mg-card" style={{ padding: '50px 30px' }}>
          <Loader2 size={48} className="spin" style={{ color: 'var(--gold)', margin: '0 auto 24px', animation: 'spin 1.5s linear infinite' }} />
          <h2 className="font-serif" style={{ fontSize: '26px', marginBottom: '16px' }}>
            재무성향 및 행동 리포트를 생성하고 있습니다
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left', marginTop: '30px' }}>
            <div style={{ color: analysisStep >= 1 ? 'var(--bottle)' : 'var(--muted)', fontWeight: analysisStep >= 1 ? '700' : '400' }}>
              {analysisStep >= 1 ? '✓' : '○'} 1. 계획성 및 위험선호 성향·행동 점수 산출 중...
            </div>
            <div style={{ color: analysisStep >= 2 ? 'var(--bottle)' : 'var(--muted)', fontWeight: analysisStep >= 2 ? '700' : '400' }}>
              {analysisStep >= 2 ? '✓' : '○'} 2. 4가지 성향 매트릭스 유형 판정 중...
            </div>
            <div style={{ color: analysisStep >= 3 ? 'var(--bottle)' : 'var(--muted)', fontWeight: analysisStep >= 3 ? '700' : '400' }}>
              {analysisStep >= 3 ? '✓' : '○'} 3. 충동성·회피성 지수 및 성향-행동 Gap 불일치 분석 중...
            </div>
          </div>
        </div>
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 0 80px', maxWidth: '720px' }}>
      {/* Header Info */}
      <div style={{ display: 'flex', justifyBetween: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <button 
          onClick={handlePrev} 
          disabled={currentIndex === 0}
          style={{
            border: 'none',
            background: 'transparent',
            color: currentIndex === 0 ? 'var(--muted)' : 'var(--ink)',
            cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '14px',
            fontWeight: '600'
          }}
        >
          <ArrowLeft size={16} /> 이전 문항
        </button>

        <span className="badge badge-bottle">
          문항 {currentIndex + 1} / {QUESTIONS.length}
        </span>
      </div>

      {/* Progress Bar */}
      <div style={{ height: '8px', background: 'var(--paper-deep)', borderRadius: '10px', overflow: 'hidden', marginBottom: '32px' }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, var(--bottle), var(--gold))',
          transition: 'width 0.3s ease'
        }} />
      </div>

      {/* Question Card */}
      <div className="mg-card" style={{ padding: '36px' }}>
        <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '8px' }}>
          {currentQ.axis === 'planning' ? '계획성 지표' : 
           currentQ.axis === 'risk' ? '위험선호 지표' : 
           currentQ.axis === 'impulsivity' ? '충동성 지표' : '회피성 지표'} 
          {' · '} 
          {currentQ.subType === 'trait' ? '성향 문항' : '최근 행동 문항'}
        </div>

        <h2 className="font-serif" style={{ fontSize: '22px', color: 'var(--ink)', marginBottom: '32px', lineHeight: 1.5 }}>
          Q{currentQ.id}. {currentQ.text}
        </h2>

        {/* 5 Likert Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
          {[
            { label: '전혀 그렇지 않다', value: 1 },
            { label: '그렇지 않다', value: 2 },
            { label: '보통이다', value: 3 },
            { label: '그렇다', value: 4 },
            { label: '매우 그렇다', value: 5 }
          ].map((option) => {
            const isSelected = answers[currentQ.id] === option.value;
            return (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                style={{
                  padding: '16px 20px',
                  borderRadius: '12px',
                  border: isSelected ? '2px solid var(--bottle)' : '1px solid var(--line)',
                  background: isSelected ? 'rgba(38, 68, 58, 0.08)' : 'var(--card)',
                  color: isSelected ? 'var(--bottle)' : 'var(--body)',
                  fontWeight: isSelected ? '700' : '500',
                  fontSize: '15px',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.15s ease'
                }}
              >
                <span>{option.label}</span>
                {isSelected && <CheckCircle size={18} style={{ color: 'var(--bottle)' }} />}
              </button>
            );
          })}
        </div>

        {/* Navigation Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button
            onClick={handleNext}
            className="btn-primary"
            style={{ padding: '12px 32px', fontSize: '15px' }}
          >
            {currentIndex === QUESTIONS.length - 1 ? (
              <>진단 결과 분석하기 <Sparkles size={16} /></>
            ) : (
              <>다음 문항 <ArrowRight size={16} /></>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
