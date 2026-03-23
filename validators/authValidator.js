const { z } = require("zod")

const registerSchema = z.object({
    name: z
        .string({ required_error: "name is required" })
        .trim()
        .min(2, "name must be at least 2 characters")
        .max(50, "name cannot exceed 50 characters"),
    email: z
        .string({ required_error: "email is required" })
        .trim()
        .email("invalid email format"),
    password: z
        .string({ required_error: "password is required" })
        .min(6, "password must be at least 6 characters")
        .max(100, "password cannot exceed 100 characters"),
})

const loginSchema = z.object({
    email: z
        .string({ required_error: "email is required" })
        .trim()
        .email("invalid email format"),
    password: z
        .string({ required_error: "password is required" })
        .min(1, "password is required"),
})

module.exports = { registerSchema, loginSchema }
