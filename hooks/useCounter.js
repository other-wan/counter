import { useState } from "react";

const useConter = (initialState = 0) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => setCounter((prev) => prev + 1);

  const decrement = () => setCounter((prev) => prev - 1);

  const reset = () => setCounter(0);

  const setValue = (value) => setCounter(value);

  return {
    counter,
    increment,
    decrement,
    reset,
    setValue,
  };
};

export default useConter;
