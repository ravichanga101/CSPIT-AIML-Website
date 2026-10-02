"use client";

import { config, links } from '@/lib/config';
import { useState, useEffect, useCallback } from 'react';

interface HomeSliderProps {
    images: string[];
}

export default function HomeSlider({ images }: HomeSliderProps) {

    const [cur, setCur] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const next = useCallback(() => setCur(p => (p + 1) % images.length), [images.length]);
    const prev = useCallback(() => setCur(p => (p - 1 + images.length) % images.length), [images.length]);

    useEffect(() => {
        setLoaded(true);
    }, []);

    useEffect(() => {
        const t = setInterval(next, 4000);
        return () => clearInterval(t);
    }, [next]);

    const stats = [
        { value: config.Intake, label: 'Intake Seats', icon: 'fa-users' },
        { value: config.placement_percent, label: `Placement (${config.placement_year})`, icon: 'fa-briefcase' },
        { value: config.student_teacher_ratio, label: 'Student-Teacher Ratio', icon: 'fa-graduation-cap' },
    ];

    return (
        <section id="intro" className="hero-section-redesign">
            {/* Subtle background pattern */}
            <div className="hero-bg-pattern" />

            {/* Soft gradient accent — top right */}
            <div style={{
                position: 'absolute', top: '-60px', right: '-60px', zIndex: 0,
                width: '440px', height: '440px', borderRadius: '50%',
                background: 'radial-gradient(ellipse, rgba(37, 99, 235, 0.05) 0%, transparent 70%)',
                filter: 'blur(60px)', pointerEvents: 'none',
            }} />

            {/* Content */}
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="hero-inner">

                    {/* LEFT — Text content */}
                    <div className="hero-text">

                        {/* Department label */}
                        <div className={`hero-label${loaded ? ' hero-animate' : ''}`} style={{ animationDelay: '0.1s' }}>
                            <i className="fa fa-graduation-cap" style={{ fontSize: '11px' }} />
                            CSPIT &bull; CHARUSAT University
                        </div>

                        {/* Heading */}
                        <h1 className={`hero-title${loaded ? ' hero-animate' : ''}`} style={{ animationDelay: '0.2s' }}>
                            <span className="hero-title-line1">Department of</span>
                            <span className="hero-title-line2">Artificial Intelligence</span>
                            <span className="hero-title-line3">And Machine Learning</span>
                        </h1>

                        {/* Description */}
                        <p className={`hero-desc${loaded ? ' hero-animate' : ''}`} style={{ animationDelay: '0.3s' }}>
                            Pioneering cutting-edge research, academic excellence, and intelligent solutions in Artificial Intelligence and Machine Learning at CHARUSAT.
                        </p>

                        {/* Stats row */}
                        <div className={`hero-stats-row${loaded ? ' hero-animate' : ''}`} style={{ animationDelay: '0.4s' }}>
                            {stats.map((s, i) => (
                                <div key={i} className="hero-stat">
                                    <div className="hero-stat-icon">
                                        <i className={`fa ${s.icon}`} />
                                    </div>
                                    <div className="hero-stat-info">
                                        <div className="hero-stat-val">{s.value}</div>
                                        <div className="hero-stat-lbl">{s.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className={`hero-buttons${loaded ? ' hero-animate' : ''}`} style={{ animationDelay: '0.5s' }}>
                            <a href={links.brochure} target="_blank" className="hero-btn-pri">
                                <i className="fa fa-download" /> Download Brochure
                            </a>
                        </div>
                    </div>

                    {/* RIGHT — Image slider */}
                    <div className="hero-image-wrap">
                        <div className="hero-image-container">
                            {images.map((src, i) => (
                                <img key={i} src={src} alt={`Slide ${i + 1}`} className={`hero-slide${cur === i ? ' active' : ''}`} />
                            ))}

                            {/* Slide indicators */}
                            <div className="hero-slide-dots">
                                {images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCur(i)}
                                        className={`hero-dot${cur === i ? ' active' : ''}`}
                                        aria-label={`Go to slide ${i + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Nav arrows */}
                            <div className="hero-slide-nav">
                                <button onClick={prev} className="hero-nav-btn" aria-label="Previous slide">
                                    <i className="fa fa-chevron-left" />
                                </button>
                                <button onClick={next} className="hero-nav-btn" aria-label="Next slide">
                                    <i className="fa fa-chevron-right" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
