import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";
import { testimonials } from "@/data/tanpura";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Student Reviews — Tanpura House" },
      {
        name: "description",
        content:
          "Read real student and visitor reviews of Tanpura House, Pavi Gaur's Hindustani Classical Vocal teaching, and the musical environment in Dehradun.",
      },
      { property: "og:title", content: "Student Reviews — Tanpura House" },
      {
        property: "og:description",
        content:
          "Student and visitor reviews of Tanpura House and its Hindustani Classical Vocal learning environment.",
      },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What students and visitors say about Tanpura House."
        intro="Reviews from students and visitors who have experienced the teaching, musical environment and community around Tanpura House."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-sm border border-border bg-card p-7"
            >
              <blockquote className="font-serif text-lg italic leading-relaxed text-indigo-deep">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-auto pt-6 text-sm font-medium text-foreground">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}
