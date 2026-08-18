"use client";

import { useState } from "react";

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-16">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl bg-slate-950 p-8 text-white md:p-12">
          <p className="text-sm font-bold uppercase tracking-widest text-red-400">Order Tracking</p>
          <h1 className="mt-3 text-4xl font-black">Track Your Order</h1>
          <p className="mt-4 text-slate-300">Enter your Order ID to check the latest status.</p>
        </div>
        <div className="mt-6 rounded-3xl border bg-white p-6 shadow-sm md:p-8">
          <label className="text-sm font-bold text-slate-700">Order ID<input value={orderId} onChange={(e) => setOrderId(e.target.value)} placeholder="e.g. SD-1001" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" /></label>
          <button disabled={!orderId.trim()} onClick={() => setChecked(true)} className="mt-4 w-full rounded-xl bg-red-600 px-6 py-3.5 font-bold text-white disabled:cursor-not-allowed disabled:opacity-50">Check Status</button>
          {checked && <div className="mt-6 rounded-2xl bg-slate-50 p-5"><p className="text-sm text-slate-500">Order ID</p><p className="font-bold text-slate-900">{orderId}</p><div className="mt-5 flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-red-600"/><p className="font-bold text-slate-800">Tracking system ready</p></div><p className="mt-2 text-sm text-slate-500">Live order data will be connected to the database in the next step.</p></div>}
        </div>
      </div>
    </main>
  );
}
