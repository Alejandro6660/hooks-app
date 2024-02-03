import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, dencrement, reset } = useCounter();
  return (
    <>
      <h1>Counter With Custom Hook: {counter}</h1>
      <hr />
      <button onClick={increment} className="btn btn-primary m-1">
        +1
      </button>
      <button onClick={reset} className="btn btn-primary m-1">
        reset
      </button>
      <button onClick={dencrement} className="btn btn-primary m-1">
        -1
      </button>
    </>
  );
};
