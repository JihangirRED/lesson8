import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import AddTodo from "../components/AddTodo";
import EditTodo from "../components/EditTodo";
import TodoDetails from "../components/TodoDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddTodo />} />
      <Route path="/edit/:id" element={<EditTodo />} />
      <Route path="/details/:id" element={<TodoDetails />} />
    </Routes>
  );
};

export default MainRoutes;
