import { Phone } from "lucide-react";

import Container from "../common/Container";
import { site } from "../../data/site";

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <Container className="announcement-bar__content">
        <p>{site.serviceArea}</p>

        <a className="announcement-bar__phone" href={site.phoneHref}>
          <Phone aria-hidden="true" size={15} strokeWidth={2} />
          <span>{site.phoneDisplay}</span>
        </a>
      </Container>
    </div>
  );
}