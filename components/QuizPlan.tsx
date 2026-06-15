import { EmptyState } from "@/components/EmptyState";
import { PanelHeader } from "@/components/PanelHeader";

type QuizPlanProps = {
  items: string[];
};

export function QuizPlan({ items }: QuizPlanProps) {
  return (
    <section className="panel">
      <PanelHeader eyebrow="5-question Plan" title="Targeted retrieval practice" />

      <div className="quiz-list">
        {items.length === 0 ? (
          <EmptyState
            title="No quiz plan available"
            message="Add practice prompts for this skill to build a targeted quiz session."
          />
        ) : items.map((item, index) => (
          <article className="quiz-item" key={item}>
            <span>Question {index + 1}</span>
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
