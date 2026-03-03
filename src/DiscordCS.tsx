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
                        href={`${import.meta.env.BASE_URL}discord/image-viewer.html?src=${encodeURIComponent(fullResSrc || src)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="pointer-events-auto bg-white/95 px-5 py-2.5 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                        <span className="text-[10px] uppercase tracking-widest font-bold text-black pointer-events-none">open in new tab</span>
                    </a>
                </div>
            </motion.div>

            <AnimatePresence>
                {isOpen && createPortal(
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
                        {/* Dull Backdrop - Click to close */}
                        {/* Removed backdrop-blur as it causes major lagging on large surfaces */}
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
                                            href={`${import.meta.env.BASE_URL}discord/image-viewer.html?src=${encodeURIComponent(fullResSrc || src)}`}
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

function DiscordCS() {
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
                            rethinking discord: solving the "gamer jargon" barrier
                        </motion.h1>
                        <motion.span variants={fadeIn} className="text-zinc-400 font-normal">
                            ux design case study · 2021
                        </motion.span>
                    </div>
                </header>

                {/* Context Section */}
                <section className="w-full max-w-[608px] px-8 mt-12 flex flex-col gap-3">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black uppercase tracking-tight">
                        context
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        Discord is a powerful, affordable alternative to Slack and Microsoft Teams, yet it struggles to gain traction in professional environments. While exploring the platform’s potential for remote work, I conducted a competitor analysis against Google Workspace and Zoom, identifying a major gap in Visibility a core principle of Human Computer Interaction (HCI).
                    </motion.p>
                </section>

                {/* Visual 1: Competitor Comparison */}
                <motion.div variants={fadeIn} className="w-full max-w-[832px] px-8 mt-12">
                    <ImageWithLightbox
                        src={`${import.meta.env.BASE_URL}discord/companalysis_compressed.webp`}
                        fullResSrc={`${import.meta.env.BASE_URL}discord/companalysis.png`}
                        alt="Competitor Comparison: Discord vs Slack vs Teams"
                        caption="competitor analysis: affordability vs feature visibility"
                    />
                    <div className="px-1 text-right mt-1.5">
                        <span className="text-[11px] text-zinc-400">competitor analysis</span>
                    </div>
                </motion.div>

                {/* Problem Section */}
                <section className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-4">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        the problem "the why?"
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        My research revealed a significant "Age & Experience Gap." Users under 25 navigate Discord with ease, while the **25–40 demographic** suffers from high cognitive load.
                    </motion.p>
                    <motion.div variants={fadeIn} className="flex flex-col gap-4 mt-2">
                        <p className="text-black leading-relaxed">
                            <span className="font-bold">the barrier:</span> Discord relies heavily on gaming jargon and hidden menus. Professional users often requested features that already existed but were invisible to them.
                        </p>
                        <p className="text-black leading-relaxed">
                            <span className="font-bold">the friction:</span> A total lack of guided onboarding means new users are dropped into a complex interface with no clear direction.
                        </p>
                        <p className="text-black leading-relaxed">
                            <span className="font-bold">the opportunity:</span> By stripping away "gamer" gatekeeping and making features visible, Discord can become the most robust, cost-effective collaboration tool for the modern workforce.
                        </p>
                    </motion.div>
                </section>

                {/* Visual 2 & 3: Jargon Map & Persona */}
                <motion.div variants={fadeIn} className="w-full max-w-[832px] px-8 mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-3">
                        <ImageWithLightbox
                            src={`${import.meta.env.BASE_URL}discord/jargon_map_compressed.webp`}
                            fullResSrc={`${import.meta.env.BASE_URL}discord/jargon_map.png`}
                            alt="Gaming Terminology vs Professional Terminology Map"
                            caption="the jargon map: bridging the gap between social and professional language"
                            className="aspect-square"
                        />
                        <div className="px-1">
                            <span className="text-[11px] text-zinc-400">the jargon map: bridge the communication gap</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <ImageWithLightbox
                            src={`${import.meta.env.BASE_URL}discord/persona_compressed.webp`}
                            fullResSrc={`${import.meta.env.BASE_URL}discord/persona.png`}
                            alt="User Persona: The Frustrated Professional"
                            caption="user persona: Sarah, representing the professional demographic struggling with cognitive load"
                            className="aspect-square"
                        />
                        <div className="px-1">
                            <span className="text-[11px] text-zinc-400">user persona: Sarah, the frustrated professional</span>
                        </div>
                    </div>
                </motion.div>

                {/* Solution Section */}
                <section className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-3">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black uppercase tracking-tight">
                        the solution
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        I designed a **context-aware onboarding flow** tailored to the professional user.
                    </motion.p>
                    <ul className="flex flex-col gap-4 mt-2">
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">guided navigation:</span> A step-by-step walkthrough that replaces technical jargon with professional terminology.
                        </motion.li>
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">feature discovery:</span> Using "Hotspots" to bring "hidden" collaboration tools to the surface, reducing the learning curve.
                        </motion.li>
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">personalized entry:</span> An onboarding quiz that allows experienced users to "Skip All" while providing a "Professional Workspace" preset for teams.
                        </motion.li>
                    </ul>
                </section>

                {/* Visual 4: Wireframes */}
                <motion.div variants={fadeIn} className="w-full max-w-[832px] px-8 mt-12">
                    <ImageWithLightbox
                        src={`${import.meta.env.BASE_URL}discord/wireframes_compressed.webp`}
                        fullResSrc={`${import.meta.env.BASE_URL}discord/wireframes.png`}
                        alt="Onboarding Workflow Wireframes"
                        caption="onboarding flow wireframes: simplified entry points and feature discovery tooltips"
                    />
                    <div className="px-1 text-right mt-1.5">
                        <span className="text-[11px] text-zinc-400">new onboarding flow development & user journey</span>
                    </div>
                </motion.div>

                {/* Impact Section */}
                <section className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-3">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black uppercase tracking-tight">
                        the impact
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        By focusing on **Cognitive Load Reduction**, the redesign ensures that users spend less time "learning the app" and more time collaborating. This transition moves Discord from a niche community hub to a viable, high-performance enterprise tool.
                    </motion.p>
                </section>

                {/* Final Visual: High-Fi Mockup */}
                <motion.div variants={fadeIn} className="w-full max-w-[832px] px-8 mt-12">
                    <ImageWithLightbox
                        src={`${import.meta.env.BASE_URL}discord/mockup_compressed.webp`}
                        fullResSrc={`${import.meta.env.BASE_URL}discord/mockup.png`}
                        alt="Final Redesigned Professional Dashboard"
                        caption="final high-fidelity mockup: a clean, elegant, and modern interface redesigned for focus"
                    />
                    <div className="px-1 text-right mt-1.5">
                        <span className="text-[11px] text-zinc-400">final high-fidelity mockup: clean, elegant, and modern interface</span>
                    </div>
                </motion.div>

                {/* Footer Spacer */}
                <footer className="w-full max-w-[608px] px-8 mt-32 border-t border-zinc-100 pt-12">
                    <motion.div variants={fadeIn}>
                        <Link className="text-zinc-500 hover:text-black transition-colors underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-400" to="/">Back to home</Link>
                    </motion.div>
                </footer>
            </motion.div>
        </div>
    );
}

export default DiscordCS;
