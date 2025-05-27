import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaGoogle, FaFacebook, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const testimonials = [
    {
        name: "Priya S.",
        role: "Fitness Enthusiast",
        image: "/images/testimonial1.jpg",
        content: "The natural approach to fitness here is refreshing. I've seen amazing results both physically and mentally!",
        rating: 5
    },
    {
        name: "Rahul M.",
        role: "Tech Professional",
        image: "/images/testimonial2.jpg",
        content: "Combining technology with nature-inspired workouts is genius. The microgreens add an amazing healthy element!",
        rating: 5
    },
    {
        name: "Anjali K.",
        role: "Yoga Practitioner",
        image: "/images/testimonial3.jpg",
        content: "The holistic approach to wellness here is exactly what I was looking for. Highly recommended!",
        rating: 5
    }
];

export default function SocialProof() {
    return (
        <section className="py-20 relative px-4">
            <div className="container mx-auto">
                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="glass-card px-8 py-4 flex items-center space-x-4"
                    >
                        <FaGoogle className="text-2xl text-[#7FFF7F]" />
                        <div>
                            <div className="flex items-center">
                                <span className="text-2xl font-bold mr-2">4.9</span>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-[#FFD700]" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-sm text-white/70">50+ Reviews</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="glass-card px-8 py-4 flex items-center space-x-4"
                    >
                        <FaFacebook className="text-2xl text-[#7FFF7F]" />
                        <div>
                            <p className="font-bold">1,200+</p>
                            <p className="text-sm text-white/70">Community Members</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card px-8 py-4 flex items-center space-x-4"
                    >
                        <FaInstagram className="text-2xl text-[#7FFF7F]" />
                        <div>
                            <p className="font-bold">5,000+</p>
                            <p className="text-sm text-white/70">Followers</p>
                        </div>
                    </motion.div>
                </div>

                {/* Testimonials */}
                <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
                    What Our Community Says
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 relative"
                        >
                            <FaQuoteLeft className="text-[#7FFF7F] text-3xl mb-4 opacity-50" />
                            <p className="text-white/90 mb-6">{testimonial.content}</p>
                            <div className="flex items-center mt-4">
                                <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold">{testimonial.name}</h4>
                                    <p className="text-sm text-white/70">{testimonial.role}</p>
                                </div>
                                <div className="ml-auto flex">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-[#FFD700]" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 