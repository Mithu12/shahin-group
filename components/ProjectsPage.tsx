'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, MapPin, Calendar, Building2, ChevronRight, Filter, X, Play } from 'lucide-react';
import { AngularDividerBottom, ShardShape } from './DesignElements';
import { useLoading } from '@/context/LoadingContext';

// Extended project data
const projects = [
    {
        id: 1,
        title: "The Grand Marina",
        category: "Luxury Residential",
        year: "2024",
        location: "Dhaka, Bangladesh",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
        description: "A waterfront masterpiece redefining luxury living with panoramic views of the bay.",
        details: "42 floors • 180 units • 5 penthouses",
        featured: true,
        tags: ["Residential", "Waterfront", "Premium"]
    },
    {
        id: 2,
        title: "Shahin Tower",
        category: "Commercial HQ",
        year: "2023",
        location: "Gulshan, Dhaka",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80",
        description: "The new icon of the city's financial district with sustainable design.",
        details: "55 floors • Class A Office • LEED Platinum",
        featured: true,
        tags: ["Commercial", "Sustainable", "Landmark"]
    },
    {
        id: 3,
        title: "Eco-City One",
        category: "Sustainable Urban Planning",
        year: "2025",
        location: "Purbachal, Dhaka",
        image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80",
        description: "A self-sustaining community designed for the future of urban living.",
        details: "500 acres • Mixed-use • Carbon neutral",
        featured: true,
        tags: ["Urban Planning", "Sustainable", "Community"]
    },
    {
        id: 4,
        title: "Global Media Center",
        category: "Media & Tech",
        year: "2024",
        location: "Tejgaon, Dhaka",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
        description: "State-of-the-art broadcasting and digital innovation hub.",
        details: "25 floors • 8 studios • Tech campus",
        featured: false,
        tags: ["Media", "Technology", "Innovation"]
    },
    {
        id: 5,
        title: "Azure Heights",
        category: "Luxury Residential",
        year: "2023",
        location: "Banani, Dhaka",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
        description: "Ultra-luxury apartments with world-class amenities and sky gardens.",
        details: "38 floors • 120 units • Rooftop infinity pool",
        featured: false,
        tags: ["Residential", "Premium", "Amenities"]
    },
    {
        id: 6,
        title: "Heritage Plaza",
        category: "Mixed-Use Development",
        year: "2022",
        location: "Motijheel, Dhaka",
        image: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?auto=format&fit=crop&q=80",
        description: "A seamless blend of retail, office, and hospitality in the heart of the city.",
        details: "32 floors • 200,000 sqft retail • 5-star hotel",
        featured: false,
        tags: ["Mixed-Use", "Retail", "Hospitality"]
    },
    {
        id: 7,
        title: "Green Valley Resort",
        category: "Hospitality",
        year: "2024",
        location: "Cox's Bazar",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80",
        description: "A luxury eco-resort nestled in nature with sustainable architecture.",
        details: "150 villas • Spa & wellness • Beachfront",
        featured: false,
        tags: ["Hospitality", "Eco-friendly", "Resort"]
    },
    {
        id: 8,
        title: "Innovation Hub",
        category: "Technology Park",
        year: "2025",
        location: "Bashundhara, Dhaka",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80",
        description: "A cutting-edge technology park fostering startups and innovation.",
        details: "Tech campus • Incubator space • Research labs",
        featured: false,
        tags: ["Technology", "Innovation", "Campus"]
    }
];

const categories = ["All", "Luxury Residential", "Commercial HQ", "Sustainable Urban Planning", "Media & Tech", "Mixed-Use Development", "Hospitality", "Technology Park"];

export default function ProjectsPage() {
    const { isLoading } = useLoading();
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    const featuredProjects = projects.filter(p => p.featured);

    return (
        <div ref={containerRef} className="relative bg-brand-navy min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[80vh] md:h-screen overflow-hidden flex items-center justify-center">
                {/* Parallax Background */}
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80"
                        alt="Architecture background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-brand-navy" />
                </motion.div>

                {/* Animated Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `linear-gradient(rgba(161, 161, 170, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(161, 161, 170, 0.3) 1px, transparent 1px)`,
                            backgroundSize: '80px 80px',
                        }}
                    />
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white/20 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -100, 0],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 4,
                                repeat: Infinity,
                                delay: Math.random() * 3,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>

                {/* Hero Content */}
                <div className="relative z-10 container max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mb-6"
                    >
                        <span className="inline-block px-4 py-2 border border-white/20 text-white/70 text-xs uppercase tracking-[0.3em] backdrop-blur-sm">
                            Our Portfolio
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.9]"
                    >
                        <span className="block">Defining</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-white to-brand-gold/60">
                            Excellence
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={!isLoading ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        From visionary concepts to architectural masterpieces, explore our legacy of
                        transformative developments across Bangladesh.
                    </motion.p>

                    {/* Stats Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex items-center justify-center gap-8 md:gap-16 mt-12"
                    >
                        {[
                            { value: "50+", label: "Projects Completed" },
                            { value: "15M", label: "Sq. Ft. Developed" },
                            { value: "28", label: "Years of Excellence" },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <motion.span
                                    initial={{ scale: 0.5 }}
                                    animate={!isLoading ? { scale: 1 } : { scale: 0.5 }}
                                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                    className="block font-display text-3xl md:text-4xl font-bold text-white"
                                >
                                    {stat.value}
                                </motion.span>
                                <span className="text-xs uppercase tracking-widest text-white/50">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={!isLoading ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-xs uppercase tracking-widest text-white/40">Explore</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
                    </motion.div>
                </motion.div>

                {/* Angular Divider */}
                <div className="absolute bottom-0 left-0 w-full text-brand-navy z-20">
                    <AngularDividerBottom />
                </div>
            </section>

            {/* Featured Projects Showcase */}
            <section className="relative py-24 md:py-40 overflow-hidden">
                <ShardShape className="opacity-10" />

                {/* Large Watermark */}
                <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02]">
                    <h1 className="text-[20vw] font-display font-bold text-white leading-none tracking-tighter whitespace-nowrap">
                        FEATURED
                    </h1>
                </div>

                <div className="container max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-[1px] bg-brand-gold" />
                            <span className="text-brand-gold text-sm uppercase tracking-[0.3em] font-bold">
                                Signature Works
                            </span>
                        </div>
                        <h2 className="font-display text-4xl md:text-6xl font-bold text-white">
                            Featured <span className="text-brand-gold">Projects</span>
                        </h2>
                    </motion.div>

                    {/* Featured Projects Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: index * 0.15 }}
                                className={`group relative cursor-pointer ${index === 0 ? 'lg:col-span-2 h-[500px] md:h-[600px]' : 'h-[400px] md:h-[500px]'}`}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Card Container */}
                                <div className="relative w-full h-full overflow-hidden bg-brand-light">
                                    {/* Image */}
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />

                                    {/* Overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                                    {/* Animated Border */}
                                    <motion.div
                                        className="absolute inset-4 border border-white/0 group-hover:border-brand-gold/50 transition-colors duration-500"
                                        initial={false}
                                        animate={hoveredProject === project.id ? { scale: 0.98 } : { scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </motion.div>

                                    {/* Content */}
                                    <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-10">
                                        {/* Top Row */}
                                        <div className="flex justify-between items-start">
                                            <motion.span
                                                className="text-6xl md:text-7xl font-display font-bold text-white/10 group-hover:text-white/20 transition-colors"
                                                animate={hoveredProject === project.id ? { x: 10 } : { x: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                0{index + 1}
                                            </motion.span>

                                            <motion.div
                                                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center"
                                                initial={{ scale: 0, rotate: -45 }}
                                                animate={hoveredProject === project.id ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <ArrowUpRight className="w-5 h-5 text-white" />
                                            </motion.div>
                                        </div>

                                        {/* Bottom Content */}
                                        <div>
                                            <motion.div
                                                className="overflow-hidden"
                                                animate={hoveredProject === project.id ? { y: 0 } : { y: 20 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <div className="flex items-center gap-4 mb-3">
                                                    <span className="text-brand-gold text-xs uppercase tracking-[0.2em] font-bold">
                                                        {project.category}
                                                    </span>
                                                    <span className="text-white/30 text-xs">•</span>
                                                    <span className="text-white/50 text-xs flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" /> {project.year}
                                                    </span>
                                                </div>

                                                <h3 className="font-display text-3xl md:text-5xl font-bold text-white mb-3">
                                                    {project.title}
                                                </h3>

                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={hoveredProject === project.id ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.4 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-gray-300 text-sm md:text-base max-w-lg mb-4">
                                                        {project.description}
                                                    </p>
                                                    <div className="flex items-center gap-4 text-white/60 text-sm">
                                                        <span className="flex items-center gap-1">
                                                            <MapPin className="w-4 h-4" /> {project.location}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Building2 className="w-4 h-4" /> {project.details}
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Projects Section */}
            <section className="relative py-24 md:py-32 bg-brand-light overflow-hidden">
                {/* Background Elements */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-white/5 rounded-full"
                />

                <div className="container max-w-7xl mx-auto px-6 relative z-10">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12"
                    >
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-[1px] bg-brand-gold" />
                                <span className="text-brand-gold text-sm uppercase tracking-[0.3em] font-bold">
                                    Complete Portfolio
                                </span>
                            </div>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
                                All <span className="text-brand-gold">Projects</span>
                            </h2>
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2">
                            {categories.slice(0, 5).map((category) => (
                                <motion.button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 text-xs uppercase tracking-wider font-medium border transition-all duration-300 ${activeCategory === category
                                            ? 'bg-brand-gold text-black border-brand-gold'
                                            : 'border-white/20 text-white/70 hover:border-white/50 hover:text-white'
                                        }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {category === "All" ? "All" : category.split(" ")[0]}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="group relative h-[350px] md:h-[400px] cursor-pointer overflow-hidden"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                                    {/* Hover Line Animation */}
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-1 bg-brand-gold"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: '100%' }}
                                        transition={{ duration: 0.4 }}
                                    />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                        <div className="transform group-hover:-translate-y-2 transition-transform duration-400">
                                            <span className="text-brand-gold text-xs uppercase tracking-widest font-bold mb-2 block">
                                                {project.category}
                                            </span>
                                            <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">
                                                {project.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-white/50 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <MapPin className="w-3 h-3" />
                                                <span>{project.location}</span>
                                            </div>
                                        </div>

                                        {/* View Button */}
                                        <motion.div
                                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100"
                                            initial={{ scale: 0 }}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <ArrowUpRight className="w-4 h-4 text-white" />
                                        </motion.div>
                                    </div>

                                    {/* Tags on hover */}
                                    <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {project.tags.slice(0, 2).map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 text-[10px] uppercase tracking-wider bg-black/50 backdrop-blur-sm text-white/80 border border-white/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Load More Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-16"
                    >
                        <button className="group relative px-8 py-4 border border-white/20 overflow-hidden">
                            <div className="absolute inset-0 w-full h-full bg-brand-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                            <span className="relative flex items-center gap-3 text-white group-hover:text-black font-bold tracking-[0.2em] text-sm uppercase transition-colors duration-300">
                                Load More Projects
                                <ChevronRight className="w-4 h-4" />
                            </span>
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-brand-navy">
                {/* Background Video/Image */}
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
                        alt="Architecture"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy" />
                </div>

                <div className="container max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-brand-gold text-sm uppercase tracking-[0.3em] font-bold mb-4 block">
                                Start Your Vision
                            </span>
                            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Ready to Build{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-white">
                                    Something Extraordinary?
                                </span>
                            </h2>
                            <p className="text-gray-300 text-lg mb-8 max-w-lg">
                                Let's collaborate to bring your architectural vision to life. Our team of experts
                                is ready to transform your ideas into reality.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="group relative px-8 py-4 bg-brand-gold text-black font-bold tracking-[0.1em] text-sm uppercase overflow-hidden">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Start a Project
                                        <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                                    </span>
                                </button>
                                <button className="px-8 py-4 border border-white/30 text-white font-bold tracking-[0.1em] text-sm uppercase hover:bg-white/10 transition-colors">
                                    View Process
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            {/* Decorative Elements */}
                            <div className="relative h-[400px]">
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                    className="absolute top-0 right-0 w-64 h-64 border border-brand-gold/20 rounded-full"
                                />
                                <motion.div
                                    animate={{ rotate: [360, 0] }}
                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                    className="absolute bottom-0 left-0 w-48 h-48 border border-white/10 rounded-full"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        className="w-32 h-32 rounded-full border-2 border-brand-gold flex items-center justify-center cursor-pointer hover:bg-brand-gold/20 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <Play className="w-8 h-8 text-brand-gold ml-1" />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                        onClick={() => setSelectedProject(null)}
                    >
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative w-full max-w-5xl max-h-[90vh] bg-brand-light overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>

                            {/* Image */}
                            <div className="relative h-[40vh] md:h-[50vh]">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-light to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-brand-gold text-xs uppercase tracking-[0.2em] font-bold">
                                        {selectedProject.category}
                                    </span>
                                    <span className="text-white/30">•</span>
                                    <span className="text-white/50 text-xs">{selectedProject.year}</span>
                                </div>

                                <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
                                    {selectedProject.title}
                                </h2>

                                <p className="text-gray-300 text-lg mb-6 max-w-2xl">
                                    {selectedProject.description}
                                </p>

                                <div className="flex flex-wrap gap-6 text-white/60 text-sm mb-8">
                                    <span className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-brand-gold" />
                                        {selectedProject.location}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Building2 className="w-4 h-4 text-brand-gold" />
                                        {selectedProject.details}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {selectedProject.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs uppercase tracking-wider border border-white/20 text-white/70"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <button className="group relative px-8 py-4 bg-brand-gold text-black font-bold tracking-[0.1em] text-sm uppercase overflow-hidden">
                                    <span className="relative z-10 flex items-center gap-2">
                                        View Full Case Study
                                        <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                                    </span>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
