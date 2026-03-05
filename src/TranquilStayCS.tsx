import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeIn = {
    hidden: { opacity: 0, y: 16, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const ImageWithLightbox = ({ src, fullResSrc, alt, caption, className = "aspect-video" }: { src: string, fullResSrc?: string, alt: string, caption?: string, className?: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        } else {
            window.removeEventListener('keydown', handleEsc);
        }
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen]);

    return (
        <>
            <motion.div
                className={`${className} bg-zinc-50 border border-zinc-100 rounded-md overflow-hidden cursor-zoom-in relative group`}
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                onClick={() => setIsOpen(true)}
            >
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle Hover Affordance */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                    <a
                        href={`${import.meta.env.BASE_URL}tranquilstay/image-viewer.html?v=1&src=${encodeURIComponent(fullResSrc || src)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="pointer-events-auto bg-white/95 px-5 py-2.5 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                        <span className="text-[10px] lowercase tracking-widest font-bold text-black pointer-events-none">open in new tab</span>
                    </a>
                </div>
            </motion.div>

            <AnimatePresence>
                {isOpen && createPortal(
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/90 cursor-auto"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Preview Container */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="relative z-10 w-full max-w-7xl flex flex-col items-center pointer-events-none"
                        >
                            <div className="relative flex flex-col items-center gap-6 w-full pointer-events-auto">
                                <div className="relative group/preview shadow-2xl rounded-sm overflow-hidden bg-white">
                                    <img
                                        src={src}
                                        alt={alt}
                                        className="max-w-full max-h-[75vh] object-contain"
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                </div>

                                <div className="flex flex-col items-center gap-5 w-full text-center">
                                    {caption && (
                                        <p className="text-white/60 text-[11px] lowercase max-w-2xl px-8 font-sans tracking-tight leading-relaxed">
                                            {caption}
                                        </p>
                                    )}

                                    <div className="flex items-center gap-4">
                                        <a
                                            href={`${import.meta.env.BASE_URL}tranquilstay/image-viewer.html?v=1&src=${encodeURIComponent(fullResSrc || src)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[11px] text-zinc-900 transition-all border border-zinc-200 px-6 py-2.5 rounded-full lowercase tracking-[0.15em] bg-white shadow-xl hover:bg-zinc-50 hover:scale-105 active:scale-95 font-medium flex items-center gap-2"
                                        >
                                            view fullscreen
                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1H7V7M7 1L1 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>

                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="text-[11px] text-white/60 hover:text-white transition-all border border-white/20 px-6 py-2.5 rounded-full lowercase tracking-[0.15em] hover:bg-white/10 font-medium"
                                        >
                                            [close]
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>,
                    document.body
                )}
            </AnimatePresence>
        </>
    );
};

function TranquilStayCS() {
    return (
        <div className="selection:bg-zinc-100 selection:text-black min-h-screen font-sans text-base lowercase bg-white pb-32">
            <motion.div
                className="flex flex-col items-center"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                {/* Header Section */}
                <header className="w-full max-w-[608px] px-8 pt-24 sm:pt-32 flex flex-col gap-10">
                    <motion.div variants={fadeIn}>
                        <Link aria-label="Go to the homepage" to="/" className="w-8 h-8 block group">
                            <img alt="Soham Poddar" loading="lazy" width="64" height="64" className="rounded-full object-cover w-8 h-8 transition-transform duration-300 group-hover:scale-110" src={`${import.meta.env.BASE_URL}avatar.png`} />
                        </Link>
                    </motion.div>

                    <div className="flex flex-col gap-0.5">
                        <motion.h1 variants={fadeIn} className="text-base font-medium text-black">
                            the tranquil stay: identity & digital ecosystem
                        </motion.h1>
                        <motion.span variants={fadeIn} className="text-zinc-400 font-normal">
                            brand identity, web development & print design · 2024
                        </motion.span>
                    </div>
                </header>

                {/* Context Section */}
                <section className="w-full max-w-[608px] px-8 mt-12 flex flex-col gap-3">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        context
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        <span className="font-bold text-black">The Tranquil Stay</span> is a hospitality brand built on the pillars of serenity and Indian heritage. I was responsible for crafting the entire brand experience from the ground up—designing the <span className="font-bold text-black">official logo</span>, a high-performance <span className="font-bold text-black">responsive website</span>, and a comprehensive <span className="font-bold text-black">brand guideline</span> to ensure long-term consistency. This identity then scaled into <span className="font-bold text-black">The Tranquil Kitchen</span>, where I designed the physical menu system for their in-house dining.
                    </motion.p>
                </section>

                {/* Visual 1: Brand Moodboard */}
                <motion.div variants={fadeIn} className="w-full max-w-[832px] px-8 mt-12">
                    <ImageWithLightbox
                        src={`${import.meta.env.BASE_URL}tranquilstay/moodboard_compressed.webp`}
                        fullResSrc={`${import.meta.env.BASE_URL}tranquilstay/moodboard.png`}
                        alt="Brand Moodboard"
                        caption="brand moodboard: earthy tones, soft textures & the visual soul of the brand"
                    />
                    <div className="px-1 text-right mt-1.5">
                        <span className="text-[11px] text-zinc-400">brand moodboard</span>
                    </div>
                </motion.div>

                {/* Problem Section */}
                <section className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-4">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        the problem & opportunity
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        The challenge was to create a "Total Brand Experience" where the digital guest journey felt identical to the physical stay.
                    </motion.p>
                    <div className="flex flex-col gap-4 mt-2">
                        <motion.p variants={fadeIn} className="text-black leading-relaxed">
                            <span className="font-bold">brand fragmentation:</span> Most hospitality startups lose their visual voice between their website and their physical on-site materials.
                        </motion.p>
                        <motion.p variants={fadeIn} className="text-black leading-relaxed">
                            <span className="font-bold">information architecture:</span> The kitchen menu required a rigorous structure to organize diverse categories—from Vegetarian and Non-Veg to Combos and Thalis—without overwhelming the reader.
                        </motion.p>
                        <motion.p variants={fadeIn} className="text-black leading-relaxed">
                            <span className="font-bold">the opportunity:</span> To use the Figma Brand Guidelines as a "Single Source of Truth," allowing the brand to feel professional and high-end across every touchpoint.
                        </motion.p>
                    </div>
                </section>

                {/* Visual 2: Brand Guidelines Figma Embed */}
                <motion.div variants={fadeIn} className="w-full max-w-[832px] px-8 mt-12">
                    <div className="aspect-video bg-zinc-50 border border-zinc-100 rounded-md overflow-hidden">
                        <iframe
                            style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                            width="100%"
                            height="100%"
                            src="https://embed.figma.com/deck/0lND8fw9VhOpKsVwC5HkIs/Brand-Guidelines?node-id=1-42&embed-host=share"
                            allowFullScreen
                            title="Tranquil Stay Brand Guidelines"
                        />
                    </div>
                    <div className="px-1 mt-1.5 flex items-center justify-between">
                        <span className="text-[11px] text-zinc-400">brand guidelines deck</span>
                        <a
                            href="https://www.figma.com/design/3ZBcCZ94glkbW2EhM7bVlG/Tranquil-Stay-Brand-Guidelines"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] text-zinc-400 hover:text-black transition-colors underline decoration-zinc-200 underline-offset-4 hover:decoration-zinc-400"
                        >
                            open in figma ↗
                        </a>
                    </div>
                </motion.div>

                {/* Solution Section */}
                <section className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-3">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        the solution
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        I delivered a unified design system that bridges the gap between digital interaction and physical service.
                    </motion.p>
                    <ul className="flex flex-col gap-4 mt-2">
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">the identity & website:</span> Developed a clean, minimalist logo and built <a href="https://www.thetranquilstay.in/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-200 underline-offset-4 hover:decoration-zinc-400 transition-colors">thetranquilstay.in</a> to reflect the "Tranquil" ethos. The site serves as the central hub for bookings and brand discovery.
                        </motion.li>
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">scalable brand guidelines:</span> Created a rulebook for typography, color, and spacing. This ensured that when I moved to the Menu Design, the visual language remained identical to the website.
                        </motion.li>
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">the physical menu:</span> Designed a high-contrast, scannable layout. By categorizing complex items like Fish specialties and Thali combinations, I improved the customer's decision-making process.
                        </motion.li>
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">integrated payments:</span> Bridged the tech-gap by placing prominent QR/Paytm scan-to-pay assets on the final menu page to facilitate a frictionless checkout.
                        </motion.li>
                    </ul>
                </section>

                {/* Visual 3: Physical Menu */}
                <motion.div variants={fadeIn} className="w-full max-w-[832px] px-8 mt-12">
                    <ImageWithLightbox
                        src={`${import.meta.env.BASE_URL}tranquilstay/menu_compressed.webp`}
                        fullResSrc={`${import.meta.env.BASE_URL}tranquilstay/menu.png`}
                        alt="Tranquil Kitchen Menu Design"
                        caption="the tranquil kitchen menu: print design with integrated payment qr codes"
                    />
                    <div className="px-1 text-right mt-1.5">
                        <span className="text-[11px] text-zinc-400">print design & menu system</span>
                    </div>
                </motion.div>

                {/* Outcome Section */}
                <section className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-3">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        the outcome
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        This project demonstrates my ability to lead a 360-degree branding effort. By aligning the <span className="font-bold text-black">Logo, Website, and Menu</span> under a single cohesive guideline, I transformed <span className="italic text-zinc-800">The Tranquil Stay</span> into a polished, professional brand that communicates trust and serenity at every stage of the user journey.
                    </motion.p>
                </section>

                {/* Visual 4: Website Interaction Demo (ts.mp4) */}
                <motion.div variants={fadeIn} className="w-full max-w-[832px] px-8 mt-12">
                    <div className="aspect-video bg-zinc-50 border border-zinc-100 rounded-md overflow-hidden">
                        <video
                            src={`${import.meta.env.BASE_URL}tranquilstay/ts.mp4`}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="px-1 mt-1.5 flex items-center justify-between">
                        <span className="text-[11px] text-zinc-400">website interaction demo</span>
                        <a
                            href={`${import.meta.env.BASE_URL}tranquilstay/ts.mp4`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] text-zinc-400 hover:text-black transition-colors underline decoration-zinc-200 underline-offset-4 hover:decoration-zinc-400"
                        >
                            open in new tab ↗
                        </a>
                    </div>
                </motion.div>

                {/* Links Section */}
                <section className="w-full max-w-[608px] px-8 mt-24 flex flex-col gap-4">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        links
                    </motion.h2>
                    <motion.div variants={fadeIn} className="flex flex-col gap-3">
                        <a href="https://www.thetranquilstay.in/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-zinc-500 transition-colors underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-400 w-fit">
                            thetranquilstay.in - live site ↗
                        </a>
                    </motion.div>
                </section>

                {/* Footer Navigation */}
                <footer className="w-full max-w-[832px] px-8 mt-32 border-t border-zinc-100 pt-12">
                    <motion.div variants={fadeIn} className="flex items-start justify-between gap-4">
                        <Link to="/work/ar-markets" className="flex flex-col gap-1 group max-w-[35%]">
                            <span className="text-[10px] text-zinc-400 tracking-[0.2em] uppercase font-medium">← previous</span>
                            <span className="text-[13px] text-zinc-500 group-hover:text-black transition-colors leading-snug">navigating christmas markets with ar</span>
                        </Link>
                        <Link to="/" className="flex flex-col items-center gap-1 group">
                            <span className="text-[10px] text-zinc-400 tracking-[0.2em] uppercase font-medium">home</span>
                            <span className="text-[13px] text-zinc-500 group-hover:text-black transition-colors">↑</span>
                        </Link>
                        <Link to="/work/discordcs" className="flex flex-col items-end gap-1 group max-w-[35%]">
                            <span className="text-[10px] text-zinc-400 tracking-[0.2em] uppercase font-medium">next →</span>
                            <span className="text-[13px] text-zinc-500 group-hover:text-black transition-colors leading-snug text-right">improving discord's onboarding</span>
                        </Link>
                    </motion.div>
                </footer>
            </motion.div>
        </div>
    );
}

export default TranquilStayCS;
