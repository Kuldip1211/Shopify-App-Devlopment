import React from "react";
import "./TopBar.css";
import shopifyLogo from "../assets/shopify_glyph.png";

export function TopBar() {
  return (
    <header className="topbar">
      <div className="logo-section">
        {/* Shopify logo */}
        <img
          src={shopifyLogo}
          alt="Shopify Logo"
          className="logo"
        />
        <span className="title">Shop Dashboard</span>
      </div>
    </header>
  );
}
