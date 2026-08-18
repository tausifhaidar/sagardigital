import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import ProductsPreview from "@/components/ProductsPreview";
import HowItWorks from "@/components/HowItWorks";
import TrackOrderCTA from "@/components/TrackOrderCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <ProductsPreview />
      <HowItWorks />
      <TrackOrderCTA />
    </main>
  );
}
