import Link from "next/link";

const services = [
  { title: "Flex Printing", description: "Professional flex printing for outdoor and promotional needs." },
  { title: "Eco Solvent Printing", description: "High-quality eco solvent printing for durable visual work." },
  { title: "Glow Sign Board", description: "Bright and professional glow sign board solutions." },
  { title: "Vinyl Printing", description: "Clean vinyl printing for branding, display and signage." },
  { title: "Hoarding Board", description: "Large-format hoarding board printing for visibility." },
  { title: "Paper Printing — All", description: "Paper printing solutions for different requirements." },
  { title: "Stationery Items", description: "Printing and stationery requirements for businesses and customers." },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-red-400">Sagar Digital</p>
          <h1 className="mt-4 text-4xl font-black md:text-5xl">Our Services</h1>
          <p className="mt-5 max-w-2xl text-slate-300">Professional printing and signage services from Sagar Digital.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 font-black text-red-600">SD</div>
              <h2 className="mt-6 text-xl font-bold text-slate-900">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
              <Link href="/get-quote" className="mt-6 inline-block rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700">Get a Quote</Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
