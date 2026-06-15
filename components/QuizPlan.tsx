type QuizPlanProps = {
  items: string[];
};

export function QuizPlan({ items }: QuizPlanProps) {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <span className="eyebrow">5-question Plan</span>
          <h2>Targeted retrieval practice</h2>
        </div>
      </div>

      <div className="quiz-list">
        {items.map((item, index) => (
          <article className="quiz-item" key={item}>
            <span>Question {index + 1}</span>
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
