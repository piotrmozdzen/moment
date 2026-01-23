"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

function Tape({ className }: { className?: string }) {
    return (
        <div className={cn(
            "absolute w-16 h-6 bg-white/30 backdrop-blur-[2px] shadow-sm z-50 pointer-events-none border border-white/10",
            className
        )}
            style={{
                clipPath: "polygon(0% 10%, 10% 0%, 90% 5%, 100% 15%, 95% 85%, 100% 100%, 10% 95%, 0% 85%)",
                filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.05))"
            }}
        />
    );
}

function Polaroid({
    src,
    alt,
    caption,
    className,
    rotation,
    zIndex,
    hasTapeTop,
    hasTapeBottom
}: {
    src: string;
    alt: string;
    caption?: string;
    className?: string;
    rotation?: string;
    zIndex?: string;
    hasTapeTop?: boolean;
    hasTapeBottom?: boolean;
}) {
    return (
        <div className={cn(
            "absolute bg-[#FDFDF5] p-2 pb-6 shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition-all duration-500",
            rotation,
            zIndex,
            className
        )}>
            {/* Top Tape Pieces */}
            {hasTapeTop && (
                <>
                    <Tape className="-top-4 -left-6 rotate-[-35deg]" />
                    <Tape className="-top-4 -right-6 rotate-[35deg]" />
                </>
            )}

            {/* Image Container */}
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-black/5 bg-slate-100">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Caption Area */}
            {caption && (
                <div className="pt-3 flex items-center justify-center">
                    <p className="font-caveat text-brand-text text-lg md:text-xl text-center leading-none">
                        {caption}
                    </p>
                </div>
            )}

            {/* Bottom Tape Pieces */}
            {hasTapeBottom && (
                <>
                    <Tape className="-bottom-4 -left-6 rotate-[35deg]" />
                    <Tape className="-bottom-4 -right-6 rotate-[-35deg]" />
                </>
            )}
        </div>
    );
}

export function Hero() {
    // SVG animation is handled via CSS group-hover on the button


    const photos = [
        // Top Left - Large (Base Layer)
        {
            src: "/images/hero-barman.jpg",
            alt: "Nasi barmani",
            caption: "Imprezy okolicznościowe",
            rotation: "rotate-[-2deg]",
            className: "top-[8%] left-[3%] w-44 md:w-56 lg:w-[260px]",
            zIndex: "z-10",
            hasTapeTop: true
        },
        // Top Right - Med (Elevated, Slight Overlap)
        {
            src: "/images/hero-wesela.png",
            alt: "Wesela",
            caption: "Wesela",
            rotation: "rotate-[6deg]",
            className: "top-[5%] right-[2%] w-44 md:w-56 lg:w-[260px]",
            zIndex: "z-30",
            hasTapeBottom: true
        },
        // Mid Left - Med (Overlaps Top Left)
        {
            src: "/images/moment-polaroid.jpg",
            alt: "Moment Drink Bar",
            caption: "Sprawdź ofertę",
            rotation: "rotate-[-5deg]",
            className: "top-[48%] left-[8%] w-44 md:w-56 lg:w-[260px]",
            zIndex: "z-40",
            hasTapeBottom: true
        },
        // Mid Right - Med (Between Top and Bottom Right)
        {
            src: "/images/mocktaile-2.jpg",
            alt: "Mocktaile",
            caption: "Mocktaile",
            rotation: "rotate-[4deg]",
            className: "top-[48%] right-[0%] w-48 md:w-60 lg:w-[280px]",
            zIndex: "z-20",
            hasTapeTop: true
        },
        // Center - Small (Bridges the composition)
        {
            src: "/images/autorskie-drinki.jpg",
            alt: "Autorskie drinki",
            caption: "Autorskie drinki",
            rotation: "rotate-[-3deg]",
            className: "top-[28%] left-[38%] w-40 md:w-52 lg:w-[240px]",
            zIndex: "z-50",
            hasTapeTop: true
        },
    ];

    return (
        <section className="min-h-screen w-full bg-[#fdfdf5] relative overflow-hidden flex flex-col lg:flex-row items-center pt-24 lg:pt-0">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#c16c4d] opacity-[0.08] blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#c16c4d] opacity-[0.05] blur-[100px] rounded-full" />
            </div>
            {/* Left Side: Content - 40% width */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center px-8 md:px-12 lg:pl-24 lg:pr-0 z-10 relative">
                <div className="flex flex-col items-start text-left max-w-xl">


                    <h1 className="text-5xl md:text-7xl font-bold font-montserrat text-brand-text leading-tight mb-8">
                        Twoje przyjęcie,
                        <span className="font-caveat font-normal text-brand-blue block mt-2 text-6xl md:text-8xl">
                            nasze koktajle.
                        </span>
                    </h1>

                    <p className="text-lg text-brand-text-light leading-relaxed max-w-md pl-1 font-sans mb-8">
                        Tworzymy atmosferę, w której goście czują się wyjątkowo.
                        Zadbamy o to, by wasze wydarzenie było niezapomniane.
                    </p>

                    <div className="pt-4 pl-1 flex items-center gap-6">
                        <Link
                            href="/kontakt"
                            className="group relative inline-block cursor-pointer peer"
                        >
                            <span className="relative z-10 font-caveat font-bold text-brand-text text-2xl md:text-3xl px-6 py-2 block">
                                Zarezerwuj termin
                            </span>
                            <svg
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-visible"
                                width="300"
                                height="80"
                                viewBox="0 0 300 80"
                                fill="none"
                            >
                                <path
                                    d="M265,20 C295,35 285,60 245,65 C165,75 55,70 25,50 C5,35 15,15 35,15 C90,5 210,5 265,20"
                                    stroke="#c16c4d"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    className="transition-all duration-[800ms] ease-out [stroke-dasharray:700] [stroke-dashoffset:700] group-hover:[stroke-dashoffset:0]"
                                />
                            </svg>
                        </Link>
                        {/* Arrow pointing to button */}
                        <div className="hidden md:block -mt-12 transition-opacity duration-300 peer-hover:opacity-0">
                            <svg
                                width="130"
                                height="110"
                                viewBox="0 0 191 161"
                                fill="none"
                                className="rotate-[-10deg]"
                            >
                                <path fillRule="evenodd" clipRule="evenodd" d="M183.561 45.6143C176.187 63.063 159.221 78.0911 138.545 89.0575C107.65 105.439 68.4973 112.767 41.0784 105.814C40.5153 105.663 40.173 105.086 40.315 104.529C40.4594 103.957 41.0283 103.621 41.5997 103.765C68.5941 110.607 107.135 103.324 137.555 87.1847C157.765 76.4709 174.409 61.8498 181.61 44.7898C181.837 44.2474 182.456 43.9998 182.998 44.2265C183.526 44.4507 183.788 45.0719 183.561 45.6143Z" fill="black" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.52203 107.103C23.6106 110.318 38.061 111.512 52.6985 121.016C53.187 121.342 53.3341 121.994 53.0078 122.483C52.6955 122.974 52.0378 123.112 51.5551 122.794C35.4473 112.34 19.5519 112.158 1.41588 107.962C0.437438 107.732 0.417386 106.978 0.427332 106.798C0.438087 106.531 0.540948 106.112 1.06417 105.87C1.16715 105.822 1.3824 105.758 1.69635 105.712C2.29933 105.636 3.53844 105.585 4.09075 105.508C5.68291 105.272 7.26012 104.997 8.85229 104.76C13.4045 104.085 17.936 103.363 22.4093 102.31C39.1505 98.3975 52.8644 95.305 62.6098 80.4116C62.9303 79.9148 63.58 79.7819 64.0767 80.1024C64.5593 80.4204 64.698 81.0782 64.38 81.5608C54.3032 96.9709 40.2015 100.323 22.8897 104.375C18.3574 105.432 13.7645 106.173 9.16742 106.854C8.6151 106.932 8.06853 107.017 7.52203 107.103Z" fill="black" />
                            </svg>
                        </div>
                    </div>


                </div>

            </div>

            {/* Right Side: Cascading Polaroids - 60% width */}
            <div className="w-full lg:w-[60%] h-[850px] lg:h-screen relative flex items-center justify-center lg:mt-0">
                <div className="relative w-full h-full max-w-[900px] mx-auto py-16 px-8">
                    {photos.map((photo, index) => (
                        <Polaroid
                            key={index}
                            {...photo}
                        />
                    ))}
                </div>
            </div>
        </section >
    );
}
