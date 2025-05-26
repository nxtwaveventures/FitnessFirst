'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import ParticleField from '@/components/ParticleField';
import Image from 'next/image';
import { useState } from 'react';

const products = [
    {
        id: 1,
        name: 'Sunflower Microgreens',
        description: 'Home-grown sunflower microgreens with a nutty flavor, harvested fresh from our garden.',
        price: 149,
        image: '/images/sunflower-microgreens.jpg',
        benefits: ['High in protein', 'Rich in vitamins', 'Nutty flavor'],
        stock: 10,
        growthTime: '7-10 days'
    },
    {
        id: 2,
        name: 'Pea Shoot Microgreens',
        description: 'Tender pea shoots grown with love in our home garden, perfect for salads.',
        price: 129,
        image: '/images/pea-microgreens.jpg',
        benefits: ['Sweet taste', 'High in fiber', 'Versatile use'],
        stock: 10,
        growthTime: '8-12 days'
    },
    {
        id: 3,
        name: 'Radish Microgreens',
        description: 'Spicy and crisp radish microgreens, cultivated in our natural home setup.',
        price: 139,
        image: '/images/radish-microgreens.jpg',
        benefits: ['Spicy kick', 'Antioxidant-rich', 'Beautiful color'],
        stock: 10,
        growthTime: '6-8 days'
    },
    {
        id: 4,
        name: 'Broccoli Microgreens',
        description: 'Nutrient-packed broccoli microgreens, grown sustainably at home.',
        price: 159,
        image: '/images/broccoli-microgreens.jpg',
        benefits: ['High in sulforaphane', 'Cancer-fighting properties', 'Mild taste'],
        stock: 10,
        growthTime: '7-10 days'
    }
];

export default function Store() {
    const [cart, setCart] = useState<{ id: number, quantity: number }[]>([]);

    const addToCart = (productId: number) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === productId);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { id: productId, quantity: 1 }];
        });
    };

    const getCartQuantity = (productId: number) => {
        return cart.find(item => item.id === productId)?.quantity || 0;
    };

    return (
        <div className="min-h-screen bg-[#0A1F0A] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/forest-bg.jpg')] opacity-10 bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A1F0A]/50 to-[#0A1F0A]" />
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
                            className="max-w-4xl mx-auto text-center mb-16"
                        >
                            <h1 className="text-6xl md:text-7xl font-bold mb-6">
                                Nature's <span className="text-gradient">Microgreens</span>
                            </h1>
                            <p className="text-xl text-white/70">
                                Sustainably grown microgreens from our home garden to your table
                            </p>
                        </motion.div>

                        {/* Product Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {products.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="glass-card overflow-hidden group hover:shadow-[0_0_20px_rgba(0,255,0,0.1)]"
                                >
                                    <div className="relative h-48">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F0A] to-transparent opacity-60" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#7FFF7F] transition-all">
                                            {product.name}
                                        </h3>
                                        <p className="text-white/70 mb-4 text-sm">
                                            {product.description}
                                        </p>
                                        <div className="mb-4">
                                            <h4 className="text-white font-medium mb-2">Benefits:</h4>
                                            <ul className="text-sm text-white/70 space-y-1">
                                                {product.benefits.map((benefit, i) => (
                                                    <li key={i} className="flex items-center">
                                                        <span className="mr-2">🌱</span>
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="text-white/70 text-sm mb-4">
                                            <span className="flex items-center">
                                                <span className="mr-2">🌿</span>
                                                Growth Time: {product.growthTime}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-2xl font-bold text-[#7FFF7F]">
                                                ₹{product.price}
                                            </span>
                                            <span className="text-white/70 text-sm">
                                                Limited Stock: {product.stock}
                                            </span>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => addToCart(product.id)}
                                            className="w-full bg-[#1F4F1F] hover:bg-[#2F6F2F] text-white py-2 flex items-center justify-center gap-2 rounded-lg transition-colors"
                                        >
                                            Add to Cart
                                            {getCartQuantity(product.id) > 0 && (
                                                <span className="bg-[#7FFF7F]/20 px-2 py-0.5 rounded-full text-sm">
                                                    {getCartQuantity(product.id)}
                                                </span>
                                            )}
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Our Microgreens */}
                <section className="py-20 bg-[#0A1F0A]/50 backdrop-blur-sm">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl font-bold mb-6 text-white">
                                Grown with <span className="text-[#7FFF7F]">Nature's Love</span>
                            </h2>
                            <p className="text-xl text-white/70 max-w-2xl mx-auto">
                                Our microgreens are cultivated in harmony with nature, in our home garden setup
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Home Grown',
                                    description: 'Lovingly cultivated in our natural home garden setup',
                                    icon: '🏡'
                                },
                                {
                                    title: 'Natural & Pure',
                                    description: 'Grown without any artificial additives or pesticides',
                                    icon: '🌿'
                                },
                                {
                                    title: 'Fresh Harvest',
                                    description: 'Harvested fresh when you place your order',
                                    icon: '🌱'
                                }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="glass-card p-8 text-center hover:shadow-[0_0_20px_rgba(0,255,0,0.1)]"
                                >
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                                    <p className="text-white/70">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
} 