import Link from "next/link";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <h2 className="text-3xl font-bold md:text-5xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export default function PartnersPage() {
  const sponsorTiers = [
    {
      title: "Kennel Build Sponsor",
      price: "$2,000 – $15,000",
      description:
        "Supports the construction of the core kennel infrastructure that will help generate revenue for the broader HNVO mission.",
      impact: [
        "Kennel runs and fencing",
        "Shelter structures",
        "Initial working dog setup",
        "Revenue-generating foundation for long-term growth",
      ],
    },
    {
      title: "Homestead Expansion Sponsor",
      price: "$3,000 – $20,000",
      description:
        "Supports the expansion of the active homestead system already underway, helping build food sustainability and therapeutic land-based responsibility.",
      impact: [
        "Perimeter fencing for livestock",
        "Cow building / shelter for milking and beef program",
        "Second chicken coop for poultry birds",
        "Expansion from egg production into broader food systems",
      ],
    },
    {
      title: "Dog Program Sponsor",
      price: "$5,000 – $25,000",
      description:
        "Funds the development of a sustainable dog breeding and training program designed to help support the mission over time.",
      impact: [
        "Breeding program development",
        "Training equipment and systems",
        "Working dog expansion",
        "Program and content scaling",
      ],
    },
    {
      title: "Trade Program Sponsor",
      price: "$10,000 – $50,000",
      description:
        "Supports the launch of certification-aligned trade pathways for veterans in practical, employable skill areas.",
      impact: [
        "Welding, diesel, culinary, or woodworking tools",
        "Training setups and materials",
        "Program development",
        "Certification-aligned groundwork",
      ],
    },
    {
      title: "Infrastructure Sponsor",
      price: "$25,000 – $100,000+",
      description:
        "Helps fund the larger physical structures needed to scale HNVO into a full veteran training ecosystem.",
      impact: [
        "Workshop buildings",
        "Kennel expansion",
        "Homestead infrastructure",
        "Long-term facility development",
      ],
    },
  ];

  return (
    <div>
      <section className="border-b border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
            Partnerships
          </p>

          <h1 className="mt-6 text-5xl font-bold md:text-7xl">
            Fund the Mission
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            Haptic Nation Veteran Outreach is building a self-sustaining system
            designed to help veterans transition into civilian life through
            trade training, land-based responsibility, working dog programs, and
            long-term structure. This mission is being built from the ground up,
            beginning with the systems that can produce sustainability over
            time.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-black"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>

      <Section title="How This System Is Built">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-amber-400">
              Step 1 — Build the Revenue Base
            </h3>
            <p className="mt-4 text-neutral-300">
              The kennel, dog training, and homestead systems form the early
              foundation that can help fund and stabilize the mission.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-amber-400">
              Step 2 — Expand Food and Land Systems
            </h3>
            <p className="mt-4 text-neutral-300">
              Chickens are already active. The next phase is expanding fencing,
              livestock infrastructure, and food production so the land becomes
              more self-sustaining.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-amber-400">
              Step 3 — Launch Full Trade Pathways
            </h3>
            <p className="mt-4 text-neutral-300">
              With stable infrastructure in place, HNVO can expand into larger
              trade programs, certification-aligned training, and long-term
              veteran support systems.
            </p>
          </div>
        </div>
      </Section>

      <Section title="What Is Already in Motion">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">Active Foundation</h3>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-neutral-300">
              <li>• Land is already secured</li>
              <li>• Homesteading has already started</li>
              <li>• Chickens are already in production</li>
              <li>• Dog training is already active</li>
              <li>• Existing kennel access is helping inform the next phase</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">Immediate Build Needs</h3>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-neutral-300">
              <li>• Build an independent kennel for mission-owned dogs</li>
              <li>• Install fencing for larger livestock systems</li>
              <li>• Construct a cow building for milking and beef raising</li>
              <li>• Add a second chicken coop for poultry production</li>
              <li>• Expand the physical base needed for future trade buildings</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Funding Opportunities">
        <div className="grid gap-6 md:grid-cols-2">
          {sponsorTiers.map((tier) => (
            <div
              key={tier.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-2xl font-semibold text-amber-400">
                {tier.title}
              </h3>

              <p className="mt-2 text-sm text-neutral-400">{tier.price}</p>

              <p className="mt-4 text-neutral-300">{tier.description}</p>

              <ul className="mt-6 space-y-2 text-sm text-neutral-300">
                {tier.impact.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Current Partners">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <img
              src="/images/partners/das-muller-logo.png"
              alt="Das Müller Kennel"
              className="mx-auto h-20 object-contain"
            />

            <p className="mt-6 text-neutral-300">
              Das Müller Kennel contributes to working-dog development and
              supports the integration of canine programs within HNVO.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <img
              src="/images/partners/patriot-k9-logo.png"
              alt="Patriot K9 Command"
              className="mx-auto h-20 object-contain"
            />

            <p className="mt-6 text-neutral-300">
              Patriot K9 Command supports professional training systems and
              online dog training tied to the mission.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Build This With Us">
        <div className="rounded-3xl border border-white/10 p-10 text-center">
          <p className="text-lg text-neutral-300">
            This mission is being built in phases, with real land, real systems,
            and real infrastructure needs. If your company wants to help build
            something durable, practical, and veteran-focused, we want to work
            with you.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-black"
            >
              Start a Partnership
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}