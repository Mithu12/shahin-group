'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface Zone {
    id: number;
    title: string;
    subtitle: string;
    image: string;
}

const zones: Zone[] = [
    {
        id: 1,
        title: 'MEGHNA',
        subtitle: 'ECONOMIC ZONE',
        image: '/images/economic-zone-1.jpg',
    },
    {
        id: 2,
        title: 'MEGHNA',
        subtitle: 'INDUSTRIAL ECONOMIC ZONE',
        image: '/images/economic-zone-2.jpg',
    },
    {
        id: 3,
        title: 'JILLA',
        subtitle: 'ECONOMIC ZONE',
        image: '/images/economic-zone-3.jpg',
    },
];

export const EconomicZonesSection: React.FC = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

    return (
        <section
            ref={sectionRef}
            className="relative py-20 md:py-28 bg-gradient-to-b from-zinc-50 to-white overflow-hidden"
        >
            {/* Elegant Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0L100 100M100 0L0 100' stroke='%23a1a1aa' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            {/* Section Header */}
            <div className="container max-w-7xl mx-auto px-6 relative z-10 mb-12 md:mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Decorative Lines */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-[2px] w-16 bg-primary origin-right"
                        />
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-primary text-xs md:text-sm uppercase tracking-[0.3em] font-bold"
                        >
                            Economic Zones
                        </motion.span>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-[2px] w-16 bg-primary origin-left"
                        />
                    </div>

                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-foreground leading-tight">
                        Our First Step Unleashed
                        <br />
                        <span className="relative inline-block mt-2">
                            <span className="relative z-10 text-primary">Endless Possibilities</span>
                            <motion.span
                                initial={{ width: 0 }}
                                animate={isInView ? { width: '100%' } : { width: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="absolute bottom-1 left-0 h-2 bg-primary/20"
                            />
                        </span>
                    </h2>
                </motion.div>
            </div>

            {/* Diagonal Zones Container with Parallax */}
            <motion.div style={{ y, opacity }} className="relative w-full h-[450px] md:h-[550px] lg:h-[650px]">
                {/* Left Zone - Diagonal cut on RIGHT edge */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                    transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute left-0 w-[28.5%] h-full group cursor-pointer"
                    style={{
                        clipPath: 'polygon(0 0, 100% 0, 82.5% 100%, 0 100%)',
                    }}
                >
                    <div className="relative w-full h-full overflow-hidden">
                        <motion.div
                            className="absolute inset-0"
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            <Image src={zones[0].image} alt={zones[0].title} fill className="object-cover" />
                        </motion.div>

                        <div className="absolute inset-0 bg-gradient-to-br from-[#09090b]/85 via-[#09090b]/80 to-[#18181b]/85 group-hover:from-[#09090b]/75 group-hover:via-[#09090b]/70 group-hover:to-[#18181b]/75 backdrop-blur-[1px] transition-all duration-500" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="text-center"
                            >
                                <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold mb-1 tracking-wide">
                                    {zones[0].title}
                                </h3>
                                <div className="w-12 h-[2px] bg-primary mx-auto my-2" />
                                <p className="text-xs md:text-sm lg:text-base font-semibold tracking-wider opacity-90">
                                    {zones[0].subtitle}
                                </p>
                            </motion.div>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                </motion.div>

                {/* Center Zone - Wider with diagonal cuts on BOTH edges */}
                <motion.div
                    initial={{ y: 60, opacity: 0, scale: 0.95 }}
                    animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { y: 60, opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute left-[25%] w-[50%] h-full group cursor-pointer z-10"
                    style={{
                        clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0 100%)',
                    }}
                >
                    <div className="relative w-full h-full overflow-hidden shadow-2xl">
                        <motion.div
                            className="absolute inset-0"
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            <Image src={zones[1].image} alt={zones[1].title} fill className="object-cover" />
                        </motion.div>

                        <div className="absolute inset-0 bg-gradient-to-br from-[#09090b]/90 via-[#18181b]/85 to-[#09090b]/90 group-hover:from-[#09090b]/80 group-hover:via-[#18181b]/75 group-hover:to-[#09090b]/80 backdrop-blur-[1px] transition-all duration-500" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 200 }}
                                whileHover={{ scale: 1.15, rotate: 10 }}
                                className="mb-8 w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-gradient-to-br from-primary/30 via-primary/20 to-transparent backdrop-blur-md rounded-full flex items-center justify-center border-2 border-primary/50 shadow-lg shadow-primary/20"
                            >
                                <span className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-primary">
                                    I
                                </span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="text-center"
                            >
                                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-3 tracking-wide">
                                    {zones[1].title}
                                </h3>
                                <div className="w-16 h-[2px] bg-primary mx-auto my-3" />
                                <p className="text-sm md:text-base lg:text-lg font-semibold tracking-wider opacity-95">
                                    {zones[1].subtitle}
                                </p>
                            </motion.div>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                </motion.div>

                {/* Right Zone - Diagonal cut on LEFT edge */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute right-0 w-[28.5%] h-full group cursor-pointer"
                    style={{
                        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 17.5% 100%)',
                    }}
                >
                    <div className="relative w-full h-full overflow-hidden">
                        <motion.div
                            className="absolute inset-0"
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            <Image src={zones[2].image} alt={zones[2].title} fill className="object-cover" />
                        </motion.div>

                        <div className="absolute inset-0 bg-gradient-to-br from-[#09090b]/85 via-[#09090b]/80 to-[#18181b]/85 group-hover:from-[#09090b]/75 group-hover:via-[#09090b]/70 group-hover:to-[#18181b]/75 backdrop-blur-[1px] transition-all duration-500" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="text-center"
                            >
                                <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold mb-1 tracking-wide">
                                    {zones[2].title}
                                </h3>
                                <div className="w-12 h-[2px] bg-primary mx-auto my-2" />
                                <p className="text-xs md:text-sm lg:text-base font-semibold tracking-wider opacity-90">
                                    {zones[2].subtitle}
                                </p>
                            </motion.div>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom Decorative Element */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="mt-16 md:mt-20 flex justify-center"
            >
                <div className="h-[2px] w-32 md:w-48 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </motion.div>
        </section>
    );
};
