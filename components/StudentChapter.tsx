'use client';

import React, { useEffect, useRef, useState } from 'react';

const chapters = [
    {
        num: '01',
        title: 'IEEE Student Branch',
        img: '/img/logo/ieee.svg',
        role: 'Student Branch',
        badge: 'CHARUSAT Student Branch',
        description: 'Promoting technological innovation, research, and engineering excellence.',
    },
    {
        num: '02',
        title: 'ACM Student Chapter',
        img: '/img/logo/acm.svg',
        role: 'Student Chapter',
        badge: 'CHARUSAT ACM Chapter',
        description: 'Advancing computing as a science and profession through education and leadership.',
    },
    {
        num: '03',
        title: 'CSI Student Chapter',
        img: '/img/logo/csi.svg',
        role: 'Student Chapter',
        badge: 'Computer Society of India',
        description: 'Facilitating research, technical knowledge sharing, and student career enhancement.',
    },
    {
        num: '04',
        title: 'SWAYAM-NPTEL',
        img: '/img/logo/nptel.png',
        role: 'Local Chapter',
        badge: 'CSPIT AI-ML Active Chapter',
        description: 'Providing premier online certification courses directly from IITs and IISc.',
    },
];

const cells = [
    {
        num: '01',
        title: 'Anti-Ragging Cell',
        img: '/img/cell/ARC.png',
        description: 'Ensuring a safe, respectful and ragging-free campus.',
        faculty: 'Prof. Niyati V Patel',
        email: 'niyatipatel.aiml@charusat.ac.in',
        icon: 'fa fa-shield',
        color: '#2563eb',
        cornerGrad: 'rgba(191, 219, 254, 0.45)',
        iconBg: '#EFF6FF',
        iconBorder: '#DBEAFE',
    },
    {
        num: '02',
        title: 'Career Development & Placement Cell',
        img: '/img/cell/CDPC.jpg',
        description: 'Guiding students towards career growth and opportunities.',
        faculty: 'Prof. Dheeraj K. Shringi',
        email: 'dheerajshringi.aiml@charusat.ac.in',
        icon: 'fa fa-briefcase',
        color: '#2563eb',
        cornerGrad: 'rgba(191, 219, 254, 0.45)',
        iconBg: '#EFF6FF',
        iconBorder: '#DBEAFE',
    },
    {
        num: '03',
        title: 'Charusat Startup & Innovation Center',
        img: '/img/cell/CSIC.png',
        description: 'Fostering innovation, entrepreneurship and startup culture among students.',
        faculty: 'Prof. Gaurang Patel',
        email: 'gaurangpatel.me@charusat.ac.in',
        icon: 'fa fa-lightbulb-o',
        color: '#2563eb',
        cornerGrad: 'rgba(191, 219, 254, 0.45)',
        iconBg: '#EFF6FF',
        iconBorder: '#DBEAFE',
    },
    {
        num: '04',
        title: 'Equal Opportunity Cell',
        img: '/img/cell/EOC.png',
        description: 'Creating an inclusive campus for equal opportunities and a fair learning environment.',
        faculty: 'Prof. Gaurav Kumar Gautam',
        email: 'gauravkumar.aiml@charusat.ac.in',
        icon: 'fa fa-users',
        color: '#059669',
        cornerGrad: 'rgba(167, 243, 208, 0.45)',
        iconBg: '#ECFDF5',
        iconBorder: '#A7F3D0',
    },
    {
        num: '05',
        title: 'National Service Scheme',
        img: '/img/cell/NSS.png',
        description: 'Encouraging social responsibility through community service and nation building.',
        faculty: 'Prof. Gaurav Kumar Gautam',
        email: 'gauravkumar.aiml@charusat.ac.in',
        icon: 'fa fa-leaf',
        color: '#7c3aed',
        cornerGrad: 'rgba(221, 214, 254, 0.45)',
        iconBg: '#F5F3FF',
        iconBorder: '#DDD6FE',
    },
    {
        num: '06',
        title: 'Women Development Cell',
        img: '/img/cell/WDC.jpg',
        description: 'Empowering, supporting and ensuring a safe and inclusive environment for women.',
        faculty: 'Prof. Niyati V Patel',
        email: 'niyatipatel.aiml@charusat.ac.in',
        icon: 'fa fa-venus',
        color: '#db2777',
        cornerGrad: 'rgba(251, 207, 232, 0.45)',
        iconBg: '#FDF2F8',
        iconBorder: '#FBCFE8',
    },
];

export default function StudentChapter() {
    const chapterRef = useRef<HTMLElement>(null);
    const cellRef = useRef<HTMLElement>(null);
    const [chapterVisible, setChapterVisible] = useState(false);
    const [cellVisible, setCellVisible] = useState(false);

    useEffect(() => {
        const obsChapter = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setChapterVisible(true);
            },
            { threshold: 0.12 }
        );
        const obsCell = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setCellVisible(true);
            },
            { threshold: 0.12 }
        );

        if (chapterRef.current) obsChapter.observe(chapterRef.current);
        if (cellRef.current) obsCell.observe(cellRef.current);

        return () => {
            obsChapter.disconnect();
            obsCell.disconnect();
        };
    }, []);

    return (
        <>
            {/* ═══════════════════════════════════════════════════
               1. STUDENT CHAPTERS SECTION (LIGHT THEME)
               ═══════════════════════════════════════════════════ */}
            <section
                ref={chapterRef}
                id="student-chapter"
                className="student-chapter-section"
                style={{
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 45%, #F0F6FF 100%)',
                    position: 'relative',
                    zIndex: 2,
                    scrollMarginTop: '85px',
                }}
            >
                {/* ── Ambient Background Layer ── */}
                <div className="chapter-bg-layer">
                    <div className="chapter-curve chapter-curve-tl" />
                    <div className="chapter-curve chapter-curve-tr" />
                    <div className="chapter-curve chapter-curve-bl" />
                    <div className="chapter-curve chapter-curve-br" />

                    <svg className="chapter-node-svg-left" viewBox="0 0 240 500" preserveAspectRatio="none">
                        <path d="M -40,100 Q 80,220 15,440" fill="none" stroke="rgba(147, 197, 253, 0.55)" strokeWidth="1.5" />
                        <circle cx="50" cy="240" r="4.5" fill="#2563eb" className="chapter-node-pulse" />
                        <circle cx="50" cy="240" r="9" fill="none" stroke="rgba(37, 99, 235, 0.4)" strokeWidth="1.5" />
                        <circle cx="15" cy="440" r="4" fill="#38bdf8" />
                    </svg>

                    <svg className="chapter-node-svg-right" viewBox="0 0 240 500" preserveAspectRatio="none">
                        <path d="M 280,80 Q 140,240 260,460" fill="none" stroke="rgba(147, 197, 253, 0.55)" strokeWidth="1.5" />
                        <circle cx="190" cy="265" r="4.5" fill="#2563eb" className="chapter-node-pulse" />
                        <circle cx="190" cy="265" r="9" fill="none" stroke="rgba(37, 99, 235, 0.4)" strokeWidth="1.5" />
                        <circle cx="225" cy="450" r="4" fill="#38bdf8" />
                    </svg>

                    <div className="chapter-dot-matrix chapter-dots-tl">
                        {Array.from({ length: 24 }).map((_, i) => (
                            <div key={i} className="chapter-dot" />
                        ))}
                    </div>
                    <div className="chapter-dot-matrix chapter-dots-ml">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div key={i} className="chapter-dot" />
                        ))}
                    </div>
                    <div className="chapter-dot-matrix chapter-dots-br">
                        {Array.from({ length: 24 }).map((_, i) => (
                            <div key={i} className="chapter-dot" />
                        ))}
                    </div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    {/* Header */}
                    <div className={`chapter-header ${chapterVisible ? 'chapter-header-visible' : ''}`}>
                        <div className="chapter-badge-wrap">
                            <span className="chapter-line chapter-line-left" />
                            <span className="chapter-top-badge">
                                <i className="fa fa-graduation-cap" />
                                STUDENT CHAPTERS
                            </span>
                            <span className="chapter-line chapter-line-right" />
                        </div>

                        <h2 className="chapter-main-title">
                            Student&apos;s <span className="chapter-title-blue">Chapters</span>
                        </h2>

                        <div className="chapter-title-accent-bar" />
                    </div>

                    {/* 4 Cards Grid */}
                    <div className="chapter-cards-grid">
                        {chapters.map((item, index) => (
                            <div
                                key={index}
                                className={`chapter-card-new ${chapterVisible ? 'chapter-card-visible' : ''}`}
                                style={{ transitionDelay: `${0.12 + index * 0.08}s` }}
                            >
                                <div className="chapter-index-pill">{item.num}</div>

                                <svg className="chapter-corner-wave" viewBox="0 0 70 70" fill="none">
                                    <path d="M 0,0 C 25,0 70,45 70,70 L 70,0 Z" fill="rgba(219, 234, 254, 0.45)" />
                                    <path d="M 0,0 C 25,0 70,45 70,70" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="4 4" />
                                </svg>

                                <div className="chapter-logo-orb">
                                    <img src={item.img} alt={item.title} className="chapter-logo-img" />
                                </div>

                                <h3 className="chapter-name">{item.title}</h3>

                                <p className="chapter-desc">{item.description}</p>

                                <div className="chapter-footer-pill">
                                    <div className="chapter-footer-icon-orb">
                                        <i className="fa fa-users" />
                                    </div>
                                    <div className="chapter-footer-text">
                                        <span className="chapter-footer-role">{item.role}</span>
                                        <span className="chapter-footer-name" title={item.badge}>
                                            {item.badge}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
               2. CELL INFORMATION SECTION (EXACT REDESIGN)
               ═══════════════════════════════════════════════════ */}
            <section
                ref={cellRef}
                id="cell-information"
                className="cell-information-section"
                style={{
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 45%, #F0F6FF 100%)',
                    position: 'relative',
                    zIndex: 2,
                    scrollMarginTop: '85px',
                }}
            >
                {/* ── Ambient Background Layer ── */}
                <div className="cell-bg-layer">
                    <div className="cell-ambient-blob cell-blob-tl" />
                    <div className="cell-ambient-blob cell-blob-tr" />
                    <div className="cell-ambient-blob cell-blob-bl" />
                    <div className="cell-ambient-blob cell-blob-br" />

                    {/* Left Node Connector Line */}
                    <svg className="cell-node-svg-left" viewBox="0 0 240 600" preserveAspectRatio="none">
                        <path d="M -40,120 Q 80,260 15,500" fill="none" stroke="rgba(147, 197, 253, 0.55)" strokeWidth="1.5" />
                        <circle cx="50" cy="280" r="4.5" fill="#2563eb" className="cell-node-pulse" />
                        <circle cx="50" cy="280" r="9" fill="none" stroke="rgba(37, 99, 235, 0.4)" strokeWidth="1.5" />
                        <circle cx="15" cy="500" r="4" fill="#38bdf8" />
                    </svg>

                    {/* Right Node Connector Line */}
                    <svg className="cell-node-svg-right" viewBox="0 0 240 600" preserveAspectRatio="none">
                        <path d="M 280,100 Q 140,280 260,520" fill="none" stroke="rgba(147, 197, 253, 0.55)" strokeWidth="1.5" />
                        <circle cx="195" cy="300" r="4.5" fill="#2563eb" className="cell-node-pulse" />
                        <circle cx="195" cy="300" r="9" fill="none" stroke="rgba(37, 99, 235, 0.4)" strokeWidth="1.5" />
                        <circle cx="225" cy="520" r="4" fill="#38bdf8" />
                    </svg>

                    {/* Middle Left Dot Matrix */}
                    <div className="cell-dot-matrix cell-dots-ml">
                        {Array.from({ length: 24 }).map((_, i) => (
                            <div key={i} className="cell-dot" />
                        ))}
                    </div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    {/* ── Section Header with Left Tagline, Centered Title, and Right Matrix ── */}
                    <div className={`cell-header-wrap ${cellVisible ? 'cell-header-visible' : ''}`}>
                        {/* Left Tagline Block */}
                        <div className="cell-left-tagline">
                            <div className="cell-tag-orb">
                                <i className="fa fa-compass" />
                            </div>
                            <div className="cell-tag-text-block">
                                <span className="cell-tag-text">Students. Initiatives. Opportunities.</span>
                                <div className="cell-tag-underline" />
                            </div>
                        </div>

                        {/* Center Header */}
                        <div className="cell-center-header">
                            {/* Pill Badge */}
                            <div className="cell-badge-wrap">
                                <span className="cell-line cell-line-left" />
                                <span className="cell-top-badge">
                                    <i className="fa fa-users" />
                                    DEPARTMENT CELLS
                                </span>
                                <span className="cell-line cell-line-right" />
                            </div>

                            {/* Main Title */}
                            <h2 className="cell-main-title">
                                Cell <span className="cell-title-blue">Information</span>
                            </h2>

                            {/* Accent Bar Underline */}
                            <div className="cell-title-accent-bar" />
                        </div>

                        {/* Right Dot Matrix */}
                        <div className="cell-right-matrix">
                            <div className="cell-dot-matrix cell-dots-header">
                                {Array.from({ length: 24 }).map((_, i) => (
                                    <div key={i} className="cell-dot" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── 3-Column Cells Grid (6 Cards) ── */}
                    <div className="cell-cards-grid">
                        {cells.map((cell, i) => (
                            <div
                                key={i}
                                className={`cell-card-redesign ${cellVisible ? 'cell-card-visible' : ''}`}
                                style={{
                                    transitionDelay: `${0.12 + i * 0.07}s`,
                                }}
                            >
                                {/* Top-Left Index Number with Dash */}
                                <div className="cell-num-badge">
                                    <span className="cell-num-text">{cell.num}</span>
                                    <span className="cell-num-dash" style={{ background: cell.color }} />
                                </div>

                                {/* Top-Right Decorative Curve */}
                                <svg className="cell-corner-wave" viewBox="0 0 80 80" fill="none">
                                    <path
                                        d="M 0,0 C 30,0 80,50 80,80 L 80,0 Z"
                                        fill={cell.cornerGrad}
                                    />
                                    <path
                                        d="M 0,0 C 30,0 80,50 80,80"
                                        stroke={cell.color}
                                        strokeWidth="1.2"
                                        strokeDasharray="4 4"
                                        opacity="0.45"
                                    />
                                </svg>

                                {/* Top-Right Themed Icon Orb */}
                                <div
                                    className="cell-corner-icon-orb"
                                    style={{
                                        background: cell.iconBg,
                                        borderColor: cell.iconBorder,
                                        color: cell.color,
                                    }}
                                >
                                    <i className={cell.icon} />
                                </div>

                                {/* Middle Body: Logo + Title & Description */}
                                <div className="cell-middle-body">
                                    {/* Logo Container */}
                                    <div className="cell-logo-box">
                                        <img
                                            src={cell.img}
                                            alt={cell.title}
                                            className="cell-logo-img"
                                        />
                                    </div>

                                    {/* Text Info */}
                                    <div className="cell-text-block">
                                        <h3 className="cell-card-heading">{cell.title}</h3>
                                        <p className="cell-card-desc">{cell.description}</p>
                                    </div>
                                </div>

                                {/* Bottom Footer Row: Coordinator & Email */}
                                <div className="cell-footer-row">
                                    <div className="cell-coord-block">
                                        <i className="fa fa-user" />
                                        <span>{cell.faculty}</span>
                                    </div>
                                    <span className="cell-footer-sep">|</span>
                                    <a
                                        href={`mailto:${cell.email}`}
                                        className="cell-email-link-redesign"
                                        title={`Email ${cell.faculty}`}
                                    >
                                        <i className="fa fa-envelope" />
                                        <span>{cell.email}</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                /* ═══════════════════════════════════════════════
                   GLOBAL TRANSITIONS & TYPOGRAPHY
                   ═══════════════════════════════════════════════ */

                /* ─────────────────────────────────────────────
                   1. STUDENT CHAPTERS STYLES
                   ───────────────────────────────────────────── */
                .student-chapter-section {
                    position: relative;
                    padding: 85px 0 95px;
                    overflow: hidden;
                    border-top: 1px solid rgba(226, 232, 240, 0.8);
                    border-bottom: 1px solid rgba(226, 232, 240, 0.8);
                }

                .chapter-bg-layer {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    overflow: hidden;
                    z-index: 1;
                }

                .chapter-curve {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(45px);
                    pointer-events: none;
                }

                .chapter-curve-tl {
                    top: -120px;
                    left: -120px;
                    width: 480px;
                    height: 480px;
                    background: radial-gradient(circle, rgba(191, 219, 254, 0.45) 0%, rgba(224, 242, 254, 0.2) 60%, transparent 80%);
                    animation: chapterFloat 12s ease-in-out infinite alternate;
                }

                .chapter-curve-tr {
                    top: -60px;
                    right: -100px;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(147, 197, 253, 0.38) 0%, rgba(219, 234, 254, 0.18) 55%, transparent 75%);
                    animation: chapterFloat 10s ease-in-out infinite alternate-reverse;
                }

                .chapter-curve-bl {
                    bottom: -100px;
                    left: -100px;
                    width: 440px;
                    height: 440px;
                    background: radial-gradient(circle, rgba(191, 219, 254, 0.35) 0%, rgba(224, 242, 254, 0.15) 60%, transparent 80%);
                }

                .chapter-curve-br {
                    bottom: -80px;
                    right: -80px;
                    width: 460px;
                    height: 460px;
                    background: radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, rgba(219, 234, 254, 0.15) 60%, transparent 80%);
                    animation: chapterFloat 11s ease-in-out infinite alternate;
                }

                @keyframes chapterFloat {
                    0% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(14px, 10px) scale(1.04); }
                    100% { transform: translate(-10px, -8px) scale(0.97); }
                }

                .chapter-node-svg-left {
                    position: absolute;
                    top: 60px;
                    left: 0;
                    width: 140px;
                    height: 460px;
                    z-index: 1;
                }

                .chapter-node-svg-right {
                    position: absolute;
                    top: 80px;
                    right: 0;
                    width: 140px;
                    height: 460px;
                    z-index: 1;
                }

                .chapter-node-pulse {
                    animation: radarPulse 2.5s infinite;
                }

                @keyframes radarPulse {
                    0% { filter: drop-shadow(0 0 2px #38bdf8); }
                    50% { filter: drop-shadow(0 0 8px #2563eb); }
                    100% { filter: drop-shadow(0 0 2px #38bdf8); }
                }

                .chapter-dot-matrix {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 12px;
                    position: absolute;
                    z-index: 1;
                }

                .chapter-dots-tl { top: 55px; left: 18%; }
                .chapter-dots-ml { top: 260px; left: 2.5%; }
                .chapter-dots-br { bottom: 45px; right: 2.5%; }

                .chapter-dot {
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    background: #93C5FD;
                    opacity: 0.65;
                }

                .chapter-header {
                    text-align: center;
                    margin-bottom: 48px;
                    opacity: 0;
                    transform: translateY(24px);
                    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .chapter-header.chapter-header-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .chapter-badge-wrap {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 14px;
                    margin-bottom: 8px;
                }

                .chapter-line {
                    display: inline-block;
                    width: 36px;
                    height: 1.5px;
                    border-radius: 2px;
                }

                .chapter-line-left { background: linear-gradient(90deg, transparent, #3B82F6); }
                .chapter-line-right { background: linear-gradient(90deg, #3B82F6, transparent); }

                .chapter-top-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    background: #FFFFFF;
                    border: 1.5px solid #93C5FD;
                    border-radius: 9999px;
                    padding: 3px 12px;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 0.8px;
                    text-transform: uppercase;
                    color: #2563EB;
                    font-family: var(--font-b, sans-serif);
                    box-shadow: 0 2px 6px rgba(37, 99, 235, 0.08);
                    transition: all 0.3s ease;
                }

                .chapter-top-badge:hover {
                    border-color: #60A5FA;
                    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);
                }

                .chapter-top-badge i { font-size: 11px; color: #2563EB; }

                .chapter-main-title {
                    font-family: var(--font-h, 'Montserrat', sans-serif);
                    font-size: clamp(2.4rem, 4.2vw, 3.6rem);
                    font-weight: 900;
                    color: #0F172A;
                    letter-spacing: -0.03em;
                    line-height: 1.08;
                    margin: 0 auto;
                    text-align: center;
                }

                .chapter-title-blue { color: #2563EB; display: inline-block; }

                .chapter-title-accent-bar {
                    width: 52px;
                    height: 4px;
                    border-radius: 999px;
                    background: linear-gradient(90deg, #2563EB 0%, #60A5FA 100%);
                    margin: 14px auto 24px;
                    box-shadow: 0 0 10px rgba(37, 99, 235, 0.35);
                    display: block;
                }

                .chapter-cards-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 22px;
                }

                .chapter-card-new {
                    background: #FFFFFF;
                    border: 1.5px solid #E2E8F0;
                    border-radius: 20px;
                    padding: 24px 20px 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    justify-content: space-between;
                    height: 100%;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(30, 58, 95, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02);
                    opacity: 0;
                    transform: translateY(30px);
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                                box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                                border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                                opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .chapter-card-new.chapter-card-visible { opacity: 1; transform: translateY(0); }

                .chapter-card-new:hover {
                    transform: translateY(-6px);
                    border-color: #93C5FD;
                    box-shadow: 0 18px 42px rgba(37, 99, 235, 0.12), 0 2px 6px rgba(0, 0, 0, 0.03);
                }

                .chapter-index-pill {
                    position: absolute;
                    top: 16px;
                    left: 16px;
                    background: #EFF6FF;
                    border: 1px solid #DBEAFE;
                    color: #2563EB;
                    font-weight: 800;
                    font-size: 11px;
                    padding: 2.5px 8.5px;
                    border-radius: 6px;
                    font-family: var(--font-b, sans-serif);
                    letter-spacing: 0.3px;
                    transition: all 0.25s ease;
                }

                .chapter-card-new:hover .chapter-index-pill {
                    background: #DBEAFE;
                    border-color: #93C5FD;
                    color: #1D4ED8;
                }

                .chapter-corner-wave {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 70px;
                    height: 70px;
                    pointer-events: none;
                    transition: transform 0.35s ease;
                }

                .chapter-card-new:hover .chapter-corner-wave { transform: scale(1.08); }

                .chapter-logo-orb {
                    width: 86px;
                    height: 86px;
                    min-width: 86px;
                    border-radius: 50%;
                    background: #F8FAFC;
                    border: 1.5px solid #EFF6FF;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 14px auto 16px;
                    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.05);
                    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                    overflow: hidden;
                    padding: 10px;
                }

                .chapter-card-new:hover .chapter-logo-orb {
                    transform: scale(1.08) translateY(-2px);
                    background: #FFFFFF;
                    border-color: #BFDBFE;
                    box-shadow: 0 8px 22px rgba(37, 99, 235, 0.15);
                }

                .chapter-logo-img {
                    max-width: 76%;
                    max-height: 76%;
                    object-fit: contain;
                    display: block;
                    transition: transform 0.3s ease;
                }

                .chapter-name {
                    font-size: 16px;
                    font-weight: 800;
                    color: #0F172A;
                    margin: 0 0 10px 0;
                    font-family: var(--font-h, 'Montserrat', sans-serif);
                    line-height: 1.3;
                    min-height: 42px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: color 0.25s ease;
                }

                .chapter-card-new:hover .chapter-name { color: #1E3A5F; }

                .chapter-desc {
                    font-size: 12.5px !important;
                    color: #64748B !important;
                    line-height: 1.55 !important;
                    text-align: center !important;
                    text-align-last: center !important;
                    word-spacing: normal !important;
                    letter-spacing: -0.01em !important;
                    margin: 0 0 20px 0 !important;
                    font-weight: 400 !important;
                    font-family: var(--font-b, sans-serif) !important;
                    padding: 0 4px !important;
                    flex: 1;
                }

                .chapter-footer-pill {
                    width: 100%;
                    background: #F8FAFC;
                    border: 1px solid #E2E8F0;
                    border-radius: 12px;
                    padding: 6px 12px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    text-align: left;
                    margin-top: auto;
                    transition: all 0.25s ease;
                }

                .chapter-card-new:hover .chapter-footer-pill {
                    background: #EFF6FF;
                    border-color: #BFDBFE;
                }

                .chapter-footer-icon-orb {
                    width: 30px;
                    height: 30px;
                    min-width: 30px;
                    border-radius: 50%;
                    background: #EFF6FF;
                    border: 1px solid #DBEAFE;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #2563EB;
                    font-size: 12px;
                    transition: all 0.25s ease;
                }

                .chapter-card-new:hover .chapter-footer-icon-orb {
                    background: #DBEAFE;
                    color: #1D4ED8;
                }

                .chapter-footer-text {
                    display: flex;
                    flex-direction: column;
                    min-width: 0;
                    flex: 1;
                }

                .chapter-footer-role {
                    font-size: 8.5px;
                    font-weight: 800;
                    color: #94A3B8;
                    letter-spacing: 0.6px;
                    text-transform: uppercase;
                    line-height: 1.1;
                    font-family: var(--font-b, sans-serif);
                }

                .chapter-footer-name {
                    font-size: 11.5px;
                    font-weight: 700;
                    color: #2563EB;
                    line-height: 1.25;
                    font-family: var(--font-b, sans-serif);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                /* ─────────────────────────────────────────────
                   2. CELL INFORMATION STYLES (MATCHING SCREENSHOT)
                   ───────────────────────────────────────────── */
                .cell-information-section {
                    position: relative;
                    padding: 85px 0 95px;
                    overflow: hidden;
                    border-top: 1px solid rgba(226, 232, 240, 0.8);
                    border-bottom: 1px solid rgba(226, 232, 240, 0.8);
                }

                .cell-bg-layer {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    overflow: hidden;
                    z-index: 1;
                }

                .cell-ambient-blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(45px);
                    pointer-events: none;
                }

                .cell-blob-tl {
                    top: -100px;
                    left: -100px;
                    width: 480px;
                    height: 480px;
                    background: radial-gradient(circle, rgba(191, 219, 254, 0.4) 0%, rgba(224, 242, 254, 0.2) 60%, transparent 80%);
                    animation: cellFloat 12s ease-in-out infinite alternate;
                }

                .cell-blob-tr {
                    top: -60px;
                    right: -100px;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(147, 197, 253, 0.38) 0%, rgba(219, 234, 254, 0.18) 55%, transparent 75%);
                    animation: cellFloat 10s ease-in-out infinite alternate-reverse;
                }

                .cell-blob-bl {
                    bottom: -80px;
                    left: -80px;
                    width: 440px;
                    height: 440px;
                    background: radial-gradient(circle, rgba(191, 219, 254, 0.35) 0%, rgba(224, 242, 254, 0.15) 60%, transparent 80%);
                }

                .cell-blob-br {
                    bottom: -80px;
                    right: -80px;
                    width: 460px;
                    height: 460px;
                    background: radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, rgba(219, 234, 254, 0.15) 60%, transparent 80%);
                    animation: cellFloat 11s ease-in-out infinite alternate;
                }

                @keyframes cellFloat {
                    0% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(14px, 10px) scale(1.04); }
                    100% { transform: translate(-10px, -8px) scale(0.97); }
                }

                .cell-node-svg-left {
                    position: absolute;
                    top: 60px;
                    left: 0;
                    width: 140px;
                    height: 520px;
                    z-index: 1;
                }

                .cell-node-svg-right {
                    position: absolute;
                    top: 80px;
                    right: 0;
                    width: 140px;
                    height: 520px;
                    z-index: 1;
                }

                .cell-node-pulse {
                    animation: radarPulse 2.5s infinite;
                }

                .cell-dot-matrix {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 12px;
                    position: absolute;
                    z-index: 1;
                }

                .cell-dots-ml {
                    top: 300px;
                    left: 2%;
                }

                .cell-dots-header {
                    position: relative;
                }

                .cell-dot {
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    background: #93C5FD;
                    opacity: 0.65;
                }

                /* Header Layout with Tagline, Center, and Matrix */
                .cell-header-wrap {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 48px;
                    position: relative;
                    opacity: 0;
                    transform: translateY(24px);
                    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .cell-header-wrap.cell-header-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* Left Tagline */
                .cell-left-tagline {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    flex: 1;
                    max-width: 320px;
                }

                .cell-tag-orb {
                    width: 36px;
                    height: 36px;
                    min-width: 36px;
                    border-radius: 50%;
                    background: #EFF6FF;
                    border: 1.5px solid #DBEAFE;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #2563EB;
                    font-size: 15px;
                    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.08);
                    transition: all 0.3s ease;
                }

                .cell-tag-orb:hover {
                    transform: rotate(30deg) scale(1.08);
                    background: #DBEAFE;
                }

                .cell-tag-text-block {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .cell-tag-text {
                    font-size: 12.5px;
                    font-weight: 600;
                    color: #64748B;
                    font-family: var(--font-b, sans-serif);
                    letter-spacing: -0.01em;
                    white-space: nowrap;
                }

                .cell-tag-underline {
                    width: 100%;
                    height: 1.5px;
                    background: linear-gradient(90deg, #93C5FD 0%, rgba(147, 197, 253, 0.2) 100%);
                    border-radius: 2px;
                }

                /* Center Header */
                .cell-center-header {
                    text-align: center;
                    flex: 1;
                }

                .cell-badge-wrap {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 14px;
                    margin-bottom: 8px;
                }

                .cell-line {
                    display: inline-block;
                    width: 36px;
                    height: 1.5px;
                    border-radius: 2px;
                }

                .cell-line-left { background: linear-gradient(90deg, transparent, #3B82F6); }
                .cell-line-right { background: linear-gradient(90deg, #3B82F6, transparent); }

                .cell-top-badge {
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

                .cell-top-badge:hover {
                    border-color: #60A5FA;
                    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);
                }

                .cell-top-badge i { font-size: 11px; color: #2563EB; }

                .cell-main-title {
                    font-family: var(--font-h, 'Montserrat', sans-serif);
                    font-size: clamp(2.4rem, 4.2vw, 3.6rem);
                    font-weight: 900;
                    color: #0F172A;
                    letter-spacing: -0.03em;
                    line-height: 1.08;
                    margin: 0 auto;
                    text-align: center;
                }

                .cell-title-blue { color: #2563EB; display: inline-block; }

                .cell-title-accent-bar {
                    width: 52px;
                    height: 4px;
                    border-radius: 999px;
                    background: linear-gradient(90deg, #2563EB 0%, #60A5FA 100%);
                    margin: 14px auto 24px;
                    box-shadow: 0 0 10px rgba(37, 99, 235, 0.35);
                    display: block;
                }

                /* Right Header Matrix */
                .cell-right-matrix {
                    flex: 1;
                    max-width: 320px;
                    display: flex;
                    justify-content: flex-end;
                }

                /* ── 3-Column Cells Grid ── */
                .cell-cards-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                }

                /* ── Card Component ── */
                .cell-card-redesign {
                    background: #FFFFFF;
                    border: 1.5px solid #E2E8F0;
                    border-radius: 20px;
                    padding: 22px 22px 18px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 100%;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(30, 58, 95, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02);
                    opacity: 0;
                    transform: translateY(30px);
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                                box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                                border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                                opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .cell-card-redesign.cell-card-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .cell-card-redesign:hover {
                    transform: translateY(-6px);
                    border-color: #93C5FD;
                    box-shadow: 0 18px 42px rgba(37, 99, 235, 0.12), 0 2px 6px rgba(0, 0, 0, 0.03);
                }

                /* Number with Dash */
                .cell-num-badge {
                    position: absolute;
                    top: 18px;
                    left: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 3px;
                }

                .cell-num-text {
                    font-family: var(--font-h, 'Montserrat', sans-serif);
                    font-size: 14.5px;
                    font-weight: 900;
                    color: #1E3A5F;
                    line-height: 1;
                    letter-spacing: -0.01em;
                }

                .cell-num-dash {
                    width: 14px;
                    height: 2.2px;
                    border-radius: 2px;
                    transition: width 0.3s ease;
                }

                .cell-card-redesign:hover .cell-num-dash {
                    width: 22px;
                }

                /* Top-Right Decorative Curve */
                .cell-corner-wave {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 80px;
                    height: 80px;
                    pointer-events: none;
                    transition: transform 0.35s ease;
                }

                .cell-card-redesign:hover .cell-corner-wave {
                    transform: scale(1.08);
                }

                /* Top-Right Themed Icon Orb */
                .cell-corner-icon-orb {
                    position: absolute;
                    top: 14px;
                    right: 14px;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    border: 1.5px solid;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
                    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                    z-index: 2;
                }

                .cell-card-redesign:hover .cell-corner-icon-orb {
                    transform: scale(1.12) rotate(6deg);
                    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.16);
                }

                /* Middle Body: Logo + Text */
                .cell-middle-body {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin: 28px 0 16px 0;
                }

                /* Logo Box */
                .cell-logo-box {
                    width: 82px;
                    height: 82px;
                    min-width: 82px;
                    border-radius: 14px;
                    background: #FFFFFF;
                    border: 1.5px solid #EDF2F7;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 8px;
                    box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
                    transition: all 0.35s ease;
                    flex-shrink: 0;
                    overflow: hidden;
                }

                .cell-card-redesign:hover .cell-logo-box {
                    transform: scale(1.05);
                    border-color: #BFDBFE;
                    box-shadow: 0 6px 18px rgba(37, 99, 235, 0.1);
                }

                .cell-logo-img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    display: block;
                    transition: transform 0.3s ease;
                }

                /* Text Block */
                .cell-text-block {
                    flex: 1;
                    min-width: 0;
                    text-align: left;
                }

                .cell-card-heading {
                    font-family: var(--font-h, 'Montserrat', sans-serif);
                    font-size: 15px;
                    font-weight: 800;
                    color: #0F172A;
                    margin: 0 0 4px 0;
                    line-height: 1.25;
                    letter-spacing: -0.01em;
                    transition: color 0.25s ease;
                }

                .cell-card-redesign:hover .cell-card-heading {
                    color: #1E3A5F;
                }

                .cell-card-desc {
                    font-size: 12px;
                    color: #64748B;
                    line-height: 1.45;
                    margin: 0;
                    font-family: var(--font-b, sans-serif);
                    font-weight: 400;
                    text-align: left;
                }

                /* Bottom Footer Row */
                .cell-footer-row {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    flex-wrap: wrap;
                    padding-top: 12px;
                    border-top: 1px solid #F1F5F9;
                    margin-top: auto;
                    font-family: var(--font-b, sans-serif);
                }

                .cell-coord-block {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 11.5px;
                    font-weight: 600;
                    color: #1E293B;
                }

                .cell-coord-block i {
                    color: #2563EB;
                    font-size: 11px;
                }

                .cell-footer-sep {
                    color: #CBD5E1;
                    font-size: 11px;
                    user-select: none;
                }

                .cell-email-link-redesign {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    color: #2563EB;
                    font-size: 11.5px;
                    font-weight: 500;
                    text-decoration: none;
                    transition: all 0.2s ease;
                    word-break: break-all;
                }

                .cell-email-link-redesign i {
                    font-size: 11px;
                    color: #2563EB;
                    transition: transform 0.2s ease;
                }

                .cell-email-link-redesign:hover {
                    color: #1D4ED8;
                    text-decoration: underline;
                }

                .cell-email-link-redesign:hover i {
                    transform: scale(1.15);
                }

                /* ── Responsive ── */
                @media (max-width: 1200px) {
                    .chapter-cards-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 20px;
                    }
                    .cell-cards-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 20px;
                    }
                }

                @media (max-width: 860px) {
                    .cell-header-wrap {
                        flex-direction: column;
                        gap: 20px;
                        text-align: center;
                    }
                    .cell-left-tagline,
                    .cell-right-matrix {
                        display: none;
                    }
                }

                @media (max-width: 640px) {
                    .chapter-cards-grid {
                        grid-template-columns: 1fr;
                        gap: 18px;
                    }
                    .cell-cards-grid {
                        grid-template-columns: 1fr;
                        gap: 18px;
                    }
                    .cell-middle-body {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 12px;
                    }
                    .chapter-dots-tl,
                    .chapter-dots-ml,
                    .chapter-dots-br,
                    .cell-dots-ml,
                    .chapter-node-svg-left,
                    .chapter-node-svg-right,
                    .cell-node-svg-left,
                    .cell-node-svg-right {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}
