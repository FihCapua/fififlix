import { useCallback, useEffect, useState } from "react";
import { ToastMessage } from "../ToastMessage";
import { Container } from "./style";
import { toastEventManager } from "../../../../utils/toast";
import { ToastType } from "../../../../types";

export function ToastContainer() {
  const [messages, setMessages] = useState<ToastType[]>([]);

  useEffect(() => {
    const handleAddToast = ({ type, text, duration }: Omit<ToastType, "id">) => {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(), type, text, duration,
        },
      ]);
    };

    toastEventManager.on("addToast", handleAddToast);

    return () => {
      toastEventManager.removeListener("addToast", handleAddToast);
    };
  }, []);

  const handleRemoveMessage = useCallback((id: number) => {
    setMessages((prevState) => prevState.filter((message) => message.id !== id));
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          id={message.id}
          duration={message.duration}
          text={message.text}
          type={message.type}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}
    </Container>
  );
}
