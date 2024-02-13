import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";

import "./index.css";
import { Index } from "./components/Index";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
