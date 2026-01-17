import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroProps {
    title: string;
    subtitle: string;
    ctaText?: string;
    ctaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
}

export function Hero({
    title,
    subtitle,
    ctaText = "Get Started",
    ctaLink = "/contact",
    secondaryCtaText = "Learn More",
    secondaryCtaLink = "/about",
}: HeroProps) {
    return (
        <section className="relative overflow-hidden bg-white pb-16 pt-24 dark:bg-slate-950 md:pb-32 md:pt-48">
            <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
                <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute top-1/2 right-0 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
                <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    {title}
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400 md:text-xl">
                    {subtitle}
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href={ctaLink}
                        className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-medium text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5"
                    >
                        {ctaText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                        href={secondaryCtaLink}
                        className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-200 bg-white px-8 text-base font-medium text-slate-900 shadow-sm transition-all hover:bg-slate-50 hover:text-primary dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:bg-slate-900"
                    >
                        {secondaryCtaText}
                    </Link>
                </div>
            </div>
        </section>
    );
}
