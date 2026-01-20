import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Process } from "@/components/process";
import { Mixologist } from "@/components/mixologist";
import { FAQ } from "@/components/faq";
import { InquiryForm } from "@/components/inquiry-form";
import { Footer } from "@/components/footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Moment Drink Bar | Mobilny Bar na Wesele",
  description: "Profesjonalny mobilny drink bar na Twoje wesele i imprezę. Autorskie koktajle, doświadczeni barmani i niezapomniana atmosfera.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Process />
      <Mixologist />
      <FAQ />
      <InquiryForm />
      <Footer />
    </main>
  );
}
