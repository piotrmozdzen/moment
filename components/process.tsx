"use client";



export function Process() {
    return (
        <section className="relative bg-brand-blue overflow-hidden">
            {/* Beige Spacer above the wave */}
            <div className="h-32 bg-brand-cream w-full" />

            {/* Wavy Background Divider */}
            <div className="relative w-full overflow-hidden leading-[0] transform rotate-180 bg-brand-cream">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-[calc(100%+1.3px)] h-[120px] fill-brand-blue"
                >
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-8 py-24 relative z-10">
                <div className="flex flex-col lg:flex-row pb-24">

                    {/* Left Column: Label */}
                    <div className="w-full lg:w-1/4 mb-16 lg:mb-0">
                        <h2 className="text-lg font-bold uppercase tracking-[0.3em] text-brand-cream font-montserrat [writing-mode:vertical-lr] rotate-180">
                            Jak pracujemy?
                        </h2>
                    </div>

                    {/* Right Column: Staggered Content */}
                    <div className="w-full lg:w-3/4 lg:pl-24 lg:border-l border-brand-cream/20 space-y-0 relative">

                        {/* Block 1: Left */}
                        <div className="flex justify-start relative group">
                            <div className="w-full md:w-[75%] z-10">
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                                        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="240 300" className="text-brand-cream/30" />
                                        </svg>
                                        <span className="text-lg font-bold font-montserrat text-brand-cream/60">01</span>
                                    </div>
                                    <h3 className="text-xl font-bold uppercase font-montserrat text-brand-cream tracking-wide">
                                        Co zapewniamy:
                                    </h3>
                                </div>
                                <p className="text-brand-cream/90 leading-relaxed max-w-lg font-sans">
                                    <strong>Zespół:</strong> Dwóch barmanów, pełne zaplecze (bar, szkło, sprzęt) oraz najwyższej jakości świeże składniki i syropy.
                                </p>
                            </div>
                        </div>

                        {/* Marker Path 1 -> 2: Shifted slightly Left */}
                        <div className="relative h-48 w-full flex justify-center md:justify-start md:pl-20">
                            <div className="w-64 h-full hidden md:block pointer-events-none opacity-30">
                                <svg className="w-full h-full overflow-visible" viewBox="0 0 200 100" fill="none">
                                    <path
                                        d="M40,10 C150,10 50,90 160,90"
                                        stroke="#FFFFF3"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Block 2: Right */}
                        <div className="flex justify-end relative group">
                            <div className="w-full md:w-[75%] z-10">
                                <div className="group text-right md:text-left">
                                    <div className="flex items-center justify-end md:justify-start gap-6 mb-6">
                                        <div className="relative w-14 h-14 flex items-center justify-center shrink-0 order-2 md:order-1">
                                            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                                                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="240 300" className="text-brand-cream/30" />
                                            </svg>
                                            <span className="text-lg font-bold font-montserrat text-brand-cream/60">02</span>
                                        </div>
                                        <h3 className="text-xl font-bold uppercase font-montserrat text-brand-cream tracking-wide order-1 md:order-2">
                                            Harmonogram:
                                        </h3>
                                    </div>
                                    <div className="flex flex-col items-end md:items-start">
                                        <p className="text-brand-cream/90 leading-relaxed max-w-lg font-sans">
                                            Montaż <strong>2 godziny wcześniej</strong>. Serwujemy od pierwszego tańca do <strong>01:00</strong>. Chcecie dłużej? Żaden problem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Marker Path 2 -> 3: Centered (Git) */}
                        <div className="relative h-48 w-full flex justify-center">
                            <div className="w-64 h-full hidden md:block pointer-events-none opacity-30">
                                <svg className="w-full h-full overflow-visible" viewBox="0 0 200 100" fill="none">
                                    <path
                                        d="M160,10 C50,10 150,90 40,90"
                                        stroke="#FFFFF3"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Block 3: Left */}
                        <div className="flex justify-start relative group">
                            <div className="w-full md:w-[75%] z-10">
                                <div className="group">
                                    <div className="flex items-center gap-6 mb-6">
                                        <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                                            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                                                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="240 300" className="text-brand-cream/30" />
                                            </svg>
                                            <span className="text-lg font-bold font-montserrat text-brand-cream/60">03</span>
                                        </div>
                                        <h3 className="text-xl font-bold uppercase font-montserrat text-brand-cream tracking-wide">
                                            Czego potrzebujemy?
                                        </h3>
                                    </div>
                                    <p className="text-brand-cream/90 leading-relaxed max-w-lg font-sans">
                                        Od Was tylko 3 rzeczy: <strong>6–12 butelek wódki</strong>, miejsce dla nas przy stole i ustalenie z salą kwestii mycia szkła.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Marker Path 3 -> 4: Shifted slightly Left */}
                        <div className="relative h-48 w-full flex justify-center md:justify-start md:pl-32">
                            <div className="w-64 h-full hidden md:block pointer-events-none opacity-30">
                                <svg className="w-full h-full overflow-visible" viewBox="0 0 200 100" fill="none">
                                    <path
                                        d="M40,10 C150,10 50,90 160,90"
                                        stroke="#FFFFF3"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Block 4: Right */}
                        <div className="flex justify-end relative group">
                            <div className="w-full md:w-[75%] z-10">
                                <div className="group text-right md:text-left">
                                    <div className="flex items-center justify-end md:justify-start gap-6 mb-6">
                                        <div className="relative w-14 h-14 flex items-center justify-center shrink-0 order-2 md:order-1">
                                            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                                                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="240 300" className="text-brand-cream/30" />
                                            </svg>
                                            <span className="text-lg font-bold font-montserrat text-brand-cream/60">04</span>
                                        </div>
                                        <h3 className="text-xl font-bold uppercase font-montserrat text-brand-cream tracking-wide order-1 md:order-2">
                                            Chcecie bawić się dłużej?
                                        </h3>
                                    </div>
                                    <div className="flex flex-col items-end md:items-start">
                                        <p className="text-brand-cream/90 leading-relaxed max-w-lg italic font-medium">
                                            Przedłużenie serwisu to koszt zaledwie <strong>1/8 całkowitej ceny</strong> za każdą dodatkową godzinę wspólnej zabawy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
