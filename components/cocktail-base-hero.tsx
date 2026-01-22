"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function CocktailBaseHero() {
    // Single view - displaying all 20 cocktails in a 2-column grid
    const cocktails = [
        // Longest descriptions
        { name: "Sour", ingredients: "Kwaśno-słodki, limonka, cukier, białko, angustura." },
        { name: "Pornstar Martini", ingredients: "Egzotyczny, waniliowy, owocowy, limonka, marakuja." },

        { name: "Herbatka Barmana", ingredients: "Herbaciano-ziołowy z limonką, delikatnie cierpki." },
        { name: "Truskawkowe Love", ingredients: "Słodko-kwaśny, orzeźwiający z musem truskawkowym." },

        { name: "Hugo Spritz", ingredients: "Czarny bez, miętowo-limonkowy, musujący, lekki." },
        { name: "Garden Spritz", ingredients: "Orzeźwiający, czarny bez i jabłko, musujący." },

        // Medium descriptions
        { name: "Apertivio Spritz", ingredients: "Orzeźwiający, cytrusowy, lekki z bąbelkami." },
        { name: "Pina Colada", ingredients: "Słodki, ananasowo-kokosowy, mleczny." },

        { name: "Sex on the Beach", ingredients: "Pomarańczowo-brzoskwiniowy, owocowy, słodki." },
        { name: "Szarlotka", ingredients: "Słodko-kwaśny, jabłko-cynamon, limonka." },

        { name: "Tom Collins", ingredients: "Cytrusowy, musujący, orzeźwiający." },
        { name: "Mohito", ingredients: "Kwaśno-orzeźwiający: limonka, cukier, mięta." },

        // Shorter descriptions
        { name: "Cosmopolitan", ingredients: "Żurawinowy, orzeźwiający, elegancki." },
        { name: "Negroni", ingredients: "Gorzki, ziołowy, wyrafinowany." },

        { name: "Old Cuban", ingredients: "Elegancki, musujący, miętowy." },
        { name: "Clover Club", ingredients: "Malinowy, kremowy, elegancki." },

        { name: "Cuba Libre", ingredients: "Słodko-kwaśny: limonka, cola." },
        { name: "Aloesowy Sour", ingredients: "Kwaśno-słodki, aloes-kiwi." },

        // Shortest
        { name: "Mango Tango", ingredients: "Słodki, mango-pomarańcza." },
        { name: "Tiki Paradise", ingredients: "Słodki, ananasowo-morelowy." },
    ];

    return (
        <div className="relative w-full min-h-screen bg-[#FFFFF3] pt-16">

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-12 lg:px-24">

                {/* Decorative Background Images */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                    <img src="/images/menu-decor-1.png" alt="" className="absolute top-[5%] left-[-5%] md:left-[2%] w-[120px] md:w-[180px] opacity-[0.07] rotate-[-15deg]" />
                    <img src="/images/menu-decor-2.png" alt="" className="absolute top-[10%] right-[-5%] md:right-[5%] w-[100px] md:w-[150px] opacity-[0.07] rotate-[10deg]" />
                    <img src="/images/menu-decor-3.png" alt="" className="absolute top-[40%] left-[-2%] md:left-[8%] w-[110px] md:w-[160px] opacity-[0.07] rotate-[5deg]" />
                    <img src="/images/menu-decor-4.png" alt="" className="absolute top-[60%] right-[-2%] md:right-[10%] w-[100px] md:w-[140px] opacity-[0.07] rotate-[-8deg]" />
                    <img src="/images/menu-decor-5.png" alt="" className="absolute bottom-[5%] left-[10%] md:left-[20%] w-[80px] md:w-[120px] opacity-[0.07] rotate-[12deg]" />
                </div>

                <div className="flex flex-col items-center relative z-10 pb-24">

                    {/* Header - Moved up */}
                    <h1 className="font-knewave text-[#c16c4d] text-7xl md:text-9xl tracking-wider mb-20 text-center">
                        MENU
                    </h1>

                    {/* Grid Layout */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-start">
                        {cocktails.map((item, i) => (
                            <div key={i} className="flex flex-col w-full text-center items-center">
                                <h3 className="font-caveat font-bold text-4xl text-[#c16c4d] leading-none mb-3">
                                    {item.name}
                                </h3>
                                <p className="font-caveat text-brand-text-light text-2xl leading-loose max-w-md mx-auto opacity-90">
                                    {item.ingredients}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Footer Note */}
                    <div className="mt-24 w-full max-w-2xl mx-auto text-center space-y-8">
                        <div className="w-full h-px bg-[#c16c4d]/20"></div>
                        <p className="font-caveat text-[#c16c4d] font-bold text-3xl md:text-4xl">
                            * Dostępne również w wersji bezalkoholowej
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
