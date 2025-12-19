'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Building2, Layers, CheckCircle, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { AngularDividerBottom, AngularDividerTop } from './DesignElements';
import { useState, useEffect, useCallback } from 'react';

interface Project {
    id: number;
    title: string;
    category: string;
    year: string;
    location: string;
    image: string;
    description: string;
    details: string;
    tags: string[];
    gallery?: string[];
}

interface ProjectDetailsProps {
    project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
    const { scrollYProgress } = useScroll();
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const handleNext = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedImage !== null && project.gallery) {
            setSelectedImage((prev) => (prev === project.gallery!.length - 1 ? 0 : prev! + 1));
        }
    }, [selectedImage, project.gallery]);

    const handlePrev = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedImage !== null && project.gallery) {
            setSelectedImage((prev) => (prev === 0 ? project.gallery!.length - 1 : prev! - 1));
        }
    }, [selectedImage, project.gallery]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImage === null) return;
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "Escape") setSelectedImage(null);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImage, handleNext, handlePrev]);

    return (
        <div className="bg-brand-navy min-h-screen text-white">
            {/* Hero Section */}
            <section className="relative h-[80vh] md:h-[90vh] overflow-hidden">
                <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-brand-navy" />
                </motion.div>

                {/* Back Link */}
                <div className="absolute top-24 left-6 md:left-12 z-20">
                    <Link href="/projects" className="inline-flex items-center gap-2 text-white/80 hover:text-brand-gold transition-colors text-sm uppercase tracking-widest font-bold backdrop-blur-md bg-black/20 px-4 py-2 rounded-full border border-white/10 hover:border-brand-gold/50">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Projects
                    </Link>
                </div>

                {/* Hero Content */}
                <div className="absolute bottom-0 left-0 w-full z-10 pb-24 md:pb-32 px-6 md:px-12">
                    <div className="container max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl"
                        >
                            <span className="text-brand-gold text-sm md:text-base uppercase tracking-[0.2em] font-bold mb-4 block">
                                {project.category}
                            </span>
                            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.9]">
                                {project.title}
                            </h1>
                            <div className="flex flex-wrap gap-6 text-white/70 text-sm md:text-base">
                                <span className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-brand-gold" />
                                    {project.location}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-brand-gold" />
                                    {project.year}
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Angular Divider */}
                <div className="absolute bottom-0 left-0 w-full text-brand-navy z-20">
                    <AngularDividerBottom />
                </div>
            </section>

            {/* Project Overview */}
            <section className="relative py-20 px-6 md:px-12">
                <div className="container max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
                        {/* Left Column: Description */}
                        <div className="md:col-span-8">
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="font-display text-3xl md:text-4xl font-bold mb-8"
                            >
                                Project <span className="text-brand-gold">Overview</span>
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-gray-300 text-lg leading-relaxed mb-8"
                            >
                                {project.description}
                                <br /><br />
                                This project represents a milestone in architectural innovation, blending functionality with aesthetic excellence. Every detail has been meticulously crafted to create a space that inspires and endures.
                            </motion.p>
                            
                            <div className="flex flex-wrap gap-3 mt-8">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="px-4 py-2 border border-white/20 text-white/70 text-sm uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Key Details */}
                        <div className="md:col-span-4 space-y-8">
                            <div className="bg-brand-light p-8 border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 rounded-full blur-2xl group-hover:bg-brand-gold/20 transition-colors" />
                                <h4 className="text-lg font-bold mb-6 font-display border-b border-white/10 pb-4">Key Specifications</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4">
                                        <Building2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                                        <div>
                                            <span className="block text-xs uppercase tracking-wider text-white/50">Details</span>
                                            <span className="text-white font-medium">{project.details}</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <Layers className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                                        <div>
                                            <span className="block text-xs uppercase tracking-wider text-white/50">Status</span>
                                            <span className="text-white font-medium">Completed</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                                        <div>
                                            <span className="block text-xs uppercase tracking-wider text-white/50">Certifications</span>
                                            <span className="text-white font-medium">LEED Gold Pending</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            {project.gallery && project.gallery.length > 0 && (
                <section className="relative py-20 bg-brand-light overflow-hidden">
                    <div className="absolute top-0 left-0 w-full text-brand-navy z-20 -mt-1 transform rotate-180">
                        <AngularDividerBottom />
                    </div>
                    
                    <div className="container max-w-7xl mx-auto px-6 relative z-10 pt-20">
                        <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-display text-4xl font-bold mb-12 text-center"
                        >
                            Gallery <span className="text-brand-gold">Showcase</span>
                        </motion.h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.gallery.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`relative h-[300px] md:h-[400px] group overflow-hidden cursor-pointer ${idx === 0 ? 'md:col-span-2 md:h-[500px]' : ''}`}
                                    onClick={() => setSelectedImage(idx)}
                                >
                                    <Image
                                        src={img}
                                        alt={`${project.title} Gallery ${idx + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                                    
                                    {/* Zoom Icon Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                            <ZoomIn className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Next Project CTA (Simplified) */}
            <section className="py-24 bg-brand-navy border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
                        Ready to build your <span className="text-brand-gold">vision</span>?
                    </h2>
                    <Link href="/contact" className="inline-block px-8 py-4 bg-brand-gold text-black font-bold uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-all duration-300">
                        Start a Project
                    </Link>
                </div>
            </section>
            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage !== null && project.gallery && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Close Button */}
                        <button 
                            className="absolute top-6 right-6 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            className="absolute left-6 z-50 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors hidden md:block"
                            onClick={handlePrev}
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                        
                        <button
                            className="absolute right-6 z-50 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors hidden md:block"
                            onClick={handleNext}
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        {/* Image Container */}
                        <motion.div 
                            className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4 md:mx-20"
                            onClick={(e) => e.stopPropagation()}
                            key={selectedImage}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={project.gallery[selectedImage]}
                                alt={`${project.title} - View ${selectedImage + 1}`}
                                fill
                                className="object-contain"
                                priority
                                quality={100}
                            />
                            
                            {/* Counter */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white text-sm font-medium tracking-wider border border-white/10">
                                {selectedImage + 1} / {project.gallery.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
