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
                <div className="pt-2 flex items-center justify-center">
                    <p className="font-[family-name:var(--font-caveat)] text-slate-800 text-lg md:text-xl text-center leading-none transform -rotate-1">
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
        {
            src: "/images/hero-wesela.png",
            alt: "Wesela",
            caption: "Wesela",
            rotation: "rotate-[-5deg]",
            className: "top-[5%] left-1/2 -translate-x-[110%] w-32 md:w-44 lg:w-52",
            zIndex: "z-40",
            hasTapeTop: true
        },
        {
            src: "/images/hero-barman.jpg",
            alt: "Nasi barmani",
            caption: "Z pasją",
            rotation: "rotate-[6deg]",
            className: "top-[25%] left-1/2 -translate-x-[5%] w-32 md:w-44 lg:w-52",
            zIndex: "z-30"
        },
        {
            src: "/images/hero-okolicznosciowe.jpg",
            alt: "Imprezy okolicznościowe",
            caption: "Urodziny",
            rotation: "rotate-[-8deg]",
            className: "top-[45%] left-1/2 -translate-x-[100%] w-32 md:w-44 lg:w-52",
            zIndex: "z-20"
        },
        {
            src: "/images/hero-moment.png",
            alt: "Moment Drink Bar",
            caption: "Moment",
            rotation: "rotate-[9deg]",
            className: "top-[65%] left-1/2 -translate-x-[15%] w-32 md:w-44 lg:w-52",
            zIndex: "z-10",
            hasTapeBottom: true
        }
    ];

    return (
        <section className="min-h-screen w-full bg-[radial-gradient(circle_at_center,_#F2E6D9_0%,_#B8CEF2_100%)] flex flex-col lg:flex-row items-center overflow-hidden pt-24 lg:pt-0">
            {/* Left Side: Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-32 z-10 relative">
                <div className="space-y-0 mb-20 animate-fade-in relative">
                    <h1 className="text-6xl md:text-[90px] font-bold uppercase tracking-tighter font-[family-name:var(--font-montserrat)] text-slate-900 leading-[0.8]">
                        Moment
                    </h1>
                    <h1 className="text-4xl md:text-[60px] font-bold uppercase tracking-widest font-[family-name:var(--font-montserrat)] text-slate-900 leading-[0.8] pl-2 opacity-80">
                        drink bar
                    </h1>
                </div>

                <div className="space-y-12 max-w-2xl relative">
                    {/* Zatrzymaj moment - Quote Layout */}
                    <div className="relative inline-block">
                        {/* Opening Quote SVG */}
                        <div className="absolute -top-10 -left-16 opacity-15">
                            <svg width="100" height="100" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#475569" d="M46,30.7c-0.2,3.5-1.8,8.8-8.3,13.9c-0.3,0.2-0.7,0.4-1,0.4c-0.5,0-1-0.2-1.3-0.7c-0.6-0.8-0.4-1.8,0.3-2.4
                                    c5.3-4.2,6.7-8.3,7-11.1c-0.7,0.4-1.6,0.7-2.5,0.7c-2.8,0-5.1-2.4-5.1-5.3s2.3-5.3,5.1-5.3c0.6,0,1.2,0.2,1.8,0.4l0,0
                                    c0,0,0.2,0.1,0.6,0.3c0,0,0,0,0.1,0c0,0,0,0,0,0c0.2,0.1,0.5,0.3,0.8,0.6c0.1,0.1,0.2,0.2,0.4,0.4C44.9,23.9,46.3,26.2,46,30.7z
                                    M23.2,31.6c-2.8,0-5.1-2.4-5.1-5.3s2.3-5.3,5.1-5.3c0.6,0,1.2,0.2,1.8,0.4l0,0c0,0,0.2,0.1,0.6,0.3c0,0,0,0,0.1,0c0,0,0,0,0,0
                                    c0.2,0.1,0.5,0.3,0.8,0.6c0.1,0.1,0.2,0.2,0.4,0.4c1.3,1.2,2.7,3.6,2.3,8.1c-0.2,3.5-1.8,8.8-8.3,13.9c-0.3,0.2-0.7,0.4-1,0.4
                                    c-0.5,0-1-0.2-1.3-0.7c-0.6-0.8-0.4-1.8,0.3-2.4c5.3-4.2,6.7-8.3,7-11.1C24.9,31.3,24.1,31.6,23.2,31.6z"/>
                            </svg>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-caveat)] font-bold text-slate-800 leading-tight italic relative z-10 px-4">
                            Zatrzymaj moment w każdym kieliszku.
                        </h2>

                        {/* Closing Quote SVG */}
                        <div className="absolute -bottom-12 -right-16 opacity-15 rotate-180">
                            <svg width="100" height="100" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#475569" d="M46,30.7c-0.2,3.5-1.8,8.8-8.3,13.9c-0.3,0.2-0.7,0.4-1,0.4c-0.5,0-1-0.2-1.3-0.7c-0.6-0.8-0.4-1.8,0.3-2.4
                                    c5.3-4.2,6.7-8.3,7-11.1c-0.7,0.4-1.6,0.7-2.5,0.7c-2.8,0-5.1-2.4-5.1-5.3s2.3-5.3,5.1-5.3c0.6,0,1.2,0.2,1.8,0.4l0,0
                                    c0,0,0.2,0.1,0.6,0.3c0,0,0,0,0.1,0c0,0,0,0,0,0c0.2,0.1,0.5,0.3,0.8,0.6c0.1,0.1,0.2,0.2,0.4,0.4C44.9,23.9,46.3,26.2,46,30.7z
                                    M23.2,31.6c-2.8,0-5.1-2.4-5.1-5.3s2.3-5.3,5.1-5.3c0.6,0,1.2,0.2,1.8,0.4l0,0c0,0,0.2,0.1,0.6,0.3c0,0,0,0,0.1,0c0,0,0,0,0,0
                                    c0.2,0.1,0.5,0.3,0.8,0.6c0.1,0.1,0.2,0.2,0.4,0.4c1.3,1.2,2.7,3.6,2.3,8.1c-0.2,3.5-1.8,8.8-8.3,13.9c-0.3,0.2-0.7,0.4-1,0.4
                                    c-0.5,0-1-0.2-1.3-0.7c-0.6-0.8-0.4-1.8,0.3-2.4c5.3-4.2,6.7-8.3,7-11.1C24.9,31.3,24.1,31.6,23.2,31.6z"/>
                            </svg>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <button className="group relative flex items-center gap-4 text-slate-900 font-bold uppercase tracking-[0.2em] text-sm md:text-base">
                            <span className="relative">
                                Zarezerwuj termin
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full" />
                            </span>
                            <div className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-900/20 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </div>
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-12 pt-6">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 15L19 4H5L12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 15V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 21H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="12" cy="9" r="1" fill="currentColor" />
                                </svg>
                            </div>
                            <span className="font-[family-name:var(--font-caveat)] text-slate-700 font-bold text-2xl group-hover:text-slate-900 transition-colors">Wesela</span>
                        </div>
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 11V20C9 21.1046 9.89543 22 11 22H13C14.1046 22 15 21.1046 15 20V11C15 9.89543 14.1046 9 13 9V4H11V9C9.89543 9 9 9.89543 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11 2H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span className="font-[family-name:var(--font-caveat)] text-slate-700 font-bold text-2xl whitespace-nowrap group-hover:text-slate-900 transition-colors">Imprezy okolicznościowe</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Cascading Polaroids */}
            <div className="w-full lg:w-1/2 h-[750px] lg:h-screen relative flex items-center justify-center mt-12 lg:mt-0 pb-12">
                <div className="relative w-full h-full max-w-[500px] lg:max-w-none">
                    {photos.map((photo, index) => (
                        <Polaroid
                            key={index}
                            {...photo}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
