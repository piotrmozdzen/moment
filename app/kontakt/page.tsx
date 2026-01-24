import type { Metadata } from 'next';
import { ContactPageForm } from "@/components/contact-page-form";

export const metadata: Metadata = {
    title: "Kontakt i Rezerwacje - Zamów Mobilny Bar",
    description: "Masz pytania? Chcesz zarezerwować termin? Skontaktuj się z nami! Zapytaj o darmową wycenę mobilnego baru na Twoje wesele lub event.",
};

export default function ContactPage() {
    return (
        <ContactPageForm />
    );
}
