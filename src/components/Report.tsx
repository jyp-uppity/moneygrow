import { personalityTypes } from '../data/personalityTypes';
import type { AxisScore, ScoringResult } from '../lib/types';

interface ReportProps {
  result: ScoringResult;
  onRetake: () => void;
}

const GAP_COPY: Record<AxisScore['gapTier'], { label: string; desc: string }> = {
  match: { label: '일치', desc: '원래 성향대로 실제 행동하고 있어요.' },
  slight: { label: '약간 불일치', desc: '성향과 다르게 행동하는 부분이 있어요.' },
  large: { label: '크게 불일치', desc: '성향과 실제 행동의 차이가 커요. 상담에서 가장 먼저 다뤄볼 주제예요.' },
};

function AxisBar({ title, score }: { title: string; score: AxisScore }) {
  return (
    <div className="stat-item">
      <div className="top">
        <b>{title}</b>
        <span>성향 {score.trait} · 행동 {score.behavior}</span>
      </div>
      <div className="stat-track">
        <div className="stat-fill" style={{ width: `${score.trait}%` }} />
      </div>
      <div className="stat-track" style={{ marginTop: 5 }}>
        <div className="stat-fill behavior" style={{ width: `${score.behavior}%` }} />
      </div>
      <span className={`gap-badge ${score.gapTier}`}>
        {GAP_COPY[score.gapTier].label} · Gap {score.gap}점
      </span>
      <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 6 }}>{GAP_COPY[score.gapTier].desc}</p>
    </div>
  );
}

export default function Report({ result, onRetake }: ReportProps) {
  const type = personalityTypes[result.typeCode];
  const isP = result.typeCode[0] === 'P';
  const isG = result.typeCode[1] === 'G';

  return (
    <div className="screen">
      <div className="type-hero">
        <div className="code">{type.code[0]} · {type.code[1]}</div>
        <div className="name disp">{type.name}</div>
        <div className="tag">{type.tagline}</div>
      </div>

      {result.isBoundary && (
        <p className="stub-note" style={{ marginTop: 14 }}>
          일부 축이 경계 구간(45~55점)에 있어요. 상담에서 유형을 함께 재확인해보길 권장해요.
        </p>
      )}

      <div className="section-h">재무성향 매트릭스</div>
      <div className="quad-outer">
        <div className="quad-ylabel">
          <span>성장추구형(G)</span>
          <span>안정추구형(A)</span>
        </div>
        <div className="quad-grid">
          <div className={`quad-cell${isP && isG ? ' active' : ''}`}>
            <div className="qcode">P + G</div>
            <div className="qname">설계가형</div>
          </div>
          <div className={`quad-cell${!isP && isG ? ' active' : ''}`}>
            <div className="qcode">S + G</div>
            <div className="qname">모험가형</div>
          </div>
          <div className={`quad-cell${isP && !isG ? ' active' : ''}`}>
            <div className="qcode">P + A</div>
            <div className="qname">차곡차곡형</div>
          </div>
          <div className={`quad-cell${!isP && !isG ? ' active' : ''}`}>
            <div className="qcode">S + A</div>
            <div className="qname">소확행형</div>
          </div>
        </div>
        <div className="quad-xlabel">
          <span>계획형(P)</span>
          <span>즉흥형(S)</span>
        </div>
      </div>

      <div className="section-h">성향 vs 실제 행동</div>
      <div className="stat-legend" style={{ marginBottom: 8 }}>
        <span><span className="sw trait" />타고난 성향</span>
        <span><span className="sw behavior" />최근 실제 행동</span>
      </div>
      <AxisBar title="계획성 (즉흥 ↔ 계획)" score={result.planning} />
      <AxisBar title="위험선호 (안정 ↔ 성장)" score={result.risk} />

      {(result.impulsivityFlag || result.avoidanceFlag) && (
        <>
          <div className="section-h">주의 신호</div>
          {result.impulsivityFlag && (
            <div className="flag-card">
              <div>
                <div className="flabel">충동성 {result.impulsivity}점</div>
                <p>계획에 없는 지출로 이어지기 쉬운 상태예요. 첫 액션 플랜에서 안전장치를 함께 확인하세요.</p>
              </div>
            </div>
          )}
          {result.avoidanceFlag && (
            <div className="flag-card">
              <div>
                <div className="flabel">회피성 {result.avoidance}점</div>
                <p>재무 상태 확인이나 결정을 미루고 있을 가능성이 높아요.</p>
              </div>
            </div>
          )}
        </>
      )}

      <div className="section-h">강점</div>
      <ul className="bullets">
        {type.strengths.map((s) => <li key={s}>{s}</li>)}
      </ul>

      <div className="section-h">주의할 점</div>
      <ul className="bullets negative">
        {type.cautions.map((c) => <li key={c}>{c}</li>)}
      </ul>

      <div className="section-h">첫 액션 플랜</div>
      <div className="action-box">
        <div className="lbl">지금 바로 시작할 수 있는 것</div>
        <p>{type.firstAction}</p>
      </div>

      <div className="cta-band">
        <span className="soon">2단계 · 준비 중</span>
        <h4>전문가와 함께 우선순위를 정하고 싶다면</h4>
        <p>이 결과를 바탕으로 전문가 재무상담을 연결해드려요. (119,000원 · 곧 오픈)</p>
        <button className="btn btn-primary" disabled>상담 신청하기</button>
      </div>

      <button className="btn btn-ghost btn-block" style={{ marginTop: 20 }} onClick={onRetake}>
        다시 검사하기
      </button>
    </div>
  );
}
