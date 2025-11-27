'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ShardShape, AngularDividerTop } from './DesignElements';

const projects = [
    {
        id: 1,
        title: "The Grand Marina",
        category: "Luxury Residential",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
        description: "A waterfront masterpiece redefining luxury living."
    },
    {
        id: 2,
        title: "Shahin Tower",
        category: "Commercial HQ",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80",
        description: "The new icon of the city's financial district."
    },
    {
        id: 3,
        title: "Eco-City One",
        category: "Sustainable Urban Planning",
        image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80",
        description: "A self-sustaining community for the future."
    },
    {
        id: 4,
        title: "Global Media Center",
        category: "Media & Tech",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
        description: "State-of-the-art broadcasting and digital hub."
    }
];

export function Portfolio() {
    return (
        <section id="projects" className="relative py-24 md:py-40 bg-background-light dark:bg-background-dark overflow-hidden">
            {/* Angular Divider Top */}
            <div className="absolute top-0 left-0 w-full text-background-light dark:text-background-dark z-20 -mt-1">
                <AngularDividerTop />
            </div>

            {/* Background Shards */}
            <ShardShape className="opacity-30" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4 className="text-primary text-sm uppercase tracking-[0.2em] font-bold mb-4">
                            Our Business
                        </h4>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                            Featured <span className="text-primary">Projects</span>
                        </h2>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden md:flex items-center gap-2 text-foreground hover:text-primary transition-colors uppercase tracking-widest text-sm font-bold group"
                    >
                        View All Projects
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative h-[400px] md:h-[500px] overflow-hidden cursor-pointer"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-primary text-xs uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {project.category}
                                </p>
                                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 font-body text-sm md:text-base max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                    {project.description}
                                </p>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-500 m-4" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors uppercase tracking-widest text-sm font-bold">
                        View All Projects
                        <ArrowUpRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
