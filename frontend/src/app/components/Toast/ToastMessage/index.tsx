import { Container } from "./style";

import check from "../../../../assets/images/check_circle.svg";
import cancel from "../../../../assets/images/cancel_circle.svg";

type ToastMessageProps = {
    text: string;
    type?: "default" | "danger" | "success";
};

export function ToastMessage({ text, type = "default" }: ToastMessageProps) {
  return (

    <Container type={type}>
      {type === "success" && <img src={check} alt="check" />}
      {type === "danger" && <img src={cancel} alt="cancel" />}
      {text}
    </Container>
  );
}
