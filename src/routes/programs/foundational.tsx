import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/site/ProgramPage";
import programImg from "@/assets/tanpura/foundational-detail.jpg";

export const Route = createFileRoute("/programs/foundational")({
  head: () => ({
    meta: [
      { title: "Foundational Training — Tanpura House" },
      {
        name: "description",
        content:
          "Beginner-level Hindustani Classical Vocal Music training covering swar, raag, bandish, alankaar, palta, taal and laya with personalised guidance.",
      },
      { property: "og:title", content: "Foundational Training — Tanpura House" },
      {
        property: "og:description",
        content:
          "A structured beginner path into Hindustani Classical Vocal Music, rooted in swar, raag, taal and voice development.",
      },
      { property: "og:url", content: "/programs/foundational" },
      { property: "og:image", content: programImg },
    ],
    links: [{ rel: "canonical", href: "/programs/foundational" }],
  }),
  component: () => (
    <ProgramPage
      data={{
        name: "Foundational Training",
        level: "Beginners",
        intro:
          "Beginner-level training in Indian Classical Vocal Music, thoughtfully designed to build a strong musical foundation while keeping the learning journey engaging and enjoyable.",
        who: "For complete beginners and learners who want to establish the fundamentals correctly: pitch, swar placement, a first Raag and Bandish, basic Alankaar and Palta, and an elementary understanding of Taal and Laya.",
        image: programImg,
        imageAlt: "Foundational Hindustani classical vocal learning at Tanpura House",
        curriculum: [
          {
            title: "Understanding Notes — Swar / Swar Sthan",
            description:
              "Master the seven primary swaras (Sa, Re, Ga, Ma, Pa, Dha, Ni) and their precise placement within the octave. Through guided listening and vocal exercises, students work towards pitch purity (Shruti Shuddhi), understand how notes shape the emotional character of a Raag, and begin recognising the microtonal detail that defines classical precision.",
          },
          {
            title: "Introduction to Raag & Bandish",
            description:
              "Experience a first Raag through its Aaroh, Avaroh, Pakad and Vadi-Samvadi relationships, followed by a simple Bandish in a chosen Raag and Taal. Beginner repertoire can include simple Raags such as Yaman, Bhupali and Kafi. The aim is to turn theory into musical expression through slow, expressive rendering and gentle variations while learning to feel the Raag's Bhaav.",
          },
          {
            title: "Basic Sargam Patterns — Alankaar / Palta",
            description:
              "Build vocal agility and muscle memory through systematic note patterns and sequential exercises. Practice straight (Sapat) and wavy (Vakra) patterns across different speeds to strengthen breath control, voice modulation, seamless note transitions, clarity and tonal accuracy.",
          },
          {
            title: "Elementary Rhythm & Taal Training",
            description:
              "Learn the heartbeat of the music through Taal. Begin with cycles such as Teentaal (16 beats) and Dadra (6 beats), using taali and khali patterns, Theka, rhythmic recitation, and different Layas — Vilambit, Madhya and Drut — to develop timing, coordination, and the relationship between Sur and Laya.",
          },
        ],
        support: [
          "Interactive & personalised: small batch sizes or 1:1 options for individual attention, voice assessment, and tailored feedback.",
          "Progressive structure: each concept builds on the previous one, with weekly milestones and home-practice guidance.",
          "Audio-visual aids: recorded Raag demonstrations, Taal loops, and notation sheets for reinforcement.",
          "Joy within discipline: light Bhajans, folk-inspired Bandish, or creative improvisation may be used to keep learning engaging.",
        ],
        commitment:
          "Students at the beginner level are encouraged to attend at least two sessions per week, usually 45–60 minutes each. Three sessions per week are ideal for accelerated growth and muscle memory, while a minimum of two helps maintain continuity, reinforce concepts, and cultivate daily practice habits. Flexible scheduling is available, with online and in-studio options and monthly progress reviews.",
        format: "Online or in-studio · minimum 2 sessions/week recommended",
        availability: "10",
        schedule: "2.00 pm to 4.00 pm",
      }}
    />
  ),
});
