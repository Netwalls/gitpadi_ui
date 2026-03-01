import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Copy, ChevronDown, Check, Menu, Users, GitPullRequest, BookOpen, Shield, Zap, Trophy } from 'lucide-react';
import Terminal from './components/Terminal';

// Design Tokens (Kilo Style)
const ACCENT = '#e2ff6f';
const BLACK = '#000000';
const BORDER = '#1a1a1a';
const MUTED = '#888888';
const BLUE = '#2563eb';

const App = () => {
    const [manager, setManager] = useState('npm');
    const [copied, setCopied] = useState(false);

    const commands: Record<string, string> = {
        npx: 'npx gitpadi',
        npm: 'npm install gitpadi',
        yarn: 'yarn add gitpadi',
        pnpm: 'pnpm add gitpadi',
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
            {/* ── Navigation ─────────────────────────────────────────── */}
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
                    <span style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.04em' }}>GitPadi</span>
                </div>

                <div className="hidden md:flex" style={{
                    backgroundColor: '#111',
                    border: `1px solid ${BORDER}`,
                    padding: '4px 8px',
                    borderRadius: '999px',
                    gap: '4px'
                }}>
                    <NavItem label="Contributors" href="#modes" />
                    <NavItem label="Maintainers" href="#modes" />
                    <NavItem label="Organizations" href="#modes" />
                    <NavItem label="CI Integration" href="#ci" />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <a href="https://github.com/Netwalls/contributor-agent" target="_blank" rel="noopener" style={{ padding: '10px 20px', backgroundColor: BLUE, border: 'none', color: '#fff', borderRadius: '8px', fontWeight: 900, cursor: 'pointer', textDecoration: 'none', fontSize: '14px' }}>Star on GitHub</a>
                </div>
            </nav>

            {/* ── Hero Section ───────────────────────────────────────── */}
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
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        padding: '8px 20px',
                        backgroundColor: 'rgba(226, 255, 111, 0.08)',
                        border: '1px solid rgba(226, 255, 111, 0.2)',
                        borderRadius: '999px',
                        fontSize: '13px',
                        fontWeight: 700,
                        color: ACCENT,
                        marginBottom: '32px'
                    }}
                >
                    🚀 V2 — Now with Organization/School Mode
                </motion.div>

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
                    GitPadi CLI 2.0
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(28px, 5vw, 48px)',
                        fontWeight: 900,
                        color: '#ccc',
                        margin: '0 0 16px 0',
                        letterSpacing: '-0.03em',
                        textAlign: 'center'
                    }}
                >
                    GitHub management for <span style={{ fontStyle: 'italic', fontWeight: 500, color: MUTED }}>everyone.</span>
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{
                        fontSize: '16px',
                        color: MUTED,
                        margin: '0 0 48px 0',
                        textAlign: 'center',
                        maxWidth: '600px',
                        lineHeight: 1.6
                    }}
                >
                    Contributors submit PRs. Maintainers review and merge. Organizations grade assignments. All from the terminal.
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
                    marginBottom: '20px'
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

                {/* Install Pill */}
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#000' }}>
                        <span style={{ fontSize: '20px', fontWeight: 900, opacity: 0.4 }}>❯_</span>
                        <code style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '-0.02em' }}>{commands[manager]}</code>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, color: '#000' }}>
                        <Copy size={14} />
                        {copied ? 'Copied' : 'Copy'}
                    </div>
                </motion.div>

                <div style={{ display: 'flex', gap: '16px', marginBottom: '120px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a href="https://github.com/Netwalls/contributor-agent" target="_blank" rel="noopener" style={{ padding: '14px 32px', backgroundColor: '#111', border: `1px solid ${BORDER}`, color: '#fff', borderRadius: '8px', fontSize: '14px', fontWeight: 900, cursor: 'pointer', textDecoration: 'none' }}>
                        View Documentation
                    </a>
                    <a href="https://www.npmjs.com/package/gitpadi" target="_blank" rel="noopener" style={{ padding: '14px 32px', backgroundColor: BLUE, border: 'none', color: '#fff', borderRadius: '8px', fontSize: '14px', fontWeight: 900, cursor: 'pointer', textDecoration: 'none' }}>
                        npm Package
                    </a>
                </div>

                {/* ── Terminal Demo ──────────────────────────────────── */}
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
                                    <h3 style={{ fontSize: '20px', fontWeight: 900, margin: 0, letterSpacing: '-0.02em' }}>GitPadi V2 — Live Demo</h3>
                                    <p style={{ fontSize: '12px', color: '#444', margin: '4px 0 0 0' }}>Three modes. One terminal.</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: '40px', backgroundColor: '#000' }}>
                            <Terminal />
                        </div>
                    </div>
                </div>

                {/* ── Three Modes Section ────────────────────────────── */}
                <div id="modes" style={{ width: '100%', maxWidth: '1100px', marginBottom: '160px', scrollMarginTop: '100px' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, letterSpacing: '-0.04em', textAlign: 'center', margin: '0 0 16px 0' }}
                    >
                        Three modes. <span style={{ color: ACCENT }}>One tool.</span>
                    </motion.h2>
                    <p style={{ fontSize: '16px', color: MUTED, textAlign: 'center', marginBottom: '64px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Whether you're contributing code, maintaining repos, or running a classroom.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                        <ModeCard
                            emoji=""
                            title="Contributor"
                            color="#00ffff"
                            features={[
                                'Fork, clone & branch in one command',
                                'Sync with upstream automatically',
                                'Submit PRs with issue metadata',
                                'Fix CI failures & re-push',
                                'Reply to maintainer comments'
                            ]}
                        />
                        <ModeCard
                            emoji=""
                            title="Maintainer"
                            color="#ff00ff"
                            features={[
                                'Full issue/PR/repo management',
                                'Review PRs & auto-merge',
                                'Score & rank contributors',
                                'Escalating reminders (24h→72h)',
                                'Create releases'
                            ]}
                        />
                        <ModeCard
                            emoji=""
                            title="Organization / School"
                            color="#ffd700"
                            features={[
                                'Create assignments with rubrics',
                                'Auto-grade student PRs (5 criteria)',
                                'Post grade cards on every PR',
                                'Cohort leaderboard with rankings',
                                'Auto-merge passing submissions'
                            ]}
                        />
                    </div>
                </div>

                {/* ── CI Integration Section ─────────────────────────── */}
                <div id="ci" style={{ width: '100%', maxWidth: '1100px', marginBottom: '160px', scrollMarginTop: '100px' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, letterSpacing: '-0.04em', textAlign: 'center', margin: '0 0 16px 0' }}
                    >
                        Drop into <span style={{ color: ACCENT }}>any CI.</span>
                    </motion.h2>
                    <p style={{ fontSize: '16px', color: MUTED, textAlign: 'center', marginBottom: '64px', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Add GitPadi to your GitHub Actions. PRs get reviewed, graded, and merged — automatically.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))', gap: '24px' }}>
                        {/* Maintainer CI Card */}
                        <div style={{
                            backgroundColor: '#080808',
                            border: `1px solid ${BORDER}`,
                            borderRadius: '24px',
                            padding: '40px',
                            textAlign: 'left'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <Shield size={20} color="#ff00ff" />
                                <span style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '-0.02em' }}>For Maintainers</span>
                            </div>
                            <p style={{ fontSize: '14px', color: MUTED, marginBottom: '24px', lineHeight: 1.6 }}>
                                Every PR gets reviewed. CI passes → auto-merge. CI fails → contributor gets notified. Inactive assignees get reminded and eventually unassigned.
                            </p>
                            <pre style={{
                                backgroundColor: '#000',
                                border: `1px solid ${BORDER}`,
                                borderRadius: '12px',
                                padding: '20px',
                                fontSize: '12px',
                                color: '#aaa',
                                overflow: 'auto',
                                fontFamily: 'JetBrains Mono, monospace',
                                margin: 0,
                                lineHeight: 1.6
                            }}>{`- uses: Netwalls/contributor-agent@main
  with:
    action: review-and-merge
    github-token: \${{ secrets.GITHUB_TOKEN }}
    auto-merge: true`}</pre>
                        </div>

                        {/* Org CI Card */}
                        <div style={{
                            backgroundColor: '#080808',
                            border: `1px solid ${BORDER}`,
                            borderRadius: '24px',
                            padding: '40px',
                            textAlign: 'left'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <BookOpen size={20} color="#ffd700" />
                                <span style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '-0.02em' }}>For Organizations / Schools</span>
                            </div>
                            <p style={{ fontSize: '14px', color: MUTED, marginBottom: '24px', lineHeight: 1.6 }}>
                                Students submit PRs. GitPadi scores on CI, relevance, tests, quality, and format. Grade card posted. Passing work merged automatically.
                            </p>
                            <pre style={{
                                backgroundColor: '#000',
                                border: `1px solid ${BORDER}`,
                                borderRadius: '12px',
                                padding: '20px',
                                fontSize: '12px',
                                color: '#aaa',
                                overflow: 'auto',
                                fontFamily: 'JetBrains Mono, monospace',
                                margin: 0,
                                lineHeight: 1.6
                            }}>{`- uses: Netwalls/contributor-agent@main
  with:
    action: grade-assignment
    github-token: \${{ secrets.GITHUB_TOKEN }}
    pass-threshold: 40`}</pre>
                        </div>
                    </div>
                </div>

                {/* ── Grading Breakdown Section ──────────────────────── */}
                <div style={{ width: '100%', maxWidth: '800px', marginBottom: '160px' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, letterSpacing: '-0.04em', textAlign: 'center', margin: '0 0 48px 0' }}
                    >
                        How grading <span style={{ color: '#ffd700' }}>works.</span>
                    </motion.h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <GradeRow criteria="CI Passing" points={25} description="All GitHub Actions checks green" color="#00ff87" />
                        <GradeRow criteria="Assignment Relevance" points={25} description="PR matches the assignment scope" color="#00ffff" />
                        <GradeRow criteria="Test Coverage" points={20} description="Tests included with source changes" color="#2563eb" />
                        <GradeRow criteria="Code Quality" points={15} description="Clean commits, reasonable PR size" color="#ff00ff" />
                        <GradeRow criteria="Submission Format" points={15} description="Branch name, issue ref, PR body" color="#ffd700" />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '40px', flexWrap: 'wrap' }}>
                        {['A (80+)', 'B (60-79)', 'C (40-59)', 'D (20-39)', 'F (<20)'].map((g, i) => (
                            <div key={g} style={{
                                padding: '10px 20px',
                                backgroundColor: '#111',
                                border: `1px solid ${BORDER}`,
                                borderRadius: '12px',
                                fontSize: '14px',
                                fontWeight: 900,
                                color: ['#00ff87', '#2563eb', '#ffd700', '#ff6b35', '#ff0000'][i]
                            }}>
                                {g}
                            </div>
                        ))}
                    </div>
                </div>

            </main>

            {/* ── Footer ──────────────────────────────────────────── */}
            <footer style={{ width: '100%', padding: '80px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', borderTop: `1px solid ${BORDER}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.5, marginBottom: '16px' }}>
                    <div style={{ width: '24px', height: '24px', backgroundColor: '#fff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: '#000', fontSize: '12px' }}>Ꝃ</div>
                    <span style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '-0.04em' }}>GitPadi</span>
                </div>
                <p style={{ color: '#333', fontSize: '9px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.5em', margin: 0 }}>Built by Netwalls • Open Source</p>
            </footer>
        </div>
    );
};

// ── Components ──────────────────────────────────────────────────────────

const NavItem = ({ label, hasChevron, isExternal, href }: { label: string, hasChevron?: boolean, isExternal?: boolean, href?: string }) => (
    <a href={href} style={{ padding: '8px 14px', fontSize: '12px', fontWeight: 'bold', color: MUTED, textDecoration: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', borderRadius: '999px', transition: 'all 0.2s' }}
        onMouseEnter={e => { (e.target as HTMLElement).style.color = '#fff'; (e.target as HTMLElement).style.backgroundColor = '#1a1a1a'; }}
        onMouseLeave={e => { (e.target as HTMLElement).style.color = MUTED; (e.target as HTMLElement).style.backgroundColor = 'transparent'; }}
    >
        {label}
        {hasChevron && <ChevronDown size={12} />}
        {isExternal && <span style={{ opacity: 0.4, fontSize: '10px' }}>↗</span>}
    </a>
);

const ModeCard = ({ emoji, title, color, features }: { emoji: string, title: string, color: string, features: string[] }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
            backgroundColor: '#080808',
            border: `1px solid ${BORDER}`,
            borderRadius: '24px',
            padding: '40px',
            textAlign: 'left',
            transition: 'border-color 0.3s',
        }}
        whileHover={{ borderColor: color }}
    >
        <div style={{ fontSize: '32px', marginBottom: '16px' }}>{emoji}</div>
        <h3 style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '-0.02em', margin: '0 0 20px 0', color }}>{title}</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {features.map((f, i) => (
                <li key={i} style={{ fontSize: '14px', color: '#aaa', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color, fontSize: '10px' }}>▸</span>
                    {f}
                </li>
            ))}
        </ul>
    </motion.div>
);

const GradeRow = ({ criteria, points, description, color }: { criteria: string, points: number, description: string, color: string }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 24px',
            backgroundColor: '#080808',
            border: `1px solid ${BORDER}`,
            borderRadius: '16px',
            borderLeft: `3px solid ${color}`
        }}
    >
        <div>
            <div style={{ fontSize: '16px', fontWeight: 900, letterSpacing: '-0.02em' }}>{criteria}</div>
            <div style={{ fontSize: '13px', color: MUTED, marginTop: '4px' }}>{description}</div>
        </div>
        <div style={{ fontSize: '24px', fontWeight: 900, color, minWidth: '50px', textAlign: 'right' }}>{points}</div>
    </motion.div>
);

export default App;
