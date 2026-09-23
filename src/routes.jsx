import { Route, Routes } from "react-router-dom";

import PageShell from "./components/layout/PageShell";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ResinBoundPage from "./pages/ResinBoundPage";
import GlowRockPage from "./pages/GlowRockPage";
import RockCretePage from "./pages/RockCretePage";
import ResinWallPage from "./pages/ResinWallPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import ThankYouPage from "./pages/ThankYouPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PageShell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/resin-bound" element={<ResinBoundPage />} />
        <Route path="/services/glow-rock" element={<GlowRockPage />} />
        <Route path="/services/rock-crete" element={<RockCretePage />} />
        <Route path="/services/resin-wall" element={<ResinWallPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}