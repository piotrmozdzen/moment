"use client";

import { cn } from "@/lib/utils";
import Link from "next/link"; // Added Link
import { ArrowLeft } from "lucide-react"; // Added ArrowLeft

export function CocktailBaseHero() {
    // Single view - displaying all 20 cocktails in a 2-column grid
    const cocktails = [
        // 1. Whisky Sour
        {
            name: "Whisky Sour",
            ingredients: "Bourbon, sok z cytryny, syrop cukrowy, białko, angostura"
        },
        // 2. Pornstar Martini
        {
            name: "Pornstar Martini",
            ingredients: "Wódka waniliowa, marakuja, syrop waniliowy, limonka, prosecco"
        },
        // 3. Negroni
        {
            name: "Negroni",
            ingredients: "Gin, słodki wermut, Campari"
        },
        // 4. Aperol Spritz
        {
            name: "Aperol Spritz",
            ingredients: "Aperol, prosecco, woda gazowana, pomarańcza"
        },
        // 5. Old Fashioned
        {
            name: "Old Fashioned",
            ingredients: "Bourbon, cukier brązowy, angostura, woda, skórka pomarańczy"
        },
        // 6. Margarita
        {
            name: "Margarita",
            ingredients: "Tequila, likier pomarańczowy, sok z limonki, sól"
        },
        // 7. Mojito
        {
            name: "Mojito",
            ingredients: "Rum, limonka, mięta, cukier brązowy, woda gazowana"
        },
        // 8. Cosmopolitan
        {
            name: "Cosmopolitan",
            ingredients: "Wódka cytrynowa, Cointreau, sok z limonki, sok żurawinowy"
        },
        // 9. Daiquiri
        {
            name: "Daiquiri",
            ingredients: "Rum, sok z limonki, syrop cukrowy"
        },
        // 10. Espresso Martini
        {
            name: "Espresso Martini",
            ingredients: "Wódka, likier kawowy, espresso, syrop cukrowy"
        },
        // 11. Moscow Mule
        {
            name: "Moscow Mule",
            ingredients: "Wódka, piwo imbirowe, sok z limonki, mięta"
        },
        // 12. Gin Basil Smash
        {
            name: "Gin Basil Smash",
            ingredients: "Gin, bazylia, cytryna, syrop cukrowy"
        },
        // 13. Manhattan
        {
            name: "Manhattan",
            ingredients: "Whisky, słodki wermut, angostura"
        },
        // 14. Mai Tai
        {
            name: "Mai Tai",
            ingredients: "Rum jasny i ciemny, likier pomarańczowy, sok z limonki, syrop migdałowy"
        },
        // 15. Pina Colada
        {
            name: "Pina Colada",
            ingredients: "Rum, mleczko kokosowe, sok ananasowy"
        },
        // 16. Cuba Libre
        {
            name: "Cuba Libre",
            ingredients: "Rum, cola, limonka"
        },
        // 17. Tom Collins
        {
            name: "Tom Collins",
            ingredients: "Gin, sok z cytryny, syrop cukrowy, woda gazowana"
        },
        // 18. Long Island Iced Tea
        {
            name: "Long Island Iced Tea",
            ingredients: "Wódka, tequila, rum, gin, Cointreau, sok z cytryny, cola"
        },
        // 19. Amaretto Sour
        {
            name: "Amaretto Sour",
            ingredients: "Likier Amaretto, sok z cytryny, syrop cukrowy, białko"
        },
        // 20. Bloody Mary
        {
            name: "Bloody Mary",
            ingredients: "Wódka, sok pomidorowy, przyprawy, seler naciowy"
        },
    ];

    return (
        <div className="relative w-full min-h-screen">
            {/* 1. TOP IMAGE SECTION */}
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

                    <div className="bg-[#FFFFF3] w-full min-h-[85vh] overflow-hidden pb-16 pt-24 md:pt-32 px-4 md:px-12 lg:px-24">

                        {/* Content Container */}
                        <div className="relative z-10 w-full max-w-[1400px] mx-auto">

                            {/* Return to Home Link */}
                            <div className="w-full flex justify-start mb-16 pl-4 md:pl-0">
                                <Link href="/" className="flex items-center gap-2 group inline-block">
                                    <span className="text-xl group-hover:-translate-x-1 transition-transform duration-300">
                                        <ArrowLeft size={24} className="text-brand-text" />
                                    </span>
                                    <span className="font-bold tracking-widest text-sm uppercase text-brand-text">Wróć do strony głównej</span>
                                </Link>
                            </div>

                            <div className="flex flex-col items-center">

                                {/* Header */}
                                <h1 className="font-knewave text-[#c16c4d] text-8xl md:text-9xl tracking-wider mb-16 text-center">
                                    MENU
                                </h1>

                                {/* Grid Layout */}
                                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16 items-start">
                                    {cocktails.map((item, i) => (
                                        <div key={i} className="flex flex-col w-full text-center items-center">
                                            <h3 className="font-caveat font-bold text-4xl text-[#c16c4d] leading-none mb-3">
                                                {item.name}
                                            </h3>
                                            <p className="font-caveat text-brand-text-light text-2xl leading-loose max-w-md mx-auto">
                                                {item.ingredients}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Footer Note */}
                                <div className="mt-16 w-full max-w-2xl mx-auto text-center space-y-6">
                                    <div className="w-full h-px bg-[#c16c4d]/30"></div>
                                    <p className="font-caveat text-[#c16c4d] font-bold text-2xl md:text-3xl">
                                        * Dostępne również w wersji bezalkoholowej (mocktail)
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
