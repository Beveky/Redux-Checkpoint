import React from "react";
import TodosList from "./todosList";
import { useSelector } from "react-redux";

const TodoMap = ({ showDone }) => {
  const { todo } = useSelector((state) => state.todos);
  const filteredTodos = showDone
    ? todo.filter((todoItem) => todoItem.done)
    : todo;

  return (
    <div>
      <ul>
        {filteredTodos.map((todo) => (
          <TodosList key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoMap;
