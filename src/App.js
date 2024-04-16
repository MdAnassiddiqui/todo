import React, { useState } from 'react';
import Form from "./component/todoForm";
import Task from "./component/todoTask";
import './component/style/app.scss';
function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (!inputValue.trim()) return;
    const newTask = {
      id: Date.now(),
      description: inputValue.trim()
    };
    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <h1 className='List'>To-Do List</h1>
      <Form className="form"
        onSubmit={handleAddTask}
        inputValue={inputValue}
        onInputChange={handleInputChange}
      />
      <div className='task'>
        {tasks.map(task => (
          <Task key={task.id} task={task} onDelete={handleDeleteTask} />
        ))}
      </div>
    </div>
  );
}

export default App;
