import type { Certification, CurrentUser } from "@/types/study";

type HeaderProps = {
  certification: Certification;
  user: CurrentUser;
};

export function Header({ certification, user }: HeaderProps) {
  return (
    <nav className="topbar" aria-label="StudyTech">
      <div className="brand">
        <span className="eyebrow">StudyTech Prototype</span>
        <strong>{user.name}</strong>
      </div>
      <span className="chip">{certification.code}</span>
    </nav>
  );
}
