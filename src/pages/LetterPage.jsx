import React, { useState } from "react";
import { BIRTHDAY_CONFIG } from "../data/config";
import { Mail, Heart, Sparkles, ArrowRight, RotateCcw } from "lucide-react";

export default function LetterPage({ onNext }) {
  const [isOpen, setIsOpen] = useState(false);
  const letter = BIRTHDAY_CONFIG.LOVE_LETTER || {};

  const handleOpenLetter = () => {
    setIsOpen(true);
  };

  const handleCloseLetter = () => {
    setIsOpen(false);
  };

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
      <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
        {/* Badge */}
        <div className="romantic-badge" style={{ marginBottom: "1.2rem" }}>
          <Mail size={14} />
          <span>{letter.badge || "A Sealed Message"}</span>
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight: "700",
            color: "var(--text-main)",
            marginBottom: "1rem",
          }}
        >
          {letter.title || "A Birthday Letter For You"}
        </h2>
        <p
          style={{
            fontSize: "1.08rem",
            color: "var(--text-muted)",
            maxWidth: "540px",
            margin: "0 auto 3rem auto",
            lineHeight: 1.6,
          }}
        >
          {letter.description}
        </p>

        {/* Interactive Envelope Experience */}
        {!isOpen ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "3.5rem",
            }}
          >
            {/* 3D Styled Closed Envelope */}
            <div
              onClick={handleOpenLetter}
              id="envelope-container"
              style={{
                position: "relative",
                width: "min(90vw, 360px)",
                height: "240px",
                backgroundColor: "#fffdfb",
                borderRadius: "18px",
                boxShadow:
                  "0 20px 45px -10px rgba(176, 42, 85, 0.2), 0 8px 16px rgba(0,0,0,0.06)",
                border: "1px solid rgba(224, 87, 128, 0.2)",
                cursor: "pointer",
                margin: "0 auto 2rem auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.4s cubic-bezier(0.25, 1, 0.35, 1)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03) translateY(-4px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1) translateY(0)")}
            >
              {/* Envelope Flap Triangle */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 0,
                  height: 0,
                  borderLeft: "min(45vw, 180px) solid transparent",
                  borderRight: "min(45vw, 180px) solid transparent",
                  borderTop: "125px solid #fae6ec",
                  zIndex: 2,
                }}
              />

              {/* Wax Seal Stamp in the center */}
              <div
                style={{
                  position: "absolute",
                  top: "100px",
                  zIndex: 10,
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "#c03964",
                  backgroundImage: "radial-gradient(circle, #e05780 20%, #9d174d 100%)",
                  boxShadow:
                    "0 6px 16px rgba(157, 23, 77, 0.4), inset 0 2px 4px rgba(255,255,255,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  border: "2px solid #ffffff",
                }}
              >
                <Heart size={26} fill="#ffffff" />
              </div>

              {/* To label on envelope front */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.8rem",
                  fontFamily: "var(--font-script)",
                  fontSize: "1.85rem",
                  color: "var(--rose-deep)",
                  zIndex: 3,
                }}
              >
                {BIRTHDAY_CONFIG.HER_NAME} ❤️
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={handleOpenLetter}
              id="open-letter-btn"
              className="btn-romantic"
              style={{
                fontSize: "1.1rem",
                padding: "0.95rem 2.6rem",
                animation: "pulseGlow 2.5s infinite",
              }}
            >
              <span>{letter.openButtonText || "Open Letter 💌"}</span>
              <Sparkles size={16} />
            </button>
          </div>
        ) : (
          /* Opened Letter / Unfolded Romantic Parchment View */
          <div
            style={{
              animation: "fadeInScale 0.6s cubic-bezier(0.25, 1, 0.35, 1) forwards",
              marginBottom: "3.5rem",
            }}
          >
            <div
              className="glass-card"
              style={{
                backgroundColor: "#fffefc",
                backgroundImage:
                  "radial-gradient(#fae8ee 1px, transparent 1px), radial-gradient(#faf0e6 1px, #fffefc 1px)",
                backgroundSize: "24px 24px",
                backgroundPosition: "0 0, 12px 12px",
                padding: "clamp(2rem, 5vw, 4rem)",
                borderRadius: "28px",
                border: "1px solid rgba(224, 87, 128, 0.2)",
                boxShadow: "0 25px 60px -15px rgba(176, 42, 85, 0.18)",
                textAlign: "left",
                position: "relative",
              }}
            >
              {/* Wax Seal Decoration at Top Right */}
              <div
                style={{
                  position: "absolute",
                  top: "1.8rem",
                  right: "1.8rem",
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #e05780, #9d174d)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  boxShadow: "0 4px 12px rgba(157, 23, 77, 0.3)",
                }}
              >
                <Heart size={20} fill="#ffffff" />
              </div>

              {/* Letter Date */}
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  color: "var(--rose-deep)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "1.6rem",
                }}
              >
                {letter.date} • {BIRTHDAY_CONFIG.BIRTHDAY_DISPLAY}
              </div>

              {/* Salutation */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
                  fontStyle: "italic",
                  color: "var(--text-main)",
                  marginBottom: "1.8rem",
                }}
              >
                {letter.recipient}
              </h3>

              {/* Letter Paragraphs */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.3rem",
                  marginBottom: "2.4rem",
                }}
              >
                {(letter.paragraphs || []).map((para, index) => (
                  <p
                    key={index}
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.05rem, 2.4vw, 1.25rem)",
                      lineHeight: 1.85,
                      color: "var(--text-main)",
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Closing & Handwritten Signature */}
              <div style={{ marginTop: "2rem", borderTop: "1px dashed rgba(224, 87, 128, 0.2)", paddingTop: "1.5rem" }}>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.1rem",
                    fontStyle: "italic",
                    color: "var(--text-muted)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {letter.closing}
                </p>
                <div
                  style={{
                    fontFamily: "var(--font-script)",
                    fontSize: "2.4rem",
                    color: "var(--rose-deep)",
                    lineHeight: 1.2,
                  }}
                >
                  {letter.sender}
                </div>
              </div>

              {/* Postscript */}
              {letter.postscript && (
                <div
                  style={{
                    marginTop: "1.6rem",
                    paddingTop: "1.2rem",
                    borderTop: "1px solid rgba(0,0,0,0.06)",
                    fontSize: "0.95rem",
                    color: "var(--text-muted)",
                    fontStyle: "italic",
                  }}
                >
                  {letter.postscript}
                </div>
              )}
            </div>

            {/* Controls under opened letter: fold back or continue to final surprise */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                marginTop: "2.2rem",
              }}
            >
              <button
                onClick={handleCloseLetter}
                id="refold-letter-btn"
                className="btn-secondary"
                style={{ fontSize: "0.9rem" }}
              >
                <RotateCcw size={15} />
                <span>{letter.foldButtonText || "Fold Letter Again"}</span>
              </button>

              <button
                onClick={onNext}
                id="goto-surprise-btn"
                className="btn-romantic"
                style={{ fontSize: "1.05rem" }}
              >
                <span>{letter.nextButtonText || "One Last Surprise ❤️"}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
