'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AngularDividerBottom } from './DesignElements';

import { useLoading } from '@/context/LoadingContext';

export function HeroSection() {
    const { isLoading } = useLoading();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background">
            {/* Parallax Background Layer */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                {/* Background Image - Restored */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Modern luxury architecture"
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>

                {/* Video Layer - Blended */}
                <div className="absolute inset-0 z-10">
                    <div className="absolute inset-0 bg-black/40 z-20" />
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover scale-105 opacity-60"
                    >
                        <source src="https://image-b2b.s3.us-east-2.amazonaws.com/videos/pexels-tima-miroshnichenko-6694511+(2160p).mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-background-dark/90 z-20" />
            </motion.div>

            {/* Content */}
            <div className="relative z-30 container max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

                {/* Decorative Line */}
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={!isLoading ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
                    className="w-[1px] h-24 bg-gradient-to-b from-transparent via-primary to-transparent mb-8 origin-top"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="overflow-hidden"
                >
                    <h2 className="font-display text-sm md:text-base tracking-[0.4em] uppercase text-amber-50 font-bold mb-6">
                        Visionary Architecture
                    </h2>
                </motion.div>

                <div className="relative mb-8">
                    {/* Main Title with Staggered Reveal - Layered Glass Effect */}
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: 100 }}
                            animate={!isLoading ? { y: 0 } : { y: 100 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                            className="relative font-display text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.9] tracking-tighter"
                        >
                            {/* Background layer - shows through */}
                            <span className="absolute inset-0" style={{
                                color: 'transparent',
                                WebkitTextStroke: '1px rgba(255, 255, 255, 0.3)',
                            }}>
                                SHAHIN
                            </span>
                            {/* Foreground layer - solid white with slight transparency */}
                            <span className="relative" style={{
                                color: 'rgba(255, 255, 255, 0.05)',
                                WebkitTextStroke: '1px rgba(255, 255, 255, 0.6)',
                            }}>
                                SHAHIN
                            </span>
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden -mt-2 md:-mt-6">
                        <motion.h1
                            initial={{ y: 100 }}
                            animate={!isLoading ? { y: 0 } : { y: 100 }}
                            transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            className="relative font-display text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.9] tracking-tighter"
                        >
                            {/* Background layer - shows through */}
                            <span className="absolute inset-0" style={{
                                color: 'transparent',
                                WebkitTextStroke: '1px rgba(255, 255, 255, 0.3)',
                            }}>
                                GROUP
                            </span>
                            {/* Foreground layer - solid white with slight transparency */}
                            <span className="relative" style={{
                                color: 'rgba(255, 255, 255, 0.05)',
                                WebkitTextStroke: '1px rgba(255, 255, 255, 0.6)',
                            }}>
                                GROUP
                            </span>
                        </motion.h1>
                    </div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={!isLoading ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="font-body text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide"
                >
                    Crafting the Future Through a Legacy of Excellence, <br className="hidden md:block" />
                    Luxury Development, and Global Media.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <button className="group relative px-8 py-4 bg-transparent overflow-hidden border border-white/20 hover:border-primary/50 transition-colors duration-300">
                        <div className="absolute inset-0 w-full h-full bg-primary/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                        <span className="relative flex items-center gap-3 text-white font-bold tracking-[0.2em] text-sm uppercase">
                            Discover More
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={!isLoading ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-8 z-30 hidden md:flex items-center gap-4"
            >
                <div className="h-[1px] w-12 bg-white/30" />
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">Scroll to Explore</span>
            </motion.div>

            {/* Social/Contact Side Text */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={!isLoading ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 2.2, duration: 1 }}
                className="absolute bottom-12 right-8 z-30 hidden md:block"
            >
                <div className="flex flex-col items-end gap-2 text-xs uppercase tracking-[0.2em] text-white/30 font-bold">
                    <span>Est. 1995</span>
                    <span>Dhaka, BD</span>
                </div>
            </motion.div>

            {/* Angular Divider Transition */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={!isLoading ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="absolute bottom-0 left-0 w-full text-background z-40"
            >
                <AngularDividerBottom />
            </motion.div>
        </section>
    );
}
