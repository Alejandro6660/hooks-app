const initialState = [
  {
    id: 1,
    todo: "recolectar la piedra del alma",
    done: false,
  },
];
const miFuncion = (state = initialState, action) => {
  return state;
};

const todos = miFuncion();
console.log(todos);
