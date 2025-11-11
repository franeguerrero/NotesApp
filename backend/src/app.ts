import express from "express";
import cors from "cors";
import notesRouter from "./routes/notes";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/notes", notesRouter);

app.get("/", (_, res) => {
  res.send("API de Notas funcionando ✅");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
