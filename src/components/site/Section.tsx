import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  intro,
  children,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <section className={`section-y ${className}`}>
      <div className="container-x">
        {(eyebrow || title || intro) && (
          <div className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            {title && <h2 className="text-balance text-3xl leading-tight md:text-5xl">{title}</h2>}
            {intro && (
              <p className="text-balance mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="container-x py-16 md:py-24">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
          <h1 className="text-balance text-4xl leading-[1.05] md:text-6xl">{title}</h1>
          {intro && (
            <p className="text-balance mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
