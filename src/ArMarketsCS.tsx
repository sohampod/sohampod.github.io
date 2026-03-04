import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeIn = {
    hidden: { opacity: 0, y: 16, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
                            ar glasses & ux case study 2025
                        </motion.span>
                    </div>
                </header>

                {/* Content will be added here later */}
                <section className="w-full max-w-[608px] px-8 mt-12 flex flex-col gap-3">
                    <motion.p variants={fadeIn} className="text-black leading-relaxed italic">
                        content coming soon...
                    </motion.p>
                </section>

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
