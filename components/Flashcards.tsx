import type { Flashcard } from "@/types/study";

type FlashcardsProps = {
  flashcards: Flashcard[];
};

export function Flashcards({ flashcards }: FlashcardsProps) {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <span className="eyebrow">Flashcards</span>
          <h2>Review prompts</h2>
        </div>
      </div>

      <div className="subgrid">
        {flashcards.length === 0 ? (
          <div className="empty-state">
            <strong>No flashcards available</strong>
            <p>Add study content for the selected skill to show review prompts.</p>
          </div>
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
