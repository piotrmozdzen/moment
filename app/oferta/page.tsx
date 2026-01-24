import type { Metadata } from 'next';
import { OfferHero } from "@/components/offer-hero";

export const metadata: Metadata = {
    title: "Oferta i Pakiety Weselne - Drink Bar",
    description: "Kompleksowa oferta mobilnego baru. Pakiety dostosowane do liczby gości, autorska karta menu i profesjonalny sprzęt. Sprawdź naszą ofertę na wesele.",
};


export default function OfferPage() {
    return (
        <OfferHero />
    );
}
