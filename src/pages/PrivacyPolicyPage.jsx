import { Helmet } from "react-helmet-async";

import LegalDocument from "../components/legal/LegalDocument";
import { privacyPolicy } from "../data/legal";
import { site } from "../data/site";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | {site.name}</title>

        <meta
          name="description"
          content="Draft Privacy Policy for Elevated Resin Creations, pending client review and approval."
        />
      </Helmet>

      <LegalDocument document={privacyPolicy} />
    </>
  );
}