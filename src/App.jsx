import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

import AppRoutes from "./routes";
import ScrollToTop from "./components/common/ScrollToTop";

function RouteFocusManager() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "POP") {
      return;
    }

    const main = document.getElementById("main-content");

    if (main) {
      main.focus({ preventScroll: true });
    }
  }, [location.pathname, navigationType]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <RouteFocusManager />
      <AppRoutes />
    </>
  );
}