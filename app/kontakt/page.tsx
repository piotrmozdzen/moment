import type { Metadata } from 'next';
import { ContactPageForm } from "@/components/contact-page-form";

export const metadata: Metadata = {
    title: "Kontakt | Moment Drink Bar",
    description: "Skontaktuj się z nami! Zapytaj o wolny termin i wycenę mobilnego baru na Twoje wesele lub imprezę. Jesteśmy do Twojej dyspozycji.",
};

export default function ContactPage() {
    return (
        <ContactPageForm />
    );
}
