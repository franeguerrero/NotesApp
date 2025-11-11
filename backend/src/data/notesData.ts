import { Note } from "../types/Note";

let notes: Note[] = [
  {
    id: 1,
    title: "Ideas de Carpintería",
    content: `- Mesa de centro con tapa de vidrio y base de roble.  
- Estante flotante para libros 📚  
- Tablero de herramientas organizado (tipo Shadow Board).  
- Prueba de resistencia en unión cola fría vs tornillo.`,
  },
  {
    id: 2,
    title: "Fragmento de código Vue",
    content: `\`\`\`vue
<template>
  <div class="note">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; content: string }>();
</script>
\`\`\`
Notas: probar si el highlight de sintaxis se muestra correctamente.`,
  },
  {
    id: 3,
    title: "To-Do personal",
    content: `✅ Terminar diseño del panel de notas  
🪚 Cortar melamina para escritorio de cliente  
💻 Actualizar portfolio (añadir proyecto “NoteApp”)  
⏰ Recordar enviar presupuesto antes del viernes`,
  },
  {
    id: 4,
    title: "Texto largo de prueba",
    content: `Esta es una nota de prueba para ver cómo se comporta el sistema con párrafos extensos.  
La idea es verificar si el contenido se adapta bien a la vista, mantiene el espaciado correcto y no rompe el diseño general.  

El texto puede incluir *formato Markdown*, saltos de línea, listas, o incluso **palabras en negrita** y _en cursiva_.  

> "Un buen diseño no es aquel que se nota, sino el que se siente natural." — Dieter Rams`,
  },
  {
    id: 5,
    title: "Conceptos de diseño UX/UI",
    content: `Principios:  
1. Consistencia visual.  
2. Feedback inmediato al usuario.  
3. Jerarquía clara de información.  
4. Accesibilidad (contraste, legibilidad, tamaño de clic).  
5. Estética funcional — el minimalismo no es una moda, es una estrategia.`,
  },
  {
    id: 6,
    title: "Recordatorio Técnico",
    content: `⚙️ Comando útil en Linux:  
\`\`\`bash
sudo systemctl restart hyprland
\`\`\`
📁 Ruta de proyecto:  
\`\`\`/home/fran/Projects/note-app
\`\`\`
💡 Recordar crear script para backups automáticos.`,
  },
  {
    id: 7,
    title: "Inspiración",
    content: `“The Anarchist’s Design Book” 📖  
> Simplificar lo complejo sin perder el alma del trabajo artesanal.  
A veces, un mueble sencillo puede tener más presencia que uno recargado.`,
  },
  {
    id: 8,
    title: "Lista de ideas aleatorias",
    content: `- App para organizar proyectos de carpintería 🪵  
- Sistema de gestión de clientes con Notion API  
- Serie de wallpapers oscuros tipo “El ángel caído”  
- Video estilo Studio Ghibli sobre un taller en el bosque 🌲`,
  },
];

export const getNotes = () => notes;

export const getNoteById = (id: number) => notes.find((n) => n.id === id);

export const addNote = (title: string, content: string) => {
  const newNote: Note = { id: Date.now(), title, content };
  notes.push(newNote);
  return newNote;
};

export const removeNote = (id: number) => {
  const index = notes.findIndex((n) => n.id === id);
  if (index === -1) return false;
  notes.splice(index, 1);
  return true;
};
