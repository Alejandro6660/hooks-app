import { /* useEffect, */ useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ value, name }) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const onRessetForm = () => {
    setFormState(initialForm);
  };

  /*   useEffect(() => {
    // console.log("useEffect change");
  }, [formState]); */

  return {
    formState,
    onInputChange,
    onRessetForm,
  };
};
