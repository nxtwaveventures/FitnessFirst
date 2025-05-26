'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ParticleField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Array<{ x: number; y: number; z: number; speed: number }>>([]);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Initialize particles
        const initParticles = () => {
            particles.current = Array.from({ length: 50 }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                z: Math.random() * 1000,
                speed: Math.random() * 0.5 + 0.2
            }));
        };
        initParticles();

        // Track mouse movement
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current = {
                x: e.clientX,
                y: e.clientY
            };
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Animation loop
        let animationFrame: number;
        const animate = () => {
            ctx.fillStyle = 'rgba(3, 0, 20, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.current.forEach((particle, i) => {
                // Update particle position
                particle.z -= particle.speed;
                if (particle.z <= 1) {
                    particle.z = 1000;
                    particle.x = Math.random() * canvas.width;
                    particle.y = Math.random() * canvas.height;
                }

                // Calculate 3D projection
                const scale = 1000 / particle.z;
                const x = (particle.x - canvas.width / 2) * scale + canvas.width / 2;
                const y = (particle.y - canvas.height / 2) * scale + canvas.height / 2;
                const radius = Math.max(0.5, 2 * scale);

                // Draw particle
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 2);
                gradient.addColorStop(0, 'rgba(138, 180, 255, 0.3)');
                gradient.addColorStop(1, 'rgba(138, 180, 255, 0)');

                ctx.beginPath();
                ctx.arc(x, y, radius * 2, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Connect nearby particles
                particles.current.slice(i + 1).forEach(otherParticle => {
                    const dx = x - ((otherParticle.x - canvas.width / 2) * (1000 / otherParticle.z) + canvas.width / 2);
                    const dy = y - ((otherParticle.y - canvas.height / 2) * (1000 / otherParticle.z) + canvas.height / 2);
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(
                            (otherParticle.x - canvas.width / 2) * (1000 / otherParticle.z) + canvas.width / 2,
                            (otherParticle.y - canvas.height / 2) * (1000 / otherParticle.z) + canvas.height / 2
                        );
                        ctx.strokeStyle = `rgba(138, 180, 255, ${0.2 * (1 - distance / 100)})`;
                        ctx.stroke();
                    }
                });
            });

            animationFrame = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <motion.canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        />
    );
} 