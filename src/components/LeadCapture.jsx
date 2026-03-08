import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function LeadCapture() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        const form = e.target;
        const data = new FormData(form);

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
                        <form onSubmit={handleSubmit} className="flex flex-col gap-8 animate-in fade-in duration-500">
                            {error && (
                                <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl font-sans text-sm text-center">
                                    {error}
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="font-sans text-xs uppercase tracking-widest text-textLight">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="border-b border-subtleBorder py-2 bg-transparent focus:outline-none focus:border-accent transition-colors font-sans text-textLight"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="font-sans text-xs uppercase tracking-widest text-textLight">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="border-b border-subtleBorder py-2 bg-transparent focus:outline-none focus:border-accent transition-colors font-sans text-textLight"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="date" className="font-sans text-xs uppercase tracking-widest text-textLight">Wedding Date</label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        className="border-b border-subtleBorder py-2 bg-transparent focus:outline-none focus:border-accent transition-colors font-sans text-textLight"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="venue" className="font-sans text-xs uppercase tracking-widest text-textLight">Venue Name</label>
                                    <input
                                        type="text"
                                        id="venue"
                                        name="venue"
                                        className="border-b border-subtleBorder py-2 bg-transparent focus:outline-none focus:border-accent transition-colors font-sans text-textLight"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="guests" className="font-sans text-xs uppercase tracking-widest text-textLight">Guest Count</label>
                                    <input
                                        type="number"
                                        id="guests"
                                        name="guests"
                                        className="border-b border-subtleBorder py-2 bg-transparent focus:outline-none focus:border-accent transition-colors font-sans text-textLight"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="vision" className="font-sans text-xs uppercase tracking-widest text-textLight">Tell us about your vision</label>
                                <textarea
                                    id="vision"
                                    name="vision"
                                    rows="4"
                                    placeholder="Pinterest links, color palettes, vibe words..."
                                    className="border border-subtleBorder rounded-xl p-4 bg-transparent focus:outline-none focus:border-accent transition-colors font-sans text-textLight resize-none"
                                ></textarea>
                            </div>

                            {/* Make sure Formspree handles file uploads on your plan if using them, else it requires a paid tier. */}
                            <div className="flex flex-col gap-2">
                                <label className="font-sans text-xs uppercase tracking-widest text-textLight">Upload Inspiration Photos (Optional)</label>
                                <input
                                    type="file"
                                    name="attachments"
                                    multiple
                                    accept="image/*"
                                    className="font-sans text-sm text-mutedText file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-sans file:bg-accent/10 file:text-accent hover:file:bg-accent/20 transition-colors"
                                />
                            </div>

                            <div className="mt-8 flex flex-col items-center gap-4">
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
