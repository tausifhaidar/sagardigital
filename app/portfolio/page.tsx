const products = [
  { title: "Flex Printing Machine", image: "/flex-printing-machine.png", description: "Flex printing machine for high-volume banner and flex printing." },
  { title: "Eco Solvent Printing Machine", image: "/eco-solvent-printing-machine copy.png", description: "Eco solvent printing machine for vibrant, durable outdoor graphics." },
  { title: "Flex Machine Ink", image: "/flex-machine-ink.png", description: "Printing ink used for quality flex and large-format output." },
  { title: "Solvent Ink", image: "/solvent-ink.png", description: "Solvent ink for durable outdoor and signage printing." },
  { title: "Flex Roll", image: "/flex-roll.png", description: "Flex media rolls for large-format printing applications." },
  { title: "Flex Bond", image: "/flex-bond.png", description: "Flex bonding material used for finishing and installation work." },
];

const services = [
  { title: "Flex Printing", image: "/flex-printing.png", description: "Large-format flex printing for banners, events and promotions." },
  { title: "Eco Solvent Printing", image: "/eco-solvent-printing.png", description: "Sharp and vibrant eco solvent printing for outdoor graphics." },
  { title: "Glow Sign Board", image: "/glow-sign-board.png", description: "Illuminated sign boards for shops, offices and businesses." },
  { title: "Vinyl Printing", image: "/vinyl-printing.png", description: "Vinyl printing for branding, stickers, signage and display work." },
  { title: "Hoarding Board", image: "/hoarding-board.png", description: "Large hoarding graphics for advertising and outdoor promotion." },
  { title: "Paper Printing", image: "/paper-printing.png", description: "Professional paper printing for business and everyday requirements." },
  { title: "Stationery Item", image: "/stationery-item.png", description: "Business stationery and printed office materials." },
];

function GalleryCard({ item, number }: { item: { title: string; image: string; description: string }; number: number }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[16/10] overflow-hidden bg-slate-100">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="p-5">
        <div className="flex items-start gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-black text-white">{number}</span>
          <div>
            <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-red-400">Our Work</p>
          <h1 className="mt-4 text-4xl font-black md:text-5xl">Portfolio</h1>
          <p className="mt-5 max-w-2xl text-slate-300">Our products, printing machines, materials and confirmed printing services.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">Our Products</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">Machines & Printing Materials</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-500">The products currently available from Sagar Digital.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item, index) => <GalleryCard key={item.title} item={item} number={index + 1} />)}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-red-600">Our Services</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">Printing & Display Services</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-500">The printing services currently offered by Sagar Digital.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => <GalleryCard key={item.title} item={item} number={index + 7} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
