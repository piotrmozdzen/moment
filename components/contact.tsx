"use client";

import { Instagram, Facebook } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

export function ContactSection() {
    return (
        <section id="contact" className="bg-[#c16c4d] py-24 md:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">

                    {/* Left Side: Header */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-cream uppercase tracking-tight font-[family-name:var(--font-outfit)]">
                                Zostańmy <br /> w kontakcie
                            </h2>
                            <p className="font-[family-name:var(--font-caveat)] text-2xl md:text-3xl text-brand-cream/90 mt-2 lowercase">
                                zapytaj nas o cokolwiek
                            </p>
                        </div>
                        <p className="text-brand-cream/80 font-medium max-w-sm leading-relaxed">
                            Jesteśmy tylko wiadomość lub telefon stąd — napisz do nas, aby zarezerwować termin lub dowiedzieć się więcej o naszej ofercie.
                        </p>
                    </div>

                    {/* Right Side: Contact Info Info List */}
                    <div className="flex flex-col">

                        {/* Row: Email */}
                        <div className="group border-t border-brand-cream/20 py-8 first:border-t-0 lg:first:border-t">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cream/60 font-[family-name:var(--font-outfit)]">
                                    Adres E-mail
                                </span>
                                <div className="space-y-1">
                                    <a href="mailto:kontakt@momentbar.pl" className="block text-brand-cream font-bold hover:text-brand-cream/80 transition-colors">
                                        kontakt@momentbar.pl
                                    </a>
                                    <p className="text-xs text-brand-cream/60">
                                        Współpraca i zapytania ofertowe
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Row: Phone */}
                        <div className="group border-t border-brand-cream/20 py-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cream/60 font-[family-name:var(--font-outfit)]">
                                    Numer telefonu
                                </span>
                                <div className="space-y-2">
                                    <a href="tel:+48123456789" className="block text-brand-cream font-bold hover:text-brand-cream/80 transition-colors">
                                        +48 123 456 789
                                    </a>
                                    <p className="text-xs text-brand-cream/60 leading-relaxed">
                                        Dostępni jesteśmy PN-PT: 9:00 - 18:00<br />
                                        Weekend: Eventy (prosimy o wiadomość)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Row: Address */}
                        <div className="group border-t border-brand-cream/20 py-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cream/60 font-[family-name:var(--font-outfit)]">
                                    Obszar działania
                                </span>
                                <div className="space-y-1">
                                    <p className="text-brand-cream font-bold">
                                        Cała Polska
                                    </p>
                                    <p className="text-xs text-brand-cream/60">
                                        Głównie Małopolska i Śląsk
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Row: Social */}
                        <div className="group border-t border-b border-brand-cream/20 py-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cream/60 font-[family-name:var(--font-outfit)]">
                                    Social Media
                                </span>
                                <div className="flex gap-6 items-center">
                                    <Link href={siteConfig.links.instagram || "#"} className="flex items-center gap-2 text-brand-cream font-bold hover:text-brand-cream/80 transition-colors">
                                        <span>Instagram</span>
                                    </Link>
                                    <Link href={siteConfig.links.facebook || "#"} className="flex items-center gap-2 text-brand-cream font-bold hover:text-brand-cream/80 transition-colors">
                                        <span>Facebook</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
