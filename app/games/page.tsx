import type { Metadata } from "next";
import Link from "next/link";
import { games } from "@/app/data/games";

export const metadata: Metadata = { title: "Games" };

export default function Games() {
  return (
    <>
      <h1 className="py-6 text-3xl font-bold">Games</h1>
      <ul className="grid gap-6 border-t border-foreground/10 pb-8 pt-8 sm:grid-cols-2">
        {games.map((game) => (
          <li
            key={game.slug}
            className="flex flex-col rounded-lg border border-foreground/10 bg-surface p-6"
          >
            <h2 className="text-2xl font-semibold">{game.title}</h2>
            {game.tags && (
              <ul className="mt-3 flex flex-wrap gap-2">
                {game.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-3 flex-1 text-foreground/80">{game.description}</p>
            <Link
              href={`/games/${game.slug}`}
              className="mt-6 inline-block self-start rounded-md bg-accent px-5 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent/80"
            >
              Play
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
