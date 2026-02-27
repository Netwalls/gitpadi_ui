import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitFork, RefreshCw, Send, Check } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: 'Auto-Fork & Clone',
        description: 'Fork the repo and clone it locally in one single command.',
        icon: <GitFork size={18} className="text-[#3b82f6]" />,
        detail: 'Cloning fork: youruser/target-repo...'
    },
    {
        id: 2,
        title: 'Stay in Sync',
        description: 'Automatic detection of outdated branches and upstream changes.',
        icon: <RefreshCw size={18} className="text-[#3b82f6]" />,
        detail: 'Rebasing 3 new commits from upstream...'
    },
    {
        id: 3,
        title: 'Smart Submit',
        description: 'PR metadata generation from your commit history and issue ID.',
        icon: <Send size={18} className="text-[#3b82f6]" />,
        detail: 'Pushing branch and opening Pull Request...'
    }
];

const ContributorFlow = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className="bg-[#050505] p-10 rounded-[40px] border border-[#111] relative overflow-hidden group">
            <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-[#3b82f6] flex items-center justify-center border border-[#3b82f6]/20 text-white">
                    <Check size={24} strokeWidth={4} />
                </div>
                <div>
                    <h3 className="text-2xl font-black tracking-tight">Contributor Path</h3>
                    <p className="text-[#555] text-xs font-bold uppercase tracking-[0.2em] mt-0.5">Open Source Workflow</p>
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
                                    className="mt-5 pt-5 border-t border-[#222] font-mono text-xs font-bold text-[#3b82f6]"
                                >
                                    <span className="opacity-40 mr-2 text-white">❯</span> {step.detail}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            <div className="absolute top-6 right-10 text-[120px] font-black text-white/[0.02] pointer-events-none italic tracking-tighter select-none">
                02
            </div>
        </div>
    );
};

export default ContributorFlow;
