"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function WhatsAppButton() {
  const [showCta, setShowCta] = useState(true);

  return (
    <div className="wa-widget">
      {showCta && <div className="wa-cta">Contact us</div>}
      <a
        href="https://wa.me/919289589654"
        target="_blank"
        rel="noopener noreferrer"
        className="wa-btn"
        aria-label="WhatsApp"
        title="WhatsApp"
        onClick={() => setShowCta(false)}
      >
        <Icon name="whatsapp" className="ico" />
      </a>
    </div>
  );
}
