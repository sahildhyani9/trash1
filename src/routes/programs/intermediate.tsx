import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/site/ProgramPage";
import programImg from "@/assets/tanpura/intermediate-detail.png";

export const Route = createFileRoute("/programs/intermediate")({
  head: () => ({
    meta: [
      { title: "Intermediate Training — Tanpura House" },
      {
        name: "description",
        content:
          "Intermediate Hindustani Classical Vocal training for students with a foundation in Raag, Taal and voice, with deeper Vistar, Alaap, Bandish, Taan and Layakari.",
      },
      { property: "og:title", content: "Intermediate Training — Tanpura House" },
      {
        property: "og:description",
        content:
          "Deepen Raag, Taal, Bandish, Taan and Layakari with personalised Hindustani Classical Vocal training.",
      },
      { property: "og:url", content: "/programs/intermediate" },
      { property: "og:image", content: programImg },
    ],
    links: [{ rel: "canonical", href: "/programs/intermediate" }],
  }),
  component: () => (
    <ProgramPage
      data={{
        name: "Intermediate Training",
        level: "Intermediate Learners",
        intro:
          "Designed for learners who already have a basic foundation in Hindustani classical music and are ready to refine known Raags, expand rhythmic command, and develop greater musical expression.",
        who: "For learners who already understand basic swar, Raag and Taal and want a more mature, structured path forward. Earlier concepts can be revisited where needed before moving into deeper Vistar, Alaap, Bandish, Taan and Layakari.",
        image: programImg,
        imageAlt: "Intermediate Hindustani classical vocal training at Tanpura House",
        curriculum: [
          {
            title: "Refining & Expanding Known Raags",
            description:
              "Revisit known Raags and explore deeper Aaroh-Avaroh variations, intricate Pakad elaborations, Vistar, and the relationship between Vadi, Samvadi and Anuvadi notes. Develop more mature presentation through extended Alaap, Bol Alaap and tasteful Meend, giving each phrase greater emotional colour and personality.",
          },
          {
            title: "Enhanced Taal & Sargam Mastery",
            description:
              "Work with more complex Taal cycles such as Jhaptal, Rupak and Ektaal, along with advanced Thekas, Tihais and Layakari. Practice faster and more intricate Palta and Alankaar sequences, including Sapat, Vakra and Mishra patterns in multiple Layas, to strengthen precision, breath management and voice control.",
          },
          {
            title: "Medium & Fast-Tempo Bandish",
            description:
              "Move into Madhya Laya and Drut Bandish in different Raags. Learn Sapat Taan, Koot Taan and Gamaka-heavy Taan while maintaining Sur and Laya, and develop Bol Bant, Murki and other elements that add individuality and movement to the singing.",
          },
          {
            title: "Personalised Pathways",
            description:
              "Progress is adapted to individual practice and proficiency. If required, the early weeks or months can focus on consolidating earlier concepts. The learning roadmap can then be shaped around Khayal, light-classical forms such as Thumri or Dadra, or preparation for stage performance.",
          },
        ],
        support: [
          "One-on-one or small-group attention for detailed voice correction, style guidance, and performance grooming.",
          "Regular recording and feedback to analyse Alaaps and Bandishes for continuous improvement.",
          "Curated resources including Bandish notations, Taal audio loops, and reference recordings of established artists.",
          "Performance opportunities through periodic in-class recitals to build confidence and stage presence.",
        ],
        commitment:
          "Intermediate students can choose one or two sessions per week, usually 60 minutes each, depending on goals, practice routine, and comfort level. Two sessions per week are ideal for balanced progress, while dedicated learners can supplement the lessons with self-practice using the provided material. Flexible scheduling is available, with online and in-studio options and monthly progress reviews.",
        format: "Online or in-studio · 1–2 sessions/week",
        availability: "10",
        schedule: "2.00 pm to 4.00 pm",
      }}
    />
  ),
});
