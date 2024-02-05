import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoCreateTask } from "./components/TodoCreateTask";
import { TodoList } from "./components/TodoList";
const initialState = [];
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleRemoveTodo = (id) => {
    const action = {
      type: "[TODO] remove Todo",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <>
      <h1>TodoApp</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <h2 className="px-2 text-success">Todo List</h2>
          <hr />
          <TodoList todos={todos} onRemoveTodo={handleRemoveTodo}></TodoList>
        </div>
        <div className="col-5">
          <h2 className="px-2 text-success">Agregar Todo</h2>
          <hr />
          <TodoCreateTask onNewTodo={handleNewTodo}></TodoCreateTask>
        </div>
      </div>
    </>
  );
};
