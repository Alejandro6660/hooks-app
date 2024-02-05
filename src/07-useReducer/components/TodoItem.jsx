export const TodoItem = ({ todo, onRemoveTodo }) => {
  return (
    <>
      <li
        className="list-group-item d-flex justify-content-between"
        style={{ height: "3.5rem" }}
      >
        <span className="align-self-center fw-medium text-dark-emphasis">
          {todo.description}
        </span>
        <button
          className="btn btn-danger fw-bolder"
          onClick={() => onRemoveTodo(todo.id)}
        >
          X
        </button>
      </li>
    </>
  );
};
