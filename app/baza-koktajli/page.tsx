
import type { Metadata } from 'next';
import { CocktailBaseHero } from "@/components/cocktail-base-hero";

export const metadata: Metadata = {
    title: "Baza Koktajli | Moment Drink Bar",
    description: "Poznaj nasze menu koktajlowe. Klasyki, autorskie kompozycje i orzeźwiające mocktaile. Wybierz idealne drinki na Twoją imprezę.",
};

export default function CocktailBasePage() {
    return (
        <main className="min-h-screen overflow-x-hidden">
            <CocktailBaseHero />
        </main>
    );
}
