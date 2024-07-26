import { useEffect, useState } from "react";
import { ToastMessage } from "../ToastMessage";
import { Container } from "./style";
import { toastEventManager } from "../../../../utils/toast";
import { ToastType } from "../../../../types";

export function ToastContainer() {
  const [messages, setMessages] = useState<ToastType[]>([]);

  useEffect(() => {
    const handleAddToast = ({ type, text }: Omit<ToastType, "id">) => {
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text },
      ]);
    };

    toastEventManager.on("addToast", handleAddToast);

    return () => {
      toastEventManager.removeListener("addToast", handleAddToast);
    };
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          text={message.text}
          type={message.type}
        />
      ))}
    </Container>
  );
}
