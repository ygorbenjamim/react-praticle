import { Modal } from "../../components/Modal";

export function ModalPage() {
  const { handleCloseVisible, handleVisible, Component } = Modal();
  return (
    <div>
      <button onClick={handleVisible}>Visible</button>
      <button onClick={handleCloseVisible}>Close</button>
      <Component />
    </div>
  );
}
