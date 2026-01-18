"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function InquiryForm() {
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        companyName: "",
        city: "",
        phone: "",
        eventType: "",
        interests: {
            cocktails: false,
            mocktails: false,
            onTap: false
        }
    });

    return (
        <section id="inquiry" className="bg-[#B8CEF2] py-24 md:py-32 border-b border-slate-900/10 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">

                    {/* Left Side: Content */}
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 uppercase tracking-tight font-montserrat leading-[1.1]">
                                Skontaktuj się <br /> z nami
                            </h2>
                            <p className="font-caveat text-2xl md:text-3xl text-slate-800">
                                porozmawiajmy
                            </p>
                        </div>

                        <div className="space-y-6 text-slate-800/80 font-medium max-w-sm leading-relaxed text-base md:text-lg font-sans">
                            <p>
                                Chcesz uzyskać więcej szczegółowych informacji na temat współpracy?
                            </p>
                            <p>
                                Skontaktuj się z nami przez formularz albo bezpośrednio na adres <a href="mailto:moment.drinkbar@gmail.com" className="text-slate-900 border-b border-slate-900/20 hover:border-slate-900 transition-colors">moment.drinkbar@gmail.com</a>.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="flex flex-col space-y-8">
                        <form className="space-y-6">
                            {/* Email */}
                            <div className="border-b border-slate-900/40 pb-2">
                                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-900/60 mb-1">
                                    E-mail*
                                </label>
                                <input
                                    type="email"
                                    className="w-full bg-white border-none p-2 focus:ring-0 text-slate-900 font-bold placeholder:text-slate-900/40"
                                    placeholder="Email"
                                />
                            </div>

                            {/* Name Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="border-b border-slate-900/40 pb-2">
                                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-900/60 mb-1">
                                        Imię*
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-white border-none p-2 focus:ring-0 text-slate-900 font-bold placeholder:text-slate-900/40"
                                        placeholder="Imię"
                                    />
                                </div>
                                <div className="border-b border-slate-900/40 pb-2">
                                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-900/60 mb-1">
                                        Nazwisko*
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-white border-none p-2 focus:ring-0 text-slate-900 font-bold placeholder:text-slate-900/40"
                                        placeholder="Nazwisko"
                                    />
                                </div>
                            </div>

                            {/* City / Phone Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="border-b border-slate-900/40 pb-2">
                                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-900/60 mb-1">
                                        Miasto*
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-white border-none p-2 focus:ring-0 text-slate-900 font-bold placeholder:text-slate-900/40"
                                        placeholder="Miasto"
                                    />
                                </div>
                                <div className="border-b border-slate-900/40 pb-2">
                                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-900/60 mb-1">
                                        Numer telefonu*
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full bg-white border-none p-2 focus:ring-0 text-slate-900 font-bold placeholder:text-slate-900/40"
                                        placeholder="Telefon"
                                    />
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="border-b border-slate-900/40 pb-2">
                                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-900/60 mb-1">
                                    Wiadomość
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-white border-none p-2 focus:ring-0 text-slate-900 font-bold placeholder:text-slate-900/40 resize-none"
                                    placeholder="Wiadomość"
                                />
                            </div>

                            {/* Interests (Checkboxes) */}
                            <div className="space-y-3 pt-4">
                                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-900/60">
                                    Interesuje mnie:
                                </label>
                                <div className="flex flex-wrap gap-6">
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input type="checkbox" className="w-4 h-4 border-slate-900/40 rounded focus:ring-slate-900 text-slate-900 transition-all" />
                                        <span className="text-sm font-bold text-slate-900/80 group-hover:text-slate-900">Wesele</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input type="checkbox" className="w-4 h-4 border-slate-900/40 rounded focus:ring-slate-900 text-slate-900 transition-all" />
                                        <span className="text-sm font-bold text-slate-900/80 group-hover:text-slate-900">Inne</span>
                                    </label>
                                </div>
                            </div>



                            {/* Submit Button */}
                            <div className="pt-8">
                                <button
                                    type="submit"
                                    className="bg-slate-900 text-white font-bold uppercase tracking-widest text-xs py-4 px-10 rounded-full hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 font-montserrat"
                                >
                                    Wyślij
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
