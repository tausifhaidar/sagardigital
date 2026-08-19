import Link from "next/link";

const products = [
  { title: "Flex Printing Machine", image: "/flex-printing-machine.png" },
  { title: "Eco Solvent Printing Machine", image: "/eco-solvent-printing-machine copy.png" },
  { title: "Flex Machine Ink", image: "/flex-machine-ink.png" },
  { title: "Solvent Ink", image: "/solvent-ink.png" },
  { title: "Flex Roll", image: "/flex-roll.png" },
  { title: "Flex Bond", image: "/flex-bond.png" },
];

export default function ProductsPreview() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-red-600">Products</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">Machines & printing materials</h2>
            <p className="mt-4 max-w-2xl text-slate-600">Printing machines, inks and materials available from Sagar Digital.</p>
          </div>
          <Link href="/products" className="w-fit rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold transition hover:border-red-600 hover:text-red-600">View Products</Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link key={product.title} href="/products" className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img src={product.image} alt={product.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900">{product.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">Product details and enquiry available.</p>
                <span className="mt-4 inline-block text-sm font-bold text-red-600">Enquire Now →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
