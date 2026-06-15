import { EmptyState } from "@/components/EmptyState";
import { PanelHeader } from "@/components/PanelHeader";
import type { Flashcard } from "@/types/study";

type FlashcardsProps = {
  flashcards: Flashcard[];
};

export function Flashcards({ flashcards }: FlashcardsProps) {
  return (
    <section className="panel">
      <PanelHeader eyebrow="Flashcards" title="Review prompts" />

      <div className="subgrid">
        {flashcards.length === 0 ? (
          <EmptyState
            title="No flashcards available"
            message="Add study content for the selected skill to show review prompts."
          />
        ) : flashcards.map((card) => (
          <article className="flashcard" key={card.front}>
            <span>Front</span>
            <p>
              <strong>{card.front}</strong>
            </p>
            <p>{card.back}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
