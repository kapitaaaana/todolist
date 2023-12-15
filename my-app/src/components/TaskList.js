import { useEffect, useState } from "react";
import "./tasklist.css";

import { FaTrash, FaPencilAlt } from "react-icons/fa";

export default function TaskList({ tasks, handleUpdate, handleDelete }) {
  return (
    <div className="tlist">
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

function Task({ task, handleUpdate, handleDelete }) {
  const [currentTask, setTask] = useState(task);
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(currentTask.text);

  useEffect(() => {
    handleUpdate(currentTask.id, currentTask);
  }, [currentTask]);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
    setTask({ ...currentTask, text: editedText });
  };

  const handleCancelClick = () => {
    setEditing(false);
    setEditedText(currentTask.text);
  };

  return (
    <div className={currentTask.done ? "t done" : "t undone"}>
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <>
          <p>{currentTask.text}</p>
          <div className="t-actions">
            <p>{currentTask.category}</p>
            <FaTrash size={18} onClick={() => handleDelete(currentTask.id)} />
            <FaPencilAlt size={18} onClick={handleEditClick} />
            <input
              type="checkbox"
              id="isdone"
              name="isdone"
              checked={currentTask.done}
              onChange={() => {
                setTask({ ...currentTask, done: !currentTask.done });
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}


/*import { useEffect, useState } from "react";
import "./tasklist.css";

import { FaTrash, FaPencilAlt } from "react-icons/fa";

export default function TaskList({ tasks, handleUpdate, handleDelete }) {
  return (
    <div className="tlist">
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );  
}

function Task({ task, handleUpdate, handleDelete }) {
  const [currentTask, setTask] = useState(task);
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(currentTask.text);

  useEffect(() => {
    handleUpdate(currentTask.id, currentTask);
  }, [currentTask]);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
    setTask({ ...currentTask, text: editedText });
  };

  const handleCancelClick = () => {
    setEditing(false);
    setEditedText(currentTask.text);
  };

  return (
    <div className={currentTask.done ? "t done" : "t undone"}>
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <>
          <p>{currentTask.text}</p>
          <div className="t-actions">
            <p>{task.category}</p>
            <FaTrash size={18} onClick={() => handleDelete(currentTask.id)} />
            <FaPencilAlt size={18} onClick={handleEditClick} />
            <input
              type="checkbox"
              id="isdone"
              name="isdone"
              checked={currentTask.done}
              onChange={() => {
                setTask({ ...currentTask, done: !currentTask.done });
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}


/*import { useEffect, useState } from "react";
import "./tasklist.css";

import { FaTrash, FaPencilAlt } from "react-icons/fa";


export default function TaskList({ tasks, handleUpdate, handleDelete, handleEdit }) {
  return (
    <div className="tlist">
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          
        />
      ))}
    </div>
  );
}

function Task({ task, handleUpdate, handleDelete, handleEdit }) {
  const [currentTask, setTask] = useState(task);
  
  useEffect(() => {
    handleUpdate(currentTask.id, currentTask);
  }, [currentTask]);
  
  return (
    <div className={currentTask.done ? "t done" : "t undone"}>
      <p>{currentTask.text}</p>
      <div className="t-actions">

        <p>{task.category}</p>
        
        <FaTrash size={18} onClick={() => handleDelete(currentTask.id)} />
        <input
          type="checkbox"
          id="isdone"
          name="isdone"
          checked={currentTask.done}
          onClick={() => {
            setTask({ ...currentTask, done: !currentTask.done });
          }}
        />
        
      
      </div>
    </div>
  );
}*/