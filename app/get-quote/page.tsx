"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

const services = [
  "Flex Printing",
  "Eco Solvent Printing",
  "Glow Sign Board",
  "Vinyl Printing",
  "Hoarding Board",
  "Paper Printing — All",
  "Stationery Items",
];

export default function GetQuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [quoteNumber, setQuoteNumber] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const { data, error } = await supabase.from("quote_requests").insert({
      name: String(form.get("name") || "").trim(),
      phone: String(form.get("phone") || "").trim(),
      service: String(form.get("service") || "").trim(),
      quantity: String(form.get("quantity") || "").trim() || null,
      required_date: String(form.get("date") || "") || null,
      message: String(form.get("message") || "").trim(),
    }).select("quote_number").single();

    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    setQuoteNumber(data.quote_number);
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">Sagar Digital</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900">Get a Quote</h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">Tell us what you need and your request will be saved directly to Sagar Digital.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-semibold text-slate-700">Name<input required name="name" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" placeholder="Your name" /></label>
            <label className="text-sm font-semibold text-slate-700">Mobile Number<input required name="phone" type="tel" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" placeholder="10 digit mobile number" /></label>
            <label className="text-sm font-semibold text-slate-700 md:col-span-2">Service<select required name="service" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500"><option value="">Select service</option>{services.map((service) => <option key={service}>{service}</option>)}</select></label>
            <label className="text-sm font-semibold text-slate-700">Quantity<input name="quantity" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" placeholder="e.g. 100" /></label>
            <label className="text-sm font-semibold text-slate-700">Required Date<input name="date" type="date" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" /></label>
            <label className="text-sm font-semibold text-slate-700 md:col-span-2">Requirement / Message<textarea required name="message" rows={5} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" placeholder="Tell us about your requirement..." /></label>
          </div>

          <button disabled={loading} type="submit" className="mt-6 w-full rounded-xl bg-red-600 px-6 py-3.5 font-bold text-white transition hover:bg-red-700 disabled:opacity-60">{loading ? "Submitting..." : "Submit Quote Request"}</button>

          {error && <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">Could not submit request. Please try again or WhatsApp us.</div>}

          {submitted && (
            <div className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-700">
              Quote request submitted successfully. Your reference is <span className="font-black">{quoteNumber}</span>.
              <div className="mt-3 flex flex-wrap gap-3">
                <a href={`https://wa.me/919523265948?text=Hello%20Sagar%20Digital,%20my%20quote%20reference%20is%20${quoteNumber}`} target="_blank" rel="noreferrer" className="rounded-lg bg-green-600 px-4 py-2 text-white">WhatsApp</a>
                <Link href="/order" className="rounded-lg bg-red-600 px-4 py-2 text-white">Place Order</Link>
              </div>
            </div>
          )}
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">Call or WhatsApp: <a href="tel:+919523265948" className="font-bold text-slate-800">+91 95232 65948</a></div>
      </div>
    </main>
  );
}
