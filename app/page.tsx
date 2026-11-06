import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      <section className="py-12">
        <h1 className="text-4xl font-bold">Daniel Yee</h1>
        <p className="mt-2 text-lg text-accent">Slow is smooth. Smooth is fast.</p>
        <p className="mt-4 max-w-prose text-foreground/80">
          Hi, my name is Daniel Yee, and I develop web applications and
          videogames in various languages. I hope to produce software that puts
          smiles on other&apos;s faces, whether it be through entertainment or
          efficiency. You can explore more about me by navigating through the
          tabs in the navigation bar above.
        </p>
      </section>
      <Section title="Featured Games" />
      <Section title="Featured Projects" />
    </>
  );
}
