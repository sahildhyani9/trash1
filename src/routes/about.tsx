import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";
import founderImg from "@/assets/tanpura/founder-performance.png";
import { founder } from "@/data/tanpura";
import { Check } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Pavi Gaur & Tanpura House" },
      {
        name: "description",
        content:
          "Meet Pavi Gaur, Hindustani Classical vocalist and teacher specialising in Dhrupad, Dagarvani and voice culture, and learn about the philosophy behind Tanpura House.",
      },
      { property: "og:title", content: "About Pavi Gaur & Tanpura House" },
      {
        property: "og:description",
        content:
          "Dhrupad, Dagarvani, voice culture and personalised Hindustani Classical Vocal training at Tanpura House.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: founderImg },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Tanpura House"
        title="Traditional depth. Personal mentorship. A living practice."
        intro="Tanpura House is built around Hindustani Classical Vocal Music, Dhrupad, voice culture, disciplined riyaaz and a teaching relationship that adapts to the individual student."
      />

      <section className="section-y">
        <div className="container-x grid items-start gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <img
              src={founderImg}
              alt="Hindustani classical vocal performance at Tanpura House"
              loading="lazy"
              width={1200}
              height={1000}
              className="w-full rounded-sm object-cover shadow-soft"
            />
          </div>
          <div className="md:col-span-7">
            <p className="eyebrow mb-3">About the Teacher</p>
            <h2 className="font-serif text-3xl text-indigo-deep md:text-5xl">{founder.name}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{founder.bio}</p>
            <p className="mt-5 font-serif text-2xl italic text-earth">
              Learning with love and laughter — without compromising on discipline.
            </p>
          </div>
        </div>
      </section>

      <Section eyebrow="Training & Lineage" title="The musical journey behind the teaching.">
        <div className="grid gap-4 md:grid-cols-2">
          {founder.credentials.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-sm border border-border bg-card p-6 text-sm leading-relaxed text-foreground/90"
            >
              <Check size={17} className="mt-0.5 shrink-0 text-gold" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Teaching Philosophy" title="A structure, but never a rigid template.">
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {[
            [
              "Voice first",
              "Training begins with how the student produces, hears and places sound — not simply with memorising compositions.",
            ],
            [
              "Raag through experience",
              "Raag is understood through listening, swar, phrases, Alaap and Bandish, so musical grammar becomes lived expression.",
            ],
            [
              "Rhythm as a foundation",
              "Taal and Laya grow alongside melody, from elementary cycles to advanced Layakari and improvisation.",
            ],
            [
              "Personalised progression",
              "The level provides a roadmap, but the actual teaching evolves around prior knowledge, goals, pace and practice.",
            ],
            [
              "Riyaz between classes",
              "Regular personal practice, recordings and feedback are part of progress rather than an optional extra.",
            ],
            [
              "From learning to performance",
              "Baithaks, recitals and performance guidance create opportunities to carry the music beyond the classroom.",
            ],
          ].map(([title, desc]) => (
            <article key={title} className="bg-card p-7">
              <h3 className="font-serif text-xl text-indigo-deep">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/programs"
            className="text-sm font-medium text-indigo-deep underline-offset-4 hover:underline"
          >
            Explore the training levels →
          </Link>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
