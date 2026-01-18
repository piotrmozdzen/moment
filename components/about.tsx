"use client";

import Image from "next/image";

export function About() {
    return (
        <section>
            {/* Main Title Section */}
            <div className="bg-brand-cream py-16 text-center">
                <h2 className="text-[1.5rem] font-semibold leading-[1.3] tracking-tight text-slate-900 font-[family-name:var(--font-montserrat)] uppercase">
                    Dlaczego powinieneś skorzystać z naszych usług?
                </h2>
            </div>

            {/* Block 1: Text Left | Image Right */}
            <div className="flex flex-col md:flex-row h-auto md:h-[700px] w-full overflow-hidden border-t border-slate-900/10">
                <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:px-32 relative bg-brand-cream border-r md:border-r-0">
                    <div className="max-w-xl mx-auto w-full relative z-10">
                        <h3 className="text-2xl font-bold mb-8 font-[family-name:var(--font-montserrat)] uppercase tracking-wide">
                            WYSOKIEJ JAKOŚCI SKŁADNIKI
                        </h3>
                        <p className="text-slate-700 font-normal text-[18px] leading-relaxed">
                            Wierzymy, że sekret doskonałego koktajlu tkwi w detalach. Pracujemy wyłącznie na alkoholach marek premium oraz świeżych owocach, które kupujemy od sprawdzonych dostawców.
                        </p>
                    </div>

                    {/* Martini Icon Bottom Right */}
                    <div className="absolute bottom-12 right-12 w-[180px] h-[180px] hidden lg:block z-10">
                        <svg width="100%" height="100%" viewBox="0 0 266 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_40_669)">
                                <path d="M102.813 162.213C125.814 185.214 161.729 186.592 183.031 165.29C204.332 143.989 202.954 108.074 179.953 85.0727C156.952 62.0713 121.037 60.6935 99.7353 81.9951C78.4337 103.297 79.8115 139.211 102.813 162.213Z" fill="#B8CEF2" />
                                <path d="M128.49 62.3049C155.041 85.326 179.827 110.112 202.848 136.663C181.658 150.772 152.939 154.704 116.692 148.461C110.449 112.214 114.382 83.4952 128.49 62.3049Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M116.692 148.461C106.99 161.704 96.8419 171.852 86.2468 178.906" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M66.3294 158.989C76.9602 174.915 90.2385 188.193 106.164 198.824" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                        alt="Wysokiej jakości składniki - koktajl z malinami"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Block 2: Image Left | Text Right */}
            <div className="flex flex-col-reverse md:flex-row h-auto md:h-[700px] w-full overflow-hidden border-t border-slate-900/10">
                <div className="w-full md:w-1/2 relative h-[400px] md:h-full">
                    <Image
                        src="/images/IMG2.png"
                        alt="Smak nikogo nie wyklucza - bezalkoholowe drinki"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:px-32 relative bg-brand-cream border-l md:border-l-0">
                    <div className="max-w-xl mx-auto w-full relative z-10">
                        <h3 className="text-2xl font-bold mb-8 font-[family-name:var(--font-montserrat)] uppercase tracking-wide">
                            SMAK NIKOGO NIE WYKLUCZA
                        </h3>
                        <p className="text-slate-700 font-normal text-[18px] leading-relaxed">
                            Szanujemy wybory Twoich gości. Niezależnie od tego, czy ktoś jest kierowcą, czy po prostu nie pije alkoholu, zasługuje na coś więcej niż wodę z cytryną.
                            <br /><br />
                            Nasza oferta obejmuje sekcję mocktaili (drinków virgin). Gwarantujemy, że bezalkoholowe Mojito czy Pornstar Martini smakują u nas równie obłędnie, co oryginały.
                        </p>
                    </div>
                    {/* Martini Icon Bottom Left (New mirrored version) */}
                    <div className="absolute bottom-12 left-12 w-[180px] h-[180px] hidden lg:block z-10">
                        <svg width="100%" height="100%" viewBox="0 0 266 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_40_669_2)">
                                <path d="M162.213 162.34C185.214 139.339 186.592 103.424 165.29 82.1226C143.989 60.8209 108.074 62.1987 85.0727 85.2001C62.0713 108.201 60.6935 144.116 81.9951 165.418C103.297 186.719 139.211 185.342 162.213 162.34Z" fill="#B8CEF2" />
                                <path d="M62.3048 136.663C85.3259 110.112 110.112 85.3259 136.663 62.3048C150.771 83.4951 154.704 112.214 148.461 148.461C112.214 154.704 83.4951 150.772 62.3048 136.663Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M148.461 148.461C161.704 158.163 171.852 168.311 178.906 178.906" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M158.989 198.824C174.915 188.193 188.193 174.915 198.824 158.989" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M112.563 137.514C100.866 136.105 95.2895 127.9 97.1067 121.956C98.924 116.012 107.53 114.31 118.015 119.682C128.501 125.055 134.683 131.278 132.866 137.222C131.049 143.166 123.049 142.886 112.563 137.514Z" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M134.015 120.241L109.284 95.3481" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M109.347 108.366C110.59 110.913 114.893 110.062 115.498 108.08C116.104 106.099 113.013 102.988 110.558 104.404C108.104 105.82 107.498 107.801 109.347 108.366Z" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M133.952 107.223C135.195 109.769 139.498 108.918 140.104 106.937C140.709 104.956 137.618 101.844 135.164 103.26C132.71 104.676 132.104 106.658 133.952 107.223Z" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
            <div className="flex flex-col md:flex-row h-auto md:h-[700px] w-full overflow-hidden border-t border-b border-slate-900/10">
                <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:px-32 relative bg-brand-cream border-r md:border-r-0">
                    <div className="max-w-xl mx-auto w-full relative z-10">
                        <h3 className="text-2xl font-bold mb-8 font-[family-name:var(--font-montserrat)] uppercase tracking-wide">
                            Bar to przede wszystkim ludzie
                        </h3>
                        <p className="text-slate-700 font-normal text-[18px] leading-relaxed">
                            Nawet najlepszy alkohol potrzebuje odpowiedniej oprawy.
                            Nasz zespół to zgrana ekipa barmanów, którzy tworzą niepowtarzalną atmosferę przy barze.
                            <br />
                            Nie jesteśmy tu tylko "do pracy" – jesteśmy tu dla Was i Waszych gości.
                            Łączymy barmańską wiedzę z wysoką kulturą osobistą i dużą dawką uśmiechu.
                        </p>
                    </div>
                    {/* Martini Icon Bottom Right */}
                    <div className="absolute bottom-12 right-12 w-[180px] h-[180px] hidden lg:block z-10">
                        <svg width="100%" height="100%" viewBox="0 0 266 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_40_669_3)">
                                <path d="M102.813 162.213C125.814 185.214 161.729 186.592 183.031 165.29C204.332 143.989 202.954 108.074 179.953 85.0727C156.952 62.0713 121.037 60.6935 99.7353 81.9951C78.4337 103.297 79.8115 139.211 102.813 162.213Z" fill="#B8CEF2" />
                                <path d="M128.49 62.3049C155.041 85.326 179.827 110.112 202.848 136.663C181.658 150.772 152.939 154.704 116.692 148.461C110.449 112.214 114.382 83.4952 128.49 62.3049Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M116.692 148.461C106.99 161.704 96.8419 171.852 86.2468 178.906" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M66.3294 158.989C76.9602 174.915 90.2385 188.193 106.164 198.824" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                        alt="Bar to przede wszystkim ludzie - barmani"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
