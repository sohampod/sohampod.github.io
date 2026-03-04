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
                        href={`${import.meta.env.BASE_URL}armarkets/image-viewer.html?v=1&src=${encodeURIComponent(fullResSrc || src)}`}
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
                                            href={`${import.meta.env.BASE_URL}armarkets/image-viewer.html?v=1&src=${encodeURIComponent(fullResSrc || src)}`}
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

function ArMarketsCS() {
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
                            navigating christmas markets with augmented reality
                        </motion.h1>
                        <motion.span variants={fadeIn} className="text-zinc-400 font-normal">
                            ar glasses & ux case study · 2025
                        </motion.span>
                    </div>
                </header>

                {/* Context Section */}
                <section className="w-full max-w-[608px] px-8 mt-12 flex flex-col gap-3">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        context
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        Christmas markets are vibrant but chaotic. While they are designed for spontaneous wandering, the density of crowds and the lack of structured signage often lead to friction. <span className="font-bold">Klar AR</span> is a conceptual head-mounted Augmented Reality system designed to act as a subtle, hands-free guide, helping visitors navigate these sensory-rich environments without breaking the social "magic" of the experience.
                    </motion.p>
                </section>

                {/* Visual 1: Field Observation Photo */}
                <motion.div variants={fadeIn} className="w-full max-w-[832px] px-8 mt-12">
                    <ImageWithLightbox
                        src={`${import.meta.env.BASE_URL}armarkets/boards_compressed.webp`}
                        fullResSrc={`${import.meta.env.BASE_URL}armarkets/boards.png`}
                        alt="Field Observation Photo"
                        caption="field observation: the chaos of a crowded market"
                    />
                    <div className="px-1 text-right mt-1.5">
                        <span className="text-[11px] text-zinc-400">field observation</span>
                    </div>
                </motion.div>

                {/* The Problem & Opportunity Section */}
                <section className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-4">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        the problem & opportunity
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        Through field observations and interviews, I identified that traditional navigation (like Google Maps) fails inside a market.
                    </motion.p>
                    <motion.div variants={fadeIn} className="flex flex-col gap-4 mt-2">
                        <p className="text-black leading-relaxed">
                            <span className="font-bold">the "social chain":</span> Groups often form physical chains or hold hands just to stay together, as digital tools are too distracting to use while walking.
                        </p>

                        {/* Visual 2: User Persona */}
                        <div className="my-6">
                            <ImageWithLightbox
                                src={`${import.meta.env.BASE_URL}armarkets/userpersona_compressed.webp`}
                                fullResSrc={`${import.meta.env.BASE_URL}armarkets/userpersona.png`}
                                alt="user persona"
                                caption="user persona"
                                className="aspect-video"
                            />
                            <div className="px-1 mt-1.5 text-right">
                                <span className="text-[11px] text-zinc-400">user persona</span>
                            </div>
                        </div>

                        <p className="text-black leading-relaxed">
                            <span className="font-bold">information blindness:</span> Stalls often have low-contrast, handwritten menus. Visitors have to physically crowd a stall just to see what they sell, creating unnecessary congestion.
                        </p>
                        <p className="text-black leading-relaxed">
                            <span className="font-bold">the navigation paradox:</span> Visitors don't want a "GPS" telling them exactly where to turn; they want to explore. Rigid navigation systems actually ruin the fun of a market.
                        </p>
                        <p className="text-black leading-relaxed">
                            <span className="font-bold">the opportunity:</span> To build an AR interface that provides "glanceable" information—showing wait times, stall types, and friend locations—only when the user needs it.
                        </p>
                    </motion.div>
                </section>

                {/* Visual 3: Low Fidelity Wireframe */}
                <motion.div variants={fadeIn} className="w-full max-w-[832px] px-8 mt-12">
                    <ImageWithLightbox
                        src={`${import.meta.env.BASE_URL}armarkets/lofi_compressed.webp`}
                        fullResSrc={`${import.meta.env.BASE_URL}armarkets/lofi.png`}
                        alt="lofi"
                        caption="lofi"
                    />
                    <div className="px-1 text-right mt-1.5">
                        <span className="text-[11px] text-zinc-400">low fidelity wireframe</span>
                    </div>
                </motion.div>

                {/* The Solution Section */}
                <section className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-3">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        the solution
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        I developed a minimal AR interface focused on <span className="font-bold">Cognitive Load Reduction</span> and hands-free interaction.
                    </motion.p>
                    <ul className="flex flex-col gap-4 mt-2">
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">ar stall discovery:</span> Lightweight floating labels highlight stall types and estimated wait times as the user scans the environment.
                        </motion.li>
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">dynamic pathfinding:</span> Instead of a "turn-by-turn" arrow, I designed a glowing path overlaid on the ground. This allows users to keep their eyes on the stalls while moving toward their destination.
                        </motion.li>
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">friend-finding radar:</span> A spatial radar showing the relative direction of group members, eliminating the need to check WhatsApp or shout in noisy crowds.
                        </motion.li>
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">multimodal interaction:</span> To account for cold weather and carrying food, the system uses <span className="font-bold">Gaze Interaction</span> (looking to highlight) and <span className="font-bold">Simple Gestures</span> (pinching to select).
                        </motion.li>
                    </ul>
                </section>

                {/* Visual 4: Hierarchical Task Analysis & Solutions */}
                <motion.div variants={fadeIn} className="w-full max-w-[832px] px-8 mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-3">
                        <ImageWithLightbox
                            src={`${import.meta.env.BASE_URL}armarkets/hta_compressed.webp`}
                            fullResSrc={`${import.meta.env.BASE_URL}armarkets/hta.png`}
                            alt="Hierarchical task analysis"
                            caption="hierarchical task analysis"
                            className="aspect-square"
                        />
                        <div className="px-1">
                            <span className="text-[11px] text-zinc-400">hierarchical task analysis</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <ImageWithLightbox
                            src={`${import.meta.env.BASE_URL}armarkets/working_compressed.webp`}
                            fullResSrc={`${import.meta.env.BASE_URL}armarkets/working.png`}
                            alt="working on solutions"
                            caption="working on solutions"
                            className="aspect-square"
                        />
                        <div className="px-1">
                            <span className="text-[11px] text-zinc-400">working on solutions</span>
                        </div>
                    </div>
                </motion.div>

                {/* The Impact Section */}
                <section className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-3">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        the impact
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        Using a <span className="font-bold">Wizard-of-Oz</span> prototype and <span className="font-bold">NASA-TLX</span> testing, I validated that the system successfully reduced the mental effort required to navigate. The research proved that in dense public spaces, users prefer <span className="font-bold">manual control</span> (choosing their own route) over <span className="font-bold">system suggestions</span>. This project highlights how AR can move beyond "gimmicks" to solve real-world human-computer interaction challenges in high-density environments.
                    </motion.p>
                </section>

                {/* Visual 5: Klar AR Visualized */}
                <motion.div variants={fadeIn} className="w-full max-w-[832px] px-8 mt-12">
                    <ImageWithLightbox
                        src={`${import.meta.env.BASE_URL}armarkets/hifi_compressed.webp`}
                        fullResSrc={`${import.meta.env.BASE_URL}armarkets/hifi.png`}
                        alt="Klar AR visualized"
                        caption="Klar AR visualized"
                        className="aspect-video"
                    />
                    <div className="px-1 text-right mt-1.5">
                        <span className="text-[11px] text-zinc-400">Klar AR visualized</span>
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

export default ArMarketsCS;
