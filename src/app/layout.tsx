import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://hapticvets.com"),
  title: "Haptic Nation Veteran Outreach",
  description:
    "Veteran-focused trade training, working dog programs, and homestead-based transition systems built to create real-world purpose after service.",
  openGraph: {
    title: "Haptic Nation Veteran Outreach",
    description:
      "Building a veteran-focused trade school, working dog program, and self-sustaining homestead system.",
    url: "https://hapticvets.com",
    siteName: "Haptic Nation Veteran Outreach",
    images: [
      {
        url: "/images/branding/og-image1-v2.jpg",
        width: 1200,
        height: 630,
        alt: "Haptic Nation Veteran Outreach",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haptic Nation Veteran Outreach",
    description:
      "Trade training. Working dogs. Homestead systems. Built for veterans.",
    images: ["/images/branding/og-image1-v2.jpg"],
  },
};

function Header() {
  const donationUrl = process.env.NEXT_PUBLIC_DONATION_URL;

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/partners", label: "Partners" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 md:gap-4 md:px-10">
        <Link
          href="/"
          className="max-w-full text-sm font-bold leading-snug tracking-wide text-white sm:text-base md:text-lg"
        >
          Haptic Nation Veteran Outreach
        </Link>

        <a
          href="https://train.hapticvets.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-16 w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 transition hover:bg-white/10 sm:w-auto sm:gap-4 sm:px-4"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black/30 sm:h-16 sm:w-16">
            <img
              src="/images/branding/training-logo.png"
              alt="Dog Trainer Program"
              className="max-h-10 max-w-10 object-contain sm:max-h-12 sm:max-w-12"
            />
          </div>

          <div className="flex min-w-0 flex-col leading-tight">
            <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 sm:tracking-[0.25em]">
              Online
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-400 sm:text-sm sm:tracking-[0.2em]">
              Dog Training
            </span>
          </div>
        </a>

        <nav className="flex w-full flex-wrap gap-2 text-sm sm:gap-3 md:gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-11 items-center rounded-full px-3 text-neutral-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          {donationUrl && (
            <a
              href={donationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center rounded-full bg-amber-400 px-4 font-semibold text-black transition hover:bg-amber-300"
            >
              Donate
            </a>
          )}
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
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-neutral-950 text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
