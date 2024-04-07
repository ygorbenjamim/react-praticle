import { useEffect, useRef, useState } from "react";
import { Container } from "./styles";

export function Modal() {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(true);
  };

  const handleCloseVisible = () => {
    setVisible(false);
  };

  const Component = () => {
    const [value, setValue] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      console.log("Mount");

      return () => {
        console.log("Dismount");
        if (containerRef.current) {
          //containerRef.current.style.animation = fadeOut;
        }
      };
    }, []);

    const handleIncrement = () => setValue(value + 1);

    if (!visible) return <></>;
    return (
      <Container ref={containerRef}>
        <h1>Modal</h1>
        <span>{value}</span>
        <div>
          <button onClick={handleIncrement}>Atualizar</button>
        </div>
      </Container>
    );
  };

  return {
    handleCloseVisible,
    handleVisible,
    Component,
  };
}
