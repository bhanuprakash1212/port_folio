'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaCode, FaLaptopCode, FaServer, FaMobileAlt } from 'react-icons/fa';
import SkillBar from './SkillBar';
import {
    PROFILE,
    SOCIAL_LINKS,
    FEATURES,
    SKILLS,
    PROJECTS,
    CONTACT_INFO,
    THEME
} from '../constants/constant';

const iconComponents = {
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaTwitter
};

const About = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Reset scroll position
        window.scrollTo(0, 0);

        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1000); // Reduced to 1s since page will handle main loading
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const particles: Array<{
            x: number;
            y: number;
            radius: number;
            dx: number;
            dy: number;
            color: string;
        }> = [];

        // Create particles
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                dx: (Math.random() - 0.5) * 0.5,
                dy: (Math.random() - 0.5) * 0.5,
                color: `rgba(255, 255, 255, ${Math.random() * 0.2})`
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.x += particle.dx;
                particle.y += particle.dy;

                if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`min-h-screen bg-[#0a0a0a] transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="content-fade-in" style={{ animationDelay: '0.5s' }}>
                    {/* Profile Header with 3D Card Effect */}
                    <div className="relative mb-12 perspective-1000">
                        <canvas
                            ref={canvasRef}
                            className="absolute inset-0 w-full h-full"
                            style={{ opacity: 0.5 }}
                        />
                        <div className="absolute inset-0 gradient-border"></div>
                        <div className="glass-effect rounded-2xl p-8 relative overflow-hidden transform-gpu preserve-3d">
                            <div className="flex flex-col md:flex-row items-center gap-8 relative">
                                <div className="relative w-32 h-32 md:w-40 md:h-40">
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 rounded-full 
                                        animate-pulse-slow"></div>
                                    <Image
                                        src="/profile.png"
                                        alt={PROFILE.name}
                                        fill
                                        className="rounded-full object-cover p-1"
                                        priority
                                    />
                                    {/* Decorative circles */}
                                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full blur-lg"></div>
                                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/20 rounded-full blur-lg"></div>
                                </div>
                                <div className="text-center md:text-left relative">
                                    <h1 className="text-4xl font-bold mb-2 gradient-text">
                                        {PROFILE.name}
                                    </h1>
                                    <p className="text-xl text-gray-400 mb-4">{PROFILE.role}</p>
                                    <div className="flex gap-4 justify-center md:justify-start">
                                        {SOCIAL_LINKS.map((link, index) => {
                                            const IconComponent = iconComponents[link.icon as keyof typeof iconComponents];
                                            return (
                                                <a key={index} href={link.url} className="text-gray-500 relative">
                                                    <IconComponent size={24} />
                                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-gray-200 text-xs py-1 px-2 rounded opacity-0 transition-opacity">
                                                        {link.name}
                                                    </span>
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-fade-in" style={{ animationDelay: '0.7s' }}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Left Column */}
                        <div className="md:col-span-2 space-y-8">
                            {/* About Me Card with Feature Icons */}
                            <div className="glass-effect rounded-2xl p-8">
                                <h2 className="text-2xl font-bold mb-6 gradient-text">
                                    About Me
                                </h2>
                                <p className="text-gray-400 leading-relaxed mb-8">
                                    {PROFILE.about}
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {FEATURES.map((feature, index) => (
                                        <div key={index} className="flex flex-col items-center p-4 rounded-lg bg-gray-800/30 backdrop-blur-sm">
                                            <feature.icon className={`text-3xl ${feature.color} mb-2`} />
                                            <span className="text-sm text-gray-300">{feature.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Projects Section */}
                            <div className="glass-effect rounded-2xl p-6 sm:p-8">
                                <h2 className="text-2xl font-bold mb-6 sm:mb-8 gradient-text flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between">
                                    <span>Projects</span>
                                    <a
                                        href="#"
                                        className="text-sm inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 
                                            px-4 py-2 rounded-xl border border-gray-800 w-full sm:w-auto justify-center sm:justify-start
                                            bg-[#1E1E1E]/50 backdrop-blur-sm"
                                    >
                                        <FaGithub size={16} />
                                        <span className="font-medium">More on GitHub</span>
                                        <span>→</span>
                                    </a>
                                </h2>
                                <div className="grid grid-cols-1 gap-6 max-h-[800px] overflow-y-auto custom-scrollbar pr-2 sm:pr-4">
                                    {PROJECTS.map((project, index) => (
                                        <div
                                            key={index}
                                            className="group flex flex-col sm:flex-row rounded-xl overflow-hidden bg-[#1E1E1E]/50 
                                                border border-gray-800/20 backdrop-blur-sm relative"
                                        >
                                            {/* Image Container */}
                                            <div className="relative w-full sm:w-1/3 h-48 sm:h-auto sm:aspect-square overflow-hidden">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover transform transition-transform duration-500 
                                                        group-hover:scale-105"
                                                />
                                                {/* Mobile Tag Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] sm:hidden">
                                                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                                                        {project.tags.map((tag, tagIndex) => (
                                                            <span
                                                                key={tagIndex}
                                                                className="px-2.5 py-1 text-[10px] font-medium rounded-full 
                                                                    bg-black/30 text-gray-300 border border-gray-700/30
                                                                    backdrop-blur-md"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content Container */}
                                            <div className="relative flex-1 p-4 sm:p-6 flex flex-col">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <h3 className="text-lg sm:text-xl font-bold text-white/90">
                                                        {project.title}
                                                    </h3>
                                                    <div className="h-px flex-1 bg-gray-700/30"></div>
                                                </div>

                                                <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-2 sm:line-clamp-none">
                                                    {project.description}
                                                </p>

                                                {/* Desktop Tags */}
                                                <div className="hidden sm:flex flex-wrap items-center gap-2 mb-4">
                                                    {project.tags.map((tag, tagIndex) => (
                                                        <span
                                                            key={tagIndex}
                                                            className="px-3 py-1 text-[11px] font-medium rounded-full 
                                                                bg-[#2A2A2A] text-gray-300 border border-gray-700/30
                                                                transition-all duration-300 hover:bg-[#333333]"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Action Links */}
                                                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-800/20">
                                                    <a
                                                        href={project.link}
                                                        className="text-gray-400 flex items-center gap-2 text-sm sm:text-base
                                                            hover:text-gray-200 transition-colors duration-300"
                                                    >
                                                        View Details
                                                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
                                                    </a>
                                                    <a
                                                        href={project.demoLink}
                                                        className="text-gray-400 text-sm sm:text-base hover:text-gray-200 
                                                            transition-colors duration-300 hidden sm:flex items-center gap-2"
                                                    >
                                                        Live Demo
                                                        <span>↗</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            {/* Contact Info Card with Glowing Icons */}
                            <div className="glass-effect rounded-2xl p-6">
                                <div className="space-y-4">
                                    {CONTACT_INFO.map((info, index) => (
                                        <p key={index} className="flex items-center gap-3 text-gray-400">
                                            <span className={`w-8 h-8 flex items-center justify-center rounded-full bg-[#23262d] text-gray-300 relative after:absolute after:inset-0 after:rounded-full after:bg-${info.glowColor}-500/20 after:blur-sm`}>
                                                {info.icon}
                                            </span>
                                            {info.text}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Skills Card with Animated Progress */}
                            <div className="glass-effect rounded-2xl p-6">
                                <h2 className="text-xl font-bold mb-6 gradient-text">
                                    Skills
                                </h2>
                                <div className="relative">
                                    {SKILLS.map((skill, index) => (
                                        <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
                                    ))}
                                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
                                    <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
                                </div>
                            </div>

                            {/* Testimonials Card */}
                            <div className="glass-effect rounded-2xl p-6 hover-card">
                                <h2 className="text-xl font-bold mb-6 gradient-text">
                                    Testimonials
                                </h2>
                                <div className="text-gray-400">
                                    <p className="italic mb-4 text-sm leading-relaxed">
                                        "James is an exceptional developer who consistently delivers high-quality work.
                                        His attention to detail and problem-solving skills make him a valuable asset to any team."
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 flex items-center justify-center text-white font-bold">
                                            TA
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-300">Tim Alpen</p>
                                            <p className="text-sm text-gray-500">Senior Software Engineer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Education Card */}
                            <div className="glass-effect rounded-2xl p-6 hover-card">
                                <h2 className="text-xl font-bold mb-6 gradient-text">
                                    Education
                                </h2>
                                <div className="space-y-4">
                                    <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-gray-500 before:rounded-full">
                                        <p className="font-medium text-gray-300">MSc Computer Science</p>
                                        <p className="text-sm text-gray-500">University College London</p>
                                    </div>
                                    <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-gray-600 before:rounded-full">
                                        <p className="font-medium text-gray-300">BSc Computer Science</p>
                                        <p className="text-sm text-gray-500">University of Manchester</p>
                                    </div>
                                </div>
                            </div>

                            {/* Languages Card */}
                            <div className="glass-effect rounded-2xl p-6 hover-card">
                                <h2 className="text-xl font-bold mb-6 gradient-text">
                                    Languages
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400">English</span>
                                        <div className="flex">
                                            {"★★★★★".split("").map((star, i) => (
                                                <span key={i} className="text-gray-300">{star}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400">Spanish</span>
                                        <div className="flex">
                                            {"★★★☆☆".split("").map((star, i) => (
                                                <span key={i} className={star === "★" ? "text-gray-400" : "text-gray-700"}>{star}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About; 