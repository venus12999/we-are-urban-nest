import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h3 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
              A nest <em className="font-normal">for</em>
              <br />
              the city dweller.
            </h3>
            <p className="mt-6 max-w-md text-sm text-muted-foreground">
              Urban Nest is a community space, design studio and slow-living
              brand reimagining how we live, gather and rest in the modern city.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Explore
            </p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/activities" className="hover:underline">Activities</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Visit
            </p>
            <address className="not-italic text-sm leading-relaxed">
              42 Linden Lane, 3rd Floor<br />
              City Quarter, 100 21<br />
              hello@urbannest.studio<br />
              +44 (0) 20 7946 0001
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Urban Nest Studio. All rights reserved.</p>
          <p className="font-display italic">Built slowly, with care.</p>
        </div>
      </div>
    </footer>
  );
}
