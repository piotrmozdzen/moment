"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export function OfferHero() {
    return (
        <section className="min-h-0 md:min-h-screen bg-[#FDFDF5]">
            <div className="flex flex-col md:flex-row min-h-0 md:min-h-screen w-full">
                {/* 1. LEFT SIDE: CONTENT */}
                <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 pt-8 md:pt-[10vh] lg:pt-[10vh] flex flex-col justify-start bg-[#FDFDF5]">
                    <div className="max-w-xl mx-auto md:mx-0">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat uppercase leading-tight mb-8 text-black">
                            Wybór koktajli
                        </h1>

                        <div className="mb-12">
                            <h3 className="font-caveat text-3xl md:text-4xl text-brand-text-light mb-6">
                                Oferta
                            </h3>

                            {/* Paragraph Content */}
                            <div className="text-lg leading-relaxed font-sans text-gray-800 space-y-6">
                                <p>
                                    Wybieracie 8 pozycji z naszej karty menu, z możliwością rozszerzenia oferty o dodatkowe koktajle. Razem stworzymy dwa autorskie koktajle przygotowane specjalnie dla Was, którym możecie nadać własne, unikalne nazwy.
                                </p>
                                <p>
                                    Nasi barmani przygotowują również drinki na specjalne życzenie gości spoza karty, dbając o to, by każdy znalazł coś dla siebie. Dostępne są także koktajle w wersji bezalkoholowej.
                                </p>
                            </div>

                            <div className="pt-8">
                                <p className="text-[10px] md:text-xs uppercase tracking-[0.1em] text-brand-text font-bold italic leading-relaxed">
                                    * Cena ustalana jest indywidualnie na podstawie liczby gości, czasu trwania imprezy oraz wybranego pakietu menu.
                                </p>
                            </div>
                        </div>

                        {/* Precisely modeled elliptical button from reference */}
                        <div className="flex justify-center md:justify-start">
                            <Link
                                href="/baza-koktajli"
                                className="inline-block border-2 border-[#c16c4d] rounded-[100%] bg-[#FDFDF5] text-[#c16c4d] font-bold lowercase tracking-wider text-sm py-3 px-14 hover:bg-[#c16c4d] hover:text-[#FFFFF3] transition-all duration-300"
                            >
                                wybierz koktajle
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 2. RIGHT SIDE: LIFESTYLE IMAGE */}
                <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-screen bg-black">
                    <Image
                        src="/hero-cocktails.jpg"
                        alt="Mobilny bar z autorskimi koktajlami na wesele i eventy - pełna oferta Moment Drink Bar"
                        fill
                        className="object-cover"
                        priority
                        quality={85}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/5"></div>
                </div>
            </div>
        </section>
    );
}
