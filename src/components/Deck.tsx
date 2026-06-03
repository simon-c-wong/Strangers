import { useEffect } from "react";
import type { LevelId } from "../types";
import { useDeck } from "../hooks/useDeck";

interface Props {
  questions: string[];
  levelId: LevelId;
  levelName: string;
  categoryName: string;
}

export function Deck({ questions, levelId, levelName, categoryName }: Props) {
  const deck = useDeck(questions);

  // Keyboard navigation: ← previous, → / space next.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        deck.next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        deck.prev();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [deck]);

  return (
    <div className="deck">
      <button
        type="button"
        className="qcard"
        onClick={deck.next}
        aria-label="Next question"
      >
        <div className="qcard__top">
          <span className="qcard__brand">{categoryName}</span>
          <span className="qcard__level">
            Level {levelId} · {levelName}
          </span>
        </div>

        {/* key forces a fresh fade-in animation on each question. */}
        <p className="qcard__question" key={deck.position}>
          {deck.current}
        </p>

        <div className="qcard__hint">
          {deck.isLast ? "Last card — tap to revisit" : "Tap for the next card"}
        </div>
      </button>

      <div className="deck__controls">
        <button
          type="button"
          className="round-btn"
          onClick={deck.prev}
          disabled={deck.isFirst}
          aria-label="Previous question"
        >
          ←
        </button>

        <span className="deck__progress" aria-live="polite">
          {deck.position + 1} / {deck.total}
        </span>

        <button
          type="button"
          className="round-btn round-btn--primary"
          onClick={deck.next}
          disabled={deck.isLast}
          aria-label="Next question"
        >
          →
        </button>
      </div>

      <button type="button" className="reshuffle" onClick={deck.reset}>
        ↻ Reshuffle deck
      </button>
    </div>
  );
}
