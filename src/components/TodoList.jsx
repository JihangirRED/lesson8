import React, { useEffect } from "react";
import { useTodos } from "../context/TodoContextProvider";
import TodoItems from "./TodoItems";

const TodoList = () => {
  const { getTodos, todos } = useTodos();
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="list">
      {todos.map((elem) => (
        <TodoItems key={elem.id} {...elem} />
      ))}
    </div>
  );
};

export default TodoList;
