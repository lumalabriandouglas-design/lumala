export const CATEGORIES = ["atelier", "desk", "culture"] as const;
export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_LABEL: Record<Category, string> = {
  atelier: "Atelier",
  desk: "Desk",
  culture: "Culture",
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  kicker: string;
  year: string;
  category: Category;
  location: string;
  summary: string;
  story: string[];
  features: string[];
  cover: string;
  coverAlt: string;
  live?: string;
  featured?: boolean;
};

export const WORK: Project[] = [
  {
    slug: "drape-collective",
    index: "01",
    title: "Drapé Collective",
    kicker: "Marketplace",
    year: "2026",
    category: "atelier",
    location: "Kampala",
    featured: true,
    summary:
      "A premium floor for Kampala ateliers. Collectors shop. Designers keep a studio and a shareable showroom.",
    story: [
      "Drapé Collective is the house for Kampala makers — House of Zion, Tassy Stitches, Ensemble, UCJ, May Stitches, and independents on one floor.",
      "The public site is a marketplace: looks, ateliers, a journal, a bag. Behind the door, a designer signs in to a studio, edits their own pieces, and shares a showroom at a quiet URL.",
    ],
    features: [
      "Shop the floor as a collector",
      "Designer studio and shareable showroom",
      "Looks, ateliers, journal, bag",
    ],
    cover: "/work/drape.jpg",
    coverAlt: "Garments on dark wood rails in a Kampala atelier showroom",
    live: "https://odrapecollective.com",
  },
  {
    slug: "binti-designs",
    index: "02",
    title: "BINTI DESIGNS",
    kicker: "Maison",
    year: "2026",
    category: "atelier",
    location: "Kampala",
    summary:
      "Luxury editorial showroom for a Kampala atelier. Precise cut, quiet luxury, clothes that hold their shape in the light.",
    story: [
      "BINTI DESIGNS is an East African atelier on a private floor in Kampala. The public house is quiet: looks on the rack, a way to write or call, a callback if you want a number left.",
      "The private floor is not linked from the street. The rack is dressed when the house is ready. Until then, WhatsApp.",
    ],
    features: [
      "Editorial showroom and collection",
      "Write, call, or leave a number",
      "Private atelier studio",
    ],
    cover: "/work/binti.jpg",
    coverAlt: "Ivory tailored coat on a dark valet in a quiet atelier",
    live: "https://binti-designs.vercel.app",
  },
  {
    slug: "meridian",
    index: "03",
    title: "Meridian",
    kicker: "Estimate desk",
    year: "2026",
    category: "desk",
    location: "Kampala",
    summary:
      "Someone asks how much. You send a number that protects your time — in UGX.",
    story: [
      "Meridian is an estimate desk for independents. Website, auto shop, or a custom job: pick a playbook, send a letterhead estimate, convert it to an invoice, collect.",
      "A rate lab turns the life you described into a recommended hourly in UGX, after tax and overhead.",
    ],
    features: [
      "Website and auto-shop playbooks",
      "Letterhead estimates to invoices",
      "Rate lab in UGX",
    ],
    cover: "/work/meridian.jpg",
    coverAlt: "Letterhead estimates and a fountain pen on a dark oak desk",
    live: "https://meridian-one-green.vercel.app",
  },
  {
    slug: "anglican-hymn-sync",
    index: "04",
    title: "Anglican Hymn Sync",
    kicker: "Hymnal",
    year: "2026",
    category: "culture",
    location: "Uganda",
    summary:
      "Luganda and English Anglican hymnal for web and mobile. Search, setlists, and a proper now-playing deck.",
    story: [
      "The hymnal works the way a congregation actually sings — by number, by Luganda title, by English title, or by a line of lyric.",
      "Dual lyrics sit side by side. Favourites and service setlists carry liturgical role. The player is a deck, not a button.",
    ],
    features: [
      "Search by number, title, or lyrics",
      "Luganda, English, or both",
      "Setlists and now-playing deck",
    ],
    cover: "/work/hymn.jpg",
    coverAlt: "Wooden pews and a hymnal lectern in an Anglican church at golden hour",
    live: "https://anglicanhymn-sync.vercel.app",
  },
  {
    slug: "cloud-stock-manager",
    index: "05",
    title: "Cloud Stock Manager",
    kicker: "Shop floor",
    year: "2026",
    category: "desk",
    location: "Uganda",
    summary:
      "Inventory, sell, reports, team, and a ledger scanner for shops that keep the books on paper and in the cloud.",
    story: [
      "Cloud Stock Manager is the shop: stock, sales, reports, billing, import and export. Staff join by invite and land on a Today page that covers today and the last seven days.",
      "A ledger scanner reads the paper book when that is still how the house counts.",
    ],
    features: [
      "Inventory, sell, reports, billing",
      "Team invites",
      "Today page and ledger scan",
    ],
    cover: "/work/stock.jpg",
    coverAlt: "Wooden stockroom shelves, a leather ledger, and warm shop light",
  },  {
    slug: "kwaya",
    index: "06",
    title: "Kwaya",
    kicker: "Choir player",
    year: "2026",
    category: "culture",
    location: "Uganda",
    summary:
      "One player for the Anglican choirs of Uganda. Choir profiles, and the hymns they own — on the web and on Android.",
    story: [
      "Kwaya is where a choir keeps its sound. Each choir has a profile and the hymns it has recorded, and one player carries them from the first verse to the last.",
      "The choir uploads from a private vestry. The congregation listens on the web, or in the Android app on the way to Sunday service.",
    ],
    features: [
      "Choir profiles and their hymns",
      "One player, web and Android",
      "Private vestry for uploads",
    ],
    cover: "/work/kwaya.jpg",
    coverAlt: "Open hymnal, sheet music, and a phone on a carved choir stall in warm church light",
    live: "https://kwaya.vercel.app",
  },
  {
    slug: "plan",
    index: "07",
    title: "PLAN",
    kicker: "Goal date",
    year: "2026",
    category: "desk",
    location: "Uganda",
    summary:
      "A goal date for messy pay. Savings, debts, and a new date when you overspend.",
    story: [
      "PLAN is for money that arrives daily, weekly, or whenever the hustle pays. Tell it the pattern, not the best week, and it gives you one goal and a date.",
      "Debts eat the plan before the goal does, so they sit in it too. Overspend, and it does not scold — it moves the date.",
    ],
    features: [
      "Daily, weekly, or mixed pay",
      "Savings goal and debts",
      "A new date when you overspend",
    ],
    cover: "/work/plan.jpg",
    coverAlt: "Pocket planner with a circled date, banknotes, and coins on a dark oak desk",
    live: "https://plan-rho-jade.vercel.app",
  },
];

export function getWork(slug: string): Project | undefined {
  return WORK.find((p) => p.slug === slug);
}

export function adjacentWork(slug: string): { prev?: Project; next?: Project } {
  const i = WORK.findIndex((p) => p.slug === slug);
  if (i < 0) return {};
  return {
    prev: i > 0 ? WORK[i - 1] : undefined,
    next: i < WORK.length - 1 ? WORK[i + 1] : undefined,
  };
}
