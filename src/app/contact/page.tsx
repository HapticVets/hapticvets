"use client";

import { useState } from "react";
import Script from "next/script";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    veteran: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const token = (document.querySelector(
      'input[name="cf-turnstile-response"]'
    ) as HTMLInputElement)?.value;

    if (!token) {
      alert("Please complete verification.");
      setLoading(false);
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        turnstileToken: token,
        companyFax: "",
      }),
    });

    const result = await res.json();

    if (res.ok && result.success) {
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        interest: "",
        veteran: "",
        message: "",
      });
    } else {
      alert(result.error || "Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />

      <section className="max-w-3xl mx-auto px-6 py-20 text-white">
        <h1 className="text-4xl font-bold mb-6">Contact HNVO</h1>

        {success && (
          <p className="mb-6 text-green-400">
            Message sent. We’ll reach out shortly.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot */}
          <input type="text" name="companyFax" className="hidden" />

          <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required className="w-full p-4 bg-neutral-900 border border-neutral-700 rounded" />
          <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required className="w-full p-4 bg-neutral-900 border border-neutral-700 rounded" />
          <input name="phone" placeholder="Phone Number (optional)" value={form.phone} onChange={handleChange} className="w-full p-4 bg-neutral-900 border border-neutral-700 rounded" />

          <select name="interest" value={form.interest} onChange={handleChange} required className="w-full p-4 bg-neutral-900 border border-neutral-700 rounded">
            <option value="">What are you interested in?</option>
            <option>Dog Training</option>
            <option>Veteran Trade Program</option>
            <option>Sponsorship / Partnership</option>
            <option>General Inquiry</option>
          </select>

          <select name="veteran" value={form.veteran} onChange={handleChange} required className="w-full p-4 bg-neutral-900 border border-neutral-700 rounded">
            <option value="">Are you a Veteran?</option>
            <option>Yes</option>
            <option>No</option>
          </select>

          <textarea name="message" placeholder="Tell us more..." value={form.message} onChange={handleChange} rows={5} required className="w-full p-4 bg-neutral-900 border border-neutral-700 rounded" />

          {/* ✅ Native Turnstile widget */}
          <div
            className="cf-turnstile"
            data-sitekey={siteKey}
          ></div>

          <button type="submit" disabled={loading} className="w-full bg-yellow-500 text-black font-semibold py-4 rounded">
            {loading ? "Sending..." : "Submit Request"}
          </button>
        </form>
      </section>
    </>
  );
}