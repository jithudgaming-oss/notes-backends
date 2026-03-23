const Note = require("../models/note")

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id })
    res.json(notes)
  } catch (err) {
    console.error("getNotes error", err)
    res.status(500).json({ message: "server error" })
  }
}

const getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id)
    if (!note) return res.status(404).json({ message: "Note not found" })
    res.json(note)
  } catch (err) {
    console.error("getNote error", err)
    res.status(500).json({ message: "server error" })
  }
}

const createNote = async (req, res) => {
  try {
    const { title, content } = req.body

    const note = await Note.create({ title, content, user: req.user.id })
    res.status(201).json(note)
  } catch (err) {
    console.error("createNote error", err)
    res.status(500).json({ message: "server error" })
  }
}

const updateNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    if (!note) return res.status(404).json({ message: "note cannot be found" })
    res.json(note)
  } catch (err) {
    console.error("updateNote error", err)
    res.status(500).json({ message: "server error" })
  }
}

const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id)
    if (!note) return res.status(404).json({ message: "note cannot be found" })
    res.json({ message: "note deleted successfully" })
  } catch (err) {
    console.error("deleteNote error", err)
    res.status(500).json({ message: "server error" })
  }
}

module.exports = { getNotes, getNote, createNote, updateNote, deleteNote }