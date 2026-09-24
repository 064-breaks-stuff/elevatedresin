import { Helmet } from "react-helmet-async";

import AboutApproach from "../components/about/AboutApproach";
import AboutAudience from "../components/about/AboutAudience";
import AboutCredential from "../components/about/AboutCredential";
import AboutHero from "../components/about/AboutHero";
import AboutServiceArea from "../components/about/AboutServiceArea";
import AboutSystems from "../components/about/AboutSystems";
import AboutWorkmanship from "../components/about/AboutWorkmanship";
import { site } from "../data/site";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Elevated Resin Creations | {site.name}</title>

        <meta
          name="description"
          content="Learn about Elevated Resin Creations, an Approved Resin Rock Installer serving homeowners and commercial property owners in Menasha, Wisconsin and surrounding areas."
        />
      </Helmet>

      <AboutHero />
      <AboutAudience />
      <AboutSystems />
      <AboutApproach />
      <AboutCredential />
      <AboutServiceArea />
      <AboutWorkmanship />
    </>
  );
}