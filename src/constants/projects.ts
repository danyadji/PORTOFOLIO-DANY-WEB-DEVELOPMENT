export const PROJECTS = [
  {
    title: "Automated E-commerce",
    slug: "automated-ecommerce",
    desc: "Developed an e-commerce website with WooCommerce and integrated payment gateway for automated transactions.",
    longDesc: "This project involved building a full-featured e-commerce platform using WordPress and WooCommerce. The key challenge was integrating a complex local payment gateway to handle automated transactions securely. The result is a high-performance store that requires minimal manual intervention from the owner.",
    tags: ["WordPress", "WooCommerce"],
    stack: ["PHP", "WordPress", "WooCommerce", "MySQL", "Midtrans API"],
    features: [
      "Automated Payment Verification",
      "Real-time Inventory Sync",
      "Dynamic Shipping Calculations",
      "Customer Order Tracking Dashboard"
    ],
    role: "Lead Fullstack Developer responsible for the payment gateway integration and architecture design.",
    challenges: "The main challenge was handling callback failures from the payment provider to ensure orders were never lost or double-charged.",
    img: "/assets/images/project-ecom-auto.png",
    screenshots: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000"
    ]
  },
  {
    title: "WhatsApp E-commerce",
    slug: "whatsapp-ecommerce",
    desc: "Built an e-commerce website with WooCommerce featuring WhatsApp-based ordering for simple and direct customer interaction.",
    longDesc: "Designed for small businesses that prefer direct customer interaction, this project leverages the power of WooCommerce for product management while streamlining the checkout process through WhatsApp.",
    tags: ["WordPress", "WooCommerce"],
    stack: ["PHP", "WordPress", "WhatsApp API", "Custom CSS"],
    features: [
      "Direct WhatsApp Checkout",
      "Automated Invoice Generation",
      "Mobile-Optimized Product Catalog",
      "Low Latency Loading"
    ],
    role: "Frontend & Backend Developer focus on streamlining the mobile user journey.",
    challenges: "Simplifying the WooCommerce checkout flow to a single-click WhatsApp message while maintaining product data integrity.",
    img: "/assets/images/project-ecom-wa.png",
    screenshots: [
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000",
      "https://images.unsplash.com/photo-1556656793-062ff987850c?q=80&w=1000"
    ]
  },
  {
    title: "Smart Inventory Management",
    slug: "inventory-management",
    desc: "Built a web-based inventory management system using Laravel and Tailwind CSS with Reorder Point (ROP) method to optimize stock control and reduce shortages.",
    longDesc: "A data-driven web application built with Laravel to help businesses manage their stock levels efficiently. It implements the Reorder Point (ROP) calculation to automatically flag when items need restocking.",
    tags: ["Laravel", "Tailwind", "MySQL"],
    stack: ["PHP", "Laravel", "Tailwind CSS", "MySQL", "Alpine.js"],
    features: [
      "Automated Reorder Point Calculation",
      "Visual Data Analytics Dashboard",
      "Multi-Warehouse Support",
      "Exportable Performance Reports"
    ],
    role: "Backend Architect responsible for the database schema and ROP algorithm implementation.",
    challenges: "Processing large datasets of historical sales to accurate predict the reorder point while keeping the UI responsive.",
    img: "/assets/images/project-inventory.png",
    screenshots: [
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1000",
      "https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=1000"
    ]
  },
  {
    title: "Wedding Organizer Dashboard",
    slug: "wedding-dashboard",
    desc: "Created a dashboard system for managing wedding event data, including client management and scheduling using Laravel, JavaScript, and Tailwind CSS.",
    longDesc: "A comprehensive management tool for wedding planners. It features a CRM for client management, an event scheduler, vendor tracking, and budget management tools.",
    tags: ["Laravel", "JavaScript", "Tailwind"],
    stack: ["PHP", "Laravel", "JavaScript (ES6)", "Tailwind CSS", "MySQL"],
    features: [
      "Interactive Event Timeline",
      "Vendor Management CRM",
      "Real-time Budget Tracking",
      "Client Collaboration Portal"
    ],
    role: "Fullstack Developer focusing on the interactive timeline and CRM tools.",
    challenges: "Building a complex scheduling system that could handle multiple concurrent events with conflicting resource needs.",
    img: "/assets/images/project-wedding.png",
    screenshots: [
      "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?q=80&w=1000",
      "https://images.unsplash.com/photo-1522673607200-1648832cee98?q=80&w=1000"
    ]
  },
  {
    title: "Obelix Sea View Design",
    slug: "obelix-sea-view",
    desc: "Designed a modern and user-friendly website interface for Obelix Sea View using Figma, focusing on layout, usability, and visual consistency.",
    longDesc: "A UI/UX project focused on creating a premium digital presence for Obelix Sea View. The design emphasizes stunning coastal imagery, a minimalist layout, and intuitive navigation.",
    tags: ["Figma", "UI/UX"],
    stack: ["Figma", "Adobe Illustrator", "Modern Design Systems"],
    features: [
      "Immersive Visual Storytelling",
      "Intuitive Booking Navigation",
      "Accessibility-First Design",
      "Custom Resort Branding"
    ],
    role: "UI/UX Designer responsible for wireframing, prototyping, and visual design.",
    challenges: "Balancing the use of high-resolution video/image backgrounds with fast performance and clear readability.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
    screenshots: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1000",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1000"
    ]
  },
];
