// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  
] as const;

// Services
export const SERVICES = [
  {
    title: "Data Scientest",
    icon: web,
  },
  {
    title: "ML Engineer",
    icon: mobile,
  },
  {
    title: "Deep Learning",
    icon: backend,
  },
  {
    title: "Computer vision",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "Data Base",
    icon: html,
  },
  {
    name: "Pyhon",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Colap",
    icon: typescript,
  },
  {
    name: "Flask",
    icon: reactjs,
  },
  {
    name: "tenserflow",
    icon: redux,
  },
  {
    name: "pytorch",
    icon: tailwind,
  },
  {
    name: "Pandas",
    icon: nodejs,
  },
  {
    name: "Office365",
    icon: mongodb,
  },
  {
    name: "matplotlib",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Power PI",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "AI & Data Science (IBM)",
    company_name: "Digital Egypt Pioneers Initiative - DEPI · Internship",
    icon: starbucks,
    iconBg: "#FFFFFF",
    date: " October 2024 - july 2025",
    points: [
      "Intensive training in Data Science and Machine Learning using Python and MLOps.",
      "Focuses on data analysis, developing intelligent models, and deploying them in real-world environments.",
      "Includes hands-on projects that simulate real-world challenges and enhance data-driven decision-making.",
      "Covers advanced topics such as computer vision and natural language processing.",
      "Provides strong practical experience, preparing for careers in AI and Data Science.",
    ],
  },
  {
    title: "Machine Learning Engineer",
    company_name: "National Telecommunication Institute (NTI) · Internship",
    icon: tesla,
    iconBg: "#FFFFFF",
    date: "Jan 2021 - Feb 2022",
    points: [
      "An intensive 120-hour program focused on Artificial Intelligence and Machine Learning using cutting-edge technologies",
      "Covers big data analysis, building intelligent models, and deploying them in production environments.",
      "Includes advanced applications in computer vision, natural language processing, and AI automation.",
      "Features hands-on training with Python and powerful frameworks like TensorFlow.",
    ],
  },
  {
    title: "IT Manager ",
    company_name: "YLY - Ministry Of Youth And Sports(Beni-suef)",
    icon: shopify,
    iconBg: "#f3f3f3",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Led the IT operations for YLY, ensuring seamless technical support and system management.",
      "Managed and optimized digital platforms, databases, and internal communication tools.",
      "Developed automated solutions to enhance workflow efficiency and data handling.",
      "Provided technical guidance and support to team members, ensuring smooth execution of IT-related tasks.",
      "Played a key role in digital transformation initiatives, improving overall organizational productivity.",
    ],
  },
  {
    title: "AI Engineer - IEEE Beni-Suef",
    company_name: "- IEEE Beni-Suef",
    icon: meta,
    iconBg: "#0b004c",
    date: "Jan 2023 - Present",
    points: [
      "I specialize in developing AI-driven solutions using machine learning and deep learning techniques.",
      "My work involves data analysis, model development, and deploying intelligent systems for real-world applications.",
      "I collaborate with teams to integrate computer vision and natural language processing into innovative projects.",
      "Passionate about advancing AI research and sharing knowledge through workshops and technical sessions.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Hassan’s AI solutions transformed our data into powerful insights, helping us make smarter decisions faster.",
    name: "Baraa Abu Sallout ",
    designation: "AI Engineer",
    company: "AMIT",
    image: user1,
  },
  {
    testimonial:
      "Thanks to Hassan’s AI automation, we reduced operational costs by 40% and improved efficiency across all departments!",
    name: "Mustafa M. AL-Sayed",
    designation: "DR",
    company: "Nahda Universty",
    image: user2,
  },
  
  {
    testimonial:
      "I thought implementing AI in our business would be complex and costly, but Hassan made it seamless and efficient.",
    name: "Hossam EL-Dein",
    designation: "CTO",
    company: "mmm",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Disney+ Clone",
    description:
      "Disney+ is one of the biggest streaming platforms used by millions of people world-wide and allows us to stream high quality content in 4k and various other formats",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/sanidhyy/disney-clone",
    live_site_link: "https://clonedisneyplus.web.app/",
  },
  {
    name: "Golds Gym",
    description:
      "Web application that enables users to search for fitness exercises, effective personalized positions, and recommends new exercises based on their personal preferences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/sanidhyy/fitness-app",
    live_site_link: "https://fitness-gym-react.netlify.app/",
  },
  {
    name: "Shoppy",
    description:
      "The most personalised admin dashboard web application that allows enables users to choose customized themes and dark mode with different pages and variety of charts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/sanidhyy/admin-dashboard",
    live_site_link: "https://shoppy-dashboard-react.netlify.app/",
  },
  {
    name: "TikTok Clone",
    description:
      "A Next JS Web Application that enables users to upload videos of any length and size, create accounts and connect with other people just like any other social media.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/sanidhyy/tiktok-clone",
    live_site_link: "https://tiktok-clone-react.vercel.app/",
  },
  {
    name: "Cryptoverse",
    description:
      "Best Cryptocurrency web application that allows users to view price, market cap and daily change in realtime for almost every cryptocurrency in the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/sanidhyy/crypto-app",
    live_site_link: "https://reactjscryptoapp.netlify.app/",
  },
  {
    name: "Travel Advisor",
    description:
      "Web application that enables you to view your nearby restaurants, hotels and attractions which can be sorted by ratings, price and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/sanidhyy/travel-advisor",
    live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  },
] as const;

export const SOCIALS = [
  // {
  //   name: "YouTube",
  //   icon: youtube,
  //   link: "https://www.youtube.com/@OPGAMER.",
  // },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/hsn-alaa/",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://x.com/hsnla33136884",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/sanidhyy",
  },
] as const;
