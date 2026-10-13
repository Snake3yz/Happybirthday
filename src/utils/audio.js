/**
 * Audio Engine for Background Music
 * Plays the website's background song using a singleton HTML5 Audio instance.
 */

class RomanticAudioManager {
  constructor() {
    this.audioElement = null;
    this.isPlaying = false;
    this.listeners = new Set();
    this.src = "";
  }

  init(src) {
    if (!src) return;

    // Avoid re-initializing if already using the same audio source
    if (this.src === src && this.audioElement) {
      return;
    }

    this.src = src;

    if (typeof window !== "undefined") {
      if (this.audioElement) {
        this.audioElement.pause();
        this.audioElement.src = "";
        this.audioElement = null;
      }

      this.audioElement = new Audio();
      this.audioElement.src = encodeURI(decodeURI(src));
      this.audioElement.loop = true;
      this.audioElement.preload = "auto";

      this.audioElement.addEventListener("play", () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audioElement.addEventListener("pause", () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audioElement.addEventListener("ended", () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audioElement.addEventListener("error", (e) => {
        console.error("Audio playback error:", e);
        this.isPlaying = false;
        this.notify();
      });
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach((fn) => fn(this.isPlaying));
  }

  async toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      await this.play();
    }
  }

  async play() {
    if (!this.audioElement && this.src) {
      this.init(this.src);
    }

    if (this.audioElement) {
      try {
        await this.audioElement.play();
      } catch (err) {
        console.warn("Audio playback prevented or interrupted:", err.message);
      }
    }
  }

  pause() {
    if (this.audioElement && !this.audioElement.paused) {
      this.audioElement.pause();
    }
    this.isPlaying = false;
    this.notify();
  }
}

export const romanticAudio = new RomanticAudioManager();
