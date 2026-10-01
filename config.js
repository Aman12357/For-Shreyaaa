/**
 * Configuration file for Shreyaaa's Confession Website
 * Dedicated specially to Shreyaaa ✨
 */
const CONFIG = {
  // Names
  crushName: "Shreyaaa",
  yourName: "Yours Truly", // Change to your actual name or nickname if desired
  subtitle: "A special message, straight from the heart ✨",

  // 1. Time Tracking: Date when you realized your feelings or met
  // Format: "YYYY-MM-DD" or "YYYY-MM-DDTHH:MM:SS"
  startDate: "2025-09-29T00:00:00", 
  counterTitle: "Time Since You Stole My Heart ❤️",

  // 2. Envelope & Confession Letter
  envelopeTitle: "To: Shreyaaa 💌",
  envelopeHint: "Tap the wax seal to open",
  letterGreeting: "Dear Shreyaaa,",
  letterParagraphs: [
    "I've been wanting to share something special with you for a while now. Every time I see you, talk to you, or hear your voice, I'm reminded of just how unique and wonderful you are.",
    "You have this effortless charm about you—your warmth, your genuine laughter, and the way you bring light into every conversation. It never fails to make my day infinitely brighter.",
    "Somewhere along the way, I realized my heart had made up its mind. You aren't just someone I admire; you're the person I find myself looking for and thinking of every single day.",
    "Life is just so much sweeter, brighter, and more meaningful with you in it. And today, I wanted to let you know how much you truly mean to me."
  ],

  // 3. Polaroid Memory Gallery
  polaroidsTitle: "Moments & Little Memories 📸",
  polaroids: [
    {
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop&q=80",
      caption: "That unforgettable smile ✨",
      date: "A precious moment"
    },
    {
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80",
      caption: "Endless laughs & happiness 🌸",
      date: "Pure joy"
    },
    {
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&auto=format&fit=crop&q=80",
      caption: "The start of something special 💫",
      date: "Forever in my mind"
    }
  ],

  // 4. Reasons Why Shreyaaa is Special
  reasonsTitle: "A Few Reasons Why You're Unforgettable",
  reasons: [
    {
      icon: "✨",
      title: "Your Radiant Smile",
      desc: "It has this infectious warmth that can brighten up even the dullest days."
    },
    {
      icon: "🌸",
      title: "Your Sweet & Kind Soul",
      desc: "The genuine, caring way you treat people around you is truly rare and beautiful."
    },
    {
      icon: "💫",
      title: "Your Amazing Laugh",
      desc: "Hands down one of the sweetest sounds ever. It instantly brings a smile to my face."
    },
    {
      icon: "💖",
      title: "Simply You, Shreyaaa",
      desc: "Everything about you—your charm, your energy, and your presence—is just perfect to me."
    }
  ],

  // 5. The Shreyaaa Mini-Quiz
  quizTitle: "The Shreyaaa Mini-Quiz 🎮",
  quizSubtitle: "Answer these 3 quick questions to see how well our hearts match!",
  quizQuestions: [
    {
      question: "Who has the most contagious, adorable smile in the room?",
      options: [
        { text: "Shreyaaa (No competition!) 🥰", correct: true, feedback: "100% facts! Your smile wins every single time. ✨" },
        { text: "Definitely Shreyaaa 😉", correct: true, feedback: "Spot on! There's no other right answer. 💖" }
      ]
    },
    {
      question: "What's my absolute favorite thing about talking to you?",
      options: [
        { text: "How time just magically flies by ⏳", correct: true, feedback: "Yes! Hours feel like minutes when I'm with you. 💕" },
        { text: "How easily you make me laugh & smile 😄", correct: true, feedback: "Always! You bring out the happiest version of me. 🌸" },
        { text: "All of the above (and a million more) ❤️", correct: true, feedback: "Ding ding ding! You got it completely right! ✨" }
      ]
    },
    {
      question: "If we had an entire free day together, what would we do?",
      options: [
        { text: "Cozy coffee, long walks & deep talks ☕", correct: true, feedback: "Sounds like an absolute dream date! 🌿" },
        { text: "Food adventure & late night stargazing 🌌", correct: true, feedback: "Under the stars with you would be magical. ✨" },
        { text: "Anything, as long as it's together 💖", correct: true, feedback: "The perfect answer. Your company is all that matters! 🥰" }
      ]
    }
  ],

  // 6. Proposal Section
  proposal: {
    question: "Shreyaaa, will you be mine?",
    yesBtn: "YES! 🥰",
    noBtn: "No 🙈",
    noMessages: [
      "Wait, are you sure? 🥺",
      "Think about it one more time! 💭",
      "Wrong button, try the big red one! 😉",
      "Pretty please with sprinkles on top? 🍒",
      "The button is running away from you! 🏃‍♂️💨",
      "You can't say no to this face! 💕",
      "Just press YES already! 🥰"
    ]
  },

  // 7. Plan Our First Date (After YES)
  datePlanner: {
    title: "Now... Let's Plan Our Dream First Date! 🎟️",
    subtitle: "Pick what sounds most fun to you:",
    activities: [
      { id: "coffee", icon: "☕", title: "Cozy Coffee & Deep Talks", desc: "Warm lattes, cozy couch, endless chats" },
      { id: "dinner", icon: "🍕", title: "Candlelight Dinner", desc: "Delicious food, soft lights & sweet laughs" },
      { id: "stars", icon: "🌌", title: "Late Night Stargazing", desc: "Blankets, chill music & shooting stars" },
      { id: "arcade", icon: "🍿", title: "Movies & Fun Arcade", desc: "Popcorn, sweet snacks & game competitions" }
    ]
  },

  // 8. Celebration & Ticket Texts
  celebration: {
    title: "YAY! You Made My Entire Universe! 🎉💖",
    message: "This is the happiest moment ever! Shreyaaa, I promise to always cherish you, make you laugh until your cheeks hurt, and be there for you through everything.",
    signature: "Forever with all my love ❤️"
  }
};
