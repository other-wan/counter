import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import Styles from "../styles/Counter.module.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

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
            <p>Error occurs when value reaches 5 </p>
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
