import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-red-400">About Sagar Digital</p>
          <h1 className="mt-4 text-4xl font-black md:text-5xl">Printing made simple.</h1>
          <p className="mt-5 max-w-2xl text-slate-300">A local printing and digital solutions business serving customers from Sitamarhi Mehsaiul Chowk.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2">
        <div className="rounded-3xl bg-slate-950 p-8">
          <Image src="/logo.svg" alt="Sagar Digital" width={640} height={180} className="h-auto w-full" />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">What we offer</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900">Printing services and printing products</h2>
          <p className="mt-5 leading-7 text-slate-600">Sagar Digital handles printing and signage work while also offering printing machines, inks and related materials for sale.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/services" className="rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700">View Services</Link>
            <Link href="/products" className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-900 hover:border-red-600 hover:text-red-600">View Products</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
