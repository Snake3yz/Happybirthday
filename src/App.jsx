import React, { useState } from "react";
import { BIRTHDAY_CONFIG } from "./data/config";
import Navbar from "./components/Navbar";
import FloatingMusicPlayer from "./components/FloatingMusicPlayer";
import AmbientBackground from "./components/AmbientBackground";

import LandingPage from "./pages/LandingPage";
import BirthdayPage from "./pages/BirthdayPage";
import MemoriesPage from "./pages/MemoriesPage";
import ReasonsPage from "./pages/ReasonsPage";
import LetterPage from "./pages/LetterPage";
import SurprisePage from "./pages/SurprisePage";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Smooth scroll to top when switching pages
  const handlePageChange = (newPage) => {
    if (newPage === activePage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActivePage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsTransitioning(false);
    }, 220);
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Subtle Ambient Particle Background */}
      <AmbientBackground />

      {/* Floating Music Player: ♪ Our Song */}
      <FloatingMusicPlayer />

      {/* Navigation Bar */}
      <Navbar activePage={activePage} setActivePage={handlePageChange} />

      {/* Main Content Area with Page Transition */}
      <main
        style={{
          flex: 1,
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? "translateY(8px)" : "translateY(0)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
          position: "relative",
          zIndex: 1,
        }}
      >
        {activePage === "home" && (
          <LandingPage onOpenGift={() => handlePageChange("birthday")} />
        )}
        {activePage === "birthday" && (
          <BirthdayPage onNext={() => handlePageChange("memories")} />
        )}
        {activePage === "memories" && (
          <MemoriesPage onNext={() => handlePageChange("reasons")} />
        )}
        {activePage === "reasons" && (
          <ReasonsPage onNext={() => handlePageChange("letter")} />
        )}
        {activePage === "letter" && (
          <LetterPage onNext={() => handlePageChange("surprise")} />
        )}
        {activePage === "surprise" && (
          <SurprisePage onRestart={() => handlePageChange("home")} />
        )}
      </main>

      {/* Subtle Footer with romantic date */}
      <footer
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "2rem 1rem",
          color: "var(--text-light)",
          fontSize: "0.82rem",
          letterSpacing: "0.05em",
        }}
      >
        <span>{BIRTHDAY_CONFIG.FOOTER?.text || "Made with all my heart for your special day"}</span>
      </footer>
    </div>
  );
}
