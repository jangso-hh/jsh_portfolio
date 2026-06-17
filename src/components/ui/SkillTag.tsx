interface SkillTagProps {
  label: string;
  tagClass?: string;
}

export default function SkillTag({ label, tagClass = "tag-gray" }: SkillTagProps) {
  return (
    <span
      className={`inline-block rounded-md px-2.5 py-1 text-xs font-medium ${tagClass}`}
    >
      {label}
    </span>
  );
}
