'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import ParticleField from '@/components/ParticleField';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const blogPosts = [
    {
        id: 1,
        title: 'The Art of Bhangra: A Journey Through Punjab\'s Dance Heritage',
        excerpt: 'Discover the rich cultural history of Bhangra and its evolution into a modern fitness phenomenon.',
        category: 'Dance Forms',
        image: '/images/bhangra-dance.jpg',
        slug: 'art-of-bhangra'
    },
    {
        id: 2,
        title: 'Nutrition Tips for Peak Performance in Dance Fitness',
        excerpt: 'Learn about the best foods to fuel your dance workouts and maintain energy throughout the day.',
        category: 'Nutrition',
        image: '/images/nutrition.jpg',
        slug: 'nutrition-tips'
    },
    {
        id: 3,
        title: 'Kathak: The Classical Dance of Storytelling',
        excerpt: 'Explore the graceful movements and intricate footwork of this ancient Indian classical dance form.',
        category: 'Dance Forms',
        image: '/images/kathak.jpg',
        slug: 'kathak-dance'
    },
    {
        id: 4,
        title: 'Superfoods for Dancers: Boost Your Energy Naturally',
        excerpt: 'Discover the power of superfoods and how they can enhance your dance performance.',
        category: 'Nutrition',
        image: '/images/superfoods.jpg',
        slug: 'superfoods-dancers'
    }
];

export default function Blogs() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'Dance Forms', 'Nutrition'];

    const filteredPosts = selectedCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

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
                                Our <span className="text-gradient">Blog</span>
                            </h1>
                            <p className="text-xl text-white/70">
                                Explore articles about dance forms, nutrition, and wellness
                            </p>
                        </motion.div>

                        {/* Category Filter */}
                        <div className="flex justify-center gap-4 mb-12">
                            {categories.map((category, index) => (
                                <motion.button
                                    key={category}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedCategory === category
                                            ? 'bg-white/20 text-white'
                                            : 'text-white/70 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    {category}
                                </motion.button>
                            ))}
                        </div>

                        {/* Blog Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {filteredPosts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="glass-card overflow-hidden group"
                                >
                                    <Link href={`/blogs/${post.slug}`}>
                                        <div className="relative h-64">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-60" />
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gradient transition-all">
                                                {post.title}
                                            </h3>
                                            <p className="text-white/70 mb-4">
                                                {post.excerpt}
                                            </p>
                                            <span className="text-gradient font-medium">Read More →</span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
} 