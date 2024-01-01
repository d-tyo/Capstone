import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LicenseInfo } from "@mui/x-license-pro";

LicenseInfo.setLicenseKey(import.meta.env.VITE_MUI_LICENSE);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
