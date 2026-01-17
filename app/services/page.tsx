import type { Metadata } from 'next';
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { Laptop, Smartphone, Cloud, Database, Lock, BarChart } from "lucide-react";

export const metadata: Metadata = {
    title: "Services",
    description: "Explore our wide range of services designed to help your business grow.",
};

const services = [
    {
        title: "Web Development",
        description: "Custom websites and web applications built with the latest technologies.",
        icon: Laptop
    },
    {
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        icon: Smartphone
    },
    {
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and migration services.",
        icon: Cloud
    },
    {
        title: "Data Analytics",
        description: "Turn your data into actionable insights with our analytics tools.",
        icon: BarChart
    },
    {
        title: "Cybersecurity",
        description: "Protect your business from digital threats with our security services.",
        icon: Lock
    },
    {
        title: "Database Management",
        description: "Efficient and secure database design and management.",
        icon: Database
    }
];

export default function ServicesPage() {
    return (
        <>
            <Section className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-6">
                    Our Services
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400">
                    We provide end-to-end solutions for businesses of all sizes.
                </p>
            </Section>

            <Section className="pt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="p-8 rounded-2xl border bg-white dark:bg-slate-950 hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{service.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            <CTA />
        </>
    );
}
