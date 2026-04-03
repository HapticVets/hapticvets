import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Haptic Nation Veteran Outreach",
  description:
    "Haptic Nation Veteran Outreach is building a veteran-focused trade school, self-sustaining homestead, and transition system built on skill, structure, and purpose.",
};

function Header() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/partners", label: "Partners" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10">
        <Link
          href="/"
          className="text-base font-bold tracking-wide text-white md:text-lg"
        >
          Haptic Nation Veteran Outreach
        </Link>

        <a
          href="https://train.hapticvets.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-black/30">
            <img
              src="/images/branding/training-logo.png"
              alt="Dog Trainer Program"
              className="max-h-12 max-w-12 object-contain"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              Online
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Dog Training
            </span>
          </div>
        </a>

        <nav className="flex w-full flex-wrap gap-4 text-sm md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-neutral-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3 md:px-10">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Haptic Nation Veteran Outreach
          </h3>
          <p className="mt-3 text-sm leading-6 text-neutral-400">
            Building a veteran-focused ecosystem centered on trade training,
            homesteading, working-dog development, and purpose after service.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
            Explore
          </h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-neutral-400">
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/programs" className="hover:text-white">
              Programs
            </Link>
            <Link href="/partners" className="hover:text-white">
              Partners
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
            Platforms
          </h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-neutral-400">
            <a
              href="https://train.hapticvets.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Dog Training Platform
            </a>
            <a
              href="https://www.patriotk9kennel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Das Müller Kennel
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}