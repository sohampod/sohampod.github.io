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
                onClick={() => {
                    console.log('ImageWithLightbox CLICKED');
                    setIsOpen(true);
                }}
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
                        href={fullResSrc || src}
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
                                            href={fullResSrc || src}
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

const VideoWithLightbox = ({ src, poster, alt, caption, className = "aspect-video" }: { src: string, poster?: string, alt: string, caption?: string, className?: string }) => {
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
                onClick={() => {
                    console.log('VideoWithLightbox CLICKED');
                    setIsOpen(true);
                }}
            >
                <video
                    src={src}
                    poster={poster}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                    onCanPlay={(e) => (e.target as HTMLVideoElement).play()}
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                    <a
                        href={src}
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
                                    <video
                                        src={src}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
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
                                            href={src}
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
        <div className="selection:bg-zinc-100 selection:text-black min-h-screen font-sans text-base lowercase bg-white">
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap');
          
          body {
            font-family: 'Outfit', sans-serif;
            background-color: white;
          }

          .title-gradient {
            background: linear-gradient(to right, #000, #666);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .glass-nav {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          }

          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          ::-webkit-scrollbar-thumb {
            background: #ccc;
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #999;
          }
        `}
            </style>

            <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-16 flex items-center justify-between px-6 md:px-12">
                <Link to="/" className="text-[13px] font-medium tracking-[0.2em] hover:opacity-50 transition-opacity uppercase">
                    [back to work]
                </Link>
                <div className="flex gap-8">
                    <span className="text-[11px] text-zinc-400 tracking-widest hidden md:block">tranquil stay / 2024</span>
                </div>
            </nav>

            <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-24"
                >
                    {/* Hero Section */}
                    <motion.section variants={fadeIn} className="flex flex-col gap-8 max-w-4xl">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] text-black">
                            the tranquil stay: identity & digital ecosystem
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed max-w-3xl">
                            building a serene digital home for a luxury boutique resort, where minimalism meets hospitality.
                        </p>
                    </motion.section>

                    {/* Metadata Grid */}
                    <motion.section variants={fadeIn} className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-zinc-100 pt-12">
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase font-semibold">role</span>
                            <span className="text-[13px]">brand designer & developer</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase font-semibold">timeline</span>
                            <span className="text-[13px]">4 months</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase font-semibold">tools</span>
                            <span className="text-[13px]">figma, framer, react</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase font-semibold">deliverables</span>
                            <span className="text-[13px]">identity, website, print</span>
                        </div>
                    </motion.section>

                    {/* Problem Section */}
                    <motion.section variants={fadeIn} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                        <div className="md:col-span-4">
                            <h2 className="text-sm tracking-[0.3em] font-semibold text-zinc-900 border-l-2 border-black pl-4 uppercase">the challenge</h2>
                        </div>
                        <div className="md:col-span-8 flex flex-col gap-6">
                            <p className="text-lg md:text-xl text-zinc-700 leading-relaxed font-light italic">
                                "how do we translate the physical sensation of peace into a digital interface?"
                            </p>
                            <p className="text-zinc-600 leading-relaxed">
                                tranquil stay needed more than just a website; they needed a digital gateway that mirrored the physical experience of their resort. the existing booking systems were clunky and didn't reflect the premium nature of the brand.
                            </p>
                        </div>
                    </motion.section>

                    {/* Visual Showcase 1 */}
                    <motion.section variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ImageWithLightbox
                            src={`${import.meta.env.BASE_URL}tranquilstay/moodboard_compressed.webp`}
                            alt="Brand Moodboard"
                            caption="branding moodboard: earthy tones, soft textures, and airy compositions."
                        />
                        <ImageWithLightbox
                            src={`${import.meta.env.BASE_URL}tranquilstay/typography_compressed.webp`}
                            alt="Typography System"
                            caption="custom typography system designed for maximum readability and elegance."
                        />
                    </motion.section>

                    {/* Solution Section */}
                    <motion.section variants={fadeIn} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                        <div className="md:col-span-4">
                            <h2 className="text-sm tracking-[0.3em] font-semibold text-zinc-900 border-l-2 border-black pl-4 uppercase">the solution</h2>
                        </div>
                        <div className="md:col-span-8 flex flex-col gap-6">
                            <p className="text-lg md:text-xl text-zinc-700 leading-relaxed font-light">
                                a custom-built, headless digital ecosystem focusing on high-quality visuals and a distraction-free booking flow.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-[13px] font-bold tracking-widest uppercase">visual storytelling</h3>
                                    <p className="text-zinc-500 text-[14px] leading-relaxed">using large-scale imagery and cinematic transitions to evoke emotion.</p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-[13px] font-bold tracking-widest uppercase">frictionless flow</h3>
                                    <p className="text-zinc-500 text-[14px] leading-relaxed">a 3-step booking process designed to be as calm as the stay itself.</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Large Product Image */}
                    <motion.section variants={fadeIn}>
                        <ImageWithLightbox
                            src={`${import.meta.env.BASE_URL}tranquilstay/website_compressed.webp`}
                            alt="Main Website Design"
                            caption="the final homepage design: focusing on serenity and whitespace."
                            className="aspect-[16/10]"
                        />
                    </motion.section>

                    {/* Outcome Section */}
                    <motion.section variants={fadeIn} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                        <div className="md:col-span-4">
                            <h2 className="text-sm tracking-[0.3em] font-semibold text-zinc-900 border-l-2 border-black pl-4 uppercase">the outcome</h2>
                        </div>
                        <div className="md:col-span-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div className="bg-zinc-50 p-8 rounded-lg flex flex-col gap-4 border border-zinc-100">
                                    <span className="text-4xl font-light text-black tracking-tight">40%</span>
                                    <p className="text-[12px] text-zinc-400 tracking-widest uppercase font-bold">increase in direct bookings</p>
                                </div>
                                <div className="bg-zinc-50 p-8 rounded-lg flex flex-col gap-4 border border-zinc-100">
                                    <span className="text-4xl font-light text-black tracking-tight">+2m</span>
                                    <p className="text-[12px] text-zinc-400 tracking-widest uppercase font-bold">avg. session duration</p>
                                </div>
                            </div>
                            <VideoWithLightbox
                                src={`${import.meta.env.BASE_URL}tranquilstay/ts.mp4`}
                                alt="Interaction demo"
                                caption="interaction demo: smooth page transitions and micro-interactions."
                            />
                        </div>
                    </motion.section>

                    {/* Next Project Footer */}
                    <motion.section variants={fadeIn} className="border-t border-zinc-100 pt-24 pb-12 flex justify-between items-center group">
                        <Link to="/" className="flex flex-col gap-2">
                            <span className="text-[11px] text-zinc-400 tracking-[0.3em] font-bold uppercase transition-all group-hover:pl-4">back home</span>
                        </Link>
                        <div className="text-right flex flex-col gap-2">
                            <span className="text-[10px] text-zinc-300 tracking-[0.3em] uppercase">next project</span>
                            <Link to="/work/discordcs" className="text-2xl md:text-3xl font-light hover:opacity-50 transition-opacity">
                                discord branding →
                            </Link>
                        </div>
                    </motion.section>
                </motion.div>
            </main>

            <footer className="py-12 px-6 md:px-12 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-8">
                <span className="text-[11px] text-zinc-400 tracking-widest">soham poddar © 2024</span>
                <div className="flex gap-8">
                    <a href="#" className="text-[11px] text-zinc-400 hover:text-black tracking-widest transition-colors uppercase">[instagram]</a>
                    <a href="#" className="text-[11px] text-zinc-400 hover:text-black tracking-widest transition-colors uppercase">[linkedin]</a>
                    <a href="#" className="text-[11px] text-zinc-400 hover:text-black tracking-widest transition-colors uppercase">[twitter]</a>
                </div>
            </footer>
        </div >
    );
}

export default TranquilStayCS;
