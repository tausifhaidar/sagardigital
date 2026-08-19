import Link from "next/link";

const products = [
  { title: "Flex Printing Machine", image: "/flex-printing-machine.png", description: "Flex printing machine for professional printing work." },
  { title: "Eco Solvent Printing Machine", image: "/eco-solvent-printing-machine%20copy.png", description: "Eco solvent printing machine for quality digital printing." },
  { title: "Flex Machine Ink", image: "/flex-machine-ink.png", description: "Ink for compatible flex printing machines." },
  { title: "Solvent Ink", image: "/solvent-ink.png", description: "Solvent ink for suitable printing applications." },
  { title: "Flex Roll", image: "/flex-roll.png", description: "Flex roll material for printing requirements." },
  { title: "Flex Bond", image: "/flex-bond.png", description: "Flex bond material for printing and finishing work." },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-red-400">Sagar Digital</p>
          <h1 className="mt-4 text-4xl font-black md:text-5xl">Products</h1>
          <p className="mt-5 max-w-2xl text-slate-300">Printing machines, inks and printing materials available from Sagar Digital.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img src={product.image} alt={product.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-7">
                <h2 className="text-xl font-bold text-slate-900">{product.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
                <Link href="/get-quote" className="mt-6 inline-block rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700">Enquire Now</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
