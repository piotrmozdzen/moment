export const siteConfig = {
    name: "MOMENT DRINK BAR",
    description: "Mobilny Drink Bar na Twoje wesele i imprezę okolicznościową.",
    url: "https://moment-drinkbar.pl",
    ogImage: "https://moment-drinkbar.pl/og.jpg",
    links: {
        instagram: "https://instagram.com/moment_drinkbar",
        facebook: "https://facebook.com/moment.drinkbar",
    },
    navItems: [
        { label: "O NAS", href: "/o-nas" },
        { label: "OFERTA", href: "/oferta" },
        { label: "BAZA KOKTAJLI", href: "/baza-koktajli" },
        { label: "REALIZACJE", href: "/realizacje" },
    ],
    contact: {
        email: "kontakt@moment-drinkbar.pl",
        phone: "+48 123 456 789",
        address: "Polska",
    }
};

export type SiteConfig = typeof siteConfig;
