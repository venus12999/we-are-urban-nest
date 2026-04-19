import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Urban Nest" },
      {
        name: "description",
        content:
          "Visit Urban Nest on Linden Lane, or send us a note. Open hours every Thursday 4 — 8pm.",
      },
      { property: "og:title", content: "Contact — Urban Nest" },
      {
        property: "og:description",
        content: "Come knock on our door — open hours every Thursday.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-[1400px] px-6 pt-16 pb-24 md:px-12 md:pt-28 md:pb-36">
        <p className="reveal text-xs uppercase tracking-[0.25em] text-muted-foreground">
          ( Contact )
        </p>
        <h1 className="reveal reveal-delay-1 mt-6 max-w-4xl font-display text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[1] tracking-tight">
          Come knock <em className="font-normal">on our</em> door.
        </h1>

        <div className="mt-20 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5 space-y-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Visit
              </p>
              <p className="mt-3 font-display text-2xl leading-snug">
                42 Linden Lane, 3rd Floor
                <br />
                City Quarter, 100 21
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Open hours
              </p>
              <p className="mt-3 font-display text-2xl leading-snug">
                Thursdays · 4 — 8pm
                <br />
                <span className="text-muted-foreground italic">or by appointment</span>
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Write to us
              </p>
              <p className="mt-3 font-display text-2xl leading-snug">
                hello@urbannest.studio
                <br />
                +44 (0) 20 7946 0001
              </p>
            </div>
          </div>

          <form
            className="md:col-span-7"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="space-y-8">
              <Field label="Your name" id="name" />
              <Field label="Email" id="email" type="email" />
              <div>
                <label
                  htmlFor="msg"
                  className="block text-xs uppercase tracking-[0.2em] text-muted-foreground"
                >
                  A note
                </label>
                <textarea
                  id="msg"
                  rows={5}
                  required
                  className="mt-3 w-full resize-none border-0 border-b border-border bg-transparent pb-3 font-display text-2xl leading-snug outline-none transition-colors focus:border-foreground"
                  placeholder="Tell us what brings you here…"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
              >
                {sent ? "Thank you — we'll be in touch ✦" : "Send your note"}
                {!sent && (
                  <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  id,
  type = "text",
}: {
  label: string;
  id: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs uppercase tracking-[0.2em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        className="mt-3 w-full border-0 border-b border-border bg-transparent pb-3 font-display text-2xl leading-snug outline-none transition-colors focus:border-foreground"
      />
    </div>
  );
}
