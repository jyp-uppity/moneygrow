import React, { useState } from 'react';
import { INITIAL_ROUTINES } from '../data/assessmentData';
import { CheckSquare, Flame, MessageSquare, BookOpen, Sparkles, Send, CheckCircle2, ChevronRight, Bell } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RoutineDashboard() {
  const [activeTab, setActiveTab] = useState('missions'); // 'missions' | 'qna' | 'articles'
  const [routines, setRoutines] = useState(INITIAL_ROUTINES);
  const [streak, setStreak] = useState(14);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      date: '2026.07.25',
      question: '연금저축 펀드와 연금저축 보험의 차이가 궁금해요. 세액공제 한도를 채우려면 어느 쪽이 나은가요?',
      answer: '안녕하세요 나영님! 연금저축 펀드는 수수료가 낮고 ETF 등 유연한 투자가 가능한 반면 원금 보장이 되지 않습니다. 직장인 절세 및 성향(설계가형)을 고려하면 수수료가 저렴한 연금저축 펀드에서 글로벌 주가지수 ETF에 적립식 투자하시는 것을 적극 추천합니다. (담당 이지은 코치)',
      status: '답변완료'
    }
  ]);
  const [newQuestionText, setNewQuestionText] = useState('');
  const [newQuestionSuccess, setNewQuestionSuccess] = useState(false);

  const toggleRoutine = (id) => {
    setRoutines(prev => prev.map(item => {
      if (item.id === id) {
        const nextState = !item.completed;
        if (nextState) {
          confetti({ particleCount: 40, spread: 50, origin: { y: 0.7 } });
        }
        return { ...item, completed: nextState };
      }
      return item;
    }));
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (!newQuestionText.trim()) return;

    const newQ = {
      id: Date.now(),
      date: '2026.07.29 (방금)',
      question: newQuestionText,
      answer: null,
      status: '접수완료 (48시간 이내 코치 피드백 예정)'
    };

    setQuestions(prev => [newQ, ...prev]);
    setNewQuestionText('');
    setNewQuestionSuccess(true);
    setTimeout(() => setNewQuestionSuccess(false), 4000);
  };

  const completedCount = routines.filter(r => r.completed).length;
  const progressPercent = Math.round((completedCount / routines.length) * 100);

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 0 80px', maxWidth: '960px' }}>
      {/* Header Dashboard Status */}
      <div style={{
        background: 'linear-gradient(135deg, var(--bottle-deep), var(--bottle))',
        color: '#EDEFE4',
        borderRadius: '20px',
        padding: '32px',
        marginBottom: '32px',
        boxShadow: 'var(--shadow)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="badge badge-gold">3단계 · 행동 지속</span>
              <span style={{ fontSize: '13px', color: 'var(--gold-soft)' }}>월 29,800원 구독 이용 중</span>
            </div>
            <h1 className="font-serif" style={{ fontSize: '28px', color: '#F6F7EF', margin: 0 }}>
              김나영님의 재무루틴 관리실
            </h1>
            <p style={{ fontSize: '14px', color: 'rgba(237,239,228,0.75)', marginTop: '4px' }}>
              담당 코치: 이지은 CFP · 목표: 비상금 1,000만 원 및 지출 자동화 시스템
            </p>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ background: 'rgba(255,255,255,0.08)', padding: '14px 20px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '11px', color: 'var(--gold-soft)', textTransform: 'uppercase' }}>연속 실천 (Streak)</div>
              <div style={{ fontSize: '24px', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <Flame size={20} style={{ color: '#FF7D42' }} /> {streak + completedCount}일째
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.08)', padding: '14px 20px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '11px', color: 'var(--gold-soft)', textTransform: 'uppercase' }}>주간 미션 달성률</div>
              <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--gold-soft)' }}>
                {progressPercent}%
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{ marginTop: '24px', height: '8px', background: 'rgba(255,255,255,0.15)', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${progressPercent}%`, background: 'var(--gold-soft)', transition: 'width 0.3s ease' }} />
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '10px', borderBottom: '1px solid var(--line)', marginBottom: '28px', paddingBottom: '4px' }}>
        <button
          onClick={() => setActiveTab('missions')}
          style={{
            padding: '10px 20px',
            border: 'none',
            background: activeTab === 'missions' ? 'var(--paper-deep)' : 'transparent',
            borderRadius: '20px',
            fontWeight: activeTab === 'missions' ? '700' : '500',
            fontSize: '15px',
            color: activeTab === 'missions' ? 'var(--ink)' : 'var(--muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <CheckSquare size={18} /> 주간 실천 미션 ({completedCount}/{routines.length})
        </button>

        <button
          onClick={() => setActiveTab('qna')}
          style={{
            padding: '10px 20px',
            border: 'none',
            background: activeTab === 'qna' ? 'var(--paper-deep)' : 'transparent',
            borderRadius: '20px',
            fontWeight: activeTab === 'qna' ? '700' : '500',
            fontSize: '15px',
            color: activeTab === 'qna' ? 'var(--ink)' : 'var(--muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <MessageSquare size={18} /> 코치 1:1 Q&A ({questions.length})
        </button>

        <button
          onClick={() => setActiveTab('articles')}
          style={{
            padding: '10px 20px',
            border: 'none',
            background: activeTab === 'articles' ? 'var(--paper-deep)' : 'transparent',
            borderRadius: '20px',
            fontWeight: activeTab === 'articles' ? '700' : '500',
            fontSize: '15px',
            color: activeTab === 'articles' ? 'var(--ink)' : 'var(--muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <BookOpen size={18} /> 어피티 픽 프리미엄 아티클
        </button>
      </div>

      {/* TAB 1: MISSIONS */}
      {activeTab === 'missions' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 className="font-serif" style={{ fontSize: '20px' }}>이번 주 맞춤 실천 미션</h3>
            <span style={{ fontSize: '13px', color: 'var(--muted)' }}>클릭하여 완료 상태를 변경하세요</span>
          </div>

          {routines.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleRoutine(item.id)}
              className="mg-card"
              style={{
                padding: '20px 24px',
                cursor: 'pointer',
                borderLeft: item.completed ? '5px solid var(--bottle)' : '1px solid var(--line)',
                background: item.completed ? 'rgba(38, 68, 58, 0.04)' : 'var(--card)',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <input 
                  type="checkbox" 
                  checked={item.completed} 
                  onChange={() => {}} // Handled by div onClick
                  style={{ width: '20px', height: '20px', marginTop: '2px', cursor: 'pointer', accentColor: 'var(--bottle)' }}
                />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span className="badge badge-gold" style={{ fontSize: '10px' }}>{item.category}</span>
                    <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{item.day} 미션</span>
                  </div>
                  <h4 style={{
                    fontSize: '17px',
                    color: item.completed ? 'var(--muted)' : 'var(--ink)',
                    textDecoration: item.completed ? 'line-through' : 'none'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '4px 0 0' }}>
                    {item.desc}
                  </p>
                </div>
              </div>

              {item.completed ? (
                <span className="badge badge-bottle" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <CheckCircle2 size={12} /> 수행 완료
                </span>
              ) : (
                <span className="badge badge-rust" style={{ background: 'var(--paper-deep)', color: 'var(--muted)' }}>
                  진행 중
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: Q&A */}
      {activeTab === 'qna' && (
        <div>
          {/* Ask Form */}
          <div className="mg-card" style={{ padding: '24px', marginBottom: '32px' }}>
            <h3 className="font-serif" style={{ fontSize: '18px', marginBottom: '8px' }}>
              담당 이지은 코치에게 질문하기 (주 1회 제공)
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px' }}>
              돈 관리 과정에서 막히는 부분이나 금융상품/지출에 관한 궁금증을 남겨주시면 48시간 이내에 100% 맞춤 답변을 드립니다.
            </p>

            <form onSubmit={handleQuestionSubmit}>
              <textarea
                rows={3}
                placeholder="예: 예금 이자와 적금 이자의 구체적인 계산 차이와 이번 달 남은 여유자금 50만 원의 최적 배치 방법이 궁금합니다."
                value={newQuestionText}
                onChange={e => setNewQuestionText(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '10px',
                  border: '1px solid var(--line)',
                  fontSize: '14px',
                  fontFamily: 'inherit',
                  marginBottom: '12px'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
                  * 고도의 세무/법률 및 개별 종목 투자 추천은 제한됩니다.
                </span>
                <button type="submit" className="btn-primary" style={{ padding: '8px 20px', fontSize: '14px' }}>
                  질문 접수하기 <Send size={14} />
                </button>
              </div>
            </form>

            {newQuestionSuccess && (
              <div style={{ marginTop: '12px', padding: '10px 14px', background: 'rgba(38,68,58,0.1)', color: 'var(--bottle)', borderRadius: '8px', fontSize: '13px', fontWeight: '600' }}>
                ✓ 질문이 성공적으로 접수되었습니다. 48시간 이내에 전담 코치가 작성한 답변 알림이 전달됩니다.
              </div>
            )}
          </div>

          {/* Question List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 className="font-serif" style={{ fontSize: '18px' }}>나의 Q&A 히스토리</h3>
            {questions.map((q) => (
              <div key={q.id} className="mg-card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span className="badge badge-gold" style={{ fontSize: '10px' }}>{q.date}</span>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: q.answer ? 'var(--bottle)' : 'var(--gold)' }}>
                    {q.status}
                  </span>
                </div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--ink)', marginBottom: '12px' }}>
                  Q. {q.question}
                </div>

                {q.answer ? (
                  <div style={{ background: 'var(--paper)', padding: '16px', borderRadius: '10px', fontSize: '14px', lineHeight: 1.6, borderLeft: '4px solid var(--bottle)' }}>
                    <div style={{ fontWeight: '700', color: 'var(--bottle)', marginBottom: '4px' }}>A. 담당 코치 피드백</div>
                    {q.answer}
                  </div>
                ) : (
                  <div style={{ fontSize: '13px', color: 'var(--muted)', fontStyle: 'italic' }}>
                    ⏳ 상담 코치가 질문 내용을 정밀 분석 후 48시간 이내 답변을 작성 중입니다.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: PREMIUM ARTICLES */}
      {activeTab === 'articles' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {[
            {
              title: '사회초년생을 위한 통장 쪼개기 4단계 완벽 가이드',
              category: '현금흐름',
              readTime: '5분 읽기',
              desc: '월급통장, 소비통장, 비상금통장, 투자통장으로 자동 분리하는 스마트한 세팅법.'
            },
            {
              title: '2026 연금저축펀드 vs IRP 최적 납입 비율 공개',
              category: '절세/연금',
              readTime: '7분 읽기',
              desc: '연 900만 원 세액공제 혜택을 100% 챙기는 직장인 전용 연금 세팅 가이드.'
            },
            {
              title: '설계가형(P·G)을 위한 분석 마비 극복과 자동이체 규칙',
              category: '성향 가이드',
              readTime: '4분 읽기',
              desc: '타이밍을 지나치게 분석하다 기회를 놓치지 않는 정액 적립식 투자 전략.'
            }
          ].map((art, idx) => (
            <div key={idx} className="mg-card" style={{ padding: '24px', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--muted)', marginBottom: '8px' }}>
                  <span className="badge badge-gold">{art.category}</span>
                  <span>{art.readTime}</span>
                </div>
                <h4 style={{ fontSize: '18px', color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.4 }}>
                  {art.title}
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>
                  {art.desc}
                </p>
              </div>

              <div style={{ marginTop: '20px', color: 'var(--bottle)', fontWeight: '700', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                아티클 전문 읽기 <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
