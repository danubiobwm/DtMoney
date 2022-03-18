import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { Container } from "./styles";

Modal.setAppElement("#root");

interface NewTransitionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransitionModal({
  isOpen,
  onRequestClose,
}: NewTransitionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="fechar" />
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>
        <input placeholder="Titulo" />
        <input placeholder="Valor" type="number" />
        <input placeholder="Categoria" />
        <button type="submit"> Cadastrar</button>
      </Container>
    </Modal>
  );
}
