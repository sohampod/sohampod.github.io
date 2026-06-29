import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

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

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                    <a
                        href={`${import.meta.env.BASE_URL}planet/image-viewer.html?v=1&src=${encodeURIComponent(fullResSrc || src)}`}
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
                                            href={`${import.meta.env.BASE_URL}planet/image-viewer.html?v=1&src=${encodeURIComponent(fullResSrc || src)}`}
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

const PDFViewer = ({ src, label }: { src: string; label?: string }) => {
    const [numPages, setNumPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setIsInView(true); observer.disconnect(); } },
            { rootMargin: '200px' }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const ro = new ResizeObserver(([entry]) => {
            setContainerWidth(entry.contentRect.width);
        });
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const goToPrev = () => setCurrentPage((p) => Math.max(1, p - 1));
    const goToNext = () => setCurrentPage((p) => Math.min(numPages, p + 1));

    return (
        <div ref={containerRef} className="flex flex-col gap-0">
            {isInView && containerWidth > 0 ? (
                <Document
                    file={src}
                    onLoadSuccess={({ numPages: n }) => setNumPages(n)}
                    loading={
                        <div className="flex items-center justify-center bg-zinc-50 border border-zinc-100 rounded-md aspect-[16/9]">
                            <span className="text-[11px] text-zinc-400 lowercase tracking-widest">loading brand book…</span>
                        </div>
                    }
                    error={
                        <div className="flex items-center justify-center bg-zinc-50 border border-zinc-100 rounded-md aspect-[16/9]">
                            <span className="text-[11px] text-zinc-400 lowercase tracking-widest">failed to load pdf</span>
                        </div>
                    }
                >
                    <div className="bg-zinc-50 border border-zinc-100 rounded-md overflow-hidden flex items-center justify-center">
                        <Page
                            pageNumber={currentPage}
                            width={containerWidth}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                        />
                    </div>

                    {numPages > 0 && (
                        <div className="flex items-center justify-between mt-3 px-1">
                            <button
                                onClick={goToPrev}
                                disabled={currentPage <= 1}
                                className="text-[11px] lowercase tracking-[0.15em] text-zinc-500 hover:text-black disabled:text-zinc-300 disabled:cursor-not-allowed transition-colors border border-zinc-200 disabled:border-zinc-100 px-4 py-2 rounded-full hover:bg-zinc-50 active:scale-95 font-medium"
                            >
                                ← prev
                            </button>
                            <span className="text-[11px] text-zinc-400 tabular-nums">
                                {currentPage} / {numPages}
                            </span>
                            <button
                                onClick={goToNext}
                                disabled={currentPage >= numPages}
                                className="text-[11px] lowercase tracking-[0.15em] text-zinc-500 hover:text-black disabled:text-zinc-300 disabled:cursor-not-allowed transition-colors border border-zinc-200 disabled:border-zinc-100 px-4 py-2 rounded-full hover:bg-zinc-50 active:scale-95 font-medium"
                            >
                                next →
                            </button>
                        </div>
                    )}
                </Document>
            ) : (
                <div className="flex items-center justify-center bg-zinc-50 border border-zinc-100 rounded-md" style={{ height: 540 }}>
                    <span className="text-[11px] text-zinc-400 lowercase tracking-widest">loading brand book…</span>
                </div>
            )}
            {label && (
                <div className="px-1 text-right mt-1.5">
                    <span className="text-[11px] text-zinc-400">{label}</span>
                </div>
            )}
        </div>
    );
};

function PlaNetCS() {
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
                            planet: it infrastructure, built from scratch
                        </motion.h1>
                        <motion.span variants={fadeIn} className="text-zinc-400 font-normal">
                            brand identity, web design & development · 2026
                        </motion.span>
                    </div>
                </header>

                {/* Context */}
                <section className="w-full max-w-[608px] px-8 mt-12 flex flex-col gap-3">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        context
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        <span className="font-bold text-black">PlaNet</span> is an IT consulting business based in Wadgassen, Germany, run by Nico Placzek. The scope: network installation, IT infrastructure, technical consulting, and ongoing IT support for local businesses.
                    </motion.p>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        He needed a website that would communicate competence and reliability to small-to-medium business owners — not a tech-forward landing page for developers, but something that feels like hiring a professional. The brief: clean, warm, trustworthy. No stock photos. No tech jargon.
                    </motion.p>
                </section>

                {/* Visual 1: Hero */}
                <motion.div variants={fadeIn} className="w-full max-w-[832px] px-8 mt-12">
                    <ImageWithLightbox
                        src={`${import.meta.env.BASE_URL}planet/hero.png`}
                        alt="PlaNet — Homepage"
                        caption="the planet homepage: paper-warm palette, instrument sans, service grid, clear cta hierarchy"
                    />
                    <div className="px-1 text-right mt-1.5">
                        <span className="text-[11px] text-zinc-400">planet — homepage</span>
                    </div>
                </motion.div>

                {/* The Brief */}
                <section className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-4">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        the brief
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        12 pages. German only. No framework, no build step, no dependencies. Pure HTML, CSS, and a few lines of vanilla JS for mobile nav and scroll animations. The site had to load instantly, work on any device, and be maintainable by someone who isn't a developer.
                    </motion.p>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        Four service pages, a project reference section, about, contact with a form, and three legal pages (Impressum, Datenschutz, AGB). Everything a German business website needs — nothing it doesn't.
                    </motion.p>
                </section>

                {/* Design Decisions */}
                <section className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-4">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        design decisions
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        three choices shaped the visual identity:
                    </motion.p>
                    <div className="flex flex-col gap-4 mt-2">
                        <motion.p variants={fadeIn} className="text-black leading-relaxed">
                            <span className="font-bold">the paper-warm palette:</span> #FFFCF2 as the primary background, with darker paper tones (#F0ECDF, #D5D0C1) for section alternation. the warmth differentiates from the cold whites of every other IT company site. a wood accent (#492812) and yellow (#F7CF49) for CTAs — warm, not corporate.
                        </motion.p>
                        <motion.p variants={fadeIn} className="text-black leading-relaxed">
                            <span className="font-bold">instrument sans + geist mono:</span> instrument sans for all body and heading text (weight 400–700, clamp-based sizes from 96px down to 16px). geist mono for nav labels, eyebrows, buttons, and footer — the monospace adds technical credibility without making the whole site feel like a code editor.
                        </motion.p>
                        <motion.p variants={fadeIn} className="text-black leading-relaxed">
                            <span className="font-bold">the P lettermark:</span> an abstract mark where the letterform is visible on second look — not a literal "P" but a geometric shape that hints at it. integrated via CSS mask-image with currentColor, so the logo adapts automatically to any background (black on paper, white on dark sections, yellow on CTAs).
                        </motion.p>
                    </div>
                </section>

                {/* Visual: Leistungen */}
                <motion.div variants={fadeIn} className="w-full max-w-[832px] px-8 mt-12">
                    <ImageWithLightbox
                        src={`${import.meta.env.BASE_URL}planet/leistungen.png`}
                        alt="PlaNet — Services Overview"
                        caption="leistungen hub: four service cards with consistent layout, warm section alternation"
                    />
                    <div className="px-1 text-right mt-1.5">
                        <span className="text-[11px] text-zinc-400">leistungen (services)</span>
                    </div>
                </motion.div>

                {/* Section Variants */}
                <section className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-4">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        section system
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        five section variants create rhythm across all 12 pages without repetition:
                    </motion.p>
                    <ul className="flex flex-col gap-3 mt-1">
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">default (paper-100):</span> the lightest warm white. primary content sections.
                        </motion.li>
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">dark (#141414):</span> high-contrast sections for "why planet" messaging and key value propositions.
                        </motion.li>
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">yellow (#F7CF49):</span> call-to-action sections. used sparingly — one per page maximum.
                        </motion.li>
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">paper (paper-400):</span> subtle alternation for feature grids and supporting content.
                        </motion.li>
                        <motion.li variants={fadeIn} className="text-black leading-relaxed list-disc ml-4">
                            <span className="font-bold">wood (#492812):</span> reserved for the "Über uns" hero — warm, personal, grounded.
                        </motion.li>
                    </ul>
                </section>

                {/* Side-by-Side: Projekte + Kontakt */}
                <motion.div variants={fadeIn} className="w-full max-w-[832px] px-8 mt-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <ImageWithLightbox
                            src={`${import.meta.env.BASE_URL}planet/projekte.png`}
                            alt="PlaNet — Projects"
                            caption="projekte: reference project cards with consistent layout"
                        />
                        <ImageWithLightbox
                            src={`${import.meta.env.BASE_URL}planet/kontakt.png`}
                            alt="PlaNet — Contact"
                            caption="kontakt: contact form + company details"
                        />
                    </div>
                    <div className="px-1 mt-3 flex items-center justify-between">
                        <span className="text-[11px] text-zinc-400">projekte + kontakt</span>
                        <span className="text-[11px] text-zinc-400">reference projects · contact form</span>
                    </div>
                </motion.div>

                {/* Technical Approach */}
                <section className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-4">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        the build
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        zero dependencies. the entire site is static HTML + CSS + vanilla JS. no react, no build step, no node_modules. <span className="font-bold">npx serve . -p 3060</span> is the dev server. the CSS is a single file with design tokens as custom properties, a full reset, and component-scoped styles. total CSS: ~800 lines.
                    </motion.p>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        the logo uses CSS <span className="font-bold">mask-image</span> with currentColor — one SVG file, infinite color contexts. no icon font, no separate dark/light variants needed in the markup. the same approach works for favicon (SVG with viewBox, native browser support).
                    </motion.p>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        a Figma brand book plugin (901 lines of code.js) was built alongside the site — it generates 8 boards in Figma covering logo system, color palette, typography scale, spacing, components, voice & tone, and anti-patterns. the plugin IS the brand documentation, not a separate deliverable.
                    </motion.p>
                </section>

                {/* Brand Book PDF */}
                <motion.div variants={fadeIn} className="w-full max-w-[832px] px-8 mt-12">
                    <PDFViewer
                        src={`${import.meta.env.BASE_URL}planet/planet-brandbook.pdf`}
                        label="brand book"
                    />
                </motion.div>

                {/* Über uns */}
                <motion.div variants={fadeIn} className="w-full max-w-[832px] px-8 mt-12">
                    <ImageWithLightbox
                        src={`${import.meta.env.BASE_URL}planet/ueber-uns.png`}
                        alt="PlaNet — About Us"
                        caption="über uns: wood-tone hero section with founder profile"
                    />
                    <div className="px-1 text-right mt-1.5">
                        <span className="text-[11px] text-zinc-400">über uns — founder profile</span>
                    </div>
                </motion.div>

                {/* Outcome */}
                <section className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-3">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        the outcome
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        12 pages, zero dependencies, one CSS file, one design system. a website that looks like it was made by someone who cares — because it was. the paper-warm palette sets it apart from every cold-white IT company template. the monospace nav and eyebrows add technical credibility without alienating non-technical clients.
                    </motion.p>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        the site ships with a complete brand system: design tokens as CSS custom properties, a Figma plugin that generates the brand book, and three logo variants (black, white, favicon) all driven by a single SVG path. when the brand evolves, the token file changes — everything downstream follows.
                    </motion.p>
                </section>

                {/* Tech Stack */}
                <section className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-3">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        built with
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-zinc-500 leading-relaxed text-[14px]">
                        html · css · vanilla js · instrument sans · geist mono · css mask-image · figma plugin (code.js) · no framework · no build step
                    </motion.p>
                </section>

                {/* Links Section */}
                <section className="w-full max-w-[608px] px-8 mt-24 flex flex-col gap-4">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black lowercase tracking-tight">
                        links
                    </motion.h2>
                    <motion.div variants={fadeIn} className="flex flex-col gap-3">
                        <a href="https://placzek.cloud" target="_blank" rel="noopener noreferrer" className="text-black hover:text-zinc-500 transition-colors underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-400 w-fit">
                            live website ↗
                        </a>
                    </motion.div>
                </section>

                {/* Footer Navigation */}
                <footer className="w-full max-w-[832px] px-8 mt-32 border-t border-zinc-100 pt-12">
                    <motion.div variants={fadeIn} className="flex items-start justify-between gap-4">
                        <Link to="/work/navantis" className="flex flex-col gap-1 group max-w-[35%]">
                            <span className="text-[10px] text-zinc-400 tracking-[0.2em] font-medium">← previous</span>
                            <span className="text-[13px] text-zinc-500 group-hover:text-black transition-colors leading-snug">navantis: building a brand</span>
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

export default PlaNetCS;
