import { Hero } from "@/components/hero";
import { HeroV2 } from "@/components/hero-v2";
import { About } from "@/components/about";
import { Process } from "@/components/process";
import { Mixologist } from "@/components/mixologist";
import { FAQ } from "@/components/faq";
import { InquiryForm } from "@/components/inquiry-form";
import { Footer } from "@/components/footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mobilny Bar na Wesele Lublin | Drink Bar na Imprezę",
  description: "Szukasz drink baru na wesele? Moment Drink Bar z Lublina oferuje profesjonalną obsługę barmańską, autorskie koktajle i niezapomnianą atmosferę w całej Polsce.",
};

export default function Home() {
  return (
    <main>
      <HeroV2 />
      {/* <Hero /> - Ukryta wersja */}
      <About />
      <Process />
      <Mixologist />
      <FAQ />
      <InquiryForm />
      <Footer />
    </main>
  );
}
