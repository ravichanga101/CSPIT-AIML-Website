"use client";

import { config, links } from '@/lib/config';
import { useState, useEffect, useCallback } from 'react';

interface HomeSliderProps {
    images: string[];
}

export default function HomeSlider({ images }: HomeSliderProps) {
    const [cur, setCur] = useState(0);

    const next = useCallback(() => {
        if (!images || images.length === 0) return;
        setCur(p => (p + 1) % images.length);
    }, [images]);

    const prev = useCallback(() => {
        if (!images || images.length === 0) return;
        setCur(p => (p - 1 + images.length) % images.length);
    }, [images]);

    useEffect(() => {
        if (!images || images.length === 0) return;
        const timer = setInterval(next, 4500);
        return () => clearInterval(timer);
    }, [next, images]);

    return (
        <section id="intro" className="hero-section-redesign">
            {/* Cyber Network mesh & ambient radial lighting */}
            <div className="hero-bg-pattern" />
            <div className="hero-ambient-glow-1" />
            <div className="hero-ambient-glow-2" />

            {/* Glowing Cyber Constellation & Sweeping Arc Line */}
            <div className="hero-cyber-arc-wrap" aria-hidden="true">
                <svg className="hero-cyber-arc-svg" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="cyberArcGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
                            <stop offset="25%" stopColor="#38BDF8" stopOpacity="0.5" />
                            <stop offset="65%" stopColor="#60A5FA" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.15" />
                        </linearGradient>
                        <filter id="cyberGlow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="5" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    {/* Primary sweeping luminous arc */}
                    <path
                        d="M -80 720 C 350 680, 680 480, 1020 200 C 1180 70, 1380 90, 1560 120"
                        stroke="url(#cyberArcGrad)"
                        strokeWidth="2.5"
                        filter="url(#cyberGlow)"
                    />
                    {/* Secondary subtle cyber trajectory */}
                    <path
                        d="M 120 780 C 450 720, 800 520, 1150 260 C 1300 150, 1450 160, 1600 170"
                        stroke="rgba(56, 189, 248, 0.22)"
                        strokeWidth="1.5"
                        strokeDasharray="5 7"
                    />
                </svg>
                {/* Cyber Star Nodes */}
                <div className="hero-cyber-node node-1" />
                <div className="hero-cyber-node node-2" />
                <div className="hero-cyber-node node-3" />
                <div className="hero-cyber-node node-4" />
                <div className="hero-cyber-node node-5" />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1360px' }}>
                <div className="hero-grid-main">

                    {/* LEFT COLUMN */}
                    <div className="hero-left-col">
                        {/* University Pill Badge */}
                        <div className="hero-badge-pill">
                            <i className="fa fa-university" />
                            <span>CSPIT &bull; CHARUSAT UNIVERSITY</span>
                        </div>

                        {/* Department Tracked Label */}
                        <div className="hero-dept-label">
                            DEPARTMENT OF
                        </div>

                        {/* Futuristic Main Title */}
                        <h1 className="hero-main-title">
                            Artificial <span className="hero-gradient-text">Intelligence</span>
                            <span style={{ display: 'block' }}>And Machine Learning</span>
                        </h1>

                        {/* Subtitle / Description */}
                        <p className="hero-lead-desc">
                            Pioneering cutting-edge research, academic excellence, and intelligent solutions in Artificial Intelligence and Machine Learning at CHARUSAT.
                        </p>

                        {/* Action Buttons: Download Brochure */}
                        <div className="hero-action-buttons">
                            <a
                                href={links.brochure}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-primary-btn"
                            >
                                <i className="fa fa-download" /> Download Brochure
                            </a>
                        </div>

                        {/* Floating Frosted Glass Stats Bar */}
                        <div className="hero-glass-stats-bar">
                            {/* Stat 1: Intake Seats */}
                            <div className="hero-stat-card">
                                <div className="hero-stat-icon-wrap">
                                    <i className="fa fa-users" />
                                </div>
                                <div className="hero-stat-body">
                                    <div className="hero-stat-number">{config.Intake}</div>
                                    <div className="hero-stat-text">
                                        <span>INTAKE SEATS</span>
                                    </div>
                                </div>
                            </div>

                            {/* Stat 2: Placement */}
                            <div className="hero-stat-card">
                                <div className="hero-stat-icon-wrap">
                                    <i className="fa fa-briefcase" />
                                </div>
                                <div className="hero-stat-body">
                                    <div className="hero-stat-number">{config.placement_percent}</div>
                                    <div className="hero-stat-text">
                                        <span>PLACEMENT</span>
                                        <span className="hero-stat-subtext">({config.placement_year})</span>
                                    </div>
                                </div>
                            </div>

                            {/* Stat 3: Ratio */}
                            <div className="hero-stat-card">
                                <div className="hero-stat-icon-wrap">
                                    <i className="fa fa-graduation-cap" />
                                </div>
                                <div className="hero-stat-body">
                                    <div className="hero-stat-number">{config.student_teacher_ratio}</div>
                                    <div className="hero-stat-text">
                                        <span>STUDENT-TEACHER</span>
                                        <span className="hero-stat-subtext">RATIO</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: 3D LAYERED SHOWCASE EXACTLY AS REFERENCE */}
                    <div className="hero-right-col">
                        <div className="hero-showcase-stage">
                            {/* Wing 1: Left Cyan Glowing Glass Curved Fin */}
                            <div className="hero-wing-left" aria-hidden="true" />

                            {/* Wing 2: Top-Right Angled Translucent Backplate */}
                            <div className="hero-wing-right" aria-hidden="true" />

                            {/* Wing 3: Bottom-Right Radial Electric Blue Wave */}
                            <div className="hero-wing-bottom" aria-hidden="true" />

                            {/* Main Photo Frame */}
                            <div className="hero-photo-showcase-frame">
                                {images && images.map((src, idx) => (
                                    <img
                                        key={idx}
                                        src={src}
                                        alt={`CSPIT AI&ML Campus Slide ${idx + 1}`}
                                        className={`hero-photo-slide ${cur === idx ? 'active' : ''}`}
                                    />
                                ))}

                                {/* Subtle Bottom Vignette for Control Legibility */}
                                <div className="hero-photo-vignette" />

                                {/* Slider Navigation Controls */}
                                <div className="hero-photo-controls">
                                    <button
                                        type="button"
                                        onClick={prev}
                                        className="hero-photo-nav-btn"
                                        aria-label="Previous campus photo"
                                    >
                                        <i className="fa fa-chevron-left" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={next}
                                        className="hero-photo-nav-btn"
                                        aria-label="Next campus photo"
                                    >
                                        <i className="fa fa-chevron-right" />
                                    </button>
                                    <div className="hero-dots-wrap">
                                        {images && images.slice(0, 8).map((_, i) => (
                                            <button
                                                key={i}
                                                type="button"
                                                onClick={() => setCur(i)}
                                                className={`hero-photo-dot ${cur === i ? 'active' : ''}`}
                                                aria-label={`Go to slide ${i + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
