import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API } from "../helpers/const";
export const useTodos = () => useContext(todoContext);
export const todoContext = createContext();

// ? 1) Создать INIT_STATE в котором будет лежать нгпчальное состояние
// ? 2) Создать функцию reduser в котором прописывается switch констроукция на проверку type
// ? 3) Вызвоть хук useResuseer(reduser, INIT_STATE) возвращает [state,dispatch]
const TodoContextProvider = ({ children }) => {
  const INIT_STATE = {
    todos: [],
    oneTodo: {},
  };
  const reduser = (state = INIT_STATE, action) => {
    switch (action.type) {
      case ACTIONS.GET_TODOS:
        return { ...state, todos: action.payload };
      case ACTIONS.GET_ONE_TODO:
        return { ...state, oneTodo: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reduser, INIT_STATE);
  //! CREATE
  const addTodo = async (todo) => {
    await axios.post(API, todo);
  };
  //! GET
  const getTodos = async () => {
    const { data } = await axios(API);
    dispatch({
      type: "GET_TODOS",
      payload: data,
    });
  };
  // ! DELETE
  const deleteTodo = async (id) => {
    await axios.delete(`${API}/${id}`);
    getTodos();
  };
  // ! EDIT
  const editTodo = async (newTodo, id) => {
    await axios.patch(`${API}/${id}`, newTodo);
    getTodos();
  };
  //! GET_ONE_TODO
  const getOneTodo = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_TODO",
      payload: data,
    });
  };

  const values = {
    todos: state.todos,
    oneTodo: state.oneTodo,
    addTodo,
    getTodos,
    deleteTodo,
    getOneTodo,
    editTodo,
  };
  return <todoContext.Provider value={values}>{children}</todoContext.Provider>;
};

export default TodoContextProvider;
