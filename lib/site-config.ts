export const siteConfig = {
    name: "Acme Corp",
    description: "Building the future with modern solutions. We provide top-tier services for businesses looking to scale.",
    url: "https://acme-example.com",
    ogImage: "https://acme-example.com/og.jpg",
    links: {
        twitter: "https://twitter.com/acme",
        github: "https://github.com/acme",
        linkedin: "https://linkedin.com/company/acme",
    },
    navItems: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ],
    contact: {
        email: "hello@acme.com",
        phone: "+1 (555) 123-4567",
        address: "123 Innovation Dr, Tech City, TC 90210",
    }
};

export type SiteConfig = typeof siteConfig;
