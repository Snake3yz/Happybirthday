import { BIRTHDAY_CONFIG } from "../data/config";
import { Sparkles, Heart, Image, Mail, Gift, Home } from "lucide-react";

const ICON_MAP = {
  home: Home,
  birthday: Sparkles,
  memories: Image,
  reasons: Heart,
  letter: Mail,
  surprise: Gift,
};

export default function Navbar({ activePage, setActivePage }) {
  const navItems = BIRTHDAY_CONFIG.NAVIGATION || [];

  return (
    <>
      {/* Desktop / Tablet Floating Pill Navbar */}
      <nav
        className="desktop-navbar"
        aria-label="Main Navigation"
        style={{
          position: "fixed",
          top: "1.2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 90,
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
          padding: "0.4rem 0.5rem",
          borderRadius: "var(--radius-full)",
          background: "rgba(255, 255, 255, 0.78)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1px solid rgba(255, 255, 255, 0.9)",
          boxShadow:
            "0 10px 30px -10px rgba(176, 42, 85, 0.12), 0 4px 12px rgba(0, 0, 0, 0.03)",
        }}
      >
        {navItems.map((item) => {
          const Icon = ICON_MAP[item.id] || Sparkles;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              id={`nav-btn-${item.id}`}
              onClick={() => setActivePage(item.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.55rem 1.05rem",
                borderRadius: "var(--radius-full)",
                border: "none",
                fontSize: "0.88rem",
                fontWeight: isActive ? "600" : "500",
                cursor: "pointer",
                background: isActive
                  ? "linear-gradient(135deg, var(--rose-primary), var(--rose-deep))"
                  : "transparent",
                color: isActive ? "#ffffff" : "var(--text-muted)",
                boxShadow: isActive
                  ? "0 4px 14px rgba(224, 87, 128, 0.35)"
                  : "none",
                transition: "all 0.25s cubic-bezier(0.25, 1, 0.35, 1)",
                whiteSpace: "nowrap",
              }}
            >
              <Icon size={15} strokeWidth={isActive ? 2.5 : 2} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Mobile Bottom Dock Navbar */}
      <nav
        className="mobile-navbar"
        aria-label="Mobile Navigation"
        style={{
          position: "fixed",
          bottom: "1rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 90,
          display: "none", // toggled via CSS media query
          width: "calc(100% - 1.5rem)",
          maxWidth: "460px",
          padding: "0.4rem 0.5rem",
          borderRadius: "24px",
          background: "rgba(255, 255, 255, 0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.95)",
          boxShadow: "0 12px 35px -5px rgba(176, 42, 85, 0.2)",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {navItems.map((item) => {
          const Icon = ICON_MAP[item.id] || Sparkles;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              id={`mobile-nav-btn-${item.id}`}
              onClick={() => setActivePage(item.id)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.2rem",
                padding: "0.45rem 0.6rem",
                borderRadius: "14px",
                border: "none",
                fontSize: "0.68rem",
                fontWeight: isActive ? "600" : "500",
                cursor: "pointer",
                background: isActive ? "var(--rose-soft)" : "transparent",
                color: isActive ? "var(--rose-deep)" : "var(--text-muted)",
                transition: "all 0.2s ease",
                flex: 1,
              }}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              <span
                style={{
                  maxWidth: "54px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.mobileLabel || item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-navbar {
            display: none !important;
          }
          .mobile-navbar {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
