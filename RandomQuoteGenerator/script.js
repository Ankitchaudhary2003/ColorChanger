

```javascript
const loveQuotes = [
  "💖 You are my today and all of my tomorrows.",
  "👩‍❤️‍👨 In you, I found the love of my life and my closest friend.",
  "💓 My heart is perfect because you are inside.",
  "💫 Every moment with you is a beautiful dream come true.",
  "🥰 Loving you is the easiest decision I’ve ever made.",
  "🌸 You’re the reason my world is so beautiful.",
  "😊 Your smile lights up my darkest days.",
  "💘 I fell in love with your soul before I touched your skin.",
  "🌍 My favorite place in the world is next to you.",
  "💑 I never knew what true love was until I met you.",
  "🏝️ I don’t need paradise — I just need you.",
  "🧩 You complete me in ways I never knew I needed.",
  "💪 You make me want to be the best version of myself.",
  "🔊 Your voice is my favorite sound.",
  "🧡 You are the missing piece to my puzzle.",
  "👀 I look at you and see the rest of my life in your eyes.",
  "🏡 Home is wherever you are.",
  "🌞 You are my sunshine on the darkest days.",
  "😍 I love the way you look at me — like I’m your entire world.",
  "💭 Being yours is a dream I never want to end.",

  // Tarif (Praises)
  "👑 You’re not just beautiful — you’re breathtaking.",
  "🌹 Your beauty doesn’t need makeup — it’s in your smile, your soul, your heart.",
  "✨ You light up the room just by walking in.",
  "🌼 The world is more beautiful because you’re in it.",
  "🎶 Your laugh is my favorite melody.",
  "❤️ You have the most amazing heart I’ve ever known.",
  "🌟 Even the stars envy the sparkle in your eyes.",
  "🌈 You make everything feel right, just by being you.",
  "📖 Every moment with you is poetry in motion.",
  "🎵 You’re the kind of girl they write love songs about.",
  "🧚 There’s magic in your presence — it soothes my soul.",
  "🕊️ I could watch you for a lifetime and still fall for you every day.",
  "💗 Your kindness makes you the most beautiful person alive.",
  "🔇 When you talk, the world fades, and I only hear you.",
  "🦋 No one compares to you — you are one of a kind.",
  "📷 You don’t need filters — you’re flawless in every way.",
  "🩷 Your smile heals parts of me I never knew were broken.",
  "⏳ If beauty were a time, you’d be an eternity.",
  "🌸 Your existence is my favorite miracle.",
  "🌙 Even the moon feels shy when you smile.",

  // Emotional & Heartfelt
  "💞 You’re not just in my heart — you are my heart.",
  "💫 I never believed in soulmates until you came into my life.",
  "🫶 My love for you grows with every heartbeat.",
  "🕰️ I’d choose you in every lifetime.",
  "🌪️ You’re the calm in my chaos.",
  "🌤️ Your love saved me in ways I can’t explain.",
  "🏠 Being with you feels like home.",
  "🌌 Even silence feels beautiful when we’re together.",
  "📖 You are the love story I always wanted to write.",
  "💓 I feel alive when I’m with you.",
  "∞ With you, forever isn’t long enough.",
  "✅ Loving you is the best decision I’ve ever made.",
  "🫀 You give meaning to everything in my life.",
  "🦋 I still get butterflies when I see your name pop up.",
  "🕊️ You are the peace I was searching for.",
  "📚 No words can fully capture what you mean to me.",
  "😌 You’ve become my addiction — the sweetest one.",
  "😇 If loving you is a mistake, I never want to be right.",
  "💗 I love you in ways I never knew I could.",
  "📜 You’re not just part of my story — you are my story.",

  // Cute & Romantic
  "💃 You make my heart do a happy dance.",
  "📲 You’re my favorite notification.",
  "🎶 Every love song makes sense since I met you.",
  "🌌 If kisses were stars, I’d give you the whole sky.",
  "💖 Life is better with you in it — always.",
  "🥹 You stole my heart, and I never want it back.",
  "👁️‍🗨️ I could stay lost in your eyes forever.",
  "🌹 If I had a flower for every time I thought of you, I'd walk in a garden forever.",
  "🍫 You’re the chocolate to my cake.",
  "🙃 I’m much more me when I’m with you.",
  "👩‍❤️‍💋‍👨 You + Me = Perfection",
  "🫶 Your hand fits perfectly in mine — like we were made for each other.",
  "🛌 You’re the first and last thing on my mind every day.",
  "🫀 My heart speaks your name in every beat.",
  "📷 I never want to stop making memories with you.",
  "🧸 You’re the cutest part of my day.",
  "👀 Even in a crowd, you’re the only one I see.",
  "🤍 I’ve got a crush on you — forever.",
  "☺️ You're the reason behind my random smiles.",
  "💞 Your love is my favorite feeling.",

  // Deep and Forever Promises
  "🫂 No matter where life takes us, I’ll always choose you.",
  "🧭 I don’t need a perfect life — just one with you in it.",
  "🌦️ I’ll love you through every season, storm, and sunshine.",
  "🌠 You and I are written in the stars.",
  "🔒 My love for you is a journey — starting at forever and ending at never.",
  "👫 Even if I had a thousand lives, I’d want to spend each one loving you.",
  "🏡 You’re not just my girlfriend — you’re my heart’s home.",
  "🛡️ I’ll protect your heart like it’s my own — because it is.",
  "🙌 I don’t know what I did to deserve you, but I’m never letting go.",
  "🕊️ Loving you is my life’s greatest blessing.",
  "🐾 Wherever you go, my heart follows.",
  "🔁 You are my today, my tomorrow, and all of my forevers.",
  "📆 I’ll love you more each day, and never less.",
  "❤️‍🔥 I may not be perfect, but I promise to love you perfectly.",
  "🤝 You’ll never have to face anything alone — I’ll always be with you.",
  "💓 With every breath, I love you more.",
  "💘 You’re the reason I believe in love.",
  "👩‍❤️‍👨 I want to be your last everything.",
  "👴👵 I’ll grow old loving you — every wrinkle, every laugh, every memory.",
  "🔐 You are my forever and always.",

  // Birthday Wishes for Deepali
  "🎉 Happy Birthday to the beautiful Deepali! 🌸✨",
  "🎂 Wishing you endless beauty, love, and joy, Deepali! 💖🎈",
  "🌟 You were born to shine, Deepali. Happy Birthday! 💫💋",
  "👑 To the prettiest girl I know — Deepali, have the best birthday! 💐🎉",
  "💖 Deepali, every year you become more beautiful. Happy Birthday! 🎊",
  "🥳 Wishing Deepali a year full of laughter, love, and sparkle! 😂❤️🌹",
  "✨ Deepali, you're beautiful inside and out. Happy Birthday! 🌼💗",
  "🎂 Beauty and brains — Deepali has it all! 🧠💋",
  "💡 Keep glowing and growing, Deepali. Happy Birthday! 🌼🌟",
  "🌞 Deepali, may your smile light up the world forever! 😊🎁",
  "🌟 Deepali, you sparkle like the brightest star. Happy Birthday! ✨🌈",
  "💋 Hugs and kisses for the gorgeous Deepali on her special day! 💌💖",
  "🌹 Deepali, you're a true beauty. Enjoy your day! 💕🎂",
  "💛 Happy Birthday to Deepali, a golden-hearted soul! 🌟💝",
  "🎉 Deepali, you shine brighter than any candle! 🕯️✨",
  "👑 To our queen Deepali, Happy Birthday! ♥️👸",
  "💫 You light up our lives, Deepali! Happy Birthday! 🏠💖",
  "📈 Deepali, with each year, you grow more stunning! 🍷🌸",
  "🎈 Elegant, amazing Deepali — happiest birthday to you! 💃💐",
  "🥂 Deepali, you're one of a kind! Celebrate big! 🎊✨",
  "🌹 Grace, charm, and beauty — that’s Deepali! 👑💞",
  "🎁 Deepali, you deserve all the magic in the world today! 🪄🌟",
  "💃 Forever fabulous Deepali — Happy Birthday! 💋✨",
  "💖 Deepali, you're beautiful in every way. Happy Birthday! 🌸🧡",
  "🌷 To Deepali — another year of being breathtaking! 🥳🎂",
  "😊 Deepali, may your smile never fade. Happy B’day! 💫🎈",
  "🌞 You brighten everyone's life, Deepali! 💛✨",
  "🌟 Your beauty is an inspiration, Deepali! Happy Birthday! 🌍💐",
  "🎊 The world is lucky to have Deepali in it! 🎁❤️",
  "😍 Wishing Deepali a birthday as lovely as her smile! 🌸💫",
  "💌 Deepali, you make everything better — Happy Birthday! 🌈🧡",
  "🎨 Deepali, you're a masterpiece! 🖼️💖",
  "🌹 Beautiful and strong — that's you, Deepali! 🌺💪",
  "🌼 Deepali, you blossom more with every year! 💛🎉",
  "🌸 You're blooming, not aging, Deepali! 🌷🎂",
  "🧡 With your golden heart, you make the world better, Deepali! 🌟💛"
];
```





function quote() {
  const value = Math.floor(Math.random() * loveQuotes.length);
  const quoteElement = document.querySelector(".h2");
  
  quoteElement.style.opacity = 0;

  setTimeout(() => {
    quoteElement.innerHTML = loveQuotes[value];
    quoteElement.style.opacity = 1;
  }, 300);
}

document.querySelector('.press').addEventListener('click', quote);
