'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import {
    TrendingUp,
    Users,
    Briefcase,
    DollarSign,
    Calendar
} from 'lucide-react';

interface StatProps {
    value: number;
    label: string;
    suffix?: string;
    prefix?: string;
    icon: React.ReactNode;
    delay: number;
}

const AnimatedCounter = ({
    value,
    suffix = '',
    prefix = ''
}: {
    value: number;
    suffix?: string;
    prefix?: string;
}) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [motionValue, isInView, value]);

    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current) {
                ref.current.textContent = `${prefix}${Intl.NumberFormat('en-US').format(
                    Math.floor(latest)
                )}${suffix}`;
            }
        });
    }, [springValue, prefix, suffix]);

    return <span ref={ref}>{prefix}0{suffix}</span>;
};

const StatCard = ({ value, label, suffix, prefix, icon, delay }: StatProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="group relative"
        >
            <div className="relative bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 overflow-hidden">
                {/* Decorative corner frames */}
                <div className="absolute top-3 left-3 w-16 h-16 border-l-2 border-t-2 border-border group-hover:border-primary transition-all duration-500 opacity-40 group-hover:opacity-100" />
                <div className="absolute bottom-3 right-3 w-16 h-16 border-r-2 border-b-2 border-border group-hover:border-primary transition-all duration-500 opacity-40 group-hover:opacity-100" />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />

                {/* Content */}
                <div className="relative p-8 z-10">
                    {/* Icon */}
                    <motion.div
                        className="mb-6 inline-flex bg-secondary group-hover:bg-primary/10 transition-colors duration-300 p-4"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                            {icon}
                        </div>
                    </motion.div>

                    {/* Counter value */}
                    <motion.div
                        className="text-5xl md:text-6xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300"
                        initial={{ scale: 0.5 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: delay + 0.3 }}
                    >
                        <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
                    </motion.div>

                    {/* Label */}
                    <p className="text-muted-foreground font-body text-base font-medium uppercase tracking-wider">
                        {label}
                    </p>

                    {/* Animated underline */}
                    <motion.div
                        className="mt-4 h-0.5 bg-border group-hover:bg-primary/50 transition-colors duration-500 origin-left"
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 0.8, delay: delay + 0.5 }}
                    />
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
            </div>
        </motion.div>
    );
};

export const ImpactSection = () => {
    const stats: StatProps[] = [
        {
            value: 25,
            label: 'Years in Business',
            suffix: '+',
            icon: <Calendar className="w-8 h-8" />,
            delay: 0.1,
        },
        {
            value: 500,
            label: 'Projects Completed',
            suffix: '+',
            icon: <Briefcase className="w-8 h-8" />,
            delay: 0.2,
        },
        {
            value: 5000,
            label: 'Employment Created',
            suffix: '+',
            icon: <Users className="w-8 h-8" />,
            delay: 0.3,
        },
        {
            value: 2.5,
            label: 'Investment Value',
            suffix: 'B+',
            prefix: '$',
            icon: <DollarSign className="w-8 h-8" />,
            delay: 0.4,
        },
        {
            value: 15,
            label: 'Economic Impact',
            suffix: 'B+',
            prefix: '$',
            icon: <TrendingUp className="w-8 h-8" />,
            delay: 0.5,
        },
    ];

    const titleRef = useRef(null);
    const isTitleInView = useInView(titleRef, { once: true, margin: "-50px" });

    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-gray-900">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01] pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A059' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    ref={titleRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-20"
                >
                    {/* Decorative Lines */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={isTitleInView ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-[2px] w-16 bg-primary origin-right"
                        />
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={isTitleInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="px-4 py-2 bg-primary/10 text-primary text-xs md:text-sm uppercase tracking-[0.3em] font-bold"
                        >
                            Our Impact
                        </motion.span>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={isTitleInView ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-[2px] w-16 bg-primary origin-left"
                        />
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
                    >
                        Driving Growth, Creating{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-primary">Value</span>
                            <motion.span
                                initial={{ width: 0 }}
                                animate={isTitleInView ? { width: '100%' } : { width: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="absolute bottom-1 left-0 h-2 bg-primary/20"
                            />
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg text-muted-foreground max-w-3xl mx-auto font-body"
                    >
                        Delivering measurable impact through innovation, sustainable practices,
                        and unwavering commitment to excellence
                    </motion.p>
                </motion.div>

                {/* Stats grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>

                {/* Bottom decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isTitleInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    className="mt-16 md:mt-20 flex justify-center"
                >
                    <div className="h-[2px] w-32 md:w-48 bg-gradient-to-r from-transparent via-primary to-transparent" />
                </motion.div>
            </div>
        </section>
    );
};
