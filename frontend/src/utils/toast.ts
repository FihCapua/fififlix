import EventManager from "../lib/eventManager";
import { ToastType } from "../types";

export const toastEventManager = new EventManager();

export const Toast = ({ type, text }: Omit<ToastType, "id">) => {
  toastEventManager.emit("addToast", { type, text });
};
