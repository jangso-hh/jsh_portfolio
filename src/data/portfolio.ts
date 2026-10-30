/**
 * ⭐ 단일 데이터 소스 (Single Source of Truth)
 *
 * 사이트의 모든 콘텐츠는 이 파일에서 관리됩니다.
 * 컴포넌트는 여기서 export된 데이터를 import 해서 화면을 그릴 뿐이므로,
 * 내용을 바꿀 때는 이 파일만 수정하면 됩니다. (자세한 설명은 DATA.md 참고)
 *
 * 콘텐츠 출처: 포트폴리오_장소현.pdf (Product Manager × Full-stack Engineer · Mobility)
 */

/* =========================================================================
 * 타입 정의
 * ====================================================================== */

export interface ProfileData {
  name: string;
  nameEn: string;
  role: string;
  tagline: string;
  email: string;
  github: string;
  blog?: string;
  linkedin?: string;
  instagram?: string;
  devlinks?: string;
  location: string;
}

export interface AboutDetail {
  icon: string;
  label: string;
  value: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 ~ 100
  tagClass: string; // globals.css에 정의된 태그 색상 클래스
}

export interface SkillsData {
  frontend: SkillItem[];
  backend: SkillItem[];
  mobile: SkillItem[];
  tools: SkillItem[];
}

export interface ArchivingItem {
  name: string;
  url: string;
  icon: string;
  description: string;
  details: string[];
}

export interface ExtraLink {
  label: string;
  demo?: string;
  github?: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  screenshotDir?: string;
  techStack: string[];
  github: string;
  demo: string;
  period: string;
  features: string[];
  award?: string;
  role?: string;
  team?: string;
  notes?: string[];
  extraLinks?: ExtraLink[];
  pdf?: { label: string; url: string };
  video?: { label: string; url: string };
}

export interface ExperienceItem {
  title: string;
  role: string;
  period: string;
  description: string;
  details: string[];
  techStack?: string[];
}

export interface EducationItem {
  title: string;
  major: string;
  minor?: string;
  role: string;
  period: string;
  description: string;
  details: string[];
}

export interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
}

export interface AwardItem {
  title: string;
  prize: string;
  date: string;
  projectId?: number;
}

export interface ActivityItem {
  organization: string;
  role: string;
  period: string;
  description: string;
  links?: ExtraLink[];
  projectId?: number;
}

export interface ContactData {
  email: string;
  message: string;
}

/* =========================================================================
 * 1. profileData — 기본 프로필
 * ====================================================================== */

export const profileData: ProfileData = {
  name: "장소현",
  nameEn: "Jang So Hyeon",
  role: "Product Manager × Full-stack Engineer · Mobility",
  tagline: "제품을 발굴하고, 만들고, 파는 프로덕트 엔지니어",
  email: "seoulsoftinfo@gmail.com",
  // 아래 링크는 PDF에 없어 비워둠 — 값을 채우면 Hero/Contact/Archiving에 자동 노출됩니다.
  github: "",
  blog: "",
  linkedin: "",
  instagram: "",
  devlinks: "",
  location: "Seoul, Korea",
};

/* =========================================================================
 * 7. educationData — 학력  (aboutData보다 먼저 정의)
 *    ※ PDF에 학력 정보가 없어 비워둠. 항목을 추가하면 Career '학력'에 노출됩니다.
 * ====================================================================== */

export const educationData: EducationItem[] = [];

/* =========================================================================
 * 2. aboutData — 소개 섹션
 * ====================================================================== */

function getAboutDetails(): AboutDetail[] {
  return [
    { icon: "🧭", label: "소속", value: "㈜서울소프트 개발3팀 · 모빌리티팀" },
    { icon: "💼", label: "역할", value: "Full-stack Engineer & PM" },
    { icon: "🚗", label: "도메인", value: "모빌리티 (배차·정산·급여·DTG·음주측정)" },
    { icon: "✉️", label: "Email", value: profileData.email },
  ];
}

export const aboutData = {
  introduction:
    "PM으로 제품을 기획·관리하는 동시에, 풀스택으로 직접 개발합니다. " +
    "요구정의·프로젝트 관리·제안·조달 같은 기획/사업 역량과, 웹·앱·백엔드를 만들어 " +
    "배포·운영하는 개발 역량을 둘 다 주력으로 갖췄습니다. 스펙을 남에게 넘기지 않고 " +
    "직접 만들기에 스펙 왜곡이 없고, 아이디어에서 배포까지의 사이클이 짧습니다. " +
    "급여·4대보험·회계·음주측정 규제처럼 오차가 곧 사고인 도메인을 프로덕션 수준으로 " +
    "개발·운영합니다. — 지금도 PM과 개발을 동시에 깊게 하는 사람입니다.",
  get details(): AboutDetail[] {
    return getAboutDetails();
  },
};

/* =========================================================================
 * 3. skillsData — 기술 역량
 * ====================================================================== */

export const skillsData: SkillsData = {
  frontend: [
    { name: "React", level: 90, tagClass: "tag-blue" },
    { name: "TypeScript", level: 88, tagClass: "tag-blue" },
    { name: "JavaScript", level: 90, tagClass: "tag-orange" },
    { name: "SCSS", level: 85, tagClass: "tag-purple" },
    { name: "htmx", level: 70, tagClass: "tag-gray" },
  ],
  backend: [
    { name: "Python", level: 90, tagClass: "tag-blue" },
    { name: "Django", level: 90, tagClass: "tag-green" },
    { name: "REST API", level: 82, tagClass: "tag-gray" },
    { name: "권한 설계(RBAC)", level: 85, tagClass: "tag-teal" },
  ],
  mobile: [
    { name: "Flutter / Dart", level: 80, tagClass: "tag-blue" },
    { name: "Bluetooth(BLE)", level: 75, tagClass: "tag-teal" },
    { name: "지도(OSM) · GPS", level: 78, tagClass: "tag-green" },
  ],
  tools: [
    { name: "Figma", level: 85, tagClass: "tag-purple" },
    { name: "Design System", level: 85, tagClass: "tag-teal" },
    { name: "PDF / Excel 자동화", level: 85, tagClass: "tag-orange" },
    { name: "Vercel", level: 80, tagClass: "tag-gray" },
  ],
};

/* =========================================================================
 * 4. archivingData — 아카이빙 링크
 *    ※ PDF에 외부 채널이 없어 비워둠. url이 있는 항목이 하나도 없으면
 *      Archiving 섹션은 자동으로 숨겨집니다.
 * ====================================================================== */

export const archivingData: ArchivingItem[] = [];

/* =========================================================================
 * 5. projectsData — 프로젝트 (핵심)
 *    대표 이미지/스크린샷은 아직 없어 image는 비워둠(빈 값이면 렌더 생략).
 *    - 대표 이미지: public/images/projects/{name}_main.png → image에 경로 지정
 *    - 스크린샷:   public/images/projects/screenshots/{screenshotDir}/ 에 넣으면 자동 노출
 * ====================================================================== */

export const projectsData: Project[] = [
  {
    id: 4,
    title: "운수종사자 음주측정 준법 서비스 — 웹 + 앱",
    subtitle: "기획 · UI/UX · 웹(React·TS·Python) · 앱(Flutter) · 배포 — 전 과정 단독",
    description:
      "여객자동차법 개정으로 운수종사자 음주확인·3년 기록보관이 의무화(미이행 시 과징금·사업정지)됐지만, " +
      "현장은 여전히 수기 관리로 법적 리스크와 대리측정 문제가 상존했습니다. " +
      "규제 도메인 이해 + 하드웨어(BLE) 연동 + 웹·모바일 풀스택을 혼자 완성했습니다. " +
      "회사의 음주측정 키오스크 사업과 실제로 연계되는 소프트웨어입니다.",
    image: "",
    screenshotDir: "alcohol-free",
    techStack: [
      "React",
      "TypeScript",
      "Python",
      "Flutter/Dart",
      "Bluetooth(BLE)",
      "OSM·GPS",
      "PDF/Excel",
      "Vercel",
    ],
    github: "",
    demo: "",
    period: "2026",
    features: [
      "블루투스 음주측정기·지문/캠 본인확인을 연동해 측정 → 서버 전송 → PASS/FAIL 운행 승인·차단 파이프라인 구현",
      "관리자 웹: 실시간 측정 현황판, 지각/미측정자 관리, 노선·차량·직종 필터, PDF·Excel 리포트, 문의게시판·개인알림",
      "기사 앱: 블루투스 측정, 지도 기반 차량 실시간 위치(OSM·역지오코딩), GPS 출퇴근, 배차 확인·측정기록",
      "웹 Vercel 배포, 앱 iOS·Android 빌드 구성까지 직접",
    ],
    role: "기획 · UI/UX · 웹 · 앱 · 배포 (전 과정 단독)",
    team: "단독 개발 · 웹+앱",
    notes: [
      "규제 도메인 이해 + 하드웨어(BLE) 연동 + 웹·모바일 풀스택을 혼자 완성",
      "데모가 아니라 회사의 음주측정 키오스크 사업과 연계되는 실제 소프트웨어",
    ],
  },
  {
    id: 3,
    title: "현장·작업 관리 통합 그룹웨어 — 현장 서비스 기업 맞춤 구축",
    subtitle: "기획 · UI 디자인 · 풀스택(Django·JS) · 모바일 · 운영 — 전 과정 단독",
    description:
      "현장 서비스 업무(접수→지시→작업일지)가 엑셀·수기로 분산되어 이력 추적과 정산이 어려운 상태였습니다. " +
      "상태값 기반 워크플로우로 통합 그룹웨어를 단독으로 기획부터 운영까지 구축했습니다. " +
      "한 회사가 매일 실제로 쓰는 기간 시스템으로, 데모가 아니라 라이브 레퍼런스입니다.",
    image: "",
    screenshotDir: "field-groupware",
    techStack: [
      "Python/Django",
      "JavaScript",
      "SCSS",
      "반응형 모바일 웹",
      "전자결재",
      "권한(RBAC)",
      "GPS",
    ],
    github: "",
    demo: "",
    period: "2025 ~ 운영 중",
    features: [
      "접수 → 작업지시서 → 직원·차량 배정 → 현장 작업(사진·자재·서명) → 결과보고·고객확인 → 승인·완료의 상태값 기반 워크플로우 구축",
      "전자결재·근태·연차·간트, 조직도, 고객→현장→장비 마스터, 역할 기반 권한(RBAC)",
      "차량 운행일지(GPS·주행거리·유류비)·통계·인쇄 서식",
      "현장 기사용 모바일 웹 전체를 별도 구축(데스크탑과 실시간 연동)",
    ],
    role: "기획 · UI 디자인 · 풀스택 · 모바일 · 운영 (전 과정 단독)",
    team: "단독 개발 · 라이브 운영",
    notes: [
      "한 회사가 매일 실제로 쓰는 기간 시스템을 혼자 기획부터 운영까지 — 데모가 아니라 라이브 레퍼런스",
    ],
  },
  {
    id: 2,
    title: "개발팀 생산성 도구 — 사내 그룹웨어",
    subtitle: "신규 기능 설계·구축 (Django·JS·SCSS) · 주력 개발 · 사내 도구",
    description:
      "개발 진척·성과·정부지원사업 데이터를 수기로 취합해 관리 부담이 큰 상황이었습니다. " +
      "필요한 도구를 스스로 발굴해, 웹훅·자동 매칭 같은 실무형 자동화를 직접 설계·구축했습니다.",
    image: "",
    screenshotDir: "seoulsoft-groupware",
    techStack: [
      "Django",
      "GitHub 웹훅·분석",
      "간트·WBS",
      "인라인 편집 그리드",
      "RBAC",
      "PDF/Excel",
    ],
    github: "",
    demo: "",
    period: "2026",
    features: [
      "GitHub 업무분석 시스템 신규 구축 — 웹훅으로 커밋 자동 수집, 담당자별 작업현황 대시보드, 14일 추이 KPI",
      "WBS 관리 — 간트차트에 GitHub 커밋을 자동 매칭(키워드 토큰·모듈 별칭), 진행보고서 생성",
      "정부지원사업 관리 페이지 — 엑셀형 인라인 편집 그리드(드래그 정렬·컬럼 고정·우클릭 메뉴), 점수 통계·가중치, PDF/인쇄, 엑셀 업/다운",
      "전자결재(복사 후 재작성)·계약서 보관함·메뉴 권한 관리·대시보드 리디자인",
    ],
    role: "신규 기능 설계 · 구축",
    team: "주력 개발 · 사내 도구",
    notes: [
      "필요한 도구를 스스로 발굴해 만드는 사람 — 웹훅·자동 매칭 같은 실무형 자동화를 직접 설계",
    ],
  },
  {
    id: 1,
    title: '전 운수사 ERP UI/UX 전면 리디자인 & 개발 — "계약을 만든 디자인"',
    subtitle: "노후화된 구형 UI를 최신 디자인 시스템으로 — 제품군 전체를 단독 개편 · 디자인 리더십",
    description:
      "수년간 기능 위주로 누적된 자사 모빌리티 ERP는 UI가 노후화되어, 신규 운수사 영업·데모에서 " +
      "'요즘 시스템 같지 않다'는 인상이 약점이었습니다. 전 운수사 ERP의 UI/UX를 혼자서 최신 디자인으로 " +
      "전면 개편하고, 동시에 신규 모듈·백엔드 로직·대시보드를 직접 개발해 프로덕션에 지속 출시했습니다. " +
      "세련된 최신 UI가 영업·데모의 강력한 차별점이 되어 신규 계약 수주에 직접 기여했습니다. " +
      "(담당 범위: 배차·수입금·급여·회계·정비·자재·인사·경영분석 전 영역)",
    image: "",
    screenshotDir: "erp-redesign",
    techStack: [
      "Python",
      "Django",
      "JavaScript",
      "React",
      "TypeScript",
      "Flutter/Dart",
      "SCSS",
      "htmx",
      "REST API",
      "지도(OSM)·GPS",
      "RBAC",
      "PDF/Excel",
      "Figma",
      "Design System",
    ],
    github: "",
    demo: "",
    period: "2026",
    features: [
      "전 운수사 ERP의 UI/UX를 혼자서 최신 디자인으로 전면 개편 — 운수사 ERP 5종과 자사 플래그십 제품까지 제품군 전반을 일관된 디자인 언어로 통일",
      "디자인 시스템 구축 — 컬러 팔레트·타이포그래피(NanumSquare)·카드/버튼/탭/아이콘·조회필터·테이블까지 컴포넌트 표준화",
      "bento 대시보드 레이아웃 + 데이터 시각화 고도화(KPI 타일·도넛/바/라인 차트·히트맵·게이지·랭킹), 다크 레일 사이드바·폴딩, 반응형",
      "운수사별 브랜드 톤앤매너 커스터마이징(로고·컬러 반영)으로 '우리 회사 전용 시스템' 경험 제공",
      "[운수사 ERP A · 154대 규모] UI 전면 리디자인 · 연료데이터관리 모듈 신규(전기·CNG·수소) · 어드민 실시간 차량위치 지도 · 경영/정시성 대시보드",
      "[운수사 ERP B] UI/UX 전면 리뉴얼 · 메뉴 권한(RBAC) 일괄 적용 · 급여·인사 고도화",
      "[운수사 ERP C · 2026 신규 도입] 신규 도입 커스터마이징 · 메인 대시보드 · 브랜드 디자인 시스템 구축",
      "[운수사 ERP D · 2026] 대시보드 전면 개편 · 시설관리 모듈 신규 풀빌드(htmx 부분 렌더링)",
      "[운수사 ERP E · 2026] 메인 대시보드 전면 리뉴얼 · 실시간 위젯(뉴스·날씨 API) · 스케줄러",
      "[자사 모빌리티 ERP · 플래그십] 대표 대시보드 신규 디자인 → 전 운수사 이식 기준 · 실시간 관제·자율주행·디지털 트윈 등 차세대 화면 설계",
    ],
    role: "디자인 리더십 · 풀스택 개발 (단독)",
    team: "운수사 ERP 제품군 전반",
    notes: [
      "세련된 최신 UI가 영업·데모의 강력한 차별점이 되어 신규 계약 수주에 직접 기여",
      "제품 대표(플래그십) 대시보드가 이후 전 운수사 ERP 이식의 디자인 기준이 됨(공통 base·다크 레일 사이드바)",
    ],
  },
];

/* =========================================================================
 * 6. experienceData — 경력 (㈜서울소프트 · 상세 이력 2024–2026, 최신순)
 * ====================================================================== */

export const experienceData: ExperienceItem[] = [
  {
    title: "㈜서울소프트 · 개발3팀(모빌리티팀)",
    role: "PM · 풀스택 개발 동시 주도",
    period: "2026.01 ~ 현재",
    description:
      "계약 실행·신규 ERP 도입과 함께 개발 본격 전환. 기획·관리와 풀스택 개발·디자인을 병행 — 두 역량 모두 주력.",
    details: [
      "음주측정 키오스크 운수사 7곳 물품공급계약 체결 및 발주·세금계산서 집행",
      "운수사 ERP 신규 도입 PM — 킥오프 주관·회의록, 10개 모듈 요구사항 정의·개발방향 수립, 배포 협의 / 시내버스 운수사 협약",
      "개발 본격 전환 — 대표 개발 프로젝트를 직접 구현 / DTG 정성제안서·제품 IR",
      "운수사 현장 업무 앱 메인 개발 · iOS/Android 스토어 출시 (2026.10)",
      "DTG 수집기·차량정시성 관제 구축(운수사 2곳) · DTG 운행기록 6,500만 건 분석",
      "외부 음주측정기 API 연동 → ERP 점호부·확인서 모듈 (2026.10)",
    ],
    techStack: ["Django", "React", "TypeScript", "Flutter", "SCSS"],
  },
  {
    title: "㈜서울소프트 · 사업추진팀",
    role: "제품화 & B2B 영업·조달 본격화",
    period: "2025.09 ~ 2025.12",
    description: "자사 모빌리티 ERP 제품화와 B2B 영업·정부조달을 본격적으로 추진.",
    details: [
      "모빌리티 ERP 서비스소개서 타깃별 다버전·요금표·리플렛·도입제안 공문 제작",
      "운수사 3곳 구독 견적·계약 체결, 음주측정 시스템 제안서·견적",
      "혁신제품 시범사용 신청 추진(버스조합·운수사 4곳)",
    ],
  },
  {
    title: "㈜서울소프트 · 사업추진팀",
    role: "모빌리티 ERP 화면설계·기획 총괄 + 다중 프로젝트 WBS",
    period: "2025.01 ~ 2025.08",
    description:
      "모빌리티 ERP 전반의 화면설계·기획을 담당하고 다중 프로젝트 일정을 총괄.",
    details: [
      "운수사별 업무 분석, 메뉴·기능 구조 설계, 요구사항 정의·컨펌, Figma 구성도(운수사 제품군 전반)",
      "다중 프로젝트 일정 총괄(진척 점검·QC·구현 기간 설정·개발자/업체 소통)",
      "인사총무·산업기능요원·인바운드 CS",
    ],
  },
  {
    title: "㈜서울소프트 · 사업추진팀",
    role: "PM 온보딩 + 모빌리티 ERP 혁신제품 지정",
    period: "2024.06 ~ 2024.12",
    description:
      "사업추진팀 PM으로 온보딩하며 ERP 운영 PM과 정부조달 업무를 수행, 모빌리티 ERP 혁신제품 지정을 획득.",
    details: [
      "시내버스 운수사·지자체 공사 ERP 운영 PM — WBS 일정관리, 배포 점검, 매뉴얼·패치노트·CS 보고서, 대금청구·전자세금계산서",
      "자사 모빌리티 ERP 중기부 혁신제품 지정(2024.08) — 제품소개서·규격서·조달적합성 서류, 나라장터 등록 → 지정 획득",
      "스마트공방/팩토리 정부지원사업 관리",
    ],
  },
];

/* =========================================================================
 * 8. certificateData — 자격증
 *    ※ PDF에 자격증 정보가 없어 비워둠. 항목을 추가하면 Achievements에 노출됩니다.
 * ====================================================================== */

export const certificateData: CertificateItem[] = [];

/* =========================================================================
 * 9. awardData — 수상 · 지정 (projectId로 프로젝트와 연결)
 * ====================================================================== */

export const awardData: AwardItem[] = [
  {
    title: "중소벤처기업부 혁신제품 지정 — 자사 모빌리티 ERP",
    prize: "혁신제품 지정 · 나라장터(조달청) 등록",
    date: "2024.08",
    projectId: 1,
  },
];

/* =========================================================================
 * 10. activityData — 제안 · 조달 · 기획 산출물 (직접 제작)
 * ====================================================================== */

export const activityData: ActivityItem[] = [
  {
    organization: "음주측정 관리 시스템 제안서",
    role: "제품 제안",
    period: "2025 ~ 2026",
    description:
      "법규 근거(음주확인 의무·3년 보관·과징금 180~540만원) 정리 → 지문+캠+정밀측정+ERP 연동 3단계 안전 필터링. 키오스크/노트북형 2종·가격·AS·기대효과, 관리자 대시보드(측정사진·필터·Excel·이상 알림) 설계.",
    projectId: 4,
  },
  {
    organization: "2026 DTG 점검센터 운영 용역 정성제안서",
    role: "공공입찰",
    period: "2026",
    description:
      "교통안전 분야 공공기관 발주 — 전국 점검센터·출장·콜센터 운영, 폐업 제조사 DTG 무상 점검·수리·교체. 자사 혁신제품(모빌리티 ERP) 기반 점검 프로세스 디지털화를 제안하고 정성평가 항목별 대응 논리를 구성.",
  },
  {
    organization: "공공 정산관리시스템 · FMS 차량평가 플랫폼 제안",
    role: "공공/제품 제안",
    period: "2025 ~ 2026",
    description:
      "준공영제 운송원가 산정·보조금 집행(운행대수·교통카드·배차·인건비 통합, BMS 연계). ERP+FMS+정산 통합·배차 최적화·운전행태·예방정비.",
  },
  {
    organization: "요구사항정의서 · 화면설계 · 메뉴구조도 (업무분석 · BA)",
    role: "업무분석",
    period: "2025 ~ 2026",
    description:
      "관광·렌터카 운수사 WEB/APP v2.0 요구사항정의서(부가세·급여명세·정산-외주·휴가신청), 그룹웨어 메뉴 구성 질문서(작업접수→지시서→일지·상태값·권한), 모빌리티 ERP 기능구성도, SNS 로그인 설계.",
    projectId: 3,
  },
  {
    organization: "모빌리티 ERP 서비스소개서 · 세일즈킷 · 사용가이드",
    role: "세일즈 · 문서화",
    period: "2024 ~ 2026",
    description:
      "타깃별 소개서 다버전·리플렛·요금표(혁신제품 지정·조달청 등록), 그룹웨어 사용가이드(웹+모바일 59p), 매뉴얼·패치노트·CS 내역.",
  },
];

/* =========================================================================
 * 11. contactData — 연락처
 * ====================================================================== */

export const contactData: ContactData = {
  email: profileData.email,
  message:
    "제품 기획부터 개발·배포·운영까지 함께할 사람을 찾으신다면 편하게 연락 주세요.",
};

/* =========================================================================
 * 12. 화면 구성 데이터 — 페이지의 8개 섹션이 아래 export를 그대로 그린다.
 *     문자열 안의 **…** 는 <b>로 렌더링된다. (src/lib/em.tsx)
 *     ※ 고객사·제품명은 비공개 원칙에 따라 업종·규모로만 표기한다.
 * ====================================================================== */

/* ---------- 01. HERO ---------- */

export interface HeroCapability {
  title: string;
  desc: string;
}

export const heroData = {
  title: "제품을 기획하고, 직접 구현하며,\n운영까지 연결하는 Product Manager",
  subtitle:
    "서비스 기획부터 프로젝트 관리, UI/UX 설계, 풀스택 개발까지.\n비즈니스와 기술을 연결해 실제 사용되는 제품을 만들어 왔습니다.",
  who: "장소현 · ㈜서울소프트 개발3팀(모빌리티팀) · PM & Full-stack Engineer",
  capabilities: [
    {
      title: "Product Planning & PM",
      desc: "요구사항 분석, 서비스 기획, 프로젝트 일정 및 품질 관리",
    },
    {
      title: "UI/UX Design",
      desc: "업무 시스템 설계, 디자인 시스템 구축, 사용자 경험 개선",
    },
    {
      title: "Full-stack Development",
      desc: "웹·모바일·백엔드 개발 및 실제 서비스 운영",
    },
  ] as HeroCapability[],
  tech: ["Python · Django", "React · TypeScript", "Flutter", "Figma"],
  /** 이력서 파일을 public/ 에 넣고 경로를 지정하면 버튼이 나타난다. 비우면 숨김. */
  resume: "",
};

/* ---------- 02. CORE CAPABILITIES ---------- */

export interface Capability {
  num: string;
  title: string;
  lead: string;
  items: string[];
}

export const capabilitiesData: Capability[] = [
  {
    num: "01",
    title: "Product Planning & Project Management",
    lead: "운수사 ERP 제품군의 **요구사항 정의부터 화면 설계, 일정·품질 관리**까지 맡아 왔습니다. 제안·견적·계약과 정부조달 업무도 직접 수행합니다.",
    items: [
      "사용자 및 현업 요구사항 분석",
      "서비스 구조 및 기능 정의",
      "메뉴 구조도 및 화면 설계",
      "Figma 기반 UI/UX 기획",
      "WBS 및 일정 관리",
      "개발 리소스와 진척도 관리",
      "고객사 및 개발팀 간 커뮤니케이션",
      "제안서, 견적서, 계약 및 조달 업무",
    ],
  },
  {
    num: "02",
    title: "UI/UX & Product Design",
    lead: "노후화된 ERP 제품군 전체를 **하나의 디자인 시스템으로 전면 리디자인**했습니다. 데이터 대시보드와 브랜드별 커스터마이징까지 혼자 설계합니다.",
    items: [
      "ERP 및 업무 시스템 UI/UX 전면 리디자인",
      "디자인 시스템 및 공통 컴포넌트 구축",
      "데이터 대시보드 및 시각화",
      "사용자 중심의 정보 구조 개선",
      "브랜드별 디자인 커스터마이징",
      "Figma 기반 프로토타이핑 및 화면 설계",
    ],
  },
  {
    num: "03",
    title: "Full-stack Development",
    lead: "Django·React·Flutter로 **웹·앱·백엔드를 직접 구현하고 배포·운영**합니다. 외부 장비·벤더 데이터 연동과 권한 체계 설계까지 다룹니다.",
    items: [
      "Python / Django 기반 백엔드",
      "React / TypeScript 기반 프론트엔드",
      "JavaScript / SCSS",
      "Flutter 기반 모바일 앱",
      "REST API 및 외부 시스템 연동",
      "데이터베이스 및 권한 체계 설계",
      "자동화 및 데이터 시각화",
    ],
  },
];

/* ---------- 03. SELECTED PROJECTS ---------- */

export interface Shot {
  src: string;
  caption: string;
  /** mobile 은 폰 비율로 좁게 표시 */
  kind?: "web" | "mobile";
}

export interface DetailBlock {
  label: string;
  items: string[];
}

export interface FeaturedProject {
  num: string;
  title: string;
  tagline: string;
  period: string;
  shots?: Shot[];
  beforeAfter?: { before: string; after: string; caption: string };
  overview: string;
  roles: string[];
  highlights: string[];
  results: string[];
  stack: string[];
  details: DetailBlock[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    num: "01",
    title: "운수종사자 음주측정 준법 관리 서비스",
    tagline: "규제 대응이 필요한 현장 업무를 웹 + 앱 서비스로 전환",
    period: "2026 · 기획부터 배포까지 단독",
    shots: [
      {
        src: "/images/projects/driveon.jpg",
        caption: "관리자 통합 대시보드 — 실시간 측정 현황 · 장비 연결 · 미측정자 관리",
      },
    ],
    overview:
      "여객자동차법 개정으로 운수종사자 음주확인과 3년 기록보관이 의무화됐지만, 현장은 수기 관리에 머물러 있었습니다. **측정 → 서버 전송 → 운행 승인·차단**까지 한 흐름으로 묶는 서비스를 혼자 기획·설계·구현했습니다.",
    roles: ["서비스 기획", "UI/UX 디자인", "관리자 웹 개발", "Flutter 앱 개발", "배포·운영"],
    highlights: [
      "블루투스 음주측정기 + 지문/캠 본인확인 연동, PASS/FAIL 운행 승인·차단 파이프라인",
      "관리자 웹: 실시간 측정 현황판, 지각·미측정자 관리, 노선·차량·직종 필터, PDF·Excel 리포트",
      "기사 앱: 블루투스 측정, 지도 기반 차량 실시간 위치(OSM), GPS 출퇴근, 배차 확인",
      "웹 Vercel 배포, iOS·Android 빌드 구성",
    ],
    results: [
      "규제 도메인 + 하드웨어(BLE) 연동 + 웹·모바일 풀스택을 단독으로 완성",
      "회사의 음주측정 키오스크 사업과 실제로 연계되는 소프트웨어",
    ],
    stack: ["React", "TypeScript", "Python", "Flutter/Dart", "Bluetooth(BLE)", "OSM·GPS", "PDF/Excel", "Vercel"],
    details: [
      {
        label: "세부 기능",
        items: [
          "측정 사진·시각·결과를 서버에 저장하고 3년 보관 요건에 맞춘 기록 구조",
          "문의게시판·개인알림, 운행 예정·측정 완료·정상 패스·운행 중 상태 집계",
          "시간대별 측정 참여도, 금주 측정 추이 차트",
        ],
      },
    ],
  },
  {
    num: "02",
    title: "현장·작업 관리 통합 그룹웨어",
    tagline: "흩어진 현장 서비스 업무를 하나의 워크플로우 시스템으로",
    period: "2025 ~ 운영 중 · 현장 서비스 기업 맞춤 구축",
    shots: [
      {
        src: "/images/projects/aiit.jpg",
        caption: "그룹웨어 대시보드 — 작업 현황 · 출퇴근 · 게시판 · 월간 일정",
      },
    ],
    overview:
      "접수 → 지시 → 작업일지로 이어지는 현장 업무가 엑셀과 수기로 흩어져 이력 추적과 정산이 어려웠습니다. 업무 프로세스를 분석해 **상태값 기반 워크플로우**로 재설계하고, 전자결재·근태·권한까지 하나의 시스템으로 구축했습니다.",
    roles: ["업무 프로세스 분석", "워크플로우 설계", "UI 디자인", "풀스택 개발", "모바일 웹", "운영·유지보수"],
    highlights: [
      "접수 → 작업지시서 → 직원·차량 배정 → 현장 작업(사진·자재·서명) → 결과보고·고객확인 → 승인·완료",
      "전자결재·근태·연차·간트, 조직도, 고객 → 현장 → 장비 마스터",
      "역할 기반 권한(RBAC), 차량 운행일지(GPS·주행거리·유류비)·통계·인쇄 서식",
      "현장 기사용 모바일 웹을 별도 구축, 데스크탑과 실시간 연동",
    ],
    results: [
      "한 회사가 매일 실제로 쓰는 기간 시스템 — 데모가 아닌 라이브 레퍼런스",
      "기획부터 운영까지 전 과정을 단독으로 수행",
    ],
    stack: ["Python/Django", "JavaScript", "SCSS", "반응형 모바일 웹", "전자결재", "RBAC", "GPS"],
    details: [
      {
        label: "세부 기능",
        items: [
          "긴급 AS·오늘 예정·미완료/보류·이번 달 완료 KPI와 월간 캘린더(점검·AS·영업·출장 분류)",
          "출퇴근 등록과 일/주 근무시간 집계, 공지·전사게시판",
          "그룹웨어 사용가이드(웹+모바일 59p) 직접 작성",
        ],
      },
    ],
  },
  {
    num: "03",
    title: "모빌리티 ERP 전면 리디자인 및 기능 개발",
    tagline: "운영 중인 대규모 ERP 제품군의 디자인 개선과 신규 기능 개발을 함께",
    period: "2026 · 디자인 리더십 + 풀스택 개발",
    beforeAfter: {
      before: "/images/projects/before_old.jpg",
      after: "/images/projects/mobilhi.jpg",
      caption: "정보 나열식 구형 대시보드 → 최신 데이터 대시보드 (전 운수사 동일 기준으로 이식)",
    },
    overview:
      "수년간 기능 위주로 누적된 ERP는 영업·데모에서 **'요즘 시스템 같지 않다'**는 인상이 약점이었습니다. 제품군 전체의 UI/UX를 혼자 전면 개편하고, 동시에 배차·급여·회계·정비·자재·인사 영역의 신규 모듈과 백엔드 로직을 개발해 프로덕션에 출시했습니다.",
    roles: ["UI/UX 리디자인", "디자인 시스템", "신규 모듈 설계·개발", "요구사항 정의", "프로젝트 관리", "고객 커뮤니케이션"],
    highlights: [
      "컬러·타이포그래피·카드/버튼/탭/아이콘·조회필터·테이블까지 컴포넌트 표준화",
      "bento 대시보드 + KPI 타일·도넛/바/라인 차트·히트맵·게이지 시각화, 다크 레일 사이드바",
      "연료데이터 관리, 메뉴 권한(RBAC), 시설관리 모듈 신규 구축",
      "급여·4대보험·소득세 정산 로직, 회계 원장 정합성 개선",
      "운수사별 브랜드 톤앤매너(로고·컬러) 커스터마이징",
    ],
    results: [
      "최신 UI가 영업·데모의 차별점이 되어 **신규 계약 수주에 직접 기여**",
      "플래그십 대시보드가 이후 전 운수사 ERP 이식의 디자인 기준이 됨",
    ],
    stack: ["Python", "Django", "JavaScript", "SCSS", "htmx", "REST API", "RBAC", "Figma", "Design System"],
    details: [
      {
        label: "담당 범위",
        items: [
          "배차·수입금·급여·회계·정비·자재·인사·경영분석 전 영역 (Python/Django + JS)",
          "신규 도입 ERP의 요구사항 정의(10개 모듈)·개발방향 수립·배포 협의",
        ],
      },
    ],
  },
];

/* ---------- 03-b. OTHER PROJECTS ---------- */

export interface MoreProject {
  title: string;
  tagline: string;
  meta: string;
  side?: boolean;
  shot?: Shot;
  highlights: string[];
  stack: string[];
  details?: DetailBlock[];
}

export const moreProjects: MoreProject[] = [
  {
    title: "운수사 현장 업무 앱",
    tagline: "승무원·사무·정비·충전시설 담당용 모바일 앱 — 한 달 안에 재구성하고 양대 스토어 출시",
    meta: "2026.09 ~ 10 · 2인 팀 메인 개발 · iOS/Android v1.0.0",
    shot: {
      src: "/images/projects/app_home_main.jpg",
      caption: "승무원 홈 (스토어 등록 화면)",
      kind: "mobile",
    },
    highlights: [
      "디자인 토큰 기반 디자인 시스템 + 직군별 홈 4종, 50여 화면 전면 교체",
      "배차·출퇴근(위치·차량 QR)·운행일지·정비 RO·안전점검·전기버스 충전 현황",
      "App Store Connect API로 메타데이터·스크린샷·심사 제출 자동화, Play 심사 거부 대응",
    ],
    stack: ["Flutter/Dart", "GetX", "Firebase(FCM)", "QR/바코드", "Geolocator", "App Store Connect API"],
    details: [
      {
        label: "세부 기능",
        items: [
          "공용 컴포넌트 — QR/바코드 스캐너, 사진 업로드, 터치 서명, 음성 입력, 화면 캡처 방지, 태블릿 레이아웃",
          "전자결재 4종·문서함, 일정 캘린더(주/월/년·반복), 열화상 카메라 목록, 월 충전량 통계",
          "회사 앱스토어 계정·서명키·GitHub 권한 관리 담당",
        ],
      },
    ],
  },
  {
    title: "개발팀 생산성 도구 — 사내 그룹웨어",
    tagline: "GitHub 커밋을 자동 수집해 업무 분석·WBS·정부지원사업 관리까지",
    meta: "2026 · 신규 기능 설계·구축",
    shot: {
      src: "/images/projects/groupware2.jpg",
      caption: "활동 추세 · 카테고리 분포 · 시간대/요일 커밋 · 히트맵",
    },
    highlights: [
      "GitHub 웹훅으로 커밋 자동 수집, 담당자별 작업현황 대시보드·14일 추이 KPI",
      "간트차트에 커밋 자동 매칭(키워드 토큰·모듈 별칭), 진행보고서 생성",
      "정부지원사업 관리 — 엑셀형 인라인 편집 그리드, 점수 통계·가중치, PDF·엑셀",
    ],
    stack: ["Django", "GitHub 웹훅", "간트·WBS", "인라인 편집 그리드", "RBAC"],
  },
  {
    title: "DTG 운행기록 수신 · ERP 연동 (FMS)",
    tagline: "1초 주기 벤더 데이터를 수집·보정해 차량정시성 관제 화면까지",
    meta: "2026.03 ~ 10 · 운수사 ERP 3곳 · 설계·개발",
    highlights: [
      "벤더 DB 뷰를 차량×날짜 증분으로 가져오는 상주 수집기(10초 주기 · 8스레드), 92일 보관",
      "실시간 현황·회차 정시성·정류장 통과·운행이력·노선도 관제 화면",
      "8대 210일 원본(13GB · 6,500만 건) 분석 — 센서 글리치·시각 오류·GPS 미수신 보정 규칙",
    ],
    stack: ["Python/Django", "MySQL", "멀티스레드", "Leaflet/OSM", "SQLite"],
    details: [
      {
        label: "세부 내용",
        items: [
          "실측 대조 후 거리 컬럼 매핑, 급가감속·브레이크 시간 보존, 가속도 기준선 보정",
          "주차 차량위치 지도, 앱용 위치 API, 배차간격 현황판, 승무원별 운행시간 월간 탭",
          "같은 FMS 모듈을 운수사 두 곳에 벤더 차이를 흡수해 적용",
        ],
      },
    ],
  },
  {
    title: "외부 음주측정기 API 연동 — ERP 교통안전관리",
    tagline: "제조사 서버의 측정 기록을 ERP로 가져와 점호부·확인서까지 한 곳에서",
    meta: "2026.10 · 단독 설계·개발",
    highlights: [
      "건수 API 20초 폴링 + 증분 수신, 백그라운드 보충, 장애 시 10분 차단",
      "사번 기준 사원 매칭(662명 중 349명 다중 레코드), 배차 → 기준표 → 1년 배차 → 인사 순 폴백",
      "운전원 점호부 현황판·음주측정 확인서·양성 알림 발송·엑셀",
    ],
    stack: ["Python/Django", "외부 REST API", "백그라운드 동기화"],
    details: [
      {
        label: "세부 내용",
        items: [
          "측정 사진은 받아 둔 것만 썸네일 표시, 없는 사진은 뒷단에서 보충",
          "현황판·확인서는 측정기 회사(사업자번호) 기준, 목록은 기사 소속 기준으로 분리",
        ],
      },
    ],
  },
  {
    title: "동네 유휴 자원 연결 앱",
    tagline: "비어 있는 동네 공간을 '지금 필요한 기능'으로 찾는 서비스 — 중기부 「모두의 창업」 로컬트랙 지원",
    meta: "SIDE · 예비창업 · 2026.09 제출 · 결과 대기",
    side: true,
    highlights: [
      "문제 정의·기존 서비스 비교·수익 구조·3단계 실행 로드맵",
      "MVP 화면 목업 5종, 첫 버전 앱(자원 등록·기능 기반 검색·현재 시각 이용 가능 표시) 자체 개발 계획",
    ],
    stack: ["서비스 기획", "사업계획", "MVP 설계"],
  },
];

/* ---------- 04. PROJECT IMPACT (ERP 제품군) ---------- */

export const impactIntro =
  "디자인 개편과 동시에, 운영 중인 **운수사 ERP 제품군 전반**에서 신규 모듈·백엔드·대시보드를 개발해 프로덕션에 출시했습니다. 아래는 대표 사례입니다.";

export interface ImpactItem {
  name: string;
  badge: string;
  badgeType: "main" | "key" | "mod";
  scale: string;
  summary: string;
  items: string[];
  image: string;
}

export const impactData: ImpactItem[] = [
  {
    name: "운수사 ERP A",
    badge: "UI 개편 + 주요 개발",
    badgeType: "main",
    scale: "시내버스 154대 규모",
    summary: "전반적인 UI 개선 · 연료데이터 관리 · 차량 위치 및 경영 대시보드",
    items: [
      "15개 대메뉴를 최신 디자인 시스템으로 통일",
      "연료데이터관리 모듈 신규 — 전기·CNG·수소 충전데이터, 충전현황 대시보드",
      "어드민 실시간 차량위치 지도, 경영/정시성 대시보드(노선별 수입금 랭킹)",
      "급여·4대보험·소득세 정산 로직, 회계 원장 정합성 개선",
    ],
    image: "/images/projects/ccbus.jpg",
  },
  {
    name: "운수사 ERP B",
    badge: "UI 개편 + 주요 개발",
    badgeType: "main",
    scale: "시내버스",
    summary: "디자인 리뉴얼 · 권한 관리 · 급여 및 인사 기능 개선",
    items: [
      "bento 대시보드, 사이드바 폴딩, 브랜드 팔레트 통일, 로그인 재설계",
      "메뉴 권한(RBAC) 일괄 적용 — 부서·영업소·직군 필터, 성능 개선",
      "급여소급·4대보험·사원별 교육관리, 조회필터·테이블 전역 표준화",
    ],
    image: "/images/projects/seongnam.jpg",
  },
  {
    name: "운수사 ERP C",
    badge: "신규 도입 + UI 구축",
    badgeType: "key",
    scale: "2026 신규 도입",
    summary: "신규 도입 · 요구사항 정의 · 모듈 커스터마이징 및 대시보드 구축",
    items: [
      "킥오프 주관, 10개 모듈 요구사항 정의·개발방향 수립",
      "전역 디자인 시스템·메인 대시보드 신규 구축(운영평가·사고건수·운행실적)",
      "브랜드 아이덴티티 적용, 인사 데이터 마이그레이션 보정",
    ],
    image: "/images/projects/gonghang.jpg",
  },
  {
    name: "운수사 ERP D",
    badge: "UI 개편 + 모듈 신규",
    badgeType: "key",
    scale: "2026",
    summary: "시설관리 모듈 신규 구축 및 대시보드 개선",
    items: [
      "대시보드 UI/UX 전면 개편(브랜드 반영)",
      "시설관리 모듈 풀빌드 — 자산/결함/점검/충전/계약/약도, htmx 부분 렌더링",
    ],
    image: "/images/projects/kangjin.jpg",
  },
  {
    name: "운수사 ERP E",
    badge: "UI 개편 + 기능 개발",
    badgeType: "key",
    scale: "2026",
    summary: "대시보드 리뉴얼 및 실시간 위젯 기능 개발",
    items: [
      "메인 대시보드 전면 리뉴얼 + 뉴스·날씨 API 실시간 위젯, 스케줄러",
      "급여 정산 안정화(NULL·키 누락 서버에러 수정), 점검정비 UI",
    ],
    image: "/images/projects/bumil.jpg",
  },
];

/* ---------- 05. EXPERIENCE ---------- */

export interface CareerYear {
  year: string;
  title: string;
  items: string[];
}

export const careerData = {
  company: "㈜서울소프트",
  period: "2024.06 ~ 현재",
  roles: [
    { title: "사업추진팀 · PM", period: "2024.06 ~ 2025.12" },
    { title: "개발3팀(모빌리티팀) · PM & Full-stack Engineer", period: "2026.01 ~ 현재" },
  ],
  years: [
    {
      year: "2024",
      title: "PM 및 서비스 기획 중심",
      items: [
        "모빌리티 ERP 운영 프로젝트 관리 — WBS, 배포 점검, 매뉴얼·패치노트",
        "요구사항 분석 및 화면 설계",
        "자사 제품의 중기부 혁신제품 지정 및 조달청 등록",
      ],
    },
    {
      year: "2025",
      title: "제품 기획 및 B2B 사업 확장",
      items: [
        "운수사별 ERP 기획 및 Figma 화면 설계",
        "다중 프로젝트 일정 및 품질 관리",
        "제안서·견적서·계약, 혁신제품 시범사용 신청, 고객 커뮤니케이션",
      ],
    },
    {
      year: "2026",
      title: "PM · 디자인 · 개발 역량 확장",
      items: [
        "신규 ERP 도입 PM, 음주측정 키오스크 운수사 7곳 물품공급계약 실행",
        "제품군 전체 UI/UX 리디자인",
        "백엔드·프론트엔드·모바일 기능 직접 개발, 앱 스토어 출시",
        "DTG·음주측정기 연동, 내부 업무 자동화 구축",
      ],
    },
  ] as CareerYear[],
};

/* ---------- 06. TECHNICAL SKILLS ---------- */

export interface SkillGroup {
  group: string;
  tags: string[];
}

export const skillGroups: SkillGroup[] = [
  { group: "Frontend", tags: ["React", "TypeScript", "JavaScript", "SCSS", "HTML", "htmx"] },
  { group: "Backend", tags: ["Python", "Django", "REST API", "MySQL"] },
  { group: "Mobile", tags: ["Flutter", "Dart", "GetX", "Firebase(FCM)"] },
  { group: "Database & Integration", tags: ["DB 설계", "API 연동", "Bluetooth BLE", "GPS · OSM", "권한(RBAC)"] },
  { group: "Design", tags: ["Figma", "UI/UX", "Design System", "Data Visualization"] },
  { group: "Project Management", tags: ["WBS", "요구사항 정의", "일정 관리", "품질 관리", "B2B 커뮤니케이션", "제안·조달"] },
];

/* ---------- 07. BUSINESS & DOCUMENTATION ---------- */

export interface DocumentCard {
  title: string;
  badge: string;
  badgeType: "prop" | "ba" | "sales" | "doc";
  items: string[];
}

export const documentsData: DocumentCard[] = [
  {
    title: "제품 제안서 · 서비스 소개서",
    badge: "제안",
    badgeType: "prop",
    items: [
      "음주측정 관리 시스템 제안서 — 법규 근거 정리, 지문+캠+정밀측정+ERP 연동 3단계 필터링, 키오스크/노트북형 2종",
      "모빌리티 ERP 서비스소개서 타깃별 다버전, 리플렛, 요금표, 도입제안 공문",
    ],
  },
  {
    title: "정부지원사업 · 혁신제품",
    badge: "조달",
    badgeType: "sales",
    items: [
      "중기부 혁신제품 지정(2024.08) — 제품소개서·규격서·조달적합성 서류, 나라장터 등록",
      "혁신제품 시범사용 신청, 스마트공방/팩토리 정부지원사업 관리",
    ],
  },
  {
    title: "요구사항 정의서",
    badge: "BA",
    badgeType: "ba",
    items: [
      "관광·렌터카 운수사 WEB/APP v2.0 요구사항정의서(부가세·급여명세·정산-외주·휴가신청)",
      "신규 도입 ERP 10개 모듈 요구사항 정의 및 개발방향 수립",
    ],
  },
  {
    title: "화면 설계서 · 메뉴 구조도",
    badge: "BA",
    badgeType: "ba",
    items: [
      "그룹웨어 메뉴 구성 질문서(작업접수 → 지시서 → 일지·상태값·권한)",
      "모빌리티 ERP 기능구성도, SNS 로그인 설계, 운수사별 Figma 구성도",
    ],
  },
  {
    title: "기술 · 사업 제안서",
    badge: "입찰",
    badgeType: "doc",
    items: [
      "DTG 점검센터 운영 용역 정성제안서 — 공공기관 발주, 자사 혁신제품 기반 점검 프로세스 디지털화",
      "공공 정산관리시스템 · FMS 차량평가 플랫폼 제안 — 준공영제 운송원가 산정·보조금 집행",
    ],
  },
  {
    title: "사용자 매뉴얼 · 운영 문서",
    badge: "문서화",
    badgeType: "doc",
    items: [
      "그룹웨어 사용가이드(웹+모바일 59p), ERP 매뉴얼·패치노트·CS 내역",
      "도입 킥오프 회의록, 진행보고서, 대금청구·전자세금계산서",
    ],
  },
];

export const disclaimerNote =
  "※ 고객사·제품명은 비공개 원칙에 따라 업종·규모로만 표기했습니다. 기능·역할은 본인이 작성한 문서와 개발 내역 기반이며, 계약금액·개인정보 등 민감정보는 포함하지 않았습니다.";

/* ---------- 08. CONTACT ---------- */

export const closingData = {
  headline: "제품을 이해하고, 문제를 정의하고,\n실제 결과물로 연결하는 사람.",
  sub: "함께 더 나은 제품을 만들어 갈 기회를 기다립니다.",
  email: profileData.email,
  footer: "장소현 · Product Manager & Full-stack Engineer · Portfolio 2024–2026",
};
