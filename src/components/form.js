import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoslice";

const Form = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const onchange = (e) => {
    setTodoText(e.target.value);
  };

  const handleAdd = () => {
    if (todoText.trim() !== "") {
      dispatch(addTodo({ id: Date.now(), text: todoText }));
      setTodoText("");
    }
  };
  console.log(todoText);
  return (
    <div className="az">
      <input
        id="addid"
        type="text"
        value={todoText}
        onChange={onchange}
        placeholder="What is the task today?"
      />

      <button
        style={{
          color: "white",
          backgroundColor: "#855afd",
          border: "none",
          position: "absolute",
          height: "40px",
          width: "70px",
          marginLeft: "-70px",
          borderRadius: "6px",
        }}
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default Form;
