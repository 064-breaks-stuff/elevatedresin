import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import GoogleConsentControls from "./components/conversion/GoogleConsentControls";
import GooglePageViews from "./components/conversion/GooglePageViews";

import "./styles/reset.css";
import "./styles/tokens.css";
import "./styles/fonts.css";
import "./styles/global.css";
import "./styles/utilities.css";
import "./styles/animations.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/google-consent.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <GooglePageViews />
        <App />
        <GoogleConsentControls />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
