'use client';

import { motion } from 'framer-motion';
import { FaLeaf, FaHeart, FaTree, FaMountain } from 'react-icons/fa';
import ParticleField from '@/components/ParticleField';
import Link from 'next/link';
import SocialProof from '@/components/SocialProof';
import NewsletterSignup from '@/components/NewsletterSignup';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
    return (
        <main className="min-h-screen relative overflow-hidden">
            <ParticleField />
            <FloatingCTA />

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
                        <FaLeaf className="text-6xl text-[#7FFF7F] mx-auto animate-float" />
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
                        Transform Naturally with FitnessFirst
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
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
                                Start Free Trial
                            </motion.button>
                        </Link>
                        <Link href="/store">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-outline"
                            >
                                Explore Store
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Social Proof Section */}
            <SocialProof />

            {/* Features Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
                        Why Choose FitnessFirst
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
                                title: "Natural Growth",
                                description: "Sustainable fitness routines that respect and connect with nature's elements."
                            },
                            {
                                icon: FaMountain,
                                title: "Peak Performance",
                                description: "Achieve your fitness goals while maintaining harmony with nature."
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="glass-card p-6 text-center transform hover:scale-105 transition-all duration-300"
                            >
                                <feature.icon className="text-4xl text-[#7FFF7F] mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-white/90">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <NewsletterSignup />

            {/* CTA Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                            Begin Your Natural Fitness Journey Today
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 mb-8">
                            Join our community and discover how natural fitness can transform your life.
                            Start your free trial and experience the difference.
                        </p>
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary"
                            >
                                Start Your Journey
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}