import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";
import { faqItems } from "@/data/tanpura";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Hindustani Music Resources & Guides | Tanpura House" },
      {
        name: "description",
        content:
          "Learn about Dhrupad, voice culture, daily riyaz, and the basics of Hindustani Classical Music — free guides and FAQs.",
      },
      { property: "og:title", content: "Resources — Tanpura House" },
      {
        property: "og:description",
        content: "Educational hub: Dhrupad, voice culture, riyaz, FAQs.",
      },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: ResourcesPage,
});

const articles = [
  {
    cat: "Dhrupad",
    title: "What is Dhrupad?",
    desc: "A short introduction to the oldest living tradition of Indian classical vocal music.",
  },
  {
    cat: "Hindustani Basics",
    title: "Beginner's Guide to Hindustani Music",
    desc: "Sa, raag, taal — the building blocks explained gently.",
  },
  {
    cat: "Riyaz",
    title: "Your Daily Riyaz Guide",
    desc: "A simple, sustainable daily practice plan for any level.",
  },
  {
    cat: "Voice Culture",
    title: "Voice Culture Techniques",
    desc: "Breath, posture, and the technical foundations of classical singing.",
  },
  {
    cat: "Student Guides",
    title: "How to Listen to a Raag",
    desc: "Train your ear before you train your voice.",
  },
  {
    cat: "Student Guides",
    title: "Setting Up Your Tanpura",
    desc: "Drone basics for new students — acoustic and digital.",
  },
];

const faqs = faqItems;

function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Learn the tradition — even before you join."
        intro="Free guides, articles, and FAQs on Hindustani Classical Music, Dhrupad, voice culture, and daily riyaz."
      />

      <Section eyebrow="Guides & Articles" title="Where to start.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article
              key={a.title}
              className="group flex flex-col rounded-sm border border-border bg-card p-7 transition hover:border-gold/60"
            >
              <p className="eyebrow">{a.cat}</p>
              <h3 className="mt-3 font-serif text-xl text-indigo-deep">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              <span className="mt-auto pt-6 text-xs uppercase tracking-wider text-earth">
                Guide coming soon
              </span>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Frequently asked questions.">
        <div className="mx-auto max-w-3xl divide-y divide-border rounded-sm border border-border bg-card">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-lg text-indigo-deep">
                {f.q}
                <span className="mt-1 text-gold transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="text-sm font-medium text-indigo-deep underline-offset-4 hover:underline"
          >
            Still have questions? Talk to us →
          </Link>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
