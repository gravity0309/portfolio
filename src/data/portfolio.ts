export const site = {
  name: 'Sakshi Kumari',
  title:
    'B.Tech CSE (AI & ML) Student | Full-Stack Developer | Building AI-Powered Applications',
  description:
    'B.Tech CSE (AI & ML) student with hands-on experience in full-stack development, Generative AI, RAG pipelines, and cloud computing. Passionate about building scalable AI-powered applications using React, FastAPI, LangChain, and modern web technologies.',
  email: 'sakshikumari.032005@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sakshi-kumari-9a3292329',
  github: 'https://github.com/gravity0309',
  resumePath: '/resume.pdf',
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
] as const

export const focusAreas = [
  'Full-Stack Development',
  'Generative AI',
  'RAG Systems',
  'FastAPI & React',
] as const

export const skills = [
  {
    category: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'MySQL', 'FAISS (Vector DB)'],
  },
  {
    category: 'AI / ML',
    items: [
      'Machine Learning',
      'RAG',
      'LLMs',
      'Transformers',
      'LangChain',
      'Sentence Transformers',
      'GenAI',
      'Data Preprocessing',
    ],
  },
  {
    category: 'Cloud & Tools',
    items: [
      'AWS Certified Cloud Practitioner',
      'Git',
      'GitHub',
      'Docker',
      'Railway',
      'Vercel',
      'FastAPI',
    ],
  },
  {
    category: 'Core CS',
    items: [
      'Data Structures & Algorithms',
      'RESTful APIs',
      'CRUD Operations',
      'Role-Based Authentication',
    ],
  },
] as const

export type Project = {
  name: string
  description: string
  techStack: string[]
  github?: string
  demo?: string
  status?: 'featured' | 'coming-soon'
}

export const projects: Project[] = [
  {
    name: 'DocuMind',
    description:
      'Built a full-stack RAG-based PDF Q&A system using React, FastAPI, LangChain, FAISS, Sentence Transformers, and Groq API. Features semantic document search, source citations, and deployed frontend/backend architecture on Railway and Vercel.',
    techStack: [
      'React',
      'FastAPI',
      'LangChain',
      'FAISS',
      'Sentence Transformers',
      'Groq API',
      'Railway',
      'Vercel',
    ],
    github: 'https://github.com/gravity0309/DocuMind',
    demo: 'https://documind-production-8c7a.up.railway.app/',
    status: 'featured',
  },

  {
    name: 'Darshan Ease',
    description:
      'Temple visitor management platform built using the MERN stack featuring visitor scheduling, CRUD operations, responsive UI, and optimized MongoDB data models.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    github: 'https://github.com/gravity0309/DarshanEaseMandir',
  },

  {
    name: 'Complaint Management System',
    description:
      'Full-stack complaint tracking platform with JWT authentication, role-based access control, secure REST APIs, and complaint status tracking workflows.',
    techStack: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'REST APIs',
    ],
    github: 'https://github.com/gravity0309/Complaint-Management-System',
  },

  {
    name: 'Diabetes Prediction System',
    description:
      'Machine learning project using Random Forest classification on healthcare datasets. Included EDA, feature engineering, model evaluation, and performance analysis.',
    techStack: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Machine Learning',
    ],
    github: 'https://github.com/gravity0309/Diabetes-Prediction',
  },
]

export const education = [
  {
    degree:
      'Bachelor of Technology (Computer Science Engineering with specialization in AI & ML)',
    institution: 'KIET Deemed to be University, Ghaziabad',
    period: '2024 – 2028',
    summary:
      'Current CGPA: 7.99. Focused on software engineering, AI applications, machine learning, data structures, and full-stack development.',
  },
] as const

export const certifications = [
  'AWS Certified Cloud Practitioner',
  'AWS Academy Graduate: Machine Learning',
  'AI for Everyone – DeepLearning.AI (Coursera)',
  'AI Primer – Infosys Springboard',
] as const

export const achievements = [
  {
    title: 'GSSoC 2026 Contributor Mentee',
    description:
      'Selected as Contributor Mentee in GirlScript Summer of Code (GSSoC) 2026 and actively contributing to open-source projects.',
  },
  {
    title: 'SIH 2025 Department Winner',
    description:
      'Led Team Velocity during Smart India Hackathon (SIH) 2025 and delivered a live product demonstration to judges.',
  },
] as const

export const currentlyLearning = [
  'Advanced RAG Pipelines',
  'Docker',
  'System Design',
  'AI Agents',
  'Open Source Development',
] as const

export const stats = [
  {
    label: 'Projects Built',
    value: '4+',
  },
  {
    label: 'Technologies',
    value: '20+',
  },
  {
    label: 'Open Source',
    value: 'GSSoC 2026',
  },
  {
    label: 'Cloud',
    value: 'AWS Certified',
  },
] as const

export const socialLinks = [
  {
    label: 'GitHub',
    href: site.github,
  },
  {
    label: 'LinkedIn',
    href: site.linkedin,
  },
  {
    label: 'Email',
    href: `mailto:${site.email}`,
  },
] as const
