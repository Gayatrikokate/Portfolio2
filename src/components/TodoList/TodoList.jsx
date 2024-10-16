import React, { useState, useEffect } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput(""); // Clear input after adding
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleSaveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    alert("Tasks saved successfully!");
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-6">Add Your Daily Tasks </h2>
      <form onSubmit={handleAddTask} className="flex mb-4">
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          placeholder="Add a new task"
          className="flex-grow  p-2 border border-gray-300 rounded-md mr-2 "
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded-md">
          Add Task
        </button>
      </form>
      <ul className="list-disc pl-5">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            {task}
            <button
              onClick={() => handleRemoveTask(index)}
              className="text-red-600 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={handleSaveTasks}
        className="mt-4 bg-green-600 text-white p-2 rounded-md"
      >
        Save Tasks
      </button>

      <br /><br />
     
    </div>
    
  );
};

export default TodoList;
