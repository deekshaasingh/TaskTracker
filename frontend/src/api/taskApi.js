import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/tasks';

const api = axios.create({ baseURL: API_BASE_URL });

export const fetchTasks = (params = {}) => api.get('/', { params });
export const fetchTaskById = (id) => api.get(`/${id}`);
export const createTask = (data) => api.post('/', data);
export const updateTask = (id, data) => api.put(`/${id}`, data);
export const deleteTask = (id) => api.delete(`/${id}`);