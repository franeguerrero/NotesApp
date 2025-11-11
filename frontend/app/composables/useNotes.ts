// app/composables/useNotes.ts
import { ref } from "vue";

// Tipo que define la estructura básica de una nota
export interface Note {
  id: number;
  title: string;
  content: string;
}

export function useNotes() {
  // Estado reactivo con la lista de notas
  const notes = ref<Note[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Base de la API (configurada con variable de entorno)
  const apiBase = (import.meta.env.VITE_API_BASE || "").replace(/\/+$/, "");

  // Carga todas las notas desde el backend
  const fetchNotes = async () => {
    loading.value = true;
    error.value = null;
    try {
      const res = await fetch(`${apiBase}/notes`);
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      notes.value = await res.json();
    } catch (err: any) {
      error.value = "Error cargando notas";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  // Crea una nueva nota y la agrega al array local
  const createNote = async (title: string, content: string) => {
    try {
      const res = await fetch(`${apiBase}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const newNote: Note = await res.json();

      // Se agrega la nota localmente sin necesidad de volver a pedir todo
      notes.value.unshift(newNote); // o .push(), según el orden que prefieras

      return newNote;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  // Elimina una nota del servidor y también del estado local
  const deleteNote = async (id: number) => {
    try {
      const res = await fetch(`${apiBase}/notes/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

      // Quita la nota eliminada del array local
      notes.value = notes.value.filter((n) => n.id !== id);

      return true;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  // Expone los estados y funciones para usarlos en los componentes
  return { notes, loading, error, fetchNotes, createNote, deleteNote };
}
