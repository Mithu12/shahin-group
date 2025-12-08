'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Mail, Phone, MapPin, Clock, Send, ChevronDown,
    Building2, Home, Briefcase, HelpCircle, MessageSquare,
    ArrowRight, Sparkles, CheckCircle, Globe2, Users
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

// Inquiry types
const inquiryTypes = [
    { id: 'property', icon: Home, title: 'Property Inquiry', description: 'Interested in our residential or commercial properties' },
    { id: 'partnership', icon: Briefcase, title: 'Business Partnership', description: 'Explore collaboration and partnership opportunities' },
    { id: 'career', icon: Users, title: 'Career Inquiry', description: 'Questions about job opportunities and HR' },
    { id: 'general', icon: HelpCircle, title: 'General Inquiry', description: 'Other questions or feedback' },
];

// Office locations
const offices = [
    {
        name: 'Head Office - Dhaka',
        address: 'Shahin Tower, House 45, Road 11, Banani, Dhaka 1213, Bangladesh',
        phone: '+880 2-8815551',
        email: 'info@shahingroup.com',
        hours: 'Sun - Thu: 9:00 AM - 6:00 PM',
        isPrimary: true,
    },
    {
        name: 'Chattogram Office',
        address: 'Shahin Plaza, 156 Station Road, Chattogram 4000, Bangladesh',
        phone: '+880 31-2856789',
        email: 'ctg@shahingroup.com',
        hours: 'Sun - Thu: 9:00 AM - 6:00 PM',
        isPrimary: false,
    },
    {
        name: 'Sylhet Office',
        address: 'Shahin Center, Zindabazar, Sylhet 3100, Bangladesh',
        phone: '+880 821-715678',
        email: 'sylhet@shahingroup.com',
        hours: 'Sun - Thu: 9:00 AM - 5:00 PM',
        isPrimary: false,
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
                    src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
                    alt="Contact Shahin Group"
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
                        <MessageSquare className="w-4 h-4" />
                        Get In Touch
                        <MessageSquare className="w-4 h-4" />
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
                    >
                        Contact <span className="text-brand-gold">Us</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed"
                    >
                        Have a question or want to discuss a project? We're here to help you
                        bring your vision to life.
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 border-l-2 border-t-2 border-brand-gold/30 z-10" />
            <div className="absolute bottom-20 right-10 w-32 h-32 border-r-2 border-b-2 border-brand-gold/30 z-10" />
        </section>
    );
}

// Quick Contact Bar
function QuickContactBar() {
    const contactInfo = [
        { icon: Phone, label: 'Call Us', value: '+880 2-8815551', href: 'tel:+880288155551' },
        { icon: Mail, label: 'Email Us', value: 'info@shahingroup.com', href: 'mailto:info@shahingroup.com' },
        { icon: Clock, label: 'Office Hours', value: 'Sun - Thu: 9AM - 6PM', href: null },
        { icon: Globe2, label: 'Locations', value: '3 Offices Nationwide', href: '#offices' },
    ];

    return (
        <section className="relative -mt-16 z-20 px-6">
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {contactInfo.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 + index * 0.1 }}
                        >
                            {item.href ? (
                                <a
                                    href={item.href}
                                    className="block bg-brand-gold p-6 group hover:bg-brand-gold/90 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center group-hover:bg-black/20 transition-colors">
                                            <item.icon className="w-6 h-6 text-black" />
                                        </div>
                                        <div>
                                            <div className="text-black/60 text-sm uppercase tracking-wider">{item.label}</div>
                                            <div className="text-black font-bold">{item.value}</div>
                                        </div>
                                    </div>
                                </a>
                            ) : (
                                <div className="bg-brand-gold p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center">
                                            <item.icon className="w-6 h-6 text-black" />
                                        </div>
                                        <div>
                                            <div className="text-black/60 text-sm uppercase tracking-wider">{item.label}</div>
                                            <div className="text-black font-bold">{item.value}</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// Main Contact Form Section
function ContactFormSection() {
    const [selectedInquiry, setSelectedInquiry] = useState('property');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        newsletter: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
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
                        <h2 className="font-display text-4xl font-bold text-white mb-4">Message Sent!</h2>
                        <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto">
                            Thank you for reaching out. Our team will review your inquiry and get back to you within 24-48 hours.
                        </p>
                        <button
                            onClick={() => {
                                setIsSubmitted(false);
                                setFormData({
                                    firstName: '',
                                    lastName: '',
                                    email: '',
                                    phone: '',
                                    company: '',
                                    subject: '',
                                    message: '',
                                    newsletter: false,
                                });
                            }}
                            className="inline-flex items-center gap-3 bg-brand-gold text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-brand-gold/90 transition-all duration-300"
                        >
                            Send Another Message
                        </button>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="relative py-32 bg-brand-navy overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent" />
            </div>

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left - Inquiry Types */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-brand-gold" />
                            <span className="text-brand-gold text-sm uppercase tracking-[0.2em] font-medium">How Can We Help?</span>
                        </motion.div>

                        <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Select Your <span className="text-brand-gold">Inquiry Type</span>
                        </motion.h2>

                        <motion.p variants={fadeInUp} className="text-white/60 text-lg mb-10">
                            Choose the category that best matches your inquiry so we can connect you with the right team.
                        </motion.p>

                        {/* Inquiry Type Cards */}
                        <div className="space-y-4">
                            {inquiryTypes.map((type, index) => (
                                <motion.button
                                    key={type.id}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    onClick={() => setSelectedInquiry(type.id)}
                                    className={`w-full text-left p-6 border transition-all duration-300 group ${selectedInquiry === type.id
                                            ? 'bg-brand-gold/10 border-brand-gold'
                                            : 'bg-white/5 border-white/10 hover:border-white/30'
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-14 h-14 flex items-center justify-center transition-colors ${selectedInquiry === type.id
                                                ? 'bg-brand-gold text-black'
                                                : 'bg-white/10 text-white group-hover:bg-white/20'
                                            }`}>
                                            <type.icon className="w-7 h-7" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={`font-bold text-lg mb-1 transition-colors ${selectedInquiry === type.id ? 'text-brand-gold' : 'text-white'
                                                }`}>
                                                {type.title}
                                            </h3>
                                            <p className="text-white/50 text-sm">{type.description}</p>
                                        </div>
                                        <ChevronDown className={`w-6 h-6 transition-all ${selectedInquiry === type.id
                                                ? 'text-brand-gold rotate-180'
                                                : 'text-white/30 -rotate-90'
                                            }`} />
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10">
                            <h3 className="font-display text-2xl font-bold text-white mb-2">Send Us a Message</h3>
                            <p className="text-white/50 mb-8">Fill out the form below and we'll get back to you shortly.</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-white/70 text-sm mb-2">First Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
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
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                {/* Contact Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-white/70 text-sm mb-2">Email *</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white/70 text-sm mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                            placeholder="+880 1XXX-XXXXXX"
                                        />
                                    </div>
                                </div>

                                {/* Company */}
                                <div>
                                    <label className="block text-white/70 text-sm mb-2">Company / Organization</label>
                                    <input
                                        type="text"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                        placeholder="Your company name"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="block text-white/70 text-sm mb-2">Subject *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-white/70 text-sm mb-2">Message *</label>
                                    <textarea
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={5}
                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                    />
                                </div>

                                {/* Newsletter */}
                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        id="newsletter"
                                        checked={formData.newsletter}
                                        onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                                        className="mt-1 w-5 h-5 bg-white/5 border border-white/20 rounded-none accent-brand-gold"
                                    />
                                    <label htmlFor="newsletter" className="text-white/60 text-sm">
                                        Subscribe to our newsletter for updates on new projects, industry insights, and exclusive offers.
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-brand-gold text-black py-4 font-bold uppercase tracking-wider hover:bg-brand-gold/90 transition-all duration-300 inline-flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Office Locations Section
function OfficeLocationsSection() {
    return (
        <section id="offices" className="relative py-32 bg-gradient-to-b from-brand-navy to-black overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-6">
                        <Building2 className="w-5 h-5 text-brand-gold" />
                        <span className="text-brand-gold text-sm uppercase tracking-[0.2em] font-medium">Our Offices</span>
                    </motion.div>

                    <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                        Visit Us <span className="text-brand-gold">Nationwide</span>
                    </motion.h2>

                    <motion.p variants={fadeInUp} className="text-white/60 text-lg max-w-2xl mx-auto">
                        With offices across Bangladesh, we're always close by to serve you better
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {offices.map((office, index) => (
                        <motion.div
                            key={office.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className={`relative group ${office.isPrimary ? 'md:col-span-1' : ''}`}
                        >
                            <div className={`h-full p-8 border transition-all duration-500 ${office.isPrimary
                                    ? 'bg-brand-gold/10 border-brand-gold'
                                    : 'bg-white/5 border-white/10 hover:border-brand-gold/30'
                                }`}>
                                {office.isPrimary && (
                                    <span className="absolute -top-3 left-6 bg-brand-gold text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
                                        Head Office
                                    </span>
                                )}

                                <h3 className="font-display text-xl font-bold text-white mb-6">{office.name}</h3>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                                        <p className="text-white/70 text-sm leading-relaxed">{office.address}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                                        <a href={`tel:${office.phone}`} className="text-white/70 text-sm hover:text-brand-gold transition-colors">
                                            {office.phone}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                                        <a href={`mailto:${office.email}`} className="text-white/70 text-sm hover:text-brand-gold transition-colors">
                                            {office.email}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-brand-gold shrink-0" />
                                        <p className="text-white/70 text-sm">{office.hours}</p>
                                    </div>
                                </div>

                                <button className="mt-6 inline-flex items-center gap-2 text-brand-gold text-sm uppercase tracking-wider font-bold group-hover:gap-3 transition-all">
                                    Get Directions
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Map Section
function MapSection() {
    return (
        <section className="relative h-[500px] bg-black">
            {/* Placeholder Map - Replace with actual Google Maps integration */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                    alt="Map Location"
                    fill
                    className="object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            {/* Map Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center bg-brand-navy/90 backdrop-blur-sm border border-white/10 p-12 max-w-md"
                >
                    <MapPin className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                    <h3 className="font-display text-2xl font-bold text-white mb-3">Find Us on the Map</h3>
                    <p className="text-white/60 mb-6">
                        Visit our head office in Banani, Dhaka for a personal consultation
                    </p>
                    <a
                        href="https://maps.google.com/?q=Banani,Dhaka,Bangladesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-brand-gold text-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-brand-gold/90 transition-all duration-300 group"
                    >
                        Open in Google Maps
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

// FAQ Section
function FAQSection() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const faqs = [
        {
            question: 'What types of properties does Shahin Group develop?',
            answer: 'We develop a wide range of properties including luxury residential apartments, commercial buildings, industrial facilities, and mixed-use developments. Our portfolio includes projects across major cities in Bangladesh.'
        },
        {
            question: 'How can I schedule a property viewing?',
            answer: 'You can schedule a property viewing by filling out the contact form above, calling our sales hotline, or visiting any of our offices. Our team will arrange a convenient time for you to visit the property.'
        },
        {
            question: 'What is the typical response time for inquiries?',
            answer: 'We aim to respond to all inquiries within 24-48 business hours. For urgent matters, we recommend calling our main office directly for immediate assistance.'
        },
        {
            question: 'Do you offer payment plans or financing options?',
            answer: 'Yes, we offer flexible payment plans for most of our residential projects. We also have partnerships with leading banks to provide competitive financing options. Contact our sales team for detailed information.'
        },
        {
            question: 'How can I apply for a job at Shahin Group?',
            answer: 'Visit our Careers page to view current job openings and submit your application online. You can also send your resume to our HR department for consideration for future opportunities.'
        },
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

            <div className="container max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-6">
                        <HelpCircle className="w-5 h-5 text-brand-gold" />
                        <span className="text-brand-gold text-sm uppercase tracking-[0.2em] font-medium">FAQ</span>
                    </motion.div>

                    <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                        Frequently Asked <span className="text-brand-gold">Questions</span>
                    </motion.h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-white/10 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white/5 hover:bg-white/10 transition-colors"
                            >
                                <span className="text-white font-bold pr-4">{faq.question}</span>
                                <motion.div
                                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-6 h-6 text-brand-gold shrink-0" />
                                </motion.div>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: openFaq === index ? 'auto' : 0,
                                    opacity: openFaq === index ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 text-white/60 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-white/50 mb-4">Still have questions?</p>
                    <Link href="/careers" className="inline-flex items-center gap-2 text-brand-gold font-bold uppercase tracking-wider hover:gap-3 transition-all">
                        Contact Our Team
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

// CTA Section
function CTASection() {
    return (
        <section className="relative py-24 bg-brand-gold overflow-hidden">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Sparkles className="w-10 h-10 text-black/50 mx-auto mb-6" />

                    <h2 className="font-display text-4xl md:text-5xl font-bold text-black mb-6">
                        Let's Build Something Great Together
                    </h2>

                    <p className="text-black/70 text-lg mb-10 max-w-2xl mx-auto">
                        Whether you're looking for your dream home or a business partnership,
                        we're here to make it happen.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="tel:+880288155551" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-black/80 transition-all duration-300 group">
                            <Phone className="w-5 h-5" />
                            Call Now
                        </a>
                        <Link href="/projects" className="inline-flex items-center gap-3 bg-transparent border-2 border-black text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-black/10 transition-all duration-300">
                            View Projects
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Main Contact Page Component
export default function ContactPage() {
    return (
        <div className="bg-brand-navy">
            <HeroSection />
            <QuickContactBar />
            <ContactFormSection />
            <OfficeLocationsSection />
            <MapSection />
            <FAQSection />
            <CTASection />
        </div>
    );
}
