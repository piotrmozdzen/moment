import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { CheckCircle2, Zap, Shield, Globe } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero
        title="We build digital experiences that matter"
        subtitle="Elevate your brand with our innovative solutions. Fast, secure, and scalable technology for modern businesses."
      />

      {/* Features Section */}
      <Section id="features">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We deliver comprehensive solutions that drive results. Our platform is designed with performance and scalability in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Lightning Fast",
              description: "Optimized for speed to ensure the best user experience.",
              icon: Zap,
            },
            {
              title: "Secure by Design",
              description: "Enterprise-grade security to protect your data and users.",
              icon: Shield,
            },
            {
              title: "Global Scale",
              description: "Infrastructure that grows with your business, anywhere.",
              icon: Globe,
            },
            {
              title: "Reliable Uptime",
              description: "99.9% uptime guarantee with 24/7 monitoring.",
              icon: CheckCircle2,
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="relative rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-slate-950 dark:border-slate-800"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Social Proof / Stats */}
      <Section className="bg-slate-900 text-white">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          {[
            { label: "Active Users", value: "10k+" },
            { label: "Countries", value: "50+" },
            { label: "Uptime", value: "99.9%" },
            { label: "Support", value: "24/7" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
