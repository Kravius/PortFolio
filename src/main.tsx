import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const app = createRoot(document.getElementById("root")!);
if (app) {
  app.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
