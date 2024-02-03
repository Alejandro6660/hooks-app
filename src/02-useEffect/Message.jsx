import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    // console.log("Mounted");
    const onMauseMove = ({ x, y }) => {
      const coords = { x, y };
      console.log(coords);
    };
    window.addEventListener("mousemove", onMauseMove);
    return () => {
      // console.log("Unmounted");
      window.removeEventListener("mousemove", onMauseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario y existente</h3>
    </>
  );
};
