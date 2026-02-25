import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

const fadeIn = {
    hidden: { opacity: 0, y: 16, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

function ProjectDetail() {
    const { id } = useParams();

    // In a real app, you'd fetch data based on 'id'. 
    // Here we use it to show a dynamic title.
    const title = id
        ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : 'Project Detail';

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
                            <img alt="Soham Poddar" loading="lazy" width="64" height="64" className="rounded-full object-cover w-8 h-8 transition-transform duration-300 group-hover:scale-110" src="/avatar.png" />
                        </Link>
                    </motion.div>

                    <div className="flex flex-col gap-2">
                        <motion.h1 variants={fadeIn} className="text-base font-medium text-black">
                            {title}
                        </motion.h1>
                        <motion.span variants={fadeIn} className="text-zinc-400 font-normal">
                            Product and interaction design
                        </motion.span>
                        <motion.p variants={fadeIn} className="text-black leading-relaxed mt-4">
                            Detailed documentation for {title}. If you'd like to learn more, please <a href="mailto:soham.poddar23@gmail.com" className="underline decoration-zinc-200 underline-offset-4 hover:decoration-zinc-400 transition-colors">get in touch</a>.
                        </motion.p>
                    </div>
                </header>

                {/* Hero Media Section (832px) */}
                <motion.div
                    variants={fadeIn}
                    className="w-full max-w-[832px] px-8 mt-16"
                >
                    <div className="aspect-video bg-zinc-50 border border-zinc-100 rounded-md overflow-hidden flex items-center justify-center text-zinc-300">
                        {/* Placeholder for Hero Media */}
                        <span>[ Hero Media Asset ]</span>
                    </div>
                </motion.div>

                {/* Content Section (608px) */}
                <article className="w-full max-w-[608px] px-8 mt-16 flex flex-col gap-12">
                    <motion.section variants={fadeIn} className="flex flex-col gap-4">
                        <h2 className="text-black font-bold">Context</h2>
                        <p className="text-black leading-relaxed">
                            This is where you describe the project context. The layout uses a 608px centered column for text to ensure optimal readability, matching the nelson.co aesthetic.
                        </p>
                    </motion.section>

                    <motion.section variants={fadeIn} className="flex flex-col gap-4">
                        <h2 className="text-black font-bold">Problem</h2>
                        <p className="text-black leading-relaxed">
                            Explain the challenges you faced and the goals of the project. The typography is set to 16px with a 1.65 line-height for a clean, premium feel.
                        </p>
                    </motion.section>
                </article>

                {/* Extended Media Section (832px) */}
                <motion.div
                    variants={fadeIn}
                    className="w-full max-w-[832px] px-8 mt-16 flex flex-col gap-8"
                >
                    <div className="aspect-video bg-zinc-50 border border-zinc-100 rounded-md overflow-hidden flex items-center justify-center text-zinc-300">
                        <span>[ Middle Media Asset ]</span>
                    </div>
                    <div className="aspect-video bg-zinc-50 border border-zinc-100 rounded-md overflow-hidden flex items-center justify-center text-zinc-300">
                        <span>[ Bottom Media Asset ]</span>
                    </div>
                </motion.div>

                {/* Final Footer Spacer */}
                <footer className="w-full max-w-[608px] px-8 mt-24">
                    <motion.div variants={fadeIn}>
                        <Link className="text-zinc-500 hover:text-black transition-colors underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-400" to="/">Back to home</Link>
                    </motion.div>
                </footer>
            </motion.div>
        </div>
    );
}

export default ProjectDetail;
