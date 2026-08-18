import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-4">
        <div>
          <Image src="/logo.svg" alt="Sagar Digital" width={240} height={68} className="h-auto w-[210px]" />
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">Professional printing, signage and digital solutions.</p>
        </div>
        <div>
          <h3 className="font-bold">Quick Links</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-400">
            <Link href="/services" className="block hover:text-white">Services</Link>
            <Link href="/products" className="block hover:text-white">Products</Link>
            <Link href="/portfolio" className="block hover:text-white">Portfolio</Link>
            <Link href="/track-order" className="block hover:text-white">Track Order</Link>
            <Link href="/get-quote" className="block hover:text-white">Get a Quote</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Contact</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-400">
            <a href="tel:+919523265948" className="block hover:text-white">+91 95232 65948</a>
            <a href="https://wa.me/919523265948" target="_blank" rel="noreferrer" className="block hover:text-white">WhatsApp</a>
            <p>Sitamarhi Mehsaiul Chowk, Bihar</p>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Business Hours</h3>
          <p className="mt-4 text-sm text-slate-400">Monday – Sunday</p>
          <p className="mt-1 text-sm font-semibold text-slate-200">9:00 AM – 8:00 PM</p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 px-5 pt-6 text-sm text-slate-500">© {new Date().getFullYear()} Sagar Digital. All rights reserved.</div>
    </footer>
  );
}
