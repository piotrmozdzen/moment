import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Process } from "@/components/process";
import { Mixologist } from "@/components/mixologist";
import { FAQ } from "@/components/faq";
import { InquiryForm } from "@/components/inquiry-form";
import { Footer } from "@/components/footer";

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
