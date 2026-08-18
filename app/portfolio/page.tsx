const items = [
  "Flex Printing Projects",
  "Eco Solvent Printing Projects",
  "Glow Sign Board Work",
  "Vinyl & Branding Work",
  "Hoarding Board Projects",
  "Paper Printing Work",
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-red-400">Our Work</p>
          <h1 className="mt-4 text-4xl font-black md:text-5xl">Portfolio</h1>
          <p className="mt-5 max-w-2xl text-slate-300">A showcase area for Sagar Digital printing and signage work.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex h-64 items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
                <div className="text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white font-black text-red-600 shadow">SD</div><p className="mt-3 text-sm">Project Image</p></div>
              </div>
              <div className="p-6"><h2 className="font-bold text-slate-900">{item}</h2><p className="mt-2 text-sm text-slate-500">Real project images can be added here later.</p></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
