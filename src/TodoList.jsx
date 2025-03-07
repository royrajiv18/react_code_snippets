import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === "") return; // Prevent adding empty tasks
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ width: "300px", margin: "20px auto", textAlign: "center" }}>
      <h2>To-Do List</h2>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            <span
              onClick={() => handleToggleTask(index)}
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {t.text}
            </span>
            <button
              onClick={() => handleDeleteTask(index)}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
