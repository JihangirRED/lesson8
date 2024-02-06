import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useTodos } from "../context/TodoContextProvider";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const { addTodo } = useTodos();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");
  const handleClick = () => {
    if (!name || !img || !phone) return;
    let newTodo = {
      todoName: name,
      todoImg: img,
      todoPhone: phone,
    };
    addTodo(newTodo);
    setName("");
    setPhone("");
    setImg("");
    navigate("/");
  };
  return (
    <div className="inp">
      <TextField
        id="outlined-multiline-flexible"
        label="Name"
        multiline
        maxRows={4}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Phone"
        multiline
        maxRows={4}
        onChange={(e) => setPhone(e.target.value)}
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Img"
        multiline
        maxRows={4}
        onChange={(e) => setImg(e.target.value)}
      />
      <Button onClick={handleClick}>Add Todo</Button>
    </div>
  );
};

export default AddTodo;
