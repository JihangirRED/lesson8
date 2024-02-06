import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useTodos } from "../context/TodoContextProvider";
import { Link } from "react-router-dom";

const TodoItems = ({ todoName, todoPhone, todoImg, id }) => {
  const { deleteTodo } = useTodos();
  return (
    <div>
      <img className="img" src={todoImg} alt="" />
      <h3>{todoName}</h3>
      <h5>{todoPhone}</h5>
      <Button onClick={() => deleteTodo(id)}>Delete</Button>
      <Link to={`/edit/${id}`}>
        <Button>Edit</Button>
      </Link>
      <Link to={`/details/${id}`}>
        <Button>Details</Button>
      </Link>
    </div>
  );
};

export default TodoItems;
