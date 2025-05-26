'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import ParticleField from '@/components/ParticleField';
import { FaLeaf, FaHeart, FaTree, FaMountain } from 'react-icons/fa';

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const { clientX, clientY } = e;
            const { left, top, width, height } = containerRef.current.getBoundingClientRect();
            const x = ((clientX - left) / width) * 100;
            const y = ((clientY - top) / height) * 100;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const spotlightStyle = {
        background: useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(138,180,255,0.15) 0%, transparent 80%)`
    };

    return (
        <div ref={containerRef} className="min-h-screen bg-[#030014] relative overflow-hidden">
            <Header />
            <ParticleField />

            {/* Animated spotlight */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-10 transition duration-300"
                style={spotlightStyle}
            />

            <main className="relative z-10 pt-20">
                {/* Hero Section */}
                <section className="relative h-screen flex items-center justify-center px-4">
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,31,10,0.8)] to-transparent pointer-events-none" />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="container mx-auto text-center relative z-10"
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6 inline-block"
                        >
                            <FaLeaf className="text-6xl text-[#7FFF7F] mx-auto" />
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
                            Harmony of Nature & Fitness
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Experience the perfect blend of natural wellness and modern fitness,
                            where every movement connects you with nature's rhythm.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/classes">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-primary"
                                >
                                    Explore Classes
                                </motion.button>
                            </Link>
                            <Link href="/store">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-outline"
                                >
                                    Visit Store
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </section>

                {/* Features Section */}
                <section className="py-20 relative">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
                            Our Natural Approach
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: FaHeart,
                                    title: "Holistic Wellness",
                                    description: "Combining traditional wisdom with modern fitness techniques for complete well-being."
                                },
                                {
                                    icon: FaTree,
                                    title: "Eco-Friendly Practice",
                                    description: "Sustainable fitness routines that respect and connect with nature's elements."
                                },
                                {
                                    icon: FaMountain,
                                    title: "Natural Growth",
                                    description: "Progress at your own pace, just as nature follows its own perfect timing."
                                }
                            ].map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="glass-card p-6 text-center"
                                >
                                    <feature.icon className="text-4xl text-[#7FFF7F] mx-auto mb-4" />
                                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-white/70">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 relative">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                                Begin Your Natural Fitness Journey
                            </h2>
                            <p className="text-lg md:text-xl text-white/80 mb-8">
                                Join us in creating a harmonious blend of fitness and nature.
                                Experience workouts that nurture both body and soul.
                            </p>
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-primary"
                                >
                                    Get Started Today
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
} 