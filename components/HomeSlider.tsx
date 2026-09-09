"use client";

import { config, links } from '@/lib/config';
import { useState, useEffect, useCallback } from 'react';

export default function HomeSlider() {
    const images = [
        '/img/intro-carousel/1.jpg',
        '/img/intro-carousel/2.jpeg',
        '/img/intro-carousel/3.jpg',
        '/img/intro-carousel/4.jpg',
        '/img/intro-carousel/5.JPG',
        '/img/intro-carousel/6.JPG',
        '/img/intro-carousel/7.jpg',
        '/img/intro-carousel/8.jpg',
        '/img/intro-carousel/9.jpg',
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section id="intro" className="hero-section">
            {/* ── Layered Background Effects ── */}

            {/* Layer 1: Blurred carousel image */}
            <div className="hero-bg-blur">
                {images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt=""
                        aria-hidden="true"
                        style={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: currentSlide === i ? 1 : 0,
                            transition: 'opacity 1.5s ease-in-out',
                        }}
                    />
                ))}
            </div>

            {/* Layer 2: Dark overlay gradient */}
            <div className="hero-overlay" />

            {/* Layer 3: Animated gradient orbs */}
            <div className="hero-orbs">
                <div className="hero-orb hero-orb-1" />
                <div className="hero-orb hero-orb-2" />
                <div className="hero-orb hero-orb-3" />
                <div className="hero-orb hero-orb-4" />
            </div>

            {/* Layer 4: Dot grid pattern */}
            <div className="hero-grid" />

            {/* Layer 5: Animated scan line */}
            <div className="hero-scanline" />

            {/* ── Main Content ── */}
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row" style={{ alignItems: 'center' }}>
                    {/* Left Content */}
                    <div className="col-lg-7" style={{ marginBottom: '40px' }}>
                        {/* Badge */}
                        <div className="ds-badge hero-badge-anim" style={{ marginBottom: '28px' }}>
                            <span className="badge-pulse" />
                            CSPIT • ESTD. {config.dept_esta}
                        </div>

                        {/* Heading */}
                        <h1 className="hero-heading">
                            Department of
                            <span className="hero-gradient-line1 hero-gradient-anim">
                                Artificial Intelligence
                            </span>
                            <span className="hero-gradient-line2 hero-gradient-anim">
                                And Machine Learning
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="hero-description">
                            Pioneering cutting-edge research, academic excellence, and intelligent solutions in Artificial Intelligence and Machine Learning at CHARUSAT.
                        </p>

                        {/* Quick Stats */}
                        <div className="hero-stats">
                            {[
                                { value: config.Intake, label: 'INTAKE SEATS' },
                                { value: config.placement_percent, label: `PLACEMENT (${config.placement_year})` },
                                { value: config.student_teacher_ratio, label: 'STUDENT-TEACHER' },
                            ].map((stat, i) => (
                                <div key={i} className="hero-stat-card">
                                    <div className="hero-stat-value">{stat.value}</div>
                                    <div className="hero-stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="hero-cta">
                            <a
                                href={links.brochure}
                                target="_blank"
                                className="hero-btn-primary"
                            >
                                <i className="fa fa-download" />
                                Download Brochure
                            </a>
                            <a
                                href="#portfolio"
                                className="hero-btn-secondary"
                            >
                                <i className="fa fa-flask" />
                                Explore Research Labs
                            </a>
                        </div>
                    </div>

                    {/* Right: Image Carousel */}
                    <div className="col-lg-5">
                        <div className="hero-carousel-wrapper">
                            {/* Glow effect behind card */}
                            <div className="hero-carousel-glow" />
                            <div className="hero-carousel-card">
                                <div style={{
                                    width: '100%',
                                    height: '360px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}>
                                    {images.map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            alt={`Department Showcase (${i + 1}/${images.length})`}
                                            style={{
                                                position: 'absolute',
                                                inset: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                opacity: currentSlide === i ? 1 : 0,
                                                transition: 'opacity 0.8s ease-in-out',
                                                transform: currentSlide === i ? 'scale(1)' : 'scale(1.05)',
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Bottom bar with caption + nav */}
                                <div className="hero-carousel-bar">
                                    <span className="hero-carousel-caption">
                                        Department Showcase ({currentSlide + 1}/{images.length})
                                    </span>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <button
                                            onClick={prevSlide}
                                            aria-label="Previous slide"
                                            className="hero-carousel-btn"
                                        >
                                            <i className="fa fa-chevron-left" />
                                        </button>
                                        <button
                                            onClick={nextSlide}
                                            aria-label="Next slide"
                                            className="hero-carousel-btn"
                                        >
                                            <i className="fa fa-chevron-right" />
                                        </button>
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
