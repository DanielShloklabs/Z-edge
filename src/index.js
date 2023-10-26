import React from "react";
import ReactDOM from "react-dom/client";
import "./app/common/styles/index.css";
import App from "./App";
import { ThemeProvider } from "./app/common/theme/themeContext";
import { MenuProvider } from "./app/common/utils/menuContext";
import { AuthProvider } from "./app/common/utils/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <MenuProvider>
          <App />
        </MenuProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
