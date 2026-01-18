import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Process } from "@/components/process";
import { Mixologist } from "@/components/mixologist";
import { FAQ } from "@/components/faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Process />
      <Mixologist />
      <FAQ />
    </main>
  );
}
