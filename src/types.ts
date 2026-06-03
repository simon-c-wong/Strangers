export type LevelId = 1 | 2 | 3;

export interface Level {
  id: LevelId;
  name: string;
  /** One-line tone description shown under the level name. */
  tagline: string;
  questions: string[];
}

export interface Category {
  id: string;
  name: string;
  /** Short blurb shown on the category card. */
  description: string;
  /** Single emoji used as the category glyph. */
  emoji: string;
  levels: Level[];
}
