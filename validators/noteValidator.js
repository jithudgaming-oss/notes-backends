const { z } = require("zod")

const createNoteSchema = z.object({
    title: z
        .string({ requred_error: "title is required" })
        .trim()
        .min(1, "title cannot be empty")
        .max(100, "title cannot exceed 100 characters"),
    content: z
        .string({ required_error: "content is required" })
        .trim()
        .min(1, "content cannot be empty")
        .max(5000, "content cannnot exceed 5000 charcters"),
})


const updateNoteSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, "content cannot be empty ")
        .max(5000, "content cannot exceed more than 5000 characters")
        .optional()
})

module.exports = {
    createNoteSchema, updateNoteSchema
}