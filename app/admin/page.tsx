"use client";

import { useState } from "react";

const tabs = ["Dashboard", "Orders", "Quotes", "Customers", "Payments", "Files"];

export default function AdminPage() {
  const [active, setActive] = useState("Dashboard");

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="border-b bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-red-400">Sagar Digital</p>
            <h1 className="mt-1 text-2xl font-black">Admin Dashboard</h1>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">Admin: tausifhaidar63@gmail.com</div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8">
        <div className="flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActive(tab)} className={`rounded-xl px-4 py-2.5 text-sm font-bold ${active === tab ? "bg-red-600 text-white" : "text-slate-600 hover:bg-slate-100"}`}>{tab}</button>
          ))}
        </div>

        <section className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {["0 Orders", "0 Quotes", "₹0 Revenue", "0 Pending"].map((value) => (
            <div key={value} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><p className="text-2xl font-black text-slate-900">{value.split(" ")[0]}</p><p className="mt-1 text-sm text-slate-500">{value.substring(value.indexOf(" ") + 1) || "Today"}</p></div>
          ))}
        </section>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-black text-slate-900">{active}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">This admin module is prepared for Supabase. After connection, this dashboard will show real orders, quote requests, customers, payments and uploaded files.</p>
        </section>
      </div>
    </main>
  );
}
