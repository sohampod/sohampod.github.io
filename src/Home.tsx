import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: "improving discord's onboarding experience",
        desc: 'research & ux design · 2021',
        link: '/work/discordcs',
        preview: `${import.meta.env.BASE_URL}discord/hifi2.png`,
        type: 'image',
        fitAspect: true,
        containerClass: 'w-[600px]'
    },
    {
        title: 'redesigning ather energy',
        desc: 'app design & ux improvement · 2021',
        link: '/work/atherenergycs',
        preview: `${import.meta.env.BASE_URL}ather/hifi1.png`,
        type: 'image',
        fitAspect: true,
        containerClass: 'w-[600px]'
    },
    {
        title: 'navigating christmas markets with augmented reality',
        desc: 'ar glasses & ux case study · 2025',
        link: '/work/ar-markets',
        preview: `${import.meta.env.BASE_URL}armarkets/hifi.png`,
        type: 'image',
        fitAspect: true,
        containerClass: 'w-[600px]'
    },
    {
        title: 'Linear Navigation',
        desc: '2025 · Product and interaction design',
        link: '/work/linear-navigation',
        preview: 'https://nelson.co/work/linear26/linear26.mp4',
        type: 'video'
    },
    {
        title: 'Linear Search',
        desc: '2025 · Product and interaction design',
        link: '/work/linear-search',
        preview: 'https://nelson.co/work/linearsearch/searchsolution.mp4',
        type: 'video'
    },
    {
        title: 'Linear Documents',
        desc: '2024 · Product and interaction design',
        link: '/work/linear-documents',
        preview: 'https://nelson.co/work/lineardocuments/hero.mp4',
        type: 'video'
    },
    {
        title: 'Linear Mobile v1.0',
        desc: '2024 · Product design',
        link: '/work/linear-mobile',
        preview: 'https://nelson.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flinearv1og.8e92c0c2.png&w=3840&q=100',
        type: 'image'
    },
    {
        title: 'Linear homepage renders',
        desc: '2024 · 3D rendering',
        link: '/work/renders',
        preview: 'https://nelson.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Froadmap.2c1a5c49.png&w=3840&q=100',
        type: 'image'
    },
    {
        title: 'GitHub Copilot',
        desc: '2024 · Product and interaction design',
        link: '/work/github-copilot',
        preview: 'https://nelson.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcopilotog.fb1992c1.png&w=3840&q=100',
        type: 'image'
    },
    {
        title: 'GitHub Achievements',
        desc: '2023 · Interaction design',
        link: '/work/achievements',
        preview: 'https://nelson.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fachievementsog.5564dc42.png&w=3840&q=100',
        type: 'image'
    },
    {
        title: 'GitHub Navigation Shortcuts',
        desc: '2022 · Product design',
        link: '/work/shortcuts',
        preview: 'https://nelson.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshortcutsog.cae76ea8.png&w=3840&q=100',
        type: 'image'
    },
];

function Home() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 16, filter: 'blur(8px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
    };

    const listContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.3
            }
        }
    };

    const listItemVariants = {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
    };

    return (
        <div className="selection:bg-zinc-100 selection:text-black min-h-screen font-sans text-base lowercase bg-white overflow-x-hidden">
            {/* Global Preview Container (Desktop only) */}
            <div className="hidden md:block fixed top-0 left-1/2 w-1/2 h-full pointer-events-none z-0">
                <div className="w-full h-full flex items-center justify-center p-12 lg:p-24">
                    <AnimatePresence mode="wait">
                        {hoveredIndex !== null && (
                            <motion.div
                                key={hoveredIndex}
                                initial={{ opacity: 0, scale: 0.95, y: 20, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, scale: 0.95, y: -20, filter: 'blur(10px)' }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className={`${(projects[hoveredIndex] as any).containerClass || 'w-[384px]'} ${(projects[hoveredIndex] as any).fitAspect ? 'h-fit' : 'h-[384px]'} rounded-2xl overflow-hidden border-[8px] border-zinc-50 shadow-2xl bg-zinc-50 relative group bg-white flex flex-col items-center justify-center`}
                            >
                                {projects[hoveredIndex].type === 'video' ? (
                                    <video
                                        src={projects[hoveredIndex].preview}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className={`w-full ${(projects[hoveredIndex] as any).fitAspect ? 'h-auto object-cover' : 'h-full object-cover'}`}
                                    />
                                ) : (
                                    <img
                                        src={projects[hoveredIndex].preview}
                                        alt={projects[hoveredIndex].title}
                                        className={`w-full ${(projects[hoveredIndex] as any).fitAspect ? 'h-auto object-cover' : 'h-full object-cover'}`}
                                    />
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="relative z-10 md:min-w-[512px] md:w-full md:max-w-7xl md:mx-auto">
                <div className="flex flex-col justify-start max-w-2xl px-8 py-24 sm:py-32">
                    <div className="grid w-8 h-8 mb-8 group">
                        <Link aria-label="Go to the homepage" to="/">
                            <motion.img
                                alt="Soham Poddar"
                                loading="lazy"
                                width="128"
                                height="128"
                                className="rounded-full object-cover w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                                src={`${import.meta.env.BASE_URL}avatar.png`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            />
                        </Link>
                    </div>

                    <motion.div
                        className="flex flex-col gap-12 origin-left"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="flex flex-col gap-1 w-fit">
                            <h1 className="inline font-medium text-black">Soham Poddar</h1>
                            <h2 className="text-zinc-500 font-normal">
                                <span className="text-black">Designer & Engineer</span>

                            </h2>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-row gap-4">
                            <Link className="text-zinc-400 hover:text-black transition-colors" to="/about">About</Link>
                            <Link className="text-zinc-400 hover:text-black transition-colors" to="/connect">Connect</Link>
                        </motion.div>

                        <motion.div
                            className="relative flex z-10 flex-col gap-1 w-fit shrink-0 -mx-4"
                            variants={listContainerVariants}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.link}
                                    variants={listItemVariants}
                                    className="relative inline-flex w-fit"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                >
                                    <AnimatePresence>
                                        {hoveredIndex === index && (
                                            <motion.div
                                                layoutId="hoverBackground"
                                                className="absolute inset-0 bg-zinc-100/50 rounded-2xl -z-10"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                            />
                                        )}
                                    </AnimatePresence>

                                    <Link
                                        className="relative inline-flex flex-col gap-1 py-2 px-4 no-underline cursor-pointer group"
                                        to={project.link}
                                    >
                                        <span className={`flex flex-col gap-0.5 transition-opacity duration-300 ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-30' : 'opacity-100'}`}>
                                            <span className="text-[15px] font-medium text-black transition-colors">
                                                {project.title}
                                            </span>
                                            <span className="text-[14px] text-zinc-400 font-normal leading-relaxed">
                                                {project.desc}
                                            </span>
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Home;
