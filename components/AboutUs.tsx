'use client';
import { config } from '@/lib/config';
import { useState } from 'react';

const highlights = [
    { icon: 'fa-flask', text: 'State-of-the-art AI & ML laboratories' },
    { icon: 'fa-cog', text: 'Industry certifications: AWS, Microsoft, Oracle' },
    { icon: 'fa-briefcase', text: `${config.placement_percent} placement (${config.placement_year})` },
    { icon: 'fa-graduation-cap', text: 'Part of CHARUSAT — NAAC A+ accredited university' },
];

export default function AboutUs() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <main id="main">
            <section id="about_us" className="about-section-redesign" style={{ scrollMarginTop: '100px' }}>
                {/* ── Dynamic Ambient Background ── */}
                <div className="about-bg-cyber-layer" aria-hidden="true">
                    {/* Left Concentric Cyber Rings */}
                    <div className="about-concentric-rings-left">
                        <div className="about-ring ring-1" />
                        <div className="about-ring ring-2" />
                        <div className="about-ring ring-3" />
                    </div>

                    {/* Left Dot Matrix */}
                    <div className="about-dot-matrix matrix-left">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <span key={i} className="about-matrix-dot" />
                        ))}
                    </div>

                    {/* Right Concentric Cyber Rings with AI Cyborg */}
                    <div className="about-cyborg-stage">
                        <div className="about-ring ring-cyborg-1" />
                        <div className="about-ring ring-cyborg-2" />
                        <div className="about-cyborg-glow" />
                        <img 
                            src="/img/ai_cyborg_head.jpg" 
                            alt="Futuristic AI Neural Humanoid" 
                            className="about-cyborg-img" 
                        />
                    </div>

                    {/* Right Bottom Dot Matrix */}
                    <div className="about-dot-matrix matrix-right">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <span key={i} className="about-matrix-dot" />
                        ))}
                    </div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>

                    {/* ── Section header ── */}
                    <div className="about-header-redesign">
                        <div className="about-badge-pill">
                            <i className="fa fa-info-circle" />
                            <span>INSTITUTIONAL OVERVIEW</span>
                        </div>
                        <h2 className="about-main-title">
                            About <span>Us</span>
                        </h2>
                        <div className="about-title-accent-bar" />
                    </div>

                    {/* ── Two-column body ── */}
                    <div className="about-grid-redesign">

                        {/* Left — description + interactive highlight pills */}
                        <div className="about-left-col">
                            <p className="about-lead-desc">
                                The Department of {config.name_of_dept}, established in {config.dept_esta},
                                offers {config.dept_b_tech_seats} seats for aspiring AI and Machine Learning
                                professionals. Rooted in academic excellence and industry relevance, the department
                                equips students with cutting-edge skills to solve real-world challenges through
                                intelligent systems and data-driven innovation.
                            </p>

                            <div className="about-highlight-list">
                                {highlights.map((h, i) => (
                                    <div 
                                        key={i} 
                                        className={`about-highlight-card ${hoveredIdx === i ? 'hovered' : ''}`}
                                        onMouseEnter={() => setHoveredIdx(i)}
                                        onMouseLeave={() => setHoveredIdx(null)}
                                    >
                                        <div className="about-highlight-icon-box">
                                            <i className={`fa ${h.icon}`} />
                                        </div>
                                        <span className="about-highlight-title">{h.text}</span>
                                        <div className="about-highlight-arrow-wrap">
                                            <i className="fa fa-arrow-right" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — Placement record spotlight showcase card */}
                        <div className="about-right-col">
                            <div className="about-placement-card">
                                {/* Card Top Row */}
                                <div className="about-placement-top">
                                    <div className="about-placement-header-left">
                                        <div className="about-placement-icon-box">
                                            <i className="fa fa-line-chart" />
                                        </div>
                                        <div>
                                            <div className="about-placement-label">PLACEMENT RECORD</div>
                                            <div className="about-placement-year">{config.placement_year}</div>
                                        </div>
                                    </div>
                                    <div className="about-verified-badge">
                                        <i className="fa fa-check-circle" />
                                        <span>VERIFIED</span>
                                    </div>
                                </div>

                                {/* Card Middle Showcase */}
                                <div className="about-placement-middle">
                                    <div className="about-placement-stat-info">
                                        <div className="about-placement-percent">{config.placement_percent}</div>
                                        <div className="about-placement-subtext">Campus Placement Rate</div>
                                        <div className="about-outcome-pill">
                                            <i className="fa fa-trophy" />
                                            <span>Exceptional Career Outcomes</span>
                                        </div>
                                    </div>

                                    {/* 3D Dynamic Rising Bar Graphic with Upward Curved Arrow */}
                                    <div className="about-chart-graphic" aria-hidden="true">
                                        <svg className="about-chart-svg" viewBox="0 0 160 110" fill="none">
                                            {/* Rising gradient bars */}
                                            <rect x="25" y="70" width="16" height="35" rx="5" fill="url(#barGrad1)" />
                                            <rect x="52" y="55" width="16" height="50" rx="5" fill="url(#barGrad2)" />
                                            <rect x="79" y="38" width="16" height="67" rx="5" fill="url(#barGrad3)" />
                                            <rect x="106" y="20" width="16" height="85" rx="5" fill="url(#barGrad4)" />
                                            
                                            {/* Upward curved arrow */}
                                            <path 
                                                d="M 15 88 Q 70 82 125 24" 
                                                stroke="#3B82F6" 
                                                strokeWidth="4" 
                                                strokeLinecap="round" 
                                            />
                                            {/* Arrowhead */}
                                            <path 
                                                d="M 112 24 L 126 23 L 124 37" 
                                                stroke="#3B82F6" 
                                                strokeWidth="4" 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                            />

                                            <defs>
                                                <linearGradient id="barGrad1" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.45" />
                                                    <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.1" />
                                                </linearGradient>
                                                <linearGradient id="barGrad2" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.55" />
                                                    <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.15" />
                                                </linearGradient>
                                                <linearGradient id="barGrad3" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.65" />
                                                    <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.2" />
                                                </linearGradient>
                                                <linearGradient id="barGrad4" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
                                                    <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.25" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>

                                {/* Bottom Meta Stats Row */}
                                <div className="about-placement-bottom-stats">
                                    <div className="about-meta-box">
                                        <div className="about-meta-num">{config.Intake}</div>
                                        <div className="about-meta-lbl">SEATS</div>
                                    </div>
                                    <div className="about-meta-box">
                                        <div className="about-meta-num">{config.dept_esta}</div>
                                        <div className="about-meta-lbl">EST. YEAR</div>
                                    </div>
                                    <div className="about-meta-box">
                                        <div className="about-meta-num">{config.total_publications}</div>
                                        <div className="about-meta-lbl">PUBLICATIONS</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </main>
    );
}
