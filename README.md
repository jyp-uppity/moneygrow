# 📦 머니그로우(MoneyGrow) 프로토타입 & 기반 리소스 모음

본 폴더는 **머니그로우 (MoneyGrow)** 서비스의 요약 PRD, 단일 실행형 프로토타입 HTML, 그리고 전체 React 프론트엔드 소스코드 및 빌드 아티팩트를 보관하는 독립 로컬 관리 폴더입니다.

---

## 📁 디렉토리 구조 및 구성 파일

```
/Users/jyp/.gemini/antigravity/scratch/moneygrow-resources/
├── PRD_SUMMARY.md      # [1번 작업물] 20문항 산식 및 3단계 여정이 정리된 명세 문서
├── index.html          # [2번 작업물] 더블클릭으로 바로 실행되는 단일 HTML 프로토타입
├── README.md           # [3번 작업물] 기반 리소스 안내 및 가이드 문서
├── src/                # [기반 리소스] React 모듈화 소스코드 (컴포넌트, 데이터, 유틸)
│   ├── components/     # Header, LandingPage, Assessment, ReportView, Booking, Routine
│   ├── data/           # 20개 문항 데이터, 4대 성향 정의, 코치 정보, 루틴 챌린지
│   ├── utils/          # 5점 리커트 채점 및 Gap 분석 알고리즘 (calculator.js)
│   ├── App.jsx         # 메인 애플리케이션 핸들러
│   └── index.css       # PRD 브랜드 디자인 시스템 (Bottle Green, Gold, Paper)
├── dist/               # [기반 리소스] Vite 프로덕션 빌드 결과물
├── package.json        # 패키지 의존성 파일
└── vite.config.js      # Vite 설정 파일
```

---

## 🚀 사용 및 실행 안내

### 1. 단일 HTML 파일로 즉시 보기 (`index.html`)
별도의 Node.js 설치나 개발 서버 실행 없이, [index.html](file:///Users/jyp/.gemini/antigravity/scratch/moneygrow-resources/index.html) 파일만 브라우저로 열거나 더블클릭하시면 20문항 진단, 4대 성향 매트릭스 계산, 1:1 상담 예약 시뮬레이션, 3단계 루틴 체크리스트를 100% 체험하실 수 있습니다.

### 2. PRD 요약 명세서 확인 (`PRD_SUMMARY.md`)
서비스의 3단계 여정과 20개 진단 문항, 정규화 산식, 4대 성향 매트릭스, Fee-only 비즈니스 모델이 정리된 [PRD_SUMMARY.md](file:///Users/jyp/.gemini/antigravity/scratch/moneygrow-resources/PRD_SUMMARY.md) 문서를 참고하실 수 있습니다.

### 3. 소스코드 개발 및 확장 (`src/`)
향후 기능 확장 및 모듈 수정 시 `src/` 폴더 내의 각 컴포넌트와 유틸리티 코드를 수정하실 수 있습니다.
