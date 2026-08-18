import Link from "next/link";

const products = [
  { title: "Flex Printing Machine", description: "Flex printing machine for professional printing work." },
  { title: "Eco Solvent Printing Machine", description: "Eco solvent printing machine for quality digital printing." },
  { title: "Flex Machine Ink", description: "Ink for compatible flex printing machines." },
  { title: "Solvent Ink", description: "Solvent ink for suitable printing applications." },
  { title: "Flex Roll", description: "Flex roll material for printing requirements." },
  { title: "Flex Bond", description: "Flex bond material for printing and finishing work." },
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
            <div key={product.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 font-black text-slate-700">SD</div>
              <h2 className="mt-6 text-xl font-bold text-slate-900">{product.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
              <Link href="/get-quote" className="mt-6 inline-block rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700">Enquire Now</Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
