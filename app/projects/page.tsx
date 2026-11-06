import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = { title: "Projects" };

export default function Projects() {
  return (
    <>
      <h1 className="py-6 text-3xl font-bold">Projects</h1>
      <Section title="Your Projects">
        <div className="space-y-6">
          <article>
            <h3 className="text-lg font-medium">
              K-1 Data Extraction Automation
            </h3>
            <p className="mt-1 max-w-prose text-foreground/80">
              During my time at Citco, I was able to work in a team of seven to
              develop an internal application that automates the extraction of
              data from K-1 tax forms. Our team was able to extract hundreds of
              line items from hundreds of K-1 forms using both AWS Textract and
              PDFPlumber.
            </p>
          </article>
          <article>
            <h3 className="text-lg font-medium">Frogsmith</h3>
            <p className="mt-1 max-w-prose text-foreground/80">
              The first game I had developed for Binghamton GDG&apos;s Game Jam
              was a cozy shopkeeping game that heavily relied on randomness, the
              overarching theme of the jam. The game won first place for Gameplay and
              Feel.
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
