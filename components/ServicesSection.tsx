'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe, PenTool, TrendingUp } from 'lucide-react';
import { AngularDividerTop } from './DesignElements';

const services = [
    {
        icon: Building2,
        title: "Real Estate Development",
        description: "Creating iconic landmarks that redefine skylines and communities."
    },
    {
        icon: Globe,
        title: "Global Logistics",
        description: "Seamless supply chain solutions connecting markets worldwide."
    },
    {
        icon: PenTool,
        title: "Architecture & Design",
        description: "Visionary design thinking that blends aesthetics with functionality."
    },
    {
        icon: TrendingUp,
        title: "Investment Management",
        description: "Strategic asset growth and sustainable value creation."
    }
];

export function ServicesSection() {
    return (
        <section id="expertise" className="relative py-24 md:py-40 bg-background-light dark:bg-background-dark overflow-hidden">
            {/* Angular Divider Top - Inverted for variety if needed, or just standard */}
            <div className="absolute top-0 left-0 w-full text-background-light dark:text-background-dark z-20 -mt-1 transform rotate-180">
                <AngularDividerTop />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h4 className="text-primary text-sm uppercase tracking-[0.2em] font-bold mb-4">
                        Our Expertise
                    </h4>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                        Sectors of <span className="text-primary">Excellence</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group p-8 border border-border hover:border-primary/50 bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            <div className="w-14 h-14 bg-secondary rounded-none flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                <service.icon className="w-7 h-7 text-foreground group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="font-display text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="font-body text-muted-foreground text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
