'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const subsidiaries = [
    {
        id: 1,
        category: "Architectural",
        title: "Shahin Architecture",
        subtitle: "Avant-Garde Design & Master Planning",
        description: "Award-winning architectural solutions for luxury residences and commercial landmarks.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8dwKRBRRF-ecdJnARZDsX0SG4o1GAEzx5XS9pDklz9YuEFs41IN2D06-I8MADURmOyLNO0eUp_a3dzn-1boTo_TCq3BkJ2x5WgNdKr3A88MJeFRCSv6A2x1KKIzOUJsK6SyYfRnx96XQPCi68h8Oy0DrIR3_3KMhJAg5qMQSAh2lfzlKtdBlJeGvwH3xceFj_rKrG1GGiycWoQUcDLA3xLbKueBYINUBlI1Lwv5NFACIiooWRq53UsLlsLk8YqGQNYxs-J6I81KrH",
        gradient: "from-[#1a365d] to-[#2d5a8c]",
        accentColor: "bg-blue-400"
    },
    {
        id: 2,
        category: "Development",
        title: "Shahin Development",
        subtitle: "High-End Real Estate Investments",
        description: "Crafting premium living and commercial spaces in prime locations.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDh7CJF1lyhsNm98CNkdmV0i7Vt3EesvsBFauDWerdH2mJxOM_R9ZGYvelaHF6Do-FJPEnF_pT5MVA2JWppu0ubXUintjMyNRguJY6Vy9OglNwHqw1Oi0vp0HyY7DULJDkksnuCMcqkp9hloop9z71ocDexAGZJsi_Zdmn6RNYbXMxVPkbjKC4jc1_1ecrhxQVCiIxcDspwD95YjhKr5NHYjMIvNbAihsT6sljVGunpaVcRujp0lRgaK8Vixh4Jv54MEmfOCCbbczNG",
        gradient: "from-[#7c2d12] to-[#b45309]",
        accentColor: "bg-orange-400"
    },
    {
        id: 3,
        category: "Construction",
        title: "Shahin Construction",
        subtitle: "Precision Engineering & Build",
        description: "Delivering excellence in construction with state-of-the-art techniques.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvxSGJTXddHdeHHVimEUG46HvNjOpEVaZVmP6Yrw8XeDgdwOkvdGhtL6avyFiK6s5V05PM7AmLOKqGKwyx2IhDnFfiy_tToXs5gBqZ0uYmCKJZaF3fRiV0iRnWzthNYvv1v6cHj-FneAt5jfZc22TEUynJ78saVriIsIu6BN7jl-6P_xewZb56426Xna-IxbFoexNKVqsxw3g7FgUD9KKYFsHJpZVCPFl1wCN-f2ca54pMBtqsetdDK5vak7LtevQUPBotPQE7c683",
        gradient: "from-[#134e4a] to-[#0f766e]",
        accentColor: "bg-teal-400"
    },
    {
        id: 4,
        category: "Media",
        title: "Shahin Media",
        subtitle: "Global Content & Digital Innovation",
        description: "Producing impactful media and digital experiences across platforms.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBY7welrf_52jGG-UwRjR6SDV36qWtPDETQeDgwx51FGa-QgfOB2fUsemD9V5YwDAC_dW6-Td33q61EkcXY4kMt37Bv5uy59Sz-KCM8FkfWqFaBVrLuFeRpUawDT5sTV4Zbt-tDL5_wHaEyJvffDQDmaT8vQKkick_SXjmQa6G-7PrYdJHB8feNcufXcBpFRKpSkzex0sV_RWwH-nfAxsM49mz-pRH7y-5qV8H9lP73Ff4MRIrw5dI0-TVP9xDt2cU_3lRJ8HdIFV5v",
        gradient: "from-[#4c1d95] to-[#7c3aed]",
        accentColor: "bg-purple-400"
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

export function SubsidiariesSection() {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-background-light to-gray-50 dark:from-background-dark dark:to-gray-900 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-4"
                    >
                        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wider uppercase">
                            Our Companies
                        </span>
                    </motion.div>
                    <h3 className="font-display text-4xl md:text-6xl mb-4 text-foreground bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                        Portfolio of Subsidiaries
                    </h3>
                    <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                        Diverse expertise across architecture, development, construction, and media
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                >
                    {subsidiaries.map((subsidiary, index) => (
                        <motion.div
                            key={subsidiary.id}
                            variants={cardVariants}
                            whileHover={{
                                y: -12,
                                scale: 1.02,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="group perspective-1000"
                        >
                            <div className={`
                                bg-gradient-to-br ${subsidiary.gradient} 
                                text-white rounded-2xl 
                                flex flex-col justify-between 
                                min-h-[450px] 
                                relative overflow-hidden 
                                shadow-xl hover:shadow-2xl
                                transition-all duration-500
                                border border-white/10
                            `}>
                                {/* Background Image with Enhanced Overlay */}
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={subsidiary.image}
                                        alt={`${subsidiary.category} background`}
                                        fill
                                        className="object-cover opacity-15 group-hover:opacity-40 transition-opacity duration-700 ease-out"
                                    />
                                    {/* Gradient overlay for better text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Decorative corner accents */}
                                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/30 rounded-tl-2xl group-hover:border-white/60 transition-colors duration-300"></div>
                                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/30 rounded-br-2xl group-hover:border-white/60 transition-colors duration-300"></div>

                                {/* Animated accent line */}
                                <div className="absolute top-0 left-0 w-0 h-1 bg-white/80 group-hover:w-full transition-all duration-500 ease-out"></div>

                                {/* Content Container */}
                                <div className="relative z-10 p-8 flex flex-col h-full">
                                    {/* Header Section */}
                                    <div className="mb-6">
                                        <div className="flex justify-between items-center mb-6 pb-3 border-b border-white/20 group-hover:border-white/40 transition-colors duration-300">
                                            <span className="font-body text-xs uppercase tracking-widest font-semibold opacity-90">
                                                {subsidiary.category}
                                            </span>
                                            <motion.div
                                                whileHover={{ scale: 1.2, rotate: -45 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                            </motion.div>
                                        </div>

                                        <h4 className="font-display text-2xl md:text-3xl mb-3 leading-tight group-hover:translate-x-1 transition-transform duration-300">
                                            {subsidiary.title}
                                        </h4>

                                        <div className="flex items-center gap-2 mb-4">
                                            <div className={`w-1 h-8 ${subsidiary.accentColor} rounded-full group-hover:h-12 transition-all duration-300`}></div>
                                            <p className="font-body text-sm opacity-90 leading-relaxed">
                                                {subsidiary.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Description - pushed to bottom */}
                                    <div className="mt-auto">
                                        <p className="font-body text-sm text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
                                            {subsidiary.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover glow effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
