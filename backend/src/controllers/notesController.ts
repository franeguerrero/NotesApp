import { Request, Response } from "express";
import { getNotes, getNoteById, addNote, removeNote } from "../data/notesData";

export const listNotes = (_: Request, res: Response) => {
  res.json(getNotes());
};

export const getNote = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const note = getNoteById(id);

  if (!note) return res.status(404).json({ error: "Nota no encontrada" });
  res.json(note);
};

export const createNote = (req: Request, res: Response) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  const newNote = addNote(title, content);
  res.status(201).json(newNote);
};

export const deleteNote = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const deleted = removeNote(id);

  if (!deleted) return res.status(404).json({ error: "Nota no encontrada" });
  res.json({ success: true });
};
