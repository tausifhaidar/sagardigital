import { Suspense } from "react";
import TrackOrderClient from "./TrackOrderClient";

export default function TrackOrderPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Suspense fallback={<div className="mx-auto max-w-2xl px-5 py-16"><div className="rounded-3xl bg-slate-950 p-8 text-white"><p className="text-sm font-bold uppercase tracking-widest text-red-400">Order Tracking</p><h1 className="mt-3 text-4xl font-black">Track Your Order</h1><p className="mt-4 text-slate-300">Loading tracking form...</p></div></div>}>
        <TrackOrderClient />
      </Suspense>
    </main>
  );
}
