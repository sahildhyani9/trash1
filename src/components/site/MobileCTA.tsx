import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { contactDetails } from "@/data/tanpura";

export function MobileCTA() {
  return (
    <>
      <a
        href={`https://wa.me/${contactDetails.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Tanpura House on WhatsApp"
        className="fixed bottom-24 right-4 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-elevated transition hover:scale-105 md:bottom-6 md:right-6 md:h-14 md:w-14"
      >
        <MessageCircle size={22} />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
        <div className="container-x flex items-center gap-2 py-2.5">
          <Link
            to="/contact"
            className="flex-1 rounded-full bg-indigo-deep px-4 py-3 text-center text-sm font-medium text-ivory shadow-sm"
          >
            Book a Trial Class
          </Link>
          <a
            href={`tel:${contactDetails.phoneHref}`}
            aria-label="Call Tanpura House"
            className="grid h-11 w-11 place-items-center rounded-full border border-indigo-deep/30 text-indigo-deep"
          >
            <Phone size={18} />
          </a>
        </div>
      </div>
    </>
  );
}
