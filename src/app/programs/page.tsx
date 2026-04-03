const programs = [
  {
    title: "Welding & Fabrication",
    text: "Training focused on fabrication, structural work, and practical metal skills with long-term certification alignment.",
  },
  {
    title: "Diesel Mechanic Pathway",
    text: "Hands-on mechanical development built around equipment maintenance, engine work, and real-world repair experience.",
  },
  {
    title: "Culinary Training",
    text: "Kitchen discipline, food systems, preparation skills, and a long-term path toward culinary certification opportunities.",
  },
  {
    title: "Woodworking & Craftsmanship",
    text: "Furniture building, construction-minded woodworking, and practical craftsmanship with both career and entrepreneurial value.",
  },
  {
    title: "Homestead & Agricultural Skills",
    text: "Gardening, food production, livestock care, and self-sustaining practices integrated into daily structure and responsibility.",
  },
  {
    title: "Canine Development",
    text: "Dog handling, training exposure, and working-dog development supported by HNVO partnerships.",
  },
];

export default function ProgramsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
        Programs
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
        Industry-Driven Programs Built for Real Outcomes
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
        HNVO is building a certification-aligned training model designed to
        give veterans real, employable skills through structured, hands-on work.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {programs.map((program) => (
          <div
            key={program.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-2xl font-semibold">{program.title}</h2>
            <p className="mt-4 text-sm leading-7 text-neutral-300">
              {program.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}