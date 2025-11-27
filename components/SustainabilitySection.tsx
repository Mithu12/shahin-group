'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Leaf, Droplets, Sun, Heart, Users, TreePine, Award, ArrowRight } from 'lucide-react';
import Image from 'next/image';

// Animated Progress Bar Component
const ProgressBar = ({
    label,
    value,
    target,
    icon: Icon,
    delay
}: {
    label: string;
    value: number;
    target: string;
    icon: React.ComponentType<{ className?: string }>;
    delay: number;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const progress = (value / 100) * 100;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
            className="group"
        >
            <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary/10 p-2 rounded">
                    <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                        <span className="font-body text-sm font-semibold text-foreground">{label}</span>
                        <span className="font-display text-sm font-bold text-primary">{value}%</span>
                    </div>
                </div>
            </div>
            <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${progress}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/70 rounded-full"
                />
            </div>
            <p className="text-xs text-muted-foreground mt-2 font-body">Target: {target}</p>
        </motion.div>
    );
};

// Initiative Card Component
const InitiativeCard = ({
    title,
    description,
    icon: Icon,
    stats,
    delay
}: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    stats: string;
    delay: number;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group relative"
        >
            <div className="relative bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 overflow-hidden p-8">
                {/* Corner frames */}
                <div className="absolute top-3 left-3 w-12 h-12 border-l-2 border-t-2 border-border group-hover:border-primary transition-all duration-500 opacity-40 group-hover:opacity-100" />
                <div className="absolute bottom-3 right-3 w-12 h-12 border-r-2 border-b-2 border-border group-hover:border-primary transition-all duration-500 opacity-40 group-hover:opacity-100" />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />

                {/* Icon */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex bg-secondary group-hover:bg-primary/10 p-4 mb-6 transition-colors duration-300"
                >
                    <Icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </motion.div>

                {/* Content */}
                <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                    {title}
                </h3>
                <div className="w-12 h-0.5 bg-border group-hover:w-full group-hover:bg-primary/50 transition-all duration-500 mb-4" />
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                    {description}
                </p>
                <div className="font-display text-3xl font-bold text-primary">{stats}</div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
            </div>
        </motion.div>
    );
};

// Community Impact Story Card
const ImpactStoryCard = ({
    image,
    title,
    description,
    location,
    delay
}: {
    image: string;
    title: string;
    description: string;
    location: string;
    delay: number;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group relative overflow-hidden"
        >
            <div className="relative bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 overflow-hidden">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Location badge */}
                    <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">{location}</span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {title}
                    </h3>
                    <div className="w-12 h-0.5 bg-border group-hover:w-full group-hover:bg-primary/50 transition-all duration-500 mb-4" />
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {description}
                    </p>

                    {/* Read More */}
                    <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                            Read More
                        </span>
                        <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.5,
                                ease: "easeInOut"
                            }}
                        >
                            <ArrowRight className="w-4 h-4 text-primary" />
                        </motion.div>
                    </div>
                </div>

                {/* Corner frames */}
                <div className="absolute top-3 left-3 w-12 h-12 border-l-2 border-t-2 border-white/50 group-hover:border-primary transition-all duration-500" />
                <div className="absolute bottom-3 right-3 w-12 h-12 border-r-2 border-b-2 border-border group-hover:border-primary transition-all duration-500" />
            </div>
        </motion.div>
    );
};

export const SustainabilitySection = () => {
    const titleRef = useRef(null);
    const isTitleInView = useInView(titleRef, { once: true, margin: "-50px" });

    const initiatives = [
        {
            title: 'Renewable Energy',
            description: 'Transitioning to 100% renewable energy sources across all our facilities and construction sites.',
            icon: Sun,
            stats: '75% Complete',
            delay: 0.1,
        },
        {
            title: 'Water Conservation',
            description: 'Advanced water recycling systems reducing consumption and protecting local water resources.',
            icon: Droplets,
            stats: '20M Liters Saved',
            delay: 0.2,
        },
        {
            title: 'Green Building',
            description: 'LEED-certified sustainable construction practices and eco-friendly materials in every project.',
            icon: Leaf,
            stats: '100% Projects',
            delay: 0.3,
        },
        {
            title: 'Community Support',
            description: 'Education, healthcare, and infrastructure programs benefiting thousands of families.',
            icon: Heart,
            stats: '50K+ Lives',
            delay: 0.4,
        },
    ];

    const progressData = [
        { label: 'Carbon Emission Reduction', value: 85, target: 'Net Zero by 2030', icon: Leaf, delay: 0.1 },
        { label: 'Waste Recycling Rate', value: 92, target: '95% by 2025', icon: TreePine, delay: 0.2 },
        { label: 'Community Investment', value: 78, target: '$50M by 2026', icon: Users, delay: 0.3 },
        { label: 'Green Certifications', value: 95, target: '100% Compliance', icon: Award, delay: 0.4 },
    ];

    const impactStories = [
        {
            image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070',
            title: 'Clean Water Initiative',
            description: 'Providing access to clean drinking water for 10,000 families in rural communities through sustainable well systems.',
            location: 'Dhaka Division',
            delay: 0.1,
        },
        {
            image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074',
            title: 'Solar Education Centers',
            description: 'Building solar-powered schools bringing quality education and technology to underserved areas.',
            location: 'Chittagong',
            delay: 0.2,
        },
        {
            image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070',
            title: 'Urban Green Spaces',
            description: 'Creating sustainable parks and green corridors that improve air quality and community wellbeing.',
            location: 'Dhaka Metro',
            delay: 0.3,
        },
    ];

    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white to-background-light dark:from-gray-900 dark:to-background-dark">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01] pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A059' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    ref={titleRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-20"
                >
                    {/* Decorative Lines */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={isTitleInView ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-[2px] w-16 bg-primary origin-right"
                        />
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={isTitleInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="px-4 py-2 bg-primary/10 text-primary text-xs md:text-sm uppercase tracking-[0.3em] font-bold"
                        >
                            Sustainability & Impact
                        </motion.span>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={isTitleInView ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-[2px] w-16 bg-primary origin-left"
                        />
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
                    >
                        Building a{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-primary">Sustainable Future</span>
                            <motion.span
                                initial={{ width: 0 }}
                                animate={isTitleInView ? { width: '100%' } : { width: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="absolute bottom-1 left-0 h-2 bg-primary/20"
                            />
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg text-muted-foreground max-w-3xl mx-auto font-body"
                    >
                        Our commitment to environmental stewardship and social responsibility
                        drives every decision we make
                    </motion.p>
                </motion.div>

                {/* Environmental Initiatives Grid */}
                <div className="mb-20 md:mb-28">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {initiatives.map((initiative, index) => (
                            <InitiativeCard key={index} {...initiative} />
                        ))}
                    </div>
                </div>

                {/* Progress Indicators */}
                <div className="mb-20 md:mb-28">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Our <span className="text-primary">Progress</span>
                        </h3>
                        <p className="text-muted-foreground font-body">
                            Tracking our journey towards sustainability goals
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {progressData.map((item, index) => (
                            <ProgressBar key={index} {...item} />
                        ))}
                    </div>
                </div>

                {/* Community Impact Stories */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Community <span className="text-primary">Impact Stories</span>
                        </h3>
                        <p className="text-muted-foreground font-body">
                            Real change in the communities we serve
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {impactStories.map((story, index) => (
                            <ImpactStoryCard key={index} {...story} />
                        ))}
                    </div>
                </div>

                {/* Bottom decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="mt-16 md:mt-20 flex justify-center"
                >
                    <div className="h-[2px] w-32 md:w-48 bg-gradient-to-r from-transparent via-primary to-transparent" />
                </motion.div>
            </div>
        </section>
    );
};
