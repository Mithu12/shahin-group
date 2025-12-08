'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
    Home, Building2, Briefcase, Handshake, HardHat, Truck,
    ArrowRight, ArrowLeft, Sparkles, CheckCircle, Send,
    MapPin, Phone, Mail, Calendar, DollarSign, FileText,
    Users, Target, Globe2, ChevronRight
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

// Inquiry categories
const inquiryCategories = [
    {
        id: 'property',
        icon: Home,
        title: 'Property Purchase',
        subtitle: 'Buy your dream home',
        description: 'Looking to purchase a residential property? Fill out our inquiry form and our sales team will connect you with available units.',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
        color: 'from-emerald-500/20',
        fields: ['propertyType', 'budget', 'location', 'bedrooms', 'timeline']
    },
    {
        id: 'commercial',
        icon: Building2,
        title: 'Commercial Space',
        subtitle: 'Office & retail spaces',
        description: 'Find the perfect commercial space for your business. From offices to retail outlets, we have options for every need.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        color: 'from-blue-500/20',
        fields: ['spaceType', 'size', 'location', 'budget', 'timeline']
    },
    {
        id: 'construction',
        icon: HardHat,
        title: 'Construction Services',
        subtitle: 'Build with excellence',
        description: 'Need construction services for your project? Our experienced team delivers quality construction on time and within budget.',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
        color: 'from-orange-500/20',
        fields: ['projectType', 'projectSize', 'location', 'budget', 'startDate']
    },
    {
        id: 'partnership',
        icon: Handshake,
        title: 'Business Partnership',
        subtitle: 'Grow together',
        description: 'Interested in partnering with Shahin Group? Explore joint ventures, investment opportunities, and strategic alliances.',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
        color: 'from-purple-500/20',
        fields: ['partnershipType', 'companyName', 'industry', 'proposalBrief']
    },
    {
        id: 'landowner',
        icon: Target,
        title: 'Landowner Inquiry',
        subtitle: 'Develop your land',
        description: 'Own land and looking for development partners? Submit your land details and explore development opportunities.',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop',
        color: 'from-green-500/20',
        fields: ['landLocation', 'landSize', 'landType', 'developmentInterest']
    },
    {
        id: 'supplier',
        icon: Truck,
        title: 'Supplier Registration',
        subtitle: 'Become a vendor',
        description: 'Register as a supplier or vendor for Shahin Group. We work with quality suppliers across various categories.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
        color: 'from-cyan-500/20',
        fields: ['companyName', 'supplyCategory', 'experience', 'catalogueLink']
    },
];

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
        <section ref={ref} className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=2070&auto=format&fit=crop"
                    alt="Inquiries"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy" />
            </motion.div>

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 z-1 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            {/* Content */}
            <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
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
                        <FileText className="w-4 h-4" />
                        Submit Your Inquiry
                        <FileText className="w-4 h-4" />
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
                    >
                        Business <span className="text-brand-gold">Inquiries</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed"
                    >
                        Select your inquiry type below and our dedicated team will get back
                        to you within 24 hours.
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 border-l-2 border-t-2 border-brand-gold/30 z-10" />
            <div className="absolute bottom-20 right-10 w-32 h-32 border-r-2 border-b-2 border-brand-gold/30 z-10" />
        </section>
    );
}

// Inquiry Categories Grid
function InquiryCategoriesSection({ onSelectCategory }: { onSelectCategory: (id: string) => void }) {
    return (
        <section className="relative py-24 bg-brand-navy overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-px w-12 bg-brand-gold" />
                        <span className="text-brand-gold text-sm uppercase tracking-[0.2em] font-medium">Choose Category</span>
                        <div className="h-px w-12 bg-brand-gold" />
                    </motion.div>

                    <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                        How Can We <span className="text-brand-gold">Help You</span>?
                    </motion.h2>

                    <motion.p variants={fadeInUp} className="text-white/60 text-lg max-w-2xl mx-auto">
                        Select the category that best matches your inquiry and we'll connect you with the right team
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {inquiryCategories.map((category, index) => (
                        <motion.button
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => onSelectCategory(category.id)}
                            className="group relative overflow-hidden text-left"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} to-brand-navy/95 group-hover:to-brand-navy/90 transition-all duration-500`} />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-8 h-full min-h-[280px] flex flex-col">
                                <div className="w-16 h-16 bg-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/30 transition-colors">
                                    <category.icon className="w-8 h-8 text-brand-gold" />
                                </div>

                                <div className="flex-1">
                                    <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">
                                        {category.title}
                                    </h3>
                                    <p className="text-brand-gold/80 text-sm uppercase tracking-wider mb-3">{category.subtitle}</p>
                                    <p className="text-white/60 text-sm leading-relaxed">{category.description}</p>
                                </div>

                                <div className="flex items-center gap-2 text-brand-gold font-bold uppercase tracking-wider text-sm mt-6 group-hover:gap-4 transition-all">
                                    Start Inquiry
                                    <ArrowRight className="w-4 h-4" />
                                </div>

                                {/* Decorative Corner */}
                                <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-brand-gold/20 group-hover:border-brand-gold/50 transition-colors" />
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Inquiry Form Component
function InquiryForm({ categoryId, onBack }: { categoryId: string, onBack: () => void }) {
    const category = inquiryCategories.find(c => c.id === categoryId)!;
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        // Personal Info
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        // Category-specific fields
        propertyType: '',
        budget: '',
        location: '',
        bedrooms: '',
        timeline: '',
        spaceType: '',
        size: '',
        projectType: '',
        projectSize: '',
        startDate: '',
        partnershipType: '',
        companyName: '',
        industry: '',
        proposalBrief: '',
        landLocation: '',
        landSize: '',
        landType: '',
        developmentInterest: '',
        supplyCategory: '',
        experience: '',
        catalogueLink: '',
        // Common
        message: '',
        consent: false,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const updateFormData = (field: string, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    if (isSubmitted) {
        return (
            <section className="relative py-32 bg-brand-navy overflow-hidden">
                <div className="container max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white/5 border border-white/10 p-16"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-8"
                        >
                            <CheckCircle className="w-12 h-12 text-black" />
                        </motion.div>
                        <h2 className="font-display text-4xl font-bold text-white mb-4">Inquiry Submitted!</h2>
                        <p className="text-white/60 text-lg mb-4 max-w-lg mx-auto">
                            Thank you for your {category.title.toLowerCase()} inquiry. Our team will review your submission and contact you within 24-48 hours.
                        </p>
                        <p className="text-brand-gold mb-8">Reference ID: INQ-{Date.now().toString().slice(-8)}</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                onClick={onBack}
                                className="inline-flex items-center gap-3 bg-brand-gold text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-brand-gold/90 transition-all duration-300"
                            >
                                Submit Another Inquiry
                            </button>
                            <Link href="/" className="inline-flex items-center gap-3 bg-white/5 text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/10 transition-all duration-300">
                                Back to Home
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="relative py-24 bg-brand-navy overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/95 to-brand-navy" />
            </div>

            <div className="container max-w-4xl mx-auto px-6 relative z-10">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={onBack}
                    className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Categories
                </motion.button>

                {/* Form Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="w-20 h-20 bg-brand-gold/20 flex items-center justify-center mx-auto mb-6">
                        <category.icon className="w-10 h-10 text-brand-gold" />
                    </div>
                    <h2 className="font-display text-4xl font-bold text-white mb-3">{category.title} Inquiry</h2>
                    <p className="text-white/60">{category.description}</p>
                </motion.div>

                {/* Progress Steps */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-center gap-4 mb-12"
                >
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= s ? 'bg-brand-gold text-black' : 'bg-white/10 text-white/50'
                                }`}>
                                {step > s ? <CheckCircle className="w-5 h-5" /> : s}
                            </div>
                            {s < 3 && (
                                <div className={`w-16 h-px transition-all ${step > s ? 'bg-brand-gold' : 'bg-white/20'
                                    }`} />
                            )}
                        </div>
                    ))}
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12"
                >
                    <form onSubmit={handleSubmit}>
                        <AnimatePresence mode="wait">
                            {/* Step 1: Personal Information */}
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h3 className="text-white font-bold text-xl mb-6">Personal Information</h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-white/70 text-sm mb-2">First Name *</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.firstName}
                                                onChange={(e) => updateFormData('firstName', e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white/70 text-sm mb-2">Last Name *</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.lastName}
                                                onChange={(e) => updateFormData('lastName', e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-white/70 text-sm mb-2">Email *</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => updateFormData('email', e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white/70 text-sm mb-2">Phone *</label>
                                            <input
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={(e) => updateFormData('phone', e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                placeholder="+880 1XXX-XXXXXX"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-end pt-6">
                                        <button
                                            type="button"
                                            onClick={() => setStep(2)}
                                            className="inline-flex items-center gap-3 bg-brand-gold text-black px-8 py-3 font-bold uppercase tracking-wider hover:bg-brand-gold/90 transition-all duration-300"
                                        >
                                            Next Step
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 2: Category-Specific Fields */}
                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h3 className="text-white font-bold text-xl mb-6">{category.title} Details</h3>

                                    {/* Property Purchase Fields */}
                                    {categoryId === 'property' && (
                                        <>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Property Type *</label>
                                                    <select
                                                        required
                                                        value={formData.propertyType}
                                                        onChange={(e) => updateFormData('propertyType', e.target.value)}
                                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                    >
                                                        <option value="">Select type</option>
                                                        <option value="apartment">Apartment</option>
                                                        <option value="duplex">Duplex</option>
                                                        <option value="penthouse">Penthouse</option>
                                                        <option value="villa">Villa</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Budget Range *</label>
                                                    <select
                                                        required
                                                        value={formData.budget}
                                                        onChange={(e) => updateFormData('budget', e.target.value)}
                                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                    >
                                                        <option value="">Select budget</option>
                                                        <option value="under-1cr">Under 1 Crore</option>
                                                        <option value="1-2cr">1 - 2 Crore</option>
                                                        <option value="2-5cr">2 - 5 Crore</option>
                                                        <option value="above-5cr">Above 5 Crore</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Preferred Location *</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.location}
                                                        onChange={(e) => updateFormData('location', e.target.value)}
                                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                        placeholder="e.g., Gulshan, Banani, Dhanmondi"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Bedrooms</label>
                                                    <select
                                                        value={formData.bedrooms}
                                                        onChange={(e) => updateFormData('bedrooms', e.target.value)}
                                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                    >
                                                        <option value="">Any</option>
                                                        <option value="2">2 Bedrooms</option>
                                                        <option value="3">3 Bedrooms</option>
                                                        <option value="4">4 Bedrooms</option>
                                                        <option value="5+">5+ Bedrooms</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-white/70 text-sm mb-2">Purchase Timeline</label>
                                                <select
                                                    value={formData.timeline}
                                                    onChange={(e) => updateFormData('timeline', e.target.value)}
                                                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                >
                                                    <option value="">Select timeline</option>
                                                    <option value="immediate">Immediate</option>
                                                    <option value="1-3months">1-3 Months</option>
                                                    <option value="3-6months">3-6 Months</option>
                                                    <option value="6-12months">6-12 Months</option>
                                                    <option value="exploring">Just Exploring</option>
                                                </select>
                                            </div>
                                        </>
                                    )}

                                    {/* Commercial Space Fields */}
                                    {categoryId === 'commercial' && (
                                        <>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Space Type *</label>
                                                    <select
                                                        required
                                                        value={formData.spaceType}
                                                        onChange={(e) => updateFormData('spaceType', e.target.value)}
                                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                    >
                                                        <option value="">Select type</option>
                                                        <option value="office">Office Space</option>
                                                        <option value="retail">Retail Shop</option>
                                                        <option value="showroom">Showroom</option>
                                                        <option value="warehouse">Warehouse</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Space Size (sq ft) *</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.size}
                                                        onChange={(e) => updateFormData('size', e.target.value)}
                                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                        placeholder="e.g., 2000-3000"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Preferred Location *</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.location}
                                                        onChange={(e) => updateFormData('location', e.target.value)}
                                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                        placeholder="e.g., Motijheel, Gulshan"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Budget (Monthly)</label>
                                                    <input
                                                        type="text"
                                                        value={formData.budget}
                                                        onChange={(e) => updateFormData('budget', e.target.value)}
                                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                        placeholder="e.g., 50,000 - 100,000 BDT"
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {/* Construction Fields */}
                                    {categoryId === 'construction' && (
                                        <>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Project Type *</label>
                                                    <select
                                                        required
                                                        value={formData.projectType}
                                                        onChange={(e) => updateFormData('projectType', e.target.value)}
                                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                    >
                                                        <option value="">Select type</option>
                                                        <option value="residential">Residential Building</option>
                                                        <option value="commercial">Commercial Building</option>
                                                        <option value="industrial">Industrial Facility</option>
                                                        <option value="renovation">Renovation/Remodeling</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Project Size</label>
                                                    <input
                                                        type="text"
                                                        value={formData.projectSize}
                                                        onChange={(e) => updateFormData('projectSize', e.target.value)}
                                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                        placeholder="e.g., 10,000 sq ft"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Project Location *</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.location}
                                                        onChange={(e) => updateFormData('location', e.target.value)}
                                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                        placeholder="Project location"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Estimated Budget</label>
                                                    <input
                                                        type="text"
                                                        value={formData.budget}
                                                        onChange={(e) => updateFormData('budget', e.target.value)}
                                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                        placeholder="e.g., 5-10 Crore"
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {/* Partnership Fields */}
                                    {categoryId === 'partnership' && (
                                        <>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Partnership Type *</label>
                                                    <select
                                                        required
                                                        value={formData.partnershipType}
                                                        onChange={(e) => updateFormData('partnershipType', e.target.value)}
                                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                    >
                                                        <option value="">Select type</option>
                                                        <option value="jointVenture">Joint Venture</option>
                                                        <option value="investment">Investment Opportunity</option>
                                                        <option value="strategic">Strategic Alliance</option>
                                                        <option value="franchise">Franchise Partnership</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Company Name *</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.companyName}
                                                        onChange={(e) => updateFormData('companyName', e.target.value)}
                                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                        placeholder="Your company name"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-white/70 text-sm mb-2">Industry</label>
                                                <input
                                                    type="text"
                                                    value={formData.industry}
                                                    onChange={(e) => updateFormData('industry', e.target.value)}
                                                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                    placeholder="Your industry"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-white/70 text-sm mb-2">Brief Proposal *</label>
                                                <textarea
                                                    required
                                                    value={formData.proposalBrief}
                                                    onChange={(e) => updateFormData('proposalBrief', e.target.value)}
                                                    rows={4}
                                                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors resize-none"
                                                    placeholder="Describe your partnership proposal..."
                                                />
                                            </div>
                                        </>
                                    )}

                                    {/* Landowner Fields */}
                                    {categoryId === 'landowner' && (
                                        <>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Land Location *</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.landLocation}
                                                        onChange={(e) => updateFormData('landLocation', e.target.value)}
                                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                        placeholder="Full land address"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Land Size (Katha/Bigha) *</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.landSize}
                                                        onChange={(e) => updateFormData('landSize', e.target.value)}
                                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                        placeholder="e.g., 10 Katha"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Land Type *</label>
                                                    <select
                                                        required
                                                        value={formData.landType}
                                                        onChange={(e) => updateFormData('landType', e.target.value)}
                                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                    >
                                                        <option value="">Select type</option>
                                                        <option value="residential">Residential</option>
                                                        <option value="commercial">Commercial</option>
                                                        <option value="mixed">Mixed Use</option>
                                                        <option value="industrial">Industrial</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Development Interest *</label>
                                                    <select
                                                        required
                                                        value={formData.developmentInterest}
                                                        onChange={(e) => updateFormData('developmentInterest', e.target.value)}
                                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                    >
                                                        <option value="">Select interest</option>
                                                        <option value="jointDevelopment">Joint Development</option>
                                                        <option value="sell">Sell Land</option>
                                                        <option value="lease">Lease for Development</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {/* Supplier Fields */}
                                    {categoryId === 'supplier' && (
                                        <>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Company Name *</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.companyName}
                                                        onChange={(e) => updateFormData('companyName', e.target.value)}
                                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                        placeholder="Your company name"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Supply Category *</label>
                                                    <select
                                                        required
                                                        value={formData.supplyCategory}
                                                        onChange={(e) => updateFormData('supplyCategory', e.target.value)}
                                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                    >
                                                        <option value="">Select category</option>
                                                        <option value="construction">Construction Materials</option>
                                                        <option value="electrical">Electrical Supplies</option>
                                                        <option value="plumbing">Plumbing & Sanitary</option>
                                                        <option value="finishing">Finishing Materials</option>
                                                        <option value="machinery">Machinery & Equipment</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Years of Experience</label>
                                                    <input
                                                        type="text"
                                                        value={formData.experience}
                                                        onChange={(e) => updateFormData('experience', e.target.value)}
                                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                        placeholder="e.g., 10+ years"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Product Catalogue Link</label>
                                                    <input
                                                        type="url"
                                                        value={formData.catalogueLink}
                                                        onChange={(e) => updateFormData('catalogueLink', e.target.value)}
                                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                                        placeholder="https://..."
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    <div className="flex justify-between pt-6">
                                        <button
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                                        >
                                            <ArrowLeft className="w-5 h-5" />
                                            Previous
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setStep(3)}
                                            className="inline-flex items-center gap-3 bg-brand-gold text-black px-8 py-3 font-bold uppercase tracking-wider hover:bg-brand-gold/90 transition-all duration-300"
                                        >
                                            Next Step
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 3: Additional Message & Submit */}
                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h3 className="text-white font-bold text-xl mb-6">Additional Information</h3>

                                    <div>
                                        <label className="block text-white/70 text-sm mb-2">Additional Message</label>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => updateFormData('message', e.target.value)}
                                            rows={5}
                                            className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors resize-none"
                                            placeholder="Any additional details you'd like to share..."
                                        />
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            id="consent"
                                            required
                                            checked={formData.consent}
                                            onChange={(e) => updateFormData('consent', e.target.checked)}
                                            className="mt-1 w-5 h-5 bg-white/5 border border-white/20 rounded-none accent-brand-gold"
                                        />
                                        <label htmlFor="consent" className="text-white/60 text-sm">
                                            I consent to Shahin Group processing my personal data to respond to this inquiry.
                                            I understand that my information will be handled according to the privacy policy. *
                                        </label>
                                    </div>

                                    <div className="flex justify-between pt-6">
                                        <button
                                            type="button"
                                            onClick={() => setStep(2)}
                                            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                                        >
                                            <ArrowLeft className="w-5 h-5" />
                                            Previous
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="inline-flex items-center gap-3 bg-brand-gold text-black px-8 py-3 font-bold uppercase tracking-wider hover:bg-brand-gold/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                                    Submitting...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    Submit Inquiry
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

// Quick Stats Section
function StatsSection() {
    const stats = [
        { value: '24hr', label: 'Response Time' },
        { value: '98%', label: 'Satisfaction Rate' },
        { value: '1000+', label: 'Inquiries Handled' },
        { value: '50+', label: 'Partnerships Formed' },
    ];

    return (
        <section className="relative py-16 bg-brand-gold">
            <div className="container max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-black mb-2">{stat.value}</div>
                            <div className="text-black/60 text-sm uppercase tracking-wider">{stat.label}</div>
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
        <section className="relative py-24 bg-black overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                    alt="Office"
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
                >
                    <Sparkles className="w-10 h-10 text-brand-gold mx-auto mb-6" />
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                        Prefer to Talk Directly?
                    </h2>
                    <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
                        Our team is available to discuss your needs over the phone or schedule an in-person meeting at our office.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="tel:+880288155551" className="inline-flex items-center gap-3 bg-brand-gold text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-brand-gold/90 transition-all duration-300">
                            <Phone className="w-5 h-5" />
                            Call +880 2-8815551
                        </a>
                        <Link href="/contact" className="inline-flex items-center gap-3 bg-transparent border-2 border-white/30 text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                            Visit Contact Page
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Main Inquiries Page Component
export default function InquiriesPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    return (
        <div className="bg-brand-navy">
            <HeroSection />

            {selectedCategory ? (
                <InquiryForm
                    categoryId={selectedCategory}
                    onBack={() => setSelectedCategory(null)}
                />
            ) : (
                <>
                    <InquiryCategoriesSection onSelectCategory={setSelectedCategory} />
                    <StatsSection />
                </>
            )}

            <CTASection />
        </div>
    );
}
