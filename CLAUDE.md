# CLAUDE.md

이 파일은 이 저장소에서 작업하는 Claude Code(및 개발자)를 위한 안내서입니다.
프로젝트가 **어떻게 관리되는지**를 정리합니다. (콘텐츠 작성 가이드는 [DATA.md](DATA.md))

## 프로젝트 개요

**데이터 기반(data-driven) 개인 포트폴리오.** 핵심 원칙 하나:

> **모든 콘텐츠는 [`src/data/portfolio.ts`](src/data/portfolio.ts) 한 파일에서 관리된다.**
> 내용을 바꿀 때는 이 파일만 수정하면 되고, 컴포넌트 코드는 거의 건드리지 않는다.

각 컴포넌트는 이 파일에서 named export를 `import` 해서 화면을 그릴 뿐이다.

## 기술 스택

| 분류 | 기술 | 버전 |
|------|------|------|
| Framework | Next.js (App Router, Turbopack) | 16.1.4 |
| Language | TypeScript | ^5 |
| UI | React / React DOM | 19.2.3 |
| Styling | Tailwind CSS (`@tailwindcss/postcss`) | ^4 |
| Animation | Framer Motion | ^12.29.0 |
| Theme | next-themes (다크/라이트) | ^0.4.6 |
| Lint | ESLint (`eslint-config-next`) | ^9 |

## 명령어

```bash
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 빌드 결과 실행
npm run lint     # ESLint 검사
```

> ⚠️ 이 환경에서는 `node`가 기본 PATH에 없다. Homebrew로 설치되어 있으므로
> 명령 실행 전 `export PATH="/opt/homebrew/bin:$PATH"` 가 필요할 수 있다.

## 디렉터리 구조

```
jsh_portfolio/
├── public/                         # 정적 에셋 (URL로 직접 접근)
│   ├── images/projects/
│   │   ├── *_main.png              # 프로젝트 대표 이미지 (projectsData.image)
│   │   └── screenshots/{dir}/      # 프로젝트별 스크린샷 (screenshotDir와 폴더명 일치)
│   ├── ppt/                        # 발표자료 PDF (projectsData.pdf.url)
│   └── projects/
└── src/
    ├── app/
    │   ├── api/screenshots/route.ts  # 스크린샷 자동 탐색 API
    │   ├── globals.css               # 전역 스타일 + Tailwind + 태그 색상(tagClass)
    │   ├── layout.tsx                # 루트 레이아웃 (테마 Provider, 폰트, 메타데이터)
    │   └── page.tsx                  # 메인 페이지 (섹션 조립)
    ├── components/
    │   ├── Header.tsx                # 상단 네비게이션 (스크롤/모바일 메뉴)
    │   ├── sections/                 # 페이지 섹션 — 각각 portfolio.ts 데이터 사용
    │   │   ├── Hero.tsx              #  └ profileData
    │   │   ├── About.tsx             #  └ aboutData
    │   │   ├── Skills.tsx            #  └ skillsData
    │   │   ├── Projects.tsx          #  └ projectsData (+ ProjectModal)
    │   │   ├── Career.tsx            #  └ experienceData / educationData
    │   │   ├── Achievements.tsx      #  └ awardData / certificateData / activityData
    │   │   ├── Archiving.tsx         #  └ archivingData
    │   │   ├── Contact.tsx           #  └ contactData
    │   │   └── Footer.tsx
    │   └── ui/                       # 재사용 UI 컴포넌트
    │       ├── ProjectModal.tsx      #  └ 프로젝트 상세 모달 (notes·스크린샷·태그 렌더링)
    │       ├── ThemeProvider.tsx     #  └ next-themes Provider 래퍼
    │       ├── ThemeToggle.tsx       #  └ 다크/라이트 토글 (마운트 가드 사용)
    │       ├── FadeIn.tsx            #  └ 스크롤 등장 애니메이션 (Framer Motion)
    │       ├── SectionTitle.tsx
    │       ├── SkillTag.tsx
    │       └── ScrollToTop.tsx
    ├── data/portfolio.ts             # ⭐ 모든 콘텐츠 데이터 (단일 소스)
    ├── hooks/                        # (비어 있음, .gitkeep) — 필요 시 커스텀 훅 추가
    └── lib/                          # (비어 있음, .gitkeep) — 필요 시 유틸 추가
```

> `hooks/`, `lib/`는 현재 빈 폴더다. DATA.md의 예시(Firebase 훅 등)는 특정 프로젝트
> 전용이라 만들지 않았고, 폴더는 `.gitkeep`으로 유지한다. 빈 폴더를 추가할 때도
> 같은 규칙(`.gitkeep`)을 따른다.

## 데이터 관리 (`src/data/portfolio.ts`)

파일은 **타입 정의 + 11개의 named export**로 구성된다. 각 export가 한 섹션을 담당한다.

| export | 섹션 | 비고 |
|--------|------|------|
| `profileData` | Hero/Header | 이름·역할·소셜 링크 |
| `aboutData` | About | `details`는 getter로 동적 생성 |
| `skillsData` | Skills | 카테고리별(frontend/backend/mobile/tools) 배열 |
| `archivingData` | Archiving | 외부 채널 카드 |
| `projectsData` | Projects + 모달 | 가장 큰 데이터. `Project` 타입 명시 |
| `experienceData` | Career | 경력 |
| `educationData` | Career | 학력 |
| `certificateData` | Achievements | 자격증 |
| `awardData` | Achievements | 수상 (`projectId`로 프로젝트 연결) |
| `activityData` | Achievements | 대외활동 (`projectId`로 연결) |
| `contactData` | Contact | 연락처 |

### 데이터 간 관계 (연결 규칙)

- `awardData.projectId` → `projectsData.id`
- `activityData.projectId` → `projectsData.id`
- `educationData` → `getEducationString()` → `aboutData.details`에 자동 반영
- `projectsData.screenshotDir` → `public/images/projects/screenshots/{dir}/` 폴더명

> 정의 순서 주의: `aboutData`의 getter가 `educationData`를 참조하므로
> `educationData`가 `aboutData`보다 **먼저** 정의되어 있다.

### 콘텐츠를 바꾸고 싶을 때

| 하고 싶은 것 | 수정할 export |
|--------------|---------------|
| 프로필/연락처 | `profileData` / `contactData` |
| 프로젝트 추가 | `projectsData`에 객체 1개 추가 (`id` 중복 주의) |
| 기술 스택 | `skillsData`의 해당 카테고리 배열 |
| 경력/학력 | `experienceData` / `educationData` |
| 수상/자격증/대외활동 | `awardData` / `certificateData` / `activityData` |

## 에셋 관리

- **대표 이미지**: `public/images/projects/`에 넣고 `projectsData.image` 경로 지정.
- **스크린샷**: `public/images/projects/screenshots/{screenshotDir}/`에 넣으면
  `/api/screenshots?dir={screenshotDir}`가 **파일명 알파벳순**으로 자동 탐색한다.
  순서를 정하려면 `01_`, `02_` 접두사를 사용. 같은 폴더의 `.mp4` 등은 영상으로 분류된다.
- **발표자료 PDF**: `public/ppt/`에 넣고 `projectsData.pdf.url` 지정.

## 스타일 / 테마 규칙

- Tailwind **v4** 사용. `globals.css`에서 `@import "tailwindcss"`, 다크모드는
  `.dark` 클래스 기반(`@custom-variant dark`). CSS 변수로 색 토큰 정의
  (`--background`, `--foreground`, `--accent` 등) → `@theme inline`으로 매핑.
- **기술 태그 색상**(`tagClass`)은 `globals.css`에 정의된 `.tag-blue`, `.tag-green`,
  `.tag-teal`, `.tag-purple`, `.tag-orange`, `.tag-gray` 클래스를 사용한다.
  새 색이 필요하면 라이트/다크 버전을 함께 추가한다.
- 다크/라이트는 `next-themes`로 처리. `layout.tsx`의 `ThemeProvider`가 감싸고,
  `html`에 `suppressHydrationWarning`이 필요하다.

## 컨벤션 / 주의사항

- 데이터를 읽기만 하는 섹션은 **서버 컴포넌트**, 상태/이벤트/Framer Motion이
  필요한 것만 `"use client"`로 둔다 (예: `Hero`, `Projects`, `ProjectModal`, `Header`,
  `ThemeToggle`, `ScrollToTop`, `FadeIn`).
- import 별칭은 `@/*` → `src/*` (tsconfig `paths`).
- 빌드/린트를 통과 상태로 유지한다. `react-hooks/set-state-in-effect` 룰에 걸리는
  마운트 가드 등 **의도된** 패턴은 해당 라인에 한정해 disable 주석을 단다.
- 새 섹션을 추가하면 `page.tsx`에 조립하고, 데이터는 `portfolio.ts`에 타입과 함께 추가한다.

## 관련 문서

- [DATA.md](DATA.md) — 콘텐츠 작성/추가 상세 가이드
- [README.md](README.md) — 설치·실행 요약
