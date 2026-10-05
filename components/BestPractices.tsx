'use client';

import React, { useState, useEffect } from 'react';

interface PracticeItem {
    id: string;
    num: string;
    title: string;
    description: string;
    icon: string;
}

// 10 Best Practices numbered sequentially: 01-05 in row 1, 06-10 in row 2
const topPractices: PracticeItem[] = [
    {
        id: 'bp-1',
        num: '01',
        title: 'MOOC Certifications',
        description: 'Enhancing knowledge through online courses.',
        icon: 'fa-graduation-cap',
    },
    {
        id: 'bp-2',
        num: '02',
        title: 'Industry Certifications',
        description: 'Professional credentials from tech giants.',
        icon: 'fa-certificate',
    },
    {
        id: 'bp-3',
        num: '03',
        title: 'Expert Faculty',
        description: 'Learning from highly experienced educators.',
        icon: 'fa-desktop',
    },
    {
        id: 'bp-4',
        num: '04',
        title: 'Advanced Laboratories',
        description: 'Hands-on experience with modern facilities.',
        icon: 'fa-flask',
    },
    {
        id: 'bp-5',
        num: '05',
        title: 'Placement Excellence',
        description: 'Strong placement record with dedicated support.',
        icon: 'fa-briefcase',
    },
];

const bottomPractices: PracticeItem[] = [
    {
        id: 'bp-6',
        num: '06',
        title: 'Collaborative Learning',
        description: 'Continuous evaluation and teamwork-focused environment.',
        icon: 'fa-users',
    },
    {
        id: 'bp-7',
        num: '07',
        title: 'Vibrant Student Clubs',
        description: 'Active participation in extracurricular activities.',
        icon: 'fa-sitemap',
    },
    {
        id: 'bp-8',
        num: '08',
        title: 'Personalized Mentoring',
        description: 'One-to-one guidance for all-round development.',
        icon: 'fa-user',
    },
    {
        id: 'bp-9',
        num: '09',
        title: 'Competitive Exam Prep',
        description: 'Guidance and resources for national exams.',
        icon: 'fa-file-text-o',
    },
    {
        id: 'bp-10',
        num: '10',
        title: 'Smart Learning Tools',
        description: 'Effective use of modern educational software.',
        icon: 'fa-laptop',
    },
];

const allPracticeIds = [
    'bp-1', 'bp-2', 'bp-3', 'bp-4', 'bp-5',
    'bp-6', 'bp-7', 'bp-8', 'bp-9', 'bp-10'
];

export default function BestPractices() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [autoCycleIdx, setAutoCycleIdx] = useState<number>(0);

    // Dynamic auto-cycle pulse when user is not hovering
    useEffect(() => {
        if (hoveredId !== null) return;
        const timer = setInterval(() => {
            setAutoCycleIdx((prev) => (prev + 1) % allPracticeIds.length);
        }, 2800);
        return () => clearInterval(timer);
    }, [hoveredId]);

    const activeId = hoveredId !== null ? hoveredId : allPracticeIds[autoCycleIdx];

    return (
        <section id="best-practices" className="best-practices-section-redesign">
            {/* ── Ambient Background Layer (Concentric Rings, Dot Matrices & Campus Silhouette) ── */}
            <div className="bp-bg-ambient-layer" aria-hidden="true">
                {/* Top-Left Concentric Ambient Rings */}
                <div className="bp-concentric-rings-left">
                    <div className="bp-ring bp-ring-1" />
                    <div className="bp-ring bp-ring-2" />
                </div>

                {/* Top-Right Concentric Ambient Rings */}
                <div className="bp-concentric-rings-right">
                    <div className="bp-ring bp-ring-3" />
                    <div className="bp-ring bp-ring-4" />
                </div>

                {/* Top-Left Dot Matrix */}
                <div className="bp-dot-matrix bp-matrix-left">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <span key={i} className="bp-matrix-dot" />
                    ))}
                </div>

                {/* Top-Right Dot Matrix */}
                <div className="bp-dot-matrix bp-matrix-right">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <span key={i} className="bp-matrix-dot" />
                    ))}
                </div>

                {/* Bottom-Right Dot Matrix */}
                <div className="bp-dot-matrix bp-matrix-bottom-right">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <span key={i} className="bp-matrix-dot" />
                    ))}
                </div>

                {/* Bottom Campus Architectural Silhouette Banner Matching Reference */}
                <div className="bp-campus-skyline-bg" />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1440px', width: '100%' }}>
                {/* ── Section Header ── */}
                <div className="bp-header">
                    <h2 className="bp-heading">
                        Best <span>Practices</span>
                    </h2>
                    {/* Underline for Best Practices heading matching About Us */}
                    <div className="bp-heading-accent-bar" />
                    <p className="bp-subtitle">
                        Nurturing holistic development, industry-readiness, and academic excellence through modern pedagogy and world-class educational practices.
                    </p>
                </div>

                {/* ── Flowing Wave Timeline Stage ── */}
                <div className="bp-timeline-stage">
                    {/* SVG Flowing Sine Ribbon Wave */}
                    <div className="bp-wave-svg-container" aria-hidden="true">
                        <svg className="bp-wave-svg" viewBox="0 0 1440 180" preserveAspectRatio="none" fill="none">
                            <defs>
                                <linearGradient id="bpWaveRibbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.4" />
                                    <stop offset="25%" stopColor="#3B82F6" stopOpacity="0.55" />
                                    <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.5" />
                                    <stop offset="75%" stopColor="#3B82F6" stopOpacity="0.55" />
                                    <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.4" />
                                </linearGradient>
                                <linearGradient id="bpWaveLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.8" />
                                    <stop offset="50%" stopColor="#2563EB" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.8" />
                                </linearGradient>
                            </defs>
                            {/* Translucent smooth ribbon band */}
                            <path
                                d="M 0 90 Q 144 55 288 90 T 576 90 T 864 90 T 1152 90 T 1440 90 L 1440 114 Q 1296 79 1152 114 T 864 114 T 576 114 T 288 114 T 0 114 Z"
                                fill="url(#bpWaveRibbonGrad)"
                            />
                            {/* Central guiding spine line */}
                            <path
                                d="M 0 90 Q 144 55 288 90 T 576 90 T 864 90 T 1152 90 T 1440 90"
                                stroke="url(#bpWaveLineGrad)"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    {/* TOP ROW: Items 01 to 05 */}
                    <div className="bp-row bp-row-top">
                        {topPractices.map((item) => {
                            const isActive = activeId === item.id;
                            return (
                                <div
                                    key={item.id}
                                    className={`bp-node-item bp-node-top ${isActive ? 'active' : ''}`}
                                    onMouseEnter={() => setHoveredId(item.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                >
                                    <div className="bp-node-card">
                                        {/* Glass Floating Icon Orb */}
                                        <div className="bp-icon-orb">
                                            <i className={`fa ${item.icon}`} />
                                        </div>

                                        {/* Text Info */}
                                        <div className="bp-node-body">
                                            <div className="bp-num-row">
                                                <span className="bp-num">{item.num}</span>
                                                <span className="bp-num-dash" />
                                            </div>
                                            <h4 className="bp-title">{item.title}</h4>
                                            <p className="bp-desc">{item.description}</p>
                                        </div>
                                    </div>

                                    {/* Vertical Connector Line to Wave */}
                                    <div className="bp-connector-line bp-connector-down">
                                        <span className="bp-anchor-dot" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* BOTTOM ROW: Items 06 to 10 */}
                    <div className="bp-row bp-row-bottom">
                        {bottomPractices.map((item) => {
                            const isActive = activeId === item.id;
                            return (
                                <div
                                    key={item.id}
                                    className={`bp-node-item bp-node-bottom ${isActive ? 'active' : ''}`}
                                    onMouseEnter={() => setHoveredId(item.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                >
                                    {/* Vertical Connector Line from Wave */}
                                    <div className="bp-connector-line bp-connector-up">
                                        <span className="bp-anchor-dot" />
                                    </div>

                                    <div className="bp-node-card">
                                        {/* Glass Floating Icon Orb */}
                                        <div className="bp-icon-orb">
                                            <i className={`fa ${item.icon}`} />
                                        </div>

                                        {/* Text Info */}
                                        <div className="bp-node-body">
                                            <div className="bp-num-row">
                                                <span className="bp-num">{item.num}</span>
                                                <span className="bp-num-dash" />
                                            </div>
                                            <h4 className="bp-title">{item.title}</h4>
                                            <p className="bp-desc">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
