import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <>
      <h1 className="py-6 text-3xl font-bold">About</h1>
      <Section title="Bio">
        <div className="max-w-prose space-y-4 text-foreground/80">
          <p>
            I am a recent graduate from SUNY Binghamton University, currently
            pursuing my Master&apos;s degree at CUNY Hunter College. Although my
            undergraduate program was in Computer Engineering, I found myself
            leaning more towards the software side of engineering, which
            resulted in a pivot to Computer Science at Hunter College. I have
            pride creating organized systems that are easy to read and debug,
            while also maintaining efficiency. Within the software engineering
            application stack, I lean towards the database and frontend layer, but
            I am willing to collaborate with others within infrastructure or
            backend layer.
          </p>
          <p>
            I have won first place during two video game development jams
            hosted by Binghamton GDG, and will continue to participate in game
            jams.
          </p>
        </div>
      </Section>
      <Section title="Skills">
        <dl className="space-y-3">
          <div>
            <dt className="font-medium">Languages</dt>
            <dd className="text-foreground/80">
              Python, Java, JavaScript, TypeScript, C, Unity C#
            </dd>
          </div>
          <div>
            <dt className="font-medium">Tools / Libraries / Frameworks</dt>
            <dd className="text-foreground/80">
              Git, GitHub, Claude Code, MCP, Kiro, Visual Studio, Docker, React
            </dd>
          </div>
          <div>
            <dt className="font-medium">Cloud</dt>
            <dd className="text-foreground/80">
              AWS Bedrock, AWS CodeCommit, AWS CodePipeline, ECS, EC2, AWS
              Aurora, AWS DocumentDB, AWS DynamoDB, AWS Secrets Manager
            </dd>
          </div>
        </dl>
      </Section>
      <Section title="Experience">
        <ul className="space-y-4">
          <li>
            <p className="font-medium">Information Technology Intern</p>
            <p className="text-foreground/80">
              Citco Technology Management, Inc.
            </p>
            <p className="text-sm text-foreground/60">June 2026 – August 2026</p>
          </li>
          <li>
            <p className="font-medium">Database Coordinator</p>
            <p className="text-foreground/80">Forever Diamonds NY</p>
            <p className="text-sm text-foreground/60">June 2025 – June 2026</p>
          </li>
        </ul>
      </Section>
    </>
  );
}
