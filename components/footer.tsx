import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-primary">{siteConfig.name}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            {siteConfig.description}
                        </p>
                        <div className="flex space-x-4">
                            <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary">
                                <Twitter size={20} />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary">
                                <Github size={20} />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary">
                                <Linkedin size={20} />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">Company</h4>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-primary">Services</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Careers</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">Resources</h4>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li><Link href="#" className="hover:text-primary">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary">Case Studies</Link></li>
                            <li><Link href="#" className="hover:text-primary">Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">Contact</h4>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li>{siteConfig.contact.address}</li>
                            <li><a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary">{siteConfig.contact.email}</a></li>
                            <li><a href={`tel:${siteConfig.contact.phone}`} className="hover:text-primary">{siteConfig.contact.phone}</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
