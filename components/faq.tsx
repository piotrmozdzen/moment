"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Script from "next/script";

const faqItems = [
    {
        question: "Jaki jest koszt wynajęcia drink baru?",
        answer: "Cena ustalana jest indywidualnie na podstawie liczby gości, czasu trwania imprezy oraz wybranego pakietu menu. Napisz do nas, a przygotujemy wycenę dopasowaną do Twoich potrzeb."
    },
    {
        question: "Czy zapewniacie Państwo własny alkohol?",
        answer: "Zazwyczaj to organizator zapewnia alkohol według naszej listy zakupów, co pozwala na oszczędności. My dostarczamy całą resztę: mobilny bar, profesjonalną obsługę, lód, szkło, owoce i nasze autorskie syropy."
    },
    {
        question: "Ile miejsca potrzebuje mobilny bar?",
        answer: "Nasz bar jest zaprojektowany tak, by zmieścić się niemal wszędzie. Potrzebujemy około 2x2 metry wolnej przestrzeni oraz dostępu do standardowego gniazdka elektrycznego."
    },
    {
        question: "Z jakim wyprzedzeniem należy rezerwować termin?",
        answer: "Sezon weselny rządzi się swoimi prawami – najpopularniejsze daty rezerwowane są nawet z rocznym wyprzedzeniem. Im szybciej do nas napiszesz, tym większa szansa na wolny termin."
    },
    {
        question: "Czy dojeżdżacie w dowolne miejsce w Polsce?",
        answer: "Tak! Choć działamy głównie lokalnie, z przyjemnością zabierzemy nasz bar w dowolne miejsce w kraju. Koszt transportu wyliczamy przy przygotowywaniu oferty."
    },
    {
        question: "Czy oferujecie drinki bezalkoholowe?",
        answer: "Oczywiście. Dbamy o każdego gościa, dlatego w naszej karcie zawsze znajdują się kolorowe i smaczne 'mocktaile', które zachwycają tak samo jak wersje z procentami."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="bg-brand-cream py-24 px-8 relative">
            <Script id="faq-schema" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqItems.map(item => ({
                        "@type": "Question",
                        "name": item.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": item.answer
                        }
                    }))
                })}
            </Script>
            {/* Wavy Separator */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
                <svg className="relative block w-full h-[40px]" viewBox="0 0 1421 39" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M708.372 23.2461C482.681 9.92707 249.31 -3.85407 7.67926 23.0989L0 15.8986C104.476 4.24502 206.988 0 307.789 0C445.745 0 580.483 7.95181 712.612 15.7564C938.32 29.0805 1171.69 42.8617 1413.32 15.8986L1421 23.0989C1173.51 50.7069 937.047 36.7429 708.372 23.2461Z" fill="#c16c4d" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">

                {/* Left Side: Title & Contact */}
                <div className="md:w-[40%]">
                    <h2 className="text-4xl md:text-5xl font-semibold text-brand-text mb-4 font-montserrat tracking-tight leading-tight">
                        Masz pytania?
                    </h2>
                    <p className="text-3xl text-brand-text-light font-caveat mb-8">
                        Sprawdź tutaj
                    </p>
                    <p className="text-brand-text-light mb-10 max-w-sm leading-relaxed font-sans font-medium">
                        Przejrzyj nasze najczęstsze pytania – a jeśli nie znajdziesz tego, czego szukasz, po prostu skontaktuj się z nami. Chętnie pomożemy.
                    </p>
                    <Link
                        href="/kontakt"
                        className="px-8 py-3 border border-brand-text rounded-full text-sm font-bold uppercase tracking-wider text-brand-text hover:bg-brand-text hover:text-white transition-all cursor-pointer font-sans inline-block"
                    >
                        Kontakt
                    </Link>
                </div>

                {/* Right Side: Accordion */}
                <div className="md:w-[60%] border-t border-brand-text/10">
                    {faqItems.map((item, index) => (
                        <div key={index} className="border-b border-brand-text/10 last:border-b-0">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full py-6 flex items-center justify-between text-left group cursor-pointer"
                            >
                                <span className={cn(
                                    "text-lg font-semibold transition-colors leading-snug",
                                    openIndex === index ? "text-brand-text" : "text-brand-text-light group-hover:text-brand-text"
                                )}>
                                    {item.question}
                                </span>
                                <ChevronDown className={cn(
                                    "w-5 h-5 text-brand-text-light transition-transform duration-300",
                                    openIndex === index && "rotate-180 text-brand-text"
                                )} />
                            </button>
                            <div className={cn(
                                "grid transition-all duration-300 ease-in-out",
                                openIndex === index ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                            )}>
                                <div className="overflow-hidden">
                                    <p className="text-brand-text-light leading-relaxed text-sm pr-12 font-sans">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
