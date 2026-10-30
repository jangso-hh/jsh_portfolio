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
  tagline: "모빌리티 ERP Product Manager · 기획부터 구현까지",
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
 * 12. 화면 구성 데이터 — 노션 문서형 레이아웃. 아래 export를 페이지가 위에서부터 그린다.
 *     문자열 안의 **…** 는 <b>로 렌더링된다. (src/lib/em.tsx)
 *     ※ 고객사·자사 제품명은 비공개 원칙에 따라 업종·규모로만 표기한다.
 * ====================================================================== */

export interface Prop {
  k: string;
  v: string;
}

export interface Shot {
  src: string;
  caption: string;
  kind?: "web" | "mobile";
}

export interface Toggle {
  title: string;
  items: string[];
}

/* ---------- 페이지 머리 ---------- */

export const pageData = {
  icon: "🧑‍💻",
  title: "장소현",
  subtitle: "Product Manager · 모빌리티 ERP",
  intro:
    "운수사 ERP를 기획하고 운영하는 PM입니다. 요구사항 정의와 화면 설계, 일정 관리를 맡아 오다 기획이 구현 과정에서 흐려지는 일을 줄이고자 **직접 개발을 시작**했고, 지금은 ERP 전 모듈과 그룹웨어, 모바일 앱을 백엔드부터 프론트엔드, 앱까지 구현하고 있습니다. AI 코딩 도구를 적극 활용해 기획부터 배포까지 한 흐름으로 진행합니다.",
  props: [
    { k: "소속", v: "㈜서울소프트 개발3팀(모빌리티팀) · 2024.06 ~" },
    { k: "역할", v: "PM · UI/UX · Full-stack 개발" },
    { k: "도메인", v: "시내버스 운수사 ERP · 그룹웨어 · 현장 업무 모바일 앱 (B2B)" },
    { k: "기술", v: "Python/Django · React/TypeScript · Flutter · MySQL" },
    { k: "도구", v: "Figma · Cursor · Claude Code · GitHub · App Store Connect" },
  ] as Prop[],
};

/* ---------- 한눈에 보기 ---------- */

export const glanceData = {
  callout: "**기획한 제품을 직접 만드는 PM입니다.** 아래 프로젝트는 요구사항 정의부터 개발까지 맡았고, 절반은 설계부터 출시까지 단독으로 진행했습니다.",
  stats: [
    { k: "운수사 ERP", v: "6개 제품군 · 21개 모듈 개발" },
    { k: "단독 구축", v: "그룹웨어 1종 · 음주측정 웹+앱 1종" },
    { k: "스토어 출시 앱", v: "2종 (iOS · Android)" },
    { k: "외부 연동", v: "DTG 벤더 · 음주측정기 · BLE · GPS" },
  ] as Prop[],
};

/* ---------- 개발 프로젝트 ---------- */

export interface DevProject {
  icon: string;
  title: string;
  oneLiner: string;
  props: Prop[];
  shots?: Shot[];
  beforeAfter?: { before: string; after: string; caption: string };
  summary: string;
  built: string[];
  toggles?: Toggle[];
  stack: string[];
}

export const devProjects: DevProject[] = [
  {
    icon: "🚌",
    title: "운수사 ERP — 메인 제품 (운수사 ERP B)",
    oneLiner: "시내버스 운수사 ERP의 전 모듈 개발 + UI/UX 전면 리뉴얼 + 외부 연동",
    props: [
      { k: "기간", v: "2025 ~ 현재" },
      { k: "역할", v: "전 모듈 개발 · 디자인 시스템 · 요구사항 정의" },
      { k: "담당 범위", v: "ERP 21개 모듈 전체 (기초정보 · 차량 · 배차 · 인사 · 급여 · 회계 · 수입금 · 정비 · 자재 · 시설 · 안전 · FMS 등)" },
      { k: "팀", v: "모빌리티팀 (메인 개발)" },
    ],
    shots: [
      { src: "/images/projects/seongnam.jpg", caption: "리뉴얼한 메인 대시보드 — KPI 타일 · 재직자 입사 현황 · 운전직 구성" },
    ],
    summary:
      "가장 오래, 가장 넓은 범위를 담당한 주력 제품입니다. 수년간 축적된 Django 모놀리식 ERP의 **전 모듈을 직접 개발·개편**했고, UI 전체를 새 디자인 시스템으로 전환했습니다. DTG 관제, 외부 음주측정기 연동, 현장 업무 앱이 이 제품을 중심으로 연결됩니다.",
    built: [
      "**ERP 전 모듈 개발·개편 (21개 앱)** — 기초정보(회사·영업소·부서·사원·거래처), 차량(차량·타이어·유류), 배차(일일/월/시외 배차·노선·정류장·공휴일), 인사(근태·운전경력·포상징계·휴직산재·근무복·교육), 급여, 회계, 수입금, 검차·정비, 사고/민원, 자재·재고(입출고), 시설(일반/전기/소방·자산), 식수, 운행일지·운행평가, 하이패스, 안전관리(산업안전보건), 전기버스·충전소, FMS, 공지·문의",
      "**UI/UX 전면 리뉴얼** — bento 대시보드, 사이드바 폴딩, 브랜드 팔레트, 로그인 재설계, KPI 타일 시각화. 조회필터·테이블·출력/엑셀 버튼을 전역 표준화",
      "**메뉴 권한(RBAC) 일괄 적용** — 다중선택 + 부서·영업소·직군 필터, 권한 적용 성능 개선",
      "**급여·인사 고도화** — 운수직명단 고정헤더, 급여소급, 4대보험·소득세 간이세액표 정산, 사원별 교육관리",
      "**DTG 운행기록 수신·차량정시성 관제** — 벤더 DB 뷰 증분 수집기(10초 주기·8스레드), 실시간 현황·회차 정시성·운행이력 화면",
      "**외부 음주측정기 API 연동** — 20초 폴링 증분 수신, 사번 기준 사원 매칭(662명 중 349명 다중 레코드), 점호부 현황판·확인서",
      "**현장 업무 앱(Flutter) 메인 개발** — 디자인 시스템 + 직군별 홈 4종, 50여 화면, 양대 스토어 출시 (아래 별도 항목)",
    ],
    toggles: [
      {
        title: "DTG 연동 상세",
        items: [
          "뷰 전체 컬럼 보존·92일 보관·차량별 최신 상태 테이블로 재설계",
          "실측 대조 후 거리 컬럼 매핑, 급가감속·브레이크 시간 보존, 가속도 기준선 보정, 빈 컬럼 제거",
          "실시간 현황(운행·정차·입고·미수신, 가까운 정류장+거리), 정류장 통과, 일별 요약, 노선도 — 일별 배차와 결합",
          "같은 FMS 모듈을 운수사 A에도 벤더 차이를 흡수해 적용. 운수사 C의 8대 210일 원본(SQLite 13GB·6,500만 건) 분석",
        ],
      },
      {
        title: "음주측정기 연동 상세",
        items: [
          "건수 API가 늘었을 때만 새 기록 수신, 화면 요청과 분리해 뒷단(30초)에서 보충, 서버 불가 시 10분 차단",
          "측정 사진은 받아 둔 것만 썸네일, 없는 건 그 줄이 보일 때 뒷단에서 보충",
          "노선·차량은 일별 배차 → 배차 기준표(A·B조) → 최근 1년 배차 → 인사정보 순 폴백",
          "현황판·확인서는 측정기 회사(사업자번호) 기준, 목록은 기사 소속 기준으로 분리. 양성 알림 담당자 3자리 지정·발송, 엑셀",
        ],
      },
    ],
    stack: ["Python", "Django", "MySQL", "JavaScript", "SCSS", "htmx", "REST API", "멀티스레드", "Leaflet/OSM", "RBAC"],
  },
  {
    icon: "🧰",
    title: "현장·작업 관리 통합 그룹웨어",
    oneLiner: "현장 서비스 기업의 기간 시스템 — 백엔드·프론트엔드·모바일 전 영역 단독 구현 (배포 제외)",
    props: [
      { k: "기간", v: "2025 ~ 운영 중" },
      { k: "역할", v: "기획 · UI 디자인 · 백엔드 · 프론트엔드 · 모바일 웹 · 운영" },
      { k: "담당 범위", v: "전체 (배포 제외)" },
      { k: "팀", v: "단독" },
    ],
    shots: [{ src: "/images/projects/aiit.jpg", caption: "대시보드 — 작업 현황 KPI · 출퇴근 · 게시판 · 월간 일정" }],
    summary:
      "접수 → 지시 → 작업일지가 엑셀과 수기로 분산되어 있던 업무를 분석해 **상태값 기반 워크플로우**로 재설계하고, 데이터 모델부터 화면, 현장 기사용 모바일 웹까지 단독으로 구현했습니다. 현재도 고객사에서 일상 업무에 사용 중입니다.",
    built: [
      "**워크플로우 엔진** — 접수 → 작업지시서 → 직원·차량 배정 → 현장 작업(사진·자재·서명) → 결과보고·고객확인 → 승인·완료",
      "**전자결재·근태·연차·간트**, 조직도, 고객 → 현장 → 장비 마스터, 역할 기반 권한(RBAC)",
      "**차량 운행일지**(GPS·주행거리·유류비)·통계·인쇄 서식",
      "**현장 기사용 모바일 웹 전체**를 별도 구축 — 데스크탑과 실시간 연동, 사진 촬영·서명 입력",
      "긴급 AS·오늘 예정·미완료/보류·이번 달 완료 KPI, 월간 캘린더(점검·AS·영업·출장), 공지·전사게시판",
    ],
    toggles: [
      {
        title: "운영·문서",
        items: ["그룹웨어 사용가이드(웹+모바일 59p) 직접 작성", "메뉴 구성 질문서(작업접수 → 지시서 → 일지·상태값·권한)로 요구사항 수집"],
      },
    ],
    stack: ["Python", "Django", "JavaScript", "SCSS", "반응형 모바일 웹", "전자결재", "RBAC", "GPS"],
  },
  {
    icon: "🍺",
    title: "운수종사자 음주측정 준법 서비스 — 웹 + 앱",
    oneLiner: "블루투스 측정기 → 서버 → 운행 승인/차단, 기획부터 배포까지 단독 수행",
    props: [
      { k: "기간", v: "2026" },
      { k: "역할", v: "기획 · UI/UX · 관리자 웹 · Flutter 앱 · 배포" },
      { k: "담당 범위", v: "전체" },
      { k: "팀", v: "단독" },
    ],
    shots: [{ src: "/images/projects/driveon.jpg", caption: "관리자 통합 대시보드 — 실시간 측정 현황 · 장비 연결 · 미측정자" }],
    summary:
      "여객자동차법 개정으로 음주확인과 3년 기록 보관이 의무화되었으나 현장은 여전히 수기 관리였습니다. 하드웨어(BLE 측정기·지문/캠)와 웹·앱을 하나의 파이프라인으로 통합한 서비스를 단독으로 구축했으며, 회사의 음주측정 키오스크 사업과 연계되어 운영됩니다.",
    built: [
      "**측정 파이프라인** — BLE 음주측정기 + 지문/캠 본인확인 → 서버 전송 → PASS/FAIL 운행 승인·차단",
      "**관리자 웹(React·TS)** — 실시간 측정 현황판, 지각·미측정자 관리, 노선·차량·직종 필터, PDF·Excel 리포트, 문의게시판·개인알림",
      "**기사 앱(Flutter)** — 블루투스 측정, 지도 기반 차량 실시간 위치(OSM·역지오코딩), GPS 출퇴근, 배차 확인·측정기록",
      "웹 Vercel 배포, iOS·Android 빌드 구성",
    ],
    stack: ["React", "TypeScript", "Python", "Flutter/Dart", "Bluetooth(BLE)", "OSM·GPS", "PDF/Excel", "Vercel"],
  },
  {
    icon: "📱",
    title: "운수사 현장 업무 앱 (Flutter)",
    oneLiner: "승무원·사무·정비·충전시설 담당자용 앱 — 1개월 내 50여 화면 재구성, iOS/Android 출시",
    props: [
      { k: "기간", v: "2026.09 ~ 10 · v1.0.0 출시" },
      { k: "역할", v: "UI/UX 디자인 시스템 · 화면·기능 구현 · 스토어 출시" },
      { k: "담당 범위", v: "메인 개발 (기반 코드·빌드 환경 1인 + 본인)" },
      { k: "팀", v: "2인" },
    ],
    shots: [
      { src: "/images/projects/app_home_main.jpg", caption: "승무원 홈", kind: "mobile" },
      { src: "/images/projects/app_dispatch.jpg", caption: "오늘 운행 현황", kind: "mobile" },
      { src: "/images/projects/app_work_hours.jpg", caption: "근로시간", kind: "mobile" },
    ],
    summary:
      "메인 ERP 도입과 함께 필요해진 현장 업무 앱입니다. 기존 앱 코드 위에 디자인 토큰 기반 디자인 시스템을 새로 구축하고, 직군별 홈 4종과 50여 화면을 교체한 뒤 신규 기능을 3차에 걸쳐 추가하여 양대 스토어에 출시했습니다.",
    built: [
      "**승무원** — 배차 현황, 출퇴근(위치 기록·차량 QR), 운행일지, 출근 차량 4면 점검, 근로시간·휴가·급여명세",
      "**정비** — Repair Order 접수→작업→승인, 차량 QR 정비이력, 검차·세차·검사 만료, 자재 재고·입출고",
      "**안전보건·전기버스** — 기계·기구 QR 점검표, 산업재해, 충전소 현황·설비 이상 접수, 월 충전량 통계, 전자결재 4종",
      "**공용 컴포넌트** — QR/바코드 스캐너, 사진 업로드, 터치 서명, 음성 입력, 화면 캡처 방지(FLAG_SECURE), 태블릿 레이아웃",
      "**출시 자동화** — App Store Connect API로 메타데이터·스크린샷·심사정보·빌드 제출, 스토어 스크린샷 생성 스크립트, Play 심사 거부 원인 수정 후 재제출",
    ],
    toggles: [{ title: "기타", items: ["Android R8·iOS 디바이스 설정, 런처 아이콘", "회사 앱스토어 계정·서명키·GitHub 권한 관리 담당"] }],
    stack: ["Flutter/Dart", "GetX", "REST API", "Firebase(FCM)", "QR/바코드", "Geolocator", "fl_chart", "App Store Connect API"],
  },
  {
    icon: "🏢",
    title: "사내 그룹웨어 — 거의 모든 모듈 개편",
    oneLiner: "인사·개발평가, 영업관리, 사업관리, 전자결재, WBS까지 사내 시스템 전반을 재구축",
    props: [
      { k: "기간", v: "2026" },
      { k: "역할", v: "신규 모듈 설계·구축 · 기존 모듈 개편" },
      { k: "담당 범위", v: "인사/개발평가 · 영업관리 · 사업관리 · 전자결재 · WBS · 권한 · 대시보드" },
      { k: "팀", v: "주력 개발" },
    ],
    shots: [
      { src: "/images/projects/groupware.jpg", caption: "GitHub 업무분석/평가 — 커밋 자동 수집 · 팀 리더보드" },
      { src: "/images/projects/groupware2.jpg", caption: "활동 추세 · 작업 카테고리 분포 · 시간대/요일 커밋 · 히트맵" },
    ],
    summary:
      "개발 진척·성과·정부지원사업 데이터를 수기로 취합하던 사내 시스템입니다. 필요한 도구를 직접 발굴해 구축했으며, 그 과정에서 그룹웨어의 거의 모든 모듈을 새로 설계·개발했습니다.",
    built: [
      "**GitHub 업무분석·개발평가** — 웹훅으로 커밋 자동 수집, 담당자별 작업현황·14일 추이 KPI, 카테고리 분포·시간대/요일 히트맵, 레이더 평가",
      "**WBS 관리** — 간트차트에 커밋을 키워드 토큰·모듈 별칭으로 자동 매칭, 진행보고서 생성",
      "**사업관리(정부지원사업)** — 엑셀형 인라인 편집 그리드(드래그 정렬·컬럼 고정·우클릭 메뉴), 점수 통계·가중치, PDF/인쇄, 엑셀 업/다운",
      "**영업관리·계약서 보관함**, 전자결재(복사 후 재작성), 인사 모듈, 메뉴 권한 관리, 대시보드 리디자인",
    ],
    stack: ["Django", "JavaScript", "SCSS", "GitHub 웹훅", "간트·WBS", "인라인 편집 그리드", "RBAC", "PDF/Excel"],
  },
  {
    icon: "🎨",
    title: "운수사 ERP 제품군 전체 UI/UX 리디자인",
    oneLiner: "구형 ERP 6개 제품군을 하나의 디자인 시스템으로 — '계약을 만든 디자인'",
    props: [
      { k: "기간", v: "2026" },
      { k: "역할", v: "디자인 시스템 · 전 제품 UI 개편 · 운수사별 브랜딩" },
      { k: "담당 범위", v: "전 제품군 (단독)" },
      { k: "성과", v: "영업·데모 차별점 → 신규 계약 수주에 직접 기여" },
    ],
    beforeAfter: {
      before: "/images/projects/before_old.jpg",
      after: "/images/projects/mobilhi.jpg",
      caption: "정보 나열식 구형 대시보드 → 최신 데이터 대시보드 (전 운수사 동일 기준으로 이식)",
    },
    summary:
      "영업·데모 현장에서 '구형 시스템'이라는 평가를 받던 ERP였습니다. 컬러·타이포그래피·카드/버튼/탭/아이콘·조회필터·테이블까지 컴포넌트를 표준화하고, 플래그십 대시보드를 먼저 완성한 뒤 전 운수사 제품에 동일한 기준으로 적용했습니다.",
    built: [
      "**디자인 시스템** — 팔레트, 타이포그래피(NanumSquare), 컴포넌트 표준, 다크 레일 사이드바·폴딩, 반응형",
      "**bento 대시보드** + KPI 타일·도넛/바/라인 차트·히트맵·게이지·랭킹 시각화",
      "**운수사별 브랜드 톤앤매너** — 로고·컬러를 반영한 '우리 회사 전용 시스템' 경험",
      "실시간 관제·자율주행·디지털 트윈 대시보드(라이브맵·차량 선택) 등 차세대 화면 설계",
    ],
    stack: ["Design System", "UI/UX", "데이터 시각화", "SCSS", "Figma", "반응형", "브랜딩"],
  },
];

/* ---------- 다른 운수사 ERP 개발 사례 ---------- */

export interface ErpOther {
  name: string;
  scale: string;
  summary: string;
  items: string[];
  image: string;
}

export const erpOthersIntro =
  "메인 제품 외에도 운영 중인 운수사 ERP 제품군 전반에서 **신규 모듈·백엔드 로직·대시보드를 개발**해 프로덕션에 출시했습니다.";

export const erpOthers: ErpOther[] = [
  {
    name: "운수사 ERP A",
    scale: "시내버스 154대 · UI 개편 + 주요 개발",
    summary: "연료데이터 신규 모듈 · 차량 실시간 위치 · 경영/정시성 대시보드",
    items: [
      "15개 대메뉴 UI/UX 전면 리디자인",
      "연료데이터관리 모듈 신규 — 전기·CNG·수소 충전데이터(모델·업로드·ZIP·배차노선 매칭 엑셀), 충전현황 대시보드",
      "어드민 실시간 차량위치 지도(차량 검색·줌별 아이콘·건물 폴리곤), 경영/정시성 대시보드(노선별 수입금 랭킹)",
      "급여·4대보험·소득세 정산 로직, 회계 원장 정합성 개선, 공지·연장근로·정비이력·승무 등 다수 기능",
    ],
    image: "/images/projects/ccbus.jpg",
  },
  {
    name: "운수사 ERP C",
    scale: "2026 신규 도입 + UI 구축",
    summary: "요구사항 정의 · 모듈 커스터마이징 · 메인 대시보드 신규",
    items: [
      "도입 PM — 킥오프 주관, 10개 모듈 요구사항 정의·개발방향 수립, 배포 협의",
      "전역 디자인 시스템·메인 대시보드 신규(운영평가·사고건수 링·운행실적)",
      "브랜드 아이덴티티 적용, 회계·자재·정비·수입금 모듈 UI 정비, 인사 데이터 마이그레이션 보정",
    ],
    image: "/images/projects/gonghang.jpg",
  },
  {
    name: "운수사 ERP D",
    scale: "2026 · UI 개편 + 모듈 신규",
    summary: "시설관리 모듈 풀빌드 · 대시보드 개편",
    items: [
      "시설관리 모듈 신규 풀빌드 — 자산/결함/점검/충전/계약/약도 + 모달 등록 UI + 데모 시드",
      "htmx 부분 렌더링으로 로딩 성능 개선, 대시보드 전면 개편(브랜드 반영)",
    ],
    image: "/images/projects/kangjin.jpg",
  },
  {
    name: "운수사 ERP E",
    scale: "2026 · UI 개편 + 기능 개발",
    summary: "메인 대시보드 리뉴얼 · 실시간 위젯 · 스케줄러",
    items: [
      "메인 대시보드 전면 리뉴얼 + 뉴스·날씨 API 실시간 위젯, 메뉴 위젯/검색 UX, 스케줄러",
      "급여 정산 안정화(NULL·키 누락 서버에러·정비직 필터 수정), 점검정비 UI",
    ],
    image: "/images/projects/bumil.jpg",
  },
];

/* ---------- AI를 쓰는 방식 ---------- */

export const aiData = {
  callout:
    "**Cursor·Claude Code를 개발 프로세스에 통합해 활용합니다.** 설계와 검증은 직접 수행하고 반복 구현과 코드 탐색은 AI에 위임하여, 1인 개발로도 팀 단위의 생산성을 확보합니다.",
  items: [
    {
      title: "대량 화면 교체",
      desc: "현장 업무 앱 50여 화면 — 디자인 토큰과 기준 화면을 먼저 정의한 뒤 나머지 화면을 AI로 변환하고 직접 검수·수정했습니다. 1개월 내 전면 재구성이 가능했던 핵심 요인입니다.",
    },
    {
      title: "레거시 ERP 파악",
      desc: "수년간 축적된 Django 모놀리식의 모듈 구조와 쿼리 흐름을 AI로 요약해 변경 영향 범위를 먼저 파악한 뒤 작업에 착수합니다.",
    },
    {
      title: "데이터 분석·보정 규칙",
      desc: "DTG 원본 6,500만 건 분석 스크립트를 작성하고, 센서 글리치·시각 오류 패턴을 찾아 보정 규칙으로 정리했습니다.",
    },
    {
      title: "자동화 스크립트",
      desc: "App Store Connect API 제출 자동화, 스토어 스크린샷 생성, GitHub 웹훅 커밋 수집 등 반복 작업을 스크립트로 전환했습니다.",
    },
    {
      title: "문서 초안",
      desc: "요구사항정의서·제안서·사용가이드의 구조를 AI로 설계하고, 내용은 직접 작성합니다.",
    },
  ],
};

/* ---------- 기획·PM도 합니다 ---------- */

export const pmData = {
  intro: "같은 제품에서 PM으로 수행한 업무입니다. 요구사항 정의부터 일정 관리, 영업 지원까지 담당했습니다.",
  groups: [
    {
      title: "요구정의 · 화면 설계",
      items: ["운수사별 업무 분석, 메뉴·기능 구조 설계, Figma 구성도", "신규 도입 ERP 10개 모듈 요구사항 정의·개발방향 수립, 킥오프·회의록"],
    },
    {
      title: "프로젝트 관리",
      items: ["다중 프로젝트 WBS — 진척 점검·QC·구현 기간 설정, 개발자/업체 소통", "배포 점검, 매뉴얼·패치노트·CS 보고서"],
    },
    {
      title: "제안 · 계약 · 조달",
      items: [
        "자사 제품의 중기부 혁신제품 지정(2024.08)·조달청 등록 — 제품소개서·규격서·조달적합성 서류",
        "음주측정 키오스크 운수사 7곳 물품공급계약, 구독 견적·계약, 공공입찰 정성제안서",
      ],
    },
  ] as Toggle[],
};

/* ---------- 경력 ---------- */

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
    { title: "개발3팀(모빌리티팀) · PM & Full-stack 개발", period: "2026.01 ~ 현재" },
  ],
  years: [
    {
      year: "2024",
      title: "PM · 서비스 기획",
      items: ["모빌리티 ERP 운영 PM — WBS, 배포 점검, 매뉴얼·패치노트", "혁신제품 지정·조달청 등록"],
    },
    {
      year: "2025",
      title: "기획 + 개발 시작",
      items: ["운수사별 ERP 화면 설계, 다중 프로젝트 일정·품질 관리", "유지보수·CS를 직접 맡으며 코드에 밀착, 현장 그룹웨어 단독 구축 시작"],
    },
    {
      year: "2026",
      title: "풀스택 · 디자인 주도",
      items: [
        "메인 ERP 전 모듈 개발, 제품군 전체 UI 리디자인",
        "음주측정 웹+앱, 현장 업무 앱 스토어 출시, DTG·음주측정기 연동, 사내 그룹웨어 개편",
      ],
    },
  ] as CareerYear[],
};

/* ---------- 기술 스택 ---------- */

export interface SkillGroup {
  group: string;
  tags: string[];
}

export const skillGroups: SkillGroup[] = [
  { group: "Backend", tags: ["Python", "Django", "REST API", "MySQL", "SQLite", "멀티스레드 수집기"] },
  { group: "Frontend", tags: ["JavaScript", "React", "TypeScript", "SCSS", "HTML", "htmx"] },
  { group: "Mobile", tags: ["Flutter", "Dart", "GetX", "Firebase(FCM)", "App Store Connect API"] },
  { group: "Integration", tags: ["Bluetooth BLE", "GPS · OSM/Leaflet", "외부 벤더 DB/API", "GitHub 웹훅", "RBAC 설계"] },
  { group: "AI Tools", tags: ["Cursor", "Claude Code"] },
  { group: "Design", tags: ["Figma", "Design System", "Data Visualization"] },
  { group: "PM", tags: ["요구사항 정의", "WBS", "품질 관리", "제안·조달·계약"] },
];

/* ---------- 산출물 ---------- */

export interface DocumentCard {
  title: string;
  items: string[];
}

export const documentsData: DocumentCard[] = [
  {
    title: "제품 제안서 · 서비스 소개서",
    items: ["음주측정 관리 시스템 제안서 — 법규 근거, 3단계 안전 필터링, 키오스크/노트북형 2종", "모빌리티 ERP 서비스소개서 다버전·리플렛·요금표·도입제안 공문"],
  },
  {
    title: "정부지원사업 · 혁신제품",
    items: ["중기부 혁신제품 지정(2024.08) — 제품소개서·규격서·조달적합성 서류, 나라장터 등록", "혁신제품 시범사용 신청, 스마트공방/팩토리 정부지원사업 관리"],
  },
  {
    title: "요구사항정의서 · 화면설계 · 메뉴구조도",
    items: ["관광·렌터카 운수사 WEB/APP v2.0 요구사항정의서", "그룹웨어 메뉴 구성 질문서, 모빌리티 ERP 기능구성도, SNS 로그인 설계"],
  },
  {
    title: "기술 · 사업 제안서",
    items: ["DTG 점검센터 운영 용역 정성제안서(공공기관 발주)", "공공 정산관리시스템 · FMS 차량평가 플랫폼 제안"],
  },
  {
    title: "매뉴얼 · 운영 문서",
    items: ["그룹웨어 사용가이드(웹+모바일 59p), ERP 매뉴얼·패치노트·CS 내역", "킥오프 회의록, 진행보고서, 대금청구·전자세금계산서"],
  },
];

export const disclaimerNote =
  "고객사·제품명은 비공개 원칙에 따라 업종·규모로만 표기했습니다. 기능·역할은 본인이 작성한 문서와 개발 내역 기반이며, 계약금액·개인정보 등 민감정보는 포함하지 않았습니다.";

/* ---------- 사이드 프로젝트 ---------- */

export const sideProject = {
  title: "동네 유휴 자원 연결 앱",
  meta: "예비창업 · 중기부 「모두의 창업」 2차 로컬트랙 지원 · 2026.09 제출, 결과 대기",
  desc: "주민이 지금 필요한 기능(잠깐 쉴 곳·비 피할 곳·아이와 갈 곳)을 고르면, 그 시각에 비어 있는 동네 공간을 업종과 상관없이 하나의 결과로 보여주는 서비스. 가게는 개방할 기능·시간·조건만 등록합니다.",
  items: ["문제 정의·기존 서비스 비교·수익 구조·3단계 로드맵", "MVP 화면 목업 5종, 첫 버전 앱(자원 등록·기능 기반 검색·현재 시각 이용 가능 표시) 자체 개발 계획"],
};

/* ---------- 연락 ---------- */

export const closingData = {
  headline: "문제를 정의하고, 직접 만들어 결과까지 책임집니다.",
  sub: "함께 더 나은 제품을 만들어 갈 기회를 기다립니다.",
  email: profileData.email,
  footer: "장소현 · Product Manager & Full-stack Developer · 2024–2026",
};
