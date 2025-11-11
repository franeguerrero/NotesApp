<template>
  <!-- Cada nota se muestra como una tarjeta -->
  <div class="note" @click="toggleExpand">
    <h2>{{ note.title }}</h2>

    <p>{{ expanded ? note.content : shortContent }}</p>

    <!-- Botón de eliminar visible solo cuando la nota está expandida -->
    <div v-if="expanded">
      <button class="delete" @click.stop="onDelete">✖</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Tipo de dato de la nota (importado desde el composable)
import type { Note } from '../composables/useNotes'

// Recibe la nota y la función para borrar
const props = defineProps<{
  note: Note
  onDelete: (id: number) => void
}>()

// Controla si la tarjeta está expandida o no
const expanded = ref(false)

// Alterna entre vista reducida y completa
const toggleExpand = () => {
  expanded.value = !expanded.value
}

// Llama a la función de eliminación pasando el ID de la nota
const onDelete = () => {
  props.onDelete(props.note.id)
}

// Muestra solo un resumen del contenido si la tarjeta no está expandida
const shortContent = computed(() =>
  props.note.content.length > 80 ? props.note.content.slice(0, 80) + "…" : props.note.content
)
</script>
