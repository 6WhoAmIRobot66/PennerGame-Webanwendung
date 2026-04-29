import React, { useState } from 'react';
import styles from './Aufgabe1.module.css';

function Aufgabe1() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div className={styles.container}>
      <h1>TODO List</h1>
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        className={styles.input}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask} className={styles.button}>
        Add Task
      </button>
      <ul className={styles.tasks}>
        {tasks.map((task, index) => (
          <li key={index} className={styles.taskItem}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Aufgabe1;
