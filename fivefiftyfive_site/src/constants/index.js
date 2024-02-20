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
    five50five,
    carrent,
    jobit,
    tripguide,
    threejs,
    wBlack,
    wWhite,
    sunflower,
    wordpress,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "WordPress Developer",
      icon: web,
    },
    {
      title: "Online Store Apps",
      icon: mobile,
    },
    {
      title: "Hosting & Maintenance",
      icon: backend,
    },
    {
      title: "Search Engine Optimization",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "WordPress",
      icon: wordpress,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
  ];
  
  const experiences = [
    {
      title: "Full stack Developer",
      company_name: "fivefiftyfive.io",
      icon: sunflower,
      iconBg: "#383E56",
      date: "November 2019 to present",
      points: [
        "Develop, design and maintain web applications using WordPress and React.js, Python, Flask and other related technologies.",
        "Collaborate with cross-functional teams including designers, product managers, and other developers to create unique products for clients.",
        "Implement responsive design, ensuring cross-browser compatibility.",
        "Participate in code reviews and provide constructive feedback to other developers.",
      ],
    },
    {
      title: "Online Store Developer",
      company_name: "FIVE50FIVE Home App",
      icon: five50five,
      iconBg: "#E6DEDD",
      date: "June 2023 to present",
      points: [
        "Implement and maintain an online delivery service app using WordPress and WooCommerce with a Paystack credit/debit card payment gateway.",
        "Collaborate with affiliates on orders and deliveries, pay suppliers, liaise with customers.",
        "Manage marketing campaign for the app.",
        "Track monthly banking graphs and send statements to affiliates.",
      ],
    },
    {
      title: "Hosting & Maintenance",
      company_name: "In partnership with Hostinger",
      icon: wWhite,
      iconBg: "#383E56",
      date: "November 2019 to present",
      points: [
        "Maintain, update and edit websites to client specifications via the Hostinger admin h-Panel.",
        "Design and implementation of advertising campaigns and special product promotions.",
        "Ensure maximum SEO visibility.",
        "Collaborate with customers as partners on how to grow both businesses.",
      ],
    },
    {
      title: "Qualifications & Projects",
      company_name: "Wayne McRae",
      icon: wBlack,
      iconBg: "#E6DEDD",
      date: "Jan 2023 to Present",
      points: [
        "I have been studying web development and adjacent technologies for about 5 years. Having built a portfolio that shows off my skills, I decided to enhance my curriculum vitae by adding some certification from a reputable university.",
        "In 2023, Harvard University issued a certificate of competence to me for having completed CS50X: Introduction to Computer Science. This is an online computer course that teaches students how to program in C and Python, design, querying, and processing of SQL databases, and coding in HTML, CSS, and JavaScript languages, as well as a thorough understanding of computer hardware, industry best practices and memory allocation.",
        "Also in 2023, Harvard University issued a certificate of competence to me for having completed CS50P: Introduction to Programming with Python. This is an online course that teaches how to read and write Python code - including Object-oriented Programming - as well as how to test and debug in Python. This course covers functions, arguments, return values, variables and types, conditionals, Boolean expressions, loops, and a lot more.",
        "I am currently taking CS50AI: Introduction to Artificial Intelligence Programming with Python, and I'm focusing my career on Machine Learning, AI, and drone technology. I intend to complete this and another course - CS50W: Web Programming with Python and JavaScript - in 2024, following which, my plan is to continue on to a Computer Science degree.",
        "My GitHub showcases many projects I have completed or am currently working on, including a bookkeeping app, a home solar installation optimization app, weather apps and games, and other bits of interest. I can create video demonstrations of any of these for interested parties. I am also designing a drone that cleans solar panels. I'm passionate about coding and would like to think it shows through my work."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Wayne proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Wayne does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Wayne optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
