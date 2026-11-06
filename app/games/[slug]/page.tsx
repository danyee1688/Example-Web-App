import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { games } from "@/app/data/games";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = games.find((g) => g.slug === slug);
  return game ? { title: game.title, description: game.description } : {};
}

export default async function GamePage({ params }: Props) {
  const { slug } = await params;
  const game = games.find((g) => g.slug === slug);
  if (!game) notFound();

  return (
    <div className="pb-8">
      <Link
        href="/games"
        className="mt-6 inline-block text-sm text-foreground/60 transition-colors hover:text-accent"
      >
        ← All games
      </Link>
      <h1 className="py-4 text-3xl font-bold">{game.title}</h1>

      {game.embedUrl && (
        <div className="w-full" style={{ maxWidth: game.embedWidth }}>
          <iframe
            src={game.embedUrl}
            title={`Play ${game.title}`}
            allowFullScreen
            className="w-full rounded-lg border border-foreground/10"
            style={{ aspectRatio: `${game.embedWidth} / ${game.embedHeight}` }}
          />
        </div>
      )}

      <p className="mt-6 max-w-prose text-foreground/80">{game.description}</p>

      <a
        href={game.itchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm text-accent underline underline-offset-4 hover:text-accent/70"
      >
        View on itch.io
      </a>
    </div>
  );
}
