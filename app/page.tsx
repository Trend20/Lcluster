import Features from "@/components/Features";
import FrequentlyAsked from "@/components/FrequentlyAsked";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import ProductPitch from "@/components/ProductPitch";
import Spotlight from "@/components/Spotlight";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Spotlight />
      <ProductPitch />
      <Features />
      <Pricing />
      <FrequentlyAsked />
    </main>
  );
}
