import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

// do not touch unless you know what you're doing
document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(<App />);
});




