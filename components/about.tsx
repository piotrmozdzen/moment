"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function About() {
    const [isVisible, setIsVisible] = useState(false);
    const titleRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const titleElement = titleRef.current;
        if (titleElement) {
            observer.observe(titleElement);
        }

        return () => {
            if (titleElement) {
                observer.unobserve(titleElement);
            }
        };
    }, []);

    return (
        <section>
            {/* Main Title Section */}
            <div className="bg-brand-cream py-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold leading-[1.3] tracking-wide text-brand-text font-caveat">
                    Dlaczego{" "}
                    <span ref={titleRef} className="group relative inline-block px-4 text-3xl md:text-4xl">
                        NASZ
                        {/* SVG that draws on hover */}
                        <svg
                            className="absolute left-1/2 top-1/2 -translate-x-[46%] -translate-y-1/2 pointer-events-none"
                            width="131"
                            height="77"
                            viewBox="0 0 131 77"
                            fill="none"
                            style={{ width: '121px', height: '77px' }}
                        >
                            <path
                                d="M87.3711 2L74.0061 2.68054C63.3168 3.22483 52.7332 5.06519 42.4877 8.16122L32.6331 11.1391C30.93 11.6538 29.2812 12.3339 27.7106 13.1698L11.8602 21.6047C-1.87594 28.9146 -1.09606 48.8557 13.169 55.0704C13.169 55.0704 20.811 59.3013 26.095 61.0232C32.4678 63.0999 36.3442 63.1936 42.9982 63.9996C49.6523 64.8055 70.6908 64.2363 88.3711 62.9996C116.481 61.0333 125.951 52.9494 128.019 44.8375C131.308 31.9331 116.933 22.6069 105.371 15.9996L94.061 11.3115C91.8429 10.3921 89.536 9.70341 87.1769 9.2564C84.3175 8.71459 81.4017 8.53163 78.4971 8.71174L72.4225 9.08841C63.4471 9.64496 54.6202 11.6463 46.2824 15.0152L41.3711 16.9996"
                                stroke="#c16c4d"
                                strokeWidth="4"
                                strokeLinecap="round"
                                className={`transition-all duration-[1400ms] ease-out [stroke-dasharray:400] group-hover:[stroke-dashoffset:0] ${isVisible ? '[stroke-dashoffset:0]' : '[stroke-dashoffset:400]'
                                    }`}
                            />
                        </svg>
                    </span>
                    {" "}drink-bar jest wyjątkowy?
                </h2>
            </div>

            {/* Block 1: Text Left | Image Right */}
            <div className="flex flex-col md:flex-row h-auto md:h-[700px] w-full overflow-hidden">
                <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:px-32 relative bg-brand-cream border-r md:border-r-0">
                    <div className="max-w-xl mx-auto w-full relative z-10">
                        <h3 className="text-3xl lg:text-4xl font-semibold mb-8 font-montserrat tracking-tight relative text-black">
                            Wysokiej jakości składniki
                        </h3>
                        <p className="text-brand-text-light font-normal text-[18px] leading-relaxed font-sans">
                            Wierzymy, że sekret doskonałego koktajlu tkwi w detalach. Pracujemy wyłącznie na alkoholach marek premium oraz świeżych owocach, które kupujemy od sprawdzonych dostawców.
                        </p>
                    </div>

                    {/* Martini Icon Bottom Right */}
                    <div className="absolute bottom-12 right-12 w-[180px] h-[180px] hidden lg:block z-10">
                        <svg width="100%" height="100%" viewBox="0 0 266 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_40_669)">
                                <path d="M102.813 162.213C125.814 185.214 161.729 186.592 183.031 165.29C204.332 143.989 202.954 108.074 179.953 85.0727C156.952 62.0713 121.037 60.6935 99.7353 81.9951C78.4337 103.297 79.8115 139.211 102.813 162.213Z" fill="#c16c4d" />
                                <path d="M128.49 62.3049C155.041 85.326 179.827 110.112 202.848 136.663C181.658 150.772 152.939 154.704 116.692 148.461C110.449 112.214 114.382 83.4952 128.49 62.3049Z" stroke="#332f2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M116.692 148.461C106.99 161.704 96.8419 171.852 86.2468 178.906" stroke="#332f2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M66.3294 158.989C76.9602 174.915 90.2385 188.193 106.164 198.824" stroke="#332f2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_40_669">
                                    <rect width="187.783" height="187.201" fill="white" transform="translate(132.371) rotate(45)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="w-full md:w-1/2 relative h-[400px] md:h-full">
                    <Image
                        src="/images/IMG1.png"
                        alt="Świeże owoce i jakościowe półprodukty używane przez barmanów Moment Drink Bar do przygotowania drinków"
                        fill
                        className="object-cover"
                        priority
                        quality={90}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>

            {/* Block 2: Image Left | Text Right */}
            <div className="flex flex-col-reverse md:flex-row h-auto md:h-[700px] w-full overflow-hidden border-t border-brand-text/10">
                <div className="w-full md:w-1/2 relative h-[400px] md:h-full">
                    <Image
                        src="/images/IMG2.png"
                        alt="Profesjonalnie podane mocktaile bezalkoholowe - alternatywa na wesele dla kierowców i niepijących"
                        fill
                        className="object-cover"
                        quality={90}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:px-32 relative bg-brand-cream border-l md:border-l-0">
                    <div className="max-w-xl mx-auto w-full relative z-10">
                        <h3 className="text-3xl lg:text-4xl font-semibold mb-8 font-montserrat tracking-tight text-black">
                            Smak nikogo nie wyklucza
                        </h3>
                        <p className="text-brand-text-light font-normal text-[18px] leading-relaxed font-sans">
                            Szanujemy wybory Twoich gości. Niezależnie od tego, czy ktoś jest kierowcą, czy po prostu nie pije alkoholu, zasługuje na coś więcej niż wodę z cytryną.
                            <br /><br />
                            Nasza oferta obejmuje sekcję mocktaili (drinków virgin). Gwarantujemy, że bezalkoholowe Mojito czy Pornstar Martini smakują u nas równie obłędnie, co oryginały.
                        </p>
                    </div>
                    {/* Martini Icon Bottom Left (New mirrored version) */}
                    <div className="absolute bottom-12 left-12 w-[180px] h-[180px] hidden lg:block z-10">
                        <svg width="100%" height="100%" viewBox="0 0 266 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_40_669_2)">
                                <path d="M162.213 162.34C185.214 139.339 186.592 103.424 165.29 82.1226C143.989 60.8209 108.074 62.1987 85.0727 85.2001C62.0713 108.201 60.6935 144.116 81.9951 165.418C103.297 186.719 139.211 185.342 162.213 162.34Z" fill="#c16c4d" />
                                <path d="M62.3048 136.663C85.3259 110.112 110.112 85.3259 136.663 62.3048C150.771 83.4951 154.704 112.214 148.461 148.461C112.214 154.704 83.4951 150.772 62.3048 136.663Z" stroke="#332f2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M148.461 148.461C161.704 158.163 171.852 168.311 178.906 178.906" stroke="#332f2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M158.989 198.824C174.915 188.193 188.193 174.915 198.824 158.989" stroke="#332f2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M112.563 137.514C100.866 136.105 95.2895 127.9 97.1067 121.956C98.924 116.012 107.53 114.31 118.015 119.682C128.501 125.055 134.683 131.278 132.866 137.222C131.049 143.166 123.049 142.886 112.563 137.514Z" stroke="#332f2e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M134.015 120.241L109.284 95.3481" stroke="#332f2e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M109.347 108.366C110.59 110.913 114.893 110.062 115.498 108.08C116.104 106.099 113.013 102.988 110.558 104.404C108.104 105.82 107.498 107.801 109.347 108.366Z" stroke="#332f2e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M133.952 107.223C135.195 109.769 139.498 108.918 140.104 106.937C140.709 104.956 137.618 101.844 135.164 103.26C132.71 104.676 132.104 106.658 133.952 107.223Z" stroke="#332f2e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_40_669_2">
                                    <rect width="187.783" height="187.201" fill="white" transform="translate(0 132.782) rotate(-45)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Block 3: Text Left | Image Right */}
            <div className="flex flex-col md:flex-row h-auto md:h-[700px] w-full overflow-hidden border-t border-brand-text/10">
                <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:px-32 relative bg-brand-cream border-r md:border-r-0">
                    <div className="max-w-xl mx-auto w-full relative z-10">
                        <h3 className="text-3xl lg:text-4xl font-semibold mb-8 font-montserrat tracking-tight text-black">
                            Bar to przede wszystkim ludzie
                        </h3>
                        <p className="text-brand-text-light font-normal text-[18px] leading-relaxed font-sans">
                            Nawet najlepszy alkohol potrzebuje odpowiedniej oprawy.
                            Nasz zespół to zgrana ekipa barmanów, którzy tworzą niepowtarzalną atmosferę przy barze.
                            <br />
                            Nie jesteśmy tu tylko &quot;do pracy&quot; – jesteśmy tu dla Was i Waszych gości.
                            Łączymy barmańską wiedzę z wysoką kulturą osobistą i dużą dawką uśmiechu.
                        </p>
                    </div>
                    {/* Martini Icon Bottom Right */}
                    <div className="absolute bottom-12 right-12 w-[180px] h-[180px] hidden lg:block z-10">
                        <svg width="100%" height="100%" viewBox="0 0 266 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_40_669_3)">
                                <path d="M102.813 162.213C125.814 185.214 161.729 186.592 183.031 165.29C204.332 143.989 202.954 108.074 179.953 85.0727C156.952 62.0713 121.037 60.6935 99.7353 81.9951C78.4337 103.297 79.8115 139.211 102.813 162.213Z" fill="#c16c4d" />
                                <path d="M128.49 62.3049C155.041 85.326 179.827 110.112 202.848 136.663C181.658 150.772 152.939 154.704 116.692 148.461C110.449 112.214 114.382 83.4952 128.49 62.3049Z" stroke="#332f2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M116.692 148.461C106.99 161.704 96.8419 171.852 86.2468 178.906" stroke="#332f2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M66.3294 158.989C76.9602 174.915 90.2385 188.193 106.164 198.824" stroke="#332f2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_40_669_3">
                                    <rect width="187.783" height="187.201" fill="white" transform="translate(132.371) rotate(45)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="w-full md:w-1/2 relative h-[400px] md:h-full">
                    <Image
                        src="/images/IMG3.png"
                        alt="Uśmiechnięty zespół profesjonalnych barmanów obsługujących wesele - Moment Drink Bar"
                        fill
                        className="object-cover"
                        quality={90}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>
        </section>
    );
}
