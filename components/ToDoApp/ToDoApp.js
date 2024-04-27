import React, { useState } from "react";
import "./ToDoApp.css";

export default function ToDoApp() {
  const [input, setInput] = useState("");
  const [userInput, setUserInput] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (input === "") {
      window.alert("Input field can not be empty");
    } else {
      setUserInput([...userInput, input.trim()]);
      setInput("");
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setInput(userInput[index]); // Set input value to the current todo item text
  };

  const handleSave = (index) => {
    // Update the todo item with the new text
    const updatedUserInput = userInput.map((item, i) =>
      i === index ? input.trim() : item
    );
    setUserInput(updatedUserInput);
    setEditIndex(null); // Exit edit mode
  };

  const handleDelete = (index) => {
    const updatedUserInput = userInput.filter((_, i) => i !== index);
    setUserInput(updatedUserInput);
    setEditIndex(null);
  };

  return (
    <>
      <h1>Manage Your Todos</h1>
      <div className="todoparent">
        <div className="todocontainer">
          <input
            type="text"
            placeholder="Enter To Do here..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
            autoFocus
          />
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
      <>
        {userInput.map((item, index) => (
          <div className="todos">
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={() => handleSave(index)}>Save</button>
              </>
            ) : (
              <>
                <li key={index}>{item}</li>
                <div className="buttons">
                  <button className="edit" onClick={() => handleEdit(index)}>
                    🖋
                  </button>
                  <button onClick={() => handleDelete(index)}>X</button>
                </div>
              </>
            )}
          </div>
        ))}
      </>
    </>
  );
}
