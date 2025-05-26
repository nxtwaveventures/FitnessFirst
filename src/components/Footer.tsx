'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
    const footerSections = [
        {
            title: 'Quick Links',
            links: [
                { name: 'Home', href: '/' },
                { name: 'Bhangra Aerobics', href: '/bhangra-aerobics' },
                { name: 'Classes', href: '/classes' },
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' }
            ]
        },
        {
            title: 'Resources',
            links: [
                { name: 'Blog', href: '/blogs' },
                { name: 'Dance Forms', href: '/blogs?category=Dance Forms' },
                { name: 'Nutrition Tips', href: '/blogs?category=Nutrition' },
                { name: 'Class Schedule', href: '/classes#schedule' }
            ]
        },
        {
            title: 'Shop',
            links: [
                { name: 'Microgreens Store', href: '/store' },
                { name: 'New Arrivals', href: '/store#new' },
                { name: 'Best Sellers', href: '/store#best-sellers' },
                { name: 'Bulk Orders', href: '/store#bulk' }
            ]
        },
        {
            title: 'Connect',
            links: [
                { name: 'Instagram', href: 'https://instagram.com' },
                { name: 'Facebook', href: 'https://facebook.com' },
                { name: 'Twitter', href: 'https://twitter.com' },
                { name: 'YouTube', href: 'https://youtube.com' }
            ]
        }
    ];

    return (
        <footer className="bg-[#030014] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A]" />

            <div className="container mx-auto px-4 relative">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
                    {footerSections.map((section, sectionIndex) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: sectionIndex * 0.1 }}
                        >
                            <h3 className="text-white text-lg font-bold mb-6">{section.title}</h3>
                            <ul className="space-y-4">
                                {section.links.map((link, linkIndex) => (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-white/70 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="border-t border-white/10 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-white/70 text-sm"
                        >
                            © 2024 FitnessFirst. All rights reserved.
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex gap-6"
                        >
                            <Link href="/privacy" className="text-white/70 hover:text-white text-sm transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-white/70 hover:text-white text-sm transition-colors">
                                Terms of Service
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 