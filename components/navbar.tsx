"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-[100] w-full border-b bg-brand-cream font-[family-name:var(--font-montserrat)]">
            <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6 relative">

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-slate-900 hover:text-slate-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Left: Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    {siteConfig.navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-bold tracking-widest text-slate-900 hover:text-slate-600 uppercase"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Center: Logo */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none md:pointer-events-auto">
                    <Link href="/" className="flex flex-col items-center">
                        <span className="text-3xl font-bold tracking-[0.2em] text-slate-900 leading-none">MOMENT</span>
                        <span className="text-[0.7rem] font-bold tracking-[0.3em] text-slate-600 uppercase mt-1">Drink Bar</span>
                    </Link>
                </div>

                {/* Right: Contact + Icons */}
                <div className="hidden md:flex items-center gap-6">
                    <Link
                        href="/contact"
                        className="text-sm font-bold tracking-widest text-slate-900 hover:text-slate-600 uppercase"
                    >
                        KONTAKT
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link href={siteConfig.links.instagram || "#"} className="text-slate-900 hover:text-slate-600">
                            <Instagram size={20} />
                        </Link>
                        <Link href={siteConfig.links.facebook || "#"} className="text-slate-900 hover:text-slate-600">
                            <Facebook size={20} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t bg-brand-cream p-4 font-[family-name:var(--font-montserrat)]">
                    <div className="flex flex-col space-y-4 items-center">
                        {siteConfig.navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-lg font-bold tracking-widest text-slate-900 hover:text-slate-600 uppercase"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="text-lg font-bold tracking-widest text-slate-900 hover:text-slate-600 uppercase"
                            onClick={() => setIsOpen(false)}
                        >
                            KONTAKT
                        </Link>
                        <div className="flex items-center gap-6 mt-4">
                            <Link href={siteConfig.links.instagram || "#"} className="text-slate-900 hover:text-slate-600">
                                <Instagram size={24} />
                            </Link>
                            <Link href={siteConfig.links.facebook || "#"} className="text-slate-900 hover:text-slate-600">
                                <Facebook size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
