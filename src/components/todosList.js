import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleDone } from "../redux/todoslice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const TodosList = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);
  const dispatch = useDispatch();

  const onchange = (e) => {
    setUpdatedText(e.target.value);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
    setUpdatedText(updatedText);
  };

  const handleToggleDone = () => {
    dispatch(toggleDone({ id: todo.id }));
  };

  const handleSave = () => {
    if (updatedText.trim() !== "") {
      dispatch(editTodo(todo.id, updatedText));
      setIsEditing(false);
    }
  };

  return (
    <div className={`bodyli ${todo.done ? "done" : ""}`}>
      <div className="bodyli" style={{ padding: "10px" }}>
        <div className="lidiv">
          <li>
            {isEditing ? (
              <div className="lidiv">
                <input
                  id="addid"
                  type="text"
                  value={updatedText}
                  onChange={onchange}
                />
                <button
                  style={{
                    color: "white",
                    backgroundColor: "#855afd",
                    border: "none",
                    position: "absolute",
                    height: "40px",
                    width: "70px",
                    marginLeft: "330px",
                    borderRadius: "6px",
                  }}
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="lis">
                <h5
                  style={{
                    paddingLeft: "20px",
                    color: todo.done ? "#4f4d70" : "white",
                  }}
                >
                  {updatedText}
                </h5>
                <div
                  className="line-through"
                  style={{ display: todo.done ? "block" : "none" }}
                ></div>
                <div className="btn">
                  <button
                    style={{ background: "none", border: "none" }}
                    onClick={handleEdit}
                  >
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      style={{ color: "white" }}
                    />
                  </button>
                  <button style={{ opacity: 0, border: "none" }}></button>
                  <button
                    style={{ background: "none", border: "none" }}
                    onClick={handleDelete}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ color: "white" }}
                    />
                  </button>
                  <button style={{ opacity: 0, border: "none" }}>s</button>
                  <input
                    id="check"
                    type="checkbox"
                    checked={todo.done}
                    onChange={handleToggleDone}
                  />
                </div>
              </div>
            )}
          </li>
        </div>
      </div>
    </div>
  );
};

export default TodosList;
