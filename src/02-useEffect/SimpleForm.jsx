import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Ale6ix",
    email: "ale6ix@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ value, name }) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("useEffect change");
  }, [formState]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={(e) => onInputChange(e.target)}
      />
      <input
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => onInputChange(e.target)}
      />
      {username === "Ale6ix" && <Message />}
    </>
  );
};
