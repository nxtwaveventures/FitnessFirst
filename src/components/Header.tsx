'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaLeaf } from 'react-icons/fa';

interface NavItem {
    name: string;
    href: string;
}

const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Classes', href: '/classes' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Store', href: '/store' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`fixed top-0 left-0 right-0 z-50 glass-card bg-opacity-40 ${isScrolled ? 'bg-[#030014]/80 backdrop-blur-md' : ''}`}
        >
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FaLeaf className="text-3xl text-[#7FFF7F]" />
                    </motion.div>
                    <span className="text-2xl font-bold text-gradient">FitnessFirst</span>
                </Link>

                <div className="hidden md:flex space-x-1">
                    {navItems.map((item) => (
                        <motion.div
                            key={item.name}
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                        >
                            <Link
                                href={item.href}
                                className={`px-4 py-2 rounded-full hover:bg-[rgba(127,255,127,0.1)] transition-all duration-300
                                    ${pathname === item.href ? 'bg-white/10' : 'text-white/70'}`}
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="md:hidden text-2xl p-2 hover:bg-[rgba(127,255,127,0.1)] rounded-full"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    ☰
                </motion.button>
            </nav>

            {/* Mobile Menu */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    y: isMobileMenuOpen ? 0 : -20,
                    display: isMobileMenuOpen ? 'block' : 'none',
                }}
                transition={{ duration: 0.2 }}
                className="md:hidden glass-card mt-2 mx-4 rounded-xl overflow-hidden"
            >
                <div className="py-4 space-y-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`block px-4 py-2 text-sm font-medium transition-colors hover:bg-[rgba(127,255,127,0.1)]
                                ${pathname === item.href ? 'text-white' : 'text-white/70'}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </motion.nav>
        </motion.header>
    );
} 