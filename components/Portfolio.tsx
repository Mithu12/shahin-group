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
        <section id="projects" className="relative py-24 md:py-40 bg-white overflow-hidden">
            {/* Angular Divider Top */}
            <div className="absolute top-0 left-0 w-full text-background z-20 -mt-1">
                <AngularDividerTop />
            </div>

            {/* Enhanced Background Design */}
            {/* Animated Gradient Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.03, 0.05, 0.03],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-20 -left-20 w-[500px] h-[500px] bg-primary rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.05, 0.03, 0.05],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-20 -right-20 w-[600px] h-[600px] bg-accent rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    opacity: [0.02, 0.04, 0.02],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-primary rounded-full blur-3xl"
            />

            {/* Geometric Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.01]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(161, 161, 170, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(161, 161, 170, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '100px 100px',
                    }}
                />
            </div>

            {/* Diagonal Stripes */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(161, 161, 170, 0.15) 50px, rgba(161, 161, 170, 0.15) 51px)`,
                    }}
                />
            </div>

            {/* Background Shards */}
            <ShardShape className="opacity-20" />

            {/* Large Watermark */}
            <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
                <h1 className="text-[15vw] font-display font-bold text-foreground leading-none tracking-tighter text-center uppercase">
                    Excellence
                </h1>
            </div>


            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute -left-6 -top-6 w-12 h-12 border-l-2 border-t-2 border-primary/30" />
                        <h4 className="text-primary text-sm uppercase tracking-[0.3em] font-bold mb-4 pl-2">
                            Our Portfolio
                        </h4>
                        <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight">
                            Featured <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                                Projects
                            </span>
                        </h2>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden md:flex items-center gap-4 group"
                    >
                        <span className="text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                            View All Works
                        </span>
                        <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                            <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
                        </div>
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                    {projects.map((project, index) => {
                        // Asymmetrical Grid Logic
                        const isLarge = index === 0 || index === 3;
                        const colSpan = index === 0 ? "md:col-span-8" :
                            index === 1 ? "md:col-span-4" :
                                index === 2 ? "md:col-span-5" : "md:col-span-7";

                        const height = index === 1 || index === 2 ? "h-[500px] md:h-[600px]" : "h-[400px] md:h-[500px]";

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className={`group relative ${colSpan} ${height} overflow-hidden bg-card`}
                            >
                                {/* Image Container */}
                                <div className="absolute inset-0 w-full h-full overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                                    {/* Noise Texture */}
                                    <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-20">
                                    <div className="flex justify-between items-start">
                                        <span className="text-6xl font-display font-bold text-white/10 group-hover:text-white/20 transition-colors duration-500">
                                            0{index + 1}
                                        </span>
                                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            <ArrowUpRight className="w-5 h-5 text-white" />
                                        </div>
                                    </div>

                                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="overflow-hidden mb-2">
                                            <p className="text-primary text-xs uppercase tracking-[0.2em] font-bold transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                                {project.category}
                                            </p>
                                        </div>
                                        <h3 className="font-display text-2xl md:text-4xl font-bold text-white mb-3 leading-tight">
                                            {project.title}
                                        </h3>
                                        <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                                            <p className="text-gray-300 text-sm md:text-base max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 pb-2">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Borders */}
                                <div className="absolute top-0 left-0 w-full h-full p-4 pointer-events-none">
                                    <div className="w-full h-full border border-white/10 group-hover:border-primary/50 transition-colors duration-500 relative">
                                        <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-16 text-center md:hidden">
                    <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-sm font-bold uppercase tracking-widest hover:bg-primary-dark transition-colors">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
}
