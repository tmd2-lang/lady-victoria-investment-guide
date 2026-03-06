import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tiers = [
    {
        id: 'three',
        label: 'TIER THREE',
        name: 'The Essentials',
        price: '$8k – $15k',
        shortTitle: 'Floral Design + Minimal Rentals',
        shortList: [
            'Bridal bouquet + boutonnière',
            'Ceremony + reception florals',
            'Sweetheart area styling',
            'Setup + on-site oversight'
        ],
        tagline: 'Where your vision begins to bloom.',
        desc: 'Perfect for couples who want beautifully cohesive florals without managing multiple vendors.',
        fullList: [
            { bold: 'Personal Florals', text: "Bridal bouquet + groom's boutonnière" },
            { bold: 'Ceremony Design', text: 'Simple backdrop (draped arch or floral pillars) + repurposed reception florals' },
            { bold: 'Reception Centerpieces', text: 'Mix of low arrangements, bud vases, and optional tall pieces + candle styling (votives or tapers)' },
            { bold: 'Sweetheart Area', text: 'Floral accent + coordinated linen or table styling' },
            { bold: 'Select Rental Pieces', text: 'Sweetheart chairs, accent furniture, minimal tabletop décor' },
            { bold: 'Setup + On-Site Oversight', text: 'Team handles setup, Irene ensures every detail is executed beautifully' }
        ],
        isSignature: false,
        image: '/Package1.jpg',
        alt: 'Minimal bridal bouquet natural light soft elegant'
    },
    {
        id: 'two',
        label: 'TIER TWO',
        name: 'Design + Custom Florals',
        price: '$20k – $30k',
        shortTitle: 'Custom Florals + Curated Rentals',
        shortList: [
            'Full bridal party florals',
            'Floral arch + elevated designs',
            'Curated rentals + styling',
            'Full setup + management'
        ],
        tagline: 'Elevated design, thoughtfully layered.',
        desc: 'For couples who want a lush, layered aesthetic with custom floral work and curated styling.',
        fullList: [
            { bold: 'Full Bridal Party Florals', text: 'Bouquets, boutonnières, corsages, and family flowers' },
            { bold: 'Ceremony Design', text: 'Custom floral arch or backdrop + aisle markers or petal placement' },
            { bold: 'Reception Tablescapes', text: 'Full floral centerpieces with elevated height variation + candle clusters and accent décor' },
            { bold: 'Sweetheart Area', text: 'Lush floral moment + coordinated styling' },
            { bold: 'Enhanced Rentals', text: 'Tabletop styling (chargers, napkins, glassware), lounge furniture, accent pieces' },
            { bold: 'Full Setup + Management', text: 'Delivery, installation, and on-site coordination from start to finish' }
        ],
        isSignature: false,
        image: '/Sophia.jpg.jpeg',
        alt: 'Lush wedding centerpiece candles romantic lighting'
    },
    {
        id: 'one',
        label: 'TIER ONE · SIGNATURE',
        name: 'Full Production Experience',
        price: 'Starting at $55k',
        shortTitle: 'Custom Installations + Full Production',
        shortList: [
            'Bespoke floral installations',
            'Lighting/draping/staging',
            'Premium rentals throughout',
            'Full production team'
        ],
        tagline: 'Walk in. Fall in love. Remember forever.',
        desc: 'For couples who want a breathtaking, fully immersive wedding environment.',
        fullList: [
            { bold: 'High-Level Creative Direction', text: 'Deep-dive design session + fully customized mood board with unlimited refinements' },
            { bold: 'Full Bridal Party Florals', text: 'Bouquets, boutonnières, corsages, and family personals' },
            { bold: 'Bespoke Ceremony Design', text: 'Entrance statement, aisle meadows, floral arch + candle styling' },
            { bold: 'Reception Installations', text: 'Hanging florals, chandeliers, luxe centerpieces + custom sweetheart canopy' },
            { bold: 'Full Production + Design Execution', text: 'Custom lighting, drapery, stage wraps, dance floor design + premium rentals: lounges, bar fronts, signage' },
            { bold: 'Comprehensive On-Site Management', text: 'Our lead designers and the production team manage every detail from setup to breakdown' }
        ],
        isSignature: true,
        image: null,
        alt: null
    }
];

export default function InvestmentTiers() {
    const overviewRef = useRef(null);
    const detailRefs = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Overview Cards Animation
            gsap.from('.tier-card-overview', {
                scrollTrigger: {
                    trigger: overviewRef.current,
                    start: 'top 80%',
                },
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out'
            });

            // Detailed Section Animations
            detailRefs.current.forEach((el, index) => {
                if (!el) return;

                gsap.fromTo(el,
                    { opacity: 0, y: 50 },
                    {
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 75%',
                            toggleActions: 'play none none reverse'
                        },
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        ease: 'power3.out'
                    }
                );
            });
        });
        return () => ctx.revert();
    }, []);

    const addToDetailRefs = (el) => {
        if (el && !detailRefs.current.includes(el)) {
            detailRefs.current.push(el);
        }
    };

    return (
        <>
            {/* Overview Section */}
            <section ref={overviewRef} className="w-full bg-background py-20 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto flex flex-col gap-12">
                    <div className="flex flex-col gap-4 text-center items-center">
                        <div className="text-accent font-sans text-xs tracking-[0.2em] uppercase">
                            Investment Options
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl text-textLight">
                            Three Ways to Work With Us
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch mt-8">
                        {tiers.map((tier) => {
                            const isSig = tier.isSignature;
                            return (
                                <div
                                    key={`overview-${tier.id}`}
                                    className={`tier-card-overview relative flex flex-col rounded-[2rem] overflow-hidden ${isSig
                                        ? 'bg-primaryDark border-2 border-accent text-textDark shadow-xl lg:scale-105 z-10 lg:-translate-y-2'
                                        : 'bg-white border border-subtleBorder text-textLight hover:border-accent/30'
                                        }`}
                                >
                                    <div className="p-8 pb-10 flex flex-col flex-grow">
                                        {isSig && (
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-textDark text-[10px] tracking-widest uppercase px-4 py-1 rounded-full whitespace-nowrap z-20">
                                                Signature
                                            </div>
                                        )}

                                        <h3 className={`font-serif text-2xl mb-1 ${isSig ? 'text-white' : ''}`}>
                                            {tier.id === 'one' ? 'TIER ONE' : tier.label}
                                        </h3>
                                        <p className="font-serif italic text-xl text-accent mb-6 line-clamp-2">
                                            {tier.name}
                                        </p>
                                        <div className={`font-sans text-2xl mb-2 ${isSig ? 'text-accent/90' : 'text-textLight'}`}>
                                            {tier.price}
                                        </div>
                                        <p className={`font-sans text-sm italic mb-6 border-b pb-6 ${isSig ? 'text-mutedText border-mutedText/30' : 'text-mutedText border-subtleBorder'}`}>
                                            "{tier.shortTitle}"
                                        </p>

                                        <ul className={`flex flex-col gap-4 font-sans text-sm mt-auto ${isSig ? 'text-white/90' : 'text-textLight/80'}`}>
                                            {tier.shortList.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    {isSig && <div className="h-2 w-full bg-accent absolute bottom-0 left-0"></div>}
                                </div>
                            );
                        })}
                    </div>

                    <p className="text-center font-sans text-xs text-mutedText mt-4 italic">
                        * Final pricing is tailored to your guest count, floral selections, and design complexity.
                    </p>
                </div>
            </section>

            {/* Tier Breakdown Sections */}

            {/* TIER THREE */}
            <section ref={addToDetailRefs} className="w-full bg-background flex flex-col lg:flex-row min-h-[80vh] overflow-hidden border-t border-subtleBorder">
                {/* Image Left */}
                <div className="w-full lg:w-[45%] h-[50vh] lg:h-auto relative">
                    <img
                        src={tiers[0].image}
                        alt={tiers[0].alt}
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Content Right */}
                <div className="w-full lg:w-[55%] bg-[#FAFAF8] p-8 md:p-12 lg:p-20 flex flex-col justify-center">
                    <div className="max-w-xl mx-auto lg:mx-0">
                        <div className="text-accent font-sans text-xs tracking-[0.2em] uppercase mb-4">
                            {tiers[0].label}
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl text-textLight mb-6">
                            {tiers[0].name}
                        </h2>
                        <div className="font-sans text-2xl text-textLight mb-2 inline-block border-b-2 border-accent/30 pb-1">
                            {tiers[0].price}
                        </div>
                        <p className="font-serif italic text-2xl text-accent my-8">
                            "{tiers[0].tagline}"
                        </p>
                        <p className="font-sans text-base leading-relaxed text-mutedText mb-8">
                            {tiers[0].desc}
                        </p>

                        <div className="space-y-4">
                            {tiers[0].fullList.map((item, i) => (
                                <div key={i} className="font-sans text-sm">
                                    <strong className="font-bold text-textLight block mb-1">{item.bold}</strong>
                                    <span className="text-mutedText leading-relaxed block">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <p className="font-sans text-xs text-mutedText mt-12 italic border-t border-subtleBorder pt-6">
                            * Pricing varies based on guest count and floral selections
                        </p>
                    </div>
                </div>
            </section>

            {/* TIER TWO */}
            <section ref={addToDetailRefs} className="w-full bg-background flex flex-col-reverse lg:flex-row min-h-[80vh] overflow-hidden">
                {/* Content Left */}
                <div className="w-full lg:w-1/2 bg-[#FAFAF8] p-8 md:p-16 lg:p-24 flex flex-col justify-center">
                    <div className="max-w-xl mx-auto lg:mx-auto lg:mr-0 pl-0 lg:pl-12">
                        <div className="text-accent font-sans text-xs tracking-[0.2em] uppercase mb-4">
                            {tiers[1].label}
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl text-textLight mb-6">
                            {tiers[1].name}
                        </h2>
                        <div className="font-sans text-2xl text-textLight mb-2 inline-block border-b-2 border-accent/30 pb-1">
                            {tiers[1].price}
                        </div>
                        <p className="font-serif italic text-2xl text-accent my-8">
                            "{tiers[1].tagline}"
                        </p>
                        <p className="font-sans text-base leading-relaxed text-mutedText mb-12">
                            {tiers[1].desc}
                        </p>

                        <div className="space-y-6">
                            {tiers[1].fullList.map((item, i) => (
                                <div key={i} className="font-sans text-sm">
                                    <strong className="font-bold text-textLight block mb-1">{item.bold}</strong>
                                    <span className="text-mutedText leading-relaxed block">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <p className="font-sans text-xs text-mutedText mt-12 italic border-t border-subtleBorder pt-6">
                            * Pricing varies based on guest count and design selections
                        </p>
                    </div>
                </div>
                {/* Image Right */}
                <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative">
                    <img
                        src={tiers[1].image}
                        alt={tiers[1].alt}
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* TIER ONE - FULL PRODUCTION (DARK SECTION) */}
            <section ref={addToDetailRefs} className="w-full bg-primaryDark relative min-h-[80vh] flex flex-col justify-center py-32 lg:py-40 px-6 lg:px-20 overflow-hidden">
                {/* Subtle background overlay image (Optional parallax feel) */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <img
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop"
                        alt="Luxury background texture"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>

                {/* Left accent bar */}
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-2 bg-accent"></div>

                <div className="max-w-4xl mx-auto relative z-10 w-full">
                    <div className="text-accent font-sans text-xs tracking-[0.2em] uppercase mb-4 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-accent"></span>
                        {tiers[2].label}
                    </div>

                    <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white mb-6">
                        {tiers[2].name}
                    </h2>

                    <div className="font-sans text-3xl text-accent mb-16">
                        {tiers[2].price}
                    </div>

                    <div className="w-full max-w-2xl">
                        <p className="font-serif italic text-3xl md:text-4xl text-white/90 mb-12 leading-tight">
                            "{tiers[2].tagline}"
                        </p>
                        <p className="font-sans text-lg md:text-xl leading-relaxed text-white/70 mb-20">
                            {tiers[2].desc}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                        {tiers[2].fullList.map((item, i) => (
                            <div key={i} className="font-sans">
                                <strong className="font-bold text-accent text-base block mb-2 tracking-wide uppercase">{item.bold}</strong>
                                <span className="text-white/70 text-base leading-relaxed block">{item.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 pt-8 border-t border-white/10 flex justify-between items-center">
                        <p className="font-sans text-sm text-white/50 italic">
                            * Pricing varies based on guest count and production scale
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
