import { motion } from 'framer-motion';

function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 16, filter: 'blur(8px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
    };

    return (
        <div className="flex flex-col justify-center items-center selection:bg-zinc-100 selection:text-black min-h-screen font-sans text-base lowercase py-20 px-8">
            <div className="w-full max-w-2xl">
                <div className="flex flex-col justify-start">
                    <div className="grid w-8 h-8 mb-8 group">
                        <a aria-label="Go to the homepage" href="/">
                            <img alt="Soham Poddar" loading="lazy" width="128" height="128" className="rounded-full object-cover w-12 h-12" src="/avatar.png" />
                        </a>
                    </div>

                    <motion.div className="flex flex-col gap-12 origin-left" variants={containerVariants} initial="hidden" animate="visible">
                        <motion.div variants={itemVariants} className="flex flex-col gap-1 w-fit">
                            <h1 className="inline font-medium text-black">About Soham</h1>
                            <div className="text-zinc-500 font-normal mt-4 flex flex-col gap-4 max-w-lg leading-relaxed">

                                <h2 className="text-black"> Design & Leadership </h2>
                                <p>
                                    I build beautiful, human-centric products. My career began in design collectives like Charcoal Dust where I branded a chemical pigment
                                    firm for currency printing and grew into leadership. At <a href="https://reworks.in" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-zinc-200 underline-offset-2 hover:decoration-zinc-400 transition-colors">Reworks</a>, I started as a freelancer and eventually became Head of Design, working
                                    closely with the founder to balance user needs and stakeholder goals.
                                </p>

                                <p>
                                    My work spans diverse sectors, from leading UI and investor branding for the award-winning startup <a href="https://www.dhobig.com/" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-zinc-200 underline-offset-2 hover:decoration-zinc-400 transition-colors">Dhobi G</a> to designing for SaaS and
                                    product engineering firms. I’ve also served as the official designer for Microsoft’s Open Day and managed the visual identity for TEDxChennai.
                                </p>


                                <h2 className="text-black"> The Technical Shift </h2>
                                <p>
                                    While design is my foundation, I have been studying AI/ML for a long time. Recently, I’ve expanded into Quantum AI,
                                    building projects at the intersection of HCI and QAI. My goal is simple: to use my design background and technical studies to build better,
                                    more intuitive human products for the future.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-row gap-12 mt-8">
                            <a className="text-zinc-500 hover:text-black transition-colors underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-400" href="/connect">Connect</a>
                            <a className="text-zinc-500 hover:text-black transition-colors underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-400" href="/">Back to home</a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div >
    );
}

export default About;
