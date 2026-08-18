import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sagar Digital | Printing & Digital Solutions",
  description: "Sagar Digital provides professional printing, signage and digital solutions in Sitamarhi.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
