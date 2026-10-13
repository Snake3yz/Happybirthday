import React, { useState } from "react";
import { BIRTHDAY_CONFIG } from "../data/config";
import confetti from "canvas-confetti";
import { Gift, Heart, Sparkles, RotateCcw, Check } from "lucide-react";

export default function SurprisePage({ onRestart }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const surprise = BIRTHDAY_CONFIG.SURPRISE || {};

  const triggerGrandConfetti = () => {
    // Left cannon
    confetti({
      particleCount: 70,
      angle: 60,
      spread: 65,
      origin: { x: 0, y: 0.7 },
      colors: ["#e05780", "#ff758f", "#d4a373", "#ffd166", "#f72585"],
    });
    // Right cannon
    confetti({
      particleCount: 70,
      angle: 120,
      spread: 65,
      origin: { x: 1, y: 0.7 },
      colors: ["#e05780", "#ff758f", "#d4a373", "#ffd166", "#f72585"],
    });

    // Center burst of hearts / stars
    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 100,
        origin: { y: 0.5 },
        shapes: ["circle"],
        colors: ["#e05780", "#ff758f", "#ffffff"],
      });
    }, 350);
  };

  const handleOpenSurprise = () => {
    setIsRevealed(true);
    triggerGrandConfetti();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "6.5rem 1.5rem 6rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div className="container" style={{ maxWidth: "800px" }}>
        {/* Section Badge */}
        <div className="romantic-badge" style={{ marginBottom: "1.4rem" }}>
          <Gift size={14} />
          <span>{surprise.sectionBadge || "One Last Surprise ❤️"}</span>
        </div>

        {!isRevealed ? (
          /* Gift Box Mystery Screen */
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
                fontWeight: "700",
                color: "var(--text-main)",
                marginBottom: "1rem",
              }}
            >
              {surprise.mysteryTitle || "Just One More Thing..."}
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--text-muted)",
                maxWidth: "520px",
                margin: "0 auto 3rem auto",
                lineHeight: 1.6,
              }}
            >
              {surprise.mysteryDescription}
            </p>

            {/* Gift Box Graphic */}
            <div
              onClick={handleOpenSurprise}
              id="gift-box-trigger"
              style={{
                position: "relative",
                width: "160px",
                height: "160px",
                margin: "0 auto 2.5rem auto",
                cursor: "pointer",
                animation: "floatGentle 3s ease-in-out infinite",
              }}
              title={surprise.boxTooltip || "Click to open your surprise!"}
            >
              {/* Gift Box Lid */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "170px",
                  height: "36px",
                  backgroundColor: "#e05780",
                  borderRadius: "10px",
                  boxShadow: "0 6px 16px rgba(224, 87, 128, 0.35)",
                  zIndex: 3,
                }}
              >
                {/* Ribbon on lid */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "28px",
                    height: "100%",
                    backgroundColor: "#fae1c3",
                  }}
                />
                {/* Ribbon Bow */}
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: "6px",
                  }}
                >
                  <div
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "50% 50% 10% 50%",
                      backgroundColor: "#fae1c3",
                      transform: "rotate(-30deg)",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    }}
                  />
                  <div
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "50% 50% 50% 10%",
                      backgroundColor: "#fae1c3",
                      transform: "rotate(30deg)",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    }}
                  />
                </div>
              </div>

              {/* Gift Box Body */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "148px",
                  height: "130px",
                  backgroundColor: "#b02a55",
                  borderRadius: "0 0 16px 16px",
                  boxShadow: "0 18px 36px rgba(176, 42, 85, 0.3)",
                  zIndex: 2,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* Ribbon on box */}
                <div
                  style={{
                    width: "28px",
                    height: "100%",
                    backgroundColor: "#fae1c3",
                  }}
                />
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleOpenSurprise}
              id="open-surprise-btn"
              className="btn-romantic"
              style={{
                fontSize: "1.15rem",
                padding: "1.05rem 2.8rem",
                animation: "pulseGlow 2.5s infinite",
              }}
            >
              <Sparkles size={18} />
              <span>{surprise.buttonText || "Open Your Surprise ✨"}</span>
            </button>
          </div>
        ) : (
          /* Grand Revealed Climax */
          <div
            style={{
              animation: "grandGlowEntrance 0.8s cubic-bezier(0.25, 1, 0.35, 1) forwards",
            }}
          >
            {/* Grand Birthday Greeting */}
            <h2
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
                fontWeight: "700",
                color: "var(--rose-deep)",
                marginBottom: "1.2rem",
                lineHeight: 1.15,
                textShadow: "0 4px 25px rgba(224, 87, 128, 0.25)",
              }}
            >
              {surprise.cardTitle || "Happy Birthday, My Love ❤️"}
            </h2>

            {/* Emotional Highlight Quote */}
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.25rem, 3.2vw, 1.85rem)",
                fontStyle: "italic",
                color: "var(--text-main)",
                lineHeight: 1.5,
                maxWidth: "680px",
                margin: "0 auto 1.5rem auto",
              }}
            >
              "{surprise.finalMessage}"
            </p>

            {/* Cute Birthday Cat */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "1.75rem auto 1.75rem auto",
              }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: "26px",
                  padding: "6px",
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 227, 236, 0.7), rgba(255, 255, 255, 0.9))",
                  boxShadow:
                    "0 14px 34px -4px rgba(224, 87, 128, 0.22), 0 6px 14px rgba(0, 0, 0, 0.05)",
                  border: "1.5px solid rgba(224, 87, 128, 0.25)",
                  display: "inline-block",
                  maxWidth: "min(100%, 280px)",
                  transition:
                    "transform 0.4s var(--ease-romantic), box-shadow 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.025) translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 42px -4px rgba(224, 87, 128, 0.3), 0 8px 18px rgba(0, 0, 0, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 14px 34px -4px rgba(224, 87, 128, 0.22), 0 6px 14px rgba(0, 0, 0, 0.05)";
                }}
              >
                <img
                  src={surprise.catImage || "/images/cat.jpg"}
                  alt={surprise.catImageAlt || "Cute cat celebrating your birthday"}
                  style={{
                    width: "100%",
                    maxWidth: "280px",
                    height: "auto",
                    maxHeight: "340px",
                    objectFit: "cover",
                    display: "block",
                    borderRadius: "20px",
                  }}
                  onError={(e) => {
                    if (!e.currentTarget.src.includes("cat.jpeg")) {
                      e.currentTarget.src = "/images/cat.jpeg";
                    }
                  }}
                />
              </div>
            </div>

            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-muted)",
                maxWidth: "580px",
                margin: "0 auto 2.8rem auto",
                lineHeight: 1.6,
              }}
            >
              {surprise.subMessage}
            </p>

            {/* Forever Promises Keepsake Card */}
            <div
              className="glass-card"
              style={{
                padding: "2.4rem 2rem",
                borderRadius: "26px",
                maxWidth: "600px",
                margin: "0 auto 3rem auto",
                textAlign: "left",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(224, 87, 128, 0.25)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1.4rem",
                  color: "var(--rose-deep)",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                }}
              >
                <Heart size={18} fill="var(--rose-primary)" color="var(--rose-primary)" />
                <span>{surprise.promiseBadge || "My Forever Promise"}</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.95rem" }}>
                {(surprise.promises || []).map((promise, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontSize: "0.98rem",
                      color: "var(--text-main)",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        backgroundColor: "var(--rose-soft)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--rose-deep)",
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                    >
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span>{promise}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <button
                onClick={triggerGrandConfetti}
                id="more-confetti-btn"
                className="btn-romantic"
                style={{ fontSize: "1rem" }}
              >
                <Sparkles size={16} />
                <span>{surprise.celebrateAgainButton || "Celebrate Again 🎉"}</span>
              </button>

              <button
                onClick={onRestart}
                id="restart-journey-btn"
                className="btn-secondary"
                style={{ fontSize: "0.95rem" }}
              >
                <RotateCcw size={15} />
                <span>{surprise.restartButton || "Revisit From The Start"}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
