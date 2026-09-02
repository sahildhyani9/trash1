import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";
import { Check } from "lucide-react";

export interface ProgramData {
  name: string;
  level: string;
  who: string;
  intro: string;
  image: string;
  imageAlt: string;
  curriculum: { title: string; description: string }[];
  support: string[];
  commitment: string;
  format: string;
  availability?: string;
  schedule?: string;
}

export function ProgramPage({ data }: { data: ProgramData }) {
  return (
    <>
      <PageHero eyebrow={`Programs · ${data.level}`} title={data.name} intro={data.intro} />

      <section className="section-y">
        <div className="container-x grid items-center gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <img
              src={data.image}
              alt={data.imageAlt}
              width={1400}
              height={900}
              className="aspect-[5/3] w-full rounded-sm object-cover shadow-soft"
            />
          </div>
          <div className="md:col-span-5">
            <p className="eyebrow mb-3">Who is it for?</p>
            <h2 className="font-serif text-3xl text-indigo-deep md:text-4xl">
              Built for {data.level.toLowerCase()}.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{data.who}</p>
          </div>
        </div>
      </section>

      <Section eyebrow="Curriculum" title="What you’ll learn.">
        <div className="grid gap-6 md:grid-cols-2">
          {data.curriculum.map((m) => (
            <article key={m.title} className="rounded-sm border border-border bg-card p-7">
              <h3 className="font-serif text-xl text-indigo-deep">{m.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">{m.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Learning Approach & Support" title="How the training is supported.">
        <ul className="grid gap-3 md:grid-cols-2">
          {data.support.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-sm border border-border bg-card p-5 text-sm leading-relaxed text-foreground/90"
            >
              <Check size={17} className="mt-0.5 shrink-0 text-gold" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-sm border border-border bg-secondary/50 p-7 md:p-9">
          <p className="eyebrow">Class Frequency & Commitment</p>
          <p className="mt-3 max-w-4xl leading-relaxed text-foreground/85">{data.commitment}</p>
          <div className="mt-7 grid gap-4 border-t border-border pt-6 md:grid-cols-2 lg:grid-cols-4">
            <Detail label="Format" value={data.format} />
            <Detail
              label="Mentorship"
              value="Personalised guidance based on level, goals, and progress"
            />
            {data.availability && <Detail label="Available Seats" value={data.availability} />}
            {data.schedule && <Detail label="Schedule" value={data.schedule} />}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-indigo-deep px-6 py-3 text-sm font-medium text-ivory"
          >
            Book a Trial Class
          </Link>
          <Link
            to="/programs"
            className="rounded-full border border-indigo-deep/25 px-6 py-3 text-sm font-medium text-indigo-deep"
          >
            Compare Programs
          </Link>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}

function Detail({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <p className="mt-1 font-serif text-xl text-indigo-deep">{value}</p>
    </div>
  );
}
