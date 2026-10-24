"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";

const menuItems = [
  { label: "Home", href: "/", active: true },
  { label: "About Us", href: "#about" },
  { label: "Why Us", href: "#whyus" },
  { label: "Our Services", href: "#services" },
  { label: "Contact us", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="site-header" id="header">
        <div className="header-row">
          <Link href="/" className="header-logo" rel="home">
            <img src="/logo.png" width={363} height={153} alt="Mineral water filling machines" />
          </Link>

          <div className="header-end">
            <nav className="header-menu" aria-label="MENU">
              <ul>
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={item.active ? "active" : undefined}
                      aria-current={item.active ? "page" : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <a href="/Company-Profiles.pdf" className="btn-ghost" aria-label="Company Profile">
              Company Profile
            </a>
            <button
              type="button"
              className="menu-trigger"
              aria-label="Menu"
              aria-controls="offcanvas"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Icon name="menu" className="ico" />
            </button>
          </div>
        </div>
      </header>

      <div
        id="offcanvas"
        className={`offcanvas-overlay${open ? " open" : ""}`}
        role="dialog"
        aria-label="Offcanvas modal"
        aria-hidden={!open}
        onClick={(e) => e.target === e.currentTarget && setOpen(false)}
      >
        <div className="offcanvas-panel">
          <div className="offcanvas-actions">
            <button
              type="button"
              className="offcanvas-close"
              aria-label="Close drawer"
              onClick={() => setOpen(false)}
            >
              <Icon name="close" className="ico" />
            </button>
          </div>
          <div className="offcanvas-content">
            <nav className="mobile-menu" aria-label="MENU">
              <ul>
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={item.active ? "active" : undefined}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
