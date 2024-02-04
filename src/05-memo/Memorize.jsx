import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter();
  const [show, setShow] = useState();

  return (
    <>
      <h1>
        Counter: <Small value={counter}></Small>
      </h1>

      <button onClick={() => increment()} className="btn btn-primary">
        +1
      </button>
      <button
        onClick={() => setShow(!show)}
        className="btn btn-outline-primary mx-3"
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
