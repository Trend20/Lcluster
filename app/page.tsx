import Hero from "@/components/Hero";
import Spotlight from "@/components/Spotlight";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Spotlight />
    </main>
  );
}
