import { z } from "zod";

export const registerSchema = z
    .object({
        firstName: z.string().min(1, "required"),
        lastName: z.string().min(1, "required"),
        email: z.string().email("invalidEmail"),
        password: z
            .string()
            .min(6, "minPassword")
            .regex(/[A-Z]/, "uppercase")
            .regex(/[0-9]/, "number")
            .regex(/[^A-Za-z0-9]/, "special"),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "passwordMismatch",
    });
