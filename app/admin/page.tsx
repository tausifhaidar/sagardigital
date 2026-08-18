"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

const tabs = ["Dashboard", "Orders", "Quotes", "Customers", "Payments", "Files"] as const;
const statuses = ["pending", "confirmed", "design_review", "printing", "ready", "out_for_delivery", "delivered", "cancelled"];
const statusLabels: Record<string, string> = { pending: "Order received", confirmed: "Confirmed", design_review: "Design review", printing: "Printing", ready: "Ready", out_for_delivery: "Out for delivery", delivered: "Delivered", cancelled: "Cancelled" };
type Tab = typeof tabs[number];

export default function AdminPage() {
  const [session, setSession] = useState<any>(null), [authLoading, setAuthLoading] = useState(true);
  const [email, setEmail] = useState("tausifhaidar63@gmail.com"), [password, setPassword] = useState(""), [authError, setAuthError] = useState("");
  const [tab, setTab] = useState<Tab>("Dashboard"), [orders, setOrders] = useState<any[]>([]), [quotes, setQuotes] = useState<any[]>([]), [files, setFiles] = useState<any[]>([]);
  const [busy, setBusy] = useState(false), [notice, setNotice] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setAuthLoading(false); });
    const { data } = supabase.auth.onAuthStateChange((_event, next) => setSession(next));
    return () => data.subscription.unsubscribe();
  }, []);
  useEffect(() => { if (session) load(); }, [session]);

  async function load() {
    setBusy(true); setNotice("");
    const { data, error } = await supabase.rpc("admin_dashboard_data");
    if (error) { setNotice(`Could not load admin data: ${error.message}`); setBusy(false); return; }
    setOrders(data?.orders || []); setQuotes(data?.quotes || []); setFiles(data?.files || []); setBusy(false);
  }

  async function login(e: React.FormEvent) {
    e.preventDefault(); setAuthError(""); setAuthLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    if (error) setAuthError(error.message);
    setAuthLoading(false);
  }
  async function changeOrderStatus(order: any, status: string) { const { error } = await supabase.rpc("admin_update_order_status", { p_order_id: order.id, p_status: status }); setNotice(error ? error.message : `${order.order_number} updated.`); if (!error) load(); }
  async function changePayment(order: any, payment_status: string) { const { error } = await supabase.rpc("admin_update_payment_status", { p_order_id: order.id, p_payment_status: payment_status }); setNotice(error ? error.message : `${order.order_number} payment updated.`); if (!error) load(); }
  async function changeQuote(quote: any, status: string) { const { error } = await supabase.rpc("admin_update_quote_status", { p_quote_id: quote.id, p_status: status }); setNotice(error ? error.message : `${quote.quote_number} updated.`); if (!error) load(); }

  const customers = useMemo(() => { const map = new Map<string, any>(); orders.forEach(o => map.set(o.customer_phone, { name: o.customer_name, phone: o.customer_phone, count: (map.get(o.customer_phone)?.count || 0) + 1 })); return [...map.values()]; }, [orders]);
  if (authLoading) return <main className="grid min-h-screen place-items-center bg-slate-100"><b>Loading admin...</b></main>;
  if (!session) return <main className="grid min-h-screen place-items-center bg-slate-950 p-5"><form onSubmit={login} className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"><p className="text-xs font-black uppercase tracking-widest text-red-600">Sagar Digital</p><h1 className="mt-2 text-3xl font-black">Admin Login</h1><p className="mt-2 text-sm text-slate-500">Authorized admin access only.</p><label className="mt-7 block text-sm font-bold">Email<input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="mt-2 w-full rounded-xl border px-4 py-3" /></label><label className="mt-4 block text-sm font-bold">Password<input value={password} onChange={e=>setPassword(e.target.value)} type="password" required className="mt-2 w-full rounded-xl border px-4 py-3" /></label>{authError && <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700">{authError}</p>}<button className="mt-5 w-full rounded-xl bg-red-600 px-5 py-3.5 font-black text-white">Sign in</button></form></main>;

  const pending = orders.filter(o => !["delivered", "cancelled"].includes(o.status)).length;
  const advance = orders.reduce((s, o) => s + Number(o.advance_amount || 0), 0);
  return <main className="min-h-screen bg-slate-100">
    <header className="bg-slate-950 text-white"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5"><div><p className="text-xs font-bold uppercase tracking-widest text-red-400">Sagar Digital</p><h1 className="text-2xl font-black">Admin Dashboard</h1></div><div className="flex gap-2"><button onClick={load} className="rounded-xl border border-white/20 px-4 py-2 text-sm font-bold">Refresh</button><span className="hidden rounded-xl border border-white/10 px-4 py-2 text-sm sm:block">{session.user.email}</span><button onClick={()=>supabase.auth.signOut()} className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-slate-900">Logout</button></div></div></header>
    <div className="mx-auto max-w-7xl px-5 py-7"><div className="flex gap-2 overflow-x-auto rounded-2xl border bg-white p-2">{tabs.map(t=><button key={t} onClick={()=>setTab(t)} className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-bold ${tab===t ? "bg-red-600 text-white" : "text-slate-600 hover:bg-slate-100"}`}>{t}</button>)}</div>
      {notice && <div className="mt-4 rounded-xl bg-blue-50 p-3 text-sm font-semibold text-blue-800">{notice}</div>}
      {busy ? <div className="mt-8 rounded-2xl bg-white p-8 text-center">Loading...</div> : <div className="mt-6">
        {tab === "Dashboard" && <><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"><Stat value={String(orders.length)} label="Total Orders"/><Stat value={String(quotes.length)} label="Quote Requests"/><Stat value={`₹${advance.toLocaleString("en-IN")}`} label="Advance Received"/><Stat value={String(pending)} label="Pending Orders"/></div><div className="mt-6 rounded-2xl bg-white p-6"><h2 className="text-xl font-black">Recent Orders</h2><div className="mt-4 space-y-3">{orders.slice(0,5).map(o=><OrderCard key={o.id} order={o} onStatus={changeOrderStatus}/>)}</div></div></>}
        {tab === "Orders" && <div className="space-y-4">{orders.map(o=><OrderCard key={o.id} order={o} detailed onStatus={changeOrderStatus} onPayment={changePayment}/>)}</div>}
        {tab === "Quotes" && <div className="space-y-4">{quotes.map(q=><div key={q.id} className="rounded-2xl border bg-white p-5"><div className="flex flex-wrap justify-between gap-4"><div><b>{q.quote_number}</b><p className="text-sm text-slate-600">{q.name} · {q.phone}</p><p className="mt-2 text-sm"><b>{q.service}</b>{q.quantity ? ` · ${q.quantity}` : ""}</p><p className="mt-2 text-sm text-slate-600">{q.message}</p></div><select value={q.status} onChange={e=>changeQuote(q,e.target.value)} className="h-10 rounded-xl border px-3 text-sm font-bold"><option value="new">new</option><option value="contacted">contacted</option><option value="quoted">quoted</option><option value="accepted">accepted</option><option value="rejected">rejected</option><option value="closed">closed</option></select></div></div>)}</div>}
        {tab === "Customers" && <div className="rounded-2xl border bg-white">{customers.map(c=><div key={c.phone} className="flex justify-between border-b p-5 last:border-0"><div><b>{c.name}</b><p className="text-sm text-slate-500">{c.phone}</p></div><span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold">{c.count} orders</span></div>)}</div>}
        {tab === "Payments" && <div className="space-y-4">{orders.map(o=><div key={o.id} className="rounded-2xl border bg-white p-5"><div className="flex flex-wrap justify-between gap-4"><div><b>{o.order_number}</b><p className="text-sm text-slate-500">Total ₹{Number(o.total_amount||0).toLocaleString("en-IN")} · Advance ₹{Number(o.advance_amount||0).toLocaleString("en-IN")}</p></div><select value={o.payment_status} onChange={e=>changePayment(o,e.target.value)} className="rounded-xl border px-3 py-2 text-sm font-bold"><option value="pending">Pending</option><option value="partial">Partial</option><option value="paid">Paid</option><option value="refunded">Refunded</option></select></div></div>)}</div>}
        {tab === "Files" && <FilesList files={files} orders={orders}/>} 
      </div>}
    </div>
  </main>;
}
function Stat({value,label}:{value:string;label:string}){return <div className="rounded-2xl border bg-white p-6"><p className="text-3xl font-black">{value}</p><p className="mt-1 text-sm font-semibold text-slate-500">{label}</p></div>}
function OrderCard({order,onStatus,onPayment,detailed=false}:{order:any;onStatus:(o:any,s:string)=>void;onPayment?:(o:any,s:string)=>void;detailed?:boolean}){return <div className="rounded-2xl border bg-white p-5 shadow-sm"><div className="flex flex-wrap justify-between gap-4"><div className="min-w-0"><b>{order.order_number}</b><p className="text-sm text-slate-600">{order.customer_name} · {order.customer_phone}</p><p className="mt-2 text-sm">{order.service || order.product || "Order"}{order.quantity ? ` · Qty ${order.quantity}` : ""}</p>{detailed&&<><p className="mt-2 text-sm text-slate-500">{order.requirement || "No requirement note"}</p><div className="mt-3 rounded-xl bg-slate-50 p-3 text-sm"><b>{order.delivery_method === "delivery" ? "🛵 Home delivery" : "🏪 Shop pickup"}</b>{order.delivery_method === "delivery" && <><span className="ml-2 text-slate-600">₹{Number(order.delivery_charge||0)} delivery</span>{order.delivery_distance_km && <span className="ml-2 text-slate-500">· {order.delivery_distance_km} km</span>}{order.delivery_address && <p className="mt-1 text-slate-600">{order.delivery_address}</p>}</>}</div></>}</div><div className="flex flex-wrap gap-2"><select value={order.status} onChange={e=>onStatus(order,e.target.value)} className="rounded-xl border px-3 py-2 text-sm font-bold">{statuses.map(s=><option key={s} value={s}>{statusLabels[s]}</option>)}</select>{onPayment&&<select value={order.payment_status} onChange={e=>onPayment(order,e.target.value)} className="rounded-xl border px-3 py-2 text-sm font-bold"><option value="pending">Payment pending</option><option value="partial">Partial</option><option value="paid">Paid</option><option value="refunded">Refunded</option></select>}</div></div></div>}
function FilesList({files,orders}:{files:any[];orders:any[]}){const [urls,setUrls]=useState<Record<string,string>>({}); const [loading,setLoading]=useState<string>(""); async function openFile(f:any){setLoading(f.id); const {data,error}=await supabase.storage.from("order-files").createSignedUrl(f.storage_path,3600); setLoading(""); if(error||!data?.signedUrl){alert("File could not be opened.");return;} setUrls(u=>({...u,[f.id]:data.signedUrl})); window.open(data.signedUrl,"_blank","noopener,noreferrer");} return <div className="space-y-4">{files.map(f=>{const order=orders.find(o=>o.id===f.order_id);return <div key={f.id} className="rounded-2xl border bg-white p-5"><div className="flex flex-wrap items-center justify-between gap-4"><div><b>{f.original_name||"Uploaded file"}</b><p className="text-sm text-slate-500">{order?.order_number || "Order file"} · {order?.customer_name || ""}</p><p className="text-sm text-slate-500">{f.mime_type||"Unknown"} · {f.size_bytes?`${Math.round(f.size_bytes/1024)} KB`:""}</p></div><button onClick={()=>openFile(f)} disabled={loading===f.id} className="rounded-xl bg-red-600 px-4 py-2 text-sm font-bold text-white">{loading===f.id?"Opening...":"Open file"}</button></div></div>})}</div>}
