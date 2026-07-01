<div align="center">

# 🎯 Task Tracker

### A full-stack task management app built on the MERN stack

Real-time CRUD, smart filtering, and a dark glassmorphic interface — deployed end-to-end.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

[**Live Demo**](https://your-app.vercel.app) · [**API**](https://your-api.onrender.com) · [**Report a Bug**](https://github.com/deekshaasingh/TaskTracker/issues)

</div>

<br/>

## ✨ Overview

Task Tracker is a full-stack CRUD application for managing tasks with priorities, statuses, and due dates. It was built to demonstrate REST API design, MongoDB integration, and a responsive, dynamically-updating React interface — all deployed on a public URL.

<br/>

## 🚀 Features

| Feature | Description |
|---|---|
| ✅ **Full CRUD** | Create, read, update, and delete tasks instantly |
| 🎯 **Priority System** | Low / Medium / High, each with a distinct visual signal |
| 📊 **Status Tracking** | Pending → In Progress → Completed workflow |
| 🔍 **Filtering & Sorting** | Filter by status/priority, sort by date, title, or priority |
| ⚡ **Live Updates** | No page refresh — UI updates instantly via async calls |
| 🛡️ **Form Validation** | Client and server-side validation with clear error states |
| 🔔 **Toast Notifications** | Instant feedback on every action |
| 📱 **Responsive Design** | Fully usable from mobile to desktop |

<br/>

## 🖥️ Tech Stack

<div align="center">

| Layer | Technology |
|---|---|
| **Frontend** | React 18 · Vite · Axios · React-Toastify |
| **Backend** | Node.js · Express.js · Express-Validator |
| **Database** | MongoDB · Mongoose (MongoDB Atlas) |
| **Deployment** | Vercel (frontend) · Render (backend) |

</div>

<br/>

## 🏗️ Project Structure

```
task-tracker/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection logic
│   ├── controllers/
│   │   └── taskController.js  # Business logic for task operations
│   ├── models/
│   │   └── Task.js             # Mongoose schema
│   ├── routes/
│   │   └── taskRoutes.js       # API route definitions
│   └── server.js                # Express app entry point
│
└── frontend/
    └── src/
        ├── api/
        │   └── taskApi.js       # Axios client for backend calls
        ├── components/
        │   ├── TaskForm.jsx
        │   ├── TaskItem.jsx
        │   ├── TaskList.jsx
        │   └── FilterBar.jsx
        └── App.jsx               # Root component
```

<br/>

## 🔌 API Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/tasks` | Get all tasks (supports `status`, `priority`, `sortBy`, `order` query params) |
| `GET` | `/api/tasks/:id` | Get a single task by ID |
| `POST` | `/api/tasks` | Create a new task |
| `PUT` | `/api/tasks/:id` | Update an existing task |
| `DELETE` | `/api/tasks/:id` | Delete a task |

**Task schema:**

```json
{
  "title": "string, required, max 100 chars",
  "description": "string, optional, max 500 chars",
  "status": "pending | in-progress | completed",
  "priority": "low | medium | high",
  "dueDate": "date, optional"
}
```

<br/>

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18+)
- A MongoDB Atlas connection string

### 1. Clone the repo

```bash
git clone https://github.com/deekshaasingh/TaskTracker.git
cd task-tracker
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
NODE_ENV=development
```

Run it:

```bash
npm run dev
```

### 3. Set up the frontend

```bash
cd ../frontend
npm install
```

Create a `.env` file in `frontend/`:

```env
VITE_API_URL=http://localhost:5000/api/tasks
```

Run it:

```bash
npm run dev
```

The app will be live at `http://localhost:5173`.

<br/>

## 🌐 Deployment

| Service | Platform | Notes |
|---|---|---|
| Frontend | [Vercel](https://vercel.com) | Root directory: `frontend`, build command: `npm run build` |
| Backend | [Render](https://render.com) | Root directory: `backend`, start command: `npm start` |

<br/>

## 🗺️ Roadmap

- [ ] Drag-and-drop status updates
- [ ] Task tags/labels
- [ ] Dark/light theme toggle
- [ ] User authentication

<br/>

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

<br/>

<div align="center">

Built by **Deeksha** · [GitHub](https://github.com/deekshaasingh) · [Live Demo](https://your-app.vercel.app)

</div>
