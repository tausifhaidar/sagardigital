export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-widest text-red-600">Sagar Digital</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">Contact Us</h1>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6"><h2 className="font-bold">Phone</h2><p className="mt-2 text-slate-600">+91 XXXXX XXXXX</p></div>
          <div className="rounded-2xl border bg-white p-6"><h2 className="font-bold">WhatsApp</h2><p className="mt-2 text-slate-600">+91 XXXXX XXXXX</p></div>
          <div className="rounded-2xl border bg-white p-6"><h2 className="font-bold">Location</h2><p className="mt-2 text-slate-600">Sitamarhi, Bihar</p></div>
        </div>
      </div>
    </main>
  );
}
