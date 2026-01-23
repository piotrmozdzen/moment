import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Polityka Prywatności | Moment Drink Bar",
    description: "Zasady przetwarzania danych osobowych i polityka cookies.",
};

export default function PrivacyPolicyPage() {
    return (
        <section className="bg-brand-cream min-h-screen py-24 px-8 md:px-16 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold font-montserrat text-brand-text mb-12 uppercase tracking-wide">
                    Polityka Prywatności
                </h1>

                <div className="space-y-8 font-sans text-brand-text-light leading-relaxed">

                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-brand-text">1. Postanowienia ogólne</h2>
                        <p>
                            Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem ze strony internetowej <strong>Moment Drink Bar</strong>.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-brand-text">2. Administrator danych</h2>
                        <p>
                            Administratorem danych osobowych jest właściciel marki <strong>Moment Drink Bar</strong>.
                            Wsparcie w zakresie ochrony danych można uzyskać kontaktując się pod adresem e-mail: <a href="mailto:moment.drinkbar@gmail.com" className="font-bold underline hover:opacity-70">moment.drinkbar@gmail.com</a>.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-brand-text">3. Cele przetwarzania danych</h2>
                        <p>
                            Dane osobowe Użytkowników są przetwarzane w celu:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Udzielenia odpowiedzi na zapytania przesłane przez formularz kontaktowy lub drogą mailową.</li>
                            <li>Przygotowania oferty oraz realizacji usług barmańskich.</li>
                            <li>Kontaktu w sprawach związanych z realizacją zamówienia.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-brand-text">4. Zakres zbieranych danych</h2>
                        <p>
                            Za pośrednictwem formularza kontaktowego możemy zbierać następujące dane: imię, nazwisko, adres e-mail, numer telefonu oraz inne informacje dobrowolnie podane w treści wiadomości.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-brand-text">5. Prawa użytkownika</h2>
                        <p>
                            Każdemu Użytkownikowi przysługuje prawo do:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Wglądu do swoich danych osobowych.</li>
                            <li>Sprostowania, usunięcia lub ograniczenia przetwarzania danych.</li>
                            <li>Wniesienia sprzeciwu wobec przetwarzania.</li>
                            <li>Przenoszenia danych.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-brand-text">6. Pliki Cookies</h2>
                        <p>
                            Strona internetowa może wykorzystywać pliki cookies (ciasteczka) w celu zapewnienia prawidłowego działania serwisu oraz w celach statystycznych. Użytkownik może w każdej chwili zmienić ustawienia przeglądarki dotyczące plików cookies.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-brand-text">7. Kontakt</h2>
                        <p>
                            W razie jakichkolwiek pytań dotyczących ochrony prywatności, prosimy o kontakt mailowy na adres: <a href="mailto:moment.drinkbar@gmail.com" className="font-bold underline hover:opacity-70">moment.drinkbar@gmail.com</a>.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
