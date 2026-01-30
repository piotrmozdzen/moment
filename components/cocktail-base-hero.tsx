"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function CocktailBaseHero() {
    // New drink list with images Drink1-Drink8
    const cocktails = [
        { name: "Truskawkowe Love", image: "/images/Drink1.png" },
        { name: "Garden Spritz", image: "/images/Drink2.png" },
        { name: "Aloesowy Sour", image: "/images/Drink3.png" },
        { name: "Pinacolada", image: "/images/Drink4.png" },
        { name: "Herbatka barmana", image: "/images/Drink8.png" },
        { name: "Mango Tango", image: "/images/Drink5.png" },
        { name: "Szarlotka", image: "/images/Drink6.png" },
        { name: "Tiki Paradise", image: "/images/Drink7.png" },
    ];

    return (
        <div className="relative w-full min-h-screen bg-[#FFFFF3] pt-16 font-sans">

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-12 lg:px-24">



                <div className="flex flex-col items-center relative z-10 pb-24">

                    {/* Staggered Column Layout - Independent columns for consistent flow */}
                    <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row gap-x-12 md:gap-x-48 px-8 md:px-24">
                        {/* Left Column */}
                        <div className="flex-1 space-y-32 md:space-y-64">
                            {cocktails.filter((_, i) => i % 2 === 0).map((item, i) => (
                                <div key={i} className="flex flex-col items-center w-full">
                                    <div className="relative w-full aspect-video mb-10 overflow-hidden">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="font-square-peg text-2xl md:text-4xl text-[#c16c4d] text-center">
                                        {item.name}
                                    </h3>
                                </div>
                            ))}
                        </div>

                        {/* Right Column - Staggered Down */}
                        <div className="flex-1 space-y-32 md:space-y-64 md:mt-80">
                            {cocktails.filter((_, i) => i % 2 !== 0).map((item, i) => (
                                <div key={i} className="flex flex-col items-center w-full">
                                    <div className="relative w-full aspect-video mb-10 overflow-hidden">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="font-square-peg text-2xl md:text-4xl text-[#c16c4d] text-center">
                                        {item.name}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
}
