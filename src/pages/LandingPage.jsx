import React, { useState, useEffect } from "react";
import { BIRTHDAY_CONFIG } from "../data/config";
import { Sparkles, Clock, Calendar, ArrowRight } from "lucide-react";

export default function LandingPage({ onOpenGift }) {
  const landing = BIRTHDAY_CONFIG.LANDING_PAGE || {};
  const [timeAlive, setTimeAlive] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const birthDate = new Date(`${BIRTHDAY_CONFIG.BIRTHDAY_DATE || "2006-10-15"}T00:00:00`);

    const updateTimer = () => {
      const now = new Date();
      const diff = now.getTime() - birthDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeAlive({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "6rem 1.5rem 5rem 1.5rem",
        position: "relative",
      }}
    >
      {/* Decorative Aura Glow in Background */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(224, 87, 128, 0.22) 0%, rgba(212, 163, 115, 0.15) 50%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Romantic Badge */}
        <div
          className="romantic-badge"
          style={{
            marginBottom: "1.8rem",
            animation: "floatGentle 4s ease-in-out infinite",
          }}
        >
          <Sparkles size={14} color="var(--rose-primary)" />
          <span>{landing.badge || "A Special Celebration For You"}</span>
        </div>

        {/* Date Display */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            fontFamily: "var(--font-sans)",
            fontSize: "1.05rem",
            fontWeight: "600",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--rose-deep)",
            marginBottom: "1.2rem",
          }}
        >
          <Calendar size={16} />
          <span>{landing.subtitle || BIRTHDAY_CONFIG.LANDING_SUBTITLE || BIRTHDAY_CONFIG.BIRTHDAY_DISPLAY}</span>
        </div>

        {/* Main Title */}
        <h1
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4.4rem)",
            fontWeight: "700",
            lineHeight: 1.15,
            color: "var(--text-main)",
            marginBottom: "1.5rem",
            textShadow: "0 2px 20px rgba(224, 87, 128, 0.15)",
          }}
        >
          {landing.title || BIRTHDAY_CONFIG.LANDING_TITLE}
        </h1>

        {/* Romantic Quote */}
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.2rem, 2.8vw, 1.65rem)",
            fontStyle: "italic",
            color: "var(--text-muted)",
            lineHeight: 1.6,
            maxWidth: "640px",
            marginBottom: "2.8rem",
          }}
        >
          "{landing.quote || BIRTHDAY_CONFIG.LANDING_QUOTE}"
        </p>

        {/* Prominent CTA Button */}
        <button
          onClick={onOpenGift}
          id="open-gift-btn"
          className="btn-romantic"
          style={{
            fontSize: "1.15rem",
            padding: "1.05rem 2.8rem",
            animation: "pulseGlow 3s infinite",
            marginBottom: "3.5rem",
          }}
        >
          <Sparkles size={18} />
          <span>{landing.ctaButton || BIRTHDAY_CONFIG.LANDING_CTA}</span>
          <ArrowRight size={18} />
        </button>

        {/* Milestone Time Counter Card */}
        <div
          className="glass-card"
          style={{
            padding: "1.6rem 2rem",
            maxWidth: "600px",
            width: "100%",
            borderRadius: "22px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
              fontSize: "0.85rem",
              fontWeight: "600",
              color: "var(--text-muted)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "1.1rem",
            }}
          >
            <Clock size={15} color="var(--rose-primary)" />
            <span>
              {landing.counter?.title || "Cherishing Every Second Since " + BIRTHDAY_CONFIG.BIRTHDAY_DISPLAY}
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0.8rem",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                  fontWeight: "700",
                  color: "var(--rose-deep)",
                }}
              >
                {timeAlive.days.toLocaleString()}
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                {landing.counter?.labels?.days || "Days"}
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                  fontWeight: "700",
                  color: "var(--text-main)",
                }}
              >
                {timeAlive.hours}
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                {landing.counter?.labels?.hours || "Hours"}
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                  fontWeight: "700",
                  color: "var(--text-main)",
                }}
              >
                {timeAlive.minutes}
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                {landing.counter?.labels?.minutes || "Minutes"}
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                  fontWeight: "700",
                  color: "var(--rose-primary)",
                }}
              >
                {timeAlive.seconds}
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                {landing.counter?.labels?.seconds || "Seconds"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
