import type { Metadata } from 'next';
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn more about our mission, vision, and the team behind Acme Corp.",
};

export default function AboutPage() {
    return (
        <>
            <Section className="bg-slate-50 dark:bg-slate-900 border-b">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                        Who We Are
                    </h1>
                    <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                        We are a team of passionate individuals committed to building the future of technology.
                        Our mission is to empower businesses with tools that are both powerful and easy to use.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Team working together"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Story</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Founded in 2024, Acme Corp started with a simple idea: make high-quality software accessible to everyone.
                            What began as a small project in a garage has grown into a global company serving thousands of customers.
                        </p>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex-none w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">1</div>
                                <div>
                                    <h3 className="font-semibold text-lg">Innovation First</h3>
                                    <p className="text-slate-600 dark:text-slate-400">We constantly push the boundaries of what's possible.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-none w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">2</div>
                                <div>
                                    <h3 className="font-semibold text-lg">Customer Obsessed</h3>
                                    <p className="text-slate-600 dark:text-slate-400">Our customers' success is our success.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <CTA />
        </>
    );
}
