/**
 * ==============================================================================
 * 💖 BIRTHDAY WEBSITE - CENTRALIZED CONFIGURATION
 * ==============================================================================
 * 100% of user-facing content, text, media paths, button labels, and custom
 * settings are centralized in this file. Edit anything here to customize the app!
 * ==============================================================================
 */

export const BIRTHDAY_CONFIG = {
  // ============================================================================
  // 1. RECIPIENT & BIRTHDAY MILESTONE DETAILS
  // ============================================================================
  // ✏️ Edit your partner's name, nickname, and birthday date
  HER_NAME: "My Love", // Partner's display name (e.g. "Sophia", "Emma", "Sarah")
  HER_NICKNAME: "Sweetheart", // Partner's sweet nickname

  // 🎂 Birthday Date: Used for the live time counter (Format: YYYY-MM-DD)
  BIRTHDAY_DATE: "2006-10-15",
  BIRTHDAY_DISPLAY: "15 • 10 • 2006", // Displayed formatted string
  BIRTHDAY_AGE_TITLE: "Celebrating You",

  // ============================================================================
  // 2. NAVIGATION BAR
  // ============================================================================
  // 🧭 Navigation items displayed on desktop & mobile navigation docks
  NAVIGATION: [
    { id: "home", label: "Home", mobileLabel: "Home" },
    { id: "birthday", label: "Birthday", mobileLabel: "Birthday" },
    { id: "memories", label: "Our Memories", mobileLabel: "Photos" },
    { id: "reasons", label: "Reasons I Love You", mobileLabel: "Reasons" },
    { id: "letter", label: "A Letter", mobileLabel: "Letter" },
    { id: "surprise", label: "Final Surprise", mobileLabel: "Surprise" },
  ],

  // ============================================================================
  // 3. BACKGROUND MUSIC & FLOATING MUSIC PLAYER
  // ============================================================================
  // 🎵 Background song placed in /public/music/chemtrails over the country club - lana del ray (echo).mp3
  BACKGROUND_MUSIC: {
    title: "♪ Our Song",
    artist: "Lana Del Rey - Chemtrails Over The Country Club (Echo)",
    src: "/music/chemtrails over the country club - lana del ray (echo).mp3",
    labels: {
      playTooltip: "Play our song",
      pauseTooltip: "Pause music",
      ariaLabel: "Toggle background music",
      playingStatus: "Playing",
      pausedStatus: "Click to Play",
    },
  },

  // ============================================================================
  // 4. LANDING PAGE
  // ============================================================================
  // 🌟 Hero screen messages, quotes, and milestone timer
  LANDING_PAGE: {
    badge: "A Special Celebration For You",
    subtitle: "15 • 10 • 2006",
    title: "Happy Birthday, My Love ❤️",
    quote: "Today is a special day because the person who makes my world brighter was born.",
    ctaButton: "Open Your Gift ✨",
    counter: {
      title: "Cherishing Every Second Since 15 Oct 2006",
      labels: {
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
      },
    },
  },
  // Aliases for compatibility
  LANDING_TITLE: "Happy Birthday, My Love ❤️",
  LANDING_SUBTITLE: "15 • 10 • 2006",
  LANDING_QUOTE: "Today is a special day because the person who makes my world brighter was born.",
  LANDING_CTA: "Open Your Gift ✨",

  // ============================================================================
  // 5. BIRTHDAY CELEBRATION & INTERACTIVE CAKE
  // ============================================================================
  // 🎂 Celebration wishes cards and interactive candle blowing cake
  BIRTHDAY_SECTION: {
    badge: "A Special Milestone",
    title: "Happy Birthday, Beautiful",
    description:
      "Every single moment since 15 October 2006 has led to this day, and being able to celebrate this life with you is my greatest gift.",
    nextButtonText: "See Our Memories",
    wishes: [
      {
        icon: "✨",
        title: "Endless Joy",
        text: "May this year bring you as much happiness as your smile brings into my life every day.",
      },
      {
        icon: "🌸",
        title: "All Your Dreams",
        text: "I hope all the dreams you keep in your heart bloom into beautiful reality.",
      },
      {
        icon: "💫",
        title: "Always by Your Side",
        text: "Through every adventure, every high and low, you will always have my hand to hold.",
      },
    ],
    cake: {
      badge: "Birthday Wish Maker",
      unblownPrompt: "Close your eyes, make a silent wish, and blow out the candles!",
      blowButtonText: "Blow Out The Candles 💨",
      unblownTitleTooltip: "Click to blow out candles!",
      blownTitleTooltip: "Candles blown out!",
      blownTitle: "Wish Sent to the Stars! ✨",
      blownMessage:
        "May every single prayer and wish whispered in your heart blossom into breathtaking reality this year.",
      relightButtonText: "Light Candles Again",
    },
  },

  // ============================================================================
  // 6. OUR MEMORIES GALLERY & LIGHTBOX
  // ============================================================================
  // 📸 Memory gallery headers, tags, labels, and photo/video items
  MEMORIES_SECTION: {
    badge: "Cherished Moments",
    title: "Every Memory With You Is A Treasure",
    description:
      "These are just a few frozen snapshots of the countless reasons why my life is sweeter with you in it.",
    filterTags: ["All", "Favorite Moments", "Sweet Dates", "Special Trips", "Celebration"],
    featuredBadge: "Featured Memory",
    viewFullVideoText: "Click to view full video",
    viewFullPhotoText: "Click to view full photo",
    videoBadge: "Video",
    nextButtonText: "Reasons I Love You",
    lightbox: {
      closeAriaLabel: "Close photo preview",
      prevAriaLabel: "Previous photo",
      nextAriaLabel: "Next photo",
      videoUnsupported: "Your browser does not support the video tag.",
    },
  },

  // 🖼️ Memory Cards: Add or update photos and videos here
  MEMORIES: [
    {
      id: "sunset-walk",
      title: "First Outfit match date",
      location: "Phnom Penh",
      tag: "Favorite Moments",
      image: "/images/moments.JPG",
      featured: true,
      caption:
        "It was just a white shirt and a simple day, but with you beside me, it felt like something worth remembering forever. 🤍",
      quote: "With you, every moment feels like poetry.",
      objectPosition: "center",
    },
    {
      id: "cafe-date",
      title: "Little Dates, Big Memories",
      location: "Japan Cafe",
      tag: "Sweet Dates",
      image: "/images/cafedate.jpeg",
      featured: false,
      caption:
        "Holding hands across warm cups of coffee, talking for hours until we forgot the rest of the world existed.",
      quote: "Small moments, forever memories.",
      objectPosition: "center",
    },
    {
      id: "starlit-night",
      title: "Lost Together in the City Lights",
      location: "Walking Street",
      tag: "Special Trips",
      image: "/images/night-walk-poster.jpg",
      video: "/images/night%20walk.MOV",
      poster: "/images/night-walk-poster.jpg",
      isVideo: true,
      featured: false,
      caption:
        "Looking out over the glittering lights, realizing that no star shines brighter than you. 💖",
      quote: "You are my entire universe.",
      objectPosition: "center",
    },
    {
      id: "sunset-ride",
      title: "Sunset Drives With You",
      location: "TK Road",
      tag: "Favorite Moments",
      image: "/images/IMG_6748-poster.jpg",
      video: "/images/IMG_6748.MOV",
      poster: "/images/IMG_6748-poster.jpg",
      isVideo: true,
      featured: false,
      caption:
        "Riding together in the cool evening breeze under a cotton-candy sunset. Wearing our helmets and laughing together—every road with you is pure magic.",
      quote: "With you, even the simplest ride becomes a fairy tale.",
      objectPosition: "center",
    },
    {
      id: "movie-cinema",
      title: "Our Little Cinema Date",
      location: "VIP Cinema",
      tag: "Sweet Dates",
      image: "/images/IMG_7264-poster.jpg",
      video: "/images/IMG_7264.MOV",
      poster: "/images/IMG_7264-poster.jpg",
      isVideo: true,
      featured: false,
      caption:
        "Snuggled close in the theater recliners, sharing popcorn and whispering inside the theater. Every moment with you is my absolute favorite scene.",
      quote: "In a world of stories, loving you is my favorite one.",
      objectPosition: "center",
    },
    {
      id: "flower-gift",
      title: "First Photobooth date",
      location: "Funmall",
      tag: "Sweet Dates",
      image: "/images/1date.JPG",
      featured: false,
      caption:
        "Six frames, two hearts, one memory. 🎞️🤍",
      quote: "Beautiful in every single season.",
      objectPosition: "center 25%",
    },
  ],

  // ============================================================================
  // 7. REASONS I LOVE YOU
  // ============================================================================
  // 💖 Section headers and reasons cards
  REASONS_SECTION: {
    badge: "From My Heart",
    title: "Reasons I Love You",
    description:
      "There are a million reasons why you mean everything to me. Here are just a few that I carry in my heart every single day.",
    likeButtonTooltip: "Send a heart for this reason",
    likeButtonDefaultText: "Love this",
    readWhyText: "Read why",
    showLessText: "Show less",
    nextButtonText: "Read My Letter To You",
  },
  REASONS: [
    {
      number: "01",
      title: "Your Smile",
      short: "Your smile can completely change my day.",
      detail:
        "No matter how exhausting or tough the day gets, one genuine smile from you melts everything away. It is pure sunshine.",
      badge: "Pure Sunshine",
    },
    {
      number: "02",
      title: "Your Heart",
      short: "You have a beautiful heart that makes you special.",
      detail:
        "The gentle kindness and empathy you give so effortlessly to the world is the most admirable thing about you.",
      badge: "Pure Kindness",
    },
    {
      number: "03",
      title: "The Little Things",
      short: "It's the small moments with you that mean the most.",
      detail:
        "The soft way you hold my hand, the funny jokes only we understand, and the warm quiet silences we share together.",
      badge: "Special Moments",
    },
    {
      number: "04",
      title: "The Way You Laugh",
      short: "Your laugh is my absolute favorite sound in the world.",
      detail:
        "Whenever you burst into laughter from your heart, it creates a rhythm that makes everything in life feel completely right.",
      badge: "Favorite Melody",
    },
    {
      number: "05",
      title: "Your Warmth",
      short: "With you, I have found my safe haven.",
      detail:
        "Being next to you feels like coming home after a long journey. You bring a peace to my soul that words cannot describe.",
      badge: "Safe Place",
    },
    {
      number: "06",
      title: "How You Look At Me",
      short: "In your eyes, I see our beautiful future together.",
      detail:
        "When your eyes meet mine, I know without a doubt that I am loved, understood, and truly lucky beyond measure.",
      badge: "Forever Love",
    },
  ],

  // ============================================================================
  // 8. LOVE LETTER
  // ============================================================================
  // 💌 Sealed interactive envelope & heartfelt romantic love letter
  LOVE_LETTER: {
    badge: "A Sealed Message",
    title: "A Birthday Letter For You",
    description:
      "Some feelings are too deep to be said out loud. Here are my words, written from the quietest part of my heart.",
    openButtonText: "Open Letter 💌",
    foldButtonText: "Fold Letter Again",
    nextButtonText: "One Last Surprise ❤️",
    date: "15 October",
    recipient: "To My Dearest Love,",
    salutation: "My Sweetheart,",
    paragraphs: [
      "On this day, 15 October 2006, the world was blessed with someone truly extraordinary. I often look back and wonder how I got so lucky to cross paths with someone as gentle, kind, radiant, and deeply loving as you.",
      "You bring color into days that would otherwise feel ordinary. You listen with your entire heart, you make me laugh until my stomach hurts, and you remind me constantly what genuine care looks like.",
      "As you step into another chapter of your life, I want you to know that I will always be right here cheering for you, believing in you when things get heavy, and holding you close through every dream you chase.",
      "Thank you for being my person, my favorite adventure, and my safest home. I love you more than words will ever be able to capture.",
    ],
    closing: "Forever and always yours,",
    sender: "With all my love ❤️",
    postscript: "P.S. Make sure you made a big wish today — you deserve every good thing in this universe.",
  },

  // ============================================================================
  // 9. FINAL SURPRISE & GRAND CLIMAX
  // ============================================================================
  // 🎁 Gift box unboxing, final vows & celebratory buttons
  SURPRISE: {
    sectionBadge: "One Last Surprise ❤️",
    mysteryTitle: "Just One More Thing...",
    mysteryDescription:
      "I prepared something special just for this final moment. Click below to unwrap your last gift.",
    boxTooltip: "Click to open your surprise!",
    buttonText: "Open Your Surprise ✨",
    cardTitle: "Happy Birthday, My Love ❤️",
    finalMessage: "I hope this little website reminds you how special you are to me Tomorrow Jam yk gift tv ouy !!💖",
    catImage: "/images/cat.jpg",
    catImageAlt: "Cute birthday cat",
    subMessage:
      "Every pixel, every word, and every thought here was made with you in mind. Happy Birthday! 🎂✨",
    promiseBadge: "My Forever Promise",
    promises: [
      "To always listen to your stories with all my attention.",
      "To hold your hand whenever you feel uncertain.",
      "To celebrate your wins like they are my own.",
      "To love you more deeply with each passing day.",
    ],
    celebrateAgainButton: "Celebrate Again 🎉",
    restartButton: "Revisit From The Start",
  },

  // ============================================================================
  // 10. GLOBAL FOOTER
  // ============================================================================
  // ⚓ Bottom footer note
  FOOTER: {
    text: "Made with all my heart for your special day • 15.10.2006",
  },
};
