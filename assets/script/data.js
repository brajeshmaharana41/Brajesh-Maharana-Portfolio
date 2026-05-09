const portfolioData = {

  roles: [
    'Sr. Front-End Developer',
    'Angular Specialist',
    'React Developer',
    'UI/UX Enthusiast',
  ],

  social: [
    { icon: 'fa-linkedin',   url: 'https://www.linkedin.com/in/brajesh-maharana-3272b3171/' },
    { icon: 'fa-github',     url: 'https://github.com/brajeshmaharana41' },
    { icon: 'fa-envelope-o', url: 'mailto:maharanabrajesh1997@gmail.com' },
  ],

  stats: [
    { value: 6,  suffix: '+', label: 'Years Experience' },
    { value: 20, suffix: '+', label: 'Projects Delivered' },
    { value: 5,  suffix: '',  label: 'Companies' },
  ],

  services: [
    {
      icon: 'fa-code',
      title: 'Front-End Development',
      desc: 'Building performant, accessible, and responsive web applications using Angular, React.js, and Vue.js with clean, maintainable code.',
    },
    {
      icon: 'fa-mobile',
      title: 'Mobile Development',
      desc: 'Cross-platform mobile app development with React Native, delivering native-quality experiences for iOS and Android.',
    },
    {
      icon: 'fa-paint-brush',
      title: 'UI / UX Design',
      desc: 'Crafting pixel-perfect, intuitive interfaces using Angular Material, Prime NG, and Bootstrap — focused on user delight.',
    },
    {
      icon: 'fa-cogs',
      title: 'Architecture & State Management',
      desc: 'Designing scalable, enterprise-grade front-end architectures with NgRx, TypeScript, and SDLC best practices.',
    },
  ],

  skillGroups: [
    {
      title: 'Frontend Frameworks',
      skills: [
        { name: 'Angular',       percent: 95 },
        { name: 'React',         percent: 82 },
        { name: 'React Native',  percent: 72 },
      ],
    },
    {
      title: 'Languages & UI',
      skills: [
        { name: 'TypeScript / JavaScript', percent: 95 },
        { name: 'HTML5 / CSS3 / SCSS',    percent: 98 },
        { name: 'PrimeNG / Angular Material / Bootstrap', percent: 92 },
      ],
    },
    {
      title: 'State, Tools & Practices',
      skills: [
        { name: 'NGRX / Redux',             percent: 88 },
        { name: 'Node.js / REST APIs / SQL', percent: 78 },
        { name: 'Git / Jenkins / Docker / CI/CD', percent: 85 },
      ],
    },
  ],

  experience: [
    {
      date: 'May 2023 – Present',
      title: 'Reserve Bank Information Technology Pvt. Ltd. (ReBIT)',
      lines: [
        'Role: Senior Engineer Developer',
        'Led design, development and maintenance of Angular applications for RBI\'s financial ecosystem. Developed AI/NLP chatbot solutions, implemented performance monitoring tools, conducted security audits aligned with RBI compliance standards, and collaborated with cross-functional teams across Agile delivery cycles.',
      ],
    },
    {
      date: 'March 2022 – May 2023',
      title: 'Java R&D Private Limited',
      lines: [
        'Role: Senior Engineer Developer',
        'Developed and maintained Angular-based enterprise web applications. Spearheaded UI/UX enhancements that improved user engagement by 25%. Automated deployment pipelines reducing release cycles by 30%. Introduced reusable component libraries and integrated RESTful APIs with backend teams.',
      ],
    },
    {
      date: 'July 2021 – March 2022',
      title: 'Absolin Software Solution Private Limited',
      lines: [
        'Role: Junior Software Developer',
        'Designed and developed modular single-page applications (SPAs) using Angular. Reduced application load time by 40% through code optimization techniques. Supported API integration and delivered high-quality solutions in close collaboration with clients and internal teams.',
      ],
    },
    {
      date: 'June 2020 – July 2021',
      title: 'Arowana Software Solution Private Limited',
      lines: [
        'Role: Junior Software Developer',
        'Built and maintained React Native mobile applications for Android and iOS. Integrated third-party APIs, ensured smooth UI/UX transitions, designed interactive dashboards for data visualization, and delivered CI/CD-enabled mobile releases.',
      ],
    },
    {
      date: 'May 2018 – June 2018',
      title: 'Miracle Software System Private Limited (Internship)',
      lines: [
        'Role: Software Developer Intern',
        'Assisted in development of Angular 4-based applications. Contributed to building responsive user interfaces, participated in debugging legacy code, and gained first professional exposure to frontend optimization and collaborative development practices.',
      ],
    },
  ],

  education: [
    {
      date: 'Jun 2015 – Apr 2019',
      title: 'Avanthi Institute of Engineering and Technology, Visakhapatnam, Andhra Pradesh',
      lines: ['Bachelor of Technology — Computer Science & Engineering'],
    },
    {
      date: 'Jun 2013 – May 2015',
      title: 'Sri Gayatri Junior College, Visakhapatnam, Andhra Pradesh',
      lines: ['Intermediate (MPC) — Mathematics, Physics, Chemistry'],
    },
    {
      date: 'Jun 2012 – Apr 2013',
      title: 'Bhashyam Public School, Visakhapatnam, Andhra Pradesh',
      lines: ['High School — Secondary School Certificate (SSC)'],
    },
  ],

  projects: [
    {
      alt: 'DICGC-NIAS Application',
      title: 'DICGC-NIAS — Financial Data Platform (ReBIT)',
      description: 'Led front-end development of a mission-critical enterprise application handling sensitive financial data for DICGC under RBI. Designed scalable Angular architecture using modular design, lazy loading, and reusable components. Implemented multi-factor authentication (MFA), secure session handling, and role-based access control (RBAC) for Maker/Checker/Approver workflows. Built config-driven dynamic forms and dashboards. Integrated REST APIs with interceptors, centralized error handling, and retry mechanisms. Optimized performance using OnPush strategy. Ensured full compliance with RBI security and audit standards.',
      link: 'https://www.rebit.org.in/',
      tags: ['Angular', 'PrimeNG', 'NGRX', 'RBAC', 'TypeScript', 'RBI Compliance'],
    },
    {
      alt: 'MICR Application',
      title: 'MICR — Enterprise Banking Module (ReBIT)',
      description: 'Developed key UI modules for a large-scale enterprise banking application at ReBIT. Built a library of reusable Angular and PrimeNG components adopted across multiple application modules. Implemented role-based UI rendering ensuring secure, permission-driven access for different user roles. Designed config-driven UI architecture to eliminate redundant code and accelerate feature delivery. Integrated REST APIs with optimized lazy loading strategy for significantly improved runtime performance.',
      link: 'https://www.rebit.org.in/',
      tags: ['Angular', 'PrimeNG', 'Config-Driven UI', 'TypeScript', 'REST API'],
    },
    {
      alt: 'Kavach Application',
      title: 'Kavach — Enterprise Security UI (ReBIT)',
      description: 'Developed secure UI modules for Kavach, an internal enterprise security application aligned with RBI compliance standards. Implemented the full Maker/Checker/Approver approval workflow used across all ReBIT applications for sensitive data operations. Built highly configurable UI components that adapt to varying business requirements without code changes. Managed authentication flows, secure session validation, and token lifecycle handling to protect sensitive financial operations.',
      link: 'https://www.rebit.org.in/',
      tags: ['Angular', 'TypeScript', 'RBAC', 'Authentication', 'SCSS'],
    },
    {
      alt: 'NGCB Application',
      title: 'NGCB — Dashboard & API Integration (ReBIT)',
      description: 'Built dashboard modules and data management interfaces for the NGCB application at ReBIT. Developed advanced data tables with client-side and server-side filtering, multi-column sorting, and pagination — capable of handling thousands of records smoothly. Optimized API call strategies using debounce, caching, and request cancellation to minimize network overhead. Ensured a smooth, high-performance UI experience for operators working with large financial datasets daily.',
      link: 'https://www.rebit.org.in/',
      tags: ['Angular', 'PrimeNG', 'REST API', 'TypeScript', 'Performance'],
    },
    {
      alt: 'Udgam Application',
      title: 'Udgam — RBI Unclaimed Deposits Portal (ReBIT)',
      description: 'Developed the responsive front-end for Udgam, RBI\'s official portal enabling citizens to search and claim unclaimed deposits across multiple banks from a single interface. Implemented a highly optimized search engine UI with real-time suggestions, advanced filters, and multi-bank result aggregation. Improved UX through skeleton loaders, progressive data rendering, informative feedback states, and accessibility enhancements — making the portal usable for a wide demographic of Indian citizens.',
      link: 'https://udgam.rbi.org.in/',
      tags: ['Angular', 'TypeScript', 'SCSS', 'REST API', 'Accessibility'],
    },
    {
      alt: 'Chart Board Application',
      title: 'Chart Board — Data Visualization Dashboard (ReBIT)',
      description: 'Built an interactive data visualization dashboard for internal financial analytics at ReBIT. Integrated multiple charting libraries to render line charts, bar graphs, pie charts, and heat maps for real-time financial metrics. Implemented dynamic filter panels allowing users to slice data by date range, category, and department. Connected to live REST APIs for real-time data refresh without full page reloads. Designed for performance — large datasets are virtualized for smooth render even on lower-end hardware.',
      link: 'https://www.rebit.org.in/',
      tags: ['Angular', 'Chart.js', 'PrimeNG', 'REST API', 'TypeScript'],
    },
    {
      alt: 'AI Chatbot Solution',
      title: 'AI-Powered Chatbot — NLP Integration (ReBIT)',
      description: 'Integrated an intelligent chatbot solution into Angular applications for financial sector clients including the Reserve Bank of India. The chatbot leverages NLP to understand natural language queries and automate routine user interactions — reducing support load and improving response times. Built the Angular chat interface with message streaming, typing indicators, and conversation history. Wired NLP engine APIs into the Angular service layer with proper error fallbacks and session continuity.',
      link: 'https://www.rebit.org.in/',
      tags: ['Angular', 'NLP', 'AI Integration', 'TypeScript', 'REST API'],
    },
    {
      alt: 'ESUM Website',
      title: 'ESUM — Billing Management System (Java R&D)',
      description: 'Built a comprehensive billing management website for ESUM at Java R&D using core web technologies. Implemented full CRUD operations for billing records, client management, and invoice generation using vanilla JavaScript for maximum performance with zero framework overhead. Added real-time notifications for payment status updates and overdue alerts. Designed a fully responsive UI using HTML5, CSS3, and optimized layout techniques — achieving fast load times and consistent rendering across all major browsers and devices.',
      link: 'https://github.com/brajeshmaharana41',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    },
    {
      alt: 'Frizzmo E-Commerce',
      title: 'Frizzmo — E-Commerce Platform (Absolin)',
      description: 'Developed the Angular front-end for Frizzmo, a multi-category e-commerce platform at Absolin Software Solutions. Built dynamic product listing pages with category filters, search, and sorting. Integrated a secure payment gateway for seamless transaction processing. Implemented a responsive cart and checkout flow with real-time stock validation. Delivered significant UI/UX improvements — cleaner product cards, faster filter interactions, and a streamlined checkout — that measurably increased user engagement and conversion on the platform.',
      link: 'https://teachersstore.frizzmo.com/',
      tags: ['Angular', 'TypeScript', 'Bootstrap', 'Payment Gateway', 'REST API'],
    },
    {
      alt: 'Hotel Management MEAN',
      title: 'Hotel Management System — MEAN Stack (Absolin)',
      description: 'Developed a full-stack hotel management system using the MEAN stack at Absolin. The system handles the complete hotel operations lifecycle — room search and availability, booking, advance reservations, and cancellations. MongoDB manages dynamic room inventory and guest records, Express.js handles RESTful business logic, Angular delivers a pixel-perfect booking interface, and Node.js powers the server runtime. Features include admin dashboards, occupancy reports, and guest history — built for real-world production use.',
      link: 'https://github.com/brajeshmaharana41/Hotal-management-system.git',
      tags: ['MongoDB', 'Express.js', 'Angular', 'Node.js'],
    },
    {
      alt: 'Mj Mart Mobile App',
      title: 'Mj Mart — E-Commerce Mobile App (Arowana)',
      description: 'Built the Mj Mart cross-platform e-commerce mobile application at Arowana Software Solutions using React Native, targeting both Android and iOS from a single codebase. Features include a product catalog with category browsing, real-time order tracking with status notifications, and a delivery workflow integrated via third-party logistics APIs. Implemented push notifications for order updates and promotions. Applied CI/CD practices using automated build pipelines for consistent, rapid release cycles across both platforms.',
      link: 'https://github.com/brajeshmaharana41',
      tags: ['React Native', 'JavaScript', 'REST API', 'CI/CD', 'Push Notifications'],
    },
  ],

  contact: [
    { icon: 'fa-envelope',   text: 'maharanabrajesh1997@gmail.com', link: 'mailto:maharanabrajesh1997@gmail.com' },
    { icon: 'fa-phone',      text: '+91 8464039178 / +91 8688507070', link: 'tel:+918464039178' },
    { icon: 'fa-whatsapp',   text: 'WhatsApp: +91 8464039178', link: 'https://wa.me/918464039178' },
    { icon: 'fa-linkedin',   text: 'linkedin.com/in/brajesh-maharana', link: 'https://www.linkedin.com/in/brajesh-maharana-3272b3171/' },
    { icon: 'fa-map-marker', text: 'Bengaluru, Karnataka, India', link: null },
  ],

  themes: [
    { name: 'red',    color: '#e40017' },
    { name: 'blue',   color: '#0779e4' },
    { name: 'green',  color: '#57d131' },
    { name: 'purple', color: '#a100ff' },
    { name: 'yellow', color: '#ffcc00' },
  ],
};
