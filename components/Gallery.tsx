'use client';
import { useState } from 'react';

interface GalleryProps {
    images: string[];
}

export default function Gallery({ images }: GalleryProps) {
    const allPhotos = images;
    const [showAll, setShowAll] = useState(false);
    const visible = showAll ? allPhotos : allPhotos.slice(0, 6);


    return (
        <section id="portfolio" className="wow fadeInUp" style={{ background: 'var(--bg)', padding: '90px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <span className="ref-badge"><i className="fa fa-image" />Department Life</span>
                </div>
                <h2 className="ref-heading" style={{ textAlign: 'center', marginBottom: '16px' }}>
                    Department <span className="grad-violet">Gallery</span>
                </h2>
                <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '15px', marginBottom: '50px' }}>
                    Glimpses of life, learning, and achievements at CSPIT AI-ML
                </p>

                <div className="row" style={{ margin: '0 -8px' }}>
                    {visible.map((src, i) => (
                        <div key={src} className="col-lg-4 col-md-6" style={{ padding: '8px' }}>
                            <a href={src} className="portfolio-popup" style={{ display: 'block' }}>
                                <div style={{ borderRadius: '14px', overflow: 'hidden', position: 'relative', height: '220px', border: '1px solid var(--border)', transition: 'all 0.3s ease' }}
                                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'scale(1.03)'; el.style.borderColor = 'rgba(167,139,250,.35)'; el.style.boxShadow = '0 12px 40px rgba(0,0,0,.5)'; }}
                                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'scale(1)'; el.style.borderColor = 'var(--border)'; el.style.boxShadow = 'none'; }}
                                >
                                    <img src={src} alt={`Gallery ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 50%,rgba(8,9,14,.7) 100%)', opacity: 0, transition: 'opacity 0.3s' }}
                                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
                                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '0'}
                                    />
                                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s' }}
                                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
                                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '0'}
                                    >
                                        <div style={{ width: '44px', height: '44px', background: 'rgba(167,139,250,.9)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <i className="fa fa-search-plus" style={{ color: '#08090e', fontSize: '16px' }} />
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
                            color: showAll ? '#22d3ee' : '#08090e',
                            border: showAll ? '1px solid rgba(34,211,238,.35)' : 'none',
                            padding: '12px 32px', borderRadius: '9999px', fontWeight: 700,
                            fontSize: '14px', cursor: 'pointer', transition: 'all 0.3s ease',
                            boxShadow: showAll ? 'none' : '0 4px 20px rgba(6,182,212,.3)',
                        }}>
                            {showAll ? <><i className="fa fa-chevron-up" /> Show Less</> : <><i className="fa fa-th" /> More Photos</>}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
