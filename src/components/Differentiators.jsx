import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const quotes = [
    {
        text: "Irene took our Pinterest dreams and turned them into something even more beautiful than we imagined. Every single guest commented on the flowers.",
        author: "Emily & James",
        venue: "Phoenixville Estate"
    },
    {
        text: "Working with Lady Victoria was the best decision we made. The design process was seamless, and on our wedding day, everything was absolutely perfect.",
        author: "Sarah & Michael",
        venue: "Hotel DuPont"
    },
    {
        text: "She brought my vision of my dream wedding to reality. I couldn't have asked for anything more perfect.",
        author: "Dana",
        venue: "Private Estate"
    }
];

export default function Differentiators() {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.diff-card', {
                scrollTrigger: {
                    trigger: '.diff-grid',
                    start: 'top 80%',
                },
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            });

            gsap.from('.testimonial-card', {
                scrollTrigger: {
                    trigger: '.test-grid',
                    start: 'top 80%',
                },
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-[#3D332A] text-textDark py-16 px-6 lg:px-20 relative overflow-hidden">

            {/* Why Choose Us */}
            <div className="max-w-7xl mx-auto flex flex-col gap-16 mb-24">
                <div className="flex flex-col gap-4">
                    <div className="text-accent font-sans text-xs tracking-[0.2em] uppercase">Why Couples Choose</div>
                    <h2 className="font-serif text-5xl md:text-6xl text-white">Lady Victoria</h2>
                </div>

                <div className="diff-grid grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="diff-card relative p-8 bg-primaryDark/50 rounded-[2rem] border border-white/5 hover:bg-primaryDark transition-colors group">
                        <div className="absolute top-4 right-8 font-serif text-[6rem] font-bold text-white/5 pointer-events-none group-hover:text-accent/10 transition-colors">01</div>
                        <h3 className="relative z-10 font-serif text-2xl mb-6 text-accent">One Vision, One Team</h3>
                        <p className="relative z-10 font-sans text-lg font-light leading-relaxed text-white/70">
                            "From florals to furniture, lighting to linens — we design and execute every detail so nothing falls through the cracks."
                        </p>
                    </div>

                    <div className="diff-card relative p-8 bg-primaryDark/50 rounded-[2rem] border border-white/5 hover:bg-primaryDark transition-colors group mt-0 md:mt-12">
                        <div className="absolute top-4 right-8 font-serif text-[6rem] font-bold text-white/5 pointer-events-none group-hover:text-accent/10 transition-colors">02</div>
                        <h3 className="relative z-10 font-serif text-2xl mb-6 text-accent">Stress-Free Execution</h3>
                        <p className="relative z-10 font-sans text-lg font-light leading-relaxed text-white/70">
                            "On your wedding day, you won't lift a finger. We handle delivery, setup, styling, and breakdown — all you do is show up and say yes."
                        </p>
                    </div>

                    <div className="diff-card relative p-8 bg-primaryDark/50 rounded-[2rem] border border-white/5 hover:bg-primaryDark transition-colors group mt-0 md:mt-24">
                        <div className="absolute top-4 right-8 font-serif text-[6rem] font-bold text-white/5 pointer-events-none group-hover:text-accent/10 transition-colors">03</div>
                        <h3 className="relative z-10 font-serif text-2xl mb-6 text-accent">Personal Attention</h3>
                        <p className="relative z-10 font-sans text-lg font-light leading-relaxed text-white/70">
                            "You're not just a client — you're a collaboration. Irene personally oversees every design and is on-site for every wedding."
                        </p>
                    </div>

                </div>
            </div>

            {/* Testimonials */}
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <div className="w-16 h-[1px] bg-accent/40 mx-auto mb-8"></div>
                <div className="test-grid grid grid-cols-1 md:grid-cols-3 gap-8">
                    {quotes.map((quote, idx) => (
                        <div key={idx} className="testimonial-card flex flex-col gap-6 text-center px-4">
                            <p className="font-serif italic text-xl md:text-2xl leading-relaxed text-white/90">
                                "{quote.text}"
                            </p>
                            <div className="mt-auto pt-6">
                                <p className="font-sans font-bold text-accent tracking-wide uppercase text-sm mb-1">{quote.author}</p>
                                <p className="font-sans text-xs text-white/40 tracking-widest uppercase">{quote.venue}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
