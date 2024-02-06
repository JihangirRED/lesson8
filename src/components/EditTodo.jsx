import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTodos } from "../context/TodoContextProvider";

const EditTodo = () => {
  const { getOneTodo, oneTodo, editTodo } = useTodos();
  const { id } = useParams();
  const [name, setName] = useState(oneTodo.todoName);
  const [phone, setPhone] = useState(oneTodo.todoPhone);
  const [img, setImg] = useState(oneTodo.todoImg);
  const navigate = useNavigate();

  useEffect(() => {
    getOneTodo(id);
  }, []);
  useEffect(() => {
    setName(oneTodo.todoName);
    setPhone(oneTodo.todoPhone);
    setImg(oneTodo.todoImg);
  }, [oneTodo]);
  const handleClick = () => {
    if (!name || !phone || !img) {
      return;
    }
    let newTodo = {
      todoName: name,
      todoPhone: phone,
      todoImg: img,
    };
    editTodo(newTodo, id);
    navigate("/");
  };
  return (
    <div className="inp">
      <TextField
        id="outlined-multiline-flexible"
        multiline
        maxRows={4}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-multiline-flexible"
        multiline
        maxRows={4}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <TextField
        id="outlined-multiline-flexible"
        multiline
        maxRows={4}
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <Button onClick={handleClick}>Save</Button>
    </div>
  );
};

export default EditTodo;
