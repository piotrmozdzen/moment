"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormInputs } from "@/lib/schemas";
import { sendEmail } from "@/actions/send-email";
import { toast } from "sonner";
import { useState } from "react";

export function InquiryForm() {
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
        <section id="inquiry" className="bg-[#c16c4d] py-24 md:py-32 border-b border-slate-900/10 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">

                    {/* Left Side: Content */}
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-4xl md:text-5xl font-semibold text-brand-cream tracking-tight font-montserrat leading-[1.2]">
                                Skontaktuj się z nami
                            </h2>
                            <p className="font-caveat text-2xl md:text-3xl text-brand-cream/90">
                                porozmawiajmy
                            </p>
                        </div>

                        <div className="space-y-6 text-brand-cream/80 font-medium max-w-sm leading-relaxed text-base md:text-lg font-sans">
                            <p>
                                Chcesz uzyskać więcej szczegółowych informacji na temat współpracy?
                            </p>
                            <p>
                                Skontaktuj się z nami przez formularz albo bezpośrednio na adres <a href="mailto:moment.drinkbar@gmail.com" className="text-brand-cream border-b border-brand-cream/20 hover:border-brand-cream transition-colors">moment.drinkbar@gmail.com</a>.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="flex flex-col space-y-8">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Email */}
                            <div className="border-b border-brand-cream/40 pb-2">
                                <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-cream/60 mb-1">
                                    E-mail*
                                </label>
                                <input
                                    type="email"
                                    {...register("email")}
                                    className="w-full bg-transparent border-none p-2 focus:ring-0 text-brand-cream font-bold placeholder:text-brand-cream/40"
                                    placeholder="Email"
                                />
                                {errors.email && <p className="text-[10px] text-white mt-1">{errors.email.message}</p>}
                            </div>

                            {/* Name Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="border-b border-brand-cream/40 pb-2">
                                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-cream/60 mb-1">
                                        Imię*
                                    </label>
                                    <input
                                        type="text"
                                        {...register("firstName")}
                                        className="w-full bg-transparent border-none p-2 focus:ring-0 text-brand-cream font-bold placeholder:text-brand-cream/40"
                                        placeholder="Imię"
                                    />
                                    {errors.firstName && <p className="text-[10px] text-white mt-1">{errors.firstName.message}</p>}
                                </div>
                                <div className="border-b border-brand-cream/40 pb-2">
                                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-cream/60 mb-1">
                                        Nazwisko*
                                    </label>
                                    <input
                                        type="text"
                                        {...register("lastName")}
                                        className="w-full bg-transparent border-none p-2 focus:ring-0 text-brand-cream font-bold placeholder:text-brand-cream/40"
                                        placeholder="Nazwisko"
                                    />
                                    {errors.lastName && <p className="text-[10px] text-white mt-1">{errors.lastName.message}</p>}
                                </div>
                            </div>

                            {/* City / Phone Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="border-b border-brand-cream/40 pb-2">
                                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-cream/60 mb-1">
                                        Miasto*
                                    </label>
                                    <input
                                        type="text"
                                        {...register("city")}
                                        className="w-full bg-transparent border-none p-2 focus:ring-0 text-brand-cream font-bold placeholder:text-brand-cream/40"
                                        placeholder="Miasto"
                                    />
                                    {errors.city && <p className="text-[10px] text-white mt-1">{errors.city.message}</p>}
                                </div>
                                <div className="border-b border-brand-cream/40 pb-2">
                                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-cream/60 mb-1">
                                        Numer telefonu*
                                    </label>
                                    <input
                                        type="tel"
                                        {...register("phone")}
                                        className="w-full bg-transparent border-none p-2 focus:ring-0 text-brand-cream font-bold placeholder:text-brand-cream/40"
                                        placeholder="Telefon"
                                    />
                                    {errors.phone && <p className="text-[10px] text-white mt-1">{errors.phone.message}</p>}
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="border-b border-brand-cream/40 pb-2">
                                <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-cream/60 mb-1">
                                    Wiadomość
                                </label>
                                <textarea
                                    rows={4}
                                    {...register("message")}
                                    className="w-full bg-transparent border-none p-2 focus:ring-0 text-brand-cream font-bold placeholder:text-brand-cream/40 resize-none"
                                    placeholder="Wiadomość"
                                />
                                {errors.message && <p className="text-[10px] text-white mt-1">{errors.message.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <div className="pt-8">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-brand-cream text-brand-blue font-bold uppercase tracking-widest text-xs py-4 px-10 rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95 font-montserrat disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Wysyłanie..." : "Wyślij"}
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
