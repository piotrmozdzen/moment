"use client";

import Link from "next/link";
import { Section } from "@/components/section";

export function OfferHero() {
    return (
        <div className="relative w-full min-h-screen">
            <OfferHeroContent />
        </div>
    );
}

function OfferHeroContent() {

    return (
        <>
            {/* 1. TOP IMAGE SECTION - Full width/height impact */}
            <div className="relative w-full h-[60vh] md:h-[70vh]">
                <img
                    src="/hero-cocktails.jpg"
                    alt="Signature Cocktails"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* 2. BEIGE SECTION BELOW */}
            <div className="relative w-full -mt-20 z-10 text-left">
                {/* Visual wrapper */}
                <div className="w-full drop-shadow-2xl">

                    {/* SVG Top Edge */}
                    <svg
                        className="block w-full h-[40px]"
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <pattern id="scallop-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M0,0 L10,0 A10,10 0 0,0 30,0 L40,0 L40,40 L0,40 Z" fill="#FFFFF3" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="40" fill="url(#scallop-pattern)" />
                    </svg>

                    <div className="bg-[#FFFFF3] w-full min-h-[85vh] overflow-hidden pb-16">

                        {/* MAIN CONTENT SECTION - 2 cols layout */}
                        <Section className="pt-24 md:pt-32 w-full px-4 md:px-12 lg:px-24">
                            <div className="w-full max-w-7xl mx-auto min-h-[500px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                                {/* LEFT: TEXT CONTENT - Centered in its column */}
                                <div className="space-y-8 text-center flex flex-col justify-center h-full">
                                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#c16c4d] leading-[0.9] font-[family-name:var(--font-caveat)]">
                                        Stwórz <span className="text-[#332f2e]">swoją kompozycję</span>
                                    </h1>

                                    <div className="space-y-6 text-[#5d5552] text-lg md:text-xl font-medium leading-relaxed">
                                        <ul className="space-y-4 pt-2 text-left inline-block mx-auto max-w-xl">
                                            <li className="flex items-start">
                                                <span className="text-[#c16c4d] mr-3 font-bold">•</span>
                                                <span>Wybieracie 8 pozycji menu, z możliwością rozszerzenia oferty.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#c16c4d] mr-3 font-bold">•</span>
                                                <span>Możecie stworzyć dwa autorskie koktajle i nadać im własne nazwy.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#c16c4d] mr-3 font-bold">•</span>
                                                <span>Barmani przygotowują również koktajle na specjalne życzenie gości.</span>
                                            </li>

                                            <li className="flex items-start">
                                                <span className="text-[#c16c4d] mr-3 font-bold">•</span>
                                                <span>Dostępne są także koktajle w wersji bezalkoholowej.</span>
                                            </li>
                                        </ul>

                                        <p className="text-sm md:text-base mt-8">
                                            * Cena ustalana jest indywidualnie na podstawie liczby gości, czasu trwania imprezy oraz wybranego pakietu menu.
                                        </p>

                                        <p className="font-bold text-[#c16c4d] pt-6 uppercase tracking-widest text-sm">
                                            Napisz do nas, a przygotujemy wycenę dopasowaną do Twoich potrzeb.
                                        </p>
                                    </div>

                                    <div className="pt-4">
                                        <Link
                                            href="/contact"
                                            className="inline-block bg-transparent text-[#332f2e] font-bold uppercase tracking-[0.2em] text-sm py-4 px-10 border border-[#332f2e] hover:bg-[#332f2e] hover:text-[#FFFFF3] transition-all duration-300"
                                        >
                                            Napisz do nas
                                        </Link>
                                    </div>
                                </div>

                                {/* RIGHT: DECORATIVE ARROW + BUTTON TO COCKTAILS */}
                                <div className="hidden lg:flex flex-col items-center justify-center relative min-h-[400px]">

                                    {/* Arrow pointing to button - BLACK, FLIPPED to point right */}
                                    {/* Positioned to the left of the button */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-[180%] -translate-y-[20%] rotate-[-5deg] scale-x-[-1]">
                                        <svg
                                            width="160"
                                            height="140"
                                            viewBox="0 0 191 161"
                                            fill="none"
                                            className="text-black"
                                        >
                                            <path fillRule="evenodd" clipRule="evenodd" d="M183.561 45.6143C176.187 63.063 159.221 78.0911 138.545 89.0575C107.65 105.439 68.4973 112.767 41.0784 105.814C40.5153 105.663 40.173 105.086 40.315 104.529C40.4594 103.957 41.0283 103.621 41.5997 103.765C68.5941 110.607 107.135 103.324 137.555 87.1847C157.765 76.4709 174.409 61.8498 181.61 44.7898C181.837 44.2474 182.456 43.9998 182.998 44.2265C183.526 44.4507 183.788 45.0719 183.561 45.6143Z" fill="black" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.52203 107.103C23.6106 110.318 38.061 111.512 52.6985 121.016C53.187 121.342 53.3341 121.994 53.0078 122.483C52.6955 122.974 52.0378 123.112 51.5551 122.794C35.4473 112.34 19.5519 112.158 1.41588 107.962C0.437438 107.732 0.417386 106.978 0.427332 106.798C0.438087 106.531 0.540948 106.112 1.06417 105.87C1.16715 105.822 1.3824 105.758 1.69635 105.712C2.29933 105.636 3.53844 105.585 4.09075 105.508C5.68291 105.272 7.26012 104.997 8.85229 104.76C13.4045 104.085 17.936 103.363 22.4093 102.31C39.1505 98.3975 52.8644 95.305 62.6098 80.4116C62.9303 79.9148 63.58 79.7819 64.0767 80.1024C64.5593 80.4204 64.698 81.0782 64.38 81.5608C54.3032 96.9709 40.2015 100.323 22.8897 104.375C18.3574 105.432 13.7645 106.173 9.16742 106.854C8.6151 106.932 8.06853 107.017 7.52203 107.103Z" fill="black" />
                                        </svg>
                                    </div>

                                    {/* Button with SVG Outline */}
                                    <Link
                                        href="/baza-koktajli"
                                        className="group relative inline-block cursor-pointer p-6 ml-36 mt-32"
                                    >
                                        <span className="relative z-10 font-caveat font-bold text-[#c16c4d] text-2xl md:text-3xl block text-center leading-none transform rotate-[-3deg] group-hover:rotate-0 transition-transform duration-300">
                                            Wybór koktajli
                                        </span>
                                        <svg
                                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-visible w-[150%] h-[150%]"
                                            viewBox="0 0 300 80"
                                            preserveAspectRatio="none"
                                            fill="none"
                                        >
                                            <path
                                                d="M265,20 C295,35 285,60 245,65 C165,75 55,70 25,50 C5,35 15,15 35,15 C90,5 210,5 265,20"
                                                stroke="#c16c4d"
                                                strokeWidth="3.5"
                                                strokeLinecap="round"
                                                strokeMiterlimit="10"
                                                className="transition-all duration-[800ms] ease-out stroke-dasharray-[700] stroke-dashoffset-[0]"
                                                style={{ strokeDasharray: 700, strokeDashoffset: 0 }}
                                            />
                                        </svg>
                                    </Link>

                                </div>

                            </div>
                        </Section>
                    </div>
                </div>
            </div>
        </>
    );
}
