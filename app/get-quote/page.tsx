"use client";

import { FormEvent, useState } from "react";

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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">Sagar Digital</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900">Get a Quote</h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">Tell us what you need and we will get back to you with the details.</p>
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

          <button type="submit" className="mt-6 w-full rounded-xl bg-red-600 px-6 py-3.5 font-bold text-white transition hover:bg-red-700">Submit Quote Request</button>

          {submitted && <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-700">Request received on this page. Backend/WhatsApp delivery will be connected in the next step.</div>}
        </form>
      </div>
    </main>
  );
}
