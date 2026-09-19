'use client';
import { config, links } from '@/lib/config';

const cards = [
    { icon: 'fa-map-marker', label: 'Address', color: '#22d3ee', content: <address style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.8, margin: 0, fontStyle: 'normal' }} dangerouslySetInnerHTML={{ __html: config.contact_address }} /> },
    { icon: 'fa-phone',      label: 'Phone',   color: '#4ade80', content: <a href={`tel:${config.contact_phone}`} style={{ color: 'var(--muted)', fontSize: '14px', textDecoration: 'none' }}>{config.contact_phone}</a> },
    { icon: 'fa-envelope',   label: 'Email',   color: '#a78bfa', content: <a href={`mailto:${config.contact_email}`} style={{ color: '#22d3ee', fontSize: '13px', textDecoration: 'none', wordBreak: 'break-all' as const }}>{config.contact_email}</a> },
];

export default function ContactUs() {
    return (
        <section id="contact" className="wow fadeInUp" style={{ background: 'var(--bg)', padding: '90px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <span className="ref-badge"><i className="fa fa-paper-plane" />Get in Touch</span>
                </div>
                <h2 className="ref-heading" style={{ textAlign: 'center', marginBottom: '16px' }}>
                    Contact <span className="grad-cyan">Us</span>
                </h2>
                <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '15px', marginBottom: '50px' }}>
                    We&apos;d love to hear from you. Reach out to us anytime.
                </p>

                <div className="row" style={{ justifyContent: 'center', marginBottom: '40px' }}>
                    {cards.map((card, i) => (
                        <div key={i} className="col-md-4" style={{ marginBottom: '20px' }}>
                            <div className="ref-card" style={{ padding: '32px 24px', textAlign: 'center', height: '100%' }}
                                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = card.color + '44'; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = `0 16px 40px rgba(0,0,0,.5), 0 0 20px ${card.color}12`; }}
                                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none'; }}
                            >
                                <div style={{ width: '52px', height: '52px', background: card.color + '18', border: `1px solid ${card.color}35`, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
                                    <i className={`fa ${card.icon}`} style={{ color: card.color, fontSize: '22px' }} />
                                </div>
                                <h3 style={{ fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '16px', color: '#f1f5f9', marginBottom: '12px' }}>{card.label}</h3>
                                {card.content}
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 8px 40px rgba(0,0,0,.4)' }}>
                    <iframe src={links.google_map} width="600" height="400" frameBorder="0"
                        style={{ border: 0, width: '100%', display: 'block', filter: 'invert(90%) hue-rotate(180deg)' }}
                        allowFullScreen loading="lazy" />
                </div>
            </div>
        </section>
    );
}
