'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import ParticleField from '@/components/ParticleField';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-[#030014] relative overflow-hidden">
            <Header />
            <ParticleField />

            <main className="relative z-10 pt-20">
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="max-w-4xl mx-auto text-center mb-16"
                        >
                            <h1 className="text-6xl md:text-7xl font-bold mb-6">
                                Get in <span className="text-gradient">Touch</span>
                            </h1>
                            <p className="text-xl text-white/70">
                                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                            </p>
                        </motion.div>

                        <div className="max-w-2xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="glass-card p-8 md:p-12 relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#8AB4FF]/10 via-[#FF7AF5]/10 to-[#FFD60A]/10 rounded-[30px]" />
                                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                    <div>
                                        <label htmlFor="name" className="block text-white/90 mb-2">Name</label>
                                        <motion.input
                                            whileFocus={{ scale: 1.02 }}
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300 text-white"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-white/90 mb-2">Email</label>
                                        <motion.input
                                            whileFocus={{ scale: 1.02 }}
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300 text-white"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-white/90 mb-2">Subject</label>
                                        <motion.input
                                            whileFocus={{ scale: 1.02 }}
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300 text-white"
                                            placeholder="What's this about?"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-white/90 mb-2">Message</label>
                                        <motion.textarea
                                            whileFocus={{ scale: 1.02 }}
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300 text-white resize-none"
                                            placeholder="Your message here..."
                                        />
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        type="submit"
                                        className="w-full btn-primary text-lg py-4"
                                    >
                                        Send Message
                                    </motion.button>
                                </form>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="max-w-4xl mx-auto mt-20 text-center"
                        >
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="glass-card p-6 hover:shadow-glow transition-all duration-300">
                                    <div className="text-3xl mb-4">📍</div>
                                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                                    <p className="text-white/70">123 Fitness Street, City, State 12345</p>
                                </div>
                                <div className="glass-card p-6 hover:shadow-glow transition-all duration-300">
                                    <div className="text-3xl mb-4">📞</div>
                                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                                    <p className="text-white/70">(123) 456-7890</p>
                                </div>
                                <div className="glass-card p-6 hover:shadow-glow transition-all duration-300">
                                    <div className="text-3xl mb-4">✉️</div>
                                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                                    <p className="text-white/70">info@fitnessfirst.com</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
} 