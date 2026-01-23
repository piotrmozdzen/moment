"use client";

import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";

export function ContactPageForm() {
    return (
        <main className="bg-[#c16c4d] relative overflow-x-hidden min-h-screen">

            {/* Top Spacer to extend beige background under navbar */}
            <div className="h-16 md:h-24 bg-brand-cream w-full"></div>

            {/* Organic Wave Divider - Transition to Blue */}
            <div className="relative w-full leading-[0] transform rotate-180 bg-brand-cream">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px] fill-[#c16c4d]"
                >
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>

            {/* Content Section with Blue Background */}
            <div className="bg-[#c16c4d] pb-24 px-8 pt-8 md:pt-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">

                    {/* Left Side: Title & Contact Info */}
                    <div className="md:w-[40%]">
                        <h1 className="text-4xl md:text-5xl font-semibold text-brand-cream mb-4 font-montserrat tracking-tight leading-tight">
                            Masz pytania?
                        </h1>
                        <p className="text-brand-cream/90 mb-10 max-w-sm leading-relaxed font-sans font-medium">
                            Skontaktuj się z nami przez formularz albo bezpośrednio na adres:{' '}
                            <a
                                href="mailto:moment.drinkbar@gmail.com"
                                className="text-brand-cream font-bold hover:underline transition-all underline"
                            >
                                moment.drinkbar@gmail.com
                            </a>
                        </p>
                    </div>

                    {/* Right Side: Form */}
                    <div className="md:w-[60%]">
                        <form className="space-y-5">

                            {/* Email */}
                            <div className="border-b border-brand-cream pb-2">
                                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1">
                                    E-mail*
                                </label>
                                <input
                                    type="email"
                                    className="w-full bg-transparent border-none p-2 focus:ring-0 text-brand-cream font-bold placeholder:text-brand-cream/30 placeholder:text-[10px]"
                                    placeholder="Email"
                                />
                            </div>

                            {/* Name Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="border-b border-brand-cream pb-2">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1">
                                        Imię*
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-none p-2 focus:ring-0 text-brand-cream font-bold placeholder:text-brand-cream/30 placeholder:text-[10px]"
                                        placeholder="Imię"
                                    />
                                </div>
                                <div className="border-b border-brand-cream pb-2">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1">
                                        Nazwisko*
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-none p-2 focus:ring-0 text-brand-cream font-bold placeholder:text-brand-cream/30 placeholder:text-[10px]"
                                        placeholder="Nazwisko"
                                    />
                                </div>
                            </div>

                            {/* City / Phone Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="border-b border-brand-cream pb-2">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1">
                                        Miasto*
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-none p-2 focus:ring-0 text-brand-cream font-bold placeholder:text-brand-cream/30 placeholder:text-[10px]"
                                        placeholder="Miasto"
                                    />
                                </div>
                                <div className="border-b border-brand-cream pb-2">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1">
                                        Numer telefonu*
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full bg-transparent border-none p-2 focus:ring-0 text-brand-cream font-bold placeholder:text-brand-cream/30 placeholder:text-[10px]"
                                        placeholder="Telefon"
                                    />
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="border-b border-brand-cream pb-2">
                                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1">
                                    Wiadomość
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-transparent border-none p-2 focus:ring-0 text-brand-cream font-bold placeholder:text-brand-cream/30 placeholder:text-[10px] resize-none"
                                    placeholder="Wiadomość"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="bg-brand-cream text-brand-blue font-bold uppercase tracking-[0.2em] text-xs py-4 px-12 rounded-full hover:bg-white transition-all duration-300 hover:scale-[1.01] shadow-lg"
                                >
                                    Wyślij
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    )
}
