type EmptyStateProps = {
  title: string;
  message: string;
  compact?: boolean;
};

export function EmptyState({ title, message, compact = false }: EmptyStateProps) {
  return (
    <div className={`empty-state${compact ? " compact" : ""}`}>
      <strong>{title}</strong>
      <p>{message}</p>
    </div>
  );
}
