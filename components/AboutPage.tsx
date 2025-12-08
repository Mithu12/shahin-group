'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
    Building2, Globe2, Award, Users, Target, Eye, Heart,
    ArrowRight, ChevronDown, Sparkles, Shield, Zap,
    Calendar, MapPin, TrendingUp, Quote
} from 'lucide-react';

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
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

// Hero Section
function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop"
                    alt="Shahin Group Headquarters"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-brand-navy/60 to-brand-navy" />
            </motion.div>

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 z-[1] opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-brand-gold/40 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 8 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Decorative Top Element */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 120 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-8"
                    />

                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-3 text-brand-gold text-sm uppercase tracking-[0.3em] font-medium mb-6"
                    >
                        <Sparkles className="w-4 h-4" />
                        Since 1996
                        <Sparkles className="w-4 h-4" />
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
                    >
                        Our <span className="text-brand-gold">Story</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10"
                    >
                        Three decades of excellence in construction, real estate, and industrial development.
                        Building the foundations of Bangladesh's future.
                    </motion.p>

                    {/* Stats Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="flex flex-wrap justify-center gap-8 md:gap-16"
                    >
                        {[
                            { value: '28+', label: 'Years of Excellence' },
                            { value: '50+', label: 'Landmark Projects' },
                            { value: '5000+', label: 'Happy Families' },
                            { value: '15M', label: 'Sq. Ft. Developed' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1 + index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-brand-gold mb-1">{stat.value}</div>
                                <div className="text-white/50 text-sm uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
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
                    <span className="text-white/50 text-xs uppercase tracking-widest">Discover More</span>
                    <ChevronDown className="w-6 h-6 text-brand-gold" />
                </motion.div>
            </motion.div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 border-l-2 border-t-2 border-brand-gold/30 z-10" />
            <div className="absolute bottom-20 right-10 w-32 h-32 border-r-2 border-b-2 border-brand-gold/30 z-10" />
        </section>
    );
}

// Company Overview Section
function OverviewSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative py-32 bg-brand-navy overflow-hidden">
            {/* Background Watermark */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                <span className="text-[20vw] font-display font-bold text-white/[0.02] whitespace-nowrap select-none">
                    SHAHIN
                </span>
            </div>

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Main Image */}
                        <div className="relative h-[500px] overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                                alt="Company Overview"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent" />
                        </div>

                        {/* Floating Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="absolute -bottom-10 -right-10 bg-brand-gold p-8 max-w-xs"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 rounded-full bg-black/20 flex items-center justify-center">
                                    <Building2 className="w-8 h-8 text-black" />
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-black">28</div>
                                    <div className="text-black/70 text-sm">Years Strong</div>
                                </div>
                            </div>
                            <p className="text-black/80 text-sm leading-relaxed">
                                Building trust and excellence since 1996
                            </p>
                        </motion.div>

                        {/* Decorative Frame */}
                        <div className="absolute -top-6 -left-6 w-full h-full border-2 border-brand-gold/20 -z-10" />
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-brand-gold" />
                            <span className="text-brand-gold text-sm uppercase tracking-[0.2em] font-medium">Who We Are</span>
                        </div>

                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            A Legacy of <span className="text-brand-gold">Innovation</span> & Excellence
                        </h2>

                        <p className="text-white/70 text-lg leading-relaxed mb-8">
                            Shahin Group stands as one of Bangladesh's most respected conglomerates,
                            with a diverse portfolio spanning real estate development, construction,
                            manufacturing, and industrial enterprises. Our commitment to quality and
                            innovation has made us a trusted name in shaping the nation's infrastructure.
                        </p>

                        <div className="space-y-6 mb-10">
                            {[
                                { icon: Building2, title: 'Real Estate Development', desc: 'Premium residential and commercial properties' },
                                { icon: Shield, title: 'Construction Excellence', desc: 'World-class infrastructure projects' },
                                { icon: Zap, title: 'Industrial Ventures', desc: 'Cutting-edge manufacturing facilities' },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                                        <item.icon className="w-6 h-6 text-brand-gold" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                                        <p className="text-white/60 text-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <Link href="/projects" className="inline-flex items-center gap-3 bg-transparent border-2 border-brand-gold text-brand-gold px-8 py-4 font-bold uppercase tracking-wider hover:bg-brand-gold hover:text-black transition-all duration-300 group">
                            Explore Our Projects
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Vision & Mission Section
function VisionMissionSection() {
    const cards = [
        {
            icon: Eye,
            title: 'Our Vision',
            description: 'To be the leading force in Bangladesh\'s development landscape, creating sustainable environments that elevate quality of life and set new standards of excellence in construction and real estate.',
            color: 'from-brand-gold/20 to-transparent'
        },
        {
            icon: Target,
            title: 'Our Mission',
            description: 'Delivering exceptional value through innovative design, superior craftsmanship, and unwavering commitment to our customers. We build not just structures, but lasting relationships and communities.',
            color: 'from-white/10 to-transparent'
        },
        {
            icon: Heart,
            title: 'Our Values',
            description: 'Integrity, innovation, and excellence form the cornerstone of everything we do. We believe in transparent business practices, sustainable development, and creating positive impact in society.',
            color: 'from-brand-gold/10 to-transparent'
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
                        <span className="text-brand-gold text-sm uppercase tracking-[0.2em] font-medium">Our Foundation</span>
                        <div className="h-px w-12 bg-brand-gold" />
                    </motion.div>

                    <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Guiding <span className="text-brand-gold">Principles</span>
                    </motion.h2>

                    <motion.p variants={fadeInUp} className="text-white/60 text-lg max-w-2xl mx-auto">
                        The values and vision that drive us to create exceptional spaces and lasting legacies
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="relative group"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-b ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-10 h-full group-hover:border-brand-gold/30 transition-all duration-500">
                                {/* Icon */}
                                <div className="w-16 h-16 bg-brand-gold/10 flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors">
                                    <card.icon className="w-8 h-8 text-brand-gold" />
                                </div>

                                {/* Content */}
                                <h3 className="font-display text-2xl font-bold text-white mb-4">{card.title}</h3>
                                <p className="text-white/60 leading-relaxed">{card.description}</p>

                                {/* Decorative Corner */}
                                <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-brand-gold/20 group-hover:border-brand-gold/50 transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Timeline Section
function TimelineSection() {
    const milestones = [
        { year: '1996', title: 'Founded', description: 'Shahin Group established with a vision to transform Bangladesh\'s construction landscape.' },
        { year: '2002', title: 'First Landmark Project', description: 'Completed our first major residential complex, setting new standards in quality.' },
        { year: '2008', title: 'Expansion', description: 'Diversified into manufacturing and industrial sectors, growing our portfolio.' },
        { year: '2015', title: 'Going National', description: 'Expanded operations across major cities in Bangladesh with multiple ongoing projects.' },
        { year: '2020', title: 'Sustainability Focus', description: 'Launched green building initiatives and sustainable development practices.' },
        { year: '2024', title: 'Digital Transformation', description: 'Embracing technology and innovation for the future of construction.' },
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
                        <span className="text-brand-gold text-sm uppercase tracking-[0.2em] font-medium">Our Journey</span>
                    </motion.div>

                    <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Milestones of <span className="text-brand-gold">Growth</span>
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
                                    <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-brand-gold/30 transition-colors ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                                        <span className="text-brand-gold text-3xl font-bold">{milestone.year}</span>
                                        <h3 className="text-white font-display text-xl font-bold mt-2 mb-3">{milestone.title}</h3>
                                        <p className="text-white/60">{milestone.description}</p>
                                    </div>
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

// Leadership Section
function LeadershipSection() {
    const leaders = [
        {
            name: 'Mohammed Shahin',
            role: 'Founder & Chairman',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
            quote: 'Building dreams into reality, one project at a time.'
        },
        {
            name: 'Ahmed Rahman',
            role: 'Managing Director',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
            quote: 'Excellence is not a destination, it\'s a continuous journey.'
        },
        {
            name: 'Fatima Begum',
            role: 'Director of Operations',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
            quote: 'Innovation drives progress, integrity sustains it.'
        },
    ];

    return (
        <section className="relative py-32 bg-brand-navy overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent" />
            </div>

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="text-center mb-20"
                >
                    <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-6">
                        <Users className="w-5 h-5 text-brand-gold" />
                        <span className="text-brand-gold text-sm uppercase tracking-[0.2em] font-medium">Leadership</span>
                    </motion.div>

                    <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Visionary <span className="text-brand-gold">Leaders</span>
                    </motion.h2>

                    <motion.p variants={fadeInUp} className="text-white/60 text-lg max-w-2xl mx-auto">
                        Meet the team driving innovation and excellence at Shahin Group
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={leader.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden mb-6">
                                {/* Image */}
                                <div className="relative h-[400px] overflow-hidden">
                                    <Image
                                        src={leader.image}
                                        alt={leader.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                </div>

                                {/* Quote Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-brand-gold">
                                    <Quote className="w-6 h-6 text-black/50 mb-2" />
                                    <p className="text-black font-medium italic">{leader.quote}</p>
                                </div>

                                {/* Decorative Corner */}
                                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-brand-gold/50 group-hover:border-brand-gold transition-colors" />
                            </div>

                            {/* Info */}
                            <h3 className="font-display text-xl font-bold text-white mb-1 group-hover:text-brand-gold transition-colors">
                                {leader.name}
                            </h3>
                            <p className="text-brand-gold text-sm uppercase tracking-wider">{leader.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Stats Section
function StatsSection() {
    const stats = [
        { icon: Building2, value: '50+', label: 'Projects Completed', suffix: '' },
        { icon: MapPin, value: '12', label: 'Cities Nationwide', suffix: '+' },
        { icon: Users, value: '5000', label: 'Happy Families', suffix: '+' },
        { icon: Award, value: '25', label: 'Industry Awards', suffix: '+' },
        { icon: TrendingUp, value: '15M', label: 'Sq. Ft. Developed', suffix: '' },
        { icon: Globe2, value: '$2B', label: 'Asset Value', suffix: '+' },
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
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center group"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 bg-black/10 rounded-full flex items-center justify-center group-hover:bg-black/20 transition-colors">
                                <stat.icon className="w-8 h-8 text-black" />
                            </div>
                            <div className="text-3xl md:text-4xl font-bold text-black mb-1">
                                {stat.value}{stat.suffix}
                            </div>
                            <div className="text-black/70 text-sm uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
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
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
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
                        Get In Touch
                        <Sparkles className="w-4 h-4" />
                    </span>

                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Ready to Build Your <span className="text-brand-gold">Dream</span>?
                    </h2>

                    <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
                        Whether you're looking for a new home, commercial space, or partnership opportunities,
                        we're here to help you bring your vision to life.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/#contact" className="inline-flex items-center gap-3 bg-brand-gold text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-brand-gold/90 transition-all duration-300 group">
                            Contact Us
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/projects" className="inline-flex items-center gap-3 bg-transparent border-2 border-white/30 text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                            View Projects
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Main About Page Component
export default function AboutPage() {
    return (
        <div className="bg-brand-navy">
            <HeroSection />
            <OverviewSection />
            <VisionMissionSection />
            <TimelineSection />
            <LeadershipSection />
            <StatsSection />
            <CTASection />
        </div>
    );
}
