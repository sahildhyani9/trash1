import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";
import baithakImg from "@/assets/tanpura/baithak-gallery-2.png";
import gallery1 from "@/assets/tanpura/baithak-gallery-1.jpg";
import gallery2 from "@/assets/tanpura/baithak-gallery-2.png";
import gallery3 from "@/assets/tanpura/baithak-gallery-3.png";
import aparajitaPoster from "@/assets/tanpura/aparajita-baithak.png";
import rabinPoster from "@/assets/tanpura/rabin-baithak.png";
import { academyStats } from "@/data/tanpura";
import { Check } from "lucide-react";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Baithaks & Community — Tanpura House" },
      {
        name: "description",
        content:
          "Explore Tanpura House Baithaks, intimate live-music gatherings, event posters, performance photographs and the 2025 Aparajita Chakraborty Baithak.",
      },
      { property: "og:title", content: "Baithaks & Community — Tanpura House" },
      {
        property: "og:description",
        content:
          "An archive of Tanpura House Baithaks and intimate live-music gatherings in Dehradun.",
      },
      { property: "og:url", content: "/community" },
      { property: "og:image", content: baithakImg },
    ],
    links: [{ rel: "canonical", href: "/community" }],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Baithaks & Community"
        title="Live music, shared at close range."
        intro="An intimate gathering where artists come together to share the pure joy of live music and heartfelt performance."
      />

      <section className="section-y">
        <div className="container-x grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <img
            src={baithakImg}
            alt="Audience gathered for a Tanpura House Baithak"
            loading="lazy"
            width={1400}
            height={900}
            className="aspect-[3/2] w-full rounded-sm object-cover shadow-soft"
          />
          <div>
            <p className="eyebrow mb-3">Sangat</p>
            <h2 className="font-serif text-3xl text-indigo-deep md:text-4xl">
              Baithaks are part of the musical environment.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              They create a space for listening, performance, artistic exchange and community around
              Hindustani Classical Music. Tanpura House has organised eight Baithaks alongside
              workshops, student learning and performances.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-5 border-t border-border pt-6">
              {academyStats
                .filter((s) =>
                  ["Workshops organised", "Performances", "Baithaks organised"].includes(s.label),
                )
                .map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-serif text-3xl text-indigo-deep">{stat.value}</dt>
                    <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </dd>
                  </div>
                ))}
            </dl>
          </div>
        </div>
      </section>

      <Section eyebrow="Baithak Archive" title="Baithaks by year.">
        <div className="space-y-12">
          <YearArchive
            year="2026"
            posters={[{ src: rabinPoster, alt: "Tanpura House 2026 Baithak poster" }]}
          />
          <YearArchive
            year="2025"
            posters={[
              {
                src: aparajitaPoster,
                alt: "Aparajita Chakraborty Tanpura House Baithak poster, 2025",
              },
            ]}
          />
          <YearArchive
            year="2024"
            posters={[
              {
                src: rabinPoster,
                alt: "Tanpura House 2024 Baithak poster",
              },
            ]}
          />
        </div>
      </Section>

      <Section eyebrow="2025 Baithak" title="Aparajita Chakraborty">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <img
              src={aparajitaPoster}
              alt="Aparajita Chakraborty Baithak Season 2 poster"
              className="w-full rounded-sm border border-border object-cover shadow-soft"
            />
            <div className="mt-5 rounded-sm border border-border bg-secondary/40 p-5 text-sm">
              <p>
                <span className="eyebrow mr-2">Year</span> 2025
              </p>
              <p className="mt-2">
                <span className="eyebrow mr-2">Type</span> Rabindra Sangeet
              </p>
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="eyebrow">Performer</p>
            <h3 className="mt-2 font-serif text-3xl text-indigo-deep">
              Dhrupad Vocalist — 21st Generation Dagarvani Tradition
            </h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Aparajita began her musical journey at the age of six, born into a family rich in
              music and theatre. She holds a Master’s degree in Music from Rabindra Bharati
              University, Kolkata, where she deeply immersed herself in Dhrupad. She considers
              Dhrupad her spiritual rebirth, a path that helped her discover her true self through
              sound and silence. As a practitioner of the Dagarvani tradition, she belongs to its
              21st generation.
            </p>

            <h4 className="mt-8 font-serif text-2xl text-indigo-deep">Core training</h4>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Dhrupad under Ustad Faiyaz Wasifuddin Dagar",
                "Advanced guidance from Padma Shri Gundecha Brothers",
                "Khayal with Rajyashree Ghosh & Sushobhon Chanda",
                "Rabindra Sangeet with Debarati Shom & Piyali Mukherjee",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-sm border border-border bg-card p-4 text-sm leading-relaxed"
                >
                  <Check size={16} className="mt-0.5 shrink-0 text-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h4 className="mt-8 font-serif text-2xl text-indigo-deep">Notable performances</h4>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/85">
              {[
                "NCPA, Mumbai (2021)",
                "Chennai Dhrupad Utsav (2019)",
                "Smaran Gurukul, Bhopal (2019)",
                "Multiple concerts in Goa (2019)",
                "Several online concerts (2020–2022)",
                "Rabindra Sangeet programmes at Jorasanko Thakurbari and other venues in Kolkata",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="Baithak Gallery" title="Photographs preserved from the 2025 event page.">
        <div className="grid gap-6 md:grid-cols-3">
          {[gallery1, gallery2, gallery3].map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Tanpura House Baithak photograph ${index + 1}`}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm border border-border object-cover shadow-soft"
            />
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}

function YearArchive({ year, posters }: { year: string; posters: { src: string; alt: string }[] }) {
  return (
    <div>
      <div className="mb-5 flex items-center gap-4">
        <h3 className="font-serif text-3xl text-indigo-deep">{year}</h3>
        <span className="h-px flex-1 bg-border" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posters.map((poster) => (
          <figure
            key={poster.alt}
            className="overflow-hidden rounded-sm border border-border bg-card p-3"
          >
            <img
              src={poster.src}
              alt={poster.alt}
              loading="lazy"
              className="h-[30rem] w-full object-contain"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
