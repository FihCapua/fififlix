import ReactDOM from "react-dom";

import { Button } from "../Button";
import { Container, FooterModal, Overlay } from "./style";

export function Modal({
  title,
  description,
  danger,
  visible,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
}: { title: string, description: string, danger?: boolean, visible: boolean, cancelLabel?: string, confirmLabel?: string, onCancel?: () => void, onConfirm?: () => void }) {
  if (!visible) return null;

  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h5>{title}</h5>

        <p>{description}</p>

        <FooterModal>
          <Button type="button" className="cancel-btn" onClick={onCancel}>{cancelLabel}</Button>

          <Button type="button" className="delete-btn" danger={danger} onClick={onConfirm}>{confirmLabel}</Button>
        </FooterModal>
      </Container>
    </Overlay>,
    document.getElementById("modal-root")!,
  );
}
