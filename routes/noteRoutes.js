const express = require("express")

const { getNotes,
    getNote,
    createNote,
    updateNote,
    deleteNote
} = require("../controllers/noteController")

const validate = require("../middlewares/validate")
const { createNoteSchema, updateNoteSchema } = require("../validators/noteValidator")

const router = express.Router()

router.get("/", getNotes)
router.get("/:id", getNote)
router.post("/", validate(createNoteSchema), createNote)
router.put("/:id", validate(updateNoteSchema), updateNote)
router.delete("/:id", deleteNote)


module.exports = router
