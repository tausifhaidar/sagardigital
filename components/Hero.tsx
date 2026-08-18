import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(220,38,38,0.25),transparent_35%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="inline-flex rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300">Printing • Signage • Digital Solutions</span>
          <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">Quality Printing.<span className="block text-red-500">Powerful Results.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">Sagar Digital provides professional printing and digital solutions with quality work, modern technology and reliable service.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/get-quote" className="rounded-xl bg-red-600 px-6 py-3.5 text-center text-sm font-bold text-white transition hover:bg-red-700">Get a Quote</Link>
            <Link href="/order" className="rounded-xl border border-slate-700 bg-white/5 px-6 py-3.5 text-center text-sm font-bold text-white transition hover:bg-white/10">Place an Order</Link>
          </div>
          <div className="mt-7 flex flex-wrap gap-3 text-sm text-slate-300">
            <a href="tel:+919523265948" className="rounded-full border border-white/10 px-4 py-2 hover:border-red-400">Call: 95232 65948</a>
            <a href="https://wa.me/919523265948" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-2 hover:border-green-400">WhatsApp</a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
            <div className="flex min-h-[360px] items-center justify-center rounded-2xl bg-slate-900 p-6">
              <Image src="/logo.svg" alt="Sagar Digital" width={640} height={180} className="h-auto w-full max-w-xl" />
            </div>
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-slate-700 bg-slate-900/95 px-5 py-4 shadow-xl sm:-left-7">
            <p className="text-xs font-medium text-slate-400">Visit us</p>
            <p className="mt-1 text-sm font-bold text-white">Sitamarhi Mehsaiul Chowk</p>
          </div>
        </div>
      </div>
    </section>
  );
}
