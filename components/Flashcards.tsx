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
        {flashcards.map((card) => (
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
