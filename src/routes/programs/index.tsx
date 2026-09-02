import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";
import foundationalImg from "@/assets/tanpura/foundational-card.png";
import intermediateImg from "@/assets/tanpura/intermediate-card.png";
import advancedImg from "@/assets/tanpura/advanced-card.png";
import onlineImg from "@/assets/tanpura/online-detail.png";
import offlineImg from "@/assets/tanpura/offline-detail.png";
import residencyImg from "@/assets/tanpura/residency-detail.png";
import { offlinePolicy, onlinePolicy } from "@/data/tanpura";
import { Check } from "lucide-react";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "Programs — Tanpura House" },
      {
        name: "description",
        content:
          "Foundational, Intermediate and Advanced Hindustani Classical Vocal Music training at Tanpura House, available online, in-studio and through an immersive residency programme.",
      },
      { property: "og:title", content: "Programs — Tanpura House" },
      {
        property: "og:description",
        content:
          "Three levels of Hindustani Classical Vocal training with online, offline and residency learning formats.",
      },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsIndex,
});

const tracks = [
  {
    to: "/programs/foundational",
    name: "Foundational",
    level: "Beginners",
    frequency: "2–3 sessions/week recommended",
    summary:
      "Build a strong musical foundation through Swar, Swar Sthan, a first Raag and Bandish, Alankaar, Palta, elementary Taal and Laya.",
    image: foundationalImg,
  },
  {
    to: "/programs/intermediate",
    name: "Intermediate",
    level: "Learners with a basic foundation",
    frequency: "1–2 sessions/week",
    summary:
      "Deepen known Raags, Vistar, Alaap, Bandish, Taan, complex Taal and Layakari with a personalised path based on your practice and proficiency.",
    image: intermediateImg,
  },
  {
    to: "/programs/advanced",
    name: "Advanced",
    level: "Professional or well-trained vocalists",
    frequency: "Usually 1 intensive session/week",
    summary:
      "One-to-one mentorship for advanced expression, Bandish, improvisation, performance excellence, artistic identity and specialised streams.",
    image: advancedImg,
  },
] as const;

function ProgramsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="A structured path, shaped around the individual learner."
        intro="The three training levels remain distinct, while the teaching itself adapts to your prior knowledge, voice, goals and pace. Learn online, in-studio, or through an immersive residency."
      />

      <Section eyebrow="Training Levels" title="Foundational. Intermediate. Advanced.">
        <div className="grid gap-6 md:grid-cols-3">
          {tracks.map((t) => (
            <Link
              key={t.name}
              to={t.to}
              className="group flex overflow-hidden rounded-sm border border-border bg-card transition hover:border-gold/60 hover:shadow-soft md:flex-col"
            >
              <div className="w-32 shrink-0 bg-secondary/40 p-4 md:w-full">
                <img
                  src={t.image}
                  alt=""
                  className="aspect-[4/3] h-full w-full object-contain md:h-52"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <p className="eyebrow">{t.level}</p>
                <h2 className="mt-3 font-serif text-3xl text-indigo-deep">{t.name}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.summary}</p>
                <div className="mt-6 border-t border-border pt-5 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">{t.frequency}</span>
                </div>
                <span className="mt-auto pt-6 text-sm font-medium text-indigo-deep">Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Learning Formats"
        title="Choose how you learn."
        intro="The level defines what you study. The format defines how the training fits into your life."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <FormatCard
            title="Online Classes"
            image={onlineImg}
            desc="Structured online lessons for students across the globe, with personalised guidance in Dhrupad and voice culture."
            meta="Available seats: 10 · Schedule: 2.00 pm to 4.00 pm"
          />
          <FormatCard
            title="Offline Classes"
            image={offlineImg}
            desc="In-studio, face-to-face learning in a focused environment for students who prefer direct traditional instruction."
            meta="Available seats: 10 · Schedule: 2.00 pm to 4.00 pm"
          />
          <FormatCard
            title="Residency Programme"
            image={residencyImg}
            desc="An intensive Gurukul-style stay for serious learners who want discipline, devotion and daily riyaaz as part of the learning experience."
            meta="Available seats: 2–3"
            to="/residency"
          />
        </div>
      </Section>

      <Section
        eyebrow="Online Classes"
        title="Packages, practice and rescheduling."
        intro="Online learning follows a clear monthly package, rescheduling, practice and progress-review structure."
      >
        <PolicyAccordion sections={onlinePolicy} />
      </Section>

      <Section
        eyebrow="Offline Classes"
        title="Monthly batches, attendance and studio etiquette."
        intro="In-studio learning follows a fixed monthly structure designed to support consistency, attendance and the discipline of regular practice."
      >
        <PolicyAccordion sections={offlinePolicy} />
      </Section>

      <FinalCTA />
    </>
  );
}

function FormatCard({
  title,
  image,
  desc,
  meta,
  to,
}: {
  title: string;
  image: string;
  desc: string;
  meta?: string;
  to?: "/residency";
}) {
  const content = (
    <>
      <img src={image} alt="" className="aspect-[3/2] w-full object-cover" />
      <div className="p-7">
        <h3 className="font-serif text-2xl text-indigo-deep">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        {meta && <p className="mt-4 text-xs uppercase tracking-wider text-earth">{meta}</p>}
        {to && (
          <span className="mt-5 inline-block text-sm font-medium text-indigo-deep">
            View residency →
          </span>
        )}
      </div>
    </>
  );
  return to ? (
    <Link
      to={to}
      className="overflow-hidden rounded-sm border border-border bg-card transition hover:border-gold/60 hover:shadow-soft"
    >
      {content}
    </Link>
  ) : (
    <article className="overflow-hidden rounded-sm border border-border bg-card">{content}</article>
  );
}

function PolicyAccordion({ sections }: { sections: { title: string; items: string[] }[] }) {
  return (
    <div className="divide-y divide-border overflow-hidden rounded-sm border border-border bg-card">
      {sections.map((section, index) => (
        <details key={section.title} className="group p-6" open={index === 0}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-serif text-xl text-indigo-deep">
            {section.title}
            <span className="text-gold transition group-open:rotate-45">+</span>
          </summary>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/85">
            {section.items.map((item) => (
              <li key={item} className="flex gap-3">
                <Check size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}
