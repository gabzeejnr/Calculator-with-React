import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGithub,
  faLinkedin,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import pythonSvg from '../assets/SVG/python-svg.svg';

export const portfolioData = {
    hero: {
        name: "Gabriel Dodowei",
        role: "Frontend Developer",
        tagline: "I build responsive, accessible, and user-friendly web applications with modern technologies.",
        icons: [faGithub, faWhatsapp, faEnvelope]
    },
    about: {
        title: "About Me",
        description: "I'm Gabriel, a self-taught Frontend developer passionate about building responsive and user-friendly web applications. I'm currently expanding my skills in React and modern web development.",
    },
    skills: [
        {
            name: "HTML",
            level: "Advanced",
            icon: faHtml5,
            iconColor: "#E34F26"
        },
        {
            name: "CSS",
            level: "Advanced",
            icon: faCss3Alt,
            iconColor: "#1572B6"
        },
        {
            name: "JavaScript",
            level: "Intermediate",
            icon: faJs,
            iconColor: "#F7DF1E"
        },
        {
            name: "React",
            level: "Intermediate",
            icon: faReact,
            iconColor: "#61DAFB"
        },
        {
            name: "Python",
            level: "Beginner",
            image: pythonSvg
        }
    ],
    projects: [
        {
            title: "Weather Tracker",
            description: "A weather tracker built to practice async/await and fetch API",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://...",
            liveDemo: "https://example.com"
        },
        {
            title: "My Portfolio Website",
            description: "My personal portfolio",
            tech: ["React"],
            github: "https://github.com/gabzeejnr/MySamplePortfolioWithReact",
            liveDemo: "https://gabrieldodowei.vercel.app/"
        },
        {
            title: "Client Portfolio Website",
            description: "A portfolio website for a client",
            tech: ["HTML", "CSS"],
            github: "https://example.com",
            liveDemo: "https://johnlmichellawfirm.netlify.app/"
        }
    ],
    contact: [
        {
            title: "Email",
            value: "gabrieldodowei@gmail.com",
            link: "mailto:gabrieldodowei@gmail.com",
            fontawesome: faEnvelope
        },
        {
            title: "Phone",
            value: "+234 701 102 2978",
            link: "tel:+2347011022978",
            fontawesome: faPhone
        },
        {
            title: "GitHub",
            value: "github.com/gabzeejnr",
            link: "https://github.com/gabzeejnr",
            fontawesome: faGithub,
        },
        {
            title: "LinkedIn",
            value: "linkedin.com/in/gabriel-dodowei",
            link: "https://linkedin.com/in/gabriel-dodowei-8ba022308",
            fontawesome: faLinkedin
        },
    ],
    socialMedia: {
        whatsapp: "https://wa.me/2347011022978",
        github: "https://www.github.com/gabzeejnr",
        linkedIn: "https://www.linkedin.com/in/gabriel-dodowei-8ba022308",
        tiktok: "https://www.tiktok.com/gabrieldodowei"
    }
}