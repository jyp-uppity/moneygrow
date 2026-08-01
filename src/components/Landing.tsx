import { useEffect } from 'react';

interface LandingProps {
  hasInProgress: boolean;
  hasResult: boolean;
  onStart: () => void;
  onResume: () => void;
  onViewResult: () => void;
}

export default function Landing({ hasInProgress, hasResult, onStart, onResume, onViewResult }: LandingProps) {
  useEffect(() => {
    const scriptId = 'addtoany-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://static.addtoany.com/menu/page.js';
      script.defer = true;
      document.body.appendChild(script);
    } else if ((window as any).a2a) {
      (window as any).a2a.init('page');
    }
  }, []);

  return (
    <div className="app-shell">
      <div className="hero">
        <div className="kicker">Product Requirements Document → MVP</div>
        <h1 className="disp">
          머니그로우
          <br />
          재무성향 진단검사
        </h1>
        <p className="sub">"그래서 나는 지금 무엇부터, 어떻게 해야 하지?"</p>
        <div className="hero-price">
          <span className="amt">39,000원</span>
          <span className="unit">검사 1회 + 결과 리포트 · 기간 내 재열람 가능</span>
        </div>
      </div>

      <div className="screen stack">
        <div className="quote-block">
          <p>
            더 많은 정보를 주는 서비스가 아니라, 내 성향과 현재 상태를 이해하고 첫 행동을 찾아주는
            서비스입니다.
          </p>
        </div>

        <div className="card">
          <h4>20문항 · 약 6~8분</h4>
          <p className="desc">
            계획성·위험선호 두 축으로 재무성향 유형을 진단하고, 충동성·회피성 지표로 위험 신호를
            확인합니다. 타고난 성향과 최근 실제 행동을 함께 물어 &ldquo;성향-행동 불일치&rdquo;까지
            보여드립니다.
          </p>
        </div>

        <div className="chip-row">
          <span className="chip">4개 재무성향 유형</span>
          <span className="chip">성향-행동 불일치 분석</span>
          <span className="chip">충동성·회피성 위험 신호</span>
          <span className="chip">첫 액션 플랜</span>
        </div>

        {hasInProgress && (
          <div className="card">
            <h4>이어서 진행할 검사가 있어요</h4>
            <p className="desc">저장된 응답이 있습니다. 이어서 진행하시겠어요?</p>
            <button className="btn btn-primary btn-block" onClick={onResume}>이어서 진행하기</button>
          </div>
        )}

        {hasResult && !hasInProgress && (
          <div className="card">
            <h4>이전 진단 결과가 있어요</h4>
            <p className="desc">저장된 결과 리포트를 다시 확인할 수 있습니다.</p>
            <button className="btn btn-ghost btn-block" onClick={onViewResult}>결과 다시 보기</button>
          </div>
        )}

        {!hasInProgress && (
          <button className="btn btn-primary btn-block" onClick={onStart}>
            {hasResult ? '새로 검사하기' : '검사 시작하기'}
          </button>
        )}

        <p className="stub-note">
          MVP 데모 화면입니다. 실제 서비스에서는 이 버튼을 누르면 결제(외부 PG)를 거쳐 검사가
          시작됩니다.
        </p>

        {/* Footer */}
        <footer style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '15px' }}>머니그로우 (MoneyGrow)</div>
            <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>밀레니얼 여성을 위한 성향 기반 온라인 재무관리 서비스</div>
            <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '4px' }}>© 2026 MoneyGrow. All rights reserved.</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
            <span style={{ fontWeight: 600, fontSize: '13px' }}>페이지 공유하기</span>
            <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
              <a className="a2a_dd" href="https://www.addtoany.com/share"></a>
              <a className="a2a_button_telegram"></a>
              <a className="a2a_button_linkedin"></a>
              <a className="a2a_button_x"></a>
              <a className="a2a_button_kakao"></a>
              <a className="a2a_button_copy_link"></a>
              <a className="a2a_button_threads"></a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
