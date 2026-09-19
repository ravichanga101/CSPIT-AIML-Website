'use client';

const certs = [
    { img: '/img/certifications/redhat.png', name: 'Red Hat Academy',  contact: 'Prof. Sarita Thummar',  email: 'saritathummar.ce@charusat.ac.in' },
    { img: '/img/certifications/aws.png',    name: 'AWS Academy',      contact: 'Prof. Sanket Suthar',   email: 'sanketsuthar.it@charusat.ac.in' },
    { img: '/img/certifications/cisco.png',  name: 'Cisco Networking Academy', contact: 'Prof. Abhishek Patel', email: 'abhishekpatel.cse@charusat.ac.in' },
    { img: '/img/certifications/oracle.png', name: 'Oracle Academy',   contact: 'Prof. Vidisha Pradhan', email: 'vidishapradhan.cse@charusat.ac.in' },
];

export default function Certifications() {
    return (
        <section id="services" className="wow fadeInUp" style={{ background: 'var(--bg)', padding: '90px 0' }}>
            <div className="container">
                {/* Badge */}
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <span className="ref-badge">
                        <i className="fa fa-star" />
                        Industry Alliances
                    </span>
                </div>

                {/* Heading */}
                <h2 className="ref-heading" style={{ textAlign: 'center', marginBottom: '60px' }}>
                    Industry Recognized<br />
                    <span className="grad-cyan">Certification Courses</span>
                </h2>

                {/* 2×2 horizontal cards */}
                <div className="row">
                    {certs.map((c, i) => (
                        <div key={i} className="col-lg-6" style={{ marginBottom: '20px' }}>
                            <div className="ref-card" style={{ padding: '28px 28px', display: 'flex', alignItems: 'center', gap: '24px' }}
                                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(34,211,238,.22)'; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 16px 48px rgba(0,0,0,.5)'; }}
                                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none'; }}
                            >
                                {/* Logo box */}
                                <div style={{ width: '120px', minWidth: '120px', height: '80px', background: '#fff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                                    <img src={c.img} alt={c.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }} />
                                </div>
                                {/* Text */}
                                <div>
                                    <h4 style={{ fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '17px', color: '#f1f5f9', marginBottom: '6px' }}>{c.name}</h4>
                                    <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Course Coordinator</div>
                                    <div style={{ fontWeight: 600, fontSize: '14px', color: '#f1f5f9', marginBottom: '6px' }}>{c.contact}</div>
                                    <a href={`mailto:${c.email}`} style={{ color: 'var(--cyan)', fontSize: '13px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <i className="fa fa-envelope" style={{ fontSize: '12px' }} />
                                        {c.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
