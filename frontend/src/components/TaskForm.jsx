import { useState, useEffect } from 'react';

const initialState = {
  title: '',
  description: '',
  status: 'pending',
  priority: 'medium',
  dueDate: '',
};

function TaskForm({ onSubmit, editingTask, onCancelEdit }) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title || '',
        description: editingTask.description || '',
        status: editingTask.status || 'pending',
        priority: editingTask.priority || 'medium',
        dueDate: editingTask.dueDate ? editingTask.dueDate.slice(0, 10) : '',
      });
    } else {
      setFormData(initialState);
    }
  }, [editingTask]);

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (formData.title.length > 100) newErrors.title = 'Title cannot exceed 100 characters';
    if (formData.description.length > 500) newErrors.description = 'Description cannot exceed 500 characters';
    return newErrors;
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    onSubmit(formData);
    if (!editingTask) setFormData(initialState);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>{editingTask ? 'Edit Task' : 'Add New Task'}</h2>

      <div className="form-group">
        <label>Title *</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Task title" />
        {errors.title && <span className="error-text">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Task description" rows={3} />
        {errors.description && <span className="error-text">{errors.description}</span>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="form-group">
          <label>Priority</label>
          <select name="priority" value={formData.priority} onChange={handleChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="form-group">
          <label>Due Date</label>
          <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} />
        </div>
      </div>

      <div className="form-actions">
        <button type="submit">{editingTask ? 'Update Task' : 'Add Task'}</button>
        {editingTask && (
          <button type="button" className="btn-secondary" onClick={onCancelEdit}>Cancel</button>
        )}
      </div>
    </form>
  );
}

export default TaskForm;