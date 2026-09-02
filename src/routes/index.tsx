import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/tanpura/offline-detail.png";
import founderImg from "@/assets/tanpura/founder-performance.png";
import baithakImg from "@/assets/tanpura/baithak-gallery-1.jpg";
import residencyImg from "@/assets/tanpura/residency-detail.png";
import foundationalImg from "@/assets/tanpura/foundational-card.png";
import intermediateImg from "@/assets/tanpura/intermediate-card.png";
import advancedImg from "@/assets/tanpura/advanced-card.png";
import onlineImg from "@/assets/tanpura/online-class.png";
import offlineImg from "@/assets/tanpura/offline-class.png";
import residencyCardImg from "@/assets/tanpura/residency-card.png";
import { Section } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";
import { academyStats, faqItems, founder, testimonials } from "@/data/tanpura";
import { ArrowRight, Sparkles, BookOpen, Mic2, Users, Mountain, Compass } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tanpura House — Hindustani Classical Vocal Music" },
      {
        name: "description",
        content:
          "Hindustani Classical Vocal Music training rooted in Dhrupad, Dagarvani and voice culture. Foundational, Intermediate and Advanced training, online, in-studio and residency learning in Dehradun.",
      },
      { property: "og:title", content: "Tanpura House — Hindustani Classical Vocal Music" },
      {
        property: "og:description",
        content:
          "Voice. Raag. Discipline. Personalised Hindustani Classical Vocal training, Baithaks and an immersive residency programme.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const pillars = [
  {
    icon: BookOpen,
    title: "Structured Learning",
    desc: "A clear progression from foundational training to advanced artistic mentorship.",
  },
  {
    icon: Sparkles,
    title: "Dhrupad Foundation",
    desc: "Dagarvani-rooted training with Dhrupad, Dhamaar, Raag and disciplined listening at the core.",
  },
  {
    icon: Mic2,
    title: "Voice Culture",
    desc: "Focused work on pitch, breath, tonal clarity, projection, modulation and vocal development.",
  },
  {
    icon: Users,
    title: "Sangat & Baithaks",
    desc: "Learning extends into intimate musical gatherings, recitals and a community around the tradition.",
  },
  {
    icon: Mountain,
    title: "Residency",
    desc: "A 7–30 day Gurukul-style stay built around riyaaz, discipline, food, accommodation and focused learning.",
  },
  {
    icon: Compass,
    title: "Personal Mentorship",
    desc: "The roadmap adapts to prior knowledge, voice, goals, practice and individual progress.",
  },
];

const journey = [
  {
    step: "01",
    title: "Foundational",
    desc: "Swar, Swar Sthan, first Raag, Bandish, Alankaar and elementary Taal.",
  },
  {
    step: "02",
    title: "Intermediate",
    desc: "Vistar, Alaap, Meend, Taan, complex Taal, Layakari and performance development.",
  },
  {
    step: "03",
    title: "Advanced",
    desc: "One-to-one refinement of expression, improvisation, performance craft and artistic identity.",
  },
  {
    step: "04",
    title: "Performance",
    desc: "Recitals, Baithaks, concert preparation, recording and stage confidence.",
  },
  {
    step: "05",
    title: "Artistic Growth",
    desc: "A long-term practice shaped by riyaaz, listening, reflection and musical individuality.",
  },
];

const programs = [
  {
    to: "/programs/foundational",
    name: "Foundational",
    level: "Beginners",
    image: foundationalImg,
    lines: ["Swar / Swar Sthan", "Raag & Bandish", "Alankaar / Palta", "Elementary Taal & Laya"],
  },
  {
    to: "/programs/intermediate",
    name: "Intermediate",
    level: "Basic foundation required",
    image: intermediateImg,
    lines: [
      "Raag Vistar & Alaap",
      "Taal & Layakari",
      "Madhya / Drut Bandish",
      "Personalised pathway",
    ],
  },
  {
    to: "/programs/advanced",
    name: "Advanced",
    level: "Professional / well-trained",
    image: advancedImg,
    lines: [
      "1-on-1 coaching",
      "Bhaav & Layakari",
      "Advanced Bandish & Upaj",
      "Performance & artistic identity",
    ],
  },
] as const;

const formats = [
  {
    name: "Online",
    desc: "Structured online lessons for students across the globe, with personalised guidance in Dhrupad and voice culture.",
    to: "/programs" as const,
    image: onlineImg,
  },
  {
    name: "Offline",
    desc: "Face-to-face, in-studio learning in a focused environment for students who prefer direct traditional instruction.",
    to: "/programs" as const,
    image: offlineImg,
  },
  {
    name: "Residency",
    desc: "An intensive Gurukul-style experience for serious learners, with daily riyaaz and an immersive musical routine.",
    to: "/residency" as const,
    image: residencyCardImg,
  },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="container-x grid items-center gap-10 py-12 md:grid-cols-12 md:gap-12 md:py-24">
          <div className="md:col-span-7">
            <p className="eyebrow mb-5 flex items-center gap-3">
              <span className="gold-rule" /> Voice. Raag. Discipline.
            </p>
            <h1 className="text-balance font-serif text-4xl leading-[1.05] text-indigo-deep md:text-7xl">
              Rooted in <em className="font-normal text-earth">devotion and discipline.</em>
            </h1>
            <p className="text-balance mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Preserving tradition and inspiring expression through Hindustani Classical Vocal
              Music, Dhrupad, voice culture, personalised mentorship, Baithaks and immersive
              learning.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-indigo-deep px-6 py-3.5 text-sm font-medium text-ivory shadow-soft transition hover:bg-indigo-deep/90"
              >
                Book a Trial Class
                <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 rounded-full border border-indigo-deep/25 px-6 py-3.5 text-sm font-medium text-indigo-deep transition hover:bg-secondary"
              >
                Explore Programs
              </Link>
            </div>

            <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
              {academyStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-serif text-2xl text-indigo-deep md:text-3xl">{stat.value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-sm bg-gradient-to-br from-gold/20 via-transparent to-indigo-deep/10 blur-2xl" />
              <img
                src={heroImg}
                alt="A Tanpura House musical gathering in Dehradun"
                width={1200}
                height={800}
                className="aspect-[4/5] w-full rounded-sm object-cover shadow-elevated"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-sm border border-border bg-card px-5 py-4 shadow-soft md:block">
                <p className="font-serif text-2xl italic text-indigo-deep">A living tradition</p>
                <p className="text-xs text-muted-foreground">
                  Learning through listening, riyaaz and sangat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Why Tanpura House"
        title="A modern structure around a traditional practice."
        intro="Six pillars shape the learning environment: structure, Dhrupad, voice culture, sangat, immersion and personal mentorship."
      >
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="group bg-card p-7 transition hover:bg-secondary/60">
              <p.icon className="text-gold" size={26} strokeWidth={1.4} />
              <h3 className="mt-5 font-serif text-2xl text-indigo-deep">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="The Learning Journey"
        title="From foundation to artistic identity."
        intro="The level gives the student a clear place to begin; the actual teaching remains personalised to their voice, background and progress."
      >
        <ol className="relative grid gap-6 md:grid-cols-5 md:gap-4">
          {journey.map((j, i) => (
            <li key={j.step} className="relative rounded-sm border border-border bg-card p-6">
              <p className="font-serif text-3xl text-gold">{j.step}</p>
              <h3 className="mt-2 font-serif text-xl text-indigo-deep">{j.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{j.desc}</p>
              {i < journey.length - 1 && (
                <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-gold md:block" />
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Section
        eyebrow="What I Teach"
        title="Hindustani Classical Vocal Music."
        intro="Three levels, each with a distinct purpose and a deeper level of musical responsibility."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <Link
              key={p.name}
              to={p.to}
              className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition hover:border-gold/60 hover:shadow-soft"
            >
              <div className="bg-secondary/40 p-5">
                <img src={p.image} alt="" className="aspect-[4/3] w-full object-contain" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="eyebrow">{p.level}</p>
                <h3 className="mt-3 font-serif text-3xl text-indigo-deep">{p.name}</h3>
                <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                  {p.lines.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {line}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto pt-6 text-sm font-medium text-indigo-deep">Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Learning Formats" title="Online, offline, or fully immersed.">
        <div className="grid gap-6 md:grid-cols-3">
          {formats.map((format) => (
            <Link
              key={format.name}
              to={format.to}
              className="overflow-hidden rounded-sm border border-border bg-card transition hover:border-gold/60 hover:shadow-soft"
            >
              <div className="bg-secondary/30 p-5">
                <img src={format.image} alt="" className="aspect-[4/3] w-full object-contain" />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl text-indigo-deep">{format.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{format.desc}</p>
                <span className="mt-5 inline-block text-sm font-medium text-indigo-deep">
                  Know more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <section className="section-y">
        <div className="container-x grid items-center gap-10 md:grid-cols-12 md:gap-16">
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
            <p className="eyebrow mb-4">About the Teacher</p>
            <h2 className="font-serif text-3xl text-indigo-deep md:text-5xl">
              Learning with love and laughter.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{founder.shortBio}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Her training includes formal education at Visva Bharati Santiniketan, guidance under
              Shri Murli Dhar Jagudi, Ma Aloka Nandy and Shri Niloy Ahsan, and time spent at Ustad
              Nasir Moinuddin Dhrupad Sangeet Ashram and with the Gundecha Brothers.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-indigo-deep underline-offset-4 hover:underline"
            >
              Read the full profile <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Section eyebrow="Testimonials" title="Happy students.">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-sm border border-border bg-card p-7"
            >
              <blockquote className="font-serif text-lg italic leading-relaxed text-indigo-deep">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-auto pt-6 text-sm font-medium text-foreground">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/testimonials"
            className="text-sm font-medium text-indigo-deep underline-offset-4 hover:underline"
          >
            Read all student reviews →
          </Link>
        </div>
      </Section>

      <section className="section-y">
        <div className="container-x grid items-center gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-6">
            <img
              src={baithakImg}
              alt="A Tanpura House Baithak gathering"
              loading="lazy"
              width={1200}
              height={800}
              className="aspect-[3/2] w-full rounded-sm object-cover shadow-soft"
            />
          </div>
          <div className="md:col-span-6">
            <p className="eyebrow mb-4">Baithaks & Sangat</p>
            <h2 className="font-serif text-3xl text-indigo-deep md:text-5xl">
              Music is also learned by gathering around it.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Tanpura House Baithaks are intimate gatherings where artists, learners and listeners
              come together to share the pure joy of live music and heartfelt performance.
            </p>
            <Link
              to="/community"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-indigo-deep underline-offset-4 hover:underline"
            >
              Explore the Baithak archive <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src={residencyImg}
          alt="Tanpura House residency learning environment"
          loading="lazy"
          width={1200}
          height={900}
          className="h-[60vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-indigo-deep/75" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-x text-ivory">
            <p className="eyebrow text-gold">The Residency Programme</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl text-ivory md:text-5xl">
              A 7–30 day Gurukul-style stay.
            </h2>
            <p className="mt-5 max-w-2xl text-ivory/85">
              Accommodation, meals, dedicated riyaaz space, disciplined routines and focused musical
              learning for serious Hindustani Classical Vocal students.
            </p>
            <Link
              to="/residency"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-indigo-deep"
            >
              Discover the Residency <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Section eyebrow="Got Questions?" title="Frequently asked questions.">
        <div className="mx-auto max-w-3xl divide-y divide-border overflow-hidden rounded-sm border border-border bg-card">
          {faqItems.map((faq) => (
            <details key={faq.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-lg text-indigo-deep">
                {faq.q}
                <span className="mt-1 text-gold transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
