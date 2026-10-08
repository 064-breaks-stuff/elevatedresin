import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  getConsentChoice,
  sendPageView,
  subscribeConsent
} from "../../utils/googleMeasurement";

export default function GooglePageViews() {
  const { pathname, search } = useLocation();
  const [choice, setChoice] = useState(getConsentChoice);

  useEffect(() => subscribeConsent(() => setChoice(getConsentChoice())), []);

  useEffect(() => {
    if (choice !== true) return undefined;
    let secondFrame;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => sendPageView(pathname + search));
    });
    return () => {
      cancelAnimationFrame(firstFrame);
      if (secondFrame !== undefined) cancelAnimationFrame(secondFrame);
    };
  }, [pathname, search, choice]);

  return null;
}
