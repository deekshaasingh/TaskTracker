function TaskItem({ task, onEdit, onDelete }) {
  const priorityClass = `priority-${task.priority}`;
  const statusClass = `status-${task.status}`;

  return (
    <div className={`task-card ${statusClass}`}>
      <span className={`signal-bar ${priorityClass}`} />
      <div className="task-card-header">
        <h3>{task.title}</h3>
        <span className={`badge ${statusClass}`}>{task.status}</span>
      </div>
      {task.description && <p className="task-description">{task.description}</p>}
      <div className="task-meta">
        <span className={`badge ${priorityClass}`}>{task.priority}</span>
        {task.dueDate && <span className="due-date">DUE {new Date(task.dueDate).toLocaleDateString()}</span>}
      </div>
      <div className="task-actions">
        <button onClick={() => onEdit(task)}>Edit</button>
        <button className="btn-danger" onClick={() => onDelete(task._id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;