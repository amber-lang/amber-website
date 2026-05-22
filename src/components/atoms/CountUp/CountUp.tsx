'use client';

import { useEffect, useRef, useState } from 'react';

function fmt(n: number): string {
    if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
    return n.toString();
}

type Props = {
  target: number
  duration?: number
  suffix?: string
}

export default function CountUp({ target, duration = 5500, suffix }: Props) {
    const [value, setValue] = useState(0);
    const elRef = useRef<HTMLSpanElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const el = elRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started.current) {
                started.current = true;
                setTimeout(() => {
                    const t0 = performance.now();
                    const tick = (now: number) => {
                        const p = Math.min((now - t0) / duration, 1);
                        const eased = 1 - Math.pow(1 - p, 4); // ease-out quart
                        setValue(Math.round(eased * target));
                        if (p < 1) requestAnimationFrame(tick);
                    };
                    requestAnimationFrame(tick);
                }, 800);
            }
        }, { threshold: 0.8 });
        obs.observe(el);
        return () => obs.disconnect();
    }, [target, duration]);

    return <span ref={elRef}>{fmt(value)}{suffix}</span>;
}
