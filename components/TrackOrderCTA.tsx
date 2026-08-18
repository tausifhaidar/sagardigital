import Link from "next/link";

export default function TrackOrderCTA() {
  return (
    <section className="bg-red-600 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 px-5 text-center md:flex-row md:text-left">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-red-100">Already placed an order?</p>
          <h2 className="mt-2 text-3xl font-black text-white">Track your order without login.</h2>
          <p className="mt-3 max-w-2xl text-red-100">Enter your Order ID and check the latest status of your order.</p>
        </div>
        <Link href="/track-order" className="rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-red-600 shadow-lg transition hover:bg-slate-100">Track Order</Link>
      </div>
    </section>
  );
}
