import React from 'react';
import './style/Form.scss';

function Form({ onSubmit, inputValue, onInputChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="enterTask"
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Enter task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default Form;
