'use client';
import { links } from '@/lib/config';

export default function Gallery() {
    return (
        <section id="portfolio" className="wow fadeInUp" style={{
            background: 'var(--bg-primary)',
            padding: '80px 0',
        }}>
            <div className="container">
                {/* Section Badge & Title */}
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <div className="ds-badge" style={{ display: 'inline-flex' }}>
                        Department Life
                    </div>
                </div>
                <div className="section-header" style={{ marginBottom: '50px' }}>
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                    }}>
                        Department <span className="gradient-text">Gallery</span>
                    </h2>
                </div>
            </div>
            <div className="container-fluid" style={{ padding: '0 30px' }}>
                <div className="row" style={{ margin: '0 -4px' }}>
                    {Object.entries(links.gallery).map(([key, src]) => (
                        <div key={key} className="col-lg-3 col-md-4 col-sm-6" style={{ padding: '4px' }}>
                            <a href={src} className="portfolio-popup" style={{ display: 'block' }}>
                                <div style={{
                                    borderRadius: 'var(--radius-lg)',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    height: '220px',
                                    transition: 'all 0.3s ease',
                                    border: '1px solid var(--border-subtle)',
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.transform = 'scale(1.03)';
                                    el.style.boxShadow = '0 0 25px rgba(6, 182, 212, 0.2)';
                                    el.style.borderColor = 'var(--border-glow)';
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.transform = 'scale(1)';
                                    el.style.boxShadow = 'none';
                                    el.style.borderColor = 'var(--border-subtle)';
                                }}
                                >
                                    <img
                                        src={src}
                                        alt={`Gallery ${key}`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease',
                                        }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(180deg, transparent 50%, rgba(6, 11, 24, 0.7) 100%)',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        pointerEvents: 'none',
                                    }}
                                    className="gallery-overlay"
                                    />
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
