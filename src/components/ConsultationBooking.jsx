import React, { useState } from 'react';
import { COACHES } from '../data/assessmentData';
import { Calendar, Clock, Video, CheckCircle2, User, CreditCard, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ConsultationBooking({ result, onBookingComplete, bookingState }) {
  const [step, setStep] = useState(1);
  const [selectedCoach, setSelectedCoach] = useState(COACHES[0]);
  const [selectedDate, setSelectedDate] = useState('2026-08-01 (토)');
  const [selectedTime, setSelectedTime] = useState('14:00');
  const [answers, setAnswers] = useState({
    worry: '월급은 일정한데 돈이 어디로 새어나가는지 모르겠고 저축과 투자 비율이 맞는지 확신이 없습니다.',
    anxiety: '작년 주식 하락장 때 불안해서 손절을 고민했던 순간입니다.',
    goal: '3년 안에 비상금 1,000만 원 확보 및 내집마련 보증금 모으기',
    habit: '매달 연금저축에 20만 원씩 꾸준히 납입하고 있습니다.',
    expect: '제 성향에 딱 맞는 구체적인 지출 예산 한도와 자동이체 금액을 확정하고 싶습니다.'
  });
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSampleReport, setShowSampleReport] = useState(false);

  const handleInputChange = (field, val) => {
    setAnswers(prev => ({ ...prev, [field]: val }));
  };

  const handlePaymentConfirm = () => {
    setShowPaymentModal(false);
    confetti({ particleCount: 70, spread: 60 });
    onBookingComplete({
      coach: selectedCoach,
      date: selectedDate,
      time: selectedTime,
      answers,
      zoomUrl: 'https://us06web.zoom.us/j/89230198421?pwd=MoneyGrowConsult'
    });
    setStep(3); // Completed step
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 0 80px', maxWidth: '900px' }}>
      {/* Top Banner */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span className="badge badge-gold" style={{ marginBottom: '8px' }}>2단계 · 방향 설정</span>
        <h1 className="font-serif" style={{ fontSize: '32px', color: 'var(--ink)' }}>1:1 성향 맞춤 전문 재무상담</h1>
        <p style={{ fontSize: '15px', color: 'var(--muted)', marginTop: '4px' }}>
          금융상품 영업 0% · 100% Fee 기반의 중립적인 50분 1:1 맞춤 화상 솔루션
        </p>
      </div>

      {bookingState ? (
        /* Completed Booking State Card */
        <div className="mg-card" style={{ padding: '40px', background: 'var(--paper-deep)' }}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <CheckCircle2 size={56} style={{ color: 'var(--bottle)', margin: '0 auto 12px' }} />
            <h2 className="font-serif" style={{ fontSize: '26px' }}>재무상담 예약이 확정되었습니다!</h2>
            <p style={{ fontSize: '14px', color: 'var(--muted)' }}>입력하신 연락처로 안내 문자 및 카카오톡 알림톡이 발송되었습니다.</p>
          </div>

          <div style={{ background: 'var(--card)', padding: '24px', borderRadius: '14px', marginBottom: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase' }}>담당 상담사</div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--ink)' }}>{bookingState.coach.name} ({bookingState.coach.title})</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase' }}>일시</div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--ink)' }}>{bookingState.date} {bookingState.time}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase' }}>진행 방식</div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--bottle)' }}>비대면 Zoom 1:1 화상상담</div>
              </div>
            </div>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600' }}>
                <Video size={18} style={{ color: 'var(--bottle)' }} /> Zoom 입장 링크:
                <a href={bookingState.zoomUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>
                  {bookingState.zoomUrl}
                </a>
              </div>
              <button 
                onClick={() => setShowSampleReport(true)}
                className="btn-outline" 
                style={{ padding: '6px 14px', fontSize: '12px' }}
              >
                <FileText size={14} /> 상담 결과 요약서 미리보기 샘플
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Booking Flow Steps */
        <div className="mg-card" style={{ padding: '36px' }}>
          {/* Step Indicator */}
          <div style={{ display: 'flex', gap: '12px', borderBottom: '1px solid var(--line)', paddingBottom: '20px', marginBottom: '32px' }}>
            <div style={{ flex: 1, padding: '10px', borderRadius: '8px', background: step === 1 ? 'var(--paper-deep)' : 'transparent', fontWeight: step === 1 ? '700' : '400', fontSize: '14px', color: step === 1 ? 'var(--ink)' : 'var(--muted)' }}>
              1. 사전 고민 작성
            </div>
            <div style={{ flex: 1, padding: '10px', borderRadius: '8px', background: step === 2 ? 'var(--paper-deep)' : 'transparent', fontWeight: step === 2 ? '700' : '400', fontSize: '14px', color: step === 2 ? 'var(--ink)' : 'var(--muted)' }}>
              2. 코치 및 일정 선택
            </div>
          </div>

          {step === 1 && (
            <div>
              <h3 className="font-serif" style={{ fontSize: '20px', marginBottom: '8px' }}>상담 사전 문답 작성</h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '24px' }}>
                상담사가 사전에 고객님의 현황을 정확히 파악하고 맞춤형 피드백을 준비하기 위한 5가지 주관식 질문입니다.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', marginBottom: '6px' }}>
                    Q1. 지금 가장 해결하고 싶은 돈 고민은 무엇인가요?
                  </label>
                  <textarea 
                    rows={3} 
                    value={answers.worry} 
                    onChange={e => handleInputChange('worry', e.target.value)}
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--line)', fontFamily: 'inherit', fontSize: '14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', marginBottom: '6px' }}>
                    Q2. 최근 1년 동안 돈 문제로 가장 불안했던 순간은 언제인가요?
                  </label>
                  <textarea 
                    rows={2} 
                    value={answers.anxiety} 
                    onChange={e => handleInputChange('anxiety', e.target.value)}
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--line)', fontFamily: 'inherit', fontSize: '14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', marginBottom: '6px' }}>
                    Q3. 1~3년 안에 이루고 싶은 목표가 있나요? (예: 내집마련 보증금, 이직 자금 등)
                  </label>
                  <textarea 
                    rows={2} 
                    value={answers.goal} 
                    onChange={e => handleInputChange('goal', e.target.value)}
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--line)', fontFamily: 'inherit', fontSize: '14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', marginBottom: '6px' }}>
                    Q4. 현재 잘하고 있다고 생각하는 습관과 이번 상담에서 꼭 알고 싶은 것은?
                  </label>
                  <textarea 
                    rows={2} 
                    value={answers.expect} 
                    onChange={e => handleInputChange('expect', e.target.value)}
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--line)', fontFamily: 'inherit', fontSize: '14px' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={() => setStep(2)} className="btn-primary" style={{ padding: '12px 28px' }}>
                  코치 및 일정 선택하기 <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="font-serif" style={{ fontSize: '20px', marginBottom: '16px' }}>전문 재무 코치 선택</h3>
              
              {/* Coach Cards Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '32px' }}>
                {COACHES.map((coach) => {
                  const isSel = selectedCoach.id === coach.id;
                  return (
                    <div 
                      key={coach.id}
                      onClick={() => setSelectedCoach(coach)}
                      style={{
                        background: isSel ? 'rgba(38, 68, 58, 0.06)' : 'var(--card)',
                        border: isSel ? '2px solid var(--bottle)' : '1px solid var(--line)',
                        borderRadius: '12px',
                        padding: '16px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <img src={coach.image} alt={coach.name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
                      <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--ink)' }}>{coach.name}</div>
                      <div style={{ fontSize: '12px', color: 'var(--gold)', fontWeight: '600', marginBottom: '6px' }}>{coach.title}</div>
                      <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '0 0 10px', height: '36px', overflow: 'hidden' }}>{coach.specialty}</p>
                      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                        {coach.tags.map((t, idx) => (
                          <span key={idx} className="badge badge-gold" style={{ fontSize: '10px', padding: '2px 6px' }}>#{t}</span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Date & Time Select */}
              <h3 className="font-serif" style={{ fontSize: '20px', marginBottom: '16px' }}>상담 날짜 및 시간 선택</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '6px' }}>상담 날짜</label>
                  <select 
                    value={selectedDate} 
                    onChange={e => setSelectedDate(e.target.value)}
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '14px' }}
                  >
                    <option value="2026-08-01 (토)">2026-08-01 (토요일)</option>
                    <option value="2026-08-02 (일)">2026-08-02 (일요일)</option>
                    <option value="2026-08-05 (수)">2026-08-05 (수요일)</option>
                    <option value="2026-08-08 (토)">2026-08-08 (토요일)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '6px' }}>시간 슬롯</label>
                  <select 
                    value={selectedTime} 
                    onChange={e => setSelectedTime(e.target.value)}
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '14px' }}
                  >
                    <option value="11:00">11:00 ~ 11:50</option>
                    <option value="14:00">14:00 ~ 14:50 (추천)</option>
                    <option value="16:00">16:00 ~ 16:50</option>
                    <option value="19:30">19:30 ~ 20:20 (야간)</option>
                  </select>
                </div>
              </div>

              {/* Price & Action */}
              <div style={{ background: 'var(--paper-deep)', padding: '20px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)' }}>머니그로우 플랜 패키지 우대 적용</div>
                  <div style={{ fontSize: '20px', fontWeight: '700', color: 'var(--ink)' }}>119,000원</div>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--muted)', textAlign: 'right' }}>
                  상담사 배분액 83,300원 (70%)<br />어피티 중립 플랫폼 수수료 35,700원 (30%)
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={() => setStep(1)} className="btn-outline">← 이전 질문 수정</button>
                <button onClick={() => setShowPaymentModal(true)} className="btn-gold" style={{ padding: '12px 32px' }}>
                  119,000원 결제 및 예약 확정
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Payment Modal Simulation */}
      {showPaymentModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100
        }}>
          <div className="mg-card animate-fade-in" style={{ maxWidth: '440px', width: '90%', padding: '32px' }}>
            <h3 className="font-serif" style={{ fontSize: '22px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CreditCard size={20} style={{ color: 'var(--bottle)' }} /> 머니그로우 상담 안심 결제
            </h3>
            
            <div style={{ background: 'var(--paper)', padding: '16px', borderRadius: '10px', fontSize: '14px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: 'var(--muted)' }}>상품명</span>
                <span style={{ fontWeight: '600' }}>{selectedCoach.name} 1:1 재무상담 (50분)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: 'var(--muted)' }}>일시</span>
                <span style={{ fontWeight: '600' }}>{selectedDate} {selectedTime}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px', borderTop: '1px solid var(--line)' }}>
                <span style={{ fontWeight: '700' }}>최종 결제 금액</span>
                <span style={{ fontWeight: '700', fontSize: '18px', color: 'var(--gold)' }}>119,000원</span>
              </div>
            </div>

            <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '24px' }}>
              🔒 본 서비스는 금융상품 판매 수수료를 전혀 취하지 않는 독립형 Fee-only 상담입니다. 상담 24시간 전까지 100% 취소 환불이 가능합니다.
            </p>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => setShowPaymentModal(false)} className="btn-outline" style={{ flex: 1 }}>취소</button>
              <button onClick={handlePaymentConfirm} className="btn-primary" style={{ flex: 2, justifyContent: 'center' }}>
                테스트 결제 완료
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sample Summary Report Modal */}
      {showSampleReport && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100
        }}>
          <div className="mg-card animate-fade-in" style={{ maxWidth: '640px', width: '90%', maxHeight: '85vh', overflowY: 'auto', padding: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span className="badge badge-gold">상담 결과 요약서 미리보기 샘플</span>
              <button onClick={() => setShowSampleReport(false)} style={{ border: 'none', background: 'transparent', fontSize: '18px', cursor: 'pointer' }}>✕</button>
            </div>

            <h3 className="font-serif" style={{ fontSize: '22px', marginBottom: '12px' }}>
              이지은 코치의 1:1 상담 요약 리포트 (예시)
            </h3>

            <div style={{ background: 'var(--paper)', padding: '20px', borderRadius: '12px', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
              <h4 style={{ color: 'var(--bottle)', fontSize: '15px', marginBottom: '8px' }}>1. 현금흐름 및 자산 현황 해설</h4>
              <p style={{ margin: '0 0 12px' }}>
                현재 세후 소득 420만 원 중 저축률은 24% 수준으로 ‘설계가형’ 성향 대비 실행 저축률이 약 15% 낮습니다. 
                불필요한 배달비 및 미사용 고정비(약 35만 원)를 정리하면 월 저축액을 140만 원까지 늘릴 수 있습니다.
              </p>

              <h4 style={{ color: 'var(--bottle)', fontSize: '15px', marginBottom: '8px' }}>2. 합의된 핵심 목표 2가지</h4>
              <ul style={{ paddingLeft: '18px', margin: '0 0 12px' }}>
                <li>목표 1: 파킹통장에 비상금 1,000만 원 분리 완료 (3개월 내)</li>
                <li>목표 2: 월 50만 원 미국 스탠더드앤드푸어스(S&P)500 ETF 적립식 투자 자동이체 설정</li>
              </ul>

              <h4 style={{ color: 'var(--bottle)', fontSize: '15px', marginBottom: '8px' }}>3. 3단계 루틴관리 추천 미션</h4>
              <p style={{ margin: 0 }}>
                매월 10일 월급날 다음날에 저축 계좌로 자동이체 3건을 일괄 이체하도록 은행 앱 예약 설정을 실행하세요.
              </p>
            </div>

            <button onClick={() => setShowSampleReport(false)} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              확인 완료
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
