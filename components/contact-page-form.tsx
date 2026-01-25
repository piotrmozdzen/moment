"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormInputs } from "@/lib/schemas";
import { sendEmail } from "@/actions/send-email";
import { toast } from "sonner";
import { useState } from "react";
import Link from "next/link";

export function ContactPageForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormInputs>({
        resolver: zodResolver(contactFormSchema),
    });

    async function onSubmit(data: ContactFormInputs) {
        setIsSubmitting(true);
        try {
            const result = await sendEmail(data);
            if (result.success) {
                toast.success("Wiadomość została wysłana!");
                reset();
            } else {
                toast.error(result.error || "Coś poszło nie tak.");
            }
        } catch (error) {
            toast.error("Błąd połączenia z serwerem.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className="bg-[#c16c4d] relative overflow-x-hidden min-h-screen">

            {/* Top Spacer to extend beige background under navbar (Hidden on Mobile) */}
            <div className="hidden md:block h-16 md:h-24 bg-brand-cream w-full"></div>

            {/* Organic Wave Divider - Transition to Blue (Hidden on Mobile) */}
            <div className="hidden md:block relative w-full leading-[0] transform rotate-180 bg-brand-cream">
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
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16">

                    {/* Left Side: Title & Contact Info */}
                    <div className="md:w-[40%]">
                        <h1 className="text-4xl md:text-5xl font-semibold text-brand-cream mb-4 font-montserrat tracking-tight leading-tight">
                            Masz pytania?
                        </h1>
                        <p className="text-brand-cream/90 mb-10 max-w-sm leading-relaxed font-sans font-medium">
                            Skontaktuj się z nami przez formularz albo bezpośrednio pod adresem:{' '}
                            <a
                                href="mailto:moment.drinkbar@gmail.com"
                                className="text-brand-cream font-bold transition-all block mb-2"
                            >
                                moment.drinkbar@gmail.com
                            </a>
                            lub telefonicznie:{' '}
                            <a
                                href="tel:+48797812612"
                                className="text-brand-cream font-bold transition-all block"
                            >
                                +48 797 812 612
                            </a>
                        </p>
                    </div>

                    {/* Right Side: Form */}
                    <div className="md:w-[60%]">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                            {/* Email */}
                            <div className="border-b border-brand-cream pb-2">
                                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1">
                                    E-mail*
                                </label>
                                <input
                                    type="email"
                                    {...register("email")}
                                    className="w-full bg-transparent border-none p-2 focus:ring-0 text-brand-cream font-bold placeholder:text-brand-cream/30 placeholder:text-[10px]"
                                    placeholder="Email"
                                />
                                {errors.email && <p className="text-[10px] text-white mt-1">{errors.email.message}</p>}
                            </div>

                            {/* Name Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="border-b border-brand-cream pb-2">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1">
                                        Imię*
                                    </label>
                                    <input
                                        type="text"
                                        {...register("firstName")}
                                        className="w-full bg-transparent border-none p-2 focus:ring-0 text-brand-cream font-bold placeholder:text-brand-cream/30 placeholder:text-[10px]"
                                        placeholder="Imię"
                                    />
                                    {errors.firstName && <p className="text-[10px] text-white mt-1">{errors.firstName.message}</p>}
                                </div>
                                <div className="border-b border-brand-cream pb-2">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1">
                                        Nazwisko*
                                    </label>
                                    <input
                                        type="text"
                                        {...register("lastName")}
                                        className="w-full bg-transparent border-none p-2 focus:ring-0 text-brand-cream font-bold placeholder:text-brand-cream/30 placeholder:text-[10px]"
                                        placeholder="Nazwisko"
                                    />
                                    {errors.lastName && <p className="text-[10px] text-white mt-1">{errors.lastName.message}</p>}
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
                                        {...register("city")}
                                        className="w-full bg-transparent border-none p-2 focus:ring-0 text-brand-cream font-bold placeholder:text-brand-cream/30 placeholder:text-[10px]"
                                        placeholder="Miasto"
                                    />
                                    {errors.city && <p className="text-[10px] text-white mt-1">{errors.city.message}</p>}
                                </div>
                                <div className="border-b border-brand-cream pb-2">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1">
                                        Numer telefonu*
                                    </label>
                                    <input
                                        type="tel"
                                        {...register("phone")}
                                        className="w-full bg-transparent border-none p-2 focus:ring-0 text-brand-cream font-bold placeholder:text-brand-cream/30 placeholder:text-[10px]"
                                        placeholder="Telefon"
                                    />
                                    {errors.phone && <p className="text-[10px] text-white mt-1">{errors.phone.message}</p>}
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="border-b border-brand-cream pb-2">
                                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1">
                                    Wiadomość
                                </label>
                                <textarea
                                    rows={4}
                                    {...register("message")}
                                    className="w-full bg-transparent border-none p-2 focus:ring-0 text-brand-cream font-bold placeholder:text-brand-cream/30 placeholder:text-[10px] resize-none"
                                    placeholder="Wiadomość"
                                />
                                {errors.message && <p className="text-[10px] text-white mt-1">{errors.message.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-brand-cream text-brand-blue font-bold uppercase tracking-[0.2em] text-xs py-4 px-12 rounded-full hover:bg-white transition-all duration-300 hover:scale-[1.01] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Wysyłanie..." : "Wyślij"}
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    )
}
