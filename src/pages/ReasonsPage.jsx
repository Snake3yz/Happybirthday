import React, { useState } from "react";
import { BIRTHDAY_CONFIG } from "../data/config";
import { Heart, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

export default function ReasonsPage({ onNext }) {
  const [expandedId, setExpandedId] = useState(null);
  const [likes, setLikes] = useState({});
  const reasonsSection = BIRTHDAY_CONFIG.REASONS_SECTION || {};

  const toggleExpand = (number) => {
    setExpandedId(expandedId === number ? null : number);
  };

  const toggleLike = (e, number) => {
    e.stopPropagation();
    setLikes((prev) => ({
      ...prev,
      [number]: (prev[number] || 0) + 1,
    }));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "6.5rem 1.5rem 6rem 1.5rem",
      }}
    >
      <div className="container" style={{ maxWidth: "880px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="romantic-badge" style={{ marginBottom: "1rem" }}>
            <Heart size={14} fill="var(--rose-primary)" />
            <span>{reasonsSection.badge || "From My Heart"}</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              fontWeight: "700",
              color: "var(--text-main)",
              marginBottom: "1rem",
            }}
          >
            {reasonsSection.title || "Reasons I Love You"}
          </h2>
          <p
            style={{
              fontSize: "1.08rem",
              color: "var(--text-muted)",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            {reasonsSection.description}
          </p>
        </div>

        {/* Reasons Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "1.6rem",
            marginBottom: "3.5rem",
          }}
        >
          {(BIRTHDAY_CONFIG.REASONS || []).map((item) => {
            const isExpanded = expandedId === item.number;
            const likeCount = likes[item.number] || 0;

            return (
              <div
                key={item.number}
                className="glass-card"
                onClick={() => toggleExpand(item.number)}
                id={`reason-card-${item.number}`}
                style={{
                  padding: "1.8rem",
                  borderRadius: "22px",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  border: isExpanded
                    ? "1px solid var(--rose-primary)"
                    : "1px solid var(--glass-border)",
                  boxShadow: isExpanded
                    ? "0 18px 36px -8px rgba(224, 87, 128, 0.22)"
                    : "var(--glass-shadow)",
                  transition: "all 0.35s cubic-bezier(0.25, 1, 0.35, 1)",
                }}
              >
                {/* Number & Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.4rem",
                      fontWeight: "700",
                      color: "var(--rose-deep)",
                    }}
                  >
                    {item.number}
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: "600",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "999px",
                      backgroundColor: "var(--rose-soft)",
                      color: "var(--rose-deep)",
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "1.35rem",
                    color: "var(--text-main)",
                    marginBottom: "0.6rem",
                  }}
                >
                  {item.title}
                </h3>

                {/* Short message */}
                <p
                  style={{
                    fontSize: "0.96rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                    marginBottom: isExpanded ? "1rem" : "0",
                  }}
                >
                  "{item.short}"
                </p>

                {/* Expanded Detailed Note */}
                {isExpanded && (
                  <div
                    style={{
                      paddingTop: "0.9rem",
                      marginTop: "0.9rem",
                      borderTop: "1px dashed rgba(224, 87, 128, 0.2)",
                      fontSize: "0.9rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.65,
                      animation: "fadeInScale 0.3s ease",
                    }}
                  >
                    <p>{item.detail}</p>
                  </div>
                )}

                {/* Footer Controls: Heart like + expand hint */}
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "1.2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <button
                    onClick={(e) => toggleLike(e, item.number)}
                    id={`like-reason-${item.number}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      background: "transparent",
                      border: "none",
                      color: likeCount > 0 ? "var(--rose-primary)" : "var(--text-light)",
                      fontSize: "0.85rem",
                      cursor: "pointer",
                      padding: "0.3rem 0.5rem",
                      borderRadius: "999px",
                      transition: "all 0.2s ease",
                    }}
                    title={reasonsSection.likeButtonTooltip || "Send a heart for this reason"}
                  >
                    <Heart
                      size={16}
                      fill={likeCount > 0 ? "var(--rose-primary)" : "none"}
                      style={{
                        transform: likeCount > 0 ? "scale(1.15)" : "scale(1)",
                        transition: "transform 0.2s ease",
                      }}
                    />
                    <span>{likeCount > 0 ? likeCount : (reasonsSection.likeButtonDefaultText || "Love this")}</span>
                  </button>

                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.2rem",
                      fontSize: "0.78rem",
                      color: "var(--rose-deep)",
                      fontWeight: "500",
                    }}
                  >
                    {isExpanded ? (
                      <>
                        <span>{reasonsSection.showLessText || "Show less"}</span>
                        <ChevronUp size={14} />
                      </>
                    ) : (
                      <>
                        <span>{reasonsSection.readWhyText || "Read why"}</span>
                        <ChevronDown size={14} />
                      </>
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Section Button */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={onNext}
            id="goto-letter-btn"
            className="btn-romantic"
            style={{ fontSize: "1.05rem" }}
          >
            <span>{reasonsSection.nextButtonText || "Read My Letter To You"}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
