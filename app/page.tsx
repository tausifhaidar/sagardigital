import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import ProductsPreview from "@/components/ProductsPreview";
import HowItWorks from "@/components/HowItWorks";
import TrackOrderCTA from "@/components/TrackOrderCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesPreview />
        <ProductsPreview />
        <HowItWorks />
        <TrackOrderCTA />
      </main>
      <Footer />
    </>
  );
}
