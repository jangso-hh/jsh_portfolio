# 리디자인 작업 지시서 — 원본 포트폴리오 디자인 이식

> **이 문서는 AI 어시스턴트를 위한 작업 명세서입니다.**
> 목표: 이 Next.js 사이트의 디자인을 `design-reference/original.html`과 **똑같이** 만든다.
> 디자인을 상상하거나 새로 창작하지 말 것. **반드시 original.html의 CSS를 열어 값을 그대로 복사**할 것.

---

## 0. 절대 규칙

1. **`design-reference/original.html`이 유일한 디자인 원본이다.** 모든 색상·간격·폰트 크기·그라디언트·보더는 이 파일의 `<style>` 블록에서 **값을 그대로 가져온다.** 눈대중 금지.
2. 이 프로젝트의 데이터 기반 구조는 유지한다 — 콘텐츠는 `src/data/portfolio.ts`, 컴포넌트는 렌더링만. (CLAUDE.md 참조)
3. 기존 섹션 컴포넌트(`src/components/sections/*.tsx`)를 **수정**해서 디자인을 입힌다. 프로젝트를 새로 만들지 말 것.
4. 다크모드: 원본은 라이트 전용이다. **라이트 모드를 원본과 100% 동일하게** 만드는 것이 최우선. 다크모드는 동일한 구조에 어두운 배경/밝은 글자로 자연스럽게 변환.
5. 한 섹션 완성할 때마다 `npm run build`가 통과하는지 확인.

## 1. 디자인 토큰 (original.html `:root`에서 발췌 — globals.css에 반영)

```css
--ink:#141a22;    /* 본문 진한 글자 */
--sub:#5a6472;    /* 보조 글자 */
--line:#e7eaef;   /* 보더 */
--bg:#fff;
--soft:#f6f8fb;   /* 연한 배경 */
--acc:#3b6ef5;    /* 메인 블루 */
--acc2:#12b5a5;   /* 티일(민트) */
--pur:#7a5cff;    /* 퍼플 */
--warn:#e8912b;
--ok:#1f9d5b;
```

- 폰트: `'Pretendard','Malgun Gothic','Segoe UI',system-ui,sans-serif` / 본문 14px / line-height 1.65
- 페이지: `max-width:960px`, 가운데 정렬, 흰 배경 + `box-shadow:0 1px 40px rgba(20,26,34,.07)`, 바깥 배경 `--soft`
- 섹션 제목(h2): 12.5px, uppercase, letter-spacing .13em, 색 `--acc`, 앞에 24×2px 파란 라인

## 2. 섹션 매핑 — original.html의 클래스 → 이 프로젝트 컴포넌트

| original.html | 이 프로젝트 | 작업 내용 |
|---|---|---|
| `.hero` (다크 네이비 그라디언트 히어로) | `sections/Hero.tsx` | 그라디언트 `linear-gradient(135deg,#0b111c 0%,#152744 52%,#1f4574 100%)`, eyebrow(파란 소문자 라벨), h1 33px(강조어 `#7fd8cd`), `.pills` 스택 칩, 우상단 radial 원 장식까지 그대로 |
| `.vstrip` (3칸 가치 스트립) | `sections/About.tsx` 상단 | 3열 그리드, 1px 라인 구분, 마름모(◆ 회전 사각형) 색상 acc/pur/acc2 |
| `.str` (뽑아야 하는 이유 6카드) | `sections/About.tsx` | 2열 카드, 왼쪽 4px 세로 그라디언트 바(`linear-gradient(var(--acc),var(--acc2))`) |
| `.dual` (PM/개발 두 축 + 가운데 ＋) | `sections/Skills.tsx` 상단 | PM 컬럼 `#eef4ff→#fff` 그라디언트, DEV 컬럼 `#f4f0ff→#fff`, 가운데 원형 ＋ 배지, 아래 `.dmid` 시너지 문구 |
| `.growth` (성장 4단계) | `sections/About.tsx` 또는 `Career.tsx` 상단 | 4열, 연도 알약 배지 색: `#8a94a3`→acc→pur→ok, 카드 사이 `›` 화살표 |
| `.part` (검은 섹션 구분 바) | `ui/SectionTitle.tsx` 확장 or 신규 | `#0f1622` 배경 풀폭 바, 앞에 24px 각진 ★ 배지(파랑/티일) |
| `.cs` (대형 케이스스터디 카드) | `sections/Projects.tsx` + `ui/ProjectModal.tsx` | 헤더: `linear-gradient(135deg,#12203a,#20406e)` + 우상단 민트 태그. 본문: `배경/내가 한 일/어필` 라벨-값 행(`.row`, 76px 라벨 컬럼, 점선 구분). 하단 `.stk` 스택 칩 |
| `.pj` (ERP 프로젝트 행 카드) | `sections/Projects.tsx` | 좌 텍스트 + 우 250px 스크린샷 2열, 제목 옆 등급 알약(`lv-main` 퍼플 / `lv-key` 블루 / `lv-mod` 티일) |
| `.ba` (BEFORE/AFTER 비교) | `ui/ProjectModal.tsx` | 2열 이미지, 좌상단 배지 old=`#8a94a3`, new=`--acc` |
| `.tl`/`.period` (타임라인) | `sections/Career.tsx` | 왼쪽 2px 라인 + 티일 원형 도트(흰 보더+링), 날짜 티일 볼드 |
| `.dcard` (제안서 산출물 카드) | `sections/Achievements.tsx` | `--soft` 배경 카드 + 유형 배지 4색(`b-prop` 퍼플/`b-ba` 블루/`b-sales` 그린/`b-doc` 오렌지) |
| `.scope`/`.tag2` (역량·고객사 칩) | `sections/Skills.tsx` 하단 | `#eef2fb` 배경 `#33507f` 글자 칩 |
| `footer` | `sections/Footer.tsx` | 좌우 배치, `--soft` 배경, 상단 보더 |

## 3. 이미지 (이미 복사되어 있음 — public/images/projects/)

`projectsData`의 `image` 필드에 아래 경로를 채울 것:

| 프로젝트 (portfolio.ts id) | 대표 이미지 | 추가 이미지 |
|---|---|---|
| 알콜프리 (id 4) | `/images/projects/driveon.jpg` | — |
| 현장 그룹웨어 (id 3) | `/images/projects/aiit.jpg` | — |
| 서울소프트 그룹웨어 (id 2) | `/images/projects/groupware.jpg` | `groupware2.jpg` |
| ERP 리디자인 (id 1) | `/images/projects/mobilhi.jpg` | BEFORE: `before_old.jpg` → AFTER: `mobilhi.jpg`, 개별: `ccbus.jpg`, `seongnam.jpg`, `gonghang.jpg`, `kangjin.jpg`, `bumil.jpg` |

## 4. 콘텐츠

`src/data/portfolio.ts`에 이미 원본과 동일한 내용이 들어 있다. 콘텐츠는 새로 쓰지 말고,
디자인 표현에 필요한 필드(등급 알약 텍스트, BEFORE/AFTER 이미지 쌍 등)가 부족하면
**타입과 함께** portfolio.ts에 필드를 추가해서 쓴다.

## 5. 완료 기준 (Acceptance Criteria)

- [ ] 라이트 모드에서 각 섹션이 `design-reference/original.html`을 브라우저로 연 것과 시각적으로 구분이 어려울 것
- [ ] 히어로 그라디언트·강조색(`#7fd8cd`)·pills 재현
- [ ] 케이스스터디 카드의 "배경/내가 한 일/어필" 라벨 행 구조 재현
- [ ] ERP 프로젝트 6개가 스크린샷과 함께 `.pj` 행 카드로 노출
- [ ] BEFORE/AFTER 비교 블록 재현
- [ ] 타임라인·제안서 카드·고객사 칩 재현
- [ ] `npm run build` / `npm run lint` 통과
- [ ] 다크모드에서 깨지는 곳 없음 (색만 반전, 구조 동일)
- [ ] 모바일(720px 이하)에서 원본의 @media 규칙처럼 1열로 접힘
