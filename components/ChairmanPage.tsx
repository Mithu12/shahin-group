'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
    Quote, ArrowRight, ChevronDown, Sparkles, Award, Building2,
    Target, Users, Globe2, Calendar, Star, Briefcase, Heart,
    TrendingUp, MapPin, Shield, Lightbulb, Handshake
} from 'lucide-react';

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
};

// Hero Section with Parallax
function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

    return (
        <section ref={ref} className="relative h-screen min-h-[900px] flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
                <Image
                    src="/images/founder/founder-1.jpg"
                    alt="Chairman Shahin Akhter Babu"
                    fill
                    className="object-cover object-top"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/70 via-brand-navy/50 to-brand-navy" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 via-transparent to-brand-navy/40" />
            </motion.div>

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 z-[1] opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(161, 161, 170, 0.15) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(161, 161, 170, 0.15) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px'
                }} />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-brand-gold/50 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -150, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: 10 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 8,
                        }}
                    />
                ))}
            </div>

            {/* Ambient Glows */}
            <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Content */}
            <motion.div style={{ opacity }} className="relative z-10 container max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        {/* Decorative Line */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 80 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-px bg-gradient-to-r from-brand-gold to-transparent mb-8"
                        />

                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="inline-flex items-center gap-3 text-brand-gold text-sm uppercase tracking-[0.3em] font-medium mb-6"
                        >
                            <Sparkles className="w-4 h-4" />
                            Founder & Chairman
                            <Sparkles className="w-4 h-4" />
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                        >
                            Shahin Akhter{' '}
                            <span className="text-brand-gold italic">Babu</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="text-xl text-white/70 max-w-lg leading-relaxed mb-10"
                        >
                            A visionary leader who transformed a humble beginning into one of Bangladesh's
                            most respected conglomerates, shaping skylines and building dreams for over three decades.
                        </motion.p>

                        {/* Quick Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="flex flex-wrap gap-8"
                        >
                            {[
                                { value: '28+', label: 'Years of Leadership' },
                                { value: '50+', label: 'Projects Delivered' },
                                { value: '5000+', label: 'Lives Touched' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.1 + index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-3xl font-bold text-brand-gold mb-1">{stat.value}</div>
                                    <div className="text-white/50 text-xs uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right - Empty for background image focus */}
                    <div className="hidden lg:block" />
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 cursor-pointer"
                >
                    <span className="text-white/50 text-xs uppercase tracking-widest">Explore Journey</span>
                    <ChevronDown className="w-6 h-6 text-brand-gold" />
                </motion.div>
            </motion.div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 border-l-2 border-t-2 border-brand-gold/30 z-10" />
            <div className="absolute bottom-20 right-10 w-32 h-32 border-r-2 border-b-2 border-brand-gold/30 z-10" />
        </section>
    );
}

// Vision Quote Section
function VisionSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative py-32 bg-black overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-black to-black" />
            </div>

            {/* Decorative Quote Marks */}
            <div className="absolute top-20 left-10 opacity-5">
                <Quote className="w-64 h-64 text-brand-gold transform -scale-x-100" />
            </div>
            <div className="absolute bottom-20 right-10 opacity-5">
                <Quote className="w-64 h-64 text-brand-gold" />
            </div>

            <div className="container max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="text-center"
                >
                    {/* Decorative Line */}
                    <motion.div
                        variants={scaleIn}
                        className="flex items-center justify-center gap-4 mb-12"
                    >
                        <div className="h-px w-20 bg-gradient-to-r from-transparent to-brand-gold" />
                        <Star className="w-6 h-6 text-brand-gold" />
                        <div className="h-px w-20 bg-gradient-to-l from-transparent to-brand-gold" />
                    </motion.div>

                    <motion.blockquote
                        variants={fadeInUp}
                        className="font-display text-3xl md:text-4xl lg:text-5xl text-white italic leading-relaxed mb-12"
                    >
                        "Architecture is not just about structures; it's about shaping the way we live,
                        interact, and dream. Every line we draw and every brick we lay is a testament to our
                        commitment to creating spaces that <span className="text-brand-gold">inspire</span> and <span className="text-brand-gold">endure</span>."
                    </motion.blockquote>

                    <motion.div variants={fadeInUp} className="flex items-center justify-center gap-6">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-brand-gold"
                        >
                            <Image
                                src="/images/founder/founder-3.jpg"
                                alt="Shahin Akhter Babu"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        <div className="text-left">
                            <div className="font-display text-xl text-white font-bold">Shahin Akhter Babu</div>
                            <div className="text-brand-gold text-sm uppercase tracking-wider">Founder & Chairman</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// Biography Section
function BiographySection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative py-32 bg-brand-navy overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            {/* Ambient Glow */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Image Collage */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={fadeInLeft}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px]"
                    >
                        {/* Main Image */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                            className="absolute top-0 left-0 w-[75%] h-[70%] z-10"
                        >
                            <div className="relative w-full h-full overflow-hidden shadow-2xl border border-white/10">
                                <Image
                                    src="/images/founder/founder-1.jpg"
                                    alt="Chairman Portrait"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>
                        </motion.div>

                        {/* Secondary Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="absolute bottom-0 right-0 w-[55%] h-[50%] z-20"
                        >
                            <div className="relative w-full h-full overflow-hidden shadow-2xl border-2 border-brand-gold/30">
                                <Image
                                    src="/images/founder/founder-2.jpg"
                                    alt="Chairman Working"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay" />
                            </div>
                        </motion.div>

                        {/* Decorative Frame */}
                        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold/10 -z-10" />

                        {/* Floating Years Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="absolute top-[60%] left-[65%] z-30 bg-brand-gold p-6"
                        >
                            <div className="text-center">
                                <div className="text-4xl font-bold text-black">28+</div>
                                <div className="text-black/70 text-xs uppercase tracking-wider">Years</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={fadeInRight}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-brand-gold" />
                            <span className="text-brand-gold text-sm uppercase tracking-[0.2em] font-medium">The Journey</span>
                        </div>

                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                            From Humble Beginnings to{' '}
                            <span className="text-brand-gold italic">Industry Leadership</span>
                        </h2>

                        <div className="space-y-6 text-white/70 leading-relaxed">
                            <p>
                                Shahin Akhter Babu's journey began with a simple yet powerful vision: to create
                                spaces that elevate the quality of life for every family they touch. Starting
                                from modest roots, he built Shahin Group into one of Bangladesh's most trusted
                                names in real estate and construction.
                            </p>
                            <p>
                                His philosophy blends traditional craftsmanship with modern innovation,
                                ensuring that every project not only meets the needs of today but anticipates
                                the aspirations of tomorrow. Under his leadership, the company has delivered
                                over 50 landmark projects across the nation.
                            </p>
                            <p>
                                Beyond business, Mr. Babu is deeply committed to community development,
                                sustainable practices, and nurturing the next generation of industry leaders.
                                His vision continues to shape the skylines of Bangladesh while creating lasting
                                value for thousands of families.
                            </p>
                        </div>

                        {/* Key Attributes */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {[
                                { icon: Lightbulb, text: 'Visionary Leadership' },
                                { icon: Shield, text: 'Integrity First' },
                                { icon: Heart, text: 'Community Focus' },
                                { icon: TrendingUp, text: 'Sustainable Growth' },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.text}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="w-10 h-10 bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-brand-gold" />
                                    </div>
                                    <span className="text-white/80 text-sm">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Leadership Philosophy Section
function PhilosophySection() {
    const philosophies = [
        {
            icon: Target,
            title: 'Vision-Driven',
            description: 'Every decision is guided by a clear vision of creating lasting value and positive impact on communities.',
            gradient: 'from-brand-gold/20 to-transparent'
        },
        {
            icon: Handshake,
            title: 'Trust & Integrity',
            description: 'Building relationships based on transparency, honesty, and unwavering commitment to our promises.',
            gradient: 'from-white/10 to-transparent'
        },
        {
            icon: Users,
            title: 'People First',
            description: 'Investing in our team and community, believing that success is measured by the lives we improve.',
            gradient: 'from-brand-gold/10 to-transparent'
        },
        {
            icon: Globe2,
            title: 'Sustainable Future',
            description: 'Embracing eco-friendly practices and sustainable development for generations to come.',
            gradient: 'from-white/10 to-transparent'
        }
    ];

    return (
        <section className="relative py-32 bg-gradient-to-b from-brand-navy to-black overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="text-center mb-20"
                >
                    <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-px w-12 bg-brand-gold" />
                        <span className="text-brand-gold text-sm uppercase tracking-[0.2em] font-medium">Leadership Philosophy</span>
                        <div className="h-px w-12 bg-brand-gold" />
                    </motion.div>

                    <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Guiding <span className="text-brand-gold">Principles</span>
                    </motion.h2>

                    <motion.p variants={fadeInUp} className="text-white/60 text-lg max-w-2xl mx-auto">
                        The core values and beliefs that have shaped three decades of excellence and continue to guide our vision for the future.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {philosophies.map((philosophy, index) => (
                        <motion.div
                            key={philosophy.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="relative group"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-b ${philosophy.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 h-full group-hover:border-brand-gold/30 transition-all duration-500">
                                {/* Icon */}
                                <motion.div
                                    whileHover={{ rotate: 10 }}
                                    className="w-14 h-14 bg-brand-gold/10 flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors"
                                >
                                    <philosophy.icon className="w-7 h-7 text-brand-gold" />
                                </motion.div>

                                {/* Content */}
                                <h3 className="font-display text-xl font-bold text-white mb-4">{philosophy.title}</h3>
                                <p className="text-white/60 leading-relaxed text-sm">{philosophy.description}</p>

                                {/* Decorative Corner */}
                                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-brand-gold/20 group-hover:border-brand-gold/50 transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Timeline/Journey Section
function JourneySection() {
    const milestones = [
        { year: '1996', title: 'The Beginning', description: 'Founded Shahin Group with a vision to transform the construction landscape of Bangladesh.' },
        { year: '2002', title: 'First Landmark', description: 'Completed the first major residential project, establishing reputation for quality.' },
        { year: '2008', title: 'Diversification', description: 'Expanded into manufacturing and industrial sectors, growing the corporate portfolio.' },
        { year: '2015', title: 'Nationwide Presence', description: 'Established operations across major cities with multiple ongoing developments.' },
        { year: '2020', title: 'Green Initiative', description: 'Launched sustainable development practices and eco-friendly construction methods.' },
        { year: '2024', title: 'Digital Era', description: 'Embracing technology and innovation to shape the future of construction.' },
    ];

    return (
        <section className="relative py-32 bg-black overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="text-center mb-20"
                >
                    <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-6">
                        <Calendar className="w-5 h-5 text-brand-gold" />
                        <span className="text-brand-gold text-sm uppercase tracking-[0.2em] font-medium">The Journey</span>
                    </motion.div>

                    <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Milestones of <span className="text-brand-gold">Excellence</span>
                    </motion.h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-gold/50 to-transparent hidden md:block" />

                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6 }}
                                className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Content */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-brand-gold/30 transition-all duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                                    >
                                        <span className="text-brand-gold text-3xl font-bold">{milestone.year}</span>
                                        <h3 className="text-white font-display text-xl font-bold mt-2 mb-3">{milestone.title}</h3>
                                        <p className="text-white/60">{milestone.description}</p>
                                    </motion.div>
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-gold rounded-full hidden md:block">
                                    <div className="absolute inset-0 bg-brand-gold rounded-full animate-ping opacity-30" />
                                </div>

                                {/* Empty Space for Alignment */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Achievements Section
function AchievementsSection() {
    const achievements = [
        { icon: Building2, value: '50+', label: 'Projects Completed' },
        { icon: MapPin, value: '12+', label: 'Cities Nationwide' },
        { icon: Users, value: '5000+', label: 'Happy Families' },
        { icon: Award, value: '25+', label: 'Industry Awards' },
        { icon: TrendingUp, value: '15M', label: 'Sq. Ft. Developed' },
        { icon: Briefcase, value: '$2B+', label: 'Asset Value' },
    ];

    return (
        <section className="relative py-24 bg-brand-gold overflow-hidden">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-black">
                        A Legacy of Achievement
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {achievements.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            className="text-center group"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 bg-black/10 rounded-full flex items-center justify-center group-hover:bg-black/20 transition-colors">
                                <stat.icon className="w-8 h-8 text-black" />
                            </div>
                            <div className="text-3xl md:text-4xl font-bold text-black mb-1">
                                {stat.value}
                            </div>
                            <div className="text-black/70 text-sm uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Message from Chairman Section
function MessageSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative py-32 bg-brand-navy overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/founder/founder-3.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/80" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2"
                    >
                        <div className="relative">
                            <div className="relative h-[400px] overflow-hidden border-2 border-brand-gold/20">
                                <Image
                                    src="/images/founder/founder-3.jpg"
                                    alt="Chairman Portrait"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-gold/10 -z-10" />
                        </div>
                    </motion.div>

                    {/* Message */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-3 space-y-8"
                    >
                        <div className="flex items-center gap-4">
                            <Quote className="w-10 h-10 text-brand-gold transform -scale-x-100" />
                            <div className="h-px flex-1 bg-gradient-to-r from-brand-gold/50 to-transparent" />
                        </div>

                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                            A Message from the <span className="text-brand-gold">Chairman</span>
                        </h2>

                        <div className="space-y-6 text-white/70 leading-relaxed italic">
                            <p>
                                "As I reflect on nearly three decades of building, I am filled with gratitude
                                for the trust that thousands of families have placed in us. Each project we
                                undertake is not just about constructing buildings—it's about creating homes
                                where memories will be made, communities where friendships will flourish, and
                                spaces where dreams will take flight.
                            </p>
                            <p>
                                Looking ahead, our commitment remains unwavering: to deliver excellence in
                                every brick we lay, to embrace innovation while honoring tradition, and to
                                build a sustainable future for generations to come. Together, we will continue
                                to shape the Bangladesh of tomorrow."
                            </p>
                        </div>

                        <div className="pt-4 flex items-center justify-between">
                            <div>
                                <div className="font-display text-2xl text-white font-bold">Shahin Akhter Babu</div>
                                <div className="text-brand-gold text-sm uppercase tracking-wider">Founder & Chairman</div>
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-20 h-20 border-2 border-brand-gold/30 flex items-center justify-center"
                            >
                                <span className="font-display text-brand-gold text-2xl font-bold">SG</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// CTA Section
function CTASection() {
    return (
        <section className="relative py-32 bg-black overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                    alt="Contact Background"
                    fill
                    className="object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            <div className="container max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-flex items-center gap-2 text-brand-gold text-sm uppercase tracking-[0.2em] font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        Connect With Us
                        <Sparkles className="w-4 h-4" />
                    </span>

                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Let's Build Your <span className="text-brand-gold">Dream</span> Together
                    </h2>

                    <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
                        Be part of our journey. Whether you're looking for your dream home or exploring
                        partnership opportunities, we're here to help turn your vision into reality.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="inline-flex items-center gap-3 bg-brand-gold text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-brand-gold/90 transition-all duration-300 group">
                            Contact Us
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/about" className="inline-flex items-center gap-3 bg-transparent border-2 border-white/30 text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                            About Shahin Group
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-10 w-32 h-32 border-l-2 border-b-2 border-brand-gold/20" />
            <div className="absolute top-10 right-10 w-32 h-32 border-r-2 border-t-2 border-brand-gold/20" />
        </section>
    );
}

// Main Chairman Page Component
export default function ChairmanPage() {
    return (
        <div className="bg-brand-navy">
            <HeroSection />
            <VisionSection />
            <BiographySection />
            <PhilosophySection />
            <JourneySection />
            <AchievementsSection />
            <MessageSection />
            <CTASection />
        </div>
    );
}
