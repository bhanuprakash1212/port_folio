'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-gray-800">
                            Portfolio
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-gray-600 hover:text-gray-900"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <FaTimes className="w-6 h-6" />
                        ) : (
                            <FaBars className="w-6 h-6" />
                        )}
                    </button>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="#about" className="text-gray-600 hover:text-gray-900">
                            About
                        </Link>
                        <Link href="#skills" className="text-gray-600 hover:text-gray-900">
                            Skills
                        </Link>
                        <Link href="#projects" className="text-gray-600 hover:text-gray-900">
                            Projects
                        </Link>
                        <Link href="#experience" className="text-gray-600 hover:text-gray-900">
                            Experience
                        </Link>
                        <Link href="#contact" className="text-gray-600 hover:text-gray-900">
                            Contact
                        </Link>
                    </nav>

                    {/* Desktop social links */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                            <FaGithub className="w-6 h-6" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                            <FaTwitter className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <nav className="py-4 space-y-4">
                            <Link href="#about" className="block text-gray-600 hover:text-gray-900">
                                About
                            </Link>
                            <Link href="#skills" className="block text-gray-600 hover:text-gray-900">
                                Skills
                            </Link>
                            <Link href="#projects" className="block text-gray-600 hover:text-gray-900">
                                Projects
                            </Link>
                            <Link href="#experience" className="block text-gray-600 hover:text-gray-900">
                                Experience
                            </Link>
                            <Link href="#contact" className="block text-gray-600 hover:text-gray-900">
                                Contact
                            </Link>
                        </nav>
                        <div className="py-4 flex space-x-4 border-t border-gray-200">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                                <FaGithub className="w-6 h-6" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                                <FaTwitter className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header; 