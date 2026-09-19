"use client";

import { config, links } from '@/lib/config';
import { useState, useEffect, useCallback } from 'react';

interface HomeSliderProps {
    images: string[];
}

export default function HomeSlider({ images }: HomeSliderProps) {


    const [cur, setCur] = useState(0);
    const next = useCallback(() => setCur(p => (p + 1) % images.length), [images.length]);
    const prev = useCallback(() => setCur(p => (p - 1 + images.length) % images.length), [images.length]);

    useEffect(() => {
        const t = setInterval(next, 4000);
        return () => clearInterval(t);
    }, [next]);

    return (
        <section id="intro" style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            padding: '120px 0 60px',
            overflow: 'hidden',
            background: 'transparent',
        }}>
            {/* Blurred bg */}
            <div style={{
                position: 'absolute', inset: '-40px', zIndex: 0,
                filter: 'blur(55px) brightness(0.16) saturate(1.6)',
                transform: 'scale(1.1)',
            }}>
                {images.map((src, i) => (
                    <img key={i} src={src} alt="" aria-hidden style={{
                        position: 'absolute', inset: 0, width: '100%', height: '100%',
                        objectFit: 'cover', opacity: cur === i ? 1 : 0, transition: 'opacity 1.5s ease',
                    }} />
                ))}
            </div>

            {/* Dark overlay — heavier on left, lighter on right */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0,
                background: 'linear-gradient(100deg, rgba(8,9,14,0.96) 0%, rgba(8,9,14,0.82) 45%, rgba(8,9,14,0.4) 100%)',
            }} />

            {/* Violet orb bottom-right */}
            <div style={{
                position: 'absolute', bottom: '-80px', right: '-60px', zIndex: 0,
                width: '500px', height: '400px', borderRadius: '50%',
                background: 'radial-gradient(ellipse, rgba(109,40,217,0.45) 0%, rgba(59,130,246,0.2) 50%, transparent 75%)',
                filter: 'blur(60px)',
            }} />

            {/* Content */}
            <div className="container-fluid" style={{ position: 'relative', zIndex: 2, padding: '0 5vw' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0', minHeight: '80vh' }}>

                    {/* LEFT */}
                    <div style={{ flex: '0 0 52%', maxWidth: '52%', paddingRight: '24px' }}>

                        {/* Heading — large, wraps naturally like reference */}
                        <h1 style={{
                            fontFamily: 'var(--font-h)',
                            fontWeight: 900,
                            fontSize: 'clamp(2rem, 3.5vw, 3.8rem)',
                            lineHeight: 1.1,
                            letterSpacing: '-0.025em',
                            margin: '0 0 20px',
                        }}>
                            <span style={{ display: 'block', color: '#ffffff' }}>Department of</span>
                            <span style={{
                                display: 'block',
                                background: 'linear-gradient(90deg, #22d3ee 0%, #06b6d4 50%, #2dd4bf 100%)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                            }}>Artificial Intelligence</span>
                            <span style={{
                                display: 'block',
                                background: 'linear-gradient(90deg, #38bdf8 0%, #818cf8 55%, #a78bfa 100%)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                            }}>And Machine Learning</span>
                        </h1>

                        {/* Description */}
                        <p style={{
                            color: 'rgba(203,213,225,0.8)', fontSize: '16px', lineHeight: 1.75,
                            maxWidth: '500px', marginBottom: '32px', fontFamily: 'var(--font-b)',
                        }}>
                            Pioneering cutting-edge research, academic excellence, and intelligent solutions in Artificial Intelligence and Machine Learning at CHARUSAT.
                        </p>

                        {/* Stats */}
                        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
                            {[
                                { value: config.Intake, label: 'INTAKE SEATS', color: '#22d3ee' },
                                { value: config.placement_percent, label: `PLACEMENT (${config.placement_year})`, color: '#4ade80' },
                                { value: config.student_teacher_ratio, label: 'STUDENT-TEACHER', color: '#a78bfa' },
                            ].map((s, i) => (
                                <div key={i} style={{
                                    background: 'rgba(13,17,23,0.8)', border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '14px', padding: '14px 22px', minWidth: '120px',
                                }}>
                                    <div style={{ fontFamily: 'var(--font-h)', fontSize: '1.7rem', fontWeight: 800, color: s.color, lineHeight: 1.1 }}>{s.value}</div>
                                    <div style={{ fontSize: '10px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1.2px', fontWeight: 600, marginTop: '4px' }}>{s.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                            <a href={links.brochure} target="_blank" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '9px',
                                background: 'linear-gradient(135deg, #06b6d4, #22d3ee)',
                                color: '#08090e', padding: '13px 30px', borderRadius: '9999px',
                                fontWeight: 700, fontSize: '15px', textDecoration: 'none',
                                boxShadow: '0 4px 24px rgba(6,182,212,0.45)', fontFamily: 'var(--font-b)',
                            }}>
                                <i className="fa fa-download" /> Download Brochure
                            </a>
                            <a href="#portfolio" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '9px',
                                background: 'rgba(255,255,255,0.05)', color: '#f1f5f9',
                                padding: '13px 30px', borderRadius: '9999px',
                                fontWeight: 600, fontSize: '15px', textDecoration: 'none',
                                border: '1px solid rgba(255,255,255,0.2)', fontFamily: 'var(--font-b)',
                            }}>
                                <i className="fa fa-flask" /> Explore Research Labs
                            </a>
                        </div>
                    </div>

                    {/* RIGHT — organic curved shape */}
                    <div style={{ flex: '0 0 48%', maxWidth: '48%', position: 'relative', height: '580px' }}>

                        {/* Cyan glow on left edge of image */}
                        <div style={{
                            position: 'absolute', left: '-20px', top: '10%', bottom: '10%', width: '3px', zIndex: 3,
                            background: 'linear-gradient(180deg, transparent, #22d3ee 30%, #06b6d4 70%, transparent)',
                            borderRadius: '9999px', filter: 'blur(2px)',
                            boxShadow: '0 0 20px rgba(34,211,238,0.8), 0 0 40px rgba(34,211,238,0.4)',
                        }} />

                        {/* Image with organic border-radius — curves on left, straight on right */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            borderRadius: '40% 20px 20px 45% / 30px 20px 20px 30px',
                            overflow: 'hidden',
                            border: '2px solid rgba(34,211,238,0.3)',
                            boxShadow: '0 0 0 12px rgba(34,211,238,0.05), -20px 0 60px rgba(34,211,238,0.15), 0 30px 80px rgba(0,0,0,0.6)',
                        }}>
                            {images.map((src, i) => (
                                <img key={i} src={src} alt={`Slide ${i + 1}`} style={{
                                    position: 'absolute', inset: 0, width: '100%', height: '100%',
                                    objectFit: 'cover',
                                    opacity: cur === i ? 1 : 0,
                                    transition: 'opacity 0.9s ease',
                                }} />
                            ))}

                            {/* Nav buttons */}
                            <div style={{
                                position: 'absolute', bottom: '20px', right: '20px', zIndex: 2,
                                display: 'flex', gap: '8px',
                            }}>
                                {[{ fn: prev, icon: 'fa-chevron-left' }, { fn: next, icon: 'fa-chevron-right' }].map((b, i) => (
                                    <button key={i} onClick={b.fn} style={{
                                        width: '36px', height: '36px', borderRadius: '50%',
                                        border: '1px solid rgba(255,255,255,0.25)',
                                        background: 'rgba(8,9,14,0.75)', backdropFilter: 'blur(8px)',
                                        color: '#f1f5f9', cursor: 'pointer',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px',
                                    }}>
                                        <i className={`fa ${b.icon}`} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
