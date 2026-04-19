import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import workshopsImg from "@/assets/activity-workshops.jpg";
import gardenImg from "@/assets/activity-garden.jpg";
import gatheringsImg from "@/assets/activity-gatherings.jpg";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Activities — Urban Nest" },
      {
        name: "description",
        content:
          "Workshops, rooftop gardening and weekly gatherings hosted at Urban Nest.",
      },
      { property: "og:title", content: "Activities — Urban Nest" },
      {
        property: "og:description",
        content: "What's happening this season at Urban Nest.",
      },
      { property: "og:image", content: workshopsImg },
    ],
  }),
  component: ActivitiesPage,
});

const list = [
  {
    n: "01",
    title: "Workshops",
    when: "Saturdays · 10—2pm",
    desc: "Ceramics, woodworking and natural-dye sessions led by neighbourhood makers. Small groups, long lunches included.",
    img: workshopsImg,
  },
  {
    n: "02",
    title: "Rooftop Garden",
    when: "Open daily · sunrise — sunset",
    desc: "A shared edible garden ten floors above the street. Members tend the beds; everyone is welcome to harvest a sprig of rosemary.",
    img: gardenImg,
  },
  {
    n: "03",
    title: "Thursday Suppers",
    when: "Thursdays · 7pm",
    desc: "A long oak table, a slow menu, and whoever shows up. Bring a story; we'll bring the bread.",
    img: gatheringsImg,
  },
];

function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-[1400px] px-6 pt-16 pb-12 md:px-12 md:pt-28">
        <p className="reveal text-xs uppercase tracking-[0.25em] text-muted-foreground">
          ( Programme · Spring season )
        </p>
        <h1 className="reveal reveal-delay-1 mt-6 max-w-4xl font-display text-[clamp(2.5rem,6.5vw,5.5rem)] font-semibold leading-[1] tracking-tight">
          What we're <em className="font-normal">growing</em> this season.
        </h1>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-32 md:px-12">
        <div className="divide-y divide-border border-y border-border">
          {list.map((a, i) => (
            <article
              key={a.n}
              className="group grid grid-cols-1 gap-8 py-12 md:grid-cols-12 md:gap-12 md:py-20"
            >
              <div className="md:col-span-1 font-display text-sm text-muted-foreground">
                — {a.n}
              </div>
              <div className="md:col-span-5 order-2 md:order-1">
                <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                  {a.title}
                </h2>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {a.when}
                </p>
                <p className="mt-8 max-w-md text-base leading-relaxed text-foreground/80">
                  {a.desc}
                </p>
                <button className="mt-10 inline-flex items-center gap-3 text-sm font-medium underline-offset-4 hover:underline">
                  Reserve a spot <span aria-hidden>→</span>
                </button>
              </div>
              <div className="md:col-span-6 order-1 md:order-2 overflow-hidden rounded-sm">
                <img
                  src={a.img}
                  alt={a.title}
                  className={`aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 ${
                    i % 2 ? "" : ""
                  }`}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
