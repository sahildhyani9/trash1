# Code Overview: Tanpura House

Tanpura House is implemented as a React 19 + TypeScript + TanStack Start/Router + Tailwind CSS site. The modern component architecture comes from the second project iteration; factual academy content and authentic assets are sourced from the original Tanpura House site.

## Core structure

- `src/routes/` — file-based routes for Home, About, Programs, Foundational, Intermediate, Advanced, Residency, Baithaks/Community, Resources, Testimonials, Contact and sitemap.
- `src/components/site/` — shared site components such as `Nav`, `Footer`, `Section`, `CTA`, `MobileCTA` and `ProgramPage`.
- `src/data/tanpura.ts` — central source for academy statistics, founder information, testimonials, FAQs, online/offline policies and contact/conversion details.
- `src/assets/tanpura/` — Tanpura House logo, favicon, real first-site photography, training illustrations and Baithak material.
- `src/components/ui/` — generic shadcn/Radix component library infrastructure. Most of these components are not Tanpura House-specific business logic.

## Information architecture

### Learning levels

- `/programs/foundational`
- `/programs/intermediate`
- `/programs/advanced`

All three are rendered through the shared `ProgramPage` component so curriculum, support, commitment and practical details follow one maintainable visual system.

### Learning formats

- Online — policy and format information inside `/programs`
- Offline — policy and format information inside `/programs`
- Residency — dedicated `/residency` route because it is a separate immersive Gurukul-style stay

### Institution/community

- `/about` — founder, training lineage, philosophy and credentials
- `/community` — Baithaks archive plus the migrated 2025 performer/event detail
- `/testimonials` — real reviews from the original site
- `/resources` — FAQ plus planned educational resource topics
- `/contact` — Formspree enquiry form, phone, WhatsApp and Calendly demo scheduling

## Data ownership

When factual content needs to be changed, prefer editing `src/data/tanpura.ts` for shared data rather than duplicating values across pages. Program-specific curricula remain in their corresponding route modules.

## Conversion flow

- Main navigation CTA routes to Contact.
- Shared final CTA offers an enquiry action and the existing Calendly demo-class link.
- Mobile CTA exposes contact/call access.
- Contact form posts to the Formspree endpoint migrated from the original site.

## SEO

Each route defines page-level metadata. The root includes EducationalOrganization structured data using the migrated Dehradun contact details. `sitemap.xml` is generated from the route list; configure `BASE_URL` when the final production domain is confirmed.

## Important migration record

See `MIGRATION_NOTES.md` for the ZIP 1 → ZIP 2 content mapping, source conflicts, omitted placeholders and validation status.
