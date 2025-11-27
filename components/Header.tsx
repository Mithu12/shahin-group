'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Philosophy', href: '#philosophy' },
        { name: 'Expertise', href: '#expertise' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
                }`}
        >
            <div className="container max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="z-50">
                    <h1 className={`font-display text-2xl font-bold tracking-widest transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-white'
                        }`}>
                        SHAHIN GROUP
                    </h1>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm uppercase tracking-wider font-medium transition-colors duration-300 hover:text-primary ${isScrolled ? 'text-foreground/80' : 'text-white/90'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className={`px-6 py-2 text-sm uppercase tracking-wider border transition-all duration-300 ${isScrolled
                        ? 'border-primary text-primary hover:bg-primary hover:text-white'
                        : 'border-white text-white hover:bg-white hover:text-black'
                        }`}>
                        Inquire
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={`w-8 h-8 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
                    ) : (
                        <Menu className={`w-8 h-8 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
                    )}
                </button>

                {/* Mobile Navigation Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-display text-foreground hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
