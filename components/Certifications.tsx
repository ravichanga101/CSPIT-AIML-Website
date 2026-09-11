'use client';

const certifications = [
    { img: '/img/certifications/redhat.png', name: 'Red Hat', contact: 'Prof. Sarita Thummar', email: 'saritathummar.ce@charusat.ac.in' },
    { img: '/img/certifications/aws.png', name: 'AWS', contact: 'Prof. Sanket Suthar', email: 'sanketsuthar.it@charusat.ac.in' },
    { img: '/img/certifications/cisco.png', name: 'Cisco', contact: 'Prof. Abhishek Patel', email: 'abhishekpatel.cse@charusat.ac.in' },
    { img: '/img/certifications/oracle.png', name: 'Oracle', contact: 'Prof. Vidisha Pradhan', email: 'vidishapradhan.cse@charusat.ac.in' },
];

const accentColors = [
    { bg: 'rgba(6,182,212,0.12)', border: 'rgba(6,182,212,0.3)', top: '#22d3ee' },
    { bg: 'rgba(234,179,8,0.12)', border: 'rgba(234,179,8,0.3)', top: '#fbbf24' },
    { bg: 'rgba(99,102,241,0.12)', border: 'rgba(99,102,241,0.3)', top: '#818cf8' },
    { bg: 'rgba(45,212,191,0.12)', border: 'rgba(45,212,191,0.3)', top: '#2dd4bf' },
];

export default function Certifications() {
    return (
        <section id="services" className="wow fadeInUp" style={{ background: 'var(--bg-surface)', padding: '90px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.25)',
                        borderRadius: '9999px', padding: '6px 18px', fontSize: '11px',
                        fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' as const,
                        color: '#22d3ee', fontFamily: 'var(--font-body)',
                    }}>
                        <i className="fa fa-certificate" style={{ fontSize: '11px' }} />
                        Industry Partners
                    </span>
                </div>
                <h2 style={{
                    textAlign: 'center', fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 800,
                    color: '#f0f6fc', letterSpacing: '-0.03em', marginBottom: '52px',
                }}>
                    Industry Recognized{' '}
                    <span style={{ background: 'linear-gradient(135deg,#06b6d4,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        Certification Courses
                    </span>
                </h2>

                <div className="row" style={{ justifyContent: 'center' }}>
                    {certifications.map((cert, i) => {
                        const c = accentColors[i % accentColors.length];
                        return (
                            <div key={i} className="col-lg-3 col-md-6" style={{ marginBottom: '20px' }}>
                                <div style={{
                                    background: '#0d1530', border: '1px solid rgba(34,211,238,0.1)',
                                    borderRadius: '16px', padding: '32px 24px', textAlign: 'center',
                                    height: '100%', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden',
                                }}
                                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = c.border; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = '0 12px 30px rgba(0,0,0,0.3)'; }}
                                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(34,211,238,0.1)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none'; }}
                                >
                                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg,${c.top},transparent)` }} />
                                    <div style={{ background: 'rgba(255,255,255,0.95)', borderRadius: '10px', padding: '12px 16px', display: 'inline-block', marginBottom: '20px' }}>
                                        <img src={cert.img} alt={cert.name} style={{ width: '130px', height: 'auto', display: 'block' }} />
                                    </div>
                                    <p style={{ color: '#8b99b0', fontSize: '13px', margin: 0, lineHeight: 1.7 }}>
                                        <b style={{ color: '#f0f6fc', display: 'block', marginBottom: '4px', fontSize: '14px' }}>{cert.contact}</b>
                                        <a href={`mailto:${cert.email}`} style={{ color: '#22d3ee', textDecoration: 'none', fontSize: '12px' }}>{cert.email}</a>
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
