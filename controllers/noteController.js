const Note = require("../models/note")

const getNotes = async (req, res) => {
  const notes = await Note.find()
  res.json(notes)
}

const getNote = async (req, res) => {
  const note = await Note.findById(req.params.id)
  if (!note) return res.status(404).json({ message: "Note not found" })
  res.json(note)
}

const createNote = async (req, res) => {
  const { title, content } = req.body
  if (!title || !content) {
    return res.status(400).json({ message: "title and content should be filled" })
  }
  const note = await Note.create({ title, content })
  res.status(201).json(note)
}

const updateNote = async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  if (!note) return res.status(404).json({ message: "note cannot be found" })
  res.json(note)
}

const deleteNote = async (req, res) => {
  const note = await Note.findByIdAndDelete(req.params.id)
  if (!note) return res.status(404).json({ message: "note cannot be found" })
  res.json({ message: "note deleted successfully" })
}

module.exports = { getNotes, getNote, createNote, updateNote, deleteNote }