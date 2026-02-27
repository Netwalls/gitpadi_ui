import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Copy, ChevronDown, Check, Menu, Play, Clock, Share2 } from 'lucide-react';
import Terminal from './components/Terminal';

// Design Tokens (Kilo Style - Refined)
const ACCENT = '#e2ff6f';
const BLACK = '#000000';
const BORDER = '#1a1a1a';
const MUTED = '#888888';

const App = () => {
    const [manager, setManager] = useState('npm');
    const [copied, setCopied] = useState(false);

    const commands: Record<string, string> = {
        npm: 'npm install -g gitpadi',
        curl: 'curl -fsSL https://gitpadi.dev/install.sh | sh',
        bun: 'bun add -g gitpadi',
        pnpm: 'pnpm add -g gitpadi',
        brew: 'brew install gitpadi',
        paru: 'paru -S gitpadi',
    };

    const copyCommand = () => {
        navigator.clipboard.writeText(commands[manager]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div style={{
            backgroundColor: BLACK,
            color: '#fff',
            minHeight: '100vh',
            fontFamily: 'Inter, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflowX: 'hidden'
        }}>
            {/* ── Navigation ────────────────────────────────────────────────── */}
            <nav style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 100,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '24px 40px',
                backgroundColor: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(12px)',
                borderBottom: `1px solid ${BORDER}`,
                boxSizing: 'border-box'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '28px', height: '28px', backgroundColor: '#fff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: '#000' }}>Ꝃ</div>
                    <span style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.04em' }}>GitPadi Code</span>
                </div>

                <div className="hidden md:flex" style={{
                    backgroundColor: '#111',
                    border: `1px solid ${BORDER}`,
                    padding: '4px 8px',
                    borderRadius: '999px',
                    gap: '16px'
                }}>
                    <NavItem label="Product" hasChevron />
                    <NavItem label="Pricing" />
                    <NavItem label="Support" />
                    <NavItem label="Docs" isExternal />
                    <NavItem label="Blog" isExternal />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div className="hidden sm:flex" style={{
                        padding: '4px 12px',
                        backgroundColor: '#111',
                        border: `1px solid ${BORDER}`,
                        borderRadius: '999px',
                        fontSize: '11px',
                        fontWeight: 'bold',
                        color: MUTED,
                        alignItems: 'center',
                        gap: '6px'
                    }}>
                        <Github size={12} />
                        15.7k
                    </div>
                    <button style={{ fontSize: '14px', fontWeight: 'bold', color: MUTED, border: 'none', background: 'none', cursor: 'pointer' }}>Sign in</button>
                    <button style={{ padding: '10px 20px', backgroundColor: '#2563eb', border: 'none', color: '#fff', borderRadius: '8px', fontWeight: 900, cursor: 'pointer' }}>Sign up</button>
                </div>
            </nav>

            {/* ── Hero Section ──────────────────────────────────────────────── */}
            <main style={{
                paddingTop: '200px',
                width: '100%',
                maxWidth: '1200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingLeft: '24px',
                paddingRight: '24px',
                boxSizing: 'border-box'
            }}>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                        fontSize: 'clamp(60px, 12vw, 140px)',
                        fontWeight: 900,
                        color: ACCENT,
                        margin: '0 0 24px 0',
                        letterSpacing: '-0.06em',
                        lineHeight: 0.8,
                        textAlign: 'center'
                    }}
                >
                    GitPadi CLI 1.0
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(20px, 4vw, 32px)',
                        fontWeight: 'bold',
                        color: '#ccc',
                        margin: '0 0 48px 0',
                        letterSpacing: '-0.02em',
                        textAlign: 'center'
                    }}
                >
                    The most complete CLI for <span style={{ fontStyle: 'italic', fontWeight: 500, color: MUTED }}>agentic engineering.</span>
                </motion.p>

                {/* Manager Selection */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '6px',
                    backgroundColor: '#111',
                    border: `1px solid ${BORDER}`,
                    borderRadius: '12px',
                    marginBottom: '40px'
                }}>
                    {Object.keys(commands).map(lib => (
                        <button
                            key={lib}
                            onClick={() => setManager(lib)}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '8px',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                backgroundColor: manager === lib ? 'rgba(226, 255, 111, 0.1)' : 'transparent',
                                color: manager === lib ? ACCENT : MUTED
                            }}
                        >
                            {lib}
                        </button>
                    ))}
                </div>

                {/* The BIG Pill */}
                <motion.div
                    onClick={copyCommand}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    style={{
                        width: '100%',
                        maxWidth: '600px',
                        backgroundColor: ACCENT,
                        padding: '24px 40px',
                        borderRadius: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        boxShadow: '0 0 50px rgba(226, 255, 111, 0.2)',
                        marginBottom: '48px'
                    }}
                    whileHover={{ scale: 1.01, boxShadow: '0 0 70px rgba(226, 255, 111, 0.4)' }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: '#000' }}>
                        <span style={{ fontSize: '24px', fontWeight: 900, opacity: 0.4 }}>❯_</span>
                        <code style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.02em' }}>{commands[manager]}</code>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, color: '#000' }}>
                        <Copy size={14} />
                        {copied ? 'Copied' : 'Copy'}
                    </div>
                </motion.div>

                <div style={{ display: 'flex', gap: '16px', marginBottom: '120px' }}>
                    <button style={{ padding: '14px 32px', backgroundColor: '#111', border: `1px solid ${BORDER}`, color: '#fff', borderRadius: '8px', fontSize: '14px', fontWeight: 900, cursor: 'pointer' }}>
                        View Documentation
                    </button>
                    <button style={{ padding: '14px 32px', backgroundColor: '#2563eb', border: 'none', color: '#fff', borderRadius: '8px', fontSize: '14px', fontWeight: 900, cursor: 'pointer' }}>
                        GitHub
                    </button>
                </div>

                {/* Demo Section (Exact Match to Step 2281 Screenshot) */}
                <div style={{ width: '100%', maxWidth: '1000px', marginBottom: '160px' }}>
                    <div style={{
                        borderRadius: '32px',
                        overflow: 'hidden',
                        backgroundColor: '#050505',
                        border: `1px solid ${BORDER}`,
                        boxShadow: '0 0 100px rgba(255,255,255,0.02)'
                    }}>
                        <div style={{ padding: '24px 32px', borderBottom: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{
                                    width: '44px',
                                    height: '44px',
                                    backgroundColor: ACCENT,
                                    borderRadius: '14px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#000',
                                    boxShadow: `0 0 20px rgba(226, 255, 111, 0.4)`
                                }}>
                                    <Check size={24} strokeWidth={4} />
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <h3 style={{ fontSize: '20px', fontWeight: 900, margin: 0, letterSpacing: '-0.02em' }}>Introducing GitPadi CLI 1.0</h3>
                                    <div style={{ display: 'flex', gap: '20px', fontSize: '11px', fontWeight: 'bold', color: '#444', marginTop: '6px' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}><Menu size={12} /> Watch later</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}><Menu size={12} /> Share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: '40px', backgroundColor: '#000' }}>
                            <Terminal />
                        </div>
                    </div>
                </div>
            </main>

            <footer style={{ width: '100%', padding: '80px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', borderTop: `1px solid ${BORDER}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.5, marginBottom: '16px' }}>
                    <div style={{ width: '24px', height: '24px', backgroundColor: '#fff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: '#000', fontSize: '12px' }}>Ꝃ</div>
                    <span style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '-0.04em' }}>GitPadi Code</span>
                </div>
                <p style={{ color: '#333', fontSize: '9px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.5em', margin: 0 }}>Forge the Future • Netwalls Elite Systems</p>
            </footer>
        </div>
    );
};

const NavItem = ({ label, hasChevron, isExternal }: { label: string, hasChevron?: boolean, isExternal?: boolean }) => (
    <a style={{ padding: '6px 12px', fontSize: '12px', fontWeight: 'bold', color: MUTED, textDecoration: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
        {label}
        {hasChevron && <ChevronDown size={12} />}
        {isExternal && <span style={{ opacity: 0.4, fontSize: '10px' }}>↗</span>}
    </a>
);

export default App;
