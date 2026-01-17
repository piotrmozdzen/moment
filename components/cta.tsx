import Link from "next/link";
import { Section } from "@/components/section";

export function CTA() {
    return (
        <Section className="bg-slate-50 dark:bg-slate-900 border-t border-b">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                    Ready to transform your business?
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                    Join hundreds of companies that trust us to deliver top-tier solutions.
                    Let's build something amazing together.
                </p>
                <div className="mt-8">
                    <Link
                        href="/contact"
                        className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-white shadow transition-colors hover:bg-primary/90"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </Section>
    );
}
