import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/hero-urban.jpg";
import workshopsImg from "@/assets/activity-workshops.jpg";
import gardenImg from "@/assets/activity-garden.jpg";
import gatheringsImg from "@/assets/activity-gatherings.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Urban Nest — A Quiet Home in the Loud City" },
      {
        name: "description",
        content:
          "Urban Nest is a community space and design studio reimagining how we live, gather and rest in the modern city.",
      },
      { property: "og:title", content: "Urban Nest — A Quiet Home in the Loud City" },
      {
        property: "og:description",
        content:
          "A community space and design studio for slow living in the modern city.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

const activities = [
  {
    n: "01",
    title: "Workshops",
    desc: "Hands-on sessions in ceramics, woodworking and slow design with neighbourhood makers.",
    img: workshopsImg,
  },
  {
    n: "02",
    title: "Rooftop Garden",
    desc: "A shared edible garden ten floors above the street — tend, harvest, share a meal.",
    img: gardenImg,
  },
  {
    n: "03",
    title: "Gatherings",
    desc: "Weekly suppers, listening rooms and quiet salons for the people of the building.",
    img: gatheringsImg,
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 pt-12 pb-24 md:grid-cols-12 md:gap-12 md:px-12 md:pt-20 md:pb-32">
          <div className="md:col-span-7 flex flex-col justify-center">
            <p className="reveal mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-10 bg-foreground/40" />
              Est. 2021 · A studio for slow living
            </p>

            <h1 className="reveal reveal-delay-1 font-display text-[clamp(2.75rem,7vw,6.25rem)] font-semibold leading-[0.95] tracking-tight">
              A quiet home
              <br />
              in the <em className="font-normal text-muted-foreground">loud</em> city.
            </h1>

            <p className="reveal reveal-delay-2 mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Urban Nest is a community space, design studio and small brand —
              built around the idea that the modern city deserves softer
              corners, slower mornings, and rooms that breathe.
            </p>

            <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/activities"
                className="group inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
              >
                See what's happening
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium underline-offset-4 hover:underline"
              >
                Our story
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="reveal reveal-delay-2 relative aspect-[4/5] overflow-hidden rounded-sm shadow-[var(--shadow-card)]">
              <img
                src={heroImg}
                alt="A modern urban building lit warmly at dusk"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/40 to-transparent p-6 text-primary-foreground">
                <p className="font-display text-sm italic">
                  "The city is loud — your home shouldn't be."
                </p>
              </div>
            </div>
            <div className="absolute -left-6 -top-6 hidden h-24 w-24 rotate-12 border border-foreground/20 md:block" />
          </div>
        </div>

        {/* marquee */}
        <div className="border-y border-border bg-background overflow-hidden py-5">
          <div className="marquee flex w-max gap-16 whitespace-nowrap font-display text-2xl italic text-muted-foreground md:text-3xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-16">
                <span>Slow mornings</span><span aria-hidden>✦</span>
                <span>Shared tables</span><span aria-hidden>✦</span>
                <span>Quiet rooms</span><span aria-hidden>✦</span>
                <span>Neighbourhood makers</span><span aria-hidden>✦</span>
                <span>Soft corners</span><span aria-hidden>✦</span>
                <span>Rooftop dinners</span><span aria-hidden>✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              ( About )
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-3xl leading-snug md:text-5xl">
              We design <em className="font-normal">rooms</em>, host{" "}
              <em className="font-normal">gatherings</em> and grow a small
              community of people who believe the city can still feel like home.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
            >
              Read our story <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
          <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                ( Activities )
              </p>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                What we're <em className="font-normal">growing</em>.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              A rotating programme of workshops, dinners and shared spaces — all
              hosted inside our small building on Linden Lane.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {activities.map((a) => (
              <article
                key={a.n}
                className="group relative flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-all duration-700 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.title}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 font-display text-sm text-background mix-blend-difference">
                    — {a.n}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-semibold">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {a.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <h2 className="md:col-span-8 font-display text-4xl font-semibold leading-tight md:text-7xl">
              Come knock<br /> on our <em className="font-normal">door.</em>
            </h2>
            <div className="md:col-span-4">
              <p className="mb-8 text-sm leading-relaxed text-primary-foreground/70">
                We host open hours every Thursday from 4 — 8pm. No appointment
                needed, just bring yourself.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-sm border border-primary-foreground/40 px-6 py-3.5 text-sm font-medium transition-all hover:bg-primary-foreground hover:text-primary"
              >
                Get directions <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
