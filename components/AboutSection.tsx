'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BrushStroke1, BrushStroke2 } from './DesignElements';

export function AboutSection() {
    return (
        <section id="philosophy" className="relative py-24 md:py-40 bg-background-light dark:bg-background-dark overflow-hidden">
            {/* Decorative Brush Strokes */}
            <div className="absolute top-20 left-0 w-64 md:w-96 text-primary/20 -translate-x-1/2 rotate-12">
                <BrushStroke2 />
            </div>
            <div className="absolute bottom-20 right-0 w-64 md:w-96 text-primary/20 translate-x-1/3 -rotate-12">
                <BrushStroke1 />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-[2px] w-12 bg-primary" />
                            <h4 className="text-primary text-sm uppercase tracking-[0.2em] font-bold">
                                Chairman's Message
                            </h4>
                        </div>

                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-foreground">
                            Building a Legacy of <br />
                            <span className="relative inline-block">
                                <span className="relative z-10">Global Impact</span>
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/30 -z-0" />
                            </span>
                        </h2>

                        <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
                            "At Shahin Group, we don't just construct buildings; we engineer ecosystems of progress.
                            Our vision extends beyond the skyline, rooting itself in the community and branching out
                            to the global stage. Every project is a commitment to excellence, sustainability, and
                            the future of urban living."
                        </p>

                        <div className="flex flex-col sm:flex-row gap-12 mt-12 border-t border-border pt-8">
                            <div>
                                <h3 className="font-display text-5xl font-bold text-primary mb-2">25+</h3>
                                <p className="text-xs uppercase tracking-widest text-foreground font-semibold">Years of Excellence</p>
                            </div>
                            <div>
                                <h3 className="font-display text-5xl font-bold text-primary mb-2">$2B+</h3>
                                <p className="text-xs uppercase tracking-widest text-foreground font-semibold">Asset Value</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="relative h-[600px] w-full">
                            {/* Frame Effect */}
                            <div className="absolute top-4 right-4 w-full h-full border-2 border-primary/30 z-0" />
                            <div className="absolute inset-0 bg-background-dark/5 z-10" />
                            <Image
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                                alt="Chairman Portrait"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 z-0 shadow-2xl"
                            />
                        </div>
                        {/* Signature or Name Tag */}
                        <div className="absolute -bottom-8 -left-8 bg-background-light dark:bg-card p-6 shadow-xl z-20 border-l-4 border-primary max-w-xs">
                            <p className="font-display text-xl font-bold text-foreground">Mr. Shahin Alam</p>
                            <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Founder & Chairman</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
