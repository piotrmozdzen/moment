import type { Metadata } from 'next';
import { Section } from "@/components/section";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with our team. We'd love to hear from you.",
};

export default function ContactPage() {
    return (
        <>
            <Section className="bg-slate-50 dark:bg-slate-900 border-b">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                        Get in Touch
                    </h1>
                    <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">
                        Have a project in mind? Let's talk about how we can help you achieve your goals.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="rounded-2xl border p-8 bg-white dark:bg-slate-950 shadow-sm">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">First name</label>
                                    <input type="text" id="first-name" className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Last name</label>
                                    <input type="text" id="last-name" className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                                <input type="email" id="email" className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                                <textarea id="message" className="flex min-h-[150px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50" placeholder="Tell us about your project..."></textarea>
                            </div>
                            <button type="submit" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-full">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8 lg:pl-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <MapPin className="w-6 h-6 text-primary mt-1 mr-4" />
                                    <div>
                                        <p className="font-medium">Headquarters</p>
                                        <p className="text-slate-600 dark:text-slate-400 mt-1">{siteConfig.contact.address}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Mail className="w-6 h-6 text-primary mt-1 mr-4" />
                                    <div>
                                        <p className="font-medium">Email Us</p>
                                        <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-600 dark:text-slate-400 mt-1 hover:text-primary block">{siteConfig.contact.email}</a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Phone className="w-6 h-6 text-primary mt-1 mr-4" />
                                    <div>
                                        <p className="font-medium">Call Us</p>
                                        <a href={`tel:${siteConfig.contact.phone}`} className="text-slate-600 dark:text-slate-400 mt-1 hover:text-primary block">{siteConfig.contact.phone}</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border">
                            <h4 className="font-semibold mb-2">Office Hours</h4>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                <li className="flex justify-between"><span>Monday - Friday</span> <span>9:00 AM - 6:00 PM</span></li>
                                <li className="flex justify-between"><span>Saturday</span> <span>10:00 AM - 4:00 PM</span></li>
                                <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
