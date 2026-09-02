import { Link } from "@tanstack/react-router";
import { contactDetails } from "@/data/tanpura";

export function FinalCTA() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-sm border border-indigo-deep/20 bg-indigo-deep px-6 py-16 text-center text-ivory md:px-12 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, var(--gold) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--saffron) 0, transparent 40%)",
            }}
          />
          <p className="eyebrow relative text-gold/90">Begin</p>
          <h2 className="relative mt-4 text-balance font-serif text-3xl text-ivory md:text-5xl">
            Ready to begin your musical journey?
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-ivory/80">
            Start with a conversation about your musical background, goals and the level that suits
            you.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-indigo-deep transition hover:bg-gold/90"
            >
              Send an Enquiry
            </Link>
            <a
              href={contactDetails.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ivory/30 px-6 py-3 text-sm font-medium text-ivory transition hover:bg-ivory/10"
            >
              Schedule Demo Class
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
