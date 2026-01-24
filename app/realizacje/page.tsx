import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
    title: "Galeria i Realizacje - Barmani w Akcji",
    description: "Zobacz jak pracujemy! Galeria zdjęć z naszych realizacji na weselach i imprezach. Poczuj atmosferę i zobacz nasze wyśmienite koktajle.",
};

export default function RealizacjePage() {
    return (
        <main className="h-[calc(100vh-6rem)] bg-[#FDFDF5] px-8 pt-16 md:p-0 relative overflow-hidden flex flex-col items-center md:justify-center">

            {/* Central Content */}
            <div className="max-w-3xl w-full text-center space-y-12">
                <div className="space-y-6">
                    <p className="font-caveat text-3xl md:text-5xl text-[#c16c4d] leading-relaxed">
                        Nasze portfolio rośnie z każdym wydarzeniem.<br />
                        Wkrótce pojawią się tutaj zdjęcia z naszych najnowszych realizacji!
                    </p>

                    <div className="pt-8">
                        {/* Decorative separator */}
                        <div className="w-16 h-0.5 bg-[#c16c4d]/30 mx-auto mb-8"></div>

                        <p className="text-xs uppercase tracking-[0.3em] text-[#5d5552] font-bold opacity-50">
                            Bądź na bieżąco na naszym Instagramie
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
