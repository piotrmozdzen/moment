import { z } from "zod";

export const contactFormSchema = z.object({
    firstName: z.string().min(2, "Imię musi mieć co najmniej 2 znaki"),
    lastName: z.string().min(2, "Nazwisko musi mieć co najmniej 2 znaki"),
    email: z.string().email("Niepoprawny adres e-mail"),
    city: z.string().min(2, "Proszę podać miasto"),
    phone: z.string().min(9, "Niepoprawny numer telefonu"),
    message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
});

export type ContactFormInputs = z.infer<typeof contactFormSchema>;
