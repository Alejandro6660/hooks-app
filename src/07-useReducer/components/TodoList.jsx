import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onRemoveTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => {
        return (
          <TodoItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
        );
      })}
    </ul>
  );
};
