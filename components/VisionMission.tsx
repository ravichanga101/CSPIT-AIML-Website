'use client';
import { config } from '@/lib/config';

export default function VisionMission() {
    return (
        <section id="services" className="v_m wow fadeInUp" style={{ background: 'var(--bg)', padding: '90px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <span className="ref-badge"><i className="fa fa-compass" />Our Foundation</span>
                </div>
                <h2 className="ref-heading" style={{ textAlign: 'center', marginBottom: '52px' }}>Vision &amp; <span className="grad-cyan">Mission</span></h2>

                <div className="row" style={{ justifyContent: 'center', gap: '0' }}>
                    {/* Vision */}
                    <div className="col-lg-5 col-md-12" id="vision" style={{ marginBottom: '20px' }}>
                        <div style={{
                            background: 'var(--bg-card)', border: '1px solid rgba(34,211,238,0.12)',
                            borderRadius: '16px', padding: '36px 32px', height: '100%',
                            position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease',
                        }}
                            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(34,211,238,0.3)'; el.style.boxShadow = '0 16px 48px rgba(0,0,0,.5)'; el.style.transform = 'translateY(-5px)'; }}
                            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(34,211,238,0.12)'; el.style.boxShadow = 'none'; el.style.transform = 'translateY(0)'; }}
                        >
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(135deg,#06b6d4,#22d3ee)' }} />
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
                                <div style={{
                                    width: '48px', height: '48px', background: 'rgba(6,182,212,0.12)',
                                    border: '1px solid rgba(6,182,212,0.3)', borderRadius: '12px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <i className="fa fa-eye" style={{ color: '#22d3ee', fontSize: '20px' }} />
                                </div>
                                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.3rem', color: '#22d3ee', margin: 0 }}>Vision</h4>
                            </div>
                            <p style={{ color: '#8b99b0', fontSize: '15px', lineHeight: 1.8, fontStyle: 'italic', margin: 0 }}>
                                &ldquo;{config.vision}&rdquo;
                            </p>
                        </div>
                    </div>

                    {/* Mission */}
                    <div className="col-lg-5 col-md-12" id="mission" style={{ marginBottom: '20px' }}>
                        <div style={{
                            background: 'var(--bg-card)', border: '1px solid rgba(45,212,191,0.12)',
                            borderRadius: '16px', padding: '36px 32px', height: '100%',
                            position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease',
                        }}
                            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(45,212,191,0.3)'; el.style.boxShadow = '0 16px 48px rgba(0,0,0,.5)'; el.style.transform = 'translateY(-5px)'; }}
                            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(45,212,191,0.12)'; el.style.boxShadow = 'none'; el.style.transform = 'translateY(0)'; }}
                        >
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(135deg,#06b6d4,#2dd4bf)' }} />
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
                                <div style={{
                                    width: '48px', height: '48px', background: 'rgba(45,212,191,0.12)',
                                    border: '1px solid rgba(45,212,191,0.3)', borderRadius: '12px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <i className="fa fa-rocket" style={{ color: '#2dd4bf', fontSize: '20px' }} />
                                </div>
                                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.3rem', color: '#2dd4bf', margin: 0 }}>Mission</h4>
                            </div>
                            <div style={{ color: '#8b99b0', fontSize: '15px', lineHeight: 1.8, fontStyle: 'italic' }}
                                dangerouslySetInnerHTML={{ __html: config.mission }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
