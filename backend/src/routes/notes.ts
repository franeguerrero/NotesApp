import express from "express";
import {
  listNotes,
  getNote,
  createNote,
  deleteNote,
} from "../controllers/notesController";

const router = express.Router();

router.get("/", listNotes);
router.get("/:id", getNote);
router.post("/", createNote);
router.delete("/:id", deleteNote);

export default router;
