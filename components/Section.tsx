type SectionProps = {
  title: string;
  children?: React.ReactNode;
};

/** Titled content block separated by a divider; children default to a dashed placeholder. */
export default function Section({ title, children }: SectionProps) {
  return (
    <section className="border-t border-foreground/10 py-8">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
        {title}
      </h2>
      {children ?? (
        <div className="rounded-lg border border-dashed border-foreground/30 p-6 text-sm text-foreground/60">
          Placeholder — add your content here.
        </div>
      )}
    </section>
  );
}
