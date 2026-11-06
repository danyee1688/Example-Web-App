export interface Game {
  slug: string;
  title: string;
  description: string;
  /** Public itch.io page of the game. */
  itchUrl: string;
  /** Path under /public/games/, e.g. "/games/my-game.png". */
  thumbnail?: string;
  tags?: string[];
  year?: number;
  featured?: boolean;
  /** iframe src from itch.io's "Embed" dialog. */
  embedUrl?: string;
  embedWidth?: number;
  embedHeight?: number;
}

export const games: Game[] = [
  {
    slug: "frogsmith",
    title: "Frogsmith",
    description:
      "A cozy shopkeeping game that heavily relies on randomness, the overarching theme of Binghamton GDG's Game Jam. It won first place for Gameplay and Feel.",
    itchUrl: "https://daniel-yee.itch.io/frogsmith",
    tags: ["Strategy", "Simulation", "Cozy", "Unity2D"],
    embedUrl: "https://itch.io/embed-upload/13968329?color=AA824B",
    embedWidth: 640,
    embedHeight: 380,
  },
];
