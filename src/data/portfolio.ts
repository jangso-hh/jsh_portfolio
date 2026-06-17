/**
 * ⭐ 단일 데이터 소스 (Single Source of Truth)
 *
 * 사이트의 모든 콘텐츠는 이 파일에서 관리됩니다.
 * 컴포넌트는 여기서 export된 데이터를 import 해서 화면을 그릴 뿐이므로,
 * 내용을 바꿀 때는 이 파일만 수정하면 됩니다. (자세한 설명은 DATA.md 참고)
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
  role: "Frontend / Full-stack Developer",
  tagline: "데이터로 동작하는 제품을 만드는 개발자입니다.",
  email: "seoulsoftinfo@gmail.com",
  github: "https://github.com/your-id",
  blog: "https://your-blog.com",
  linkedin: "https://www.linkedin.com/in/your-id",
  instagram: "",
  devlinks: "",
  location: "Seoul, Korea",
};

/* =========================================================================
 * 7. educationData — 학력  (aboutData보다 먼저 정의: getter에서 참조)
 * ====================================================================== */

export const educationData: EducationItem[] = [
  {
    title: "○○대학교",
    major: "컴퓨터공학과",
    minor: "",
    role: "학사",
    period: "2019.03 ~ 2023.02",
    description: "전공 설명을 적어주세요.",
    details: ["주요 과목 / 활동 1", "주요 과목 / 활동 2"],
  },
];

/* =========================================================================
 * 2. aboutData — 소개 섹션
 * ====================================================================== */

function getEducationString(): string {
  const latest = educationData[0];
  if (!latest) return "";
  const minor = latest.minor ? ` (부전공 ${latest.minor})` : "";
  return `${latest.title} ${latest.major}${minor}`;
}

function getAboutDetails(): AboutDetail[] {
  return [
    { icon: "📍", label: "Location", value: profileData.location },
    { icon: "🎓", label: "Education", value: getEducationString() },
    { icon: "✉️", label: "Email", value: profileData.email },
    { icon: "💼", label: "Role", value: profileData.role },
  ];
}

export const aboutData = {
  introduction:
    "안녕하세요, 사용자 경험을 고민하는 개발자 장소현입니다. " +
    "자기소개 문단을 자유롭게 작성해 주세요. 어떤 문제를 풀고 싶은지, " +
    "어떤 가치를 중요하게 생각하는지 담으면 좋습니다.",
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
    { name: "Next.js", level: 85, tagClass: "tag-gray" },
    { name: "TypeScript", level: 85, tagClass: "tag-blue" },
    { name: "Tailwind CSS", level: 80, tagClass: "tag-teal" },
  ],
  backend: [
    { name: "Node.js", level: 70, tagClass: "tag-green" },
    { name: "Express", level: 65, tagClass: "tag-gray" },
  ],
  mobile: [{ name: "React Native", level: 60, tagClass: "tag-blue" }],
  tools: [
    { name: "Git", level: 85, tagClass: "tag-orange" },
    { name: "Figma", level: 70, tagClass: "tag-purple" },
    { name: "Vercel", level: 75, tagClass: "tag-gray" },
  ],
};

/* =========================================================================
 * 4. archivingData — 아카이빙 링크
 * ====================================================================== */

export const archivingData: ArchivingItem[] = [
  {
    name: "GitHub",
    url: profileData.github,
    icon: "github",
    description: "코드 저장소와 오픈소스 기여 내역",
    details: ["개인 프로젝트", "커밋 기록"],
  },
  {
    name: "Blog",
    url: profileData.blog ?? "",
    icon: "blog",
    description: "개발 학습 기록과 회고",
    details: ["트러블슈팅", "기술 정리"],
  },
];

/* =========================================================================
 * 5. projectsData — 프로젝트 (핵심)
 * ====================================================================== */

export const projectsData: Project[] = [
  {
    id: 1,
    title: "예시 프로젝트",
    subtitle: "한 줄 소개를 적어주세요.",
    description:
      "프로젝트에 대한 상세 설명입니다. 어떤 문제를 해결했는지, " +
      "어떤 기술적 도전이 있었는지 적어주세요.",
    image: "/images/projects/project-1_main.png",
    screenshotDir: "project-1",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/your-id/project-1",
    demo: "https://project-1.vercel.app",
    period: "2024.01 ~ 2024.03",
    features: ["주요 기능 1", "주요 기능 2", "주요 기능 3"],
    role: "Frontend",
    team: "개인 프로젝트",
    notes: ["이 프로젝트에서 배운 점을 적어주세요."],
  },
];

/* =========================================================================
 * 6. experienceData — 경력
 * ====================================================================== */

export const experienceData: ExperienceItem[] = [
  {
    title: "○○ 회사",
    role: "Frontend Developer",
    period: "2023.03 ~ 재직 중",
    description: "담당 업무 요약",
    details: ["담당 업무 1", "담당 업무 2"],
    techStack: ["React", "TypeScript"],
  },
];

/* =========================================================================
 * 8. certificateData — 자격증
 * ====================================================================== */

export const certificateData: CertificateItem[] = [
  { title: "정보처리기사", issuer: "한국산업인력공단", date: "2023.06" },
];

/* =========================================================================
 * 9. awardData — 수상 (projectId로 프로젝트와 연결)
 * ====================================================================== */

export const awardData: AwardItem[] = [
  {
    title: "○○ 해커톤",
    prize: "대상",
    date: "2024.02",
    projectId: 1,
  },
];

/* =========================================================================
 * 10. activityData — 대외활동
 * ====================================================================== */

export const activityData: ActivityItem[] = [
  {
    organization: "○○ 동아리 / 부트캠프",
    role: "팀원",
    period: "2023.09 ~ 2024.02",
    description: "활동 내용을 적어주세요.",
    links: [{ label: "활동 사이트", demo: "https://example.com" }],
    projectId: 1,
  },
];

/* =========================================================================
 * 11. contactData — 연락처
 * ====================================================================== */

export const contactData: ContactData = {
  email: profileData.email,
  message: "함께 일하거나 이야기 나누고 싶으시다면 편하게 연락 주세요!",
};
