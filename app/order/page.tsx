"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

const services = ["Flex Printing", "Eco Solvent Printing", "Glow Sign Board", "Vinyl Printing", "Hoarding Board", "Paper Printing — All", "Stationery Items"];
const products = ["Flex Printing Machine", "Eco Solvent Printing Machine", "Flex Machine Ink", "Solvent Ink", "Flex Roll", "Flex Bond"];

export default function PlaceOrderPage() {
  const [submitted, setSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [type, setType] = useState<"service" | "product">("service");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const item = String(form.get("item") || "").trim();
    const file = form.get("file");

    const { data: order, error: orderError } = await supabase.from("orders").insert({
      customer_name: String(form.get("name") || "").trim(),
      customer_phone: String(form.get("phone") || "").trim(),
      service: type === "service" ? item : null,
      product: type === "product" ? item : null,
      quantity: String(form.get("quantity") || "").trim(),
      required_date: String(form.get("date") || "") || null,
      requirement: String(form.get("message") || "").trim(),
      delivery_address: String(form.get("address") || "").trim() || null,
    }).select("id, order_number").single();

    if (orderError || !order) {
      setLoading(false);
      setError(orderError?.message || "Could not create the order. Please try again.");
      return;
    }

    if (file instanceof File && file.size > 0) {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
      const path = `${order.id}/${Date.now()}-${safeName}`;
      const { error: uploadError } = await supabase.storage.from("order-files").upload(path, file, { upsert: false });
      if (!uploadError) {
        await supabase.from("order_files").insert({ order_id: order.id, storage_path: path, original_name: file.name, mime_type: file.type || null, size_bytes: file.size });
      }
    }

    await supabase.from("order_status_history").insert({ order_id: order.id, status: "pending", note: "Order received" });
    setOrderNumber(order.order_number);
    localStorage.setItem("sagarDigitalLastOrder", order.order_number);
    setSubmitted(true);
    setLoading(false);
  }

  const whatsappUrl = orderNumber ? `https://wa.me/919523265948?text=${encodeURIComponent(`Hello Sagar Digital, my Order ID is ${orderNumber}`)}` : "#";

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-2xl rounded-3xl border border-green-200 bg-white p-8 text-center shadow-sm md:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">✓</div>
          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-green-600">Order Placed Successfully</p>
          <h1 className="mt-3 text-3xl font-black text-slate-900">Your Order ID</h1>
          <div className="mx-auto mt-6 flex max-w-sm items-center justify-between gap-3 rounded-2xl border-2 border-dashed border-red-300 bg-red-50 px-4 py-4">
            <span className="break-all text-xl font-black tracking-wide text-red-700">{orderNumber}</span>
            <button onClick={() => navigator.clipboard?.writeText(orderNumber)} className="shrink-0 rounded-lg bg-white px-3 py-2 text-xs font-bold text-slate-800 shadow-sm">Copy</button>
          </div>
          <p className="mt-4 text-sm text-slate-500">Order ID ko save kar lena. Isse bina login order track kar sakte ho.</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <Link href={`/track-order?id=${encodeURIComponent(orderNumber)}`} className="rounded-xl bg-red-600 px-4 py-3 text-sm font-bold text-white">Track Order</Link>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-xl bg-green-600 px-4 py-3 text-sm font-bold text-white">WhatsApp ID</a>
            <button onClick={() => window.print()} className="rounded-xl border border-slate-300 px-4 py-3 text-sm font-bold text-slate-800">Save / Print</button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="text-center"><p className="text-sm font-bold uppercase tracking-widest text-red-600">Sagar Digital</p><h1 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">Place an Order</h1><p className="mx-auto mt-4 max-w-2xl text-slate-600">Submit your requirement and get a unique Order ID instantly.</p></div>
        <form onSubmit={handleSubmit} className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-semibold text-slate-700">Name<input required name="name" placeholder="Your name" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" /></label>
            <label className="text-sm font-semibold text-slate-700">Mobile Number<input required name="phone" type="tel" placeholder="10 digit mobile number" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" /></label>
            <div className="md:col-span-2"><p className="text-sm font-semibold text-slate-700">Order Type</p><div className="mt-2 grid grid-cols-2 gap-3"><button type="button" onClick={() => setType("service")} className={`rounded-xl border px-4 py-3 text-sm font-bold ${type === "service" ? "border-red-600 bg-red-50 text-red-600" : "border-slate-300 text-slate-700"}`}>Printing Service</button><button type="button" onClick={() => setType("product")} className={`rounded-xl border px-4 py-3 text-sm font-bold ${type === "product" ? "border-red-600 bg-red-50 text-red-600" : "border-slate-300 text-slate-700"}`}>Product</button></div></div>
            <label className="text-sm font-semibold text-slate-700 md:col-span-2">{type === "service" ? "Service" : "Product"}<select required name="item" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500"><option value="">Select {type}</option>{(type === "service" ? services : products).map((item) => <option key={item}>{item}</option>)}</select></label>
            <label className="text-sm font-semibold text-slate-700">Quantity<input required name="quantity" placeholder="e.g. 500" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" /></label>
            <label className="text-sm font-semibold text-slate-700">Required Date<input name="date" type="date" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" /></label>
            <label className="text-sm font-semibold text-slate-700 md:col-span-2">Upload Design / Reference<input name="file" type="file" accept=".pdf,.jpg,.jpeg,.png,.webp,.cdr" className="mt-2 block w-full rounded-xl border border-slate-300 px-4 py-3 text-sm" /></label>
            <label className="text-sm font-semibold text-slate-700 md:col-span-2">Additional Requirement<textarea required name="message" rows={5} placeholder="Size, material, color, finish, delivery requirement, etc." className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" /></label>
            <label className="text-sm font-semibold text-slate-700 md:col-span-2">Delivery Address<textarea name="address" rows={3} placeholder="Delivery address" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" /></label>
          </div>
          {error && <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">{error}</div>}
          <button disabled={loading} type="submit" className="mt-6 w-full rounded-xl bg-red-600 px-6 py-3.5 font-bold text-white transition hover:bg-red-700 disabled:opacity-60">{loading ? "Creating Order..." : "Submit Order"}</button>
        </form>
      </div>
    </main>
  );
}
