import { useCallback, useMemo, useState } from "react";

/**
 * Turns a list of questions into a shuffled, navigable deck.
 * Reshuffles whenever the source list changes (e.g. switching level/category)
 * or when the caller explicitly asks.
 */
export function useDeck(questions: string[]) {
  const [seed, setSeed] = useState(0);

  // Recompute the shuffle when the questions change or we reshuffle.
  const order = useMemo(() => shuffle(questions.length), [questions, seed]);

  const [position, setPosition] = useState(0);

  const reset = useCallback(() => {
    setSeed((s) => s + 1);
    setPosition(0);
  }, []);

  const next = useCallback(() => {
    setPosition((p) => Math.min(p + 1, order.length - 1));
  }, [order.length]);

  const prev = useCallback(() => {
    setPosition((p) => Math.max(p - 1, 0));
  }, []);

  const current = questions[order[position]] ?? "";

  return {
    current,
    position,
    total: order.length,
    isFirst: position === 0,
    isLast: position >= order.length - 1,
    next,
    prev,
    reset,
  };
}

/** Fisher–Yates shuffle of indices [0..n). */
function shuffle(n: number): number[] {
  const arr = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
