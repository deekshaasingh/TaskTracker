function FilterBar({ filters, onFilterChange }) {
  const handleChange = (e) => onFilterChange({ ...filters, [e.target.name]: e.target.value });

  return (
    <div className="filter-bar">
      <p className="eyebrow" style={{ width: '100%', marginBottom: 0 }}>Filter & Sort</p>
      <div className="form-group">
        <label>Filter by Status</label>
        <select name="status" value={filters.status} onChange={handleChange}>
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="form-group">
        <label>Filter by Priority</label>
        <select name="priority" value={filters.priority} onChange={handleChange}>
          <option value="">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="form-group">
        <label>Sort By</label>
        <select name="sortBy" value={filters.sortBy} onChange={handleChange}>
          <option value="createdAt">Date Created</option>
          <option value="dueDate">Due Date</option>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>

      <div className="form-group">
        <label>Order</label>
        <select name="order" value={filters.order} onChange={handleChange}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;