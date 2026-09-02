import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/site/ProgramPage";
import programImg from "@/assets/tanpura/advanced-detail.png";

export const Route = createFileRoute("/programs/advanced")({
  head: () => ({
    meta: [
      { title: "Advanced Training — Tanpura House" },
      {
        name: "description",
        content:
          "Advanced one-to-one Hindustani Classical Vocal mentorship for professional or well-trained singers, with Bhaav, Layakari, Bandish, improvisation, performance and artistic identity.",
      },
      { property: "og:title", content: "Advanced Training — Tanpura House" },
      {
        property: "og:description",
        content:
          "Personalised advanced mentorship for serious vocalists refining technique, expression, improvisation and performance craft.",
      },
      { property: "og:url", content: "/programs/advanced" },
      { property: "og:image", content: programImg },
    ],
    links: [{ rel: "canonical", href: "/programs/advanced" }],
  }),
  component: () => (
    <ProgramPage
      data={{
        name: "Advanced Training",
        level: "Professional & Well-Trained Vocalists",
        intro:
          "For professional or well-trained vocalists looking to refine technique, deepen expression, receive focused guidance on intricate aspects of their style, and build a stronger artistic identity.",
        who: "For serious singers working in Khayal, Dhrupad, Thumri, fusion, or related traditions who need highly personalised mentorship rather than a fixed syllabus. The work is shaped around the student's voice, strengths, artistic vision, performance goals, and areas requiring refinement.",
        image: programImg,
        imageAlt:
          "Advanced Hindustani classical music training and performance practice at Tanpura House",
        curriculum: [
          {
            title: "Tailored One-on-One Vocal Coaching",
            description:
              "Receive deeply personalised mentorship around your unique voice, style and artistic vision. Sessions target specific areas such as breath mastery, microtonal precision, voice projection, stylistic refinement, and stage charisma rather than following a generic curriculum.",
          },
          {
            title: "Intricate Expression — Bhaav & Layakari",
            description:
              "Explore extended and meditative Alaap-Jod-Jhala, complex Behlawa, and multi-layered Taan combinations including Sapta, Sarvlag, Gamak and Koot approaches, along with sophisticated Bol Bant, Gamaka, Meend and Andolan. The focus is on emotional depth, Rasa, and greater command over the expressive possibilities of Raag.",
          },
          {
            title: "Advanced Bandish & Improvisation",
            description:
              "Refine Vilambit, Madhya and Drut Bandish presentation; work with rare and complex Taals such as Ada Chautal, Deepchandi and Jat Taal; develop intricate Layakari including 1½, 2½ and 3½-beat relationships, Tihais, Upaj and signature Gayaki elements that support an individual performance voice.",
          },
          {
            title: "Performance Excellence & Artistic Identity",
            description:
              "Work intensively on stage presence, microphone technique, concert programming and audience connection. Prepare for recordings, competitions or major concerts through mock performances, critical listening, and detailed feedback on presentation and interpretation.",
          },
          {
            title: "Specialised Streams — Optional",
            description:
              "Deeper immersion can be shaped around Dhrupad, Thumri-Dadra, Tarana, rare Raags, or Musicology and Research depending on the student's artistic goals.",
          },
        ],
        support: [
          "Pure 1-on-1 mentorship: no group classes; the session is dedicated to the individual student's growth.",
          "In-depth recording analysis with detailed feedback on session recordings.",
          "Access to rare material, archival recordings, handwritten notations and advanced theory resources where relevant.",
          "Guidance for performance, recording, concerts, albums and collaborations.",
        ],
        commitment:
          "Advanced students are recommended one intensive session per week, typically 60–90 minutes. The focused mentorship format leaves significant space for personal riyaz, reflection and artistic maturation between sessions. Serious students often supplement the lesson with daily guided practice material shared by the mentor. Scheduling is flexible, online and in-studio options are available, and sessions are by prior appointment.",
        format: "1-on-1 · online or in-studio · usually 1 intensive session/week",
        availability: "10",
        schedule: "2.00 pm to 4.00 pm",
      }}
    />
  ),
});
