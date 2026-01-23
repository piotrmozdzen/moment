"use client";

import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-brand-cream pt-24 pb-12 border-t border-slate-900/10 px-8 md:px-16 font-sans">
            <div className="max-w-[1920px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between min-h-[250px] text-[16px] text-brand-text-light mb-6">

                    {/* Column 1: Polityka */}
                    <div className="flex flex-col py-6 md:py-2">
                        <h4 className="font-bold uppercase tracking-[0.2em] mb-4 text-xs md:text-sm">
                            Polityka
                        </h4>
                        <ul className="space-y-3 font-medium text-sm md:text-base text-brand-text-light">
                            <li><Link href="/privacy-policy" className="hover:opacity-60 transition-opacity">Polityka prywatności</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Linki */}
                    <div className="flex flex-col py-6 md:py-2">
                        <h4 className="font-bold uppercase tracking-[0.2em] mb-4 text-xs md:text-sm">
                            Linki
                        </h4>
                        <ul className="space-y-3 font-medium text-sm md:text-base text-brand-text-light">
                            <li><Link href="/oferta" className="hover:opacity-60 transition-opacity">Oferta</Link></li>
                            <li><Link href="/baza-koktajli" className="hover:opacity-60 transition-opacity">Baza koktajli</Link></li>
                            <li><Link href="/realizacje" className="hover:opacity-60 transition-opacity">Realizacje</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Kontakt */}
                    <div className="flex flex-col items-start md:items-start w-full md:max-w-xs py-6 md:py-2">
                        <h4 className="font-bold uppercase tracking-[0.2em] mb-4 text-xs md:text-sm">
                            Kontakt
                        </h4>
                        <div className="space-y-3 font-medium text-sm md:text-base text-brand-text-light">
                            <p><a href="mailto:moment.drinkbar@gmail.com" className="hover:opacity-60 transition-opacity">moment.drinkbar@gmail.com</a></p>
                            <p className="leading-relaxed">
                                Lublin, Polska
                            </p>
                            <p><a href="tel:+48797812612" className="hover:opacity-60 transition-opacity">+48 797 812 612</a></p>
                        </div>

                        <div className="flex gap-4 pt-8">
                            <Link href="#" className="text-brand-text hover:text-brand-text-light transition-colors">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="text-brand-text hover:text-brand-text-light transition-colors">
                                <Instagram size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Center: Copyright */}
                <div className="flex justify-center items-center pt-4 border-t border-brand-text/5">
                    <div className="font-bold uppercase tracking-[0.3em] text-[14px] text-brand-text-light">
                        {new Date().getFullYear()} © MOMENT DRINK BAR
                    </div>
                </div>
            </div>
        </footer>
    );
}
