import { Helmet } from "react-helmet-async";

import ProjectBenefits from "../components/projects/ProjectBenefits";
import ProjectCTA from "../components/projects/ProjectCTA";
import ProjectHero from "../components/projects/ProjectHero";
import ProductOptions from "../components/projects/ProductOptions";
import DrainageBenefits from "../components/projects/DrainageBenefits";
import LocalProof from "../components/projects/LocalProof";
import WisconsinDurability from "../components/projects/WisconsinDurability";
import { site } from "../data/site";

export default function ProjectLandingPage({ page }) {
  return (
    <>
      <Helmet>
        <title>{page.pageTitle}</title>

        <meta name="description" content={page.metaDescription} />

        <link rel="canonical" href={`${site.domain}${page.route}`} />
      </Helmet>

      <ProjectHero page={page} />

      <ProjectBenefits benefits={page.benefits} />

      <ProductOptions products={page.recommendedProducts} />

      <WisconsinDurability content={page.wisconsinDurability} />

      <DrainageBenefits content={page.drainageBenefits} />

      <LocalProof proof={page.localProof} />

      <ProjectCTA page={page} />
    </>
  );
}