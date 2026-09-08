'use client';
import { config } from '@/lib/config';

export default function VisionMission() {
    return (
        <section id="services" className="v_m" style={{
            background: 'var(--bg-surface)',
            padding: '80px 0',
        }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <div className="ds-badge" style={{ display: 'inline-flex' }}>
                        Our Foundation
                    </div>
                </div>
                <div className="section-header" style={{ marginBottom: '50px' }}>
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                    }}>
                        Vision & <span className="gradient-text">Mission</span>
                    </h2>
                </div>
                <div className="row" style={{ justifyContent: 'center', gap: '20px' }}>
                    {/* Vision */}
                    <div className="col-lg-5 col-md-12" id="vision">
                        <div style={{
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-card)',
                            borderRadius: 'var(--radius-lg)',
                            padding: '36px 32px',
                            height: '100%',
                            transition: 'all 0.3s ease',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.borderColor = 'var(--border-glow)';
                            el.style.boxShadow = '0 0 25px rgba(6, 182, 212, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.borderColor = 'var(--border-card)';
                            el.style.boxShadow = 'none';
                        }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '3px',
                                background: 'var(--gradient-primary)',
                            }} />
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                marginBottom: '20px',
                            }}>
                                <div style={{
                                    width: '44px',
                                    height: '44px',
                                    background: 'rgba(6, 182, 212, 0.1)',
                                    border: '1px solid rgba(6, 182, 212, 0.2)',
                                    borderRadius: 'var(--radius-sm)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <i className="fa fa-eye" style={{ color: 'var(--cyan-400)', fontSize: '18px' }}></i>
                                </div>
                                <h4 style={{
                                    fontFamily: 'var(--font-display)',
                                    fontWeight: 700,
                                    fontSize: '1.3rem',
                                    color: 'var(--cyan-400)',
                                    margin: 0,
                                }}>Vision</h4>
                            </div>
                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '15px',
                                lineHeight: 1.8,
                                fontStyle: 'italic',
                                margin: 0,
                            }}>
                                &ldquo;{config.vision}&rdquo;
                            </p>
                        </div>
                    </div>

                    {/* Mission */}
                    <div className="col-lg-5 col-md-12" id="mission">
                        <div style={{
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-card)',
                            borderRadius: 'var(--radius-lg)',
                            padding: '36px 32px',
                            height: '100%',
                            transition: 'all 0.3s ease',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.borderColor = 'var(--border-glow)';
                            el.style.boxShadow = '0 0 25px rgba(6, 182, 212, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.borderColor = 'var(--border-card)';
                            el.style.boxShadow = 'none';
                        }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '3px',
                                background: 'var(--gradient-accent)',
                            }} />
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                marginBottom: '20px',
                            }}>
                                <div style={{
                                    width: '44px',
                                    height: '44px',
                                    background: 'rgba(45, 212, 191, 0.1)',
                                    border: '1px solid rgba(45, 212, 191, 0.2)',
                                    borderRadius: 'var(--radius-sm)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <i className="fa fa-line-chart" style={{ color: 'var(--teal-400)', fontSize: '18px' }}></i>
                                </div>
                                <h4 style={{
                                    fontFamily: 'var(--font-display)',
                                    fontWeight: 700,
                                    fontSize: '1.3rem',
                                    color: 'var(--teal-400)',
                                    margin: 0,
                                }}>Mission</h4>
                            </div>
                            <div style={{
                                color: 'var(--text-secondary)',
                                fontSize: '15px',
                                lineHeight: 1.8,
                                fontStyle: 'italic',
                            }} dangerouslySetInnerHTML={{ __html: config.mission }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
