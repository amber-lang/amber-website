'use client';

import { useEffect, useRef } from 'react';
import styles from './BackgroundCanvas.module.css';

interface Particle {
    x: number; y: number;
    vx: number; vy: number;
    r: number; a: number;
    amber: boolean;
}

export default function BackgroundCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const cursor = cursorRef.current;
        const ring = ringRef.current;
        if (!canvas || !cursor || !ring) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let W = 0, H = 0;
        let mx = 0, my = 0, rx = 0, ry = 0;
        let animId = 0;

        function resize() {
            W = canvas!.width = window.innerWidth;
            H = canvas!.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        function onMove(e: MouseEvent) {
            mx = e.clientX;
            my = e.clientY;
            cursor!.style.left = mx + 'px';
            cursor!.style.top = my + 'px';
        }
        document.addEventListener('mousemove', onMove);

        function makeParticle(): Particle {
            return {
                x: Math.random() * W,
                y: Math.random() * H,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                r: Math.random() * 1.2 + 0.3,
                a: Math.random() * 0.4 + 0.05,
                amber: Math.random() > 0.6,
            };
        }

        const particles: Particle[] = Array.from({ length: 120 }, makeParticle);

        function loop() {
            ctx!.clearRect(0, 0, W, H);

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < 120) {
                        ctx!.beginPath();
                        ctx!.moveTo(particles[i].x, particles[i].y);
                        ctx!.lineTo(particles[j].x, particles[j].y);
                        ctx!.strokeStyle = `rgba(245,158,11,${((1 - d / 120) * 0.06).toFixed(3)})`;
                        ctx!.lineWidth = 0.5;
                        ctx!.stroke();
                    }
                }
            }

            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) Object.assign(p, makeParticle());
                ctx!.beginPath();
                ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx!.fillStyle = p.amber ? `rgba(245,158,11,${p.a})` : `rgba(250,250,249,${(p.a * 0.4).toFixed(3)})`;
                ctx!.fill();
            }

            rx += (mx - rx) * 0.12;
            ry += (my - ry) * 0.12;
            ring!.style.left = rx + 'px';
            ring!.style.top = ry + 'px';

            animId = requestAnimationFrame(loop);
        }
        loop();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
            document.removeEventListener('mousemove', onMove);
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className={styles.cursor} />
            <div ref={ringRef} className={styles.ring} />
            <canvas ref={canvasRef} className={styles.canvas} />
        </>
    );
}
