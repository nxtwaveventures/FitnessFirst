'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import ParticleField from '@/components/ParticleField';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const blogPosts = {
    'art-of-bhangra': {
        title: 'The Art of Bhangra: A Journey Through Punjab\'s Dance Heritage',
        category: 'Dance Forms',
        image: '/images/bhangra-dance.jpg',
        author: 'Anamika',
        date: 'March 15, 2024',
        content: `
            <p>Bhangra, a vibrant and energetic dance form originating from Punjab, has evolved from a harvest celebration dance to a global fitness phenomenon. This traditional dance form carries with it centuries of cultural heritage while adapting to modern interpretations and fusion styles.</p>

            <h2>Historical Origins</h2>
            <p>Originally performed by farmers during the harvest season of Vaisakhi, Bhangra was a way to celebrate the successful harvest through dance and music. The movements in traditional Bhangra often mimic farming activities, such as sowing seeds and harvesting crops.</p>

            <h2>Core Movements</h2>
            <p>At its heart, Bhangra is characterized by several key movements:</p>
            <ul>
                <li>The shoulder shake (Bham)</li>
                <li>The leg lift (Kikli)</li>
                <li>The hop step (Luddi)</li>
                <li>The arm raise (Dhamal)</li>
            </ul>

            <h2>Modern Evolution</h2>
            <p>Today, Bhangra has transformed into a popular fitness routine that combines traditional movements with modern exercise science. This fusion creates an effective cardiovascular workout while preserving cultural elements.</p>

            <h2>Benefits of Bhangra Dance</h2>
            <ul>
                <li>Full-body workout engaging multiple muscle groups</li>
                <li>Improved cardiovascular health</li>
                <li>Enhanced coordination and balance</li>
                <li>Stress relief through rhythmic movement</li>
                <li>Cultural learning and appreciation</li>
            </ul>

            <h2>Getting Started with Bhangra</h2>
            <p>Whether you're interested in traditional Bhangra or its modern fitness adaptation, starting your journey is easy. Begin with basic movements, focus on the rhythm, and gradually build up to more complex sequences.</p>
        `
    },
    'nutrition-tips': {
        title: 'Nutrition Tips for Peak Performance in Dance Fitness',
        category: 'Nutrition',
        image: '/images/nutrition.jpg',
        author: 'Anamika',
        date: 'March 14, 2024',
        content: `
            <p>Proper nutrition is crucial for maintaining energy levels and supporting recovery during intense dance workouts. Learn how to fuel your body effectively for optimal performance.</p>

            <h2>Pre-Workout Nutrition</h2>
            <p>What you eat before your dance session can significantly impact your performance. Focus on:</p>
            <ul>
                <li>Complex carbohydrates for sustained energy</li>
                <li>Moderate protein for muscle support</li>
                <li>Light, easily digestible meals</li>
            </ul>

            <h2>Post-Workout Recovery</h2>
            <p>After your dance workout, your body needs proper nutrition to recover and rebuild. Consider:</p>
            <ul>
                <li>Protein for muscle repair</li>
                <li>Electrolytes for hydration</li>
                <li>Carbohydrates to replenish energy stores</li>
            </ul>

            <h2>Hydration Tips</h2>
            <p>Staying hydrated is essential for peak performance. Remember to:</p>
            <ul>
                <li>Drink water throughout the day</li>
                <li>Monitor your hydration levels</li>
                <li>Consider electrolyte drinks for longer sessions</li>
            </ul>
        `
    }
};

export default function BlogPost() {
    const { slug } = useParams();
    const post = blogPosts[slug as keyof typeof blogPosts];

    if (!post) {
        return (
            <div className="min-h-screen bg-[#030014] relative overflow-hidden">
                <Header />
                <ParticleField />
                <main className="relative z-10 pt-20">
                    <div className="container mx-auto px-4 py-20">
                        <h1 className="text-4xl font-bold text-white text-center">Blog Post Not Found</h1>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#030014] relative overflow-hidden">
            <Header />
            <ParticleField />

            <main className="relative z-10 pt-20">
                <article className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <Link
                                    href="/blogs"
                                    className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors"
                                >
                                    ← Back to Blogs
                                </Link>

                                <div className="relative h-[400px] mb-8 rounded-2xl overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-60" />
                                </div>

                                <div className="mb-8">
                                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                                        {post.category}
                                    </span>
                                </div>

                                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                                    {post.title}
                                </h1>

                                <div className="flex items-center gap-4 text-white/70 mb-12">
                                    <span>{post.author}</span>
                                    <span>•</span>
                                    <span>{post.date}</span>
                                </div>

                                <div
                                    className="prose prose-invert prose-lg max-w-none"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />
                            </motion.div>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    );
} 