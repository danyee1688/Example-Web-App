import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = { title: "Contact" };

const linkClass =
  "text-accent underline underline-offset-4 hover:text-accent/70";

export default function Contact() {
  return (
    <>
      <h1 className="py-6 text-3xl font-bold">Contact</h1>
      <Section title="Get in touch">
        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
          <dt className="font-medium">LinkedIn</dt>
          <dd>
            <a
              href="https://www.linkedin.com/in/danyee1688/"
              target="_blank"
              rel="noopener noreferrer"
              className={`break-all ${linkClass}`}
            >
              linkedin.com/in/danyee1688
            </a>
          </dd>
          <dt className="font-medium">Phone (Mobile)</dt>
          <dd>
            <a href="tel:+19292292599" className={linkClass}>
              929-229-2599
            </a>
          </dd>
          <dt className="font-medium">Email</dt>
          <dd>
            <a
              href="mailto:danyee1688@gmail.com"
              className={`break-all ${linkClass}`}
            >
              danyee1688@gmail.com
            </a>
          </dd>
        </dl>
      </Section>
    </>
  );
}
