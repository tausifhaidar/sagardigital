import Link from "next/link";

const services = [
  { title: "Flex Printing", image: "/flex-printing.png" },
  { title: "Eco Solvent Printing", image: "/eco-solvent-printing.png" },
  { title: "Glow Sign Board", image: "/glow-sign-board.png" },
  { title: "Vinyl Printing", image: "/vinyl-printing.png" },
  { title: "Hoarding Board", image: "/hoarding-board.png" },
  { title: "Paper Printing — All", image: "/paper-printing.png" },
  { title: "Stationery Items", image: "/stationery-item.png" },
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
            <Link key={service.title} href="/services" className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-500">View service details and request a quote.</p>
                <span className="mt-4 inline-block text-sm font-bold text-red-600">Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
