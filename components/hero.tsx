import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

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
    const photos = [
        // Top Left - Large (Base Layer)
        {
            src: "/images/hero-barman.jpg",
            alt: "Nasi barmani",
            caption: "Imprezy okolicznościowe",
            rotation: "rotate-[-2deg]",
            className: "top-[8%] left-[3%] w-40 md:w-52 lg:w-[240px]",
            zIndex: "z-10",
            hasTapeTop: true
        },
        // Top Right - Med (Elevated, Slight Overlap)
        {
            src: "/images/hero-wesela.png",
            alt: "Wesela",
            caption: "Wesela",
            rotation: "rotate-[6deg]",
            className: "top-[5%] right-[2%] w-40 md:w-52 lg:w-[240px]",
            zIndex: "z-30",
            hasTapeBottom: true
        },
        // Mid Left - Med (Overlaps Top Left)
        {
            src: "/images/hero-okolicznosciowe.jpg",
            alt: "Moment Drink Bar",
            caption: "Moment",
            rotation: "rotate-[-5deg]",
            className: "top-[48%] left-[8%] w-40 md:w-52 lg:w-[240px]",
            zIndex: "z-40",
            hasTapeBottom: true
        },
        // Mid Right - Med (Between Top and Bottom Right)
        {
            src: "/images/hero-moment-new.jpg",
            alt: "Imprezy okolicznościowe",
            caption: "Urodziny",
            rotation: "rotate-[4deg]",
            className: "top-[48%] right-[0%] w-44 md:w-56 lg:w-[260px]",
            zIndex: "z-20",
            hasTapeTop: true
        },
        // Center - Small (Bridges the composition)
        {
            src: "/images/hero-martini-splash.png",
            alt: "Autorskie menu",
            caption: "Autorskie drinki",
            rotation: "rotate-[-3deg]",
            className: "top-[28%] left-[38%] w-36 md:w-48 lg:w-[220px]",
            zIndex: "z-50",
            hasTapeTop: true
        }
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
                    <span className="text-sm font-bold tracking-[0.3em] text-brand-text-light uppercase pl-1 mb-12">
                        Mobilny Drink Bar
                    </span>

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

                    <div className="pt-4 pl-1">
                        <button className="group relative inline-block">
                            <span className="relative z-10 font-bold uppercase tracking-[0.15em] text-brand-text text-sm md:text-base">
                                Zarezerwuj termin
                            </span>
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-3 pt-12 pl-1">
                    <span className="font-caveat text-brand-text-light font-bold text-2xl">Wesela</span>
                    <span className="text-brand-text-light text-2xl">•</span>
                    <span className="font-caveat text-brand-text-light font-bold text-2xl">Imprezy okolicznościowe</span>
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
