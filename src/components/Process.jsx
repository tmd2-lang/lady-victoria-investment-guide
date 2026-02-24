import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
    {
        num: "01",
        title: "Discovery",
        desc: "We start with your vision — your Pinterest boards, color palettes, venue photos, and the feeling you want your day to have.",
        animationType: "circles"
    },
    {
        num: "02",
        title: "Concept",
        desc: "We translate your ideas into a cohesive design concept, complete with mood boards, floral palettes, and rental selections.",
        animationType: "grid"
    },
    {
        num: "03",
        title: "Refinement",
        desc: "Together, we fine-tune every detail until it feels exactly right. No cookie-cutter designs — just yours.",
        animationType: "wave"
    },
    {
        num: "04",
        title: "Execution",
        desc: "On your wedding day, we handle everything — delivery, setup, styling, and breakdown — so you can be fully present.",
        animationType: "geo"
    }
];

export default function Process() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.process-card');

            // We will pin each card sequentially and animate previous ones
            cards.forEach((card, i) => {
                if (i < cards.length - 1) {
                    ScrollTrigger.create({
                        trigger: card,
                        start: 'top top',
                        pin: true,
                        pinSpacing: false,
                        end: () => `+=${window.innerHeight}`,
                        onUpdate: (self) => {
                            gsap.to(card, {
                                scale: 1 - (self.progress * 0.08),
                                filter: `blur(${self.progress * 8}px)`,
                                opacity: 1 - (self.progress * 0.6),
                                ease: 'none',
                                duration: 0.1
                            });
                        }
                    });
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const renderAnimation = (type) => {
        switch (type) {
            case 'circles':
                return (
                    <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-48 md:h-48 opacity-20 animate-[spin_20s_linear_infinite]">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
                    </svg>
                );
            case 'grid':
                return (
                    <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-48 md:h-48 opacity-20">
                        <defs>
                            <pattern id="dotGrid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect x="0" y="0" width="100" height="100" fill="url(#dotGrid)" />
                        <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" className="animate-[pulse_2s_ease-in-out_infinite]" />
                    </svg>
                );
            case 'wave':
                return (
                    <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-48 md:h-48 opacity-20">
                        <path d="M0 50 Q 25 20, 50 50 T 100 50" fill="none" stroke="currentColor" strokeWidth="1" />
                        <path d="M0 50 Q 25 80, 50 50 T 100 50" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                    </svg>
                );
            case 'geo':
                return (
                    <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-48 md:h-48 opacity-20">
                        <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <polygon points="50,90 90,10 10,10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                );
            default: return null;
        }
    };

    return (
        <section ref={containerRef} className="relative w-full bg-background pb-20">
            <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center">

                {processSteps.map((step, idx) => (
                    <div
                        key={idx}
                        className="process-card w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center p-6 md:p-12 sticky top-[15vh] md:top-[15vh]"
                        style={{ zIndex: idx }}
                    >
                        <div className="w-full h-auto min-h-[50vh] bg-white border border-subtleBorder rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row shadow-xl items-center md:justify-between transform-gpu">
                            <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-10 h-full justify-center">
                                <div className="font-mono text-xl text-accent">{step.num}</div>
                                <h2 className="font-serif text-5xl md:text-7xl text-textLight">{step.title}</h2>
                                <p className="font-sans text-xl md:text-2xl font-light leading-relaxed max-w-lg text-mutedText border-l-2 border-accent pl-6">
                                    {step.desc}
                                </p>
                            </div>

                            <div className="w-full md:w-1/2 h-48 md:h-auto flex items-center justify-center text-primaryDark mt-8 md:mt-0">
                                {renderAnimation(step.animationType)}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
