import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/hero-urban.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Urban Nest" },
      {
        name: "description",
        content:
          "The story behind Urban Nest — a community space and design studio for slow living in the city.",
      },
      { property: "og:title", content: "About — Urban Nest" },
      {
        property: "og:description",
        content: "The story behind Urban Nest — a quiet home in the loud city.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-[1400px] px-6 pt-16 pb-24 md:px-12 md:pt-28 md:pb-36">
        <p className="reveal text-xs uppercase tracking-[0.25em] text-muted-foreground">
          ( About — est. 2021 )
        </p>
        <h1 className="reveal reveal-delay-1 mt-6 font-display text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[1] tracking-tight">
          A small studio
          <br /> with a <em className="font-normal text-muted-foreground">big window.</em>
        </h1>

        <div className="mt-20 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src={heroImg}
              alt="The Urban Nest building at dusk"
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-[var(--shadow-card)]"
            />
          </div>
          <div className="md:col-span-7 space-y-8 text-base leading-relaxed text-foreground/90 md:text-lg">
            <p>
              Urban Nest began on the third floor of a tired brick building on
              Linden Lane. We were three friends — an architect, a baker and a
              ceramicist — who wanted somewhere to work that felt less like an
              office and more like a home.
            </p>
            <p>
              Four years later we are a community of more than two hundred
              members. We design <em>quiet rooms</em> for clients across the
              city, host weekly suppers around our long oak table, and grow
              herbs on the roof.
            </p>
            <p>
              Everything we make and host is built on one belief: the modern
              city deserves softer corners.
            </p>
          </div>
        </div>

        <div className="mt-24 grid gap-8 border-t border-border pt-12 md:grid-cols-3">
          {[
            { k: "200+", v: "Community members" },
            { k: "48", v: "Workshops hosted" },
            { k: "1", v: "Very loved building" },
          ].map((s) => (
            <div key={s.v}>
              <p className="font-display text-6xl font-semibold">{s.k}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {s.v}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
          >
            Come visit us <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
