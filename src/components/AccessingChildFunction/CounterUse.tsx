import { useRef } from "react";
import Counter, { CounterRef } from "./Counter";

function CounterUse() {
  const counterRef = useRef<CounterRef>(null);

  const handleReset = () => {
    // Acessando funções do componente filho
    counterRef.current?.handleReset();
  };

  return (
    <div>
      <Counter ref={counterRef} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default CounterUse;
