
import type { Metadata } from 'next';
import { CocktailBaseHero } from "@/components/cocktail-base-hero";

export const metadata: Metadata = {
    title: "Menu Koktajli - Klasyki i Autorskie Drinki",
    description: "Zobacz naszą bazę koktajli. Od orzeźwiających klasyków po nasze autorskie kompozycje i pyszne mocktaile. Skomponuj menu na swoją imprezę.",
};

export default function CocktailBasePage() {
    return (
        <main className="min-h-screen overflow-x-hidden">
            <CocktailBaseHero />
        </main>
    );
}
