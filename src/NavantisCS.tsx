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
        }
        return () => window.removeEventListener('keydown', handleEsc);
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
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                    <span className="pointer-events-none bg-white/95 px-5 py-2.5 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <span className="text-[10px] lowercase tracking-widest font-bold text-black pointer-events-none">view</span>
                    </span>
                </div>
            </motion.div>

            <AnimatePresence>
                {isOpen && createPortal(
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/90 cursor-auto"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="relative z-10 w-full max-w-7xl flex flex-col items-center pointer-events-none"
                        >
                            <div className="relative flex flex-col items-center gap-6 w-full pointer-events-auto">
                                <div className="relative shadow-2xl rounded-sm overflow-hidden bg-white">
                                    <img
                                        src={fullResSrc || src}
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
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="text-[11px] text-white/60 hover:text-white transition-all border border-white/20 px-6 py-2.5 rounded-full lowercase tracking-[0.15em] hover:bg-white/10 font-medium"
                                    >
                                        [close]
                                    </button>
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

function NavantisCS() {
    return (
        <div className="selection:bg-zinc-100 selection:text-black min-h-screen font-sans text-base lowercase bg-white pb-32">
            <motion.div
                className="flex flex-col items-center"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                {/* Header */}
                <header className="w-full max-w-[608px] px-8 pt-24 sm:pt-32 flex flex-col gap-10">
                    <motion.div variants={fadeIn}>
                        <Link aria-label="Go to the homepage" to="/" className="w-8 h-8 block group">
                            <img alt="Soham Poddar" loading="lazy" width="64" height="64" className="rounded-full object-cover w-8 h-8 transition-transform duration-300 group-hover:scale-110" src={`${import.meta.env.BASE_URL}avatar.png`} />
                        </Link>
                    </motion.div>

                    <div className="flex flex-col gap-0.5">
                        <motion.h1 variants={fadeIn} className="text-base font-medium text-black">
                            navantis: building a brand through iteration
                        </motion.h1>
                        <motion.span variants={fadeIn} className="text-zinc-400 font-normal">
                            brand identity, visual design & web development · 2024–2025
                        </motion.span>
                    </div>
                </header>

                {/* Context */}
                <section className="w-full max-w-[608px] px-8 mt-12 flex flex-col gap-3">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        context
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        <span className="font-bold text-black">Navantis</span> is an elite technology consultancy that builds AI systems, software, automation, and intelligent infrastructure. This case study documents the evolution of its visual identity across three distinct iterations — from an initial concept called <span className="font-bold text-black">KIC</span>, through an experimental phase as <span className="font-bold text-black">Neuroweave</span>, to the final identity: <span className="font-bold text-black">Navantis</span>.
                    </motion.p>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        Each iteration wasn't a failure — it was a refinement. The design evolved from dark, typography-heavy aesthetics toward something with institutional warmth and quiet authority.
                    </motion.p>
                </section>

                {/* Visual 1: The Final — Navantis Hero */}
                <motion.div variants={fadeIn} className="w-full max-w-[832px] px-8 mt-12">
                    <ImageWithLightbox
                        src={`${import.meta.env.BASE_URL}navantis/nav-hero.png`}
                        alt="Navantis — Final Identity"
                        caption="the final navantis identity: light-mode, institutional warmth, typographic architecture"
                    />
                    <div className="px-1 text-right mt-1.5">
                        <span className="text-[11px] text-zinc-400">navantis — final identity</span>
                    </div>
                </motion.div>

                {/* Iteration 1: KIC */}
                <section className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-4">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        iteration 01 — kic
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        The first iteration. <span className="font-bold">KIC</span> was built on a dark canvas with blue accent (#2563EB), Plus Jakarta Sans typography, and a focus on aggressive minimalism. It worked as a proof of concept but had problems:
                    </motion.p>
                    <ul className="flex flex-col gap-3 mt-1">
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">generic dark theme:</span> every AI consultancy uses dark mode with blue accents. it said "startup" not "institution."
                        </motion.li>
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">typography lacked authority:</span> plus jakarta sans is friendly and rounded — the wrong personality for a consultancy.
                        </motion.li>
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">no brand mark:</span> just a text wordmark with no distinctive identity.
                        </motion.li>
                    </ul>
                </section>

                {/* Visual: KIC */}
                <motion.div variants={fadeIn} className="w-full max-w-[832px] px-8 mt-12">
                    <ImageWithLightbox
                        src={`${import.meta.env.BASE_URL}navantis/kic-hero.png`}
                        alt="KIC — First Iteration"
                        caption="kic: dark theme, blue accent, plus jakarta sans — functional but generic"
                    />
                    <div className="px-1 text-right mt-1.5">
                        <span className="text-[11px] text-zinc-400">iteration 01 — kic</span>
                    </div>
                </motion.div>

                {/* Iteration 2: The Pivot */}
                <section className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-4">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        the pivot — what changed
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        The core insight came from studying reference sites — particularly <span className="font-bold">microsoft.ai</span>, <span className="font-bold">axiom protocol</span>, and <span className="font-bold">statworx</span>. The best technology brands don't look like technology brands. They look like institutions.
                    </motion.p>
                    <div className="flex flex-col gap-4 mt-2">
                        <motion.p variants={fadeIn} className="text-black leading-relaxed">
                            <span className="font-bold">key decisions:</span>
                        </motion.p>
                        <motion.p variants={fadeIn} className="text-black leading-relaxed">
                            <span className="font-bold">light over dark:</span> dark mode signals "tech startup." light mode with confident typography signals institutional authority. microsoft.ai proved this — warm, bright, human.
                        </motion.p>
                        <motion.p variants={fadeIn} className="text-black leading-relaxed">
                            <span className="font-bold">restraint over decoration:</span> the accent color was reduced to hover-only states. color became punctuation, not decoration. maximum 3 accent elements per viewport.
                        </motion.p>
                        <motion.p variants={fadeIn} className="text-black leading-relaxed">
                            <span className="font-bold">inter over everything:</span> inter at editorial scale with extreme weight contrast (200 to 800) reads as deliberate and precise — not default.
                        </motion.p>
                    </div>
                </section>

                {/* Iteration 3: Navantis */}
                <section className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-4">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        iteration 03 — navantis
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        The final identity. <span className="font-bold">Navantis</span> — a name that suggests navigation and vantage point. The tagline: <span className="italic">"think unrealistic. we'll make it realistic."</span>
                    </motion.p>
                    <ul className="flex flex-col gap-3 mt-1">
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">the NV mark:</span> a geometric monogram where N's right stroke merges with V's left stroke — sharing a single diagonal. it represents merging disparate systems into one unified architecture.
                        </motion.li>
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">typographic events:</span> the hero uses outlined stroke text for "unrealistic" that fills with indigo on hover — the metaphor: what seems unrealistic becomes real when you engage with it.
                        </motion.li>
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">weight as architecture:</span> weight 200 ("we'll make it") vs weight 800 ("realistic") — the contrast IS the emphasis, no decoration needed.
                        </motion.li>
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">before→after metrics:</span> case studies show transformations ("weeks → hours") rather than single numbers — the change is the story.
                        </motion.li>
                    </ul>
                </section>

                {/* Visual: Navantis Full */}
                <motion.div variants={fadeIn} className="w-full max-w-[832px] px-8 mt-12">
                    <ImageWithLightbox
                        src={`${import.meta.env.BASE_URL}navantis/nav-full.png`}
                        alt="Navantis — Full Page"
                        caption="navantis full page: hero, philosophy, capabilities, work, process, cta"
                        className="aspect-[1440/3000]"
                    />
                    <div className="px-1 text-right mt-1.5">
                        <span className="text-[11px] text-zinc-400">full page composition</span>
                    </div>
                </motion.div>

                {/* Brand System */}
                <section className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-3">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        the brand system
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        Beyond the website, a complete brand system was built — typography scale, color tokens, spacing rhythm, logo specifications, and anti-patterns — all documented as both code (CSS custom properties + Tailwind config) and Figma tokens (W3C DTCG format).
                    </motion.p>
                </section>

                {/* Visual: Brand Page */}
                <motion.div variants={fadeIn} className="w-full max-w-[832px] px-8 mt-12">
                    <ImageWithLightbox
                        src={`${import.meta.env.BASE_URL}navantis/nav-brand.png`}
                        alt="Navantis Brand System"
                        caption="living brand system: logo, color palette, typography scale, spacing, anti-patterns"
                        className="aspect-[1440/2000]"
                    />
                    <div className="px-1 text-right mt-1.5">
                        <span className="text-[11px] text-zinc-400">brand guidelines page</span>
                    </div>
                </motion.div>

                {/* Side-by-Side Evolution */}
                <section className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-3">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        the evolution — side by side
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        the journey from generic to institutional in three key shifts:
                    </motion.p>
                </section>

                <motion.div variants={fadeIn} className="w-full max-w-[832px] px-8 mt-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <ImageWithLightbox
                            src={`${import.meta.env.BASE_URL}navantis/kic-hero.png`}
                            alt="KIC — Before"
                            caption="kic: dark, blue accent, rounded typography"
                        />
                        <ImageWithLightbox
                            src={`${import.meta.env.BASE_URL}navantis/nav-hero.png`}
                            alt="Navantis — After"
                            caption="navantis: light, restrained accent, editorial typography"
                        />
                    </div>
                    <div className="px-1 mt-3 flex items-center justify-between">
                        <span className="text-[11px] text-zinc-400">iteration 01 → iteration 03</span>
                        <span className="text-[11px] text-zinc-400">dark → light · generic → institutional</span>
                    </div>
                </motion.div>

                {/* Outcome */}
                <section className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-3">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        the outcome
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        Navantis demonstrates that design quality isn't about the first attempt — it's about the discipline to iterate. Each version taught something specific:
                    </motion.p>
                    <ul className="flex flex-col gap-3 mt-2">
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">KIC</span> taught that dark themes and blue accents are the path of least resistance — and least distinction.
                        </motion.li>
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">the pivot</span> taught that studying the best (microsoft.ai, axiom) reveals principles, not patterns to copy.
                        </motion.li>
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">Navantis</span> proved that restraint is the hardest design decision — and the most impactful. the accent color appears on 3 elements. everything else is black, white, and gray. the restraint is the design.
                        </motion.li>
                    </ul>
                </section>

                {/* Tech Stack */}
                <section className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-3">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        built with
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-zinc-500 leading-relaxed text-[14px]">
                        next.js 14 · typescript · tailwind css · framer motion · inter + geist mono · figma tokens (W3C DTCG) · custom figma plugin for brand system generation
                    </motion.p>
                </section>

                {/* Footer Navigation */}
                <footer className="w-full max-w-[832px] px-8 mt-32 border-t border-zinc-100 pt-12">
                    <motion.div variants={fadeIn} className="flex items-start justify-between gap-4">
                        <Link to="/work/tranquilstay" className="flex flex-col gap-1 group max-w-[35%]">
                            <span className="text-[10px] text-zinc-400 tracking-[0.2em] font-medium">← previous</span>
                            <span className="text-[13px] text-zinc-500 group-hover:text-black transition-colors leading-snug">the tranquil stay</span>
                        </Link>
                        <Link to="/" className="flex flex-col items-center gap-1 group">
                            <span className="text-[10px] text-zinc-400 tracking-[0.2em] font-medium">home</span>
                            <span className="text-[13px] text-zinc-500 group-hover:text-black transition-colors">↑</span>
                        </Link>
                        <Link to="/work/discordcs" className="flex flex-col items-end gap-1 group max-w-[35%]">
                            <span className="text-[10px] text-zinc-400 tracking-[0.2em] font-medium">next →</span>
                            <span className="text-[13px] text-zinc-500 group-hover:text-black transition-colors leading-snug text-right">improving discord's onboarding</span>
                        </Link>
                    </motion.div>
                </footer>
            </motion.div>
        </div>
    );
}

export default NavantisCS;
