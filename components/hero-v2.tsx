"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";


function PolaroidV2({
    src,
    alt,
    caption,
    className,
    rotation,
    priority = false,
}: {
    src: string;
    alt: string;
    caption?: string;
    className?: string;
    rotation?: string;
    priority?: boolean;
}) {
    return (
        <div className={cn(
            "absolute bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500",
            rotation,
            className
        )}>
            {/* Image Container */}
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-black/5 bg-slate-100">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    priority={priority}
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>

            {/* Caption Area */}
            {caption && (
                <div className="h-14 flex items-center justify-center">
                    <p className="font-caveat text-[#2D241E] text-xl text-center leading-none">
                        {caption}
                    </p>
                </div>
            )}
        </div>
    );
}

export function HeroV2() {
    return (
        <section className="lg:min-h-screen w-full bg-[#FFFFF3] pt-24 pb-12 lg:pt-12 lg:pb-20 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-12 lg:gap-24 overflow-hidden">
            {/* Left Column: Visual Composition */}
            <div className="hidden lg:flex w-full lg:w-[55%] relative flex-col items-center justify-center">
                {/* Calligraphy Text Layer */}

                {/* Images Grid */}
                <div className="relative w-full aspect-[4/5] max-w-[600px] mx-auto">
                    {/* Top Right: Barman */}
                    <PolaroidV2
                        src="/images/hero-barman.jpg"
                        alt="Profesjonalny barman z Moment Drink Bar Lublin przygotowujący koktajle na wesele"
                        rotation="rotate-[6deg]"
                        className="top-2 right-[5%] w-[42%] z-20"
                        caption="Profesjonalna obsługa"
                        priority={true}
                    />

                    {/* Bottom Left: Signature Drinks */}
                    <PolaroidV2
                        src="/images/mocktaile-2.jpg"
                        alt="Kolorowe drinki i mocktaile serwowane przez mobilny bar na imprezie okolicznościowej"
                        rotation="rotate-[-8deg]"
                        className="top-[30%] left-[-8%] w-[38%] z-20"
                        caption="Imprezy Okolicznościowe"
                        priority={true}
                    />

                    {/* Bottom Right: Mocktails */}
                    <PolaroidV2
                        src="/images/hero-wesela.png"
                        alt="Elegancki mobilny drink bar Moment na weselu - kompleksowa obsługa barmańska"
                        rotation="rotate-[4deg]"
                        className="bottom-[-5%] right-[2%] w-[42%] z-30"
                        caption="Wesela"
                        priority={true}
                    />
                </div>
            </div>

            {/* Right Column: Editorial Content */}
            <div className="w-full lg:w-[45%] flex flex-col gap-12 pt-8 lg:pt-44">
                {/* Block 1 */}
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair text-[#2D241E] leading-tight">
                            Moment Drink Bar
                        </h1>
                        <div className="flex flex-col gap-4 max-w-lg">
                            <p className="text-lg text-black/80 font-sans leading-relaxed">
                                Organizujesz imprezę i szukasz kompleksowej obsługi drinkbaru, który po prostu wie co ma robić?
                            </p>
                            <p className="text-lg text-black/80 font-sans leading-relaxed">
                                Zapewniamy pełne wyposażenie – od szkła barowego i dekoracji, przez świeże owoce, aż po profesjonalny sprzęt – żebyś Ty nie musiał się niczym przejmować.
                            </p>
                        </div>
                    </div>

                    <Link href="/oferta">
                        <button className="bg-[#2D241E] text-white py-4 px-12 rounded-full w-fit font-montserrat font-bold text-xs tracking-[0.2em] hover:bg-black transition-colors uppercase">
                            Sprawdź Ofertę
                        </button>
                    </Link>

                </div>
            </div>
        </section>
    );
}
