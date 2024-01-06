import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";

import { Home } from "./components/Home";
import "./index.css";
import { Index } from "./components/Index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Index />
    </ThemeProvider>
  </React.StrictMode>
);
