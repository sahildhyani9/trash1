import { Link } from "@tanstack/react-router";
import logo from "@/assets/tanpura/logo.png";
import { contactDetails } from "@/data/tanpura";

const columns = [
  {
    title: "Learn",
    links: [
      { to: "/programs/foundational", label: "Foundational" },
      { to: "/programs/intermediate", label: "Intermediate" },
      { to: "/programs/advanced", label: "Advanced" },
      { to: "/residency", label: "Residency" },
    ],
  },
  {
    title: "Discover",
    links: [
      { to: "/about", label: "About" },
      { to: "/community", label: "Baithaks" },
      { to: "/testimonials", label: "Testimonials" },
      { to: "/resources", label: "Resources" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" aria-label="Tanpura House home">
              <img src={logo} alt="Tanpura House" className="h-12 w-auto" />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Hindustani Classical Vocal Music rooted in Dhrupad, Dagarvani, voice culture,
              disciplined riyaaz and personalised mentorship.
            </p>
            <div className="mt-6 space-y-1.5 text-sm text-foreground/75">
              <p>{contactDetails.address}</p>
              <p>
                <a href={`tel:${contactDetails.phoneHref}`} className="hover:text-indigo-deep">
                  {contactDetails.phoneDisplay}
                </a>
                <span className="mx-2 text-border">·</span>
                <a href={`mailto:${contactDetails.email}`} className="hover:text-indigo-deep">
                  {contactDetails.email}
                </a>
              </p>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="md:col-span-2">
              <h4 className="eyebrow mb-4 text-foreground">{column.title}</h4>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-foreground/75 hover:text-indigo-deep"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-3">
            <h4 className="eyebrow mb-4 text-foreground">Connect</h4>
            <div className="space-y-3 text-sm text-foreground/75">
              <Link to="/contact" className="block hover:text-indigo-deep">
                Book a Trial Class
              </Link>
              <a
                href={`https://wa.me/${contactDetails.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-indigo-deep"
              >
                WhatsApp Tanpura House
              </a>
              <p className="text-muted-foreground">{contactDetails.hours}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-3xl border-l border-gold/50 pl-5">
          <p className="font-serif text-sm leading-relaxed text-earth/90 md:text-base">
            ख्याल की लयकारी, स्वर के भटकाव की डगर में बैटन पकड़ाऊ चपल रिले रेस नज़र आती है। क्या डागर
            सुन लिया आपने? गलत नहीं — डागर वाणी ध्रुपद का एक प्रकार है। बखूबी जानिये, सही रास्ते में
            बढ़ती दुनिया कब और कैसे पकड़ लेती है गलत राह।
          </p>
        </div>

        <hr className="hairline my-10" />

        <div className="flex flex-col items-start justify-between gap-3 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Tanpura House. All rights reserved.</p>
          <p className="font-serif italic text-earth">Voice. Raag. Discipline.</p>
        </div>
      </div>
    </footer>
  );
}
