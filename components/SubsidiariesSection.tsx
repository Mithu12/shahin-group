'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AngularDividerTop } from './DesignElements';

const subsidiaries = [
    {
        id: 1,
        category: "Architectural",
        title: "Shahin Architecture",
        subtitle: "Avant-Garde Design & Master Planning",
        description: "Award-winning architectural solutions for luxury residences and commercial landmarks.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8dwKRBRRF-ecdJnARZDsX0SG4o1GAEzx5XS9pDklz9YuEFs41IN2D06-I8MADURmOyLNO0eUp_a3dzn-1boTo_TCq3BkJ2x5WgNdKr3A88MJeFRCSv6A2x1KKIzOUJsK6SyYfRnx96XQPCi68h8Oy0DrIR3_3KMhJAg5qMQSAh2lfzlKtdBlJeGvwH3xceFj_rKrG1GGiycWoQUcDLA3xLbKueBYINUBlI1Lwv5NFACIiooWRq53UsLlsLk8YqGQNYxs-J6I81KrH",
    },
    {
        id: 2,
        category: "Development",
        title: "Shahin Development",
        subtitle: "High-End Real Estate Investments",
        description: "Crafting premium living and commercial spaces in prime locations.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDh7CJF1lyhsNm98CNkdmV0i7Vt3EesvsBFauDWerdH2mJxOM_R9ZGYvelaHF6Do-FJPEnF_pT5MVA2JWppu0ubXUintjMyNRguJY6Vy9OglNwHqw1Oi0vp0HyY7DULJDkksnuCMcqkp9hloop9z71ocDexAGZJsi_Zdmn6RNYbXMxVPkbjKC4jc1_1ecrhxQVCiIxcDspwD95YjhKr5NHYjMIvNbAihsT6sljVGunpaVcRujp0lRgaK8Vixh4Jv54MEmfOCCbbczNG",
    },
    {
        id: 3,
        category: "Construction",
        title: "Shahin Construction",
        subtitle: "Precision Engineering & Build",
        description: "Delivering excellence in construction with state-of-the-art techniques.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvxSGJTXddHdeHHVimEUG46HvNjOpEVaZVmP6Yrw8XeDgdwOkvdGhtL6avyFiK6s5V05PM7AmLOKqGKwyx2IhDnFfiy_tToXs5gBqZ0uYmCKJZaF3fRiV0iRnWzthNYvv1v6cHj-FneAt5jfZc22TEUynJ78saVriIsIu6BN7jl-6P_xewZb56426Xna-IxbFoexNKVqsxw3g7FgUD9KKYFsHJpZVCPFl1wCN-f2ca54pMBtqsetdDK5vak7LtevQUPBotPQE7c683",
    },
    {
        id: 4,
        category: "Real Estate",
        title: "Shahin Signature Ltd",
        subtitle: "Real Estate Listing",
        description: "Premium property listings and real estate marketing solutions for discerning clients.",
        image: "/images/subsidiaries/shahin-signature.png",
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 80,
        filter: "blur(20px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1] // Ultra-smooth premium ease
        }
    }
};

const titleVariants: Variants = {
    hidden: { y: "100%" },
    visible: {
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

export function SubsidiariesSection() {
    return (
        <section className="relative py-24 md:py-32 bg-brand-navy overflow-hidden">
            {/* Angular Divider Top */}
            <div className="absolute top-0 left-0 w-full text-brand-navy z-20 -mt-1 transform rotate-180">
                <AngularDividerTop />
            </div>

            {/* Subtle Hex Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A059' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* Ambient Glows - Animated */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00365E]/20 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-4"
                    >
                        <span className="px-4 py-2 bg-brand-gold/10 text-brand-gold rounded-full text-xs font-bold tracking-[0.2em] uppercase border border-brand-gold/20">
                            Our Companies
                        </span>
                    </motion.div>

                    <div className="overflow-hidden mb-6">
                        <motion.h3
                            variants={titleVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="font-display text-4xl md:text-6xl text-white"
                        >
                            Portfolio of <span className="text-brand-gold italic">Subsidiaries</span>
                        </motion.h3>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Diverse expertise across architecture, development, construction, and media, united by a commitment to excellence.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                    {subsidiaries.map((subsidiary) => (
                        <motion.div
                            key={subsidiary.id}
                            variants={cardVariants}
                            whileHover="hover"
                            className="group relative h-[500px] cursor-pointer perspective-1000"
                        >
                            <motion.div
                                className="absolute inset-0 bg-[#00365E] rounded-xl overflow-hidden shadow-xl border border-white/5"
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hover: {
                                        y: -10,
                                        borderColor: "rgba(197, 160, 89, 0.5)",
                                        boxShadow: "0 20px 50px rgba(0,0,0,0.3)"
                                    }
                                }}
                            >

                                {/* Image Container - Top Half */}
                                <div className="relative h-[60%] overflow-hidden">
                                    <motion.div
                                        className="w-full h-full"
                                        variants={{
                                            hover: { scale: 1.1 }
                                        }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    >
                                        <Image
                                            src={subsidiary.image}
                                            alt={`${subsidiary.category} background`}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#00365E]" />

                                    {/* Shine Effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-12"
                                        initial={{ x: "-100%" }}
                                        variants={{
                                            hover: { x: "100%" }
                                        }}
                                        transition={{ duration: 0.8, ease: "easeInOut" }}
                                    />
                                </div>

                                {/* Content Container - Bottom Half */}
                                <div className="relative h-[40%] p-6 flex flex-col justify-between bg-[#00365E]">
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-brand-gold font-semibold">
                                                {subsidiary.category}
                                            </span>
                                            <motion.div
                                                className="w-8 h-px bg-white/10"
                                                variants={{
                                                    hover: { width: "3rem", backgroundColor: "#C5A059" }
                                                }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </div>
                                        <motion.h4
                                            className="font-display text-2xl text-white mb-2 leading-tight"
                                            variants={{
                                                hover: { color: "#C5A059" }
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {subsidiary.title}
                                        </motion.h4>
                                        <p className="font-body text-xs text-white/60 line-clamp-2 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                                            {subsidiary.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                        <motion.span
                                            className="text-[10px] uppercase tracking-widest text-white font-semibold"
                                            variants={{
                                                hover: { color: "#C5A059" }
                                            }}
                                        >
                                            Explore
                                        </motion.span>
                                        <motion.div
                                            variants={{
                                                hover: { x: 5, color: "#C5A059" }
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ArrowRight className="w-3 h-3 text-white" />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
