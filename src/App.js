import React, { useState } from "react";
import "./App.css";
import Form from "./components/form";
import TodoMap from "./components/todoMap";
import { deleteAllTodo } from "../src/redux/todoslice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const StyledText = styled.p`
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  font: bold;
`;

function App() {
  const { todo } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(deleteAllTodo(todo));
  };
  const [showDone, setShowDone] = useState(false);

  const handleToggleShowDone = () => {
    setShowDone(!showDone);
  };

  return (
    <div className="all">
      <div className="box">
        <br />
        <br />
        <br />
        <div className="App">
          <StyledText>
            <h1 style={{ color: "white" }}>Get Things Done!</h1>
            <br />
            <Form />
            <br />
            <TodoMap showDone={showDone} />
            <button
              style={{
                color: "white",
                backgroundColor: "#855afd",
                border: "none",
                borderRadius: "5px",
              }}
              onClick={handleDeleteAll}
            >
              Delete All
            </button>
            <button style={{ opacity: 0, border: "none" }}></button>
            <button
              style={{
                color: "white",
                backgroundColor: "#855afd",
                border: "none",
                borderRadius: "5px",
              }}
              onClick={handleToggleShowDone}
            >
              {showDone ? "Show All" : "Show Done"}
            </button>
          </StyledText>
        </div>
      </div>
    </div>
  );
}

export default App;
