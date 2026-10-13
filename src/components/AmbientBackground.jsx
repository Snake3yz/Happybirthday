import React, { useEffect, useRef } from "react";

export default function AmbientBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle types: heart, sparkle, petal
    const particles = [];
    const particleCount = Math.min(window.innerWidth < 768 ? 20 : 40, 45);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 80;
        this.size = Math.random() * 12 + 8;
        this.speedY = Math.random() * 0.7 + 0.35;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.45 + 0.2;
        this.fadeSpeed = Math.random() * 0.002 + 0.001;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.02;
        this.type = Math.random() > 0.4 ? "heart" : "sparkle";
        this.color =
          Math.random() > 0.5
            ? "rgba(224, 87, 128, " // Rose
            : "rgba(212, 163, 115, "; // Champagne gold
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX + Math.sin(this.y * 0.01) * 0.3;
        this.rotation += this.rotSpeed;

        if (this.y < -50 || this.opacity <= 0) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color + this.opacity + ")";

        if (this.type === "heart") {
          // Draw mini heart path
          const s = this.size * 0.5;
          ctx.beginPath();
          ctx.moveTo(0, s * 0.3);
          ctx.bezierCurveTo(-s, -s * 0.5, -s * 1.3, s * 0.3, 0, s * 1.2);
          ctx.bezierCurveTo(s * 1.3, s * 0.3, s, -s * 0.5, 0, s * 0.3);
          ctx.closePath();
          ctx.fill();
        } else {
          // Draw gentle diamond sparkle
          const s = this.size * 0.35;
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.lineTo(s * 0.6, 0);
          ctx.lineTo(0, s);
          ctx.lineTo(-s * 0.6, 0);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      const p = new Particle();
      p.y = Math.random() * height; // initial spread
      particles.push(p);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
