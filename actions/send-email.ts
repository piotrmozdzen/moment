"use server";

import { Resend } from "resend";
import { contactFormSchema, ContactFormInputs } from "@/lib/schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormInputs) {
    const result = contactFormSchema.safeParse(data);

    if (!result.success) {
        return { success: false, error: "Niepoprawne dane formularza." };
    }

    const { firstName, lastName, email, city, phone, message } = result.data;

    try {
        const { data: emailData, error } = await resend.emails.send({
            from: "Moment Drink Bar <kontakt@moment-drinkbar.pl>",
            to: ["moment.drinkbar@gmail.com"],
            subject: `Nowa wiadomość od: ${firstName} ${lastName}`,
            replyTo: email,
            html: `
                <h2>Nowe zapytanie z formularza kontaktowego</h2>
                <p><strong>Od:</strong> ${firstName} ${lastName} (${email})</p>
                <p><strong>Telefon:</strong> ${phone}</p>
                <p><strong>Miasto:</strong> ${city}</p>
                <p><strong>Wiadomość:</strong></p>
                <p>${message.replace(/\n/g, "<br>")}</p>
            `,
        });

        if (error) {
            console.error("Resend error:", error);
            return { success: false, error: "Nie udało się wysłać wiadomości." };
        }

        return { success: true };
    } catch (error) {
        console.error("Server error:", error);
        return { success: false, error: "Wystąpił błąd serwera." };
    }
}
