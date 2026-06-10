class PortfolioProfile {
  constructor({
    name,
    shortName,
    initials,
    role,
    school,
    location,
    headline,
    summary,
  }) {
    this.name = name;
    this.shortName = shortName;
    this.initials = initials;
    this.role = role;
    this.school = school;
    this.location = location;
    this.headline = headline;
    this.summary = summary;
  }
}

class SkillGroup {
  constructor({ title, icon, description, items }) {
    this.title = title;
    this.icon = icon;
    this.description = description;
    this.items = items;
  }
}

class FeaturedProject {
  constructor({
    name,
    slug,
    type,
    role,
    stack,
    summary,
    visual,
    href,
    challenge,
    outcome,
    highlights,
    previewSlots,
  }) {
    this.name = name;
    this.slug = slug;
    this.type = type;
    this.role = role;
    this.stack = stack;
    this.summary = summary;
    this.visual = visual;
    this.href = href;
    this.challenge = challenge;
    this.outcome = outcome;
    this.highlights = highlights;
    this.previewSlots = previewSlots;
    this.detailPath = `/projects/${slug}`;
  }
}

class PerformanceItem {
  constructor({ title, slug, type, summary, stack, highlights, previewSlots }) {
    this.title = title;
    this.slug = slug;
    this.type = type;
    this.summary = summary;
    this.stack = stack;
    this.highlights = highlights;
    this.previewSlots = previewSlots;
    this.detailPath = `/performance/${slug}`;
  }
}

export const palette = {
  deepBlue: "#0b2341",
  navy: "#102a43",
  teal: "#0f766e",
  blue: "#2563eb",
  slate: "#64748b",
  mist: "#f8fafc",
  warm: "#f59e0b",
};

export const profile = new PortfolioProfile({
  name: "James Michael Restauro Siton",
  shortName: "James Michael Siton",
  initials: "JS",
  role: "BS Information Technology Student",
  school: "Cebu Institute of Technology - University",
  location: "Cebu, Philippines",
  headline:
    "Frontend, full-stack, UI/UX, SQAE, and game development portfolio.",
  summary:
    "Information Technology student with practical experience in UI/UX design, frontend development, full-stack academic systems, software quality assurance, game development, and creative production.",
});

export const contact = {
  email: "jamesmichael.siton@gmail.com",
  github: "https://github.com/res-jammixs",
  portfolio: "https://portfolio-jamessiton.vercel.app",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "7+", label: "Featured works" },
  { value: "5", label: "Practice areas" },
  { value: "2025", label: "Creative director" },
];

export const heroSkills = [
  { label: "React", icon: "code" },
  { label: "Next.js", icon: "stack" },
  { label: "Tailwind", icon: "sparkles" },
  { label: "Figma", icon: "draw" },
  { label: "MySQL", icon: "database" },
  { label: "Java", icon: "coffee" },
  { label: "Git", icon: "branch" },
  { label: "TestRail", icon: "checkCircle" },
  { label: "Lua", icon: "gamepad" },
  { label: "Spring Boot", icon: "leaf" },
];

export const skillGroups = [
  new SkillGroup({
    title: "Frontend Development",
    icon: "devices",
    description:
      "Building responsive interfaces and deployable web experiences with modern JavaScript tooling.",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  }),
  new SkillGroup({
    title: "Backend and Data",
    icon: "database",
    description:
      "Contributing to database-backed features, API integration, and academic full-stack systems.",
    items: ["PHP", "MySQL", "Java", "Spring Boot"],
  }),
  new SkillGroup({
    title: "UI/UX and Creative",
    icon: "draw",
    description:
      "Designing flows, brand direction, publication materials, and interface prototypes.",
    items: ["Figma", "Canva", "Wireframing", "Prototyping", "Brand kits"],
  }),
  new SkillGroup({
    title: "SQAE and Project Workflows",
    icon: "checkCircle",
    description:
      "Practicing test planning, defect documentation, task coordination, and team delivery.",
    items: ["TestRail", "Jira", "Test cases", "Bug reporting"],
  }),
  new SkillGroup({
    title: "Game Development",
    icon: "gamepad",
    description:
      "Creating gameplay logic, UI assets, and interactive learning experiences.",
    items: ["Lua", "Love2D", "JavaScript ES6", "RPG Paper Maker"],
  }),
  new SkillGroup({
    title: "Developer Tools",
    icon: "terminal",
    description:
      "Using common tooling for version control, coding, collaboration, and deployment.",
    items: ["Git", "GitHub", "VS Code", "Vercel"],
  }),
];

export const featuredProjects = [
  new FeaturedProject({
    name: "ReserBayan",
    slug: "reserbayan",
    type: "Barangay Document Request Website",
    role: "Full-Stack Developer / Feature Contributor",
    stack: ["React", "Next.js", "Tailwind CSS", "MySQL"],
    visual: {
      logoText: "RB",
      label: "Resident document flow",
      background: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 52%, #f8fafc 100%)",
      accent: "#2563eb",
      motifColor: "#1e3a8a",
      motifs: ["document", "checkCircle", "mail"],
    },
    href: "https://reserbayan.vercel.app",
    summary:
      "Built frontend and backend features for an online resident request flow, then refined responsiveness, spacing, and deployment-ready UI consistency.",
    challenge:
      "Create a cleaner online request flow for barangay document inquiries and reduce reliance on physical visits.",
    outcome:
      "Delivered responsive user-facing screens, backend-connected features, and a deployment-ready interface.",
    highlights: [
      "Frontend and backend feature contribution",
      "Responsive layout refinement",
      "Resident-centered request flow",
    ],
    previewSlots: ["Home/request flow", "Document form", "Admin or status view"],
  }),
  new FeaturedProject({
    name: "WildKits",
    slug: "wildkits",
    type: "Academic / Organization Management System",
    role: "Full-Stack Developer / Feature Contributor",
    stack: ["Next.js", "Tailwind CSS", "Spring Boot", "Java", "MySQL"],
    visual: {
      logoText: "WK",
      label: "Connected org system",
      background: "linear-gradient(135deg, #d9f99d 0%, #ecfdf5 48%, #f8fafc 100%)",
      accent: "#0f766e",
      motifColor: "#166534",
      motifs: ["database", "stack", "devices"],
    },
    summary:
      "Contributed responsive pages, API integration, backend connectivity, deployment preparation, and database-supported functionality.",
    challenge:
      "Support organization and academic management workflows through a connected full-stack application.",
    outcome:
      "Built and connected features across the Next.js frontend, Spring Boot backend, and MySQL database.",
    highlights: [
      "API integration",
      "Backend connectivity",
      "Database-supported functionality",
    ],
    previewSlots: ["Dashboard preview", "Management workflow", "Data-backed feature"],
  }),
  new FeaturedProject({
    name: "IP2Live",
    slug: "ip2live",
    type: "Gamified Subnetting RPG",
    role: "Project Manager / Main Programmer",
    stack: ["RPG Paper Maker", "JavaScript ES6", "Git", "GitHub"],
    visual: {
      logoText: "IP",
      label: "Subnetting RPG",
      background: "linear-gradient(135deg, #cffafe 0%, #dbeafe 50%, #f8fafc 100%)",
      accent: "#0284c7",
      motifColor: "#155e75",
      motifs: ["network", "terminal", "branch"],
    },
    summary:
      "Led a cyberpunk educational RPG for subnetting practice, including progression logic, validation, feedback systems, and gameplay flow.",
    challenge:
      "Make subnetting practice more interactive for Networking 2 students through game-based learning.",
    outcome:
      "Led the gameplay direction and implemented core validation, progression, and feedback systems.",
    highlights: [
      "Project direction and programming lead",
      "Subnet validation logic",
      "Interactive learning flow",
    ],
    previewSlots: ["Gameplay screen", "Subnet challenge", "Progress feedback"],
  }),
  new FeaturedProject({
    name: "Featherless",
    slug: "featherless",
    type: "Lua-Based 2D Platformer Game",
    role: "Game Developer / UI and Sprite Contributor",
    stack: ["Lua", "Love2D", "STI", "Tiled", "Windfield Physics"],
    visual: {
      logoText: "FL",
      label: "2D platformer systems",
      background: "linear-gradient(135deg, #ede9fe 0%, #e0f2fe 54%, #f8fafc 100%)",
      accent: "#7c3aed",
      motifColor: "#5b21b6",
      motifs: ["gamepad", "sparkles", "code"],
    },
    summary:
      "Created UI elements, sprites, dialogue features, visual assets, movement-related systems, and gameplay logic.",
    challenge:
      "Build a playable 2D platformer experience with UI, sprites, dialogue, and movement systems.",
    outcome:
      "Contributed visual assets and gameplay logic that supported character interaction and game flow.",
    highlights: [
      "UI and sprite contribution",
      "Dialogue and interaction features",
      "Lua gameplay logic",
    ],
    previewSlots: ["Level preview", "Character interaction", "UI/dialogue moment"],
  }),
  new FeaturedProject({
    name: "Trollee",
    slug: "trollee",
    type: "Online Grocery Shopping and Delivery App",
    role: "UI/UX Contributor / Brand Design Director",
    stack: ["Figma", "UI/UX Design", "Branding", "E-Commerce"],
    visual: {
      logoText: "TR",
      label: "Grocery shopping flow",
      background: "linear-gradient(135deg, #ffedd5 0%, #fef3c7 48%, #f8fafc 100%)",
      accent: "#d97706",
      motifColor: "#92400e",
      motifs: ["shoppingBag", "cart", "devices"],
    },
    summary:
      "Helped define a grocery app experience for browsing, ordering, delivery, and stock checking with a clear orange brand identity.",
    challenge:
      "Design an accessible grocery shopping concept for browsing products, checking stock, and requesting delivery.",
    outcome:
      "Created brand direction, logo work, color direction, and UI/UX contributions for the app concept.",
    highlights: [
      "Brand design direction",
      "Grocery e-commerce flow",
      "Figma interface contribution",
    ],
    previewSlots: ["App screens", "Brand palette", "Shopping flow"],
  }),
  new FeaturedProject({
    name: "Nekohi",
    slug: "nekohi",
    type: "Cat Cafe Business and Branding Concept",
    role: "Project Owner / Brand Designer",
    stack: ["Figma", "Canva", "UI/UX Design", "Branding"],
    visual: {
      logoText: "NK",
      label: "Cafe brand concept",
      background: "linear-gradient(135deg, #fff7ed 0%, #ffe4e6 52%, #fdf2f8 100%)",
      accent: "#be6b42",
      motifColor: "#7c2d12",
      motifs: ["cat", "coffeeBean", "coffee"],
    },
    summary:
      "Developed a customer-centered cafe concept with brand identity, publication materials, logo concepts, and visual design assets.",
    challenge:
      "Create a school-based cafe concept with a warm, recognizable customer experience and brand identity.",
    outcome:
      "Produced brand materials, logo concepts, publication designs, and business concept visuals.",
    highlights: [
      "Project ownership",
      "Cafe identity system",
      "Publication and brand assets",
    ],
    previewSlots: ["Logo concept", "Brand applications", "Publication material"],
  }),
];

export const experienceHighlights = [
  {
    title: "Creative Direction",
    detail:
      "Creatives Director of DOST SA CIT-U for the first semester of A.Y. 2025-2026, leading branding and publication materials.",
    href: "/performance/creative-direction",
  },
  {
    title: "SQAE Practice",
    detail:
      "Prepared test cases, documented defects, and practiced software quality workflows using TestRail and Jira.",
  },
  {
    title: "Creative Commissions",
    detail:
      "Produced photo album layouts and cover posters with attention to composition, hierarchy, and client-specific preferences.",
    href: "/performance/creative-commissions",
  },
];

export const performanceItems = [
  new PerformanceItem({
    title: "Creative Direction",
    slug: "creative-direction",
    type: "Organization Branding and Publications",
    summary:
      "Creative direction work for DOST SA CIT-U, including rebranding, brand kit consistency, and publication materials.",
    stack: ["Canva", "Brand kits", "Publication design", "Creative direction"],
    highlights: [
      "Led visual direction for organization materials",
      "Handled logo and brand kit consistency",
      "Prepared publication-ready creative outputs",
    ],
    previewSlots: ["Brand kit preview", "Publication set", "Logo/rebrand assets"],
  }),
  new PerformanceItem({
    title: "Creative Commissions",
    slug: "creative-commissions",
    type: "Layout Design and Poster Work",
    summary:
      "Commission-based photo album layouts and cover posters focused on composition, visual hierarchy, and client preferences.",
    stack: ["Canva", "Layout design", "Poster design", "Client work"],
    highlights: [
      "Created photo album layouts",
      "Designed cover posters",
      "Applied client-specific visual direction",
    ],
    previewSlots: ["Album spread", "Cover poster", "Client layout variation"],
  }),
];

export const certifications = [
  {
    title: "CIT-U Java Object-Oriented Programming Certification Exam",
    focus: "93%",
    accent: palette.blue,
  },
  {
    title: "CodeChum C Programming Certification 2024",
    focus: "85%",
    accent: palette.teal,
  },
  {
    title: "Canva Essentials Certificate of Completion",
    focus: "Creative production",
    accent: palette.warm,
  },
  {
    title: "Parangal Certificates",
    focus: "1st Year to 3rd Year",
    accent: palette.slate,
  },
];

export const achievements = [
  "Flexibit: CCS Awarding - Top 8 best-performing student among IT and CS students for First Year level.",
  "Regional Science, Technology, and Innovation Week - Third Place, Digital Poster Making.",
  "Top 10 Java Certification awardee among Second Year students based on completion speed and score.",
];
