class PortfolioProfile {
  constructor({ name, shortName, role, school, location, summary }) {
    this.name = name;
    this.shortName = shortName;
    this.role = role;
    this.school = school;
    this.location = location;
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

class ProjectCategory {
  constructor({ id, label, variant, accent, description, placeholders }) {
    this.id = id;
    this.label = label;
    this.variant = variant;
    this.accent = accent;
    this.description = description;
    this.placeholders = placeholders;
  }
}

export const palette = {
  deepBlue: "#033f63",
  teal: "#28666e",
  sage: "#7c9885",
  olive: "#b5b682",
  cream: "#fedc97",
};

export const profile = new PortfolioProfile({
  name: "James Michael Restauro Siton",
  shortName: "James Michael Siton",
  role: "3rd-year Information Technology Student",
  school: "Cebu Institute of Technology - University",
  location: "Cebu, Philippines",
  summary:
    "A growing information technology student focused on UI/UX design, full stack development, game development, and practical programming foundations.",
});

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "View Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const projectNavLinks = [
  { label: "Branding", href: "#branding" },
  { label: "Logo", href: "#logo" },
  { label: "Pubmats", href: "#pubmats" },
  { label: "Frontend Designs", href: "#frontend-designs" },
  { label: "UI/UX", href: "#ui-ux" },
  { label: "Full Stack Developments", href: "#full-stack-developments" },
  { label: "Games", href: "#games" },
];

export const skillGroups = [
  new SkillGroup({
    title: "UI/UX Design",
    icon: "draw",
    description: "Designing interfaces, flows, and prototypes with Figma.",
    items: ["Figma", "Wireframes", "Prototypes", "Visual systems"],
  }),
  new SkillGroup({
    title: "Frontend Development",
    icon: "devices",
    description: "Building responsive web interfaces with modern tooling.",
    items: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
  }),
  new SkillGroup({
    title: "Backend Development",
    icon: "database",
    description: "Creating data-backed features and working with relational storage.",
    items: ["MySQL", "Full stack workflows", "Data modeling"],
  }),
  new SkillGroup({
    title: "Game Development",
    icon: "stadia_controller",
    description: "Creating interactive game experiences across multiple languages.",
    items: ["Lua", "Java", "JavaScript"],
  }),
  new SkillGroup({
    title: "Programming Foundations",
    icon: "terminal",
    description: "Practicing core programming and problem solving.",
    items: ["C", "Java", "VS Code", "Android Studio"],
  }),
];

export const certifications = [
  {
    title: "CodeChum Silver Certification",
    focus: "C Programming",
    accent: palette.sage,
  },
  {
    title: "CodeChum Gold Certification",
    focus: "Java Programming",
    accent: palette.cream,
  },
];

export const personalHighlights = [
  "Multiple full stack development experiences.",
  "Uses VS Code and Android Studio for development.",
  "Self-studying and using AI tools responsibly while continuing to grow.",
  "Willing to learn and improve as a programmer.",
];

export const projectCategories = [
  new ProjectCategory({
    id: "branding",
    label: "Branding",
    variant: "brand-system",
    accent: palette.deepBlue,
    description: "Brand identity systems, visual direction, and campaign-ready style guides.",
    placeholders: ["Identity direction", "Color system", "Brand applications"],
  }),
  new ProjectCategory({
    id: "logo",
    label: "Logo",
    variant: "logo-gallery",
    accent: palette.teal,
    description: "Logo marks, wordmarks, and symbol explorations prepared for future uploads.",
    placeholders: ["Primary mark", "Alternate mark", "Lockup study"],
  }),
  new ProjectCategory({
    id: "pubmats",
    label: "Pubmats",
    variant: "editorial-grid",
    accent: palette.olive,
    description: "Publication materials and social layouts with image-first placeholders.",
    placeholders: ["Poster", "Event card", "Announcement"],
  }),
  new ProjectCategory({
    id: "frontend-designs",
    label: "Frontend Designs",
    variant: "device-showcase",
    accent: palette.sage,
    description: "Frontend interface designs and coded layouts for web experiences.",
    placeholders: ["Landing page", "Dashboard", "Responsive flow"],
  }),
  new ProjectCategory({
    id: "ui-ux",
    label: "UI/UX",
    variant: "case-study",
    accent: palette.deepBlue,
    description: "UX research, wireframes, prototypes, and end-to-end design thinking.",
    placeholders: ["Research", "Wireframe", "Prototype"],
  }),
  new ProjectCategory({
    id: "full-stack-developments",
    label: "Full Stack Developments",
    variant: "system-stack",
    accent: palette.teal,
    description: "Full stack systems combining interfaces, data, and backend behavior.",
    placeholders: ["Frontend", "Backend", "Database"],
  }),
  new ProjectCategory({
    id: "games",
    label: "Games",
    variant: "play-grid",
    accent: palette.cream,
    description: "Game projects and interactive experiments built with Lua, Java, and JavaScript.",
    placeholders: ["Mechanics", "Levels", "Gameplay"],
  }),
];
