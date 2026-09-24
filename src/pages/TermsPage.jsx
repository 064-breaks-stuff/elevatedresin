import { Helmet } from "react-helmet-async";

import LegalDocument from "../components/legal/LegalDocument";
import { termsAndConditions } from "../data/legal";
import { site } from "../data/site";

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | {site.name}</title>

        <meta
          name="description"
          content="Draft Terms and Conditions for Elevated Resin Creations, pending client review and approval."
        />
      </Helmet>

      <LegalDocument document={termsAndConditions} />
    </>
  );
}