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
                            improving discord's onboarding experience
                        </motion.h1>
                        <motion.span variants={fadeIn} className="text-zinc-400 font-normal">
                            research and ux design
                        </motion.span>
                    </div>
                </header>

                {/* Problem Section */}
                <section className="w-full max-w-[608px] px-8 mt-10 flex flex-col gap-3">
                    <motion.h2 variants={fadeIn} className="text-[17px] font-bold text-black uppercase tracking-tight">
                        the problem "the why?"
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-black leading-relaxed">
                        While platforms like Discord offer a foundation for remote work, they often lack the structure needed for professional collaboration. My goal was to identify the specific barriers preventing teams from connecting effectively and to redesign the environment for a more productive, work-focused experience.
                    </motion.p>
                </section>

                {/* Hero Media Section (832px) */}
                <motion.div
                    variants={fadeIn}
                    className="w-full max-w-[832px] px-8 mt-12"
                >
                    <div className="flex flex-col gap-3">
                        <div className="aspect-video bg-zinc-50 border border-zinc-100 rounded-md overflow-hidden relative">
                            <img
                                src={`${import.meta.env.BASE_URL}discord/discordhero.webp`}
                                alt="Discord Case Study Hero"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="px-1 text-right mt-1">
                            <motion.a
                                variants={fadeIn}
                                href="https://medium.com/doctolib/interactive-remote-meetup-using-discord-3c593705c0a2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[12px] text-zinc-400 hover:text-black transition-colors underline decoration-zinc-200 underline-offset-2"
                            >
                                source: medium / doctolib
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                {/* Content Section (608px) */}
                <article className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-12">
                    <motion.section variants={fadeIn} className="flex flex-col gap-4">
                        <p className="text-black leading-relaxed">
                            Through user interviews and competitive analysis, I discovered that the casual nature of Discord was its biggest strength for socializing, but its biggest weakness for focus. Messaging noise, lack of threading visibility, and unstructured channels were the primary pain points for teams.
                        </p>
                    </motion.section>
                </article>

                {/* Project Grid / Media Section (832px) */}
                <motion.div
                    variants={fadeIn}
                    className="w-full max-w-[832px] px-8 mt-16 flex flex-col gap-12"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-3">
                            <div className="aspect-[3/4] bg-zinc-50 border border-zinc-100 rounded-md overflow-hidden">
                                <video src="https://v.nelson.co/splitview.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
                            </div>
                            <div className="px-1">
                                <span className="text-[15px] font-medium text-black">ios split view concept</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="aspect-[3/4] bg-zinc-50 border border-zinc-100 rounded-md overflow-hidden">
                                <video src="https://v.nelson.co/visionos.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
                            </div>
                            <div className="px-1">
                                <span className="text-[15px] font-medium text-black">ios × visionos concept</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Spacer */}
                <footer className="w-full max-w-[608px] px-8 mt-24">
                    <motion.div variants={fadeIn}>
                        <Link className="text-zinc-500 hover:text-black transition-colors underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-400" to="/">Back to home</Link>
                    </motion.div>
                </footer>
            </motion.div>
        </div>
    );
}

export default DiscordCS;
