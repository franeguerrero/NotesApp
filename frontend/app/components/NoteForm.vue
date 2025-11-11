<script setup lang="ts">
// Emite eventos al componente padre (guardar o cancelar)
const emit = defineEmits(['save', 'cancel'])

// Campos del formulario
const title = ref('')
const content = ref('')

// Maneja el guardado de la nota
const handleSave = () => {
  // Si algún campo está vacío, no hace nada
  if (title.value.trim() === '' || content.value.trim() === '') return

  // Envía los datos al padre
  emit('save', { title: title.value, content: content.value })

  // Limpia los campos después de guardar
  title.value = ''
  content.value = ''
}
</script>

<template>
  <div class="note-form">
    <!-- Campo de título -->
    <input v-model="title" type="text" placeholder="Título" class="note-input" />

    <!-- Campo de contenido -->
    <textarea v-model="content" placeholder="Redacta tu nota aquí..." class="note-textarea" />

    <!-- Botones de acción -->
    <div class="form-actions">
      <button class="cancel-btn" @click="$emit('cancel')">✖</button>
      <button class="save-btn" @click="handleSave">✔</button>
    </div>
  </div>
</template>
