<script setup lang="ts">
// Componentes principales del sistema de notas
import NoteCard from '~/components/NoteCard.vue'
import NoteForm from '~/components/NoteForm.vue'

// Lógica central para manejar notas (cargar, crear, borrar, etc.)
import { useNotes } from '~/composables/useNotes'

const { notes, loading, fetchNotes, createNote, deleteNote } = useNotes()

// Controla si se muestra o no el formulario
const showForm = ref(false)

// Al iniciar la vista, carga las notas existentes
onMounted(() => {
  fetchNotes()
})

// Crea una nueva nota y cierra el formulario al terminar
const handleAddNote = async (note: { title: string; content: string }) => {
  await createNote(note.title, note.content)
  showForm.value = false
}

// Borra una nota por su ID
const handleDelete = async (id: number) => {
  await deleteNote(id)
}
</script>

<template>
  <div class="container">
    <h1 class="title">Sistema de notas de clase</h1>

    <!-- Mensaje mientras se cargan las notas -->
    <div v-if="loading" class="empty">Cargando notas...</div>

    <!-- Si no hay notas, muestra una invitación a crear la primera -->
    <div v-else-if="notes.length === 0" class="empty">
      <p>Deberías probar crear una nota usando el botón de aquí debajo. 👇</p>
    </div>

    <!-- Lista de notas ya creadas -->
    <div v-else class="notes-list">
      <NoteCard v-for="note in notes" :key="note.id" :note="note" @delete="handleDelete(note.id)" />
    </div>
  </div>

  <footer class="footer">
    <div class="footer-inner">
      <!-- Botón flotante para abrir el formulario -->
      <transition name="fade">
        <button v-if="!showForm" class="add-btn" @click="showForm = true">
          +
        </button>
      </transition>

      <!-- Zona del formulario de nueva nota -->
      <div class="form-container">
        <transition name="slide-up">
          <!-- Se muestra el formulario solo cuando está activo -->
          <div v-if="showForm" class="form-wrapper">
            <NoteForm @save="handleAddNote" @cancel="() => (showForm = false)" />
          </div>
        </transition>
      </div>
    </div>
  </footer>
</template>
