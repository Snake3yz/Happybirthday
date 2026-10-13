# 🎂 Romantic Birthday Website For Her

A romantic, elegant, modern, minimal, interactive birthday website crafted specifically as a personal digital birthday gift.

Celebrates the birthday milestone: **15 October 2006 (15 • 10 • 2006)**.

---

## ✨ Features & Journey

1. **🌟 Landing Page**
   - Romantic hero screen: *"Happy Birthday, My Love ❤️"*
   - Date badge: `15 • 10 • 2006`
   - Romantic quote: *"Today is a special day because the person who makes my world brighter was born."*
   - Live time-alive counter: Days, Hours, Minutes, and Seconds since 15 October 2006.
   - Prominent call-to-action button: *"Open Your Gift ✨"* with smooth navigation.

2. **🎂 Birthday Celebration**
   - Milestone celebration: *"Happy Birthday, Beautiful"*
   - Interactive Birthday Cake with flickering candles.
   - Click/tap *"Blow Out The Candles 💨"* to extinguish the flame with rising smoke, celebratory confetti, and a revealed birthday wish!
   - 3 romantic birthday wish cards (Endless Joy, All Your Dreams, Always by Your Side).

3. **📸 Our Memories Gallery**
   - Curated high-aesthetic romantic photography placeholders.
   - Featured memory banner + responsive cards with zoom hover effects.
   - Filter tags: *All*, *Favorite Moments*, *Sweet Dates*, *Special Trips*, *Celebration*.
   - Interactive Lightbox modal: click any photo for full view, date, location tag, and romantic quote.

4. **❤️ Reasons I Love You**
   - Romantic interactive cards (01 Your Smile, 02 Your Heart, 03 The Little Things, 04 The Way You Laugh, 05 Your Warmth, 06 How You Look At Me).
   - Click to expand heartfelt paragraphs.
   - Interactive heart reaction counter on each card.

5. **💌 Love Letter**
   - 3D interactive envelope with wax seal stamp.
   - Click *"Open Letter 💌"* to unfold the envelope flap and slide out an authentic romantic parchment love letter.
   - Handwritten calligraphy signature and re-fold option.

6. **🎁 One Last Surprise ❤️**
   - Mystery ribbon-wrapped gift box.
   - Click *"Open Your Surprise ✨"* to trigger multi-cannon confetti fireworks, radiant glowing aurora, grand declaration:
     > **"Happy Birthday, My Love ❤️"**  
     > **"I hope this little website reminds you how special you are to me."**
   - Keepsake card with *"My Forever Promises"*.

7. **🎵 Romantic Background Music**
   - Floating music control button: `♪ Our Song`.
   - Never autoplays sound abruptly; user clicks to toggle play/pause.
   - Animated rotating vinyl disc and audio equalizer wave visualizer bars.
   - Plays your custom song seamlessly from `public/music/chemtrails over the country club - lana del ray (echo).mp3`!

8. **📱 Responsive Design**
   - Glassmorphic top pill navigation for desktop/laptops.
   - Elegant bottom dock navigation for mobile phones (iPhone & Android).

---

## 🛠️ How to Customize

All website content is centralized in **`src/data/config.js`**! You do not need to hunt through component code.

### 1. Replace Her Name (`HER_NAME`)
Open `src/data/config.js`:
```javascript
HER_NAME: "My Love", // Replace with "Sophia", "Emma", etc.
```

### 2. Replace Birthday Messages (`BIRTHDAY_MESSAGE`)
Open `src/data/config.js`:
```javascript
LANDING_TITLE: "Happy Birthday, My Love ❤️",
LANDING_QUOTE: "Today is a special day because the person who makes my world brighter was born.",
```

### 3. Replace Love Letter (`LOVE_LETTER`)
Open `src/data/config.js`:
```javascript
LOVE_LETTER: {
  recipient: "To My Dearest Love,",
  paragraphs: [
    "Your custom romantic paragraph 1...",
    "Your custom romantic paragraph 2...",
  ],
  closing: "Forever and always yours,",
  sender: "With all my love ❤️",
}
```

### 4. Replace Memory Photos (`MEMORY_IMAGES`)
1. Place your own images in the `public/images/` folder (e.g. `public/images/our_trip.jpg`).
2. Update the `MEMORIES` array in `src/data/config.js`:
```javascript
{
  id: "our-trip",
  title: "Trip to the Beach",
  location: "Sunset Beach",
  tag: "Favorite Moments",
  image: "/images/our_trip.jpg",
  caption: "Your favorite memory caption here...",
  quote: "Your romantic quote here",
}
```

### 5. Replace Background Music (`BACKGROUND_MUSIC`)
1. Place your MP3 file into the `public/music/` directory (e.g. `public/music/chemtrails over the country club - lana del ray (echo).mp3`).
2. Update `BACKGROUND_MUSIC` in `src/data/config.js`:
```javascript
BACKGROUND_MUSIC: {
  title: "♪ Our Song",
  src: "/music/chemtrails over the country club - lana del ray (echo).mp3",
}
```

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) in your browser.
