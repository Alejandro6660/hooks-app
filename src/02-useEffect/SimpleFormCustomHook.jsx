import { useForm } from "../hooks/useForm";
// import { Message } from "./Message";

export const SimpleFormCustomHook = () => {
  const { formState, onInputChange, onRessetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={formState.username}
        onChange={(e) => onInputChange(e.target)}
      />
      <input
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Email"
        name="email"
        value={formState.email}
        onChange={(e) => onInputChange(e.target)}
      />
      <input
        type="password"
        className="form-control mt-2 mb-2"
        placeholder="password"
        name="password"
        value={formState.password}
        onChange={(e) => onInputChange(e.target)}
      />
      <button className="btn btn-primary mt-2" onClick={onRessetForm}>
        Borrar
      </button>
    </>
  );
};
