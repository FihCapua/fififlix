import ReactDOM from "react-dom";

import { Button } from "../Button";
import { Container, FooterModal, Overlay } from "./style";

export function Modal({ title, description, danger }: { title: string, description: string, danger?: boolean }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h5>{title}</h5>

        <p>{description}</p>

        <FooterModal>
          <Button type="button" className="cancel-btn">Cancelar</Button>

          <Button type="button" className="delete-btn" danger={danger}>Deletar</Button>
        </FooterModal>
      </Container>
    </Overlay>,
    document.getElementById("modal-root")!,
  );
}
