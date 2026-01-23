"use client";

import Image from "next/image";

export function Mixologist() {
    return (
        <section className="bg-brand-cream py-24 px-8 pt-32">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">

                {/* Left Side: Large Bartender Image */}
                <div className="w-full md:w-1/2 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="/images/lou.jpg"
                        alt="Ekspert Miksologii Filip"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-1/2">
                    <h3 className="text-4xl md:text-5xl text-brand-text font-caveat mb-8">
                        Poznaj Filipa
                    </h3>

                    <div className="space-y-6 text-brand-text-light leading-relaxed mb-12">
                        <p>
                            Nasze koktajle powstają w oparciu o pasję i doświadczenie. Każda receptura to wynik współpracy z Filipem, który dba o to, by napoje były przygotowane zgodnie ze sztuką barmańską.
                        </p>
                        <p>
                            Praktyczne doświadczenie pozwala nam tworzyć kompozycje o zbalansowanym smaku, które są idealnym uzupełnieniem każdej wyjątkowej chwili.
                        </p>
                    </div>

                    {/* Ingredients Icons */}
                    <div className="flex items-center gap-6">
                        <div className="relative w-16 h-16">
                            <Image src="/blueberry.png" alt="Blueberry" fill className="object-contain" />
                        </div>
                        <div className="relative w-16 h-16">
                            <Image src="/cirtus.png" alt="Lemon" fill className="object-contain" />
                        </div>
                        <div className="relative w-16 h-16">
                            <Image src="/strawberry.png" alt="Strawberry" fill className="object-contain" />
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
