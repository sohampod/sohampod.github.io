import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Connect() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 16, filter: 'blur(8px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
    };

    return (
        <div className="md:flex md:flex-row md:justify-center selection:bg-zinc-100 selection:text-black h-screen overflow-hidden font-sans text-base lowercase">
            <div className="md:min-w-[512px] md:w-full md:max-w-2xl md:mx-auto">
                <div className="flex flex-col justify-start max-w-2xl px-8 py-24">
                    <div className="grid w-8 h-8 mb-8 group">
                        <Link aria-label="Go to the homepage" to="/">
                            <img alt="Soham Poddar" loading="lazy" width="128" height="128" className="rounded-full object-cover w-12 h-12" src={`${import.meta.env.BASE_URL}avatar.png`} />
                        </Link>
                    </div>

                    <motion.div className="flex flex-col gap-12 origin-left" variants={containerVariants} initial="hidden" animate="visible">
                        <motion.div variants={itemVariants} className="flex flex-col gap-1 w-fit">
                            <h1 className="inline font-medium text-black mb-8">Connect</h1>
                            <div className="flex flex-col gap-4">
                                <a href="mailto:soham.poddar23@gmail.com" className="text-zinc-500 hover:text-black transition-colors underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-400 w-fit">Email</a>
                                <a href="https://github.com/sohampod" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-black transition-colors underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-400 w-fit">GitHub</a>
                                <a href="https://linkedin.com/in/sohampoddar" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-black transition-colors underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-400 w-fit">LinkedIn</a>
                                <a href="https://www.behance.net/sohampoddar" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-black transition-colors underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-400 w-fit">Behance</a>
                                <a href="https://dribbble.com/sohampod" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-black transition-colors underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-400 w-fit">Dribbble</a>
                                <a href="https://medium.com/@soham.poddar23" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-black transition-colors underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-400 w-fit">Medium</a>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-row gap-12 mt-8">
                            <Link className="text-zinc-500 hover:text-black transition-colors underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-400" to="/about">About</Link>
                            <Link className="text-zinc-500 hover:text-black transition-colors underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-400" to="/">Back to home</Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Connect;
