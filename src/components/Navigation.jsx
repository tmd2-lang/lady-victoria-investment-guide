import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Navigation() {
    const navRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Transition glassmorphism past hero (approx 100vh)
            if (window.scrollY > window.innerHeight * 0.8) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            ref={navRef}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-out flex items-center justify-between px-6 py-3 rounded-full ${isScrolled
                    ? 'w-[90%] md:w-[800px] bg-background/80 backdrop-blur-xl border border-subtleBorder text-textLight shadow-lg'
                    : 'w-[95%] md:w-[900px] bg-transparent text-textDark border-transparent'
                }`}
        >
            <div className="font-serif text-lg tracking-wide whitespace-nowrap">
                Lady Victoria Designs
            </div>

            <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-widest uppercase">
                <a href="#services" className="hover:-translate-y-[1px] transition-transform">Services</a>
                <a href="#investment" className="hover:-translate-y-[1px] transition-transform">Investment</a>
                <a href="#quiz" className="hover:-translate-y-[1px] transition-transform">Quiz</a>
            </div>

            <button className="relative overflow-hidden group bg-accent text-textDark px-6 py-2 rounded-full font-sans text-sm tracking-widest uppercase hover:scale-[1.03] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                <span className="relative z-10">Inquire</span>
                <div className="absolute inset-0 bg-accentHover translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0" />
            </button>
        </nav>
    );
}
