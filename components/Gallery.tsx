'use client';
import { useState } from 'react';
import { links } from '@/lib/config';

const allPhotos = Object.entries(links.gallery);

export default function Gallery() {
    const [showAll, setShowAll] = useState(false);
    const visible = showAll ? allPhotos : allPhotos.slice(0, 6);

    return (
        <section id="portfolio" className="wow fadeInUp" style={{ background: 'var(--bg-surface)', padding: '90px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.25)',
                        borderRadius: '9999px', padding: '6px 18px', fontSize: '11px',
                        fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' as const,
                        color: '#22d3ee', fontFamily: 'var(--font-body)',
                    }}>
                        <i className="fa fa-image" style={{ fontSize: '11px' }} />
                        Department Life
                    </span>
                </div>
                <h2 style={{
                    textAlign: 'center', fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 800,
                    color: '#f0f6fc', letterSpacing: '-0.03em', marginBottom: '16px',
                }}>
                    Department{' '}
                    <span style={{ background: 'linear-gradient(135deg,#06b6d4,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        Gallery
                    </span>
                </h2>
                <p style={{ textAlign: 'center', color: '#8b99b0', fontSize: '15px', marginBottom: '50px' }}>
                    Glimpses of life, learning, and achievements at CSPIT AI-ML
                </p>

                <div className="row" style={{ margin: '0 -8px' }}>
                    {visible.map(([key, src]) => (
                        <div key={key} className="col-lg-4 col-md-6" style={{ padding: '8px' }}>
                            <a href={src} className="portfolio-popup" style={{ display: 'block' }}>
                                <div style={{
                                    borderRadius: '12px', overflow: 'hidden',
                                    position: 'relative', height: '220px',
                                    border: '1px solid rgba(34,211,238,0.08)',
                                    transition: 'all 0.3s ease',
                                }}
                                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'scale(1.03)'; el.style.borderColor = 'rgba(34,211,238,0.3)'; el.style.boxShadow = '0 8px 30px rgba(0,0,0,0.4)'; }}
                                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'scale(1)'; el.style.borderColor = 'rgba(34,211,238,0.08)'; el.style.boxShadow = 'none'; }}
                                >
                                    <img src={src} alt={`Gallery ${key}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 50%,rgba(6,11,24,0.7) 100%)', opacity: 0, transition: 'opacity 0.3s' }}
                                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
                                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '0'}
                                    />
                                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s' }}
                                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
                                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '0'}
                                    >
                                        <div style={{ width: '40px', height: '40px', background: 'rgba(6,182,212,0.9)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <i className="fa fa-search-plus" style={{ color: '#060b18', fontSize: '16px' }} />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                {allPhotos.length > 6 && (
                    <div style={{ textAlign: 'center', marginTop: '36px' }}>
                        <button onClick={() => setShowAll(p => !p)} style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            background: showAll ? 'transparent' : 'linear-gradient(135deg,#06b6d4,#22d3ee)',
                            color: showAll ? '#22d3ee' : '#060b18',
                            border: showAll ? '1px solid rgba(34,211,238,0.4)' : 'none',
                            padding: '12px 32px', borderRadius: '9999px', fontWeight: 700,
                            fontSize: '14px', cursor: 'pointer', transition: 'all 0.3s ease',
                            boxShadow: showAll ? 'none' : '0 4px 20px rgba(6,182,212,0.3)',
                        }}>
                            {showAll ? (
                                <><i className="fa fa-chevron-up" /> Show Less</>
                            ) : (
                                <><i className="fa fa-images" /> More Photos ({allPhotos.length - 6} more)</>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
