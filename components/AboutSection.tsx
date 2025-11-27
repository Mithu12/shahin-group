'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Building2, Globe2, TrendingUp } from 'lucide-react';

export function AboutSection() {
    const stats = [
        { icon: Building2, value: '25+', label: 'Years of Excellence' },
        { icon: Globe2, value: '$2B+', label: 'Asset Value' },
        { icon: Award, value: '50+', label: 'Projects Completed' },
        { icon: TrendingUp, value: '100%', label: 'Client Satisfaction' },
    ];

    return (
        <section id="philosophy" className="relative py-24 md:py-32 bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-background-dark overflow-hidden">
            {/* Elegant Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0L100 100M100 0L0 100' stroke='%23000000' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
                    backgroundSize: '50px 50px',
                }} />
            </div>

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[2px] w-12 bg-primary" />
                        <h4 className="text-primary text-sm uppercase tracking-[0.3em] font-bold">
                            Our Philosophy
                        </h4>
                        <div className="h-[2px] w-12 bg-primary" />
                    </div>

                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
                        Building a Legacy of <br />
                        <span className="relative inline-block">
                            <span className="relative z-10 text-primary">Global Impact</span>
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="absolute bottom-2 left-0 h-3 bg-primary/20"
                            />
                        </span>
                    </h2>

                    <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                        At Shahin Group, we don't just construct buildings; we engineer ecosystems of progress.
                        Our vision extends beyond the skyline, rooting itself in the community and branching out
                        to the global stage.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
                    {/* Left Column - Image Collage */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Decorative Corner Frames */}
                        <div className="absolute -top-6 -left-6 w-20 h-20 border-l-4 border-t-4 border-primary z-30" />
                        <div className="absolute -bottom-6 -right-6 w-20 h-20 border-r-4 border-b-4 border-primary z-30" />

                        <div className="grid grid-cols-2 gap-4 h-[600px]">
                            {/* Large Image */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="relative col-span-2 h-[350px] overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <Image
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                                    alt="Modern Architecture"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <p className="text-white font-display text-xl font-bold">Visionary Design</p>
                                    <p className="text-white/80 text-sm">Architectural Excellence</p>
                                </div>
                            </motion.div>

                            {/* Small Images */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="relative h-[230px] overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <Image
                                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
                                    alt="Construction Excellence"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="relative h-[230px] overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <Image
                                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
                                    alt="Luxury Development"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </motion.div>
                        </div>

                        {/* Decorative Frame */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/30 -z-10"
                        />
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="space-y-8">
                            {/* Mission Statement */}
                            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 border-l-4 border-primary">
                                <h3 className="font-display text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                                <p className="font-body text-muted-foreground leading-relaxed">
                                    Every project is a commitment to excellence, sustainability, and the future of urban living.
                                    We blend innovation with tradition, creating spaces that inspire and endure.
                                </p>
                            </div>

                            {/* Values */}
                            <div className="space-y-4">
                                {[
                                    { title: 'Excellence', desc: 'Uncompromising quality in every detail' },
                                    { title: 'Innovation', desc: 'Pioneering sustainable solutions' },
                                    { title: 'Integrity', desc: 'Building trust through transparency' },
                                ].map((value, index) => (
                                    <motion.div
                                        key={value.title}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex items-start gap-4 group cursor-pointer"
                                    >
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 group-hover:scale-150 transition-transform duration-300" />
                                        <div>
                                            <h4 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                                {value.title}
                                            </h4>
                                            <p className="text-muted-foreground text-sm">{value.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Discover Our Story
                            </motion.button>
                        </div>
                    </motion.div>
                </div>


            </div>
        </section>
    );
}
