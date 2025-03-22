import { FaCode, FaLaptopCode, FaServer, FaMobileAlt } from 'react-icons/fa';

// Profile Information
export const PROFILE = {
    name: 'Chowdam bhanu prakash',
    role: 'Web App Developer',
    location: 'San Francisco, US',
    email: 'bhanuprakashchowdam@gmail.com',
    website: 'cbhanupraksh.great-site.com',
    about: `Passionate web developer with a keen eye for design and a commitment to creating seamless user experiences.
        Specializing in modern web technologies and frameworks, I bring creative solutions to complex problems.
        With a strong foundation in both frontend and backend development, I craft robust and scalable applications
        that make a difference.`
};

// Social Links
export const SOCIAL_LINKS = [
    {
        name: 'LinkedIn',
        url: '#',
        icon: 'FaLinkedin'
    },
    {
        name: 'GitHub',
        url: '#',
        icon: 'FaGithub'
    },
    {
        name: 'Email',
        url: '#',
        icon: 'FaEnvelope'
    },
    {
        name: 'Twitter',
        url: '#',
        icon: 'FaTwitter'
    }
];

// Feature Cards
export const FEATURES = [
    {
        icon: FaCode,
        title: 'Clean Code',
        color: 'text-blue-400'
    },
    {
        icon: FaLaptopCode,
        title: 'Modern Tech',
        color: 'text-green-400'
    },
    {
        icon: FaServer,
        title: 'Scalable',
        color: 'text-purple-400'
    },
    {
        icon: FaMobileAlt,
        title: 'Responsive',
        color: 'text-orange-400'
    }
];

// Skills
export const SKILLS = [
    {
        name: 'Frontend & Design',
        percentage: 90
    },
    {
        name: 'JavaScript & jQuery',
        percentage: 85
    },
    {
        name: 'HTML, CSS, SASS & LESS',
        percentage: 95
    },
    {
        name: 'Ruby on Rails',
        percentage: 80
    }
];

// Projects
export const PROJECTS = [
    {
        title: 'Modern SaaS Platform',
        description: 'A full-featured SaaS platform with responsive design, real-time analytics, and seamless third-party integrations. Built with Next.js and Node.js.',
        image: '/projects/project1.png',
        tags: ['Next.js', 'React', 'Node.js', 'MongoDB'],
        link: '#',
        demoLink: '#'
    },
    {
        title: 'E-commerce Solution',
        description: 'Complete e-commerce solution with inventory management, payment processing, and customer analytics. Powered by React and Express.',
        image: '/projects/project2.png',
        tags: ['React', 'Express', 'PostgreSQL', 'Stripe'],
        link: '#',
        demoLink: '#'
    },
    {
        title: 'Social Media Dashboard',
        description: 'Real-time social media analytics dashboard with customizable widgets and automated reporting features.',
        image: '/projects/project1.png',
        tags: ['Vue.js', 'Firebase', 'D3.js', 'TailwindCSS'],
        link: '#',
        demoLink: '#'
    }
];

// Theme Configuration
export const THEME = {
    colors: {
        background: '#121212',
        foreground: '#ffffff',
        primary: {
            main: '#3B82F6',
            light: '#60A5FA',
            dark: '#2563EB'
        },
        secondary: {
            main: '#1E1E1E',
            light: '#2E2E2E',
            dark: '#141414'
        }
    },
    transitions: {
        default: 'all 0.3s ease',
        slow: 'all 0.5s ease',
        fast: 'all 0.2s ease'
    },
    animations: {
        loadingDuration: 2000,
        fadeInDuration: 500
    }
};

// Loading Screen Configuration
export const LOADING_CONFIG = {
    duration: 2000,
    fadeOutDuration: 500,
    initialDelay: 200
};

// Contact Information
export const CONTACT_INFO = [
    {
        icon: '📍',
        text: 'San Francisco, US',
        glowColor: 'blue'
    },
    {
        icon: '✉️',
        text: 'james@example.com',
        glowColor: 'purple'
    },
    {
        icon: '🌐',
        text: 'jameslee.dev',
        glowColor: 'green'
    }
]; 