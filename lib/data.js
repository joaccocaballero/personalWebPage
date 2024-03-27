import React from "react";
import  { IoCode } from "react-icons/io5";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData = [
    {
        title: "Web Developer",
        location: "Montevideo, UY",
        description:
            "Remote backend and frontend developer for a developing company, focusing on a web application project aimed at managing customer reviews in the culinary sector. My main tasks are bug fixing, implementing new features, and improving the application's performance.",
        date: "October 2023 - March 2024",
        icon: React.createElement(IoCode)
    },
];

export const projectsData = [
    {
        title: "Web application for student attendance management",
        client: "Instituto Punto Com",
        clientWeb: "https://puntocom.edu.uy/",
        image: "/mockupPcom.png",
        description: "It features role-based access for teachers, students, and administrators. Students register for their respective courses at the beginning of the academic year. Teachers can take attendance, view attendance records, and send automated WhatsApp messages to students when they miss a class, providing a link to the application so they can schedule a recovery class. The client's goal was to achieve greater student engagement, as well as to ensure academic progress.",
        tags: ["React", "Next.js", "Node.js","Express.js", "PostgreSQL", "AWS", "Tailwind CSS"],
    },
    {
      title: "Price Management Web App",
      client: "Convenience Store",
      clientWeb: null,
      image: "/mockupPrice.jpeg",
      description: " A barcode-based price manager application that enables users to check item prices, add new products, and modify existing ones. It offers streamlined management of pricing information, ensuring accuracy and efficiency in retail operations.",
      tags: ["React", "Next.js", "Node.js","Express.js", "PostgreSQL", "AWS", "Tailwind CSS"],
  }
];