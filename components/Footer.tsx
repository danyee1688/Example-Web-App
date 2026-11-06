const linkClass = "transition-colors hover:text-accent";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-6 text-sm text-foreground/60">
        <p>© {new Date().getFullYear()} Daniel Yee</p>
        <ul className="flex gap-5">
          <li>
            <a
              href="https://www.linkedin.com/in/danyee1688/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:danyee1688@gmail.com" className={linkClass}>
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
