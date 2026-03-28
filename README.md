# 👨‍💻 The Life of a Developer

> **Frontend Odyssey Hackathon — Theme 5: The Life of a Developer**

An immersive, interactive storytelling website that takes you through the humorous journey of a developer — from writing your first `<h1>Hello World</h1>` to achieving full-stack enlightenment (or at least learning to Google better).

---

##  Features

### 5 Story Chapters
| Chapter | Title | Theme |
|---------|-------|-------|
| 1 | Learning HTML | The humble beginning with Notepad and boundless optimism |
| 2 | The First Bug | The eternal battle against `TypeError` and missing semicolons |
| 3 | Stack Overflow Addiction | You don't write code, you assemble it |
| 4 | Deadline Hell | Two weeks of work, two hours left |
| 5 | Enlightenment | Mild competence achieved |

### Hackathon Requirements Met
- **5 Sections** forming a cohesive narrative ✅
- **Scroll-based interactions**: IntersectionObserver reveal animations, parallax background layers ✅
- **3+ Interactions**: Interactive bug tracker, clickable code editor, framework selector, countdown timer, wisdom carousel, coffee meter ✅
- **3+ Animations**: Matrix rain canvas, Framer Motion transitions, neon flicker, typewriter effect, glitch text, floating elements ✅
- **Responsive Design**: Mobile, tablet, and desktop optimised ✅

### Technical Highlights
- **Matrix rain** — custom Canvas API animation
- **Animated loader** — terminal-style boot sequence with progress log
- **Typewriter effect** — cycling developer job titles
- **Interactive bug tracker** — click bugs to expand/resolve them
- **Live code editor** — click "Run code" to watch HTML type itself out
- **Countdown timer** — deadline simulator with panic mode
- **Navigation** — side dot nav (desktop) + top chapter bar (scrolls into view)
- **Glitch text** — CSS pseudo-element glitch on the hero title



## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| **React 18** | UI framework |
| **TypeScript** | Type safety |
| **Vite** | Build tool & dev server |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Smooth animations & transitions |
| **GSAP** | Advanced animation toolkit |
| **Canvas API** | Matrix rain effect |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx   # Intro + animated loader + typewriter
│   │   ├── Chapter1.tsx      # Learning HTML — interactive code editor + skill bars
│   │   ├── Chapter2.tsx      # The First Bug — clickable bug tracker
│   │   ├── Chapter3.tsx      # Stack Overflow — SO feed + framework picker
│   │   ├── Chapter4.tsx      # Deadline Hell — countdown timer + git log
│   │   └── Chapter5.tsx      # Enlightenment — wisdom carousel + evolution tree
│   ├── MatrixRain.tsx        # Canvas matrix rain animation
│   ├── Navigation.tsx        # Side dots + top chapter nav bar
│   └── Footer.tsx            # Credits footer
├── hooks/
│   └── use-scroll-reveal.ts  # IntersectionObserver scroll animations
├── App.tsx                   # Root component + scroll reveal setup
├── index.css                 # Global styles, CSS variables, animations
└── main.tsx                  # Entry point
```

---

## 🎨 Design

- **Color palette**: Dark terminal aesthetic — deep navy background, neon green (#00cc66) primary, purple accent, monospace typography
- **Typography**: Inter (sans) + JetBrains Mono (code)
- **Interactions**: All interactive elements provide visual feedback — hover states, click animations, progress indicators

---

## 📝 Project Description 

*The Life of a Developer* is an interactive narrative website built for the Frontend Odyssey Hackathon under Theme 5. Rather than presenting information statically, the experience unfolds as the user scrolls through five distinct chapters, each recreating a universal milestone in a developer's career.

The journey begins with a cinematic terminal-style boot sequence — complete with a matrix rain canvas animation and a mock loading log — before dropping the user into the Hero section. From there, each chapter builds on the last: Chapter 1 lets users "run" their first HTML file and watch a skill tree animate into place; Chapter 2 presents an interactive bug tracker where users click to diagnose and resolve errors; Chapter 3 simulates a Stack Overflow feed and a chaotic framework-selection screen; Chapter 4 puts users under real pressure with a countdown timer, a visual sprint board, and a git history full of desperate commit messages; finally, Chapter 5 leads to enlightenment through an unlockable wisdom carousel and an evolution tree.

Technically, the project leverages **Framer Motion** for all component-level transitions and reveals, a custom **Canvas API** implementation for the matrix rain, **IntersectionObserver** for scroll-triggered animations, and pure **CSS keyframes** for effects like the glitch text, neon flicker, and typewriter cursor. The design system uses CSS custom properties tied to a dark terminal aesthetic, ensuring consistent theming while remaining fully responsive across mobile, tablet, and desktop. Every interactive element — cards, sliders, timers — provides immediate visual feedback to keep users engaged throughout the story.

---




