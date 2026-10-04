'use client';
import { config } from '@/lib/config';

export default function VisionMission() {
    return (
        <section id="vision-mission" className="v_m wow fadeInUp" style={{ background: '#f5f7fa', padding: '90px 0', scrollMarginTop: '85px' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <span className="ref-badge"><i className="fa fa-compass" />Our Foundation</span>
                </div>
                <h2 className="ref-heading" style={{ textAlign: 'center', marginBottom: '52px' }}>Vision &amp; <span className="grad-cyan">Mission</span></h2>

                <div className="row" style={{ justifyContent: 'center', gap: '0' }}>
                    {/* Vision */}
                    <div className="col-lg-5 col-md-12" id="vision" style={{ marginBottom: '20px', scrollMarginTop: '260px' }}>
                        <div style={{
                            background: '#ffffff', border: '1px solid rgba(12, 46, 138, 0.1)',
                            borderRadius: '16px', padding: '36px 32px', height: '100%',
                            position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease',
                            boxShadow: '0 1px 3px rgba(15, 23, 42, 0.06)',
                        }}
                            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(12, 46, 138, 0.2)'; el.style.boxShadow = '0 10px 40px rgba(15,23,42,0.1)'; el.style.transform = 'translateY(-5px)'; }}
                            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(12, 46, 138, 0.1)'; el.style.boxShadow = '0 1px 3px rgba(15, 23, 42, 0.06)'; el.style.transform = 'translateY(0)'; }}
                        >
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(135deg, #0c2e8a, #2563eb)' }} />
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
                                <div style={{
                                    width: '48px', height: '48px', background: 'rgba(12, 46, 138, 0.06)',
                                    border: '1px solid rgba(12, 46, 138, 0.12)', borderRadius: '12px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <i className="fa fa-eye" style={{ color: '#0c2e8a', fontSize: '20px' }} />
                                </div>
                                <h4 style={{ fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '1.3rem', color: '#0c2e8a', margin: 0 }}>Vision</h4>
                            </div>
                            <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.8, fontStyle: 'italic', margin: 0 }}>
                                &ldquo;{config.vision}&rdquo;
                            </p>
                        </div>
                    </div>

                    {/* Mission */}
                    <div className="col-lg-5 col-md-12" id="mission" style={{ marginBottom: '20px', scrollMarginTop: '260px' }}>
                        <div style={{
                            background: '#ffffff', border: '1px solid rgba(5, 150, 105, 0.1)',
                            borderRadius: '16px', padding: '36px 32px', height: '100%',
                            position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease',
                            boxShadow: '0 1px 3px rgba(15, 23, 42, 0.06)',
                        }}
                            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(5, 150, 105, 0.2)'; el.style.boxShadow = '0 10px 40px rgba(15,23,42,0.1)'; el.style.transform = 'translateY(-5px)'; }}
                            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(5, 150, 105, 0.1)'; el.style.boxShadow = '0 1px 3px rgba(15, 23, 42, 0.06)'; el.style.transform = 'translateY(0)'; }}
                        >
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(135deg, #059669, #10b981)' }} />
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
                                <div style={{
                                    width: '48px', height: '48px', background: 'rgba(5, 150, 105, 0.06)',
                                    border: '1px solid rgba(5, 150, 105, 0.12)', borderRadius: '12px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <i className="fa fa-rocket" style={{ color: '#059669', fontSize: '20px' }} />
                                </div>
                                <h4 style={{ fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '1.3rem', color: '#059669', margin: 0 }}>Mission</h4>
                            </div>
                            <div style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.8, fontStyle: 'italic' }}
                                dangerouslySetInnerHTML={{ __html: config.mission }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
