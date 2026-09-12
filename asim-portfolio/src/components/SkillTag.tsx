interface SkillTagProps {
  label: string;
}

export default function SkillTag({ label }: SkillTagProps) {
  return (
    <li className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-ivory transition-colors hover:border-signal hover:text-signal">
      {label}
    </li>
  );
}
