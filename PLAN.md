# Klawbi Platform — Build Plan

## 1. Product Overview

**Klawbi** is an AI-as-a-Service personal assistant that competes with ChatGPT Plus ($20/mo) but actually **executes tasks** — not just answers questions.

- **Tagline:** "The AI that actually does things."
- **Positioning:** ChatGPT talks. Klawbi acts.
- **Differentiator:** Lives in WhatsApp/Telegram, has persistent memory, proactively reaches out, and runs automations 24/7
- **Target Market:** ChatGPT Plus subscribers who feel they're underusing AI — solopreneurs, SMB owners, professionals, creators
- **Business Model:** Freemium + usage-based pricing

### The $20 Problem
ChatGPT Plus gives you smart answers but:
- ❌ Can't send emails
- ❌ Can't book appointments
- ❌ Can't monitor your business
- ❌ Can't run automations
- ❌ Can't proactively reach out
- ❌ Doesn't live in WhatsApp/Telegram
- ❌ Forgets everything next session

Klawbi does ALL of this for $19/mo or less.

---

## 2. Information Architecture

### Sitemap
```
/                       → Landing page (marketing)
/waitlist               → Waitlist signup form
/waitlist/thanks        → Thank you page
/login                  → Login
/signup                 → Signup with plan selector
/forgot-password        → Password reset

/dashboard              → Home (usage stats, agent status, quick actions)
/dashboard/agent        → Agent config (name, persona, channels)
/dashboard/skills       → Skills marketplace (toggleable grid)
/dashboard/usage        → Usage analytics (charts)
/dashboard/billing      → Plan & billing management
/dashboard/settings     → Account settings
```

### User Flows
1. **Visitor → Waitlist:** Landing → scroll features/pricing → CTA → waitlist form → thank you
2. **Visitor → Signup:** Landing → pricing → choose plan → signup form → dashboard
3. **User → Configure Agent:** Dashboard → Agent page → set name/persona → connect WhatsApp → enable skills
4. **User → Upgrade:** Dashboard → billing → compare plans → upgrade

### Component Hierarchy
```
App
├── PublicLayout (Navbar + Footer)
│   ├── LandingPage
│   │   ├── Hero
│   │   ├── ProblemSection
│   │   ├── FeaturesGrid
│   │   ├── ComparisonTable
│   │   ├── PricingSection
│   │   ├── WaitlistCTA
│   │   └── Footer
│   ├── WaitlistPage
│   ├── WaitlistThanks
│   ├── LoginPage
│   ├── SignupPage
│   └── ForgotPasswordPage
│
└── DashboardLayout (Sidebar + TopBar)
    ├── DashboardHome
    │   ├── WelcomeCard
    │   ├── UsageMeter
    │   ├── AgentStatusCard
    │   └── QuickActions
    ├── AgentPage
    │   ├── AgentProfile (name, avatar, persona)
    │   └── ChannelConnections (WhatsApp, Telegram toggles)
    ├── SkillsPage
    │   └── SkillCard (x12 — grid with on/off toggles)
    ├── UsagePage
    │   ├── UsageChart (daily bar chart)
    │   └── UsageBreakdown
    ├── BillingPage
    │   ├── CurrentPlanCard
    │   ├── PlanComparison
    │   └── UpgradeButton
    └── SettingsPage
        ├── ProfileForm
        └── DangerZone
```

---

## 3. Page-by-Page Specifications

### Landing Page (/)

**Hero Section**
- Large headline: "The AI that actually does things."
- Subheadline: "Meet Klawbi — your personal AI assistant that lives in WhatsApp, remembers everything, and gets work done 24/7. Not just another chatbot."
- CTA button: "Join the Waitlist" (primary) + "See How It Works" (secondary/ghost)
- Hero visual: mockup of WhatsApp chat with Klawbi doing things (CSS/SVG illustration)
- Subtle animated gradient background

**Problem Section — "ChatGPT talks. Klawbi acts."**
- Two-column comparison:
  - Left: "What ChatGPT does" (answers, drafts, suggests) — with ❌ icons
  - Right: "What Klawbi does" (sends, schedules, monitors, reminds) — with ✅ icons
- Visual contrast: muted/gray left, vibrant/colored right

**Features Grid (6 features)**
1. 💬 **Lives Where You Are** — WhatsApp, Telegram, Discord. No new app needed.
2. ⚡ **Actually Executes** — Sends emails, books meetings, files reports. Not just suggestions.
3. 🧠 **Remembers Everything** — Persistent memory across sessions. Knows your preferences, projects, contacts.
4. 🔔 **Proactive Notifications** — Alerts you about deadlines, new leads, important events. Reaches out first.
5. 🔌 **Skills Marketplace** — Toggle on capabilities: web search, calendar, CRM, email, file processing.
6. 🌙 **24/7 Always On** — Works while you sleep. Monitors, automates, handles incoming requests.

Each feature: icon, title, 2-line description, subtle card with hover effect.

**Comparison Table**
| Feature | ChatGPT Plus ($20) | Claude Pro ($20) | Gemini Advanced ($20) | Klawbi Pro ($29) |
|---|---|---|---|---|
| Smart Answers | ✅ | ✅ | ✅ | ✅ |
| Task Execution | ❌ | ❌ | ❌ | ✅ |
| WhatsApp/Telegram | ❌ | ❌ | ❌ | ✅ |
| Persistent Memory | ❌ | ❌ | ❌ | ✅ |
| Proactive Alerts | ❌ | ❌ | ❌ | ✅ |
| 24/7 Automation | ❌ | ❌ | ❌ | ✅ |
| Skills Marketplace | ❌ | ❌ | ❌ | ✅ |

**Pricing Section**
4 tier cards:

| | Free | Starter | Pro | Business |
|---|---|---|---|---|
| Price | $0 | $9/mo | $29/mo | $79/mo |
| Messages | 50/mo | 500/mo | 2,000/mo | Unlimited |
| Skills | 3 basic | 10 | All | All + Custom |
| Channels | 1 | 1 | 3 | Unlimited |
| Memory | 7 days | 30 days | Unlimited | Unlimited |
| Team Members | — | — | — | Up to 5 |
| White Label | — | — | — | +$49/mo |

Pro card = highlighted/recommended with "Most Popular" badge.

**Waitlist CTA Section**
- Headline: "Ready to upgrade from ChatGPT?"
- Email input + "Join Waitlist" button
- Social proof: "2,400+ people on the waitlist" (mock number)

**Footer**
- Klawbi logo + tagline
- Links: Features, Pricing, Blog, Docs, Contact
- Social: Twitter/X, Discord, GitHub
- © 2026 Klawbi. All rights reserved.

---

### Waitlist Page (/waitlist)
- Name field
- Email field
- Use case dropdown: Personal Assistant, Business Automation, Customer Support, Developer Tools, Other
- "Join Waitlist" button
- Saves to waitlist.json (mock)

### Waitlist Thanks (/waitlist/thanks)
- Confetti animation or checkmark
- "You're on the list! 🎉"
- "We'll reach out when your Klawbi is ready."
- Share buttons (Twitter, WhatsApp)
- Link back to landing

---

### Login (/login)
- Email + password fields
- "Log In" button
- "Forgot password?" link
- "Don't have an account? Sign up" link
- Mock auth: stores user in localStorage, redirects to /dashboard

### Signup (/signup)
- Name, email, password fields
- Plan selector (4 cards: Free, Starter, Pro, Business)
- "Create Account" button
- Mock auth: stores in localStorage

### Forgot Password (/forgot-password)
- Email field
- "Send Reset Link" button
- Success message after submit

---

### Dashboard Home (/dashboard)
- **Welcome Card:** "Good morning, [Name]! Your Klawbi is active." with agent avatar
- **Usage Meter:** Circular progress ring — "342 / 2,000 messages used" with percentage
- **Agent Status Card:** Green dot "Online" + connected channels badges
- **Quick Actions Grid:** 4 buttons — "Chat with Klawbi", "Manage Skills", "View Usage", "Upgrade Plan"
- **Recent Activity Feed:** Last 5 actions Klawbi performed (mock data)

### Agent Config (/dashboard/agent)
- **Agent Profile Card:**
  - Avatar (selectable from presets)
  - Name field (e.g., "Klawbi" or custom)
  - Persona dropdown: Professional, Friendly, Snarky, Custom
  - Bio/system prompt textarea
- **Connected Channels:**
  - WhatsApp: toggle + QR code placeholder + status
  - Telegram: toggle + bot token field + status
  - Discord: toggle + invite link + status
  - Each shows "Connected" green badge or "Not connected" gray

### Skills Page (/dashboard/skills)
- Grid of 12 skill cards (3x4 on desktop, 2x6 tablet, 1x12 mobile)
- Each card:
  - Icon (Lucide)
  - Skill name
  - 1-line description
  - On/Off toggle
  - "Pro" or "Business" badge if locked on current plan

Skills list:
1. 🔍 Web Search — Search the internet for answers
2. ⏰ Reminders — Set and manage reminders
3. ✉️ Email Drafts — Draft and send emails
4. 📅 Calendar — Manage your schedule
5. 🌐 Web Research — Deep research on any topic
6. 📄 File Summary — Summarize PDFs and documents
7. 📊 Data Analysis — Analyze spreadsheets and data
8. 🐦 Social Media — Post and monitor social accounts
9. 💰 Invoicing — Generate and send invoices
10. 🤝 CRM — Manage contacts and leads
11. 📈 Analytics — Track business metrics
12. 🔧 Custom Automations — Build your own workflows

### Usage Page (/dashboard/usage)
- **Daily Usage Chart:** Recharts bar chart showing messages per day for current month
- **Usage Summary Cards:** Total messages, avg per day, busiest day, skills used
- **Breakdown by Skill:** horizontal bar chart — which skills consumed most messages

### Billing Page (/dashboard/billing)
- **Current Plan Card:** Shows plan name, price, renewal date, current usage vs limit
- **Plan Comparison Grid:** Same 4 tiers from landing page but with "Current Plan" badge and "Upgrade" buttons
- **Payment Method:** Mock card ending in •••• 4242
- **Billing History:** Table with last 3 invoices (mock)

### Settings Page (/dashboard/settings)
- **Profile:** Name, email, password change
- **Notifications:** Email notifications toggle, weekly summary toggle
- **Danger Zone:** Delete account button (with confirmation modal)

---

## 4. Design System

### Colors
- **Background:** #0A0F1E (deep navy)
- **Surface:** #111827 (card backgrounds)
- **Surface Hover:** #1F2937
- **Border:** #1F2937
- **Primary:** #3B82F6 (electric blue)
- **Primary Hover:** #2563EB
- **Accent:** #22C55E (green — for success, active states, CTAs)
- **Accent Hover:** #16A34A
- **Text Primary:** #F9FAFB
- **Text Secondary:** #9CA3AF
- **Text Muted:** #6B7280
- **Error:** #EF4444
- **Warning:** #F59E0B

### Typography
- **Font:** Inter (Google Fonts) — or system-ui fallback
- **H1:** 4rem / 64px, font-bold, letter-spacing: -0.02em
- **H2:** 2.5rem / 40px, font-bold
- **H3:** 1.5rem / 24px, font-semibold
- **Body:** 1rem / 16px, font-normal
- **Small:** 0.875rem / 14px
- **Caption:** 0.75rem / 12px

### Component Patterns
- **Cards:** bg-surface, rounded-xl, border border-border, p-6, hover:border-primary/50 transition
- **Buttons Primary:** bg-primary, text-white, rounded-lg, px-6 py-3, hover:bg-primary-hover, font-medium
- **Buttons Secondary:** bg-transparent, border border-primary, text-primary, rounded-lg
- **Buttons Ghost:** text-secondary, hover:text-white, hover:bg-surface
- **Toggle:** Custom toggle component — green when on, gray when off
- **Input:** bg-surface, border border-border, rounded-lg, px-4 py-3, focus:border-primary, text-white
- **Badge:** Small pill — bg-primary/10 text-primary for info, bg-accent/10 text-accent for success
- **Meter/Progress:** Circular SVG progress ring with percentage in center

### Layout
- **Sidebar (Dashboard):** 256px wide, fixed, bg-#0A0F1E, border-right
- **Content Area:** flex-1, max-w-6xl, mx-auto, px-8 py-6
- **Navbar (Public):** fixed top, bg-#0A0F1E/80 backdrop-blur, z-50
- **Responsive:** mobile-first, sidebar collapses to hamburger < 768px
- **Grid:** 12-col on desktop, 6-col tablet, single-col mobile

### Animations
- Page transitions: fade-in (opacity 0→1, 300ms)
- Card hover: translateY(-2px) + border glow
- Button hover: scale(1.02) + color shift
- Toggle: smooth slide (200ms ease)
- Number counters: animate up on scroll into view
- Gradient hero background: subtle animated gradient shift

---

## 5. Tech Architecture

### Stack
- **React 18** — UI framework
- **Vite** — Build tool
- **Tailwind CSS** — Styling
- **React Router v6** — Client-side routing
- **Recharts** — Charts (usage analytics)
- **Lucide React** — Icons
- **localStorage** — Mock auth + state persistence

### File Structure
```
klawbi/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css                  (Tailwind imports + custom styles)
│   ├── data/
│   │   ├── mockUser.js            (user profile, plan, agent config)
│   │   ├── mockSkills.js          (12 skills with metadata)
│   │   ├── mockUsage.js           (daily usage data for charts)
│   │   └── mockPlans.js           (4 pricing tiers)
│   ├── context/
│   │   └── AuthContext.jsx        (auth state provider)
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Toggle.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── UsageMeter.jsx     (circular progress ring)
│   │   ├── layout/
│   │   │   ├── Navbar.jsx         (public pages)
│   │   │   ├── Footer.jsx
│   │   │   ├── Sidebar.jsx        (dashboard)
│   │   │   ├── PublicLayout.jsx
│   │   │   └── DashboardLayout.jsx
│   │   ├── landing/
│   │   │   ├── Hero.jsx
│   │   │   ├── ProblemSection.jsx
│   │   │   ├── FeaturesGrid.jsx
│   │   │   ├── ComparisonTable.jsx
│   │   │   ├── PricingSection.jsx
│   │   │   ├── WaitlistCTA.jsx
│   │   │   └── KlawbiLogo.jsx     (inline SVG)
│   │   ├── dashboard/
│   │   │   ├── WelcomeCard.jsx
│   │   │   ├── AgentStatusCard.jsx
│   │   │   ├── QuickActions.jsx
│   │   │   ├── RecentActivity.jsx
│   │   │   ├── SkillCard.jsx
│   │   │   ├── PlanCard.jsx
│   │   │   └── UsageChart.jsx
│   │   └── auth/
│   │       └── ProtectedRoute.jsx
│   └── pages/
│       ├── LandingPage.jsx
│       ├── WaitlistPage.jsx
│       ├── WaitlistThanks.jsx
│       ├── LoginPage.jsx
│       ├── SignupPage.jsx
│       ├── ForgotPasswordPage.jsx
│       ├── DashboardHome.jsx
│       ├── AgentPage.jsx
│       ├── SkillsPage.jsx
│       ├── UsagePage.jsx
│       ├── BillingPage.jsx
│       └── SettingsPage.jsx
└── waitlist.json                   (mock waitlist storage)
```

### Routing Table
| Route | Page | Layout | Auth Required |
|---|---|---|---|
| / | LandingPage | PublicLayout | No |
| /waitlist | WaitlistPage | PublicLayout | No |
| /waitlist/thanks | WaitlistThanks | PublicLayout | No |
| /login | LoginPage | PublicLayout | No |
| /signup | SignupPage | PublicLayout | No |
| /forgot-password | ForgotPasswordPage | PublicLayout | No |
| /dashboard | DashboardHome | DashboardLayout | Yes |
| /dashboard/agent | AgentPage | DashboardLayout | Yes |
| /dashboard/skills | SkillsPage | DashboardLayout | Yes |
| /dashboard/usage | UsagePage | DashboardLayout | Yes |
| /dashboard/billing | BillingPage | DashboardLayout | Yes |
| /dashboard/settings | SettingsPage | DashboardLayout | Yes |

### State Management
- **AuthContext:** user object, isAuthenticated, login(), logout(), signup()
- **localStorage keys:**
  - `klawbi_user` — user profile + plan
  - `klawbi_skills` — enabled/disabled skills
  - `klawbi_agent` — agent config (name, persona, channels)
- No backend — all mock data, state persists via localStorage

### Mock Data Structure
```js
// User
{ id: 1, name: "Demo User", email: "demo@klawbi.ai", plan: "pro", joinedAt: "2026-02-15" }

// Agent
{ name: "Klawbi", persona: "friendly", avatar: "default", channels: { whatsapp: true, telegram: false, discord: false } }

// Skill
{ id: "web-search", name: "Web Search", description: "Search the internet", icon: "Search", enabled: true, tier: "free" }

// Usage (daily)
{ date: "2026-03-01", messages: 45, skills: { "web-search": 12, "reminders": 8, "email": 15, "calendar": 10 } }

// Plan
{ id: "pro", name: "Pro", price: 29, messages: 2000, features: [...] }
```

---

## 6. Build Order

### Phase A: Project Setup (5 min)
1. `npm create vite@latest . -- --template react`
2. Install deps: `tailwindcss, postcss, autoprefixer, react-router-dom, recharts, lucide-react`
3. Configure tailwind.config.js with custom colors
4. Set up index.css with Tailwind directives + Inter font
5. Clean up default Vite boilerplate

### Phase B: Foundation (15 min)
6. Create mock data files (mockUser, mockSkills, mockUsage, mockPlans)
7. Create AuthContext
8. Create common components (Button, Card, Input, Toggle, Badge, Modal, UsageMeter)
9. Create KlawbiLogo SVG component

### Phase C: Layouts (10 min)
10. Create Navbar (public)
11. Create Footer
12. Create PublicLayout
13. Create Sidebar (dashboard)
14. Create DashboardLayout
15. Create ProtectedRoute

### Phase D: Public Pages (20 min)
16. LandingPage — Hero section
17. LandingPage — ProblemSection
18. LandingPage — FeaturesGrid
19. LandingPage — ComparisonTable
20. LandingPage — PricingSection
21. LandingPage — WaitlistCTA
22. WaitlistPage + WaitlistThanks
23. LoginPage
24. SignupPage
25. ForgotPasswordPage

### Phase E: Dashboard Pages (25 min)
26. DashboardHome (WelcomeCard, UsageMeter, AgentStatus, QuickActions, RecentActivity)
27. AgentPage (profile config, channel toggles)
28. SkillsPage (grid of SkillCards with toggles)
29. UsagePage (UsageChart with Recharts, breakdown)
30. BillingPage (current plan, comparison, upgrade)
31. SettingsPage (profile form, notifications, danger zone)

### Phase F: App Assembly (5 min)
32. Wire up App.jsx with React Router
33. Connect all routes
34. Test all navigation flows
35. Final polish — animations, hover states, responsive

### Estimated Total: ~80 minutes of agent coding time
