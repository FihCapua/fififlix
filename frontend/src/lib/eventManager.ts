export default class EventManager {
  listeners: Map<string, any[]> = new Map();

  constructor() {
    this.listeners = new Map();
  }

  on(event: string, listener: any) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event)?.push(listener);
  }

  emit(event: string, payload: any) {
    if (this.listeners.has(event)) this.listeners.get(event)?.forEach((listener: any) => listener(payload));
  }

  removeListener(event: string, listenerToRemove: any) {
    const listeners = this.listeners.get(event);

    if (!listeners) {
      return;
    }

    const filteredListeners = listeners.filter((listener: any) => listener !== listenerToRemove);

    this.listeners.set(event, filteredListeners);
  }
}

const toastEventManager = new EventManager();

toastEventManager.on("addToast", (payload: any) => {
  console.log("addToast Listener", payload);
});

toastEventManager.emit("addToast", { type: "danger", text: "Teste" });

console.log({ toastEventManager });
