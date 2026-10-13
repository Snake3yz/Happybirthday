import React, { useState } from "react";
import { BIRTHDAY_CONFIG } from "../data/config";
import confetti from "canvas-confetti";
import { Sparkles, RotateCcw, Heart } from "lucide-react";

export default function InteractiveCake() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const cakeConfig = BIRTHDAY_CONFIG.BIRTHDAY_SECTION?.cake || {};

  const handleBlowCandles = () => {
    if (candlesBlown) return;

    setTimeout(() => {
      setCandlesBlown(true);

      // Trigger celebratory romantic sparkles & confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#e05780", "#ff758f", "#d4a373", "#ffcbf2"],
      });
    }, 450);
  };

  const handleRelight = () => {
    setCandlesBlown(false);
  };

  return (
    <div
      className="glass-card"
      style={{
        padding: "2.2rem 1.8rem",
        textAlign: "center",
        maxWidth: "480px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          padding: "0.3rem 0.85rem",
          borderRadius: "var(--radius-full)",
          background: "var(--rose-soft)",
          color: "var(--rose-deep)",
          fontSize: "0.8rem",
          fontWeight: "600",
          marginBottom: "1.2rem",
        }}
      >
        <Sparkles size={14} />
        <span>{cakeConfig.badge || "Birthday Wish Maker"}</span>
      </div>

      {/* Interactive Cake Illustration / Graphic */}
      <div
        style={{
          position: "relative",
          width: "220px",
          height: "170px",
          margin: "0 auto 1.5rem auto",
          cursor: !candlesBlown ? "pointer" : "default",
        }}
        onClick={!candlesBlown ? handleBlowCandles : undefined}
        title={
          !candlesBlown
            ? cakeConfig.unblownTitleTooltip || "Click to blow out candles!"
            : cakeConfig.blownTitleTooltip || "Candles blown out!"
        }
      >
        {/* Candles Container */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "18px",
            zIndex: 10,
          }}
        >
          {[0, 1, 2, 3].map((idx) => (
            <div
              key={idx}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Flame or Smoke */}
              {!candlesBlown ? (
                <div
                  style={{
                    width: "12px",
                    height: "18px",
                    background:
                      "radial-gradient(ellipse at 50% 80%, #fff7d6 0%, #ffbe0b 50%, #fb5607 100%)",
                    borderRadius: "50% 50% 35% 35% / 60% 60% 40% 40%",
                    animation: `flameFlicker ${0.8 + idx * 0.15}s ease-in-out infinite alternate`,
                    marginBottom: "2px",
                    transformOrigin: "center bottom",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#b4a7a7",
                    animation: "smokeRise 1.6s ease-out forwards",
                    marginBottom: "6px",
                  }}
                />
              )}

              {/* Wick */}
              <div
                style={{
                  width: "2px",
                  height: "5px",
                  backgroundColor: "#493b3b",
                }}
              />

              {/* Candle Body */}
              <div
                style={{
                  width: "9px",
                  height: "36px",
                  borderRadius: "3px 3px 1px 1px",
                  background:
                    idx % 2 === 0
                      ? "linear-gradient(180deg, #ffccd5, #e05780)"
                      : "linear-gradient(180deg, #faedcd, #d4a373)",
                  boxShadow: "inset 0 0 3px rgba(0,0,0,0.15)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Cake Top Tier */}
        <div
          style={{
            position: "absolute",
            top: "52px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "140px",
            height: "44px",
            background: "linear-gradient(180deg, #fff5f8, #fbcfe8)",
            borderRadius: "16px 16px 8px 8px",
            border: "2px solid #ffffff",
            boxShadow: "0 6px 14px rgba(224, 87, 128, 0.15)",
            zIndex: 4,
          }}
        >
          {/* Frosting drips */}
          <div
            style={{
              position: "absolute",
              bottom: "-4px",
              left: "10px",
              right: "10px",
              height: "6px",
              background: "#ffffff",
              borderRadius: "999px",
              opacity: 0.8,
            }}
          />
        </div>

        {/* Cake Bottom Tier */}
        <div
          style={{
            position: "absolute",
            top: "88px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "190px",
            height: "58px",
            background: "linear-gradient(180deg, #fed7e2, #f472b6)",
            borderRadius: "18px 18px 10px 10px",
            border: "2px solid #ffffff",
            boxShadow: "0 10px 22px rgba(176, 42, 85, 0.2)",
            zIndex: 2,
          }}
        >
          {/* Decorative Pearls */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "6px 12px 0 12px",
            }}
          >
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Cake Stand Plate */}
        <div
          style={{
            position: "absolute",
            top: "142px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "220px",
            height: "12px",
            background: "linear-gradient(90deg, #fae1c3, #ffffff, #fae1c3)",
            borderRadius: "999px",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
            zIndex: 1,
          }}
        />
      </div>

      {/* Action Prompt or Result */}
      {!candlesBlown ? (
        <div>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-muted)",
              marginBottom: "1rem",
            }}
          >
            {cakeConfig.unblownPrompt || "Close your eyes, make a silent wish, and blow out the candles!"}
          </p>
          <button
            onClick={handleBlowCandles}
            id="blow-candles-btn"
            className="btn-romantic"
            style={{ padding: "0.75rem 1.8rem", fontSize: "0.95rem" }}
          >
            <Sparkles size={16} />
            <span>{cakeConfig.blowButtonText || "Blow Out The Candles 💨"}</span>
          </button>
        </div>
      ) : (
        <div style={{ animation: "fadeInScale 0.5s ease forwards" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
              color: "var(--rose-deep)",
              fontFamily: "var(--font-serif)",
              fontSize: "1.25rem",
              fontWeight: "700",
              marginBottom: "0.4rem",
            }}
          >
            <Heart size={20} fill="var(--rose-primary)" color="var(--rose-primary)" />
            <span>{cakeConfig.blownTitle || "Wish Sent to the Stars! ✨"}</span>
          </div>
          <p
            style={{
              fontSize: "0.92rem",
              color: "var(--text-muted)",
              lineHeight: 1.6,
              marginBottom: "1.1rem",
            }}
          >
            {cakeConfig.blownMessage ||
              "May every single prayer and wish whispered in your heart blossom into breathtaking reality this year."}
          </p>
          <button
            onClick={handleRelight}
            id="relight-candles-btn"
            className="btn-secondary"
            style={{ fontSize: "0.85rem", padding: "0.55rem 1.2rem" }}
          >
            <RotateCcw size={14} />
            <span>{cakeConfig.relightButtonText || "Light Candles Again"}</span>
          </button>
        </div>
      )}
    </div>
  );
}
