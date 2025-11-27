'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { AngularDividerBottom } from './DesignElements';

export function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background-dark">
            {/* Background Image Layer (Unsplash) */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                    alt="Modern luxury architecture"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            {/* Video Background Layer */}
            <div className="absolute inset-0 z-10">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="https://image-b2b.s3.us-east-2.amazonaws.com/videos/pexels-tima-miroshnichenko-6694511+(2160p).mp4" type="video/mp4" />
                </video>
                {/* Dark Overlay with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background-dark/90" />
            </div>

            {/* Content */}
            <div className="relative z-20 container max-w-7xl mx-auto px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="font-display text-lg md:text-xl tracking-[0.2em] uppercase mb-4 text-primary font-bold">
                        Visionary Architecture
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-display text-5xl md:text-7xl lg:text-9xl font-bold leading-tight mb-8 tracking-tight"
                >
                    SHAHIN <span className="text-white">GROUP</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="font-body text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
                >
                    Crafting the Future Through a Legacy of Excellence, <br className="hidden md:block" />
                    Luxury Development, and Global Media.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <button className="bg-primary text-background-dark font-body py-4 px-12 text-sm uppercase tracking-widest hover:bg-white transition-all duration-300 font-bold">
                        Discover More
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20"
            >
                <div className="flex flex-col items-center animate-bounce">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 mb-2">Scroll Down</span>
                    <ChevronDown className="w-5 h-5 text-primary" />
                </div>
            </motion.div>

            {/* Angular Divider Transition */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 left-0 w-full text-background-light dark:text-background-dark z-20"
            >
                <AngularDividerBottom />
            </motion.div>
        </section>
    );
}
