'use client';
import { useState } from 'react';
import GalleryBackground from '@/components/GalleryBackground';

interface GalleryProps {
    images: string[];
}

export default function Gallery({ images }: GalleryProps) {
    const allPhotos = images;
    const [showAll, setShowAll] = useState(false);
    const visible = showAll ? allPhotos : allPhotos.slice(0, 6);


    return (
        <section
            id="portfolio"
            className="wow fadeInUp"
            style={{
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 45%, #F0F6FF 100%)',
                borderTop: '1px solid rgba(226, 232, 240, 0.8)',
                borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
                padding: '90px 0',
            }}
        >
            <GalleryBackground />
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <span className="ref-badge"><i className="fa fa-image" />Department Life</span>
                </div>
                <h2 className="ref-heading" style={{ textAlign: 'center', margin: '0 auto' }}>
                    Department <span className="grad-violet">Gallery</span>
                </h2>
                <div className="about-title-accent-bar" style={{ marginBottom: '48px' }} />

                <div className="row" style={{ margin: '0 -8px' }}>
                    {visible.map((src, i) => (
                        <div key={src} className="col-lg-4 col-md-6" style={{ padding: '8px' }}>
                            <a href={src} className="portfolio-popup" style={{ display: 'block' }}>
                                <div style={{ borderRadius: '14px', overflow: 'hidden', position: 'relative', height: '220px', border: '1px solid rgba(15, 23, 42, 0.06)', transition: 'all 0.3s ease', boxShadow: '0 1px 3px rgba(15, 23, 42, 0.06)' }}
                                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'scale(1.03)'; el.style.borderColor = 'rgba(109, 40, 217, 0.2)'; el.style.boxShadow = '0 12px 40px rgba(15,23,42,0.12)'; }}
                                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'scale(1)'; el.style.borderColor = 'rgba(15, 23, 42, 0.06)'; el.style.boxShadow = '0 1px 3px rgba(15, 23, 42, 0.06)'; }}
                                >
                                    <img src={src} alt={`Gallery ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 50%,rgba(15,23,42,0.5) 100%)', opacity: 0, transition: 'opacity 0.3s' }}
                                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
                                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '0'}
                                    />
                                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s' }}
                                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
                                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '0'}
                                    >
                                        <div style={{ width: '44px', height: '44px', background: 'rgba(109, 40, 217, 0.9)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <i className="fa fa-search-plus" style={{ color: '#ffffff', fontSize: '16px' }} />
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
                            background: showAll ? 'transparent' : 'linear-gradient(135deg, #0c2e8a, #2563eb)',
                            color: showAll ? '#0c2e8a' : '#ffffff',
                            border: showAll ? '1.5px solid rgba(12, 46, 138, 0.25)' : 'none',
                            padding: '12px 32px', borderRadius: '9999px', fontWeight: 700,
                            fontSize: '14px', cursor: 'pointer', transition: 'all 0.3s ease',
                            boxShadow: showAll ? 'none' : '0 4px 20px rgba(12, 46, 138, 0.25)',
                        }}>
                            {showAll ? <><i className="fa fa-chevron-up" /> Show Less</> : <><i className="fa fa-th" /> More Photos</>}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
