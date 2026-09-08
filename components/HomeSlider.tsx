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
        <section id="intro" style={{
            background: 'var(--bg-primary)',
            position: 'relative',
            overflow: 'hidden',
            padding: '120px 0 80px 0',
            minHeight: 'auto',
            height: 'auto'
        }}>
            {/* Background effects */}
            <div style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                zIndex: 0,
            }}>
                <div style={{
                    position: 'absolute',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
                    top: '-200px',
                    left: '-200px',
                    animation: 'heroPulse 8s ease-in-out infinite',
                }} />
                <div style={{
                    position: 'absolute',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
                    bottom: '-100px',
                    right: '-100px',
                    animation: 'heroPulse 10s ease-in-out infinite reverse',
                }} />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row" style={{ alignItems: 'center' }}>
                    {/* Left Content */}
                    <div className="col-lg-7" style={{ marginBottom: '40px' }}>
                        {/* Badge */}
                        <div className="ds-badge" style={{ marginBottom: '24px' }}>
                            CSPIT • ESTD. {config.dept_esta}
                        </div>

                        {/* Heading */}
                        <h1 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                            fontWeight: 800,
                            lineHeight: 1.15,
                            letterSpacing: '-0.03em',
                            color: 'var(--text-white)',
                            marginBottom: '20px',
                        }}>
                            Department of{' '}
                            <span className="gradient-text" style={{
                                display: 'inline',
                            }}>
                                {config.name_of_dept}
                            </span>
                        </h1>

                        {/* Description */}
                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '16px',
                            lineHeight: 1.8,
                            maxWidth: '520px',
                            marginBottom: '32px',
                        }}>
                            Pioneering cutting-edge research, academic excellence, and intelligent solutions in Artificial Intelligence and Machine Learning at CHARUSAT.
                        </p>

                        {/* Quick Stats */}
                        <div style={{
                            display: 'flex',
                            gap: '12px',
                            marginBottom: '32px',
                            flexWrap: 'wrap',
                        }}>
                            {[
                                { value: config.Intake, label: 'INTAKE SEATS' },
                                { value: config.placement_percent, label: `PLACEMENT (${config.placement_year})` },
                                { value: config.student_teacher_ratio, label: 'STUDENT-TEACHER' },
                            ].map((stat, i) => (
                                <div key={i} style={{
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border-card)',
                                    borderRadius: 'var(--radius-md)',
                                    padding: '14px 20px',
                                    minWidth: '140px',
                                }}>
                                    <div style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '1.5rem',
                                        fontWeight: 800,
                                        color: 'var(--cyan-400)',
                                        lineHeight: 1.2,
                                    }}>{stat.value}</div>
                                    <div style={{
                                        fontSize: '11px',
                                        color: 'var(--text-muted)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        fontWeight: 500,
                                        marginTop: '4px',
                                    }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            <a
                                href={links.brochure}
                                target="_blank"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    background: 'var(--gradient-primary)',
                                    color: 'var(--bg-primary)',
                                    padding: '12px 28px',
                                    borderRadius: 'var(--radius-pill)',
                                    fontWeight: 700,
                                    fontSize: '14px',
                                    textDecoration: 'none',
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    border: 'none',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(6, 182, 212, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <i className="fa fa-download"></i>
                                Download Brochure
                            </a>
                            <a
                                href="#portfolio"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    background: 'transparent',
                                    color: 'var(--cyan-400)',
                                    padding: '12px 28px',
                                    borderRadius: 'var(--radius-pill)',
                                    fontWeight: 600,
                                    fontSize: '14px',
                                    textDecoration: 'none',
                                    border: '1px solid var(--border-glow)',
                                    transition: 'all 0.2s',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <i className="fa fa-flask"></i>
                                Explore Research Labs
                            </a>
                        </div>
                    </div>

                    {/* Right: Image Carousel */}
                    <div className="col-lg-5">
                        <div style={{
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-card)',
                            borderRadius: 'var(--radius-xl)',
                            overflow: 'hidden',
                            position: 'relative',
                            boxShadow: '0 8px 40px rgba(0, 0, 0, 0.4)',
                        }}>
                            <div style={{
                                width: '100%',
                                height: '340px',
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
                                            transition: 'opacity 0.6s ease-in-out',
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Bottom bar with caption + nav */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '12px 20px',
                                background: 'rgba(6, 11, 24, 0.9)',
                                backdropFilter: 'blur(10px)',
                            }}>
                                <span style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '13px',
                                    fontWeight: 500,
                                }}>
                                    Department Showcase ({currentSlide + 1}/{images.length})
                                </span>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button
                                        onClick={prevSlide}
                                        aria-label="Previous slide"
                                        style={{
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '50%',
                                            border: '1px solid var(--border-card)',
                                            background: 'var(--bg-elevated)',
                                            color: 'var(--text-secondary)',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '12px',
                                            transition: 'all 0.2s',
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--cyan-400)'}
                                        onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-card)'}
                                    >
                                        <i className="fa fa-chevron-left"></i>
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        aria-label="Next slide"
                                        style={{
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '50%',
                                            border: '1px solid var(--border-card)',
                                            background: 'var(--bg-elevated)',
                                            color: 'var(--text-secondary)',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '12px',
                                            transition: 'all 0.2s',
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--cyan-400)'}
                                        onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-card)'}
                                    >
                                        <i className="fa fa-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
