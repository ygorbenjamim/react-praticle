import { Ref, forwardRef, useImperativeHandle, useState } from "react";

type CounterProps = {};

export type CounterRef = {
  handleReset: () => void;
};

const Counter = (props: CounterProps, ref: Ref<CounterRef>) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((oldValue) => oldValue + 1);
  };

  const handleDecrement = () => {
    setCount((oldValue) => oldValue - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  useImperativeHandle(ref, () => ({ handleReset }));

  return (
    <div>
      <p>Value: {count}</p>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default forwardRef(Counter);
