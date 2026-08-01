import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Target, TrendingUp, Users, Sparkles, HelpCircle, FileCheck } from 'lucide-react';

export default function LandingPage({ setTab, startDemoWithPersona }) {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(180deg, var(--bottle-deep) 0%, var(--bottle) 100%)',
        color: '#EFF2E6',
        padding: '70px 0 60px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            fontSize: '12px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--gold-soft)',
            fontWeight: 600,
            marginBottom: '16px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Sparkles size={14} /> Product Requirements Document · v1.0 MVP
          </div>

          <h1 className="font-serif" style={{
            fontSize: '44px',
            fontWeight: 600,
            color: '#F6F7EF',
            lineHeight: 1.2,
            marginBottom: '16px',
            maxWidth: '800px'
          }}>
            밀레니얼 여성을 위한,<br />
            성향 기반 온라인 재무관리 서비스
          </h1>

          <p className="font-serif" style={{
            fontSize: '20px',
            fontStyle: 'italic',
            color: 'var(--gold-soft)',
            marginBottom: '36px',
            maxWidth: '650px'
          }}>
            "금융상품 판매 없는 100% Fee 기반 · 아는 상태에서 꾸준히 실천하는 상태로"
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <button 
              onClick={() => setTab('assessment')}
              className="btn-gold" 
              style={{ padding: '14px 32px', fontSize: '16px' }}
            >
              내 재무성향 진단하기 (39,000원) <ArrowRight size={18} />
            </button>
            <button 
              onClick={startDemoWithPersona}
              className="btn-outline" 
              style={{ color: '#F6F7EF', borderColor: 'rgba(255,255,255,0.3)', padding: '14px 24px', fontSize: '15px' }}
            >
              🚀 34세 직장인 샘플 데이터로 체험하기
            </button>
          </div>

          {/* Hero Metadata */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1px',
            background: 'rgba(246, 247, 239, 0.14)',
            borderRadius: '14px',
            overflow: 'hidden',
            marginTop: '30px'
          }}>
            <div style={{ background: 'rgba(22, 40, 31, 0.45)', padding: '18px 22px' }}>
              <div style={{ fontSize: '11px', color: 'rgba(239,242,230,0.6)', textTransform: 'uppercase', marginBottom: '4px' }}>운영사</div>
              <div style={{ fontSize: '15px', color: '#F6F7EF', fontWeight: '600' }}>어피티 (UPPITY)</div>
            </div>
            <div style={{ background: 'rgba(22, 40, 31, 0.45)', padding: '18px 22px' }}>
              <div style={{ fontSize: '11px', color: 'rgba(239,242,230,0.6)', textTransform: 'uppercase', marginBottom: '4px' }}>수익 원칙</div>
              <div style={{ fontSize: '15px', color: 'var(--gold-soft)', fontWeight: '600' }}>상품 판매 수수료 0% · 100% Fee 기반</div>
            </div>
            <div style={{ background: 'rgba(22, 40, 31, 0.45)', padding: '18px 22px' }}>
              <div style={{ fontSize: '11px', color: 'rgba(239,242,230,0.6)', textTransform: 'uppercase', marginBottom: '4px' }}>핵심 전환</div>
              <div style={{ fontSize: '15px', color: '#F6F7EF', fontWeight: '600' }}>막연한 불안 → 성향 맞춤 실행 루틴</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Core Problem */}
      <section style={{ padding: '60px 0', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '12px' }}>Product Vision</span>
            <h2 className="font-serif" style={{ fontSize: '32px', marginBottom: '16px' }}>
              정보는 넘쳐나지만, 여전히 사람들은 묻습니다.
            </h2>
            <div className="quote-block">
              <p>"그래서 나는 지금 무엇부터, 어떻게 해야 하지?"</p>
            </div>
            <p style={{ fontSize: '16px', color: 'var(--body)' }}>
              머니그로우는 더 많은 정보를 주는 서비스가 아닙니다. 고객이 자신의 성향과 현재 상태를 이해하고, 
              전문가와 실행 계획을 세우고, 실제 생활에서 이를 지속하도록 돕는 <strong>행동 변화형 재무관리 서비스</strong>입니다.
            </p>
          </div>

          {/* Before & After Table */}
          <div className="mg-card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ background: 'var(--paper-deep)', padding: '16px 24px', fontWeight: '700', fontSize: '15px', color: 'var(--ink)' }}>
              핵심 사용자 변화 (Before & After)
            </div>
            <div style={{ padding: '20px 24px' }}>
              {[
                { before: '재테크 정보는 많지만 내 우선순위를 모름', after: '내 성향과 현재 상태에 맞는 우선순위를 명확히 이해함' },
                { before: '돈관리 실패를 의지 부족 탓으로 돌림', after: '자신의 성향과 환경에 맞는 지속 가능한 방법을 찾음' },
                { before: '막연하게 "돈 모아야지" 생각만 함', after: '기간과 금액이 명확한 재무 목표를 수립함' },
                { before: '계획을 세워도 2~3주를 넘기지 못함', after: '주간 실천 미션과 코치 피드백으로 실행을 유지함' },
                { before: '금융상담은 상품 영업일까 봐 꺼려짐', after: '비용을 내고 100% 중립적인 조언을 제공받음' }
              ].map((row, idx) => (
                <div key={idx} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                  padding: '12px 0',
                  borderBottom: idx === 4 ? 'none' : '1px solid var(--line)',
                  fontSize: '14px'
                }}>
                  <div style={{ color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: 'var(--rust)', fontWeight: 'bold' }}>✕</span> {row.before}
                  </div>
                  <div style={{ color: 'var(--ink)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--bottle)' }} /> {row.after}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Journey */}
      <section style={{ padding: '60px 0', background: 'var(--paper-deep)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge badge-bottle" style={{ marginBottom: '10px' }}>3-Step Solution</span>
            <h2 className="font-serif" style={{ fontSize: '32px' }}>성향 진단부터 루틴 유지까지 3단계 여정</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {/* Step 1 */}
            <div className="mg-card" style={{ position: 'relative' }}>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--gold)', marginBottom: '8px' }}>1단계 · 자기 인식</div>
              <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>재무성향 진단검사</h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '18px' }}>
                20개 문항을 통해 타고난 재무성향과 최근 실제 행동 사이의 불일치를 시각화하고 강점과 위험요인을 발견합니다.
              </p>
              <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--ink)', marginBottom: '16px' }}>
                39,000원 <span style={{ fontSize: '12px', fontWeight: '400', color: 'var(--muted)' }}>(단건 리포트)</span>
              </div>
              <button 
                onClick={() => setTab('assessment')}
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                진단 시작하기
              </button>
            </div>

            {/* Step 2 */}
            <div className="mg-card">
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--gold)', marginBottom: '8px' }}>2단계 · 방향 설정</div>
              <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>1:1 맞춤 재무상담</h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '18px' }}>
                진단 결과를 바탕으로 12년 차 전문가와 50분간 비대면 1:1 상담을 진행하며 성향에 맞는 1~3개의 실행 목표를 정합니다.
              </p>
              <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--ink)', marginBottom: '16px' }}>
                119,000원 <span style={{ fontSize: '12px', fontWeight: '400', color: 'var(--muted)' }}>(50분 화상상담)</span>
              </div>
              <button 
                onClick={() => setTab('booking')}
                className="btn-outline" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                상담 예약하기
              </button>
            </div>

            {/* Step 3 */}
            <div className="mg-card">
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--gold)', marginBottom: '8px' }}>3단계 · 행동 지속</div>
              <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>재무루틴관리 구독</h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '18px' }}>
                주간 실천 미션 체크리스트, 습관 트래킹, 담당 코치와의 비대면 Q&A로 상담에서 세운 계획을 생활 속 습관으로 정착시킵니다.
              </p>
              <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--ink)', marginBottom: '16px' }}>
                월 29,800원 <span style={{ fontSize: '12px', fontWeight: '400', color: 'var(--muted)' }}>(정기 구독)</span>
              </div>
              <button 
                onClick={() => setTab('routine')}
                className="btn-outline" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                루틴관리 대시보드
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section style={{ padding: '60px 0', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '10px' }}>Pricing Packages</span>
            <h2 className="font-serif" style={{ fontSize: '32px' }}>나에게 맞는 머니그로우 시작하기</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div className="mg-card">
              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>머니그로우 스타트</h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', height: '40px' }}>재무성향 진단 단품</p>
              <div className="font-serif" style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>
                39,000원
              </div>
              <ul style={{ padding: 0, margin: '0 0 24px', listStyle: 'none', fontSize: '14px', color: 'var(--body)' }}>
                <li style={{ marginBottom: '8px' }}>✓ 20개 문항 성향-행동 진단</li>
                <li style={{ marginBottom: '8px' }}>✓ 4가지 성향 유형 판정</li>
                <li style={{ marginBottom: '8px' }}>✓ 성향 vs 행동 Gap 불일치 리포트</li>
                <li style={{ marginBottom: '8px' }}>✓ 강점/주의점 및 첫 액션플랜</li>
              </ul>
              <button onClick={() => setTab('assessment')} className="btn-outline" style={{ width: '100%' }}>진단 신청</button>
            </div>

            <div className="mg-card" style={{ background: 'var(--bottle-deep)', color: '#EDEFE4', borderColor: 'var(--bottle-deep)' }}>
              <div className="badge badge-gold" style={{ marginBottom: '8px' }}>★ 가장 인기있는 패키지</div>
              <h3 style={{ fontSize: '20px', color: '#F6F7EF', marginBottom: '8px' }}>머니그로우 플랜</h3>
              <p style={{ fontSize: '13px', color: 'rgba(237,239,228,0.7)', height: '40px' }}>재무진단 + 1:1 맞춤 재무상담 (50분)</p>
              <div style={{ fontSize: '13px', textDecoration: 'line-through', color: 'rgba(237,239,228,0.5)' }}>158,000원</div>
              <div className="font-serif" style={{ fontSize: '28px', fontWeight: '700', color: 'var(--gold-soft)', marginBottom: '16px' }}>
                149,000원
              </div>
              <ul style={{ padding: 0, margin: '0 0 24px', listStyle: 'none', fontSize: '14px', color: 'rgba(237,239,228,0.9)' }}>
                <li style={{ marginBottom: '8px' }}>✓ 재무성향 진단 리포트 전체</li>
                <li style={{ marginBottom: '8px' }}>✓ 사전 주관식 고민 분석</li>
                <li style={{ marginBottom: '8px' }}>✓ 1:1 맞춤 화상 재무상담 (50분)</li>
                <li style={{ marginBottom: '8px' }}>✓ 상담 후 실행 요약 리포트 제공</li>
              </ul>
              <button onClick={() => setTab('booking')} className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>플랜 선택하기</button>
            </div>

            <div className="mg-card">
              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>머니그로우 그로우</h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', height: '40px' }}>진단 + 상담 + 루틴관리 3개월 구독</p>
              <div style={{ fontSize: '13px', textDecoration: 'line-through', color: 'var(--muted)' }}>247,400원</div>
              <div className="font-serif" style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>
                월 29,800원~
              </div>
              <ul style={{ padding: 0, margin: '0 0 24px', listStyle: 'none', fontSize: '14px', color: 'var(--body)' }}>
                <li style={{ marginBottom: '8px' }}>✓ 진단 + 1:1 상담 전체 포함</li>
                <li style={{ marginBottom: '8px' }}>✓ 주간 미션 체크리스트 & 습관 트래킹</li>
                <li style={{ marginBottom: '8px' }}>✓ 담당 코치 1:1 비대면 Q&A (주 1회)</li>
                <li style={{ marginBottom: '8px' }}>✓ 어피티 프리미엄 아티클 무제한</li>
              </ul>
              <button onClick={() => setTab('routine')} className="btn-outline" style={{ width: '100%' }}>루틴 체험하기</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '40px 0', fontSize: '13px' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="font-serif" style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>머니그로우 (MoneyGrow)</div>
            <div style={{ color: 'var(--muted)' }}>운영사: 어피티 (UPPITY) · 100% Fee 기반 성향 맞춤 온라인 재무관리</div>
          </div>
          <div style={{ color: 'var(--muted)', textAlign: 'right' }}>
            PRD v1.0 MVP Implementation<br />
            © 2026 UPPITY MoneyGrow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
