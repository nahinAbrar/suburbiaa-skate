'use client';

import Lenis from 'lenis';
import { useEffect, type ReactNode } from 'react';

type Props = { children: ReactNode };

export function SmoothScrollProvider({ children }: Props) {
    useEffect(() => {
        // 1️⃣ Add the "lenis" class to <html> so Lenis can hijack scrolling
        document.documentElement.classList.add('lenis');

        // 2️⃣ Initialize Lenis
        const lenis = new Lenis({
            duration: 2.5, // scroll behavior duration
            easing: (t: number): number => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function
        });

        // 3️⃣ RAF loop
        let rafId: number;
        const animate = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(animate);
        };
        rafId = requestAnimationFrame(animate);

        // 4️⃣ Cleanup on unmount
        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            document.documentElement.classList.remove('lenis');
        };
    }, []);

    return <>{children}</>;
}
