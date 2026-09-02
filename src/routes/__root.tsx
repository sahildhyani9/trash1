import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";
import { MobileCTA } from "../components/site/MobileCTA";
import favicon from "@/assets/tanpura/favicon.png";
import { contactDetails } from "@/data/tanpura";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-serif text-5xl text-indigo-deep">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for has moved or doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-indigo-deep px-5 py-2.5 text-sm font-medium text-ivory"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl text-indigo-deep">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-indigo-deep px-5 py-2.5 text-sm font-medium text-ivory"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent/20"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1a1a3a" },
      { title: "Tanpura House — Hindustani Classical Vocal & Dhrupad Academy" },
      {
        name: "description",
        content:
          "Hindustani Classical Vocal Music training rooted in Dhrupad, Dagarvani and voice culture, with online, in-studio and residency learning from Dehradun.",
      },
      { name: "author", content: "Tanpura House" },
      { property: "og:site_name", content: "Tanpura House" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Tanpura House — Hindustani Classical Vocal & Dhrupad Academy",
      },
      {
        property: "og:description",
        content:
          "Hindustani Classical Vocal Music, Dhrupad, voice culture, personalised mentorship, Baithaks and immersive residency learning.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: favicon },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Tanpura House",
          description:
            "Hindustani Classical Vocal Music learning focused on Dhrupad, Dagarvani, voice culture, personalised mentorship and immersive residency training.",
          areaServed: "Worldwide",
          email: contactDetails.email,
          telephone: contactDetails.phoneHref,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Nehrugram",
            addressLocality: "Dehradun",
            addressRegion: "Uttarakhand",
            postalCode: "248001",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-dvh flex-col">
        <Nav />
        <main className="flex-1 pb-20 lg:pb-0">
          <Outlet />
        </main>
        <Footer />
        <MobileCTA />
      </div>
    </QueryClientProvider>
  );
}
