import React from 'react';
import './style/Task.scss';

function Task({ task, onDelete }) {
  const { id, description } = task;

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="task-item">
      <span>{description}</span>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;
