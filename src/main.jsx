import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./pages/index.jsx";
import { RouterProvider } from "react-router-dom";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
