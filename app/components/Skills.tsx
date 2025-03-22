'use client';

import { motion } from 'framer-motion';

interface Skill {
    name: string;
    level: number;
    category: string;
}

const skills: Skill[] = [
    { name: 'React & Next.js', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'HTML, CSS & SASS', level: 95, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Python', level: 75, category: 'Backend' },
    { name: 'SQL & MongoDB', level: 85, category: 'Backend' },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {['Frontend', 'Backend'].map((category) => (
                            <div key={category} className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold mb-6">{category}</h3>
                                <div className="space-y-6">
                                    {skills
                                        .filter((skill) => skill.category === category)
                                        .map((skill) => (
                                            <div key={skill.name}>
                                                <div className="flex justify-between mb-2">
                                                    <span className="text-gray-700">{skill.name}</span>
                                                    <span className="text-gray-500">{skill.level}%</span>
                                                </div>
                                                <div className="h-2 bg-gray-200 rounded-full">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        transition={{ duration: 1, delay: 0.2 }}
                                                        viewport={{ once: true }}
                                                        className="h-full bg-blue-600 rounded-full"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills; 