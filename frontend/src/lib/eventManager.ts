export default class EventManager {
  listeners: { [key: string]: any[] } = {};

  constructor() {
    this.listeners = {};
  }

  on(event: string, listener: any) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(listener);
  }

  emit(event: string, payload: any) {
    if (this.listeners[event]) this.listeners[event].forEach((listener: any) => listener(payload));
  }

  removeListener(event: string, listenerToRemove: any) {
    const listeners = this.listeners[event];

    if (!listeners) {
      return;
    }

    const filteredListeners = listeners.filter((listener: any) => listener !== listenerToRemove);

    this.listeners[event] = filteredListeners;
  }
}

const toastEventManager = new EventManager();

toastEventManager.on("addToast", (payload: any) => {
  console.log("addToast Listener", payload);
});

toastEventManager.emit("addToast", { type: "danger", text: "Teste" });

console.log({ toastEventManager });
