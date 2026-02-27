import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Key, Building2, ListTodo, Check } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: 'Secure Access',
        description: 'Provide your GitHub token. GitPadi verifies permissions instantly.',
        icon: <Key size={18} className="text-kilo-accent" />,
        detail: 'Checking Repo Admin rights...'
    },
    {
        id: 2,
        title: 'Select Project',
        description: 'Interactive choice of Orgs and Repos. No manual URL hunting.',
        icon: <Building2 size={18} className="text-kilo-accent" />,
        detail: 'Fetching 42 repositories for "Netwalls"...'
    },
    {
        id: 3,
        title: 'Bulk Scale',
        description: 'Import issues from Markdown or JSON at lightning speed.',
        icon: <ListTodo size={18} className="text-kilo-accent" />,
        detail: 'Creating 12 issues on GitHub...'
    }
];

const MaintainerFlow = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className="bg-[#050505] p-10 rounded-[40px] border border-[#111] relative overflow-hidden group">
            <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-kilo-accent flex items-center justify-center border border-kilo-accent/20 text-black">
                    <Check size={24} strokeWidth={4} />
                </div>
                <div>
                    <h3 className="text-2xl font-black tracking-tight">Maintainer Path</h3>
                    <p className="text-[#555] text-xs font-bold uppercase tracking-[0.2em] mt-0.5">Project Lead Workflow</p>
                </div>
            </div>

            <div className="space-y-4">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        onMouseEnter={() => setActiveStep(index)}
                        className={`cursor-pointer p-6 rounded-3xl transition-all border ${activeStep === index
                                ? 'bg-[#111] border-[#222] shadow-2xl scale-[1.02]'
                                : 'bg-transparent border-transparent opacity-40 hover:opacity-100'
                            }`}
                    >
                        <div className="flex gap-5">
                            <div className="mt-1 bg-white/5 p-2 rounded-xl border border-white/5">{step.icon}</div>
                            <div>
                                <h4 className="text-lg font-black tracking-tight mb-1">{step.title}</h4>
                                <p className="text-[#666] text-sm font-bold leading-snug">{step.description}</p>
                            </div>
                        </div>

                        <AnimatePresence>
                            {activeStep === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="mt-5 pt-5 border-t border-[#222] font-mono text-xs font-bold text-kilo-accent"
                                >
                                    <span className="opacity-40 mr-2 text-white">❯</span> {step.detail}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            <div className="absolute top-6 right-10 text-[120px] font-black text-white/[0.02] pointer-events-none italic tracking-tighter select-none">
                01
            </div>
        </div>
    );
};

export default MaintainerFlow;
