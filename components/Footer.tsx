'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export function Footer() {
    return (
        <footer id="contact" className="bg-background-dark text-white pt-20 pb-10 border-t border-white/10">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <h2 className="font-display text-2xl font-bold tracking-widest mb-6">SHAHIN GROUP</h2>
                        <p className="font-body text-gray-400 leading-relaxed mb-6">
                            Crafting the future through a legacy of excellence, innovation, and sustainable development.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-display text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4 font-body text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Our Portfolio</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">News & Insights</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-display text-lg font-bold mb-6">Contact</h3>
                        <ul className="space-y-4 font-body text-gray-400">
                            <li>
                                <span className="block text-white mb-1">Headquarters</span>
                                123 Business Bay, Dubai, UAE
                            </li>
                            <li>
                                <span className="block text-white mb-1">Phone</span>
                                +971 4 123 4567
                            </li>
                            <li>
                                <span className="block text-white mb-1">Email</span>
                                info@shahingroup.com
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-display text-lg font-bold mb-6">Newsletter</h3>
                        <p className="font-body text-gray-400 mb-4">Subscribe to receive updates on our latest projects.</p>
                        <form className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="bg-white/5 border border-white/10 p-3 rounded-none focus:outline-none focus:border-primary text-white placeholder-gray-500"
                            />
                            <button className="bg-primary text-white py-3 px-6 uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2">
                                Subscribe <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>© 2024 Shahin Group. All Rights Reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
