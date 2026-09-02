# Tanpura House — ZIP 1 → ZIP 2 Migration Notes

## Migration rule

This project keeps the React + TypeScript + TanStack + Tailwind architecture and modern visual system from the second ZIP, while treating the first Tanpura House ZIP as the source of truth for academy facts, curriculum, policies, contact information, testimonials, Baithak material, statistics, logo, favicon and photography.

## What was migrated

- Real Tanpura House logo and favicon.
- Founder biography, education, training lineage and 7.5+ years teaching experience.
- Academy figures: 100 Happy Students, 6 Workshops Organised, 8 Performances and 8 Baithaks Organised.
- Foundational, Intermediate and Advanced curriculum details, learning support, commitment, seats and schedule.
- Online class package, payment, rescheduling, break, practice, fee-revision and conduct policies.
- Offline monthly-batch, fee, attendance, fee-revision and studio-etiquette policies.
- Residency duration, facilities, food, discipline/routine, fees and seat availability.
- All nine student testimonials from the first ZIP.
- FAQ content from the first ZIP.
- Baithak archive material for 2024, 2025 and 2026 plus the 2025 Aparajita Chakraborty detail content and gallery.
- Real images referenced by the active first-ZIP pages, remapped into the React asset system.
- Dehradun contact information, Formspree enquiry endpoint, WhatsApp/call actions and the existing Calendly demo-class URL.
- The Hindi cultural copy from the original Tanpura House footer.

## Architecture decisions

The second ZIP's information architecture is retained:

- `Foundational / Intermediate / Advanced` are learning levels.
- `Online / Offline / Residency` are learning formats. Online and Offline policies therefore live within the Programs experience instead of becoming duplicate standalone route trees.
- Residency remains a dedicated route because it is a distinct immersive offering.
- Baithaks are presented through the Community/Baithaks route.
- Shared React components remain the single implementation for navigation, footer, CTA, page sections and program detail layouts.

## Source conflicts and safe choices

The first ZIP itself contains a few inherited/template conflicts. For those cases:

- `contact.html` was treated as the authoritative contact source: Nehrugram, Dehradun, Uttarakhand 248001; +91 9865 562 440; tanpurahouse@gmail.com; Mon–Sat 9am–8pm.
- The old footer values (`info@colorlib.com`, another phone/PIN) were not carried forward because they are clearly inherited/template remnants.
- `contact_process.php` was not used because the live first-ZIP contact page already uses Formspree.
- The 2025 Baithak field `Supporting Musicians: xxxxxxxxxx` was a placeholder, so it was deliberately not published as factual content.
- Baithak `g3.jpg` through `g8.jpg` are template/stock-looking images. They are preserved under `src/assets/tanpura/archive-unverified/` so nothing is deleted, but are not presented as real Tanpura House event photography.
- Proposed resource-guide topics from the second ZIP remain as `Guide coming soon` rather than being presented as existing articles.

## Prototype data removed from ZIP 2

Invented/provisional values such as 15+ years, 400+ students, 50+ Baithaks, Pune contact details, placeholder phone numbers, fictional testimonials, fictional events and artificial course durations were removed wherever they conflicted with ZIP 1.

## Validation

- TypeScript check: passed with `tsc --noEmit`.
- ESLint: 0 errors; 6 existing Fast Refresh warnings remain in generic shadcn/ui files.
- A full Vite production build could not be validated in this environment because the incoming second ZIP included Windows-specific Rollup native binaries in `node_modules`. The deliverable ZIP intentionally excludes `node_modules`; on a normal machine run a fresh install so the correct platform binaries are installed.

Recommended local check:

```bash
npm install
npm run build
npm run dev
```
