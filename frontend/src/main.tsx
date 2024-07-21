import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./app/App.tsx";

import "./lib/eventManager.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
