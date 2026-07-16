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
    title: "알콜프리 (DRIVE ON) — 운수종사자 음주측정 준법 서비스",
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
    title: "현장·작업 관리 통합 그룹웨어 (에이아이정보기술)",
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
    title: "개발팀 생산성 도구 — 서울소프트 그룹웨어",
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
      "수년간 기능 위주로 누적된 모빌하이 ERP는 UI가 노후화되어, 신규 운수사 영업·데모에서 " +
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
      "전 운수사 ERP의 UI/UX를 혼자서 최신 디자인으로 전면 개편 — 춘천·성남·공항버스·강진·범일·모빌하이 등 제품군 전반을 일관된 디자인 언어로 통일",
      "디자인 시스템 구축 — 컬러 팔레트·타이포그래피(NanumSquare)·카드/버튼/탭/아이콘·조회필터·테이블까지 컴포넌트 표준화",
      "bento 대시보드 레이아웃 + 데이터 시각화 고도화(KPI 타일·도넛/바/라인 차트·히트맵·게이지·랭킹), 다크 레일 사이드바·폴딩, 반응형",
      "운수사별 브랜드 톤앤매너 커스터마이징(로고·컬러 반영)으로 '우리 회사 전용 시스템' 경험 제공",
      "[춘천시민버스 · 154대] UI 전면 리디자인 · 연료데이터관리 모듈 신규(전기·CNG·수소) · 어드민 실시간 차량위치 지도 · 경영/정시성 대시보드",
      "[성남 모빌하이] UI/UX 전면 리뉴얼 · 메뉴 권한(RBAC) 일괄 적용 · 급여·인사 고도화",
      "[공항버스 · 2026 신규 계약] 신규 도입 커스터마이징 · 메인 대시보드 · 브랜드 디자인 시스템 구축",
      "[강진교통 · 2026] 대시보드 전면 개편 · 시설관리 모듈 신규 풀빌드(htmx 부분 렌더링)",
      "[범일운수 · 2026] 메인 대시보드 전면 리뉴얼 · 실시간 위젯(뉴스·날씨 API) · 스케줄러",
      "[모빌하이 · 플래그십] 대표 대시보드 신규 디자인 → 전 운수사 이식 기준 · 실시간 관제·자율주행·디지털 트윈 등 차세대 화면 설계",
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
      "음주측정 키오스크 다수 운수사 물품공급계약(성진·제일·전일·호남·신흥·춘천·강진) 및 발주·세금계산서 집행",
      "공항버스 ERP 도입 PM — 킥오프 주관·회의록, 10개 모듈 요구사항 정의·개발방향 수립, 배포 협의 / 성남시내버스 협약",
      "개발 본격 전환 — 대표 개발 프로젝트를 직접 구현 / DTG 정성제안서·모빌하이 IR",
    ],
    techStack: ["Django", "React", "TypeScript", "Flutter", "SCSS"],
  },
  {
    title: "㈜서울소프트 · 사업추진팀",
    role: "제품화 & B2B 영업·조달 본격화",
    period: "2025.09 ~ 2025.12",
    description: "모빌하이 제품화와 B2B 영업·정부조달을 본격적으로 추진.",
    details: [
      "모빌하이 서비스소개서 타깃별 다버전·요금표·리플렛·도입제안 공문 제작",
      "신흥운수·강진·제천 구독 견적·계약, 음주측정 시스템 제안서·견적",
      "혁신제품 시범사용 신청(서울 마을버스조합·번창교통·인천·제천)",
    ],
  },
  {
    title: "㈜서울소프트 · 사업추진팀",
    role: "모빌리티 ERP 화면설계·기획 총괄 + 다중 프로젝트 WBS",
    period: "2025.01 ~ 2025.08",
    description:
      "모빌리티 ERP 전반의 화면설계·기획을 담당하고 다중 프로젝트 일정을 총괄.",
    details: [
      "운수사별 업무 분석, 메뉴·기능 구조 설계, 요구사항 정의·컨펌, Figma 구성도(춘천·성남·공항버스 등 제품군 전반)",
      "다중 프로젝트 일정 총괄(진척 점검·QC·구현 기간 설정·개발자/업체 소통)",
      "인사총무·산업기능요원·인바운드 CS",
    ],
  },
  {
    title: "㈜서울소프트 · 사업추진팀",
    role: "PM 온보딩 + 모빌하이 혁신제품 지정",
    period: "2024.06 ~ 2024.12",
    description:
      "사업추진팀 PM으로 온보딩하며 ERP 운영 PM과 정부조달 업무를 수행, 모빌하이 혁신제품 지정을 획득.",
    details: [
      "범일운수·화성도시공사 ERP 운영 PM — WBS 일정관리, 배포 점검, 매뉴얼·패치노트·CS 보고서, 대금청구·전자세금계산서",
      "모빌하이 중기부 혁신제품 지정(2024.08) — 제품소개서·규격서·조달적합성 서류, 나라장터 등록 → 지정 획득",
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
    title: "중소벤처기업부 혁신제품 지정 — 모빌하이",
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
      "한국교통안전공단 발주 — 점검센터 18개소·출장·콜센터, 폐업 제조사 DTG 무상 점검·수리·교체. 혁신제품 「모빌하이」 기반 디지털화, 장기계속계약(~2027.04), 정성 7개 평가항목 점수 배분 전략.",
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
      "푸른솔관광 WEB/APP v2.0 요구사항정의서(부가세·급여명세·정산-외주·휴가신청), 그룹웨어 메뉴 구성 질문서(작업접수→지시서→일지·상태값·권한), 모빌하이 기능구성도, SNS 로그인 설계.",
    projectId: 3,
  },
  {
    organization: "모빌하이 서비스소개서 · 세일즈킷 · 사용가이드",
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
 * 12. 문서형 디자인 데이터 (design-reference/original.html 1:1 이식)
 *     문자열 안의 **…** 는 <b>, ==…== 는 민트 강조, \n 은 줄바꿈으로
 *     렌더링됩니다. (src/lib/em.tsx 참고)
 * ====================================================================== */

export interface DocHeroData {
  eyebrow: string;
  title: string;
  who: string;
  lead: string;
  pills: string[];
}

export const docHeroData: DocHeroData = {
  eyebrow: "Product Manager × Full-stack Engineer",
  title: "제품을 **발굴하고, 만들고, 파는**\n프로덕트 엔지니어",
  who: "장소현 · ㈜서울소프트 개발3팀(모빌리티팀) · Full-stack Engineer & PM",
  lead:
    "ERP와 그룹웨어를 비롯한 업무 시스템을 기획하고 개발했습니다. " +
    "프로젝트마다 요구사항 분석부터 설계, 개발, 운영까지 직접 참여했으며, " +
    "모빌리티 ERP와 ERP 연계 서비스를 구축하며 실제 운영 환경에서 사용되는 제품을 만들어 왔습니다.\n\n" +
    "PM의 관점으로 문제를 정의하고, 개발자의 관점으로 해결하는 것이 저의 가장 큰 강점입니다.",
  pills: [
    "Python·Django",
    "React·TypeScript",
    "Flutter",
    "JavaScript·SCSS",
    "Product / BA",
    "제안·조달·계약",
    "모빌리티 도메인",
  ],
};

export interface TitledDesc {
  title: string;
  desc: string;
}

export const valueStripData: TitledDesc[] = [
  {
    title: "기획–개발 원팀",
    desc: "PM이면서 직접 구현. 요구정의에서 배포까지 **번역 손실 없이** 빠르게.",
  },
  {
    title: "0 → 1 단독 완성",
    desc: "음주측정 준법 서비스·현장 그룹웨어를 **혼자 기획·개발·운영**.",
  },
  {
    title: "모빌리티 도메인",
    desc: "배차·정시성·수입금 정산·급여·DTG·음주측정까지 **규제와 현장**을 이해.",
  },
];

export const strengthsData: TitledDesc[] = [
  {
    title: "기획 의도를 코드로 옮기는 사람",
    desc: "스펙을 남에게 넘기지 않고 **직접 만듭니다.** 왜 만드는지 아는 사람이 만들기에 스펙 왜곡이 없고, 아이디어에서 배포까지의 사이클이 짧습니다.",
  },
  {
    title: "혼자서도 제품을 완성하는 실행력",
    desc: "음주측정 준법 서비스(웹+앱)와 현장관리 그룹웨어를 **기획·UI 디자인·풀스택·배포·운영까지 단독**으로. 팀을 붙이면 리드도 가능합니다.",
  },
  {
    title: "정확성이 생명인 영역을 다룸",
    desc: "급여·4대보험·회계·음주측정 규제처럼 **오차가 곧 사고**인 도메인을 프로덕션 수준으로 개발·운영합니다.",
  },
  {
    title: "사업까지 아는 개발자",
    desc: "제품 제안서·견적·계약, 중기부 **혁신제품 지정·조달청 등록**, 다중 프로젝트 PM(WBS)까지. 개발과 비즈니스를 함께 말합니다.",
  },
  {
    title: "UI/UX로 계약을 만드는 디자인 감각",
    desc: "노후화된 ERP를 **최신 디자인으로 혼자 전면 개편**. 요즘 사용자가 원하는 완성도로 데모 경쟁력을 끌어올려 **실제 계약 수주에 기여**했습니다.",
  },
  {
    title: "넓은 스택 · 빠른 실행",
    desc: "Django·React·Flutter로 웹·앱·백엔드를 오가며 **여러 프로젝트에 동시에 프로덕션 기능을 출시**합니다.",
  },
];

export interface DualAxisData {
  pm: { icon: string; title: string; items: string[] };
  dev: { icon: string; title: string; items: string[] };
  synergy: string;
}

export const dualAxisData: DualAxisData = {
  pm: {
    icon: "P",
    title: "기획 · PM 역량",
    items: [
      "**제품 기획 · 요구정의(BA) · 화면설계** — 운수사 ERP 라인업 전반",
      "**프로젝트 관리(WBS)** — 일정·리소스·QC, 다중 프로젝트 동시 총괄",
      "**제안 · 계약 · 정부조달** — 제안서·견적·계약, 중기부 혁신제품 지정·조달청 등록",
      "도입 킥오프·회의록·요구사항 정의, 고객·현업·개발자 커뮤니케이션 허브",
    ],
  },
  dev: {
    icon: "</>",
    title: "개발 역량",
    items: [
      "**풀스택** — Python/Django · React/TS · Flutter · JavaScript/SCSS",
      "**단독 제품 3종** — 음주측정 웹·앱, 현장관리 그룹웨어 (기획~배포~운영)",
      "**운수사 ERP 신규 모듈·백엔드** — 연료데이터·권한(RBAC)·정산·대시보드",
      "**전 제품 UI/UX 디자인 시스템 개편**, 웹훅 자동화·데이터 시각화",
    ],
  },
  synergy:
    "두 역량이 **한 사람 안에서 시너지** — 기획 의도를 번역 손실 없이 직접 코드로, 개발 현실을 반영해 더 정확한 기획으로.",
};

export interface GrowthStep {
  year: string;
  title: string;
  desc: string;
}

export const growthData: GrowthStep[] = [
  {
    year: "2024",
    title: "PM · 기획",
    desc: "운수사 ERP 프로젝트 관리(WBS)·요구정의·화면설계. 모빌하이 혁신제품 지정·조달 등록.",
  },
  {
    year: "2025",
    title: "＋ 개발 시작",
    desc: "유지보수·CS를 직접 맡으며 코드에 밀착, 개발까지 손대기 시작.",
  },
  {
    year: "2026 상반기",
    title: "＋ 풀스택 · UI 디자인",
    desc: "백엔드·프론트·모바일 구현 + 전 운수사 ERP UI를 최신 디자인으로 개편.",
  },
  {
    year: "현재",
    title: "PM · 개발 동시 주도",
    desc: "기획·관리와 풀스택 개발·디자인을 병행 — 두 역량 모두 주력으로.",
  },
];

export interface CaseShot {
  src: string;
  caption: string;
}

export interface CaseRow {
  label: string;
  text?: string;
  items?: string[];
  impact?: boolean;
}

export interface CaseStudy {
  tag: string;
  title: string;
  role: string;
  purple?: boolean;
  shots?: CaseShot[];
  beforeAfter?: { before: string; after: string; caption: string };
  rows: CaseRow[];
  stack: string[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    tag: "단독 개발 · 웹+앱",
    title: "알콜프리 — 운수종사자 음주측정 준법 서비스",
    role: "기획 · UI/UX · 웹(React·TS·Python) · 앱(Flutter) · 배포 — 전 과정 단독",
    shots: [
      {
        src: "/images/projects/driveon.jpg",
        caption: "실제 화면 — DRIVE ON(알콜프리) 관리자 통합 대시보드",
      },
    ],
    rows: [
      {
        label: "배경",
        text: "여객자동차법 개정으로 운수종사자 **음주확인·3년 기록보관이 의무화**(미이행 시 과징금·사업정지). 그러나 현장은 여전히 수기 관리로 법적 리스크와 대리측정 문제가 상존.",
      },
      {
        label: "내가 한 일",
        items: [
          "블루투스 음주측정기·지문/캠 본인확인을 연동해 **측정→서버 전송→PASS/FAIL 운행 승인·차단** 파이프라인 구현",
          "관리자 웹: 실시간 측정 현황판, 지각/미측정자 관리, 노선·차량·직종 필터 + **PDF·Excel 리포트**, 문의게시판·개인알림",
          "기사 앱: 블루투스 측정, **지도 기반 차량 실시간 위치**(OSM·역지오코딩), GPS 출퇴근, 배차 확인·측정기록",
          "웹 Vercel 배포, 앱 iOS·Android 빌드 구성까지 직접",
        ],
      },
      {
        label: "어필",
        impact: true,
        text: "**규제 도메인 이해 + 하드웨어(BLE) 연동 + 웹·모바일 풀스택**을 혼자 완성. 회사의 음주측정 키오스크 사업과 실제로 연계되는 소프트웨어.",
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "Python",
      "Flutter/Dart",
      "Bluetooth(BLE)",
      "OSM·GPS",
      "PDF/Excel",
      "Vercel",
    ],
  },
  {
    tag: "단독 개발 · 라이브 운영",
    title: "현장·작업 관리 통합 그룹웨어 (에이아이정보기술)",
    role: "기획 · UI 디자인 · 풀스택(Django·JS) · 모바일 · 운영 — 전 과정 단독",
    shots: [
      {
        src: "/images/projects/aiit.jpg",
        caption: "실제 화면 — 현장·작업 관리 그룹웨어 대시보드",
      },
    ],
    rows: [
      {
        label: "배경",
        text: "현장 서비스 업무(접수→지시→작업일지)가 엑셀·수기로 분산되어 이력 추적과 정산이 어려운 상태.",
      },
      {
        label: "내가 한 일",
        items: [
          "**접수 → 작업지시서 → 직원·차량 배정 → 현장 작업(사진·자재·서명) → 결과보고·고객확인 → 승인·완료**의 상태값 기반 워크플로우 구축",
          "전자결재·근태·연차·간트, 조직도, 고객→현장→장비 마스터, **역할 기반 권한(RBAC)**",
          "차량 운행일지(GPS·주행거리·유류비)·통계·인쇄 서식, **현장 기사용 모바일 웹 전체**를 별도 구축(데스크탑과 실시간 연동)",
        ],
      },
      {
        label: "어필",
        impact: true,
        text: "한 회사가 **매일 실제로 쓰는 기간 시스템**을 혼자 기획부터 운영까지. 데모가 아니라 라이브 레퍼런스.",
      },
    ],
    stack: [
      "Python/Django",
      "JavaScript",
      "SCSS",
      "반응형 모바일 웹",
      "전자결재",
      "권한(RBAC)",
      "GPS",
    ],
  },
  {
    tag: "주력 개발 · 사내 도구",
    title: "개발팀 생산성 도구 — 서울소프트 그룹웨어",
    role: "신규 기능 설계·구축 (Django·JS·SCSS)",
    shots: [
      {
        src: "/images/projects/groupware.jpg",
        caption:
          "실제 화면 ① — GitHub 업무분석/평가 (커밋 자동 수집·팀 리더보드·레이더 평가)",
      },
      {
        src: "/images/projects/groupware2.jpg",
        caption:
          "실제 화면 ② — 활동 추세 · 작업 카테고리 분포 · 프로젝트별 기여 · 시간대/요일별 커밋 · 활동 히트맵",
      },
    ],
    rows: [
      {
        label: "배경",
        text: "개발 진척·성과·정부지원사업 데이터를 수기로 취합해 관리 부담이 큰 상황.",
      },
      {
        label: "내가 한 일",
        items: [
          "**GitHub 업무분석 시스템 신규 구축** — 웹훅으로 커밋 자동 수집, 담당자별 작업현황 대시보드, 14일 추이 KPI(문제를 스스로 발굴해 자동화)",
          "**WBS 관리** — 간트차트에 GitHub 커밋을 자동 매칭(키워드 토큰·모듈 별칭), 진행보고서 생성",
          "**정부지원사업 관리 페이지** — 엑셀형 인라인 편집 그리드(드래그 정렬·컬럼 고정·우클릭 메뉴), 점수 통계·가중치, PDF/인쇄, 엑셀 업/다운",
          "전자결재(복사 후 재작성)·계약서 보관함·메뉴 권한 관리·대시보드 리디자인",
        ],
      },
      {
        label: "어필",
        impact: true,
        text: "**필요한 도구를 스스로 발굴해 만드는 사람.** 웹훅·자동 매칭 같은 실무형 자동화를 직접 설계.",
      },
    ],
    stack: [
      "Django",
      "GitHub 웹훅·분석",
      "간트·WBS",
      "인라인 편집 그리드",
      "RBAC",
      "PDF/Excel",
    ],
  },
];

export const erpCaseStudy: CaseStudy = {
  tag: "디자인 리더십",
  title: '전 운수사 ERP UI/UX 전면 리디자인 — "계약을 만든 디자인"',
  role: "노후화된 구형 UI를 최신 디자인 시스템으로 — 제품군 전체를 단독 개편",
  purple: true,
  beforeAfter: {
    before: "/images/projects/before_old.jpg",
    after: "/images/projects/mobilhi.jpg",
    caption:
      "정보 나열식 구형 대시보드  →  최신 트렌드 데이터 대시보드 (전 운수사 동일 기준으로 이식)",
  },
  rows: [
    {
      label: "배경",
      text: '수년간 기능 위주로 누적된 모빌하이 ERP는 UI가 노후화되어, 신규 운수사 **영업·데모에서 "요즘 시스템 같지 않다"**는 인상이 약점이었습니다. 요즘 사용자는 세련되고 최신화된 화면을 원합니다.',
    },
    {
      label: "내가 한 일",
      items: [
        "**전 운수사 ERP의 UI/UX를 혼자서 최신 디자인으로 전면 개편** — 춘천·성남·공항버스·강진·범일·모빌하이 등 제품군 전반을 일관된 디자인 언어로 통일",
        "**디자인 시스템 구축** — 컬러 팔레트·타이포그래피(NanumSquare)·카드/버튼/탭/아이콘·조회필터·테이블까지 컴포넌트 표준화",
        "**bento 대시보드 레이아웃** + 데이터 시각화 고도화(KPI 타일·도넛/바/라인 차트·히트맵·게이지·랭킹), **다크 레일 사이드바·폴딩**, 반응형",
        '운수사별 **브랜드 톤앤매너 커스터마이징**(로고·컬러 반영)으로 "우리 회사 전용 시스템" 경험 제공',
      ],
    },
    {
      label: "임팩트",
      impact: true,
      text: "세련된 최신 UI가 영업·데모의 **강력한 차별점**이 되어 **신규 계약 수주에 직접 기여**. 체감 완성도·사용성이 크게 오르며 고객 반응이 달라졌습니다.",
    },
  ],
  stack: [
    "Design System",
    "UI/UX",
    "데이터 시각화",
    "SCSS",
    "Figma",
    "반응형",
    "브랜딩",
  ],
};

export const erpIntro =
  "**디자인 개편과 동시에**, 운영 중인 대규모 ERP 제품군 전반에서 **신규 모듈·백엔드 로직·대시보드를 직접 개발**해 프로덕션에 지속 출시했습니다. 아래는 **대표 사례 일부**입니다. (Python/Django + JS · 담당 범위: 배차·수입금·급여·회계·정비·자재·인사·경영분석 전 영역)";

export interface ErpProject {
  name: string;
  badge: string;
  badgeType: "main" | "key" | "mod";
  scale: string;
  summary: string;
  items: string[];
  image: string;
}

export const erpProjectsData: ErpProject[] = [
  {
    name: "춘천시민버스 ERP",
    badge: "UI 개편 + 주요 개발",
    badgeType: "main",
    scale: "시내버스 154대 규모",
    summary:
      "UI 전면 리디자인 · 연료데이터 신규 모듈 · 차량 실시간 위치 · 경영/정시성 대시보드",
    items: [
      "**전 메뉴 UI/UX 전면 리디자인** — 대시보드·배차·수입금·급여·회계 등 15개 대메뉴를 최신 디자인 시스템으로 통일",
      "**연료데이터관리 모듈 신규 구축** — 전기·CNG·수소 충전데이터(모델·업로드·ZIP·배차노선 매칭 엑셀), 충전현황 대시보드(연료구분·요일별 분포 차트)",
      "**어드민 실시간 차량위치 지도** — 지도 UI·차량 검색(토스트·펄스)·줌별 아이콘·건물 폴리곤, **경영/정시성 대시보드**(노선별 수입금 랭킹·운영지표 시각화)",
      "급여·4대보험·소득세 간이세액표 정산 로직, 회계 원장 정합성 개선, 공지·연장근로·정비이력·승무 등 다수 기능",
    ],
    image: "/images/projects/ccbus.jpg",
  },
  {
    name: "성남 모빌하이 ERP",
    badge: "UI 개편 + 주요 개발",
    badgeType: "main",
    scale: "시내버스",
    summary: "UI/UX 전면 리뉴얼 · 권한 체계(RBAC) · 급여/인사 고도화",
    items: [
      "**UI/UX 전면 리뉴얼** — bento 대시보드, 사이드바 폴딩, 타이포·차트 브랜드 팔레트 통일, **글래스모피즘 로그인** 재설계, KPI 타일 시각화",
      "**메뉴 권한(RBAC) 일괄 적용** — 다중선택 + 부서·영업소·직군 필터, 권한 적용 성능 개선",
      "급여·인사 고도화(운수직명단 고정헤더·급여소급·4대보험·사원별교육관리), **출력·엑셀 아이콘 버튼 디자인 시스템**, 조회필터·테이블 레이아웃 전역 표준화",
    ],
    image: "/images/projects/seongnam.jpg",
  },
  {
    name: "공항버스 ERP",
    badge: "신규 도입 + UI 구축",
    badgeType: "key",
    scale: "2026 신규 계약",
    summary: "도입 커스터마이징 · 메인 대시보드 · 브랜드 디자인 시스템",
    items: [
      "**신규 도입 프로젝트** — 요구사항 기반 모듈 커스터마이징 + **전역 디자인 시스템·메인 대시보드 신규 구축**(운영평가·사고건수 링·운행실적 시각화)",
      "브랜드 아이덴티티 적용(심볼·국영문 로고·컬러), 회계·자재·정비·수입금 모듈 UI 정비, 인사 데이터 마이그레이션 보정",
    ],
    image: "/images/projects/gonghang.jpg",
  },
  {
    name: "강진교통 ERP",
    badge: "UI 개편 + 모듈 신규",
    badgeType: "key",
    scale: "2026",
    summary: "대시보드 전면 개편 · 시설관리 모듈 신규 풀빌드",
    items: [
      "**대시보드 UI/UX 전면 개편**(브랜드 반영·신규 디자인 시스템 적용)",
      "**시설관리 모듈 신규 풀빌드** — 자산/결함/점검/충전/계약/약도 + 모달 등록 UI + 데모 시드, htmx 부분 렌더링으로 로딩 성능 개선",
    ],
    image: "/images/projects/kangjin.jpg",
  },
  {
    name: "범일운수 ERP",
    badge: "UI 개편 + 기능 개발",
    badgeType: "key",
    scale: "2026",
    summary: "메인 대시보드 전면 리뉴얼 · 실시간 위젯 · 스케줄러",
    items: [
      "**메인 대시보드 전면 리뉴얼** + 실시간 위젯(뉴스·날씨 API)·메뉴 위젯/검색 UX·스케줄러",
      "급여 정산 안정화(NULL·키 누락 서버에러·정비직 필터 수정), 점검정비 UI",
    ],
    image: "/images/projects/bumil.jpg",
  },
  {
    name: "모빌하이 (메인 제품)",
    badge: "제품 디자인 기준",
    badgeType: "main",
    scale: "플래그십",
    summary: "제품 대표 대시보드 신규 디자인 → 전 운수사 이식 기준",
    items: [
      "**제품 대표(플래그십) 대시보드 신규 디자인** — 이후 전 운수사 ERP 이식의 디자인 기준이 됨(공통 base·다크 레일 사이드바)",
      "**실시간 관제·자율주행·디지털 트윈** 대시보드(라이브맵·차량 선택) 등 차세대 화면 설계",
    ],
    image: "/images/projects/mobilhi.jpg",
  },
];

export const erpStackData: string[] = [
  "Python",
  "Django",
  "JavaScript",
  "React",
  "TypeScript",
  "Flutter/Dart",
  "SCSS",
  "htmx",
  "REST API",
  "Bluetooth(BLE)",
  "지도(OSM)·GPS",
  "RBAC",
  "PDF/Excel",
  "Vercel",
  "Figma",
];

export interface TimelinePeriod {
  date: string;
  title: string;
  items: string[];
}

export const timelineData: TimelinePeriod[] = [
  {
    date: "2024. 06 – 12",
    title: "사업추진팀 PM 온보딩 + 모빌하이 혁신제품 지정",
    items: [
      "**범일운수·화성도시공사 ERP 운영 PM** — WBS 일정관리, 배포 점검, 매뉴얼·패치노트·CS 보고서, 대금청구·전자세금계산서",
      "**모빌하이 중기부 혁신제품 지정(2024.08)** — 제품소개서·규격서·조달적합성 서류, 나라장터 등록 → 지정 획득",
      "스마트공방/팩토리 정부지원사업 관리",
    ],
  },
  {
    date: "2025. 01 – 08",
    title: "모빌리티 ERP 화면설계·기획 총괄 + 다중 프로젝트 WBS",
    items: [
      "**모빌리티 ERP 전반 화면설계·기획 담당** — 운수사별 업무 분석, 메뉴·기능 구조 설계, 요구사항 정의·컨펌, Figma 구성도(춘천·성남·공항버스 등 제품군 전반)",
      "다중 프로젝트 일정 총괄(진척 점검·QC·구현 기간 설정·개발자/업체 소통)",
      "인사총무·산업기능요원·인바운드 CS",
    ],
  },
  {
    date: "2025. 09 – 12",
    title: "제품화 & B2B 영업·조달 본격화",
    items: [
      "모빌하이 서비스소개서 타깃별 다버전·요금표·리플렛·도입제안 공문",
      "신흥운수·강진·제천 구독 견적·계약, 음주측정 시스템 제안서·견적",
      "혁신제품 시범사용 신청(서울 마을버스조합·번창교통·인천·제천)",
    ],
  },
  {
    date: "2026. 01 – 07",
    title: "계약 실행 · 신규 ERP 도입 · 개발 본격 전환",
    items: [
      "**음주측정 키오스크 다수 운수사 물품공급계약**(성진·제일·전일·호남·신흥·춘천·강진) 및 발주·세금계산서 집행",
      "**공항버스 ERP 도입 PM** — 킥오프 주관·회의록 작성, 10개 모듈 요구사항 정의·개발방향 수립, 배포 협의 / 성남시내버스 협약",
      "**개발 본격 전환** — 위 개발 프로젝트를 직접 구현 / DTG 정성제안서·모빌하이 IR",
    ],
  },
];

export interface DocumentCard {
  title: string;
  badge: string;
  badgeType: "prop" | "ba" | "sales" | "doc";
  items: string[];
}

export const documentsData: DocumentCard[] = [
  {
    title: "음주측정 관리 시스템 제안서",
    badge: "제품 제안",
    badgeType: "prop",
    items: [
      "법규 근거(음주확인 의무·3년 보관·과징금 180~540만원) 정리 → 지문+캠+정밀측정+ERP 연동, 3단계 안전 필터링",
      "키오스크/노트북형 2종·가격·AS·기대효과, 관리자 대시보드(측정사진·필터·Excel·이상 알림)",
    ],
  },
  {
    title: "공공 정산관리시스템 · FMS 차량평가 플랫폼 제안",
    badge: "공공/제품",
    badgeType: "prop",
    items: [
      "준공영제 운송원가 산정·보조금 집행(운행대수·교통카드·배차·인건비 통합, BMS 연계)",
      "ERP+FMS+정산 통합·배차 최적화·운전행태·예방정비",
    ],
  },
  {
    title: "2026 DTG 점검센터 운영 용역 정성제안서",
    badge: "공공입찰",
    badgeType: "doc",
    items: [
      "한국교통안전공단 발주 — 점검센터 18개소·출장·콜센터, 폐업 제조사 DTG 무상 점검·수리·교체",
      "혁신제품 「모빌하이」 기반 디지털화, 장기계속계약(~2027.04), 정성 7개 평가항목 점수 배분 전략",
    ],
  },
  {
    title: "요구사항정의서·화면설계·메뉴구조도",
    badge: "업무분석(BA)",
    badgeType: "ba",
    items: [
      "푸른솔관광 WEB/APP v2.0 요구사항정의서(부가세·급여명세·정산-외주·휴가신청)",
      "그룹웨어 메뉴 구성 질문서(작업접수→지시서→일지·상태값·권한), 모빌하이 기능구성도, SNS 로그인 설계",
    ],
  },
  {
    title: "모빌하이 서비스소개서·세일즈킷 · 사용가이드",
    badge: "세일즈·문서화",
    badgeType: "sales",
    items: [
      "타깃별 소개서 다버전·리플렛·요금표(혁신제품 지정·조달청 등록), 그룹웨어 사용가이드(웹+모바일 59p), 매뉴얼·패치노트·CS 내역",
    ],
  },
];

export const scopeSkillsData: string[] = [
  "Product Owner(기획+개발)",
  "UI/UX·디자인 시스템",
  "프로젝트 관리(PM·WBS)",
  "풀스택(Django·React·Flutter)",
  "모빌리티 도메인",
  "B2B 제안·계약",
  "정부조달(혁신제품·나라장터)",
  "운영·CS·문서화",
];

export const scopeClientsData: string[] = [
  "범일운수",
  "화성도시공사",
  "춘천시민버스",
  "공항버스",
  "성남시내버스",
  "강진교통",
  "신흥운수/신흥교통",
  "제천운수",
  "진양교통",
  "동신운수",
  "전주(성진·제일·전일·호남)",
  "서울 마을버스조합·번창교통",
  "인천그린모빌리티",
  "푸른솔관광·제일렌트카",
  "에이아이정보기술",
];

export const disclaimerNote =
  "※ 프로젝트·고객사명은 실제 담당 이력이며, 기능·역할은 본인이 작성한 문서와 개발 내역 기반입니다. 외부 제출 시 익명화 버전으로 조정 가능하며, 계약금액·개인정보 등 민감정보는 포함하지 않았습니다.";

export const docFooterData = {
  left: "장소현 · Product Manager & Full-stack Engineer · ㈜서울소프트",
  right: "Portfolio · 2024–2026",
};
