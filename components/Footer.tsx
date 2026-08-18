import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-black">SAGAR DIGITAL</h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">Professional printing, signage and digital solutions.</p>
        </div>
        <div>
          <h3 className="font-bold">Quick Links</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-400">
            <Link href="/services" className="block hover:text-white">Services</Link>
            <Link href="/products" className="block hover:text-white">Products</Link>
            <Link href="/track-order" className="block hover:text-white">Track Order</Link>
            <Link href="/contact" className="block hover:text-white">Contact</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Get in Touch</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-400">
            <p>Phone: +91 XXXXX XXXXX</p>
            <p>WhatsApp: +91 XXXXX XXXXX</p>
            <p>Location: Sitamarhi, Bihar</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 px-5 pt-6 text-sm text-slate-500">© {new Date().getFullYear()} Sagar Digital. All rights reserved.</div>
    </footer>
  );
}
