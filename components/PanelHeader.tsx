import type { ReactNode } from "react";

type PanelHeaderProps = {
  eyebrow: string;
  title: string;
  action?: ReactNode;
};

export function PanelHeader({ eyebrow, title, action }: PanelHeaderProps) {
  return (
    <div className="panel-header">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {action}
    </div>
  );
}
