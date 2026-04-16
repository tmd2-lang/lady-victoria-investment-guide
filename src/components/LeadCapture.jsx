import React, { useState } from 'react';
import { Check, ChevronDown, Sparkles } from 'lucide-react';

const tierOptions = [
    {
        value: 'Tier Three',
        label: 'Tier Three',
        name: 'The Essentials',
        price: '$8k – $15k',
        highlight: 'Florals + Minimal Rentals',
        isSignature: false,
    },
    {
        value: 'Tier Two',
        label: 'Tier Two',
        name: 'Design + Custom Florals',
        price: '$20k – $30k',
        highlight: 'Custom Florals + Curated Rentals',
        isSignature: false,
    },
    {
        value: 'Tier One',
        label: 'Tier One · Signature',
        name: 'Full Production',
        price: 'Starting at $55k',
        highlight: 'Installations + Full Production',
        isSignature: true,
    },
];

export default function LeadCapture() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [selectedTier, setSelectedTier] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        const form = e.target;
        const data = new FormData(form);
        // Also add the selected tier since it's now managed via state not native select
        data.set('tier', selectedTier);

        try {
            // Replace this URL with your actual Formspree endpoint URL
            const response = await fetch('https://formspree.io/f/mvzwzovv', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSubmitted(true);
                form.reset();
                setSelectedTier('');
            } else {
                setError('Oops! There was a problem submitting your inquiry. Please try again or email us directly.');
            }
        } catch (err) {
            setError('Oops! There was a network error. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="w-full bg-background pt-32 lg:pt-40 pb-32 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="text-accent font-sans text-xs tracking-[0.2em] uppercase mb-6">Start Here</div>
                    <h2 className="font-serif text-4xl md:text-5xl text-textLight mb-4">Ready to Take the Next Step?</h2>
                    <p className="font-sans text-mutedText text-lg italic">
                        Share a few details and Irene will personally reach out within 48 hours.
                    </p>
                </div>

                <div className="bg-white p-8 md:p-12 lg:p-16 rounded-[2rem] border border-subtleBorder shadow-sm min-h-[500px] flex flex-col justify-center relative overflow-hidden transition-all duration-700">

                    {isSubmitted ? (
                        <div className="flex flex-col items-center text-center gap-6 animate-in fade-in zoom-in-95 duration-700">
                            <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mb-4 relative">
                                <div className="absolute inset-0 border border-accent/30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                                <Check className="w-10 h-10 text-accent" strokeWidth={1.5} />
                            </div>
                            <h3 className="font-serif text-4xl text-textLight">Your Vision is Received</h3>
                            <p className="font-sans text-lg text-mutedText max-w-md mx-auto leading-relaxed">
                                Thank you for reaching out. Irene will review your details and be in touch within 48 hours to schedule your complimentary consultation.
                            </p>
                            <p className="font-serif italic text-2xl text-accent mt-8 border-t border-subtleBorder pt-10 w-full max-w-sm mx-auto">
                                "We can't wait to create something beautiful together."
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-0 animate-in fade-in duration-500">
                            {error && (
                                <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl font-sans text-sm text-center mb-8">
                                    {error}
                                </div>
                            )}

                            {/* ── Section 1: Your Details ── */}
                            <div className="mb-12">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                                        <span className="font-sans text-[10px] font-bold text-accent">1</span>
                                    </div>
                                    <span className="font-sans text-xs uppercase tracking-[0.15em] text-textLight font-medium">Your Details</span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name" className="font-sans text-xs uppercase tracking-widest text-mutedText">Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            placeholder="Your full name"
                                            className="border-b border-subtleBorder py-3 bg-transparent focus:outline-none focus:border-accent transition-colors font-sans text-textLight placeholder:text-mutedText/40"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="email" className="font-sans text-xs uppercase tracking-widest text-mutedText">Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            placeholder="you@email.com"
                                            className="border-b border-subtleBorder py-3 bg-transparent focus:outline-none focus:border-accent transition-colors font-sans text-textLight placeholder:text-mutedText/40"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 md:col-span-1">
                                        <label htmlFor="phone" className="font-sans text-xs uppercase tracking-widest text-mutedText">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            placeholder="(555) 123-4567"
                                            className="border-b border-subtleBorder py-3 bg-transparent focus:outline-none focus:border-accent transition-colors font-sans text-textLight placeholder:text-mutedText/40"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ── Section 2: Choose Your Package (EMPHASIZED) ── */}
                            <div className="mb-12 -mx-8 md:-mx-12 lg:-mx-16 px-8 md:px-12 lg:px-16 py-10 bg-[#FAF9F6] border-y border-subtleBorder/60 relative">
                                {/* Subtle accent bar */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/40 rounded-r"></div>

                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                                        <span className="font-sans text-[10px] font-bold text-white">2</span>
                                    </div>
                                    <span className="font-sans text-xs uppercase tracking-[0.15em] text-textLight font-medium">Choose Your Package</span>
                                </div>
                                <p className="font-sans text-sm text-mutedText mb-8 ml-9">Which tier best matches your vision?</p>

                                {/* Hidden input to send tier value via form */}
                                <input type="hidden" name="tier" value={selectedTier} />

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {tierOptions.map((tier) => {
                                        const isSelected = selectedTier === tier.value;
                                        return (
                                            <button
                                                type="button"
                                                key={tier.value}
                                                onClick={() => setSelectedTier(prev => prev === tier.value ? '' : tier.value)}
                                                className={`relative flex flex-col text-left p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer group
                                                    ${tier.isSignature
                                                        ? isSelected
                                                            ? 'bg-primaryDark border-accent shadow-lg scale-[1.02]'
                                                            : 'bg-primaryDark/90 border-primaryDark hover:border-accent/50 hover:shadow-md'
                                                        : isSelected
                                                            ? 'bg-white border-accent shadow-lg scale-[1.02]'
                                                            : 'bg-white border-subtleBorder hover:border-accent/40 hover:shadow-md'
                                                    }`}
                                            >
                                                {/* Selection indicator */}
                                                <div className={`absolute top-3 right-3 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300
                                                    ${isSelected
                                                        ? 'bg-accent border-accent'
                                                        : tier.isSignature
                                                            ? 'border-white/30'
                                                            : 'border-subtleBorder'
                                                    }`}
                                                >
                                                    {isSelected && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                                                </div>

                                                {tier.isSignature && (
                                                    <div className="flex items-center gap-1.5 mb-2">
                                                        <Sparkles className="w-3 h-3 text-accent" />
                                                        <span className="font-sans text-[9px] uppercase tracking-widest text-accent">Signature</span>
                                                    </div>
                                                )}

                                                <div className={`font-sans text-[10px] uppercase tracking-[0.15em] mb-1 ${tier.isSignature ? 'text-white/60' : 'text-mutedText'}`}>
                                                    {tier.label}
                                                </div>
                                                <div className={`font-serif italic text-base mb-2 leading-tight ${tier.isSignature ? 'text-white' : 'text-textLight'}`}>
                                                    {tier.name}
                                                </div>
                                                <div className={`font-sans text-lg font-medium mb-2 ${tier.isSignature ? 'text-accent' : 'text-textLight'}`}>
                                                    {tier.price}
                                                </div>
                                                <div className={`font-sans text-[11px] leading-relaxed ${tier.isSignature ? 'text-white/50' : 'text-mutedText'}`}>
                                                    {tier.highlight}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>

                                <p className="font-sans text-[10px] text-mutedText mt-4 ml-1 italic">
                                    * Don't worry — this isn't a commitment. Just helps us tailor our conversation.
                                </p>
                            </div>

                            {/* ── Section 3: Wedding Details ── */}
                            <div className="mb-12">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                                        <span className="font-sans text-[10px] font-bold text-accent">3</span>
                                    </div>
                                    <span className="font-sans text-xs uppercase tracking-[0.15em] text-textLight font-medium">Wedding Details</span>
                                    <span className="font-sans text-[10px] text-mutedText italic ml-1">(optional)</span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="date" className="font-sans text-xs uppercase tracking-widest text-mutedText">Wedding Date</label>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            className="border-b border-subtleBorder py-3 bg-transparent focus:outline-none focus:border-accent transition-colors font-sans text-textLight"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="venue" className="font-sans text-xs uppercase tracking-widest text-mutedText">Venue Name</label>
                                        <input
                                            type="text"
                                            id="venue"
                                            name="venue"
                                            placeholder="Where's the celebration?"
                                            className="border-b border-subtleBorder py-3 bg-transparent focus:outline-none focus:border-accent transition-colors font-sans text-textLight placeholder:text-mutedText/40"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="guests" className="font-sans text-xs uppercase tracking-widest text-mutedText">Guest Count</label>
                                        <input
                                            type="number"
                                            id="guests"
                                            name="guests"
                                            placeholder="Estimated guests"
                                            className="border-b border-subtleBorder py-3 bg-transparent focus:outline-none focus:border-accent transition-colors font-sans text-textLight placeholder:text-mutedText/40"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ── Section 4: Your Vision ── */}
                            <div className="mb-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                                        <span className="font-sans text-[10px] font-bold text-accent">4</span>
                                    </div>
                                    <span className="font-sans text-xs uppercase tracking-[0.15em] text-textLight font-medium">Your Vision</span>
                                    <span className="font-sans text-[10px] text-mutedText italic ml-1">(optional)</span>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="vision" className="font-sans text-xs uppercase tracking-widest text-mutedText">Tell us about your dream day</label>
                                        <textarea
                                            id="vision"
                                            name="vision"
                                            rows="4"
                                            placeholder="Pinterest links, color palettes, vibe words..."
                                            className="border border-subtleBorder rounded-xl p-4 bg-transparent focus:outline-none focus:border-accent transition-colors font-sans text-textLight resize-none placeholder:text-mutedText/40"
                                        ></textarea>
                                    </div>

                                    {/* Make sure Formspree handles file uploads on your plan if using them, else it requires a paid tier. */}
                                    <div className="flex flex-col gap-2">
                                        <label className="font-sans text-xs uppercase tracking-widest text-mutedText">Upload Inspiration Photos</label>
                                        <input
                                            type="file"
                                            name="attachments"
                                            multiple
                                            accept="image/*"
                                            className="font-sans text-sm text-mutedText file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-sans file:bg-accent/10 file:text-accent hover:file:bg-accent/20 transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ── Submit ── */}
                            <div className="mt-4 flex flex-col items-center gap-4 pt-8 border-t border-subtleBorder/60">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`relative overflow-hidden group w-full md:w-auto bg-accent text-textDark px-12 py-4 rounded-full font-sans text-sm tracking-widest uppercase transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
                                >
                                    <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send My Inquiry'}</span>
                                    {!isSubmitting && <div className="absolute inset-0 bg-accentHover translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0" />}
                                </button>
                                <p className="font-sans text-xs text-mutedText italic">
                                    No pressure. No obligation. Just a conversation about what's possible.
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
