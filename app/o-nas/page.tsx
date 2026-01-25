import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Kim Jesteśmy - Nasza Pasja do Miksologii",
    description: "Poznaj barmanów z Moment Drink Bar. Nasza historia zaczęła się w Lublinie, a dziś tworzymy wyjątkowe koktajle na wesela i eventy w całej Polsce.",
};

export default function AboutPage() {
    return (
        <section className="min-h-0 md:min-h-screen bg-[#FDFDF5]">
            <div className="flex flex-col md:flex-row min-h-0 md:min-h-screen w-full">
                {/* Left: Content - 50% width */}
                <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 pt-8 md:pt-[10vh] lg:pt-[10vh] flex flex-col justify-start bg-[#FDFDF5]">
                    <div className="max-w-xl mx-auto md:mx-0">

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat uppercase leading-tight mb-8 text-black">
                            Kim jesteśmy
                        </h2>

                        <div className="mb-12">
                            <h3 className="font-caveat text-3xl md:text-4xl text-brand-text-light mb-6">
                                O nas
                            </h3>

                            <p className="text-lg leading-relaxed font-sans text-gray-800">
                                Nasz cel - sprawić, byście Wy i Wasi goście spędzili ten czas w sposób wyjątkowy. Dbamy o to, by każda chwila przy barze była okazją do odkrywania unikalnych smaków, a serwowane przez nas koktajle dopełniały atmosferę Waszej uroczystości – niezależnie od tego, czy to eleganckie wesele, czy luźna imprezka.
                            </p>
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                            <h3 className="font-caveat text-3xl md:text-4xl text-brand-text-light">
                                Jak to się zaczęło?
                            </h3>
                        </div>
                        <p className="text-lg leading-relaxed font-sans text-gray-800 mb-6">
                            Nasza historia ma swoje początki w sercu Lublina. To tam, pracując w lokalnych barach i restauracjach, zdobywaliśmy fundamenty naszej wiedzy. Pewnego dnia narodził się pomysł, by wykorzystać nasze umiejętności na większą skalę i stworzyć markę, która wnosi barową jakość na każdą uroczystość w każde miejsce.
                        </p>
                        <p className="text-lg leading-relaxed font-sans text-gray-800">
                            Wszystko, czego nauczyliśmy się podczas setek nocy za barem, zamknęliśmy w autorskich recepturach. Dziś dzielimy się z Wami tym, co kochamy tworzyć najbardziej - koktajlami z charakterem.
                        </p>
                    </div>
                </div>

                {/* Right: Image - 50% width */}
                <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-screen">
                    <Image
                        src="/images/bartender-about-2.jpg"
                        alt="Doświadczony barman z Lublina przygotowujący autorski drink na imprezę okolicznościową"
                        fill
                        className="object-cover"
                        priority
                        quality={90}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>
        </section >
    );
}
