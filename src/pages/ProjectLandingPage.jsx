import { Helmet } from "react-helmet-async";

import ConcreteReplacement from "../components/projects/ConcreteReplacement";
import DrainageBenefits from "../components/projects/DrainageBenefits";
import LocalProof from "../components/projects/LocalProof";
import ProductOptions from "../components/projects/ProductOptions";
import ProjectBenefits from "../components/projects/ProjectBenefits";
import ProjectCTA from "../components/projects/ProjectCTA";
import ProjectFAQs from "../components/projects/ProjectFAQs";
import ProjectHero from "../components/projects/ProjectHero";
import RelatedProjects from "../components/projects/RelatedProjects";
import ValueProposition from "../components/projects/ValueProposition";
import WisconsinDurability from "../components/projects/WisconsinDurability";
import { projectPages } from "../data/projectPages";
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

      <ValueProposition content={page.valueProposition} />

      <ProjectBenefits benefits={page.benefits} />

      <ConcreteReplacement content={page.concreteReplacement} />

      <ProductOptions products={page.recommendedProducts} />

      <WisconsinDurability content={page.wisconsinDurability} />

      <DrainageBenefits content={page.drainageBenefits} />

      <LocalProof proof={page.localProof} />

      <ProjectFAQs faqs={page.faqs} />

      <RelatedProjects
        projectIds={page.relatedProjects}
        projectPages={projectPages}
      />

      <ProjectCTA page={page} />
    </>
  );
}