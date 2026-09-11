'use client';
import { config, links } from '@/lib/config';

const contactCards = [
    { icon: 'fa-map-marker', label: 'Address', color: { bg: 'rgba(6,182,212,0.12)', border: 'rgba(6,182,212,0.3)', c: '#22d3ee' }, content: <address style={{ fontSize: '13px', color: '#8b99b0', lineHeight: 1.8, margin: 0, fontStyle: 'normal' }} dangerouslySetInnerHTML={{ __html: config.contact_address }} /> },
    { icon: 'fa-phone', label: 'Phone', color: { bg: 'rgba(45,212,191,0.12)', border: 'rgba(45,212,191,0.3)', c: '#2dd4bf' }, content: <a href={`tel:${config.contact_phone}`} style={{ color: '#8b99b0', fontSize: '14px', textDecoration: 'none' }}>{config.contact_phone}</a> },
    { icon: 'fa-envelope', label: 'Email', color: { bg: 'rgba(99,102,241,0.12)', border: 'rgba(99,102,241,0.3)', c: '#818cf8' }, content: <a href={`mailto:${config.contact_email}`} style={{ color: '#22d3ee', fontSize: '14px', textDecoration: 'none' }}>{config.contact_email}</a> },
];

export default function ContactUs() {
    return (
        <section id="contact" className="wow fadeInUp" style={{ background: 'var(--bg-primary)', padding: '90px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.25)',
                        borderRadius: '9999px', padding: '6px 18px', fontSize: '11px',
                        fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' as const,
                        color: '#22d3ee', fontFamily: 'var(--font-body)',
                    }}>
                        <i className="fa fa-paper-plane" style={{ fontSize: '11px' }} />
                        Get in Touch
                    </span>
                </div>
                <h2 style={{
                    textAlign: 'center', fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 800,
                    color: '#f0f6fc', letterSpacing: '-0.03em', marginBottom: '16px',
                }}>
                    Contact{' '}
                    <span style={{ background: 'linear-gradient(135deg,#06b6d4,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        Us
                    </span>
                </h2>
                <p style={{ textAlign: 'center', color: '#8b99b0', fontSize: '15px', marginBottom: '50px' }}>
                    We&apos;d love to hear from you. Reach out to us anytime.
                </p>

                <div className="row" style={{ justifyContent: 'center', marginBottom: '40px' }}>
                    {contactCards.map((card, i) => (
                        <div key={i} className="col-md-4" style={{ marginBottom: '20px' }}>
                            <div style={{
                                background: '#0d1530', border: '1px solid rgba(34,211,238,0.08)',
                                borderRadius: '16px', padding: '32px 24px', textAlign: 'center',
                                height: '100%', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden',
                            }}
                                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = card.color.border; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 12px 30px rgba(0,0,0,0.3)'; }}
                                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(34,211,238,0.08)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none'; }}
                            >
                                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg,${card.color.c},transparent)` }} />
                                <div style={{ width: '52px', height: '52px', background: card.color.bg, border: `1px solid ${card.color.border}`, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
                                    <i className={`fa ${card.icon}`} style={{ color: card.color.c, fontSize: '22px' }} />
                                </div>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px', color: '#f0f6fc', marginBottom: '12px' }}>{card.label}</h3>
                                {card.content}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Map */}
                <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(34,211,238,0.1)', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}>
                    <iframe src={links.google_map} width="600" height="400" frameBorder="0"
                        style={{ border: 0, width: '100%', display: 'block', filter: 'invert(90%) hue-rotate(180deg)' }}
                        allowFullScreen loading="lazy" />
                </div>
            </div>
        </section>
    );
}
