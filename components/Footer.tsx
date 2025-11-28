'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="relative bg-brand-navy text-white pt-24 pb-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
                <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-transparent to-transparent" />
            </div>

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                {/* Top Section: CTA & Back to Top */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-12">
                    <div className="max-w-2xl">
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Ready to Build the <span className="text-brand-gold italic">Future?</span>
                        </h2>
                        <p className="font-body text-gray-400 text-lg font-light">
                            Partner with Shahin Group for visionary architecture and sustainable development.
                        </p>
                    </div>
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-3 px-6 py-3 border border-white/20 hover:border-brand-gold transition-colors duration-300 mt-8 md:mt-0"
                    >
                        <span className="text-sm uppercase tracking-widest text-white group-hover:text-brand-gold transition-colors">Back to Top</span>
                        <div className="p-2 bg-white/5 rounded-full group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                            <ArrowUp className="w-4 h-4" />
                        </div>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="block mb-8">
                            <h3 className="font-display text-3xl font-bold tracking-widest text-white">
                                SHAHIN <span className="text-brand-gold">GROUP</span>
                            </h3>
                            <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mt-2">
                                Visionary Architecture
                            </p>
                        </Link>
                        <p className="font-body text-gray-400 leading-relaxed mb-8 max-w-sm font-light">
                            Crafting the future through a legacy of excellence, innovation, and sustainable development. We build more than structures; we build legacies.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                <Link
                                    key={index}
                                    href="#"
                                    className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full hover:border-brand-gold hover:text-brand-gold hover:bg-brand-gold/10 transition-all duration-300"
                                >
                                    <Icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="font-display text-lg font-bold text-white mb-8">Company</h4>
                        <ul className="space-y-4 font-body text-gray-400">
                            {['About Us', 'Our Portfolio', 'Services', 'Sustainability', 'Careers'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-2 h-px bg-brand-gold transition-all duration-300" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <h4 className="font-display text-lg font-bold text-white mb-8">Contact</h4>
                        <ul className="space-y-6 font-body text-gray-400">
                            <li>
                                <span className="block text-xs uppercase tracking-wider text-brand-gold mb-2">Headquarters</span>
                                <span className="text-white">House 12, Road 27, Gulshan-1, Dhaka 1212, Bangladesh</span>
                            </li>
                            <li>
                                <span className="block text-xs uppercase tracking-wider text-brand-gold mb-2">Phone</span>
                                <span className="text-white hover:text-brand-gold transition-colors cursor-pointer">+880 1712226456</span>
                            </li>
                            <li>
                                <span className="block text-xs uppercase tracking-wider text-brand-gold mb-2">Email</span>
                                <span className="text-white hover:text-brand-gold transition-colors cursor-pointer">info@shahingroup.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-3">
                        <h4 className="font-display text-lg font-bold text-white mb-8">Newsletter</h4>
                        <p className="font-body text-gray-400 mb-6 text-sm font-light">
                            Subscribe to receive updates on our latest projects and architectural insights.
                        </p>
                        <form className="flex flex-col gap-4">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-transparent border-b border-white/20 py-3 pr-10 text-white placeholder-gray-600 focus:outline-none focus:border-brand-gold transition-colors font-light"
                                />
                                <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-gold transition-colors">
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs uppercase tracking-wider">
                    <p>© 2024 Shahin Group. All Rights Reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-brand-gold transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
