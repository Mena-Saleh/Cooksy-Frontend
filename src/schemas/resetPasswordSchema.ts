import { z } from "zod";

export const resetPasswordSchema = z.object({
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
