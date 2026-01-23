import type { Metadata } from 'next';
import { OfferHero } from "@/components/offer-hero";

export const metadata: Metadata = {
    title: "Oferta | Moment Drink Bar",
    description: "Sprawdź naszą ofertę mobilnego drink baru. Pakiety weselne, imprezy firmowe i okolicznościowe. Indywidualne podejście i profesjonalna obsługa.",
};


export default function OfferPage() {
    return (
        <main className="overflow-x-hidden">
            <OfferHero />
        </main>
    );
}
