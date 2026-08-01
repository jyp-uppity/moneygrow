import React from 'react';
import { ArrowRight, AlertTriangle, CheckCircle2, Printer, Sparkles, HelpCircle, Target, TrendingUp, Compass } from 'lucide-react';

export default function ReportView({ result, setTab }) {
  if (!result) return null;

  const { typeInfo, scores, gap, warnings, suggestedQuestions, isBoundary } = result;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 0 80px', maxWidth: '960px' }}>
      {/* Action Bar (Top) */}
      <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <button 
          onClick={() => setTab('assessment')}
          className="btn-outline" 
          style={{ padding: '8px 16px', fontSize: '13px' }}
        >
          ← 다시 진단하기
        </button>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={handlePrint}
            className="btn-outline"
            style={{ padding: '8px 16px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Printer size={14} /> PDF 인쇄 / 저장
          </button>
          <button 
            onClick={() => setTab('booking')}
            className="btn-gold"
            style={{ padding: '8px 20px', fontSize: '13px' }}
          >
            2단계 상담 연결 <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Main Report Card */}
      <div className="mg-card" style={{ padding: '40px', background: '#FBFBF6' }}>
        {/* Header Badge & Title */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', borderBottom: '1px solid var(--line)', paddingBottom: '24px', marginBottom: '32px' }}>
          <div>
            <span className="badge badge-gold" style={{ marginBottom: '8px' }}>MoneyGrow Personality Report</span>
            <h1 className="font-serif" style={{ fontSize: '36px', color: 'var(--ink)', lineHeight: 1.2 }}>
              나의 재무성향: <span style={{ color: 'var(--bottle)' }}>{typeInfo.name}</span> ({typeInfo.code})
            </h1>
            <p className="font-serif" style={{ fontSize: '18px', fontStyle: 'italic', color: 'var(--gold)', marginTop: '4px' }}>
              "{typeInfo.tagline}"
            </p>
          </div>

          <div style={{ background: 'var(--paper-deep)', padding: '16px 20px', borderRadius: '12px', textAlign: 'right' }}>
            <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase' }}>진단 일시</div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--ink)' }}>2026.07.29</div>
          </div>
        </div>

        {/* 2x2 Matrix & Placement */}
        <div style={{ marginBottom: '40px' }}>
          <h3 className="font-serif" style={{ fontSize: '20px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Compass size={20} style={{ color: 'var(--gold)' }} /> 4대 재무성향 2x2 매트릭스 위치
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: '12px',
            background: 'var(--paper-deep)',
            padding: '16px',
            borderRadius: '16px',
            position: 'relative'
          }}>
            {/* Cell 1: PG */}
            <div style={{
              background: typeInfo.code === 'P · G' ? 'var(--bottle)' : 'var(--card)',
              color: typeInfo.code === 'P · G' ? '#F2F4EC' : 'var(--ink)',
              padding: '20px',
              borderRadius: '12px',
              border: typeInfo.code === 'P · G' ? '2px solid var(--gold)' : '1px solid var(--line)',
              position: 'relative'
            }}>
              <div style={{ fontSize: '11px', opacity: 0.8, fontWeight: 700 }}>P + G (계획형 + 성장추구)</div>
              <div style={{ fontSize: '18px', fontWeight: 700, margin: '4px 0' }}>설계가형</div>
              <div style={{ fontSize: '12px', opacity: 0.85 }}>계획하고, 키운다</div>
              {typeInfo.code === 'P · G' && (
                <span className="badge badge-gold" style={{ position: 'absolute', top: '12px', right: '12px' }}>YOU</span>
              )}
            </div>

            {/* Cell 2: SG */}
            <div style={{
              background: typeInfo.code === 'S · G' ? 'var(--bottle)' : 'var(--card)',
              color: typeInfo.code === 'S · G' ? '#F2F4EC' : 'var(--ink)',
              padding: '20px',
              borderRadius: '12px',
              border: typeInfo.code === 'S · G' ? '2px solid var(--gold)' : '1px solid var(--line)',
              position: 'relative'
            }}>
              <div style={{ fontSize: '11px', opacity: 0.8, fontWeight: 700 }}>S + G (즉흥형 + 성장추구)</div>
              <div style={{ fontSize: '18px', fontWeight: 700, margin: '4px 0' }}>모험가형</div>
              <div style={{ fontSize: '12px', opacity: 0.85 }}>기회를 보면, 움직인다</div>
              {typeInfo.code === 'S · G' && (
                <span className="badge badge-gold" style={{ position: 'absolute', top: '12px', right: '12px' }}>YOU</span>
              )}
            </div>

            {/* Cell 3: PA */}
            <div style={{
              background: typeInfo.code === 'P · A' ? 'var(--bottle)' : 'var(--card)',
              color: typeInfo.code === 'P · A' ? '#F2F4EC' : 'var(--ink)',
              padding: '20px',
              borderRadius: '12px',
              border: typeInfo.code === 'P · A' ? '2px solid var(--gold)' : '1px solid var(--line)',
              position: 'relative'
            }}>
              <div style={{ fontSize: '11px', opacity: 0.8, fontWeight: 700 }}>P + A (계획형 + 안정추구)</div>
              <div style={{ fontSize: '18px', fontWeight: 700, margin: '4px 0' }}>차곡차곡형</div>
              <div style={{ fontSize: '12px', opacity: 0.85 }}>계획하고, 지킨다</div>
              {typeInfo.code === 'P · A' && (
                <span className="badge badge-gold" style={{ position: 'absolute', top: '12px', right: '12px' }}>YOU</span>
              )}
            </div>

            {/* Cell 4: SA */}
            <div style={{
              background: typeInfo.code === 'S · A' ? 'var(--bottle)' : 'var(--card)',
              color: typeInfo.code === 'S · A' ? '#F2F4EC' : 'var(--ink)',
              padding: '20px',
              borderRadius: '12px',
              border: typeInfo.code === 'S · A' ? '2px solid var(--gold)' : '1px solid var(--line)',
              position: 'relative'
            }}>
              <div style={{ fontSize: '11px', opacity: 0.8, fontWeight: 700 }}>S + A (즉흥형 + 안정추구)</div>
              <div style={{ fontSize: '18px', fontWeight: 700, margin: '4px 0' }}>소확행형</div>
              <div style={{ fontSize: '12px', opacity: 0.85 }}>필요한 만큼, 편안하게</div>
              {typeInfo.code === 'S · A' && (
                <span className="badge badge-gold" style={{ position: 'absolute', top: '12px', right: '12px' }}>YOU</span>
              )}
            </div>
          </div>
          {isBoundary && (
            <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '8px' }}>
              ℹ️ 두 축의 점수가 45~55점 경계 영역에 위치하여, 환경에 따라 다른 성향으로 유연하게 나타날 수 있습니다.
            </p>
          )}
        </div>

        {/* Scores & Gap Analysis */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          {/* Score Bars */}
          <div style={{ background: 'var(--paper)', padding: '24px', borderRadius: '14px', border: '1px solid var(--line)' }}>
            <h4 style={{ fontSize: '16px', marginBottom: '16px' }}>지표별 상세 점수 (0~100점 정규화)</h4>
            
            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px' }}>
                <span>계획성 (성향 {scores.planningTrait}점 vs 행동 {scores.planningAction}점)</span>
                <span style={{ fontWeight: '700' }}>Gap {gap.planningGap}점</span>
              </div>
              <div style={{ height: '6px', background: 'var(--line)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${scores.planningTrait}%`, background: 'var(--bottle)' }} />
              </div>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px' }}>
                <span>위험선호 (성향 {scores.riskTrait}점 vs 행동 {scores.riskAction}점)</span>
                <span style={{ fontWeight: '700' }}>Gap {gap.riskGap}점</span>
              </div>
              <div style={{ height: '6px', background: 'var(--line)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${scores.riskTrait}%`, background: 'var(--gold)' }} />
              </div>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px' }}>
                <span>충동성 지수</span>
                <span style={{ fontWeight: '700', color: warnings.impulsivity ? 'var(--rust)' : 'var(--ink)' }}>
                  {scores.impulsivity}점 {warnings.impulsivity && '⚠️ 주의'}
                </span>
              </div>
              <div style={{ height: '6px', background: 'var(--line)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${scores.impulsivity}%`, background: warnings.impulsivity ? 'var(--rust)' : 'var(--body)' }} />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px' }}>
                <span>회피성 지수</span>
                <span style={{ fontWeight: '700', color: warnings.avoidance ? 'var(--rust)' : 'var(--ink)' }}>
                  {scores.avoidance}점 {warnings.avoidance && '⚠️ 주의'}
                </span>
              </div>
              <div style={{ height: '6px', background: 'var(--line)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${scores.avoidance}%`, background: warnings.avoidance ? 'var(--rust)' : 'var(--body)' }} />
              </div>
            </div>
          </div>

          {/* Gap Status Card */}
          <div style={{
            background: gap.maxGap >= 30 ? 'var(--rust-soft)' : 'var(--paper)',
            padding: '24px',
            borderRadius: '14px',
            border: gap.maxGap >= 30 ? '1px solid var(--rust)' : '1px solid var(--line)'
          }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: gap.maxGap >= 30 ? 'var(--rust)' : 'var(--gold)', marginBottom: '6px' }}>
              성향 vs 실제 행동 Gap 분석
            </div>
            <h4 style={{ fontSize: '18px', color: 'var(--ink)', marginBottom: '10px' }}>
              {gap.gapLevel} ({gap.maxGap}점 차이)
            </h4>
            <p style={{ fontSize: '14px', color: 'var(--body)', lineHeight: 1.6 }}>
              {gap.gapDesc}
            </p>
            {(warnings.impulsivity || warnings.avoidance) && (
              <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px dashed rgba(0,0,0,0.1)', fontSize: '13px', color: 'var(--rust)', fontWeight: '600' }}>
                💡 충동성 또는 회피성 지수가 높아 지출 브레이크 및 문서 관리 루틴이 필요합니다.
              </div>
            )}
          </div>
        </div>

        {/* Strengths & Pitfalls */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          <div style={{ background: 'var(--paper)', padding: '24px', borderRadius: '14px' }}>
            <h4 style={{ fontSize: '16px', color: 'var(--bottle)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={18} /> 재무생활의 강점 Top 3
            </h4>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none', fontSize: '14px' }}>
              {typeInfo.strengths.map((item, idx) => (
                <li key={idx} style={{ marginBottom: '10px', paddingLeft: '18px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--bottle)', fontWeight: 'bold' }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ background: 'var(--paper)', padding: '24px', borderRadius: '14px' }}>
            <h4 style={{ fontSize: '16px', color: 'var(--rust)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <AlertTriangle size={18} /> 주의해야 할 점 Top 3
            </h4>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none', fontSize: '14px' }}>
              {typeInfo.pitfalls.map((item, idx) => (
                <li key={idx} style={{ marginBottom: '10px', paddingLeft: '18px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--rust)', fontWeight: 'bold' }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* First Action Plan */}
        <div className="quote-block" style={{ margin: '0 0 40px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '4px' }}>
            🎯 머니그로우 제안 첫 번째 액션 플랜
          </div>
          <p style={{ fontSize: '16px', fontStyle: 'normal', fontWeight: 600 }}>
            {typeInfo.firstAction}
          </p>
        </div>

        {/* Suggested Questions for Consultation */}
        <div style={{ background: 'var(--paper-deep)', padding: '28px', borderRadius: '16px', marginBottom: '32px' }}>
          <h4 className="font-serif" style={{ fontSize: '18px', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HelpCircle size={20} style={{ color: 'var(--bottle)' }} /> 2단계 전문가 상담에서 꼭 물어볼 3가지 질문
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {suggestedQuestions.map((q, idx) => (
              <div key={idx} style={{ background: 'var(--card)', padding: '14px 18px', borderRadius: '10px', fontSize: '14px', fontWeight: '500' }}>
                <span style={{ color: 'var(--gold)', fontWeight: 'bold', marginRight: '8px' }}>Q{idx + 1}.</span> {q}
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Call to Action */}
        <div className="no-print" style={{
          background: 'linear-gradient(135deg, var(--bottle-deep), var(--bottle))',
          color: '#F2F4EC',
          padding: '32px',
          borderRadius: '16px',
          display: 'flex',
          justifyBetween: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <div style={{ fontSize: '12px', color: 'var(--gold-soft)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>
              NEXT STEP · 2단계 재무상담
            </div>
            <h3 style={{ fontSize: '22px', color: '#F6F7EF', marginBottom: '6px' }}>
              진단 결과를 바탕으로 1:1 전문가 맞춤 상담받기
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(242,244,236,0.8)', margin: 0 }}>
              패키지 할인가 적용 (상담 단품 119,000원 → 스타트 번들 결제 시 149,000원)
            </p>
          </div>

          <button 
            onClick={() => setTab('booking')}
            className="btn-gold" 
            style={{ padding: '14px 28px', fontSize: '15px' }}
          >
            상담 예약하기 <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
