// TodoApp.js
import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editedTask, setEditedTask] = useState('');

  const addTask = () => {
    if (!newTask) {
        alert("Please add the task first");
      }
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    setEditingTaskIndex(null); // Reset editing index when a task is deleted
  };

  const editTask = (index) => {
    setEditingTaskIndex(index);
    setEditedTask(tasks[index]);
  };

  const saveEditedTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
    setEditingTaskIndex(null);
  };

  return (
   <>
   <h1 className='bg-black text-white p-5 text-center text-5xl font-bold'>TO-DO-APP</h1>
    <div className="max-w-md mx-auto mt-8 p-4 bg-black shadow-lg rounded-md">

      <div className="flex mb-4">
      <textarea
          rows="2"  // Set the number of rows
          className="w-full p-2 border border-black-300 rounded-md"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="p-2 bg-blue-500 text-white rounded-md ml-2"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 border-b text-white border-gray-300"
          >
            {editingTaskIndex === index ? (
              <>
                <input
                  type="text"
                  className="flex-grow p-2 border text-black border-gray-300 rounded-md mr-2"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button
                  className="p-2 bg-green-500 text-white rounded-md mr-2"
                  onClick={() => saveEditedTask(index)}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{task}</span>
                <div>
                  <button
                    className="text-red-500 mr-2  hover:bg-sky-700 ... text-white"
                    onClick={() => editTask(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500
                     hover:bg-sky-700 ..."
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
  
};


export default TodoApp;
