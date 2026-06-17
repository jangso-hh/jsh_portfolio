# jsh-portfolio

데이터 기반(data-driven) 개인 포트폴리오. 모든 콘텐츠는
[`src/data/portfolio.ts`](src/data/portfolio.ts) 한 파일에서 관리됩니다.
콘텐츠를 바꿀 때는 이 파일만 수정하면 됩니다. (자세한 가이드: [DATA.md](DATA.md))

## 기술 스택

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/postcss`)
- **Framer Motion** — 스크롤/인터랙션 애니메이션
- **next-themes** — 다크/라이트 모드
- **ESLint 9** (`eslint-config-next`)
- 배포: Vercel

## 시작하기

```bash
npm install      # 의존성 설치
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 빌드 결과 실행
npm run lint     # ESLint 검사
```

## 콘텐츠 수정

| 하고 싶은 것 | 수정할 export (`src/data/portfolio.ts`) |
|---------------|------------------------------------------|
| 프로필/연락처 | `profileData` / `contactData` |
| 소개 | `aboutData` |
| 기술 스택 | `skillsData` |
| 프로젝트 | `projectsData` |
| 경력 / 학력 | `experienceData` / `educationData` |
| 수상 / 자격증 / 대외활동 | `awardData` / `certificateData` / `activityData` |
| 아카이빙 링크 | `archivingData` |

## 에셋

- 대표 이미지: `public/images/projects/*_main.png` → `projectsData.image`
- 스크린샷: `public/images/projects/screenshots/{screenshotDir}/` (파일명 알파벳순,
  순서 지정은 `01_`, `02_` 접두사 사용). `/api/screenshots`가 자동 탐색.
- 발표자료 PDF: `public/ppt/` → `projectsData.pdf.url`

## 디렉터리

```
src/
├── app/                 # App Router (layout, page, api/screenshots)
├── components/
│   ├── sections/        # 페이지 섹션 (portfolio.ts 데이터 렌더링)
│   └── ui/              # 재사용 UI 컴포넌트
└── data/portfolio.ts    # ⭐ 단일 데이터 소스
```
