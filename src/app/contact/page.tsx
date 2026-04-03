"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message.");
        return;
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send message.");
    }
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:px-10">
      <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
        Contact
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
        Connect With HNVO
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
        For sponsorships, partnerships, veteran interest, or general mission
        inquiries, send a message below.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold text-white">
            Contact Information
          </h2>

          <div className="mt-6 space-y-5 text-sm leading-7 text-neutral-300">
            <p>
              <span className="font-semibold text-white">
                General Inquiries:
              </span>{" "}
              <a
                href="mailto:jreese@hapticvets.com"
                className="text-amber-400 hover:underline"
              >
                jreese@hapticvets.com
              </a>
            </p>

            <p>
              <span className="font-semibold text-white">
                Sponsorship / Partnerships:
              </span>{" "}
              <a
                href="mailto:jreese@hapticvets.com"
                className="text-amber-400 hover:underline"
              >
                jreese@hapticvets.com
              </a>
            </p>

            <p>
              <span className="font-semibold text-white">
                Veteran Program Interest:
              </span>{" "}
              <a
                href="mailto:jreese@hapticvets.com"
                className="text-amber-400 hover:underline"
              >
                jreese@hapticvets.com
              </a>
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-white"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-amber-400"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-white"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-amber-400"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-semibold text-white"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={form.subject}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, subject: e.target.value }))
                }
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-amber-400"
                placeholder="How can we help?"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                value={form.message}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, message: e.target.value }))
                }
                className="min-h-[180px] w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-amber-400"
                placeholder="Tell us about your inquiry..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-black transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-sm font-medium text-green-400">
                Message sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm font-medium text-red-400">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}