"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

const statusLabels: Record<string, string> = {
  pending: "Order received",
  confirmed: "Order confirmed",
  design_review: "Design under review",
  printing: "Printing in progress",
  ready: "Ready",
  out_for_delivery: "Out for delivery",
  delivered: "Delivered",
  cancelled: "Cancelled",
};

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function checkOrder() {
    setLoading(true);
    setError("");
    setResult(null);
    const { data, error } = await supabase.rpc("track_order", { p_order_number: orderId.trim() });
    setLoading(false);
    if (error) {
      setError("Unable to check this order right now. Please try again.");
      return;
    }
    if (!data?.length) {
      setError("Order not found. Please check your Order ID.");
      return;
    }
    setResult(data[0]);
  }

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-16">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl bg-slate-950 p-8 text-white md:p-12">
          <p className="text-sm font-bold uppercase tracking-widest text-red-400">Order Tracking</p>
          <h1 className="mt-3 text-4xl font-black">Track Your Order</h1>
          <p className="mt-4 text-slate-300">Enter your Order ID. Login is not required.</p>
        </div>
        <div className="mt-6 rounded-3xl border bg-white p-6 shadow-sm md:p-8">
          <label className="text-sm font-bold text-slate-700">Order ID<input value={orderId} onChange={(e) => setOrderId(e.target.value.toUpperCase())} onKeyDown={(e) => e.key === "Enter" && checkOrder()} placeholder="e.g. SD-A1B2C3D4E5" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" /></label>
          <button disabled={!orderId.trim() || loading} onClick={checkOrder} className="mt-4 w-full rounded-xl bg-red-600 px-6 py-3.5 font-bold text-white disabled:cursor-not-allowed disabled:opacity-50">{loading ? "Checking..." : "Check Status"}</button>

          {error && <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">{error}</div>}

          {result && <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div><p className="text-xs uppercase tracking-wider text-slate-500">Order</p><p className="font-black text-slate-900">{result.order_number}</p></div>
              <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700">{statusLabels[result.status] || result.status}</span>
            </div>
            <p className="mt-4 text-sm text-slate-600">Customer: <span className="font-semibold text-slate-900">{result.customer_name}</span></p>
            {result.service && <p className="mt-1 text-sm text-slate-600">Service: <span className="font-semibold text-slate-900">{result.service}</span></p>}
            {result.product && <p className="mt-1 text-sm text-slate-600">Product: <span className="font-semibold text-slate-900">{result.product}</span></p>}
            {result.required_date && <p className="mt-1 text-sm text-slate-600">Required date: <span className="font-semibold text-slate-900">{result.required_date}</span></p>}
            <div className="mt-6 space-y-3">
              {(result.history || []).map((item: any, index: number) => <div key={`${item.created_at}-${index}`} className="flex gap-3"><span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-red-600"/><div><p className="text-sm font-bold text-slate-800">{statusLabels[item.status] || item.status}</p>{item.note && <p className="text-xs text-slate-500">{item.note}</p>}<p className="text-xs text-slate-400">{new Date(item.created_at).toLocaleString()}</p></div></div>)}
            </div>
          </div>}
        </div>
      </div>
    </main>
  );
}
