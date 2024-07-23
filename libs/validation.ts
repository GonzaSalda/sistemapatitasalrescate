import { z } from "zod";

export const userFormValidation = z.object({
    name: z.string().min(2, "Debe tener más de dos caracteres").max(50, "El maximo permitido de caracteres es 50"),
    email: z.string().email("Debe ser un email valido"),
    phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone), "Numero invalido"),

});