"use client"
import React, { useEffect, useRef } from 'react'

type Props = {
    children: React.ReactNode
    delay?: number
    duration?: number
}

export function SlideIn({ children, delay = 0, duration = .6 }: Props) {


    const elementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = elementRef.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.style.animation = `slide-in ${duration}s ease-out forwards`;

                    observer.unobserve(element); // Stop observing after the animation is triggered
                }
            },
            { threshold: 0, rootMargin: "-150px" }
        )

        observer.observe(element)

        return () => observer.disconnect() // Cleanup observer on unmount

    },[delay, duration])




    return (
        <div ref={elementRef} className='slide-in-hidden'>
            {children}
        </div>
    )
}