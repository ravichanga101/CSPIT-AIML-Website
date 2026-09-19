'use client';
import { config } from '@/lib/config';

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/#about_us' },
    { label: 'Research Labs', href: '/323A' },
    { label: 'Student Achievements', href: '/student_achievements_all' },
    { label: 'Admission', href: 'https://admission.charusat.ac.in/' },
];
const labLinks = [
    { label: 'Lab 323-A', href: '/323A' },
    { label: 'Lab 323-B', href: '/323B' },
    { label: 'Lab 324-A', href: '/324A' },
    { label: 'Lab 324-D', href: '/324D' },
    { label: 'Motorola Lab (325)', href: '/325' },
];
const socials = [
    { href: 'https://www.facebook.com/profile.php?id=61555053276330', icon: 'fa-facebook', color: '#1877f2' },
    { href: 'https://www.instagram.com/aiml_cspit/', icon: 'fa-instagram', color: '#e1306c' },
];

export default function Footer() {
    return (
        <>
            <footer id="footer" style={{ background: '#05060a', borderTop: '1px solid var(--border)', padding: '60px 0 0' }}>
                <div className="container">
                    <div className="row" style={{ marginBottom: '40px' }}>

                        {/* Brand */}
                        <div className="col-lg-4 col-md-6" style={{ marginBottom: '32px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <img src="/img/logo/aiml-logo.jpg" alt="AIML Logo" style={{ width: '44px', height: '44px', borderRadius: '50%', border: '2px solid rgba(34,211,238,.35)', objectFit: 'cover' }} />
                                <div>
                                    <div style={{ fontSize: '10px', color: 'var(--cyan)', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>CSPIT</div>
                                    <div style={{ fontSize: '14px', color: '#f1f5f9', fontWeight: 700, fontFamily: 'var(--font-h)' }}>AI &amp; Machine Learning</div>
                                </div>
                            </div>
                            <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.8, marginBottom: '20px' }}>
                                Pioneering cutting-edge research, academic excellence, and intelligent solutions at CHARUSAT University.
                            </p>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                {socials.map((s, i) => (
                                    <a key={i} href={s.href} target="_blank" rel="noreferrer" style={{ width: '36px', height: '36px', background: 'rgba(255,255,255,.05)', border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .3s ease', textDecoration: 'none' }}
                                        onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = s.color; el.style.borderColor = s.color; el.style.transform = 'translateY(-3px)'; }}
                                        onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,255,255,.05)'; el.style.borderColor = 'var(--border)'; el.style.transform = 'translateY(0)'; }}
                                    >
                                        <i className={`fa ${s.icon}`} style={{ color: '#f1f5f9', fontSize: '15px' }} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-lg-2 col-md-6" style={{ marginBottom: '32px' }}>
                            <h5 style={{ color: '#f1f5f9', fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '13px', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>Quick Links</h5>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {quickLinks.map((l, i) => (
                                    <li key={i} style={{ marginBottom: '10px' }}>
                                        <a href={l.href} style={{ color: 'var(--muted)', fontSize: '13px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all .2s' }}
                                            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--cyan)'; el.style.paddingLeft = '4px'; }}
                                            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--muted)'; el.style.paddingLeft = '0'; }}
                                        >
                                            <i className="fa fa-chevron-right" style={{ color: 'var(--cyan)', fontSize: '10px' }} />{l.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Research Labs */}
                        <div className="col-lg-2 col-md-6" style={{ marginBottom: '32px' }}>
                            <h5 style={{ color: '#f1f5f9', fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '13px', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>Research Labs</h5>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {labLinks.map((l, i) => (
                                    <li key={i} style={{ marginBottom: '10px' }}>
                                        <a href={l.href} style={{ color: 'var(--muted)', fontSize: '13px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all .2s' }}
                                            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = '#a78bfa'; el.style.paddingLeft = '4px'; }}
                                            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--muted)'; el.style.paddingLeft = '0'; }}
                                        >
                                            <i className="fa fa-chevron-right" style={{ color: '#a78bfa', fontSize: '10px' }} />{l.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="col-lg-4 col-md-6" style={{ marginBottom: '32px' }}>
                            <h5 style={{ color: '#f1f5f9', fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '13px', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact Info</h5>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                {[
                                    { icon: 'fa-map-marker', text: 'CHARUSAT Campus, Changa, Anand, Gujarat 388421', href: null, color: 'var(--cyan)' },
                                    { icon: 'fa-phone', text: config.contact_phone, href: `tel:${config.contact_phone}`, color: '#4ade80' },
                                    { icon: 'fa-envelope', text: config.contact_email, href: `mailto:${config.contact_email}`, color: '#a78bfa' },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                        <div style={{ width: '32px', height: '32px', minWidth: '32px', background: item.color + '15', border: `1px solid ${item.color}30`, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <i className={`fa ${item.icon}`} style={{ color: item.color, fontSize: '13px' }} />
                                        </div>
                                        {item.href
                                            ? <a href={item.href} style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.6, textDecoration: 'none', transition: 'color .2s' }}
                                                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = item.color}
                                                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--muted)'}
                                            >{item.text}</a>
                                            : <span style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.6 }}>{item.text}</span>
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div style={{ borderTop: '1px solid var(--border)', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                        <p style={{ color: 'var(--muted)', fontSize: '13px', margin: 0 }}>
                            &copy; {new Date().getFullYear()} <strong style={{ color: 'var(--cyan)' }}>CSPIT – AI &amp; ML Department</strong>. All Rights Reserved.
                        </p>
                        <p style={{ color: 'var(--muted)', fontSize: '12px', margin: 0 }}>
                            Charotar University of Science and Technology
                        </p>
                    </div>
                </div>
            </footer>
            <a href="#" className="back-to-top"><i className="fa fa-chevron-up" /></a>
        </>
    );
}
