# NotesApp

NotasApp es una aplicación web para crear, listar y eliminar notas.
El proyecto está dividido en **frontend (Vue/Vite)** y **backend (Node/Express)**, desplegado en plataformas gratuitas: **frontend en Vercel** y **backend en Render**.

---

## Estructura del proyecto

```
NotesApp/
├─ frontend/       # Frontend Vue 3 + Nuxt
├─ backend/        # Backend Node.js + Express
└─ README.md
```

---

## Instalación local

1. Clonar el repositorio:

```
git clone https://github.com/franeguerrero/NotesApp.git
cd NotesApp
```

2. Backend:

```
cd backend
npm install
npm start   # Levanta el servidor en http://localhost:3000
```

3. Frontend:

```
cd frontend
npm install
npm run dev # Levanta la app en http://localhost:3001
```

> Nota: Configura la variable de entorno `VITE_API_BASE` apuntando a tu backend local (`http://localhost:3000`) o al backend desplegado en Render.

---

## Configuración de variables de entorno

**Frontend (Nuxt):**

* Archivo `.env` en `frontend/`:

```
VITE_API_BASE=https://notesapp-exl9.onrender.com
```

* En Vercel: Settings → Environment Variables → agregar `VITE_API_BASE` con la URL de tu backend.

---

## Backend API (Express)

| Método | Ruta       | Descripción             |
| ------ | ---------- | ----------------------- |
| GET    | /notes     | Lista todas las notas   |
| POST   | /notes     | Crea una nota           |
| DELETE | /notes/:id | Elimina una nota por id |

---

## Despliegue

* Frontend (Vercel): [https://notes-app-omega-pink.vercel.app](https://notes-app-omega-pink.vercel.app)
* Backend (Render): [https://notesapp-exl9.onrender.com](https://notesapp-exl9.onrender.com)

---

## Tecnologías usadas

* **Frontend:** Vue 3, Nuxt, TypeScript
* **Backend:** Node.js, Express, TypeScript
* **Despliegue:** Vercel (frontend), Render (backend)

---

## Uso

* Abrir la app en el navegador: [https://notes-app-omega-pink.vercel.app](https://notes-app-omega-pink.vercel.app)
* Crear nuevas notas, listarlas y eliminarlas.
* Las notas se guardan en el backend desplegado en Render.

---

## Notas

* Mantener frontend y backend separados facilita el deploy y desarrollo.
* Todas las dependencias se manejan con `package.json`.
* Los `node_modules` **no están subidos al repositorio**.

---

## Licencia

MIT License
