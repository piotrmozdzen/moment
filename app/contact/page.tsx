"use client";

import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#FDFDF5] flex flex-col items-center py-12 md:py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
            <div className="max-w-7xl w-full relative mt-8 md:mt-16">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start mt-8 md:mt-16">

                    {/* Left Column: Content (Updated from Home Page) */}
                    <div className="space-y-8 max-w-lg">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black leading-[1.1] font-montserrat tracking-tight">
                                Kontakt
                            </h1>
                            <p className="font-caveat text-3xl md:text-4xl text-[#c16c4d]">
                                masz pytania?
                            </p>
                        </div>

                        <div className="space-y-8 text-sm md:text-base text-gray-800 leading-relaxed font-sans opacity-95">

                            <p>
                                Skontaktuj się z nami przez formularz albo bezpośrednio na adres <a href="mailto:moment.drinkbar@gmail.com" className="text-[#c16c4d] font-bold hover:underline transition-all">moment.drinkbar@gmail.com</a>.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Form (Inputs copied from Home Page style) */}
                    <div className="w-full">
                        <form className="space-y-8">

                            {/* Email */}
                            <div className="border-b border-black pb-2">
                                <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
                                    E-mail*
                                </label>
                                <input
                                    type="email"
                                    className="w-full bg-transparent border-none p-2 focus:ring-0 text-black font-bold placeholder:text-gray-300 placeholder:text-[10px]"
                                    placeholder="Email"
                                />
                            </div>

                            {/* Name Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="border-b border-black pb-2">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
                                        Imię*
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-none p-2 focus:ring-0 text-black font-bold placeholder:text-gray-300 placeholder:text-[10px]"
                                        placeholder="Imię"
                                    />
                                </div>
                                <div className="border-b border-black pb-2">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
                                        Nazwisko*
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-none p-2 focus:ring-0 text-black font-bold placeholder:text-gray-300 placeholder:text-[10px]"
                                        placeholder="Nazwisko"
                                    />
                                </div>
                            </div>

                            {/* City / Phone Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="border-b border-black pb-2">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
                                        Miasto*
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-none p-2 focus:ring-0 text-black font-bold placeholder:text-gray-300 placeholder:text-[10px]"
                                        placeholder="Miasto"
                                    />
                                </div>
                                <div className="border-b border-black pb-2">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
                                        Numer telefonu*
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full bg-transparent border-none p-2 focus:ring-0 text-black font-bold placeholder:text-gray-300 placeholder:text-[10px]"
                                        placeholder="Telefon"
                                    />
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="border-b border-black pb-2">
                                <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
                                    Wiadomość
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-transparent border-none p-2 focus:ring-0 text-black font-bold placeholder:text-gray-300 placeholder:text-[10px] resize-none"
                                    placeholder="Wiadomość"
                                />
                            </div>

                            {/* Submit Button (Pill Shape) */}
                            <div className="pt-8">
                                <button
                                    type="submit"
                                    className="bg-black text-[#FDFDF5] font-bold uppercase tracking-[0.2em] text-xs py-4 px-12 rounded-full hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
                                >
                                    Wyślij zapytanie
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    );
}
