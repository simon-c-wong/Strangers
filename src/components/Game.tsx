import { useState } from "react";
import type { Category, LevelId } from "../types";
import { Deck } from "./Deck";

interface Props {
  category: Category;
  onExit: () => void;
}

export function Game({ category, onExit }: Props) {
  const [levelId, setLevelId] = useState<LevelId>(1);
  const level = category.levels.find((l) => l.id === levelId)!;

  return (
    <div className="game" data-level={levelId}>
      <header className="game__bar">
        <button type="button" className="ghost-btn" onClick={onExit}>
          ← Decks
        </button>
        <span className="game__deck-name">
          <span aria-hidden="true">{category.emoji}</span> {category.name}
        </span>
        <span className="game__spacer" aria-hidden="true" />
      </header>

      <nav className="levels" aria-label="Choose a level">
        {category.levels.map((l) => (
          <button
            key={l.id}
            type="button"
            className={"level-pill" + (l.id === levelId ? " is-active" : "")}
            onClick={() => setLevelId(l.id)}
          >
            <span className="level-pill__num">Level {l.id}</span>
            <span className="level-pill__name">{l.name}</span>
          </button>
        ))}
      </nav>

      <p className="level-tagline">{level.tagline}</p>

      <Deck
        key={levelId}
        questions={level.questions}
        levelId={levelId}
        levelName={level.name}
        categoryName={category.name}
      />
    </div>
  );
}
