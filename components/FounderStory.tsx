'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { AngularDividerTop } from './DesignElements';

export function FounderStory() {
    return (
        <section className="relative py-24 md:py-32 bg-brand-navy overflow-hidden">
            {/* Angular Divider Top - seamless transition */}
            <div className="absolute top-0 left-0 w-full text-brand-navy z-20 -mt-1 transform rotate-180">
                <AngularDividerTop />
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A059' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div className="inline-block">
                            <span className="px-4 py-2 bg-brand-gold/10 text-brand-gold rounded-full text-xs font-bold tracking-[0.2em] uppercase border border-brand-gold/20">
                                The Visionary
                            </span>
                        </div>

                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                            Building a Legacy of <span className="text-brand-gold italic">Excellence</span>
                        </h2>

                        <div className="relative">
                            <Quote className="absolute -top-4 -left-6 w-12 h-12 text-brand-gold/10 transform -scale-x-100" />
                            <p className="text-lg text-white/80 font-light leading-relaxed italic pl-6 border-l-2 border-brand-gold/30">
                                "Architecture is not just about structures; it's about shaping the way we live, interact, and dream. Every line we draw and every brick we lay is a testament to our commitment to creating spaces that inspire and endure."
                            </p>
                        </div>

                        <div className="space-y-6 text-white/60 font-light leading-relaxed">
                            <p>
                                From humble beginnings to leading a conglomerate of innovation, our founder's journey is one of relentless passion and unwavering dedication. With a keen eye for detail and a heart for community, he has steered the Shahin Group to become a beacon of quality and integrity in the industry.
                            </p>
                            <p>
                                His philosophy blends traditional craftsmanship with modern innovation, ensuring that every project not only meets the needs of today but anticipates the aspirations of tomorrow.
                            </p>
                        </div>

                        <div className="pt-4">
                            <div className="font-display text-2xl text-white">Shahin Akhter Babu</div>
                            <div className="text-brand-gold text-sm tracking-widest uppercase mt-1">Founder & Chairmen </div>
                        </div>
                    </motion.div>

                    {/* Image Collage */}
                    <div className="relative h-[600px] w-full hidden md:block">
                        {/* Main Portrait */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute top-0 right-0 w-[70%] h-[70%] z-10"
                        >
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <Image
                                    src="/images/founder/founder-1.jpg"
                                    alt="Shahin Alam Portrait"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-[#00365E]/80 to-transparent mix-blend-multiply" />
                            </div>
                        </motion.div>

                        {/* Working Shot */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="absolute bottom-0 left-0 w-[55%] h-[55%] z-20"
                        >
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <Image
                                    src="/images/founder/founder-2.jpg"
                                    alt="Shahin Alam Working"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay" />
                            </div>
                        </motion.div>

                        {/* Detail/Action Shot */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="absolute top-[20%] left-[10%] w-[35%] h-[35%] z-30"
                        >
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-brand-gold/30">
                                <Image
                                    src="/images/founder/founder-3.jpg"
                                    alt="Shahin Alam Detail"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Decorative Elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-[10%] right-[60%] w-32 h-32 border border-brand-gold/20 rounded-full z-0 border-dashed"
                        />
                    </div>

                    {/* Mobile Image Layout (Simple Stack) */}
                    <div className="md:hidden space-y-4">
                        <div className="relative h-[300px] rounded-xl overflow-hidden">
                            <Image
                                src="/images/founder/founder-1.jpg"
                                alt="Shahin Alam Portrait"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative h-[150px] rounded-xl overflow-hidden">
                                <Image
                                    src="/images/founder/founder-2.jpg"
                                    alt="Shahin Alam Working"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-[150px] rounded-xl overflow-hidden">
                                <Image
                                    src="/images/founder/founder-3.jpg"
                                    alt="Shahin Alam Detail"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
