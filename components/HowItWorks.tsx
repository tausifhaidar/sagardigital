const steps = [
  { number: "01", title: "Choose", text: "Select a service or product." },
  { number: "02", title: "Send Requirement", text: "Share quantity, details and design files." },
  { number: "03", title: "Confirmation", text: "Get your quotation and order confirmation." },
  { number: "04", title: "Delivery", text: "Track your order until it is completed." },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-red-400">Simple Process</p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">How your order works</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="text-sm font-black text-red-400">{step.number}</span>
              <h3 className="mt-4 text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
