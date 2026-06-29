// ============================================================
// All portfolio content in one place. Edit text here — the
// components map over these arrays, so you rarely touch JSX.
// ============================================================

export const LINKS = {
  github: 'https://github.com/REETHU-JUSTIN',
  linkedin: 'https://linkedin.com/in/reethu-justin',
  // TODO: replace with your real email address.
  email: 'reethujustin@email.com',
  phone: '+91 75108 01892',
  location: 'Kochi, India',
  // Drop your PDF at public/resume.pdf — this path then works as-is.
  resume: '/resume.pdf',
};

export const NAV_IDS = ['about', 'skills', 'experience', 'projects', 'contact'];

export const STATS = [
  { value: '3', unit: 'yrs', label: 'Frontend + QA experience' },
  { value: '18', unit: '+', label: 'Modules tested on INVOQ' },
  { value: '20', unit: '+', label: 'UI defects resolved' },
  { value: '10', unit: '', label: 'Release cycles tested' },
];

export const SKILLS = [
  { group: 'frontend', items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive UI'] },
  {
    group: 'testing & qa',
    items: ['Functional', 'Regression', 'Integration', 'Smoke', 'Test Case Design', 'Defect Lifecycle', 'BlazeMeter'],
  },
  { group: 'backend & apis', items: ['Node.js', 'REST API Integration'] },
  { group: 'data & reporting', items: ['SQL', 'PostgreSQL', 'Jasper Reports', 'Jaspersoft Studio'] },
  { group: 'tools', items: ['Git / GitHub', 'Excel'] },
  { group: 'debugging', items: ['Root Cause Analysis', 'Troubleshooting', 'Bug Fixing'] },
];

export const EXPERIENCE = [
  {
    role: 'Software Engineer',
    company: 'Experion Infosystems Pvt. Ltd',
    location: 'Kochi, Kerala',
    period: 'Mar 2025 – Present',
    bullets: [
      'Perform manual functional and regression testing of INVOQ, a DNCR compliance and administration platform — validating role-based access, form validations, configurations, reporting and administrative workflows across 18+ modules.',
      'Test AD synchronization, CSV import, API Key, License, Whitelist and DNCR Provider management; document test cases and defects in Excel and use GitHub for version control.',
      'Developed and maintained the React.js client application for the Mocha platform, delivering responsive, accessible interfaces and resolving 20+ UI defects.',
      'Executed functional, regression and integration testing across 10 release cycles; integrated analytical reports via Jaspersoft Studio and SQL, coordinating REST API changes with backend engineers.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'iLearningEngines Pvt Ltd',
    location: 'Kochi, Kerala',
    period: 'Jun 2023 – Feb 2025',
    bullets: [
      'Built the Zone personalized content-delivery module in React.js, improving learning-material discoverability and student engagement.',
      'Engineered a Workday Log Attendance Reporting System with a React.js UI and Jasper Reports, delivering real-time attendance dashboards for administrators.',
      'Authored and executed manual functional, regression and integration test cases and managed defects end-to-end with developers across release cycles.',
    ],
  },
];

// Projects shown on the site. Two kinds:
//  • Personal/open-source → have `code` (and optional `demo`) links.
//  • Company work → no links; set `note` so the card shows why.
// Fill `code`/`demo` URLs for your own repos; leave company `code` as ''.
export const PROJECTS = [
  {
    monogram: 'PF',
    tag: 'react · personal',
    title: 'Developer Portfolio',
    description:
      'This very site — a responsive React portfolio with dark/light mode, smooth scrolling, active-section navigation and scroll-reveal animations. Built with Vite, Tailwind CSS and Framer Motion.',
    stack: ['React.js', 'Tailwind', 'Framer Motion', 'Vite'],
    code: 'https://github.com/REETHU-JUSTIN/portfolio',
    demo: '', // ← add your Vercel URL after deploying
  },
  {
    monogram: 'EM',
    tag: 'mern · full-stack',
    title: 'Employee Management System',
    description:
      'A full-stack CRUD app to manage employee records — add, edit, search and delete, with role-based access and a dashboard of team stats. React front end, Node/Express REST API and a MongoDB database.',
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    code: 'https://github.com/REETHU-JUSTIN/employee-management',
    demo: '', // ← add your live demo URL once deployed
  },
  {
    monogram: 'IN',
    tag: 'enterprise · QA',
    title: 'INVOQ — DNCR Compliance Platform',
    description:
      'Manual functional & regression testing across 18+ admin modules — validating role-based access, configurations and reporting for a Do Not Call Registry compliance system.',
    stack: ['Functional QA', 'Regression', 'SQL'],
    code: '',
    note: 'Company project · code is private',
  },
  {
    monogram: 'ZO',
    tag: 'react · frontend',
    title: 'Zone — Personalized Learning',
    description:
      'A React.js content-delivery module recommending learning material from student preferences — lifting discoverability and engagement across the platform.',
    stack: ['React.js', 'JavaScript', 'REST API'],
    code: '',
    note: 'Company project · code is private',
  },
  {
    monogram: 'AR',
    tag: 'react · reporting',
    title: 'Attendance Reporting System',
    description:
      'A Workday Log attendance tracker built with Jasper Reports and SQL, rendering live data in a real-time React.js dashboard for administrators.',
    stack: ['React.js', 'Jasper Reports', 'SQL'],
    code: '',
    note: 'Company project · code is private',
  },
];

export const CERTIFICATIONS = [
  { name: 'MERN Stack Web Development', issuer: 'Luminar Techno Lab' },
  { name: 'React.js Development', issuer: 'Udemy' },
];

export const EDUCATION = {
  degree: 'Bachelor of Computer Applications',
  school: 'Presentation College of Applied Sciences',
  detail: '2019 – 2022 · CGPA 6.0 / 10',
};
