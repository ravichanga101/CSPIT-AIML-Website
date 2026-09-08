'use client';
export default function Certifications() {
    const certifications = [
        { img: '/img/certifications/redhat.png', name: 'Red Hat', contact: 'Prof. Sarita Thummar', email: 'saritathummar.ce@charusat.ac.in' },
        { img: '/img/certifications/aws.png', name: 'AWS', contact: 'Prof. Sanket Suthar', email: 'sanketsuthar.it@charusat.ac.in' },
        { img: '/img/certifications/cisco.png', name: 'Cisco', contact: 'Prof. Abhishek Patel', email: 'abhishekpatel.cse@charusat.ac.in' },
        { img: '/img/certifications/oracle.png', name: 'Oracle', contact: 'Prof. Vidisha Pradhan', email: 'vidishapradhan.cse@charusat.ac.in' },
    ];

    return (
        <section id="services" className="wow fadeInUp" style={{
            textAlign: 'left',
            background: 'var(--bg-surface)',
            padding: '80px 0',
        }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <div className="ds-badge" style={{ display: 'inline-flex' }}>
                        Industry Partners
                    </div>
                </div>
                <div className="section-header" style={{ marginBottom: '50px' }}>
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                    }}>
                        Industry Recognized <span className="gradient-text">Certification Courses</span>
                    </h2>
                </div>

                <div className="row" style={{ justifyContent: 'center' }}>
                    {certifications.map((cert, index) => (
                        <div key={index} className="col-lg-3 col-md-6 col-sm-12" style={{ marginBottom: '20px' }}>
                            <div style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-card)',
                                borderRadius: 'var(--radius-lg)',
                                padding: '28px 20px',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                height: '100%',
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.borderColor = 'var(--border-glow)';
                                el.style.boxShadow = '0 0 20px rgba(6, 182, 212, 0.15)';
                                el.style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.borderColor = 'var(--border-card)';
                                el.style.boxShadow = 'none';
                                el.style.transform = 'translateY(0)';
                            }}
                            >
                                <div style={{
                                    background: 'rgba(255,255,255,0.95)',
                                    borderRadius: 'var(--radius-md)',
                                    padding: '12px',
                                    display: 'inline-block',
                                    marginBottom: '16px',
                                }}>
                                    <img src={cert.img} alt={cert.name} style={{ width: '140px', height: 'auto' }} />
                                </div>
                                <p style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '13px',
                                    margin: 0,
                                    lineHeight: 1.6,
                                }}>
                                    <b style={{ color: 'var(--text-white)' }}>{cert.contact}</b><br />
                                    <a href={`mailto:${cert.email}`} style={{
                                        color: 'var(--cyan-400)',
                                        textDecoration: 'none',
                                        fontSize: '12px',
                                    }}>{cert.email}</a>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
