'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import ParticleField from '@/components/ParticleField';
import Link from 'next/link';

export default function BhangraAerobics() {
    return (
        <div className="min-h-screen bg-[#030014] relative overflow-hidden">
            <Header />
            <ParticleField />

            <main className="relative z-10 pt-20">
                {/* Hero Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <h1 className="text-6xl md:text-7xl font-bold mb-6">
                                Bhangra <span className="text-gradient">Aerobics</span>
                            </h1>
                            <p className="text-xl text-white/70 mb-8">
                                Experience the joy of traditional Bhangra dance combined with modern fitness techniques
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Full Body Workout',
                                    description: 'Engage every muscle group with dynamic Bhangra movements',
                                    icon: '💪'
                                },
                                {
                                    title: 'Cardio Boost',
                                    description: 'Improve heart health with high-energy dance routines',
                                    icon: '❤️'
                                },
                                {
                                    title: 'Cultural Experience',
                                    description: 'Learn authentic Bhangra moves rooted in Punjab tradition',
                                    icon: '🎭'
                                },
                                {
                                    title: 'Stress Relief',
                                    description: 'Release tension through expressive dance movements',
                                    icon: '🧘‍♀️'
                                },
                                {
                                    title: 'Community Spirit',
                                    description: 'Join a vibrant community of dance fitness enthusiasts',
                                    icon: '🤝'
                                },
                                {
                                    title: 'Fun Factor',
                                    description: 'Enjoy workouts that feel more like a celebration',
                                    icon: '🎉'
                                }
                            ].map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{
                                        scale: 1.05,
                                        rotateY: 5,
                                        translateZ: 20
                                    }}
                                    className="glass-card p-8 hover:shadow-glow transition-all duration-300"
                                    style={{ perspective: 1000 }}
                                >
                                    <div className="text-4xl mb-4">{benefit.icon}</div>
                                    <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                                    <p className="text-white/70">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-12 text-center relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#8AB4FF]/20 via-[#FF7AF5]/20 to-[#FFD60A]/20" />
                            <h2 className="text-4xl font-bold mb-6 relative z-10">
                                Ready to Experience Bhangra Aerobics?
                            </h2>
                            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto relative z-10">
                                Join our next class and discover the perfect blend of tradition and fitness
                            </p>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative z-10"
                            >
                                <Link
                                    href="/book-class"
                                    className="btn-primary inline-block text-lg px-8 py-4"
                                >
                                    Book Your First Class
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
} 