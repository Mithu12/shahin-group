"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const BrushStroke1 = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 200 50" className={`w-full h-auto ${className}`} preserveAspectRatio="none">
        <path d="M10,25 Q50,5 100,25 T190,25" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.6" />
        <path d="M15,30 Q55,10 105,30 T185,30" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
);

export const BrushStroke2 = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={`w-full h-auto ${className}`} preserveAspectRatio="none">
        <path d="M20,10 Q50,50 20,90" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" opacity="0.8" />
        <path d="M35,20 Q65,50 35,80" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
);

export const AngularDividerTop = ({ className = "" }: { className?: string }) => (
    <div className={`absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 ${className}`}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px]">
            {/* Layer 1: Subtle background depth */}
            <motion.path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                fill="#27272a"
                initial={{ opacity: 0, x: -100, y: 20 }}
                whileInView={{ opacity: 0.1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Layer 2: Mid-tone sharp angle */}
            <motion.path
                d="M1200 0L0 0 892.25 120.72 1200 0z"
                fill="#27272a"
                initial={{ opacity: 0, x: 150, y: 30 }}
                whileInView={{ opacity: 0.3, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Layer 3: Main cut */}
            <motion.path
                d="M1200 0L0 0 0 46.29 1200 120z"
                fill="#27272a"
                initial={{ opacity: 0, x: -150, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            />
        </svg>
    </div>
);

export const AngularDividerBottom = ({ className = "" }: { className?: string }) => (
    <div className={`absolute bottom-0 left-0 w-full overflow-hidden leading-none ${className}`}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px]">
            {/* Layer 1: Background depth */}
            <motion.path
                d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
                fill="#27272a"
                initial={{ opacity: 0, x: -100, y: 20 }}
                whileInView={{ opacity: 0.1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Layer 2: Sharp geometric accent */}
            <motion.path
                d="M0,0 L1200,120 L0,120 Z"
                fill="#27272a"
                initial={{ opacity: 0, x: -200, y: 40 }}
                whileInView={{ opacity: 0.3, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Layer 3: Main structure */}
            <motion.path
                d="M1200,0 L1200,120 L0,120 L600,60 Z"
                fill="#27272a"
                initial={{ opacity: 0, x: 200, y: 60 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            />
        </svg>
    </div>
);

export const ShardShape = ({ className = "" }: { className?: string }) => (
    <div className={`absolute w-full h-full pointer-events-none ${className}`}>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right mix-blend-overlay" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-bottom-left mix-blend-overlay" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rotate-45 transform mix-blend-overlay blur-3xl" />
    </div>
);
