import { Container } from "./style";

import check from "../../../../assets/images/check_circle.svg";
import cancel from "../../../../assets/images/cancel_circle.svg";
import { ToastType } from "../../../../types";

export function ToastMessage({
  id, text, type = "default", onRemoveMessage,
}: ToastType) {
  const handleRemoveToast = () => {
    if (onRemoveMessage && id !== undefined) {
      onRemoveMessage(id);
    }
  };

  return (

    <Container type={type} onClick={handleRemoveToast}>
      {type === "success" && <img src={check} alt="check" />}
      {type === "danger" && <img src={cancel} alt="cancel" />}
      {text}
    </Container>
  );
}
