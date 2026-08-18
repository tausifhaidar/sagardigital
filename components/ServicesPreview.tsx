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

export default function ServicesPreview() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">Our Services</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">Professional printing services</h2>
          <p className="mt-4 text-slate-600">Quality printing and signage solutions for your business, events and everyday requirements.</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service} href="/services" className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 font-black text-red-600">SD</div>
              <h3 className="mt-5 font-bold text-slate-900">{service}</h3>
              <p className="mt-2 text-sm text-slate-500">View service details and request a quote.</p>
              <span className="mt-4 inline-block text-sm font-bold text-red-600">Explore →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
