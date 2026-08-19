import Image from "next/image";
import Link from "next/link";

const serviceHighlights = ["Flex Printing", "Eco Solvent", "Glow Sign Board", "Vinyl Printing", "Hoarding Board", "Paper Printing", "Stationery"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(220,38,38,0.28),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.10),transparent_38%)]" />
      <div className="hero-grid absolute inset-0 opacity-20" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-[0.95fr_1.05fr] md:py-24">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-400" />
            Printing • Signage • Digital Solutions
          </span>

          <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Professional
            <span className="block text-red-500">Printing.</span>
            <span className="block">Powerful Results.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
            Quality flex printing, eco solvent printing, signage and printing materials from Sagar Digital, Sitamarhi.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/get-quote" className="rounded-xl bg-red-600 px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700">Get a Quote →</Link>
            <Link href="/order" className="rounded-xl border border-slate-700 bg-white/5 px-6 py-3.5 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10">Place an Order →</Link>
          </div>

          <div className="mt-7 flex flex-wrap gap-3 text-sm text-slate-300">
            <a href="tel:+919523265948" className="rounded-full border border-white/10 px-4 py-2 transition hover:border-red-400">Call: 95232 65948</a>
            <a href="https://wa.me/919523265948" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-2 transition hover:border-green-400">WhatsApp</a>
          </div>

          <div className="mt-9 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"><p className="text-2xl font-black text-red-400">10+</p><p className="mt-1 text-xs text-slate-400">Years Experience</p></div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"><p className="text-2xl font-black text-red-400">Fast</p><p className="mt-1 text-xs text-slate-400">Turnaround</p></div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"><p className="text-2xl font-black text-red-400">7+</p><p className="mt-1 text-xs text-slate-400">Printing Services</p></div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"><p className="text-2xl font-black text-red-400">6</p><p className="mt-1 text-xs text-slate-400">Products</p></div>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-2xl">
          <div className="hero-orbit absolute -inset-4 rounded-[2rem] border border-red-500/20" />
          <div className="hero-orbit hero-orbit-delay absolute inset-2 rounded-[1.8rem] border border-white/10" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-900">
              <Image src="/flex-printing-machine.png" alt="Sagar Digital Flex Printing Machine" width={1200} height={800} className="h-[320px] w-full object-cover md:h-[430px]" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              <div className="float-card absolute left-4 top-5 rounded-2xl border border-white/10 bg-slate-950/85 px-4 py-3 shadow-xl backdrop-blur sm:left-6">
                <p className="text-xs text-slate-400">Printing Quality</p><p className="mt-1 text-sm font-black text-white">High Precision</p>
              </div>
              <div className="float-card float-card-delay absolute right-4 top-16 rounded-2xl border border-white/10 bg-slate-950/85 px-4 py-3 shadow-xl backdrop-blur sm:right-6">
                <p className="text-xs text-slate-400">Turnaround</p><p className="mt-1 text-sm font-black text-white">Fast Service</p>
              </div>
              <div className="float-card absolute bottom-5 left-4 rounded-2xl border border-red-400/20 bg-red-600/90 px-4 py-3 shadow-xl sm:left-6">
                <p className="text-xs text-red-100">Serving</p><p className="mt-1 text-sm font-black text-white">Sitamarhi</p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {serviceHighlights.slice(0, 4).map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-xs font-semibold text-slate-200 backdrop-blur">{item}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
