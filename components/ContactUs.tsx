'use client';
import { config, links } from '@/lib/config';
import SectionBackground from '@/components/SectionBackground';

const cards = [
    { icon: 'fa-map-marker', label: 'Address', color: '#0c2e8a', content: <address style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.8, margin: 0, fontStyle: 'normal' }} dangerouslySetInnerHTML={{ __html: config.contact_address }} /> },
    { icon: 'fa-phone',      label: 'Phone',   color: '#059669', content: <a href={`tel:${config.contact_phone}`} style={{ color: '#64748b', fontSize: '14px', textDecoration: 'none' }}>{config.contact_phone}</a> },
    { icon: 'fa-envelope',   label: 'Email',   color: '#6d28d9', content: <a href={`mailto:${config.contact_email}`} style={{ color: '#0c2e8a', fontSize: '13px', textDecoration: 'none', wordBreak: 'break-all' as const }}>{config.contact_email}</a> },
];

export default function ContactUs() {
    return (
        <section
            id="contact"
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
            <SectionBackground />
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <span className="ref-badge"><i className="fa fa-paper-plane" />Get in Touch</span>
                </div>
                <h2 className="ref-heading" style={{ textAlign: 'center', margin: '0 auto' }}>
                    Contact <span className="grad-cyan">Us</span>
                </h2>
                <div className="about-title-accent-bar" style={{ marginBottom: '16px' }} />
                <p style={{ textAlign: 'center', color: '#64748b', fontSize: '15px', marginBottom: '50px' }}>
                    We&apos;d love to hear from you. Reach out to us anytime.
                </p>

                <div className="row" style={{ justifyContent: 'center', marginBottom: '40px' }}>
                    {cards.map((card, i) => (
                        <div key={i} className="col-md-4" style={{ marginBottom: '20px' }}>
                            <div className="ref-card" style={{ padding: '32px 24px', textAlign: 'center', height: '100%' }}
                                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = card.color + '22'; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = `0 12px 40px rgba(15,23,42,0.1), 0 0 0 1px ${card.color}10`; }}
                                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'var(--shadow-sm)'; }}
                            >
                                <div style={{ width: '52px', height: '52px', background: card.color + '0c', border: `1px solid ${card.color}18`, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
                                    <i className={`fa ${card.icon}`} style={{ color: card.color, fontSize: '22px' }} />
                                </div>
                                <h3 style={{ fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '16px', color: '#0f172a', marginBottom: '12px' }}>{card.label}</h3>
                                {card.content}
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(15, 23, 42, 0.06)', boxShadow: '0 4px 16px rgba(15,23,42,0.06)' }}>
                    <iframe src={links.google_map} width="600" height="400" frameBorder="0"
                        style={{ border: 0, width: '100%', display: 'block' }}
                        allowFullScreen loading="lazy" />
                </div>
            </div>
        </section>
    );
}
