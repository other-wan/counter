import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import Styles from "../styles/Counter.module.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }
  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </div>
      );
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

function BuggyCounterApp() {
  const [counter, setCounter] = useState(0);
  const inputRef = useRef();

  const handleIncrement = () => setCounter((prev) => prev + 1);
  const handleDecrement = () => setCounter((prev) => prev - 1);
  const handleReset = () => setCounter(0);
  const handleSetValue = () =>
    setCounter(Number.parseInt(inputRef.current.value));

  useEffect(() => {
    if (counter === 5) {
      throw new Error("Simulating Error Boundary");
    }
  }, [counter]);

  return (
    <Layout
      main={
        <ErrorBoundary>
          <div className={Styles.home}>
            <h1>Error Boundary</h1>
            <div className={Styles.counter}>
              <button className="btn__primary" onClick={handleIncrement}>
                +
              </button>
              <p>{counter}</p>
              <button className="btn__primary" onClick={handleDecrement}>
                -
              </button>
            </div>

            <div className={Styles.reset}>
              <button className="btn__secondary" onClick={handleReset}>
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
        </ErrorBoundary>
      }
    />
  );
}

export default BuggyCounterApp;
