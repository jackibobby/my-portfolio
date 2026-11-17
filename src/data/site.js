// ✏️ EDIT THIS FILE: everything on the site reads from here.

export const site = {
  name: "Nwachinemere Basil Chidera",
  role: "Full Stack Developer",
  headline: "I build full stack apps that run real businesses and analyze business datasets.",
  intro:
    "From LPG management and digital banking to fabric stores and games, I design the interface, build the backend and ship it. One developer, the whole product.",
  location: "Calabar, Nigeria",
  email: "basilchidera8@gmail.com",
  // WhatsApp number: digits only, with country code, no + or spaces (e.g. 2348012345678)
  whatsapp: "2348087487330",
  availability: "Open to new projects",
  socials: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    twitter: "https://x.com/your-username",
  },
  resumeUrl: "", // put a file in /public (e.g. /cv.pdf) and set it here, or leave empty to hide the button
};

export const about = [
  "I'm a full stack developer who likes owning a product from the first sketch to the live URL. I work across React and Next.js on the front, Node.js and databases on the back, and I care about interfaces that feel finished.",
  "My work spans business tools, e-commerce, fintech and games. That mix means I know how a barber books a client, how a fabric seller takes an order and how a bank screen should handle money.",
];

export const services = [
  { title: "Full stack web apps", text: "Dashboards, platforms and internal tools with auth, databases and APIs." },
  { title: "E-commerce", text: "Catalogues, carts, checkout and order management that sellers can run daily." },
  { title: "Fintech interfaces", text: "Banking and crypto screens that make balances and transactions clear." },
  { title: "Business websites", text: "Fast, mobile-first sites that turn visitors into bookings and calls." },
];

export const skills = [
  { group: "Frontend", items: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Responsive design"] },
  { group: "Backend", items: ["Node.js", "REST APIs", "Authentication", "Payments", "Server actions"] },
  { group: "Data & tools", items: ["MongoDB", "PostgreSQL", "Git & GitHub", "Vercel", "VS Code"] },
  { group: "Data Analysis", items: ["Python", "Excel", "SQL", "Power BI"] },
];

export const process = [
  { title: "Discover", text: "We agree on the problem, the users and what 'done' means." },
  { title: "Design", text: "Real screens in light and dark mode before any heavy code." },
  { title: "Build", text: "Front end, back end and database built together, shown weekly." },
  { title: "Launch", text: "Deploy, test on real phones and hand over with support." },
  { title: "Data Analysis", text: "We improve the product based on real user feedback." },
];

// kind decides the preview drawn on each card (see ProjectMock.js)
export const projects = [
  {
    id: "chideragaz", title: "CHIDERAGAZ", tagline: "LPG business management platform",
    category: "Business", kind: "dashboard", colors: ["#ff7a18", "#ffb84d"], url: "chideragaz.app",
    description: "A management platform for an LPG gas business: track cylinders, refills, customers, sales and stock in one place.",
    features: ["Sales and refill tracking", "Customer and cylinder records", "Stock and revenue dashboard", "Daily and monthly reports"],
    stack: ["React", "Next.js", "Node.js", "MongoDB"], live: "", code: "",
  },
  {
    id: "carlton-barbers", title: "Carlton Barbers", tagline: "Barbershop website",
    category: "Websites", kind: "site", colors: ["#1f2937", "#c9a24b"], url: "carltonbarbers.com",
    description: "A sharp, mobile-first website for a barbershop with services, prices, gallery and one-tap contact.",
    features: ["Service and price list", "Gallery of cuts", "Booking by WhatsApp or call", "Opening hours and map"],
    stack: ["React", "Next.js", "CSS"], live: "", code: "",
  },
  {
    id: "aquariuz", title: "Aquariuz", tagline: "Cryptocurrency and real estate platform",
    category: "Finance", kind: "crypto", colors: ["#0ea5e9", "#6366f1"], url: "aquariuz.io",
    description: "One platform for digital assets and property: live market views, portfolio tracking and real estate listings.",
    features: ["Market and portfolio views", "Property listings and filters", "Secure sign-in", "Responsive dashboard"],
    stack: ["React", "Next.js", "Node.js", "REST APIs"], live: "", code: "",
  },
  {
    id: "king-global-ventures", title: "KING GLOBAL VENTURES", tagline: "Fabrics e-commerce",
    category: "E-commerce", kind: "store", colors: ["#be123c", "#f59e0b"], url: "kingglobalventures.com",
    description: "An online fabric store where buyers browse patterns by type and colour, add yards to a cart and order.",
    features: ["Fabric catalogue and search", "Cart and checkout", "Order management", "Mobile-first shopping"],
    stack: ["React", "Next.js", "Node.js", "MongoDB"], live: "", code: "",
  },
  {
    id: "aquarius-bank", title: "Aquarius Bank", tagline: "Digital banking application",
    category: "Finance", kind: "bank", colors: ["#2f4bff", "#22d3ee"], url: "aquariusbank.app",
    description: "A digital banking app with accounts, transfers and transaction history designed to keep money movements clear.",
    features: ["Account overview and balances", "Transfers and history", "Card management screens", "Light and dark interface"],
    stack: ["React", "Next.js", "Node.js", "PostgreSQL"], live: "", code: "",
  },
  {
    id: "bookstore", title: "Bookstore", tagline: "Online bookstore platform",
    category: "E-commerce", kind: "books", colors: ["#7c3aed", "#f472b6"], url: "bookstore.app",
    description: "An online bookstore with categories, search, book pages and a smooth cart-to-checkout flow.",
    features: ["Browse by category and author", "Search and filters", "Cart and checkout", "Admin catalogue management"],
    stack: ["React", "Next.js", "Node.js", "MongoDB"], live: "", code: "",
  },
  {
    id: "puzzle-game", title: "Puzzle Game", tagline: "Interactive gaming application",
    category: "Games", kind: "game", colors: ["#10b981", "#facc15"], url: "puzzlegame.app",
    description: "An interactive puzzle game with smooth tile movement, move counting and levels that get harder.",
    features: ["Smooth tile interactions", "Move and time counter", "Progressive levels", "Works on touch and desktop"],
    stack: ["React", "JavaScript", "CSS animation"], live: "", code: "",
  },
  {
    id: "pulse", title: "Pulse", tagline: "Habit and focus tracker (sample added by Claude)",
    category: "Productivity", kind: "tracker", colors: ["#f43f5e", "#fb923c"], url: "pulse.app",
    description: "A habit tracker with daily check-ins, streaks and a weekly focus score. Replace or delete this card with your own project.",
    features: ["Daily check-ins", "Streaks and weekly score", "Saved progress", "Light and dark mode"],
    stack: ["React", "Next.js", "Local storage"], live: "", code: "",
  },
];
