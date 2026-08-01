export const profile = {
  name: "Srinija Gaddam",
  role: "Full-Stack Engineer",
  subrole: "B.Tech, Electronics & Communication Engineering — IIIT Allahabad",
  phone: "+91-9701031024",
  email: "srinijagaddam063@gmail.com",
  linkedin: "#", // placeholder — provide real URL to link
  github: "#", // placeholder — provide real URL to link
  tagline:
    "B.Tech ECE student at IIIT Allahabad, CGPA 8.93. I build full-stack products end to end — real-time bidding, authentication, admin dashboards — and back it with 300+ solved algorithmic problems and a top-2% JEE Mains rank.",
};

export const stats = [
  { value: "300+", label: "DSA problems solved", unit: "LeetCode / Codeforces / GfG" },
  { value: "1528", label: "LeetCode contest rating", unit: "peak rating" },
  { value: "top 2%", label: "JEE Mains 2024", unit: "of 1M+ candidates" },
  { value: "8.93", label: "CGPA", unit: "B.Tech ECE, IIIT Allahabad" },
];

export const education = [
  {
    school: "Indian Institute of Information Technology, Allahabad",
    location: "Prayagraj, Uttar Pradesh",
    degree: "B.Tech in Electronics and Communication Engineering",
    detail: "CGPA: 8.93",
    period: "Aug 2024 – Present",
  },
  {
    school: "Sri Chaitanya Junior College",
    location: "Hyderabad, Telangana",
    degree: "Class 12",
    detail: "Percentage: 98.9%",
    period: "May 2024",
  },
  {
    school: "Jawahar Navodaya Vidyalaya",
    location: "Karimnagar, Telangana",
    degree: "Class 10, CBSE",
    detail: "Percentage: 96%",
    period: "May 2022",
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  status: "LIVE" | "SOURCE";
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  github: string;
  live?: string;
};

export const projects: Project[] = [
  {
    id: "sneakerhead",
    name: "SneakerHead",
    tagline: "A real-time online sneaker auction platform.",
    status: "SOURCE",
    problem:
      "Live auctions need bids, outbid alerts, and winner updates to reach every viewer instantly, without the backend falling behind under concurrent bidding.",
    solution:
      "Built a full auction platform from scratch: a REST API with JWT auth and Cloudinary-backed listings, plus a hybrid Socket.io layer with global and per-item channels for live bid propagation.",
    features: [
      "REST API with JWT authentication, profile uploads, and Cloudinary-backed product CRUD",
      "Auction scheduling with configurable bid increments and seller-only deletion",
      "Hybrid Socket.io architecture (global + per-item channels) for live bid updates and outbid alerts",
      "React frontend with Framer Motion, live countdowns, image carousels, and search dropdowns",
      "Responsive, theme-adaptive UI built with Lucide-React",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "bcrypt.js", "Cloudinary", "Framer Motion"],
    github: "#",
  },
  {
    id: "hostel-management",
    name: "Hostel Management System",
    tagline: "A full-stack system for hostel administration.",
    status: "LIVE",
    problem:
      "Hostel admin needed a single system to manage student records, attendance, and hostel data, with routes properly restricted by role.",
    solution:
      "Built a two-role platform (admin / resident) with Google OAuth-secured routes, role-based access control, and a five-module admin dashboard, deployed to production.",
    features: [
      "Two-role architecture with role-based access control across all routes",
      "Routes secured via Google OAuth 2.0 + JWT",
      "Admin dashboard with 5+ modules for records, attendance, and hostel monitoring",
      "10+ REST APIs powering full CRUD between the React frontend and Express backend",
      "Deployed on Netlify (frontend) + Render (backend) + MongoDB Atlas, serving live traffic",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Google OAuth", "JWT"],
    github: "#",
    live: "#",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["C/C++", "Python", "JavaScript", "SQL", "LaTeX"],
  },
  {
    label: "Core CS",
    items: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Object-Oriented Programming"],
  },
  {
    label: "Web & Databases",
    items: ["React.js", "Node.js", "Express.js", "REST APIs", "Socket.io", "MongoDB", "Framer Motion", "Streamlit", "HTML", "CSS"],
  },
  {
    label: "Auth & Cloud",
    items: ["JWT", "bcrypt.js", "Google OAuth 2.0", "RBAC", "Firebase", "Cloudinary", "Netlify", "Render"],
  },
  {
    label: "Developer Tools",
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

export const certifications = [
  {
    name: "Google Upskilling Launchpad 2025",
    detail: "Advanced Data Structures & Algorithms, software engineering best practices",
  },
  {
    name: "Algo University DP Bootcamp",
    detail: "Dynamic Programming patterns, optimization techniques, competitive programming",
  },
];

export const achievements = [
  {
    title: "1528",
    label: "Peak LeetCode rating",
    detail: "300+ problems solved across LeetCode, Codeforces, and GeeksforGeeks.",
  },
  {
    title: "Top 2%",
    label: "JEE Mains 2024",
    detail: "Ranked in the top 2% among 1M+ candidates.",
  },
  {
    title: "Gold Medal",
    label: "CLB Competitive Exam",
    detail: "State Rank 1.",
  },
  {
    title: "Fully Funded",
    label: "Jawahar Navodaya Vidyalaya",
    detail: "Selected via a national-level exam, <1% acceptance rate.",
  },
];

export const positions = [
  {
    role: "Volunteer, Effervescence 2024",
    org: "IIIT Allahabad",
    detail: "Coordinated event logistics and managed on-ground operations for a cultural festival attended by 1,000+ participants.",
  },
  {
    role: "Volunteer, Entrepreneurship Cell (E-Cell)",
    org: "IIIT Allahabad",
    detail: "Organized entrepreneurial workshops and speaker sessions, facilitating networking for 200+ student attendees.",
  },
];
