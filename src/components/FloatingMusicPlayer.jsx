import React, { useState, useEffect } from "react";
import { romanticAudio } from "../utils/audio";
import { BIRTHDAY_CONFIG } from "../data/config";
import { VolumeX, Music } from "lucide-react";

export default function FloatingMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const musicConfig = BIRTHDAY_CONFIG.BACKGROUND_MUSIC;

  useEffect(() => {
    romanticAudio.init(musicConfig.src);
    const unsubscribe = romanticAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return () => unsubscribe();
  }, [musicConfig.src]);

  const handleToggle = () => {
    romanticAudio.toggle();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "1.2rem",
        right: "1.2rem",
        zIndex: 100,
      }}
    >
      <button
        onClick={handleToggle}
        id="music-toggle-btn"
        className="glass-card"
        title={
          isPlaying
            ? musicConfig.labels?.pauseTooltip || "Pause music"
            : musicConfig.labels?.playTooltip || "Play our song"
        }
        aria-label={musicConfig.labels?.ariaLabel || "Toggle background music"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          padding: "0.55rem 1.1rem",
          borderRadius: "var(--radius-full)",
          border: isPlaying
            ? "1px solid var(--rose-primary)"
            : "1px solid var(--glass-border)",
          background: isPlaying
            ? "rgba(255, 240, 245, 0.95)"
            : "rgba(255, 255, 255, 0.82)",
          cursor: "pointer",
          boxShadow: isPlaying
            ? "0 4px 20px rgba(224, 87, 128, 0.25)"
            : "0 4px 15px rgba(0, 0, 0, 0.04)",
          transition: "all 0.3s cubic-bezier(0.25, 1, 0.35, 1)",
        }}
      >
        {/* Animated Disc or Music Icon */}
        <div
          style={{
            width: "26px",
            height: "26px",
            borderRadius: "50%",
            background: isPlaying
              ? "radial-gradient(circle, #e05780 30%, #67162e 100%)"
              : "#f0d5dd",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            animation: isPlaying ? "rotateVinyl 3.5s linear infinite" : "none",
            boxShadow: isPlaying ? "0 0 10px rgba(224, 87, 128, 0.4)" : "none",
          }}
        >
          {isPlaying ? (
            <Music size={13} strokeWidth={2.5} />
          ) : (
            <VolumeX size={13} color="#9d174d" strokeWidth={2.2} />
          )}
        </div>

        {/* Text and Equalizer Bars */}
        <div style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
          <span
            style={{
              fontSize: "0.85rem",
              fontWeight: "600",
              color: isPlaying ? "var(--rose-deep)" : "var(--text-main)",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            {musicConfig.title}
          </span>
          <span
            style={{
              fontSize: "0.68rem",
              color: "var(--text-muted)",
              letterSpacing: "0.02em",
            }}
          >
            {isPlaying
              ? musicConfig.labels?.playingStatus || "Playing"
              : musicConfig.labels?.pausedStatus || "Click to Play"}
          </span>
        </div>

        {/* Equalizer Visualizer Bars */}
        {isPlaying && (
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "2px",
              height: "14px",
              marginLeft: "0.2rem",
            }}
          >
            <span
              style={{
                width: "2.5px",
                backgroundColor: "var(--rose-primary)",
                borderRadius: "2px",
                animation: "equalizerWave 0.8s ease-in-out infinite",
              }}
            />
            <span
              style={{
                width: "2.5px",
                backgroundColor: "var(--rose-primary)",
                borderRadius: "2px",
                animation: "equalizerWave 0.6s ease-in-out infinite 0.2s",
              }}
            />
            <span
              style={{
                width: "2.5px",
                backgroundColor: "var(--rose-primary)",
                borderRadius: "2px",
                animation: "equalizerWave 0.9s ease-in-out infinite 0.4s",
              }}
            />
          </div>
        )}
      </button>
    </div>
  );
}
