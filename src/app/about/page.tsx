'use client';

import { motion } from 'framer-motion';
import { FaLeaf, FaSeedling, FaHeart } from 'react-icons/fa';
import ParticleField from '@/components/ParticleField';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    return (
        <div className="min-h-screen bg-[#030014] relative overflow-hidden">
            <ParticleField />

            <main className="relative z-10 pt-20">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 px-4">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <FaLeaf className="text-5xl text-[#7FFF7F] mx-auto mb-6" />
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
                                Our Natural Journey
                            </h1>
                            <p className="text-xl text-white/80 mb-8">
                                We believe in the power of nature to transform lives. Our journey began with a simple idea:
                                to create a space where fitness and nature unite in perfect harmony.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-20 relative px-4">
                    <div className="container mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="glass-card p-6 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(127,255,127,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <Image
                                    src="/images/trainer.jpg"
                                    alt="Anamika - Founder"
                                    width={600}
                                    height={400}
                                    className="rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                                    priority
                                />
                                <div className="absolute bottom-6 left-6 right-6 p-4 glass-card bg-opacity-90 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    <h3 className="text-xl font-bold text-gradient mb-2">Anamika</h3>
                                    <p className="text-white/90">Founder & Wellness Guide</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-6"
                            >
                                <h2 className="text-3xl font-bold text-gradient">Our Story</h2>
                                <p className="text-white/80">
                                    Founded with a vision to bring nature's wisdom into modern fitness,
                                    we've created a unique approach that combines traditional practices
                                    with contemporary wellness techniques.
                                </p>
                                <p className="text-white/80">
                                    Our journey is rooted in the belief that true wellness comes from
                                    living in harmony with nature. We grow our own microgreens and
                                    design our workouts to reflect natural movements and rhythms.
                                </p>
                                <p className="text-white/80">
                                    As a passionate advocate for natural wellness, I've dedicated myself
                                    to creating a space where technology and nature coexist harmoniously,
                                    helping others achieve their fitness goals while staying connected to
                                    the earth.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 relative px-4">
                    <div className="container mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
                            Our Core Values
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: FaLeaf,
                                    title: "Natural Wellness",
                                    description: "Embracing nature's wisdom in every aspect of our practice."
                                },
                                {
                                    icon: FaSeedling,
                                    title: "Sustainable Growth",
                                    description: "Nurturing gradual, lasting transformation in harmony with nature."
                                },
                                {
                                    icon: FaHeart,
                                    title: "Community Care",
                                    description: "Growing together as a community that supports and uplifts each other."
                                }
                            ].map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="glass-card p-6 text-center"
                                >
                                    <value.icon className="text-4xl text-[#7FFF7F] mx-auto mb-4" />
                                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                    <p className="text-white/70">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 relative px-4">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                                Join Our Natural Fitness Community
                            </h2>
                            <p className="text-lg md:text-xl text-white/80 mb-8">
                                We're more than just a fitness center - we're a community dedicated to
                                natural wellness and sustainable living. Come grow with us.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary"
                            >
                                Start Your Journey
                            </motion.button>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
} 