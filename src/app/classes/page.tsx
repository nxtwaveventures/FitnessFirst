'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import ParticleField from '@/components/ParticleField';
import Link from 'next/link';

export default function Classes() {
    const classes = [
        {
            title: "Beginner's Bhangra",
            description: "Perfect for newcomers to learn the basic moves and rhythms of Bhangra",
            duration: "60 mins",
            level: "Beginner",
            schedule: "Mon & Wed 6:00 PM"
        },
        {
            title: "Power Bhangra",
            description: "High-intensity workout combining traditional moves with cardio exercises",
            duration: "45 mins",
            level: "Intermediate",
            schedule: "Tue & Thu 7:00 PM"
        },
        {
            title: "Bhangra Flow",
            description: "Fluid combinations of moves focusing on grace and coordination",
            duration: "60 mins",
            level: "All Levels",
            schedule: "Wed & Fri 5:30 PM"
        },
        {
            title: "Weekend Warrior",
            description: "Extended session perfect for deep practice and endurance building",
            duration: "90 mins",
            level: "Advanced",
            schedule: "Sat 10:00 AM"
        }
    ];

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
                                Our <span className="text-gradient">Classes</span>
                            </h1>
                            <p className="text-xl text-white/70 mb-8">
                                Find the perfect class to match your fitness level and schedule
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Classes Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-8">
                            {classes.map((classItem, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{
                                        scale: 1.02,
                                        rotateY: 2,
                                        translateZ: 10
                                    }}
                                    className="glass-card p-8 hover:shadow-glow transition-all duration-300"
                                    style={{ perspective: 1000 }}
                                >
                                    <h3 className="text-2xl font-bold mb-4">{classItem.title}</h3>
                                    <p className="text-white/70 mb-6">{classItem.description}</p>
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div>
                                            <p className="text-white/50 text-sm">Duration</p>
                                            <p className="text-white">{classItem.duration}</p>
                                        </div>
                                        <div>
                                            <p className="text-white/50 text-sm">Level</p>
                                            <p className="text-white">{classItem.level}</p>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <p className="text-white/50 text-sm">Schedule</p>
                                        <p className="text-white">{classItem.schedule}</p>
                                    </div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            href="/book-class"
                                            className="btn-primary inline-block w-full text-center py-3"
                                        >
                                            Book Now
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
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
                                Ready to Join a Class?
                            </h2>
                            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto relative z-10">
                                Book your first class today and start your fitness journey with us
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