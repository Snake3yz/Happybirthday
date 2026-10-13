import React, { useEffect } from "react";
import { BIRTHDAY_CONFIG } from "../data/config";
import { X, MapPin, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function LightboxModal({ memory, memories, onClose, onSelect }) {
  const currentIndex = memory ? memories.findIndex((m) => m.id === memory.id) : -1;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < memories.length - 1;
  const lbConfig = BIRTHDAY_CONFIG.MEMORIES_SECTION?.lightbox || {};

  // Lock body scroll when modal is open and restore when closed
  useEffect(() => {
    if (!memory) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [memory]);

  // Keyboard navigation: Escape to close, Left/Right arrows to switch memories
  useEffect(() => {
    if (!memory) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft" && hasPrev) {
        e.preventDefault();
        onSelect(memories[currentIndex - 1]);
      } else if (e.key === "ArrowRight" && hasNext) {
        e.preventDefault();
        onSelect(memories[currentIndex + 1]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [memory, currentIndex, hasPrev, hasNext, memories, onClose, onSelect]);

  if (!memory) return null;

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={memory.title || "Memory preview"}
    >
      <div
        className="lightbox-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button: Positioned in top-right corner of the modal */}
        <button
          onClick={onClose}
          id="close-lightbox-btn"
          aria-label={lbConfig.closeAriaLabel || "Close photo preview"}
          title="Close (Esc)"
          className="lightbox-close-btn"
        >
          <X size={20} />
        </button>

        {/* Media Stage: The primary focus of the lightbox */}
        <div className="lightbox-media-stage">
          <div className="lightbox-media-wrapper">
            {memory.isVideo ? (
              <video
                key={memory.id}
                src={memory.video || memory.image}
                poster={memory.poster}
                controls
                playsInline
                preload="auto"
                className="lightbox-media-video"
                onClick={(e) => e.stopPropagation()}
              >
                <source src={memory.video || memory.image} type="video/quicktime" />
                <source src={memory.video || memory.image} type='video/mp4; codecs="hvc1"' />
                {lbConfig.videoUnsupported || "Your browser does not support the video tag."}
              </video>
            ) : (
              <img
                key={memory.id}
                src={memory.image}
                alt={memory.title}
                className="lightbox-media-img"
              />
            )}
          </div>

          {/* Previous Media Navigation Button */}
          {hasPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect(memories[currentIndex - 1]);
              }}
              id="prev-lightbox-btn"
              aria-label={lbConfig.prevAriaLabel || "Previous photo"}
              title="Previous (←)"
              className="lightbox-nav-btn lightbox-nav-btn-prev"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Next Media Navigation Button */}
          {hasNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect(memories[currentIndex + 1]);
              }}
              id="next-lightbox-btn"
              aria-label={lbConfig.nextAriaLabel || "Next photo"}
              title="Next (→)"
              className="lightbox-nav-btn lightbox-nav-btn-next"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {/* Details Sidebar: Memory Information */}
        <div className="lightbox-sidebar">
          <div>
            <div className="lightbox-top-bar">
              <span className="romantic-badge">{memory.tag}</span>
              <span className="lightbox-counter">
                {currentIndex + 1} / {memories.length}
              </span>
            </div>

            <h3 className="lightbox-title">{memory.title}</h3>

            <div className="lightbox-location">
              <MapPin size={15} color="var(--rose-primary)" style={{ flexShrink: 0 }} />
              <span>{memory.location}</span>
            </div>

            <p className="lightbox-caption">{memory.caption}</p>

            {memory.quote && (
              <div className="lightbox-quote">
                <Quote
                  size={18}
                  color="var(--rose-deep)"
                  style={{ flexShrink: 0, marginTop: "2px" }}
                />
                <p className="lightbox-quote-text">
                  "{memory.quote}"
                </p>
              </div>
            )}
          </div>

          <div className="lightbox-keyboard-hint">
            <span>Use ← / → arrows to navigate • Esc to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
