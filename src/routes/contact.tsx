import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Mail, Phone, MessageCircle, MapPin, Clock3 } from "lucide-react";
import { contactDetails } from "@/data/tanpura";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Tanpura House | Book a Trial Class" },
      {
        name: "description",
        content:
          "Contact Tanpura House in Nehrugram, Dehradun for Hindustani Classical Vocal classes, online training and residency enquiries.",
      },
      { property: "og:title", content: "Contact Tanpura House" },
      {
        property: "og:description",
        content: "Book a trial class or ask about online, offline and residency learning.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Begin"
        title="Get in touch with Tanpura House."
        intro="Tell us about your current musical background and what you want to learn. We can then guide you towards the right level and learning format."
      />

      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <form
              action={contactDetails.formspree}
              method="POST"
              className="space-y-5 rounded-sm border border-border bg-card p-7 md:p-10"
            >
              <input type="hidden" name="_subject" value="Tanpura House website enquiry" />
              <Field label="Your name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone / WhatsApp" name="phone" type="tel" />
              <div>
                <label htmlFor="interest" className="eyebrow mb-2 block">
                  I’m interested in
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                >
                  <option>Foundational training</option>
                  <option>Intermediate training</option>
                  <option>Advanced training / mentorship</option>
                  <option>Online classes</option>
                  <option>Offline classes</option>
                  <option>Residency programme</option>
                  <option>Not sure yet — please advise</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="eyebrow mb-2 block">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell us about your musical background, goals, preferred format, or any questions you have."
                  className="w-full resize-y rounded-sm border border-input bg-background px-4 py-3 text-sm leading-relaxed focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-indigo-deep px-6 py-3.5 text-sm font-medium text-ivory shadow-soft transition hover:bg-indigo-deep/90"
              >
                Send Enquiry
              </button>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Your enquiry will be sent directly to Tanpura House.
              </p>
            </form>
          </div>

          <aside className="md:col-span-5">
            <div className="rounded-sm border border-border bg-secondary/40 p-7 md:p-10">
              <h2 className="font-serif text-2xl text-indigo-deep">Tanpura House</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <Contact
                  icon={Mail}
                  label="Email"
                  value={contactDetails.email}
                  href={`mailto:${contactDetails.email}`}
                />
                <Contact
                  icon={Phone}
                  label="Call"
                  value={contactDetails.phoneDisplay}
                  href={`tel:${contactDetails.phoneHref}`}
                />
                <Contact
                  icon={MessageCircle}
                  label="WhatsApp"
                  value="Message Tanpura House"
                  href={`https://wa.me/${contactDetails.whatsapp}`}
                />
                <Contact icon={MapPin} label="Visit" value={contactDetails.address} />
                <Contact icon={Clock3} label="Hours" value={contactDetails.hours} />
              </ul>
            </div>
            <a
              href={contactDetails.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-indigo-deep transition hover:bg-gold/90"
            >
              Schedule Demo Class
            </a>
            <p className="mt-6 px-1 text-sm leading-relaxed text-muted-foreground">
              For residency enquiries, mention your current level, intended duration of stay, and
              preferred dates so availability can be checked.
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow mb-2 block">
        {label}
        {required && <span className="ml-1 text-saffron">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
      />
    </div>
  );
}

function Contact({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <Icon size={18} className="mt-0.5 shrink-0 text-gold" />
      <span>
        <span className="block text-xs uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <span className="text-foreground">{value}</span>
      </span>
    </>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="flex gap-3 hover:text-indigo-deep"
        >
          {inner}
        </a>
      ) : (
        <div className="flex gap-3">{inner}</div>
      )}
    </li>
  );
}
