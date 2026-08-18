"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const services = [
  "Flex Printing",
  "Eco Solvent Printing",
  "Glow Sign Board",
  "Vinyl Printing",
  "Hoarding Board",
  "Paper Printing — All",
  "Stationery Items",
];

const products = [
  "Flex Printing Machine",
  "Eco Solvent Printing Machine",
  "Flex Machine Ink",
  "Solvent Ink",
  "Flex Roll",
  "Flex Bond",
];

export default function PlaceOrderPage() {
  const [submitted, setSubmitted] = useState(false);
  const [type, setType] = useState<"service" | "product">("service");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">Sagar Digital</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">Place an Order</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">Submit your requirement. A unique Order ID will be generated after the backend is connected.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-semibold text-slate-700">Name<input required name="name" placeholder="Your name" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" /></label>
            <label className="text-sm font-semibold text-slate-700">Mobile Number<input required name="phone" type="tel" placeholder="10 digit mobile number" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" /></label>

            <div className="md:col-span-2">
              <p className="text-sm font-semibold text-slate-700">Order Type</p>
              <div className="mt-2 grid grid-cols-2 gap-3">
                <button type="button" onClick={() => setType("service")} className={`rounded-xl border px-4 py-3 text-sm font-bold ${type === "service" ? "border-red-600 bg-red-50 text-red-600" : "border-slate-300 text-slate-700"}`}>Printing Service</button>
                <button type="button" onClick={() => setType("product")} className={`rounded-xl border px-4 py-3 text-sm font-bold ${type === "product" ? "border-red-600 bg-red-50 text-red-600" : "border-slate-300 text-slate-700"}`}>Product</button>
              </div>
            </div>

            <label className="text-sm font-semibold text-slate-700 md:col-span-2">{type === "service" ? "Service" : "Product"}<select required name="item" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500"><option value="">Select {type}</option>{(type === "service" ? services : products).map((item) => <option key={item}>{item}</option>)}</select></label>
            <label className="text-sm font-semibold text-slate-700">Quantity<input required name="quantity" placeholder="e.g. 500" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" /></label>
            <label className="text-sm font-semibold text-slate-700">Required Date<input name="date" type="date" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" /></label>
            <label className="text-sm font-semibold text-slate-700 md:col-span-2">Upload Design / Reference<input name="file" type="file" accept=".pdf,.jpg,.jpeg,.png,.webp,.cdr" className="mt-2 block w-full rounded-xl border border-slate-300 px-4 py-3 text-sm" /></label>
            <label className="text-sm font-semibold text-slate-700 md:col-span-2">Additional Requirement<textarea required name="message" rows={5} placeholder="Size, material, color, finish, delivery requirement, etc." className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" /></label>
            <label className="text-sm font-semibold text-slate-700 md:col-span-2">Delivery Address<textarea name="address" rows={3} placeholder="Delivery address" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" /></label>
          </div>

          <button type="submit" className="mt-6 w-full rounded-xl bg-red-600 px-6 py-3.5 font-bold text-white transition hover:bg-red-700">Submit Order Request</button>

          {submitted && (
            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
              Your order form is ready. Database, unique Order ID, file storage and live tracking will be activated after Supabase connection.
              <div className="mt-3"><Link href="/track-order" className="font-bold text-red-600">Open Track Order →</Link></div>
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
