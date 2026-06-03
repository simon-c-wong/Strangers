import type { Category } from "../types";

interface Props {
  categories: Category[];
  onSelect: (id: string) => void;
}

export function CategoryGrid({ categories, onSelect }: Props) {
  return (
    <div className="home">
      <header className="home__header">
        <p className="home__eyebrow">A connection card game</p>
        <h1 className="home__title">Strangers</h1>
        <p className="home__subtitle">
          Three levels of questions designed to take two people from small talk
          to something real. Pick a deck. Take turns. Be honest.
        </p>
      </header>

      <ul className="grid" aria-label="Choose a deck">
        {categories.map((category) => {
          const count = category.levels.reduce(
            (sum, level) => sum + level.questions.length,
            0
          );
          return (
            <li key={category.id}>
              <button
                type="button"
                className="card-tile"
                onClick={() => onSelect(category.id)}
              >
                <span className="card-tile__emoji" aria-hidden="true">
                  {category.emoji}
                </span>
                <span className="card-tile__name">{category.name}</span>
                <span className="card-tile__desc">{category.description}</span>
                <span className="card-tile__count">{count} questions</span>
              </button>
            </li>
          );
        })}
      </ul>

      <footer className="home__footer">
        <p>
          Loads once, then plays fully offline. No accounts, no tracking, no
          internet required.
        </p>
      </footer>
    </div>
  );
}
