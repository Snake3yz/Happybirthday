import React from "react";
import { BIRTHDAY_CONFIG } from "../data/config";
import InteractiveCake from "../components/InteractiveCake";
import { ArrowRight, Gift } from "lucide-react";

export default function BirthdayPage({ onNext }) {
  const section = BIRTHDAY_CONFIG.BIRTHDAY_SECTION || {};

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "6.5rem 1.5rem 6rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="container" style={{ maxWidth: "860px", textAlign: "center" }}>
        {/* Section Badge */}
        <div className="romantic-badge" style={{ marginBottom: "1.2rem" }}>
          <Gift size={14} />
          <span>{section.badge || "Birthday Wish"}</span>
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
            fontWeight: "700",
            marginBottom: "1.2rem",
            color: "var(--text-main)",
          }}
        >
          {section.title || "Happy Birthday"}
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.7,
            color: "var(--text-muted)",
            maxWidth: "680px",
            margin: "0 auto 2.8rem auto",
          }}
        >
          {section.description}
        </p>

        {/* Interactive Cake Component */}
        <div style={{ marginBottom: "3.5rem" }}>
          <InteractiveCake />
        </div>

        {/* Birthday Wishes Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3.5rem",
            textAlign: "left",
          }}
        >
          {(section.wishes || []).map((wish, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: "1.8rem",
                borderRadius: "20px",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "0.8rem",
                  display: "inline-block",
                }}
              >
                {wish.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontFamily: "var(--font-serif)",
                  color: "var(--text-main)",
                  marginBottom: "0.5rem",
                }}
              >
                {wish.title}
              </h3>
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                }}
              >
                {wish.text}
              </p>
            </div>
          ))}
        </div>

        {/* Next Section Button */}
        <button
          onClick={onNext}
          id="goto-memories-btn"
          className="btn-romantic"
          style={{ fontSize: "1.05rem" }}
        >
          <span>{section.nextButtonText || "See Our Memories"}</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
