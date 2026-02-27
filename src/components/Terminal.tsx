import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ACCENT = '#e2ff6f';
const MUTED = '#555';
const GREEN = '#00ff87';
const CYBER_MAGENTA = '#ff00ff';
const CYBER_CYAN = '#00ffff';

const Terminal = () => {
    const [lines, setLines] = useState<any[]>([]);
    const [phase, setPhase] = useState<'idle' | 'installing' | 'booting' | 'menu'>('idle');
    const isRunning = useRef(false);

    useEffect(() => {
        if (isRunning.current) return;
        isRunning.current = true;

        const run = async () => {
            setLines([]);
            setPhase('installing');

            // 1. NPX Prompt (The absolute start)
            await addLine('$ npx gitpadi', '#fff', 80, true);
            await sleep(600);
            await addLine('Need to install the following packages:', MUTED);
            await addLine('  gitpadi', '#fff', 0, false, 'font-bold');
            await addLine('Ok to proceed? (y) ', MUTED, 0, false, '', 'y');
            await sleep(1000);

            // 2. Clear and Start CLI Boot (Mirroring src/cli.ts)
            setLines([]);
            setPhase('booting');

            // FIGlet Banner (ANSI Shadow simulated)
            const bannerLines = [
                '  ____ _ _   ____           _ _ ',
                ' / ___(_) |_|  _ \\ __ _  __| (_) ',
                '| |  _| | __| |_) / _` |/ _` | | ',
                '| |_| | | |_|  __/ (_| | (_| | | ',
                ' \\____|_|\\__|_|   \\__,_|\\__,_|_| '
            ];
            for (let i = 0; i < bannerLines.length; i++) {
                const color = i < 3 ? CYBER_MAGENTA : CYBER_CYAN;
                await addLine(bannerLines[i], color, 0, false, 'font-bold text-[10px] leading-[1.1]');
            }

            // Boxen Metadata
            await addLine('╔══════════════════════════════════════════════════════════════╗', MUTED);
            await addLine('║  v2.0.0  |  AI-Powered GitHub Management  |  by Netwalls   ║', CYBER_MAGENTA, 0, false, 'font-bold');
            await addLine('╚══════════════════════════════════════════════════════════════╝', MUTED);
            await sleep(400);

            // Boot Steps (EXACT strings from src/cli.ts)
            const bootSteps = [
                '▸ Initializing GitPadi engine',
                '▸ Loading command modules',
                '▸ Establishing GitHub connection',
                '▸ Systems online'
            ];

            for (const step of bootSteps) {
                await addLine(step, '#888', 0, false, '', ' ✓', GREEN);
                await sleep(150);
            }
            await sleep(600);

            // 5. Mode Selector (EXACT strings from src/cli.ts)
            setPhase('menu');
            await addLine('', '#fff');
            await addLine('⟨ GITPADI MODE SELECTOR ⟩', CYBER_CYAN, 0, false, 'font-black tracking-[0.2em]');
            await addLine('Select your workflow persona to continue', MUTED);
            await addLine('─'.repeat(45), '#222');
            await addLine('', '#fff');
            await addLine('✔ Choose your path:', '#fff', 0, false, 'font-bold', ' ✨ Contributor Mode');
            await addLine('  — fork, clone, sync, submit PRs', MUTED, 0, false, 'italic text-[11px] pl-4');

            await sleep(10000);
            isRunning.current = false;
            run();
        };

        run();
        return () => { isRunning.current = true; };
    }, []);

    const addLine = (text: string, color: string, speed = 40, typeIn = false, fontWeight = '', suffix = '', suffixColor = '') => {
        return new Promise(async (resolve) => {
            if (typeIn) {
                const id = Math.random();
                setLines(prev => [...prev, { text: '', color, id, suffix: '', fontWeight }]);
                for (let i = 0; i < text.length; i++) {
                    await sleep(speed);
                    setLines(prev => prev.map(l => l.id === id ? { ...l, text: l.text + text[i] } : l));
                }
                resolve(null);
            } else {
                setLines(prev => [...prev, { text, color, id: Math.random(), suffix, suffixColor, fontWeight }]);
                resolve(null);
            }
        });
    };

    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

    return (
        <div style={{
            width: '100%',
            backgroundColor: '#000',
            border: '1px solid #1a1a1a',
            borderRadius: '16px',
            overflow: 'hidden',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '13px',
            lineHeight: 1.4,
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }}>
            {/* Header (Matching User's screenshot style) */}
            <div style={{
                backgroundColor: '#050505',
                padding: '12px 20px',
                borderBottom: '1px solid #111',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#222' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#222' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#222' }} />
                </div>
                <div style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 900, color: '#333' }}>GitPadi Terminal</div>
            </div>

            {/* Content */}
            <div style={{
                padding: '32px',
                height: '400px',
                overflowY: 'auto',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                background: '#000'
            }}>
                <AnimatePresence mode="popLayout">
                    {lines.map((l, i) => (
                        <motion.div
                            key={l.id}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            style={{
                                color: l.color,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                whiteSpace: 'pre'
                            }}
                        >
                            <span style={{
                                fontWeight: l.fontWeight.includes('bold') ? 700 : l.fontWeight.includes('black') ? 900 : 400,
                                fontSize: l.fontWeight.includes('text-[10px]') ? '10px' : l.fontWeight.includes('text-[11px]') ? '11px' : '13px',
                                letterSpacing: l.fontWeight.includes('tracking') ? '0.1em' : 'normal',
                                display: 'inline-block'
                            }}>
                                {l.text}
                            </span>
                            {l.suffix && <span style={{ color: l.suffixColor || '#fff', fontWeight: 700 }}>{l.suffix}</span>}
                            {i === lines.length - 1 && phase !== 'menu' && (
                                <motion.div
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                    style={{ width: '6px', height: '14px', backgroundColor: ACCENT, marginLeft: '2px' }}
                                />
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Terminal;
