"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export function OfferHero() {
    return (
        <section className="w-full lg:h-[calc(100vh-80px)] flex flex-col lg:flex-row items-stretch overflow-hidden bg-[#FDFDF5]">

            {/* 1. LEFT SIDE: CONTENT */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 relative bg-[#FDFDF5] text-[#332f2e]">

                <div className="relative z-10 w-full max-w-xl mx-auto lg:mx-0 text-left">
                    {/* NEW STYLED HEADER (Like Contact page) */}
                    <div className="space-y-4 mb-12">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black leading-[1.1] font-montserrat tracking-tight">
                            Wybór koktajli
                        </h1>
                        <p className="font-caveat text-3xl md:text-4xl text-[#c16c4d]">
                            Personalizacja menu
                        </p>
                    </div>

                    {/* Paragraph Content */}
                    <div className="space-y-6 mb-16 text-[#5d5552] text-sm md:text-base leading-relaxed font-medium">
                        <p>
                            Wybieracie 8 pozycji z naszej karty menu, z możliwością rozszerzenia oferty o dodatkowe koktajle.
                        </p>
                        <p>
                            Razem stworzymy dwa autorskie koktajle przygotowane specjalnie dla Was, którym możecie nadać własne, unikalne nazwy.
                        </p>
                        <p>
                            Nasi barmani przygotowują również drinki na specjalne życzenie gości spoza karty, dbając o to, by każdy znalazł coś dla siebie.<br></br>Dostępne są także koktajle w wersji bezalkoholowej.
                        </p>

                        <div className="pt-4">
                            <p className="text-[10px] md:text-xs uppercase tracking-[0.1em] text-brand-text font-bold italic leading-relaxed">
                                * Cena ustalana jest indywidualnie na podstawie liczby gości, czasu trwania imprezy oraz wybranego pakietu menu.
                            </p>
                        </div>
                    </div>

                    {/* Precisely modeled elliptical button from reference */}
                    <div className="flex justify-center lg:justify-start">
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
            <div className="hidden lg:block lg:w-1/2 relative min-h-full bg-black">
                <Image
                    src="/hero-cocktails.jpg"
                    alt="Mobile Bar Lifestyle"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/5"></div>
            </div>
        </section>
    );
}
