import { useReducer, useRef } from "react";
import Layout from "../components/Layout";
import useCounter from "../hooks/useCounter";
import Styles from "../styles/Counter.module.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };

    case "decrement":
      return { ...state, count: state.count - action.payload };

    case "reset":
      return { ...state, count: 0 };

    case "set_value":
      return { ...state, count: action.payload };

    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const inputRef = useRef();

  return (
    <Layout
      main={
        <div className={Styles.home}>
          <h1>Reducer Hook</h1>
          <div className={Styles.counter}>
            <button
              className="btn__primary"
              onClick={() => dispatch({ type: "increment", payload: 1 })}
            >
              +
            </button>
            <p>{state.count}</p>
            <button
              className="btn__primary"
              onClick={() => dispatch({ type: "decrement", payload: 1 })}
            >
              -
            </button>
          </div>

          <div className={Styles.reset}>
            <button
              className="btn__secondary"
              onClick={() => dispatch({ type: "reset", payload: null })}
            >
              reset
            </button>
            <div className={Styles.set}>
              <input ref={inputRef} type="number" name="set" id="set" />
              <button
                className="btn__secondary"
                onClick={() =>
                  dispatch({
                    type: "set_value",
                    payload: Number.parseInt(inputRef.current.value),
                  })
                }
              >
                set
              </button>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Reducer;
