import { motion } from 'framer-motion';
import { FaLeaf, FaDownload } from 'react-icons/fa';
import { useState } from 'react';

export default function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        setIsSubmitted(true);
        setEmail('');
    };

    return (
        <section className="py-20 relative px-4">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="glass-card p-8 md:p-12"
                >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <FaLeaf className="text-4xl text-[#7FFF7F] mb-4" />
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">
                                Get Your Free Wellness Guide
                            </h2>
                            <p className="text-white/90 mb-6">
                                Download our comprehensive guide to natural fitness and wellness.
                                Learn the secrets to sustainable health and vitality!
                            </p>
                            <ul className="space-y-3 mb-6">
                                {[
                                    "7-Day Natural Fitness Plan",
                                    "Microgreens Growing Guide",
                                    "Mindful Movement Exercises",
                                    "Nutrition Tips & Recipes"
                                ].map((item, index) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center text-white/90"
                                    >
                                        <FaLeaf className="text-[#7FFF7F] mr-2" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full md:w-96 bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                                            Enter your email to get instant access
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Your email address"
                                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#7FFF7F] transition-colors"
                                            required
                                        />
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-[#7FFF7F] to-[#98FB98] text-[#0A1F0A] py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
                                    >
                                        <span>Get Free Access</span>
                                        <FaDownload />
                                    </motion.button>
                                    <p className="text-xs text-white/60 text-center mt-4">
                                        We respect your privacy. Unsubscribe at any time.
                                    </p>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center py-8"
                                >
                                    <FaLeaf className="text-[#7FFF7F] text-4xl mx-auto mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                                    <p className="text-white/90">
                                        Check your email for your free wellness guide.
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 