import { useState } from "react";
import { categories } from "./data/questions";
import { CategoryGrid } from "./components/CategoryGrid";
import { Game } from "./components/Game";

export function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = categories.find((c) => c.id === selectedId) ?? null;

  return (
    <div className="app">
      {selected ? (
        <Game
          key={selected.id}
          category={selected}
          onExit={() => setSelectedId(null)}
        />
      ) : (
        <CategoryGrid categories={categories} onSelect={setSelectedId} />
      )}
    </div>
  );
}
