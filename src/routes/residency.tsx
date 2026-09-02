import { createFileRoute, Link } from "@tanstack/react-router";
import residencyImg from "@/assets/tanpura/residency-detail.png";
import { Section } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";
import { Check } from "lucide-react";

export const Route = createFileRoute("/residency")({
  head: () => ({
    meta: [
      { title: "Residency Programme — Tanpura House" },
      {
        name: "description",
        content:
          "Immersive Gurukul-style Hindustani Classical Vocal residency at Tanpura House with 7–30 day stays, daily riyaaz, accommodation, meals and focused practice.",
      },
      { property: "og:title", content: "Residency Programme — Tanpura House" },
      {
        property: "og:description",
        content:
          "A 7–30 day immersive Gurukul-style stay for serious Hindustani Classical Vocal students.",
      },
      { property: "og:url", content: "/residency" },
      { property: "og:image", content: residencyImg },
      { property: "twitter:image", content: residencyImg },
    ],
    links: [{ rel: "canonical", href: "/residency" }],
  }),
  component: ResidencyPage,
});

const facilities = [
  "Comfortable private or shared room with clean bed, fresh bedsheets, blankets, and pillows",
  "Attached bathroom with hot water facility",
  "24×7 electricity and reliable high-speed WiFi",
  "Dedicated study table and chair for theory and notes",
  "Quiet, well-ventilated personal riyaaz corner with tanpura and shruti box access",
  "Common areas for group learning and evening discussions",
];

const food = [
  "Nutritious pure vegetarian meals prepared and served daily: breakfast, lunch, dinner, plus evening tea/snacks",
  "Children below 12 years can receive fully cooked meals, including non-vegetarian food if requested in advance",
  "Adults preferring non-vegetarian food or special diets may use the shared kitchen for simple self-cooking",
  "Filtered drinking water and basic kitchen utensils are provided",
];

const guidelines = [
  "Wake-up and guided group riyaaz: 5:00 A.M.",
  "Lights out and complete silence: 9:30 P.M.",
  "Participation in light daily chores to cultivate humility and discipline as part of the guru-shishya tradition",
  "Strict no-alcohol and no-smoking policy on the premises",
  "Maintain cleanliness and tidiness of your room and common areas",
  "Yoga, walks, or gym are not formally provided but can be self-managed in the garden or nearby park",
];

function ResidencyPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={residencyImg}
          alt="Tanpura House residency learning environment in Dehradun"
          width={1400}
          height={1000}
          className="h-[70vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-deep/25 via-indigo-deep/55 to-indigo-deep/90" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-x pb-14 text-ivory md:pb-16">
            <p className="eyebrow text-gold">The Residency Programme</p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl text-ivory md:text-7xl">
              Live, learn, and practise in a Gurukul-style setting.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-ivory/85">
              An immersive stay for Hindustani Classical Vocal students at Radiance, designed around
              focused learning, daily riyaaz, discipline, and a nurturing musical environment.
            </p>
          </div>
        </div>
      </section>

      <Section eyebrow="Duration of Stay" title="From one focused week to a full month.">
        <div className="grid gap-6 md:grid-cols-3">
          <DetailCard title="Minimum stay" value="7 days" />
          <DetailCard title="Maximum stay" value="30 days" />
          <DetailCard title="Availability" value="2–3 seats" />
        </div>
        <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
          Choose any duration in between based on your learning goals, practice intensity, and slot
          availability. Extensions are possible subject to availability.
        </p>
      </Section>

      <Section eyebrow="Facilities Provided" title="A simple environment built around practice.">
        <Checklist items={facilities} />
      </Section>

      <Section eyebrow="Food & Meals" title="Daily meals and practical flexibility.">
        <Checklist items={food} />
      </Section>

      <Section eyebrow="Daily Rhythm" title="Discipline is part of the residency.">
        <div className="grid gap-4 md:grid-cols-2">
          {guidelines.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-sm border border-border bg-card p-5 text-sm leading-relaxed text-foreground/90"
            >
              <Check size={17} className="mt-0.5 shrink-0 text-gold" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Residency Fees" title="All-inclusive stay pricing.">
        <div className="grid gap-6 md:grid-cols-3">
          <PriceCard label="7-Day Stay" price="₹6,500" />
          <PriceCard label="30-Day Stay" price="₹25,000" note="Best value" />
          <PriceCard label="Custom 8–29 Days" price="₹1,000/day" />
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-indigo-deep px-6 py-3 text-sm font-medium text-ivory"
          >
            Enquire About Residency
          </Link>
          <Link
            to="/programs"
            className="rounded-full border border-indigo-deep/25 px-6 py-3 text-sm font-medium text-indigo-deep"
          >
            Explore Training Levels
          </Link>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="flex gap-3 rounded-sm border border-border bg-card p-5 text-sm leading-relaxed text-foreground/90"
        >
          <Check size={17} className="mt-0.5 shrink-0 text-gold" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function DetailCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-sm border border-border bg-card p-7">
      <p className="eyebrow">{title}</p>
      <p className="mt-3 font-serif text-3xl text-indigo-deep">{value}</p>
    </div>
  );
}

function PriceCard({ label, price, note }: { label: string; price: string; note?: string }) {
  return (
    <div className="rounded-sm border border-border bg-card p-7">
      <p className="eyebrow">{label}</p>
      <p className="mt-3 font-serif text-3xl text-indigo-deep">{price}</p>
      {note && <p className="mt-2 text-sm text-earth">{note}</p>}
    </div>
  );
}
