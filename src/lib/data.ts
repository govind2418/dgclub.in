export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/dgclub-game/" },
  { label: "Promotion", href: "/promotion/" },
  { label: "Gift Code", href: "/gift-code/" },
  { label: "Download", href: "/download-app/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export const footerLinks = {
  company: [
    { label: "About Us", href: "/about/" },
    { label: "Contact", href: "/contact/" },
    { label: "APK Guide", href: "/apk-guide/" },
    { label: "Gift Code", href: "/gift-code/" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms & Conditions", href: "/terms/" },
    { label: "Responsible Gaming", href: "/responsible-gaming/" },
    { label: "Disclaimer", href: "/disclaimer/" },
  ],
};

export type FeatureCard = {
  title: string;
  description: string;
  icon: "bolt" | "headset" | "shield" | "wallet";
};

export const featureCards: FeatureCard[] = [
  {
    title: "Fast Withdraw",
    description: "Withdrawals processed in minutes, not days — your winnings, on your time.",
    icon: "bolt",
  },
  {
    title: "24x7 Support",
    description: "A dedicated concierge team available around the clock, every day of the year.",
    icon: "headset",
  },
  {
    title: "Secure Platform",
    description: "Bank-grade encryption and monitored infrastructure protect every session.",
    icon: "shield",
  },
  {
    title: "Instant Deposit",
    description: "Fund your account instantly with a wide range of trusted payment methods.",
    icon: "wallet",
  },
];

export type BonusCard = {
  title: string;
  description: string;
  tag: string;
};

export const bonusCards: BonusCard[] = [
  {
    title: "Welcome Bonus",
    description: "Start your journey with an exclusive reward on your first deposit.",
    tag: "New Members",
  },
  {
    title: "Daily Cashback",
    description: "A share of your play returned to you, every single day.",
    tag: "Daily",
  },
  {
    title: "Referral Rewards",
    description: "Invite friends and earn premium rewards for every successful referral.",
    tag: "Unlimited",
  },
  {
    title: "VIP Rewards",
    description: "Climb the VIP tiers to unlock elevated limits and bespoke privileges.",
    tag: "Exclusive",
  },
];

export const timelineSteps = [
  {
    step: "01",
    title: "Easy Registration",
    description: "Create your account in under a minute with a simple, secure sign-up flow.",
  },
  {
    step: "02",
    title: "Deposit",
    description: "Choose from multiple trusted payment channels for instant funding.",
  },
  {
    step: "03",
    title: "Play Games",
    description: "Explore lottery, Win Go, slots, sports, fishing and casino tables.",
  },
  {
    step: "04",
    title: "Withdraw",
    description: "Cash out your winnings quickly with fast, transparent withdrawals.",
  },
];

export type GameCategory = {
  slug: string;
  title: string;
  description: string;
  icon: "dice" | "bolt" | "reel" | "trophy" | "fish" | "spade";
};

export const gameCategories: GameCategory[] = [
  {
    slug: "lottery",
    title: "Lottery",
    description: "Classic draws with premium jackpots and instant results.",
    icon: "dice",
  },
  {
    slug: "win-go",
    title: "Win Go",
    description: "Fast-paced colour prediction rounds every minute.",
    icon: "bolt",
  },
  {
    slug: "slots",
    title: "Slots",
    description: "Hundreds of high-fidelity slot titles with big multipliers.",
    icon: "reel",
  },
  {
    slug: "sports",
    title: "Sports",
    description: "Live odds across football, cricket, tennis and more.",
    icon: "trophy",
  },
  {
    slug: "fishing",
    title: "Fishing",
    description: "Arcade-style fishing tables with escalating rewards.",
    icon: "fish",
  },
  {
    slug: "casino",
    title: "Casino",
    description: "Live dealer tables and premium casino classics.",
    icon: "spade",
  },
];

export const stats = [
  { label: "Players", value: 250000, suffix: "+" },
  { label: "Withdrawals", value: 50, suffix: "M+" },
  { label: "Daily Winners", value: 3200, suffix: "+" },
  { label: "Years Online", value: 5, suffix: "+" },
];

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Rohit S.",
    location: "Mumbai",
    quote: "Withdrawals actually hit my account in minutes. The whole experience feels premium and trustworthy.",
    rating: 5,
  },
  {
    name: "Ananya K.",
    location: "Bengaluru",
    quote: "Clean interface, fast support, and the VIP rewards make a real difference over time.",
    rating: 5,
  },
  {
    name: "Vikram P.",
    location: "Delhi",
    quote: "Best game variety I've found. Win Go and the live casino tables are my favourites.",
    rating: 5,
  },
  {
    name: "Sneha R.",
    location: "Pune",
    quote: "Registration took less than a minute and the referral rewards are genuinely generous.",
    rating: 5,
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "How do I register on Dg Club?",
    answer:
      "Tap Register Now, complete the short sign-up form on the official platform, verify your account, and you're ready to play.",
  },
  {
    question: "How long do withdrawals take?",
    answer:
      "Most withdrawals are processed within minutes during standard operating hours, subject to verification checks.",
  },
  {
    question: "Is Dg Club secure?",
    answer:
      "Yes. The platform uses encrypted connections and monitored infrastructure to protect every account and transaction.",
  },
  {
    question: "What games are available?",
    answer:
      "Lottery, Win Go, slots, sports betting, fishing tables and live casino games are all available in one place.",
  },
  {
    question: "How do I download the app?",
    answer:
      "Visit the Download App page for the official Android APK link and QR code, plus a step-by-step install guide.",
  },
  {
    question: "What is the referral program?",
    answer:
      "Share your referral link or code with friends — once they register and play, you both receive reward bonuses.",
  },
];
