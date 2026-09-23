import { site } from "../../data/site";

export default function GhlFormEmbed({ className = "" }) {
  return (
    <div className={`ghl-form-embed ${className}`.trim()}>
      <iframe
        src={site.ghlFormUrl}
        id={`inline-${site.ghlFormId}`}
        title={site.ghlFormName}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={site.ghlFormName}
        data-height="635"
        data-layout-iframe-id={`inline-${site.ghlFormId}`}
        data-form-id={site.ghlFormId}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
      />
    </div>
  );
}