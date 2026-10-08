import { useEffect, useRef, useState } from "react";
import {
  getConsentChoice,
  saveConsentChoice,
  subscribeConsent
} from "../../utils/googleMeasurement";

export default function GoogleConsentControls() {
  const [choice, setChoice] = useState(getConsentChoice);
  const [open, setOpen] = useState(() => getConsentChoice() === null);
  const settingsRef = useRef(null);

  useEffect(() => subscribeConsent(() => setChoice(getConsentChoice())), []);

  function choose(accepted) {
    setOpen(false);
    saveConsentChoice(accepted);
    requestAnimationFrame(() => settingsRef.current?.focus());
  }

  return (
    <>
      <button
        ref={settingsRef}
        type="button"
        className="google-consent-settings"
        aria-expanded={open}
        aria-controls={open ? "google-consent-panel" : undefined}
        onClick={() => setOpen((value) => !value)}
      >
        Google tracking settings
      </button>

      {open && (
        <section
          id="google-consent-panel"
          className="google-consent-panel"
          aria-labelledby="google-consent-title"
        >
          <h2 id="google-consent-title">Optional Google measurement</h2>
          <p>
            With your permission, we use Google Analytics and Google Ads
            cookies to understand website use and measure advertising.
            Personalised advertising is disabled in this setup.
            You can accept or reject this optional measurement and change
            your choice here later.
          </p>
          <p>
            These controls cover Google measurement, not the embedded
            enquiry form or other services. Your enquiry form remains available.
            Changing an accepted choice to rejected reloads the page;
            finish any unsent enquiry first.
          </p>
          <p>
            <a href="/privacy-policy">Read our Privacy Policy</a>
            {choice !== null && ` Current choice: ${choice ? "accepted" : "rejected"}.`}
          </p>
          <div className="google-consent-actions">
            <button type="button" onClick={() => choose(false)}>Reject optional tracking</button>
            <button type="button" onClick={() => choose(true)}>Accept measurement</button>
          </div>
        </section>
      )}
    </>
  );
}
