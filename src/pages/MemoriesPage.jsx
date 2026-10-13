import React, { useState } from "react";
import { BIRTHDAY_CONFIG } from "../data/config";
import LightboxModal from "../components/LightboxModal";
import { Image, MapPin, Sparkles, ArrowRight, Eye, Heart, Play } from "lucide-react";

function MemoryCardMedia({ mem }) {
  if (mem.isVideo) {
    return (
      <video
        src={mem.video || mem.image}
        poster={mem.poster}
        controls
        playsInline
        preload="metadata"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <source src={mem.video || mem.image} type="video/quicktime" />
        <source src={mem.video || mem.image} type='video/mp4; codecs="hvc1"' />
        {BIRTHDAY_CONFIG.MEMORIES_SECTION?.lightbox?.videoUnsupported || "Your browser does not support the video tag."}
      </video>
    );
  }

  return (
    <img
      src={mem.image}
      alt={mem.title}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: mem.objectPosition || "center",
        display: "block",
        transition: "transform 0.5s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    />
  );
}

export default function MemoriesPage({ onNext }) {
  const [selectedTag, setSelectedTag] = useState("All");
  const [activeMemory, setActiveMemory] = useState(null);

  const memSection = BIRTHDAY_CONFIG.MEMORIES_SECTION || {};
  const tags = memSection.filterTags || ["All", "Favorite Moments", "Sweet Dates", "Special Trips", "Celebration"];
  const allMemories = BIRTHDAY_CONFIG.MEMORIES || [];

  const filteredMemories =
    selectedTag === "All"
      ? allMemories
      : allMemories.filter((m) => m.tag === selectedTag);

  const featuredMemory = allMemories.find((m) => m.featured) || allMemories[0];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "6.5rem 1.5rem 6rem 1.5rem",
      }}
    >
      <div className="container" style={{ maxWidth: "1040px" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "2.8rem" }}>
          <div className="romantic-badge" style={{ marginBottom: "1rem" }}>
            <Image size={14} />
            <span>{memSection.badge || "Cherished Moments"}</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              fontWeight: "700",
              color: "var(--text-main)",
              marginBottom: "1rem",
            }}
          >
            {memSection.title || "Every Memory With You Is A Treasure"}
          </h2>
          <p
            style={{
              fontSize: "1.08rem",
              color: "var(--text-muted)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            {memSection.description}
          </p>
        </div>

        {/* Filter Tags */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.6rem",
            marginBottom: "3rem",
          }}
        >
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              id={`filter-${tag.toLowerCase().replace(/\s+/g, "-")}`}
              style={{
                padding: "0.5rem 1.2rem",
                borderRadius: "var(--radius-full)",
                border: "1px solid",
                borderColor:
                  selectedTag === tag
                    ? "var(--rose-primary)"
                    : "rgba(224, 87, 128, 0.2)",
                background:
                  selectedTag === tag
                    ? "var(--rose-primary)"
                    : "rgba(255, 255, 255, 0.8)",
                color: selectedTag === tag ? "#ffffff" : "var(--text-main)",
                fontSize: "0.85rem",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow:
                  selectedTag === tag
                    ? "0 4px 12px rgba(224, 87, 128, 0.3)"
                    : "none",
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Featured Memory Highlight (when 'All' is selected) */}
        {selectedTag === "All" && featuredMemory && (
          <div
            className="glass-card"
            style={{
              overflow: "hidden",
              marginBottom: "3.5rem",
              borderRadius: "26px",
              cursor: "pointer",
            }}
            onClick={() => setActiveMemory(featuredMemory)}
            id="featured-memory-card"
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              }}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  minHeight: "340px",
                  backgroundColor: "#1a1215",
                }}
              >
                {featuredMemory.isVideo ? (
                  <video
                    src={featuredMemory.video || featuredMemory.image}
                    poster={featuredMemory.poster}
                    controls
                    playsInline
                    preload="metadata"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <source src={featuredMemory.video || featuredMemory.image} type="video/quicktime" />
                    <source src={featuredMemory.video || featuredMemory.image} type='video/mp4; codecs="hvc1"' />
                    {memSection.lightbox?.videoUnsupported || "Your browser does not support the video tag."}
                  </video>
                ) : (
                  <img
                    src={featuredMemory.image}
                    alt={featuredMemory.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: featuredMemory.objectPosition || "center",
                      display: "block",
                      transition: "transform 0.6s cubic-bezier(0.25, 1, 0.35, 1)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                )}
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    left: "1rem",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    padding: "0.35rem 0.85rem",
                    borderRadius: "999px",
                    fontSize: "0.78rem",
                    fontWeight: "600",
                    color: "var(--rose-deep)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    zIndex: 2,
                  }}
                >
                  <Sparkles size={12} />
                  <span>{memSection.featuredBadge || "Featured Memory"}</span>
                </div>
              </div>

              <div
                style={{
                  padding: "2.5rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.6rem",
                  }}
                >
                  <span className="romantic-badge">{featuredMemory.tag}</span>
                </div>

                <h3
                  style={{
                    fontSize: "1.8rem",
                    color: "var(--text-main)",
                    marginBottom: "0.8rem",
                  }}
                >
                  {featuredMemory.title}
                </h3>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    color: "var(--text-muted)",
                    fontSize: "0.85rem",
                    marginBottom: "1.2rem",
                  }}
                >
                  <MapPin size={14} color="var(--rose-primary)" />
                  <span>{featuredMemory.location}</span>
                </div>

                <p
                  style={{
                    fontSize: "0.98rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  {featuredMemory.caption}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--rose-deep)",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                  }}
                >
                  <Eye size={16} />
                  <span>
                    {featuredMemory.isVideo
                      ? memSection.viewFullVideoText || "Click to view full video"
                      : memSection.viewFullPhotoText || "Click to view full photo"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Memories Grid Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
            gap: "1.8rem",
            marginBottom: "4rem",
          }}
        >
          {filteredMemories.map((mem) => (
            <div
              key={mem.id}
              className="glass-card"
              onClick={() => setActiveMemory(mem)}
              id={`memory-card-${mem.id}`}
              style={{
                borderRadius: "22px",
                overflow: "hidden",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.35s cubic-bezier(0.25, 1, 0.35, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Media with zoom on hover */}
              <div
                style={{
                  position: "relative",
                  height: "220px",
                  overflow: "hidden",
                  backgroundColor: "#1a1215",
                }}
              >
                <MemoryCardMedia mem={mem} />
                {mem.isVideo && (
                  <div
                    style={{
                      position: "absolute",
                      top: "0.75rem",
                      left: "0.75rem",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "999px",
                      backgroundColor: "rgba(20, 10, 15, 0.75)",
                      backdropFilter: "blur(4px)",
                      WebkitBackdropFilter: "blur(4px)",
                      fontSize: "0.75rem",
                      fontWeight: "600",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      pointerEvents: "none",
                      zIndex: 2,
                    }}
                  >
                    <Play size={11} fill="white" />
                    <span>{memSection.videoBadge || "Video"}</span>
                  </div>
                )}
                <div
                  style={{
                    position: "absolute",
                    top: "0.75rem",
                    right: "0.75rem",
                    padding: "0.25rem 0.65rem",
                    borderRadius: "999px",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    color: "var(--rose-deep)",
                    zIndex: 2,
                  }}
                >
                  {mem.tag}
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: "1.4rem",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <h4
                  style={{
                    fontSize: "1.2rem",
                    color: "var(--text-main)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {mem.title}
                </h4>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontSize: "0.8rem",
                    color: "var(--text-light)",
                    marginBottom: "0.75rem",
                  }}
                >
                  <MapPin size={12} color="var(--rose-primary)" />
                  <span>{mem.location}</span>
                </div>

                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    marginBottom: "1rem",
                  }}
                >
                  {mem.caption}
                </p>

                <div
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "0.8rem",
                    borderTop: "1px solid rgba(224, 87, 128, 0.1)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontSize: "0.95rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    "{mem.quote}"
                  </span>
                  <Heart size={15} color="var(--rose-light)" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation to Next Page */}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button
            onClick={onNext}
            id="goto-reasons-btn"
            className="btn-romantic"
            style={{ fontSize: "1.05rem" }}
          >
            <span>{memSection.nextButtonText || "Reasons I Love You"}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeMemory && (
        <LightboxModal
          memory={activeMemory}
          memories={filteredMemories}
          onClose={() => setActiveMemory(null)}
          onSelect={(mem) => setActiveMemory(mem)}
        />
      )}
    </div>
  );
}
