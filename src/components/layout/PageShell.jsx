import { Outlet } from "react-router-dom";

import AnnouncementBar from "./AnnouncementBar";
import Footer from "./Footer";
import Header from "./Header";

export default function PageShell() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <AnnouncementBar />
      <Header />

      <main id="main-content" tabIndex="-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}