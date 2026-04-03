import Link from "next/link";

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        {eyebrow && (
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-4 max-w-3xl text-3xl font-bold md:text-5xl">
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const programCards = [
    { title: "Welding", image: "/images/programs/welding.jpg" },
    { title: "Diesel Mechanics", image: "/images/programs/diesel.jpg" },
    { title: "Culinary", image: "/images/programs/culinary.jpg" },
    { title: "Woodworking", image: "/images/programs/woodworking.jpg" },
    { title: "Homestead", image: "/images/programs/homestead.jpg" },
    { title: "Canine Training", image: "/images/programs/canine.jpg" },
  ];

  const buildPillars = [
    {
      title: "Trade School Development",
      text: "Certification-aligned training in welding, diesel mechanics, culinary, woodworking, and additional skilled trades.",
    },
    {
      title: "Self-Sustaining Homestead",
      text: "Food production, livestock, and land-based responsibility creating both sustainability and therapeutic structure.",
    },
    {
      title: "Working Dog Programs",
      text: "Canine development through Das Müller Kennel and professional training systems from Patriot K9 Command.",
    },
    {
      title: "Veteran Housing Vision",
      text: "Future housing support integrated into training, allowing veterans to stabilize while developing real-world skills.",
    },
  ];

  const credibilityPoints = [
    {
      title: "Veterans Already Have the Foundation",
      text: "Discipline, work ethic, adaptability, and mission focus are already present. The problem is not lack of ability. The problem is lack of a structured bridge into civilian life.",
    },
    {
      title: "Hands-On Work Builds Stability",
      text: "Trade skills, land stewardship, dog training, and practical responsibility create momentum. Tangible work helps rebuild identity, routine, and confidence.",
    },
    {
      title: "Structure Reduces Drift",
      text: "A clear daily rhythm, real responsibility, and measurable progress help prevent the aimlessness that often follows separation from service.",
    },
    {
      title: "The Model Is Built for Long-Term Use",
      text: "This is not designed as a temporary feel-good program. It is being built as a real system that can grow into training, housing, certification pathways, and community.",
    },
  ];

  const roadmap = [
    {
      phase: "Phase 1 — Foundation",
      items: [
        "Build independent kennel infrastructure",
        "Expand dog training systems",
        "Strengthen homestead base already in motion",
        "Establish revenue-producing foundations",
      ],
    },
    {
      phase: "Phase 2 — Expansion",
      items: [
        "Expand fencing and livestock systems",
        "Build cattle shelter for milking and beef program",
        "Add poultry infrastructure beyond egg production",
        "Increase equipment and program capacity",
      ],
    },
    {
      phase: "Phase 3 — Full System",
      items: [
        "Build trade program spaces",
        "Launch certification-aligned pathways",
        "Expand veteran support infrastructure",
        "Create long-term self-sustaining ecosystem",
      ],
    },
  ];

  return (
    <div>
      <section className="relative h-[90vh] w-full overflow-hidden border-b border-white/10">
        <img
          src="/images/hero/hnvo-hero.jpg"
          alt="HNVO Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 md:px-10">
          <p className="text-sm uppercase tracking-[0.28em] text-amber-400">
            Veteran Outreach • Trade Training • Homestead Vision
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
            A New Mission
            <br />
            After Service
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            Building a veteran-focused trade school, working dog program, and
            self-sustaining homestead system designed to create structure,
            responsibility, and real-world purpose after service.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-black transition hover:bg-amber-300"
            >
              Support the Mission
            </Link>

            <Link
              href="/partners"
              className="rounded-full border border-white/20 px-6 py-3 transition hover:bg-white/5"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      <Section eyebrow="Structure" title="What We’re Building">
        <div className="grid gap-6 md:grid-cols-2">
          {buildPillars.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Programs"
        title="Real skills. Real training. Real outcomes."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {programCards.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why This Works"
        title="This model is built on practical logic, not empty motivation."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {credibilityPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-2xl font-semibold">{point.title}</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-300">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Mission in Motion"
        title="This is already being built, not just imagined."
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img
              src="/images/mission/mission-veterans.jpg"
              alt="Veteran Community"
              className="h-72 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">Veteran Community</h3>
              <p className="mt-4 text-neutral-300">
                Veterans working together in a structured environment built on
                teamwork, discipline, and shared purpose.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img
              src="/images/mission/mission-homestead.jpg"
              alt="Homestead Therapy"
              className="h-72 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">Homestead Therapy</h3>
              <p className="mt-4 text-neutral-300">
                Chickens are already in motion, and the next steps include
                fencing, cattle infrastructure for milk and beef, and expanded
                food systems that make the land more self-sustaining.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Roadmap"
        title="A phased approach to building the full system."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {roadmap.map((phase) => (
            <div
              key={phase.phase}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-xl font-semibold text-amber-400">
                {phase.phase}
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                {phase.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Partners"
        title="Mission-aligned partnerships strengthen the system."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <div className="mb-6 flex h-32 items-center justify-center">
              <img
                src="/images/partners/das-muller-logo.png"
                alt="Das Müller Kennel"
                className="h-full object-contain scale-125"
              />
            </div>

            <p className="text-sm leading-7 text-neutral-300">
              Das Müller Kennel contributes to working-dog development and
              supports the long-term canine side of the broader mission.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.patriotk9kennel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-amber-300"
              >
                Visit Das Müller
              </a>

              <Link
                href="/partners"
                className="inline-block rounded-full border border-white/20 px-5 py-2 text-sm font-semibold transition hover:bg-white/5"
              >
                View Sponsor Page
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <div className="mb-6 flex h-32 items-center justify-center">
              <img
                src="/images/partners/patriot-k9-logo.png"
                alt="Patriot K9 Command"
                className="h-full object-contain scale-125"
              />
            </div>

            <p className="text-sm leading-7 text-neutral-300">
              Patriot K9 Command supports the online dog training side of the
              mission through professional canine systems and training structure.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://train.hapticvets.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-amber-300"
              >
                Visit Dog Training
              </a>

              <Link
                href="/partners"
                className="inline-block rounded-full border border-white/20 px-5 py-2 text-sm font-semibold transition hover:bg-white/5"
              >
                View Sponsor Page
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Support HNVO" title="Help Build Something Real.">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
          <p className="mx-auto max-w-3xl text-lg text-neutral-300">
            Haptic Nation Veteran Outreach is actively building a working system
            for veterans through trade training, working dog development, and
            self-sustaining homestead infrastructure. If you want to support,
            sponsor, or partner with the mission, reach out directly.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-amber-400 px-8 py-4 text-lg font-semibold text-black transition hover:bg-amber-300"
            >
              Become a Sponsor
            </Link>

            <Link
              href="/contact"
              className="inline-block rounded-full border border-neutral-700 px-8 py-4 text-lg font-semibold text-white transition hover:border-neutral-500"
            >
              Support the Mission
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}