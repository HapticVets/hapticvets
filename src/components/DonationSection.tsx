const donationUrl = process.env.NEXT_PUBLIC_DONATION_URL;

export default function DonationSection() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-400 sm:text-sm sm:tracking-[0.25em]">
            Donations
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Support the Mission
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">
            Your one-time donation helps support veteran outreach, service dog
            training, kennel development, and homesteading programs.
          </p>

          {donationUrl && (
            <a
              href={donationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-amber-400 px-8 py-3 text-base font-semibold text-black transition hover:bg-amber-300 sm:w-auto sm:text-lg"
            >
              Donate Any Amount
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
