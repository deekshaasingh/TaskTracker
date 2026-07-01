import { useState, useEffect, useCallback, useMemo } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import { fetchTasks, createTask, updateTask, deleteTask } from './api/taskApi';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ status: '', priority: '', sortBy: 'createdAt', order: 'desc' });

  const loadTasks = useCallback(async () => {
    try {
      setLoading(true);
      const cleanParams = Object.fromEntries(Object.entries(filters).filter(([, v]) => v !== ''));
      const res = await fetchTasks(cleanParams);
      setTasks(res.data);
    } catch (error) {
      toast.error('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => { loadTasks(); }, [loadTasks]);

  const counts = useMemo(() => ({
    pending: tasks.filter((t) => t.status === 'pending').length,
    inProgress: tasks.filter((t) => t.status === 'in-progress').length,
    completed: tasks.filter((t) => t.status === 'completed').length,
  }), [tasks]);

  const handleCreateOrUpdate = async (formData) => {
    try {
      if (editingTask) {
        await updateTask(editingTask._id, formData);
        toast.success('Task updated successfully');
        setEditingTask(null);
      } else {
        await createTask(formData);
        toast.success('Task created successfully');
      }
      loadTasks();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    try {
      await deleteTask(id);
      toast.success('Task deleted');
      loadTasks();
    } catch (error) {
      toast.error('Failed to delete task');
    }
  };

  const handleEdit = (task) => setEditingTask(task);
  const handleCancelEdit = () => setEditingTask(null);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="wordmark">TASK<span>//</span>TRACKER</h1>
        <p className="tagline">Full-stack task management, built on the MERN stack</p>
        <div className="stat-readout">
          <span className="stat"><span className="dot pending" /> PENDING <b>{counts.pending}</b></span>
          <span className="stat"><span className="dot progress" /> ACTIVE <b>{counts.inProgress}</b></span>
          <span className="stat"><span className="dot done" /> DONE <b>{counts.completed}</b></span>
        </div>
      </header>

      <TaskForm onSubmit={handleCreateOrUpdate} editingTask={editingTask} onCancelEdit={handleCancelEdit} />
      <FilterBar filters={filters} onFilterChange={setFilters} />

      {loading ? (
        <p className="empty-state">Loading tasks...</p>
      ) : (
        <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
      )}

      <ToastContainer position="bottom-right" autoClose={2500} theme="dark" />
    </div>
  );
}

export default App;