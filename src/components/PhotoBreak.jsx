import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PhotoBreak({ image, alt }) {
    const imgRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(imgRef.current, {
                scrollTrigger: {
                    trigger: imgRef.current.parentElement,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
                yPercent: 20,
                ease: 'none'
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-primaryDark">
            <img
                ref={imgRef}
                src={image}
                alt={alt}
                className="absolute -top-[20%] left-0 w-full h-[140%] object-cover opacity-80"
            />
        </section>
    );
}
