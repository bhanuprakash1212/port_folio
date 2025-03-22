'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-screen pt-20 flex items-center bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Hi, I'm <span className="text-blue-600">Your Name</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
                            Web App Developer
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            I specialize in building exceptional digital experiences. Currently, I'm focused on building responsive web applications that connect people to what they love.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#contact"
                                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Contact Me
                            </a>
                            <a
                                href="#projects"
                                className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                            >
                                View Work
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-96 md:h-96">
                            <Image
                                src="/profile.jpg"
                                alt="Profile"
                                fill
                                sizes="(max-width: 768px) 256px, 384px"
                                className="rounded-full object-cover shadow-xl"
                                priority
                                loading="eager"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 