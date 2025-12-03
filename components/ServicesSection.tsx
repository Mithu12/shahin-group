'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Building2, Globe, PenTool, TrendingUp } from 'lucide-react';
import { AngularDividerTop } from './DesignElements';

const services = [
    {
        icon: Building2,
        title: "Real Estate Development",
        description: "Creating iconic landmarks that redefine skylines and communities.",
        gradient: "from-slate-500/5 to-blue-500/5",
        iconColor: "text-slate-600 dark:text-slate-400",
        accentColor: "bg-slate-400"
    },
    {
        icon: Globe,
        title: "Global Logistics",
        description: "Seamless supply chain solutions connecting markets worldwide.",
        gradient: "from-slate-500/5 to-emerald-500/5",
        iconColor: "text-slate-600 dark:text-slate-400",
        accentColor: "bg-slate-400"
    },
    {
        icon: PenTool,
        title: "Architecture & Design",
        description: "Visionary design thinking that blends aesthetics with functionality.",
        gradient: "from-slate-500/5 to-purple-500/5",
        iconColor: "text-slate-600 dark:text-slate-400",
        accentColor: "bg-slate-400"
    },
    {
        icon: TrendingUp,
        title: "Investment Management",
        description: "Strategic asset growth and sustainable value creation.",
        gradient: "from-slate-500/5 to-amber-500/5",
        iconColor: "text-slate-600 dark:text-slate-400",
        accentColor: "bg-slate-400"
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.3
        }
    }
};

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 60,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export function ServicesSection() {
    return (
        <section id="expertise" className="relative pb-24 pt-10 md:pb-40 md:pt-10 bg-brand-navy overflow-hidden">
            {/* Angular Divider Top - Inverted for variety if needed, or just standard */}
            <div className="absolute top-0 left-0 w-full text-brand-navy z-20 -mt-1 transform rotate-180">
                <AngularDividerTop />
            </div>

            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01] pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
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
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-block mb-4"
                    >
                        <span className="px-4 py-2 bg-brand-gold/10 text-brand-gold rounded-full text-sm font-bold tracking-[0.2em] uppercase border border-brand-gold/20">
                            Our Expertise
                        </span>
                    </motion.div>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Sectors of <span className="text-brand-gold">Excellence</span>
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto">
                        Delivering world-class solutions across diverse industries
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -16,
                                scale: 1.03,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="group relative"
                        >
                            <div className={`
                                relative p-8 
                                border-2 border-white/10 
                                bg-brand-light 
                                overflow-hidden
                                transition-all duration-500
                                hover:border-brand-gold/50 
                                hover:shadow-2xl
                                rounded-lg
                            `}>
                                {/* Animated gradient background */}
                                <div className={`
                                    absolute inset-0 
                                    bg-gradient-to-br ${service.gradient}
                                    opacity-0 group-hover:opacity-100
                                    transition-opacity duration-500
                                `}></div>

                                {/* Top accent line */}
                                <div className={`
                                    absolute top-0 left-0 
                                    h-1 w-0 
                                    ${service.accentColor}
                                    group-hover:w-full
                                    transition-all duration-500 ease-out
                                `}></div>

                                {/* Decorative Corner Frames */}
                                <div className="absolute top-3 left-3 w-16 h-16 border-l-2 border-t-2 border-white/10 group-hover:border-brand-gold transition-all duration-500 opacity-40 group-hover:opacity-100" />
                                <div className="absolute bottom-3 right-3 w-16 h-16 border-r-2 border-b-2 border-white/10 group-hover:border-brand-gold transition-all duration-500 opacity-40 group-hover:opacity-100" />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon Container */}
                                    <motion.div
                                        whileHover={{
                                            rotate: [0, -10, 10, -10, 0],
                                            scale: 1.1
                                        }}
                                        transition={{ duration: 0.5 }}
                                        className={`
                                            w-16 h-16 
                                            bg-white/5 
                                            rounded-lg
                                            flex items-center justify-center 
                                            mb-6 
                                            group-hover:bg-brand-gold/10
                                            transition-all duration-300
                                            relative
                                            overflow-hidden
                                        `}
                                    >
                                        {/* Icon background glow */}
                                        <div className={`
                                            absolute inset-0 
                                            ${service.accentColor}
                                            opacity-0 group-hover:opacity-20
                                            blur-xl
                                            transition-opacity duration-500
                                        `}></div>

                                        <service.icon className={`
                                            w-8 h-8 
                                            text-white/70 group-hover:text-brand-gold
                                            group-hover:scale-110
                                            transition-all duration-300
                                            relative z-10
                                        `} />
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="font-display text-xl font-bold text-white mb-4 group-hover:text-brand-gold transition-colors duration-300 leading-tight">
                                        {service.title}
                                    </h3>

                                    {/* Animated divider */}
                                    <div className="w-12 h-0.5 bg-white/20 group-hover:w-full group-hover:bg-brand-gold/50 transition-all duration-500 mb-4"></div>

                                    {/* Description */}
                                    <p className="font-body text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                                        {service.description}
                                    </p>

                                    {/* Hover indicator */}
                                    <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">
                                            Learn More
                                        </span>
                                        <motion.div
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 1.5,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <svg className="w-4 h-4 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Shimmer effect on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
