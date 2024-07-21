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
}

const toastEventManager = new EventManager();

toastEventManager.on("addToast", (payload: any) => {
  console.log("addToast Listener", payload);
});

toastEventManager.emit("addToast", { type: "danger", text: "Teste" });

console.log({ toastEventManager });
