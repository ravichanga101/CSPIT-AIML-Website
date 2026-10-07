'use client';

import React, { useEffect, useRef, useState } from 'react';

const activities = [
    {
        title: 'Internship Support',
        desc: 'Guidance and opportunities for industry internships.',
        icon: 'fa-suitcase',
    },
    {
        title: 'Higher Education / Foreign Education Guidance',
        desc: 'Support for higher studies and global education opportunities.',
        icon: 'fa-graduation-cap',
    },
    {
        title: 'Aptitude Training',
        desc: 'Structured training to strengthen aptitude skills.',
        icon: 'fa-bar-chart',
    },
    {
        title: 'Soft Skills / Personality Development',
        desc: 'Sessions to enhance communication, leadership, and interpersonal skills.',
        icon: 'fa-user',
    },
    {
        title: 'Mock Interview',
        desc: 'Practice sessions with expert feedback.',
        icon: 'fa-microphone',
    },
    {
        title: 'On-Campus and Off-Campus Recruitment',
        desc: 'Connecting students with top recruiters and job opportunities.',
        icon: 'fa-building',
    },
    {
        title: 'Training for IELTS, TOEFL, GRE, GMAT, CAT, GPSC, UPSC, and more',
        desc: 'Specialized training and resources for competitive exams and global opportunities.',
        icon: 'fa-book',
        fullWidth: true,
    },
];

export default function CareerDevelopment() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.12 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="career-development"
            className="cdpc-section"
            style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 45%, #F0F6FF 100%)',
                position: 'relative',
                zIndex: 2,
                scrollMarginTop: '85px',
            }}
        >
            {/* Backward compatibility anchor for #about */}
            <span id="about" style={{ position: 'absolute', top: '-85px', left: 0 }} />

            {/* ── Ambient Background Layer ── */}
            <div className="cdpc-bg-layer">
                <div className="cdpc-curve cdpc-curve-tl" />
                <div className="cdpc-curve cdpc-curve-tr" />
                <div className="cdpc-curve cdpc-curve-bl" />
                <div className="cdpc-curve cdpc-curve-br" />

                {/* Left Connector Line with Glowing Node */}
                <svg className="cdpc-node-svg-left" viewBox="0 0 240 500" preserveAspectRatio="none">
                    <path d="M -40,100 Q 80,220 15,440" fill="none" stroke="rgba(147, 197, 253, 0.55)" strokeWidth="1.5" />
                    <circle cx="50" cy="240" r="4.5" fill="#2563eb" className="cdpc-node-pulse" />
                    <circle cx="50" cy="240" r="9" fill="none" stroke="rgba(37, 99, 235, 0.4)" strokeWidth="1.5" />
                    <circle cx="15" cy="440" r="4" fill="#38bdf8" />
                </svg>

                {/* Right Connector Line with Glowing Node */}
                <svg className="cdpc-node-svg-right" viewBox="0 0 240 500" preserveAspectRatio="none">
                    <path d="M 280,80 Q 140,240 260,460" fill="none" stroke="rgba(147, 197, 253, 0.55)" strokeWidth="1.5" />
                    <circle cx="190" cy="265" r="4.5" fill="#2563eb" className="cdpc-node-pulse" />
                    <circle cx="190" cy="265" r="9" fill="none" stroke="rgba(37, 99, 235, 0.4)" strokeWidth="1.5" />
                    <circle cx="225" cy="450" r="4" fill="#38bdf8" />
                </svg>

                {/* Dot Matrix Top-Left */}
                <div className="cdpc-dot-matrix cdpc-dots-tl">
                    {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="cdpc-dot" />
                    ))}
                </div>

                {/* Dot Matrix Bottom-Right */}
                <div className="cdpc-dot-matrix cdpc-dots-br">
                    {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="cdpc-dot" />
                    ))}
                </div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                {/* ── Section Header ── */}
                <div className={`cdpc-header ${isVisible ? 'cdpc-header-visible' : ''}`}>
                    {/* Top Pill Badge */}
                    <div className="cdpc-badge-wrap">
                        <span className="cdpc-line cdpc-line-left" />
                        <span className="cdpc-top-badge">
                            <i className="fa fa-briefcase" />
                            CAREER SUPPORT
                        </span>
                        <span className="cdpc-line cdpc-line-right" />
                    </div>

                    {/* Main Title */}
                    <h2 className="cdpc-main-title">
                        Career Development &amp; <span className="cdpc-title-blue">Placement</span>
                    </h2>

                    {/* Underline matching About Us */}
                    <div className="cdpc-title-accent-bar" />
                </div>

                {/* ── Description Showcase Banner Card ── */}
                <div className={`cdpc-banner-card ${isVisible ? 'cdpc-card-visible' : ''}`}>
                    {/* Left Concentric Icon Orb */}
                    <div className="cdpc-concentric-wrap">
                        <div className="cdpc-concentric-ring" />
                        <div className="cdpc-icon-orb">
                            <i className="fa fa-briefcase" />
                        </div>
                    </div>

                    {/* Right Text Block */}
                    <div className="cdpc-banner-text-block">
                        <p className="cdpc-banner-desc">
                            The Career Development and Placement Cell (CDPC) supports students&apos; professional growth and connects them with lucrative opportunities. It provides career counseling, skill development workshops, resume-building assistance, interview preparation, and partnerships with employers.
                        </p>
                    </div>

                    {/* Subtle dot matrix inside banner right */}
                    <div className="cdpc-banner-dots">
                        {Array.from({ length: 15 }).map((_, i) => (
                            <span key={i} className="cdpc-dot" />
                        ))}
                    </div>
                </div>

                {/* ── Activities Carried Out Container Card ── */}
                <div className={`cdpc-activities-container ${isVisible ? 'cdpc-card-visible' : ''}`}>
                    {/* Section Subheading */}
                    <div className="cdpc-activities-header">
                        <h3 className="cdpc-activities-title">Activities Carried Out</h3>
                        <div className="cdpc-activities-dash" />
                    </div>

                    {/* Activities Grid */}
                    <div className="cdpc-activities-grid">
                        {activities.map((a, i) => (
                            <div
                                key={i}
                                className={`cdpc-activity-card ${a.fullWidth ? 'cdpc-card-wide' : ''} ${isVisible ? 'cdpc-activity-visible' : ''}`}
                                style={{
                                    transitionDelay: `${0.15 + i * 0.06}s`,
                                }}
                            >
                                {/* Left Icon & Text Info */}
                                <div className="cdpc-activity-left">
                                    <div className="cdpc-activity-icon-box">
                                        <i className={`fa ${a.icon}`} />
                                    </div>
                                    <div className="cdpc-activity-text">
                                        <h4 className="cdpc-activity-name">{a.title}</h4>
                                        <p className="cdpc-activity-desc">{a.desc}</p>
                                    </div>
                                </div>

                                {/* Right Arrow Circle Button */}
                                <div className="cdpc-activity-arrow">
                                    <i className="fa fa-arrow-right" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                /* ═══════════════════════════════════════════════
                   CAREER DEVELOPMENT & PLACEMENT REDESIGN
                   ═══════════════════════════════════════════════ */

                .cdpc-section {
                    position: relative;
                    padding: 85px 0 95px;
                    overflow: hidden;
                    border-top: 1px solid rgba(226, 232, 240, 0.8);
                    border-bottom: 1px solid rgba(226, 232, 240, 0.8);
                }

                /* ── Ambient Background Layer ── */
                .cdpc-bg-layer {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    overflow: hidden;
                    z-index: 1;
                }

                .cdpc-curve {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(45px);
                    pointer-events: none;
                }

                .cdpc-curve-tl {
                    top: -120px;
                    left: -120px;
                    width: 480px;
                    height: 480px;
                    background: radial-gradient(circle, rgba(191, 219, 254, 0.45) 0%, rgba(224, 242, 254, 0.2) 60%, transparent 80%);
                    animation: cdpcFloat 12s ease-in-out infinite alternate;
                }

                .cdpc-curve-tr {
                    top: -60px;
                    right: -100px;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(147, 197, 253, 0.38) 0%, rgba(219, 234, 254, 0.18) 55%, transparent 75%);
                    animation: cdpcFloat 10s ease-in-out infinite alternate-reverse;
                }

                .cdpc-curve-bl {
                    bottom: -100px;
                    left: -100px;
                    width: 440px;
                    height: 440px;
                    background: radial-gradient(circle, rgba(191, 219, 254, 0.35) 0%, rgba(224, 242, 254, 0.15) 60%, transparent 80%);
                }

                .cdpc-curve-br {
                    bottom: -80px;
                    right: -80px;
                    width: 460px;
                    height: 460px;
                    background: radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, rgba(219, 234, 254, 0.15) 60%, transparent 80%);
                    animation: cdpcFloat 11s ease-in-out infinite alternate;
                }

                @keyframes cdpcFloat {
                    0% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(14px, 10px) scale(1.04); }
                    100% { transform: translate(-10px, -8px) scale(0.97); }
                }

                .cdpc-node-svg-left {
                    position: absolute;
                    top: 60px;
                    left: 0;
                    width: 140px;
                    height: 460px;
                    z-index: 1;
                }

                .cdpc-node-svg-right {
                    position: absolute;
                    top: 80px;
                    right: 0;
                    width: 140px;
                    height: 460px;
                    z-index: 1;
                }

                .cdpc-node-pulse {
                    animation: cdpcRadarPulse 2.5s infinite;
                }

                @keyframes cdpcRadarPulse {
                    0% { filter: drop-shadow(0 0 2px #38bdf8); }
                    50% { filter: drop-shadow(0 0 8px #2563eb); }
                    100% { filter: drop-shadow(0 0 2px #38bdf8); }
                }

                .cdpc-dot-matrix {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 12px;
                    position: absolute;
                    z-index: 1;
                }

                .cdpc-dots-tl { top: 55px; left: 16%; }
                .cdpc-dots-br { bottom: 45px; right: 2.5%; }

                .cdpc-dot {
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    background: #93C5FD;
                    opacity: 0.65;
                }

                /* ── Header ── */
                .cdpc-header {
                    text-align: center;
                    margin-bottom: 36px;
                    opacity: 0;
                    transform: translateY(24px);
                    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .cdpc-header.cdpc-header-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .cdpc-badge-wrap {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 14px;
                    margin-bottom: 8px;
                }

                .cdpc-line {
                    display: inline-block;
                    width: 36px;
                    height: 1.5px;
                    border-radius: 2px;
                }

                .cdpc-line-left { background: linear-gradient(90deg, transparent, #3B82F6); }
                .cdpc-line-right { background: linear-gradient(90deg, #3B82F6, transparent); }

                .cdpc-top-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    background: #FFFFFF;
                    border: 1.5px solid #93C5FD;
                    border-radius: 9999px;
                    padding: 3px 14px;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 0.8px;
                    text-transform: uppercase;
                    color: #2563EB;
                    font-family: var(--font-b, sans-serif);
                    box-shadow: 0 2px 6px rgba(37, 99, 235, 0.08);
                    transition: all 0.3s ease;
                }

                .cdpc-top-badge:hover {
                    border-color: #60A5FA;
                    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);
                }

                .cdpc-top-badge i { font-size: 11px; color: #2563EB; }

                .cdpc-main-title {
                    font-family: var(--font-h, 'Montserrat', sans-serif);
                    font-size: clamp(2.4rem, 4.2vw, 3.6rem);
                    font-weight: 900;
                    color: #0F172A;
                    letter-spacing: -0.03em;
                    line-height: 1.08;
                    margin: 0 auto;
                    text-align: center;
                }

                .cdpc-title-blue { color: #2563EB; display: inline-block; }

                /* Underline accent bar matching About Us */
                .cdpc-title-accent-bar {
                    width: 52px;
                    height: 4px;
                    border-radius: 999px;
                    background: linear-gradient(90deg, #2563EB 0%, #60A5FA 100%);
                    margin: 14px auto 24px;
                    box-shadow: 0 0 10px rgba(37, 99, 235, 0.35);
                    display: block;
                }

                /* ── Description Showcase Banner Card ── */
                .cdpc-banner-card {
                    background: #FFFFFF;
                    border: 1.5px solid #E2E8F0;
                    border-radius: 20px;
                    padding: 26px 36px;
                    display: flex;
                    align-items: center;
                    gap: 32px;
                    box-shadow: 0 4px 20px rgba(30, 58, 95, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02);
                    margin-bottom: 24px;
                    position: relative;
                    overflow: hidden;
                    opacity: 0;
                    transform: translateY(28px);
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                                box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                                border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                                opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .cdpc-banner-card.cdpc-card-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .cdpc-banner-card:hover {
                    border-color: #93C5FD;
                    box-shadow: 0 12px 32px rgba(37, 99, 235, 0.08);
                }

                /* Concentric Rings */
                .cdpc-concentric-wrap {
                    position: relative;
                    width: 96px;
                    height: 96px;
                    min-width: 96px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .cdpc-concentric-ring {
                    position: absolute;
                    width: 96px;
                    height: 96px;
                    border-radius: 50%;
                    border: 1.5px solid rgba(191, 219, 254, 0.5);
                    box-shadow: 0 0 16px rgba(219, 234, 254, 0.4);
                    animation: cdpcRingPulse 6s ease-in-out infinite alternate;
                }

                @keyframes cdpcRingPulse {
                    0% { transform: scale(0.95); opacity: 0.6; }
                    100% { transform: scale(1.05); opacity: 1; }
                }

                .cdpc-icon-orb {
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    background: #EFF6FF;
                    border: 1.5px solid #DBEAFE;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #2563EB;
                    font-size: 26px;
                    box-shadow: 0 4px 16px rgba(37, 99, 235, 0.1);
                    transition: all 0.35s ease;
                    z-index: 2;
                }

                .cdpc-banner-card:hover .cdpc-icon-orb {
                    transform: scale(1.08) rotate(4deg);
                    background: #DBEAFE;
                    border-color: #93C5FD;
                }

                .cdpc-banner-text-block {
                    flex: 1;
                    min-width: 0;
                    z-index: 2;
                }

                .cdpc-banner-desc {
                    color: #475569;
                    font-size: 14.5px;
                    line-height: 1.75;
                    font-family: var(--font-b, sans-serif);
                    margin: 0;
                    font-weight: 400;
                }

                .cdpc-banner-dots {
                    position: absolute;
                    right: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 10px;
                    opacity: 0.4;
                    pointer-events: none;
                }

                /* ── Activities Carried Out Container Card ── */
                .cdpc-activities-container {
                    background: #FFFFFF;
                    border: 1.5px solid #E2E8F0;
                    border-radius: 22px;
                    padding: 32px 34px;
                    box-shadow: 0 4px 24px rgba(30, 58, 95, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02);
                    position: relative;
                    opacity: 0;
                    transform: translateY(28px);
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                                box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                                border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                                opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .cdpc-activities-container.cdpc-card-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .cdpc-activities-header {
                    margin-bottom: 24px;
                }

                .cdpc-activities-title {
                    font-family: var(--font-h, 'Montserrat', sans-serif);
                    font-size: 18px;
                    font-weight: 800;
                    color: #0F172A;
                    margin: 0 0 6px 0;
                    letter-spacing: -0.01em;
                }

                .cdpc-activities-dash {
                    width: 28px;
                    height: 3px;
                    background: #2563EB;
                    border-radius: 2px;
                }

                /* Activities Grid */
                .cdpc-activities-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 16px;
                }

                /* Individual Activity Card */
                .cdpc-activity-card {
                    background: #FFFFFF;
                    border: 1.5px solid #E2E8F0;
                    border-radius: 16px;
                    padding: 16px 18px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 14px;
                    box-shadow: 0 2px 8px rgba(15, 23, 42, 0.02);
                    opacity: 0;
                    transform: translateY(20px);
                    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                                box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                                border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                                opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    cursor: default;
                }

                .cdpc-activity-card.cdpc-activity-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .cdpc-activity-card:hover {
                    transform: translateY(-4px);
                    border-color: #93C5FD;
                    box-shadow: 0 12px 28px rgba(37, 99, 235, 0.1);
                }

                /* Card 7 Wide Spanning */
                .cdpc-card-wide {
                    grid-column: 1 / span 2;
                }

                .cdpc-activity-left {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    flex: 1;
                    min-width: 0;
                }

                .cdpc-activity-icon-box {
                    width: 44px;
                    height: 44px;
                    min-width: 44px;
                    border-radius: 12px;
                    background: #EFF6FF;
                    border: 1px solid #DBEAFE;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #2563EB;
                    font-size: 16px;
                    transition: all 0.3s ease;
                    flex-shrink: 0;
                }

                .cdpc-activity-card:hover .cdpc-activity-icon-box {
                    background: #DBEAFE;
                    border-color: #93C5FD;
                    color: #1D4ED8;
                    transform: scale(1.08) rotate(4deg);
                }

                .cdpc-activity-text {
                    flex: 1;
                    min-width: 0;
                }

                .cdpc-activity-name {
                    font-family: var(--font-h, 'Montserrat', sans-serif);
                    font-size: 13.5px;
                    font-weight: 800;
                    color: #0F172A;
                    margin: 0 0 3px 0;
                    line-height: 1.25;
                    letter-spacing: -0.01em;
                    transition: color 0.25s ease;
                }

                .cdpc-activity-card:hover .cdpc-activity-name {
                    color: #1E3A5F;
                }

                .cdpc-activity-desc {
                    font-family: var(--font-b, sans-serif);
                    font-size: 11.5px;
                    color: #64748B;
                    line-height: 1.4;
                    margin: 0;
                    font-weight: 400;
                }

                /* Arrow Circle Button */
                .cdpc-activity-arrow {
                    width: 28px;
                    height: 28px;
                    min-width: 28px;
                    border-radius: 50%;
                    background: #EFF6FF;
                    border: 1px solid #DBEAFE;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #2563EB;
                    font-size: 11px;
                    transition: all 0.3s ease;
                    flex-shrink: 0;
                }

                .cdpc-activity-card:hover .cdpc-activity-arrow {
                    background: #2563EB;
                    border-color: #2563EB;
                    color: #FFFFFF;
                    transform: translateX(3px);
                    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.25);
                }

                /* ── Responsive ── */
                @media (max-width: 1200px) {
                    .cdpc-activities-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .cdpc-card-wide {
                        grid-column: 1 / -1;
                    }
                }

                @media (max-width: 768px) {
                    .cdpc-banner-card {
                        flex-direction: column;
                        text-align: center;
                        gap: 20px;
                        padding: 24px 20px;
                    }
                    .cdpc-banner-dots {
                        display: none;
                    }
                    .cdpc-activities-container {
                        padding: 24px 20px;
                    }
                    .cdpc-activities-grid {
                        grid-template-columns: 1fr;
                    }
                    .cdpc-card-wide {
                        grid-column: auto;
                    }
                    .cdpc-dots-tl,
                    .cdpc-dots-br,
                    .cdpc-node-svg-left,
                    .cdpc-node-svg-right {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
}
