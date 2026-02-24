import React from 'react';

export default function LeadCapture() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with Formspree logic
        console.log("Form submitted");
    };

    return (
        <section id="contact" className="w-full bg-background pb-32 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl text-textLight mb-4">Ready to Take the Next Step?</h2>
                    <p className="font-sans text-mutedText text-lg italic">
                        Share a few details and Irene will personally reach out within 48 hours.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2rem] border border-subtleBorder shadow-sm flex flex-col gap-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="font-sans text-xs uppercase tracking-widest text-textLight">Name *</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="border-b border-subtleBorder py-2 bg-transparent focus:outline-none focus:border-accent transition-colors font-sans text-textLight"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-sans text-xs uppercase tracking-widest text-textLight">Email *</label>
                            <input
                                type="email"
                                id="email"
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
                                className="border-b border-subtleBorder py-2 bg-transparent focus:outline-none focus:border-accent transition-colors font-sans text-textLight"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="venue" className="font-sans text-xs uppercase tracking-widest text-textLight">Venue Name</label>
                            <input
                                type="text"
                                id="venue"
                                className="border-b border-subtleBorder py-2 bg-transparent focus:outline-none focus:border-accent transition-colors font-sans text-textLight"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="guests" className="font-sans text-xs uppercase tracking-widest text-textLight">Guest Count</label>
                            <input
                                type="number"
                                id="guests"
                                className="border-b border-subtleBorder py-2 bg-transparent focus:outline-none focus:border-accent transition-colors font-sans text-textLight"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="vision" className="font-sans text-xs uppercase tracking-widest text-textLight">Tell us about your vision</label>
                        <textarea
                            id="vision"
                            rows="4"
                            placeholder="Pinterest links, color palettes, vibe words..."
                            className="border border-subtleBorder rounded-xl p-4 bg-transparent focus:outline-none focus:border-accent transition-colors font-sans text-textLight resize-none"
                        ></textarea>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-sans text-xs uppercase tracking-widest text-textLight">Upload Inspiration Photos (Optional)</label>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            className="font-sans text-sm text-mutedText file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-sans file:bg-accent/10 file:text-accent hover:file:bg-accent/20 transition-colors"
                        />
                    </div>

                    <div className="mt-8 flex flex-col items-center gap-4">
                        <button
                            type="submit"
                            className="relative overflow-hidden group w-full md:w-auto bg-accent text-textDark px-12 py-4 rounded-full font-sans text-sm tracking-widest uppercase hover:scale-[1.02] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                        >
                            <span className="relative z-10">Send My Inquiry</span>
                            <div className="absolute inset-0 bg-accentHover translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0" />
                        </button>
                        <p className="font-sans text-xs text-mutedText italic">
                            No pressure. No obligation. Just a conversation about what's possible.
                        </p>
                    </div>

                </form>
            </div>
        </section>
    );
}
