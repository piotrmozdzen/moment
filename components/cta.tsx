import Link from "next/link";
import { Section } from "@/components/section";

export function CTA() {
    return (
        <Section className="bg-brand-cream border-t border-b border-brand-text/10">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                <h2 className="text-3xl font-bold tracking-tight text-brand-text sm:text-4xl">
                    Ready to transform your business?
                </h2>
                <p className="mt-4 text-lg text-brand-text-light">
                    Join hundreds of companies that trust us to deliver top-tier solutions.
                    Let's build something amazing together.
                </p>
                <div className="mt-8">
                    <Link
                        href="/contact"
                        className="inline-flex h-12 items-center justify-center rounded-md bg-brand-blue px-8 text-base font-medium text-white shadow transition-colors hover:bg-brand-blue/90"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </Section>
    );
}
