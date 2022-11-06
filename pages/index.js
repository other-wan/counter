import { useRef } from "react";
import Layout from "../components/Layout";
import useCounter from "../hooks/useCounter";
import Styles from "../styles/Counter.module.css";

export default function Home() {
  const inputRef = useRef();
  const { counter, increment, decrement, reset, setValue } = useCounter();

  const handleSetValue = () =>
    setValue(Number.parseInt(inputRef.current.value));

  return (
    <Layout
      main={
        <div className={Styles.home}>
          <h1>Custom Hook</h1>
          <div className={Styles.counter}>
            <button className="btn__primary" onClick={increment}>
              +
            </button>
            <p>{counter}</p>
            <button className="btn__primary" onClick={decrement}>
              -
            </button>
          </div>

          <div className={Styles.reset}>
            <button className="btn__secondary" onClick={reset}>
              reset
            </button>
            <div className={Styles.set}>
              <input ref={inputRef} type="number" name="set" id="set" />
              <button className="btn__secondary" onClick={handleSetValue}>
                set
              </button>
            </div>
          </div>
        </div>
      }
    />
  );
}
