import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { LoadingComponent } from "./LoadingComponent";
import { LoadingImg } from "./LoadingImg";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter();
  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );
  return (
    <>
      <h1>RickAndMortyAPI</h1>
      <hr />
      {!isLoading ? (
        <LoadingImg data={!!data && data}></LoadingImg>
      ) : (
        <LoadingComponent></LoadingComponent>
      )}
      <button className="btn btn-primary mt-5" onClick={increment}>
        Next Character
      </button>
    </>
  );
};
