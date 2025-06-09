import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("invalidEmail"),
    password: z.string().min(1, "required"),
});
