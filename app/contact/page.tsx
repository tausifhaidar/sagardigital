import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-widest text-red-600">Sagar Digital</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">Contact Us</h1>
        <p className="mt-4 max-w-2xl text-slate-600">Get in touch with Sagar Digital for printing services, products and quotations.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <a href="tel:+919523265948" className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h2 className="font-bold text-slate-900">Phone</h2>
            <p className="mt-2 text-slate-600">+91 95232 65948</p>
          </a>
          <a href="https://wa.me/919523265948" target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h2 className="font-bold text-slate-900">WhatsApp</h2>
            <p className="mt-2 text-slate-600">Chat with us on WhatsApp</p>
          </a>
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="font-bold text-slate-900">Location</h2>
            <p className="mt-2 text-slate-600">Sitamarhi Mehsaiul Chowk, Bihar</p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-slate-950 p-8 text-white md:p-10">
          <h2 className="text-2xl font-black">Need a quotation?</h2>
          <p className="mt-3 max-w-2xl text-slate-300">Send your requirement and we will get back to you.</p>
          <Link href="/get-quote" className="mt-6 inline-block rounded-xl bg-red-600 px-6 py-3 font-bold hover:bg-red-700">Get a Quote</Link>
        </div>
      </div>
    </main>
  );
}
