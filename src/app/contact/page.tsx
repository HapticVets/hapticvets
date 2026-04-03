"use client";

import { useState } from "react";

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

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        interest: "",
        veteran: "",
        message: "",
      });
    }

    setLoading(false);
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-6">Contact HNVO</h1>

      <p className="mb-10 text-neutral-400">
        Tell us what you’re looking for and we’ll get back to you directly.
      </p>

      {success && (
        <p className="mb-6 text-green-400">
          Message sent. We’ll reach out shortly.
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Name */}
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-4 bg-neutral-900 border border-neutral-700 rounded"
        />

        {/* Email */}
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-4 bg-neutral-900 border border-neutral-700 rounded"
        />

        {/* Phone */}
        <input
          name="phone"
          placeholder="Phone Number (optional)"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-4 bg-neutral-900 border border-neutral-700 rounded"
        />

        {/* Interest */}
        <select
          name="interest"
          value={form.interest}
          onChange={handleChange}
          required
          className="w-full p-4 bg-neutral-900 border border-neutral-700 rounded"
        >
          <option value="">What are you interested in?</option>
          <option>Dog Training</option>
          <option>Veteran Trade Program</option>
          <option>Sponsorship / Partnership</option>
          <option>General Inquiry</option>
        </select>

        {/* Veteran */}
        <select
          name="veteran"
          value={form.veteran}
          onChange={handleChange}
          required
          className="w-full p-4 bg-neutral-900 border border-neutral-700 rounded"
        >
          <option value="">Are you a Veteran?</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Tell us more about your situation or what you're looking for..."
          value={form.message}
          onChange={handleChange}
          rows={5}
          required
          className="w-full p-4 bg-neutral-900 border border-neutral-700 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-500 text-black font-semibold py-4 rounded hover:bg-yellow-400 transition"
        >
          {loading ? "Sending..." : "Submit Request"}
        </button>
      </form>
    </section>
  );
}