'use client';

const cells = [
    { title: 'Anti-Ragging Cell',                    img: '/img/cell/ARC.png',  faculty: 'Prof. Niyati V Patel',       email: 'niyatipatel.aiml@charusat.ac.in',    color: '#f87171' },
    { title: 'Career Development & Placement Cell',  img: '/img/cell/CDPC.jpg', faculty: 'Prof. Dheeraj K. Shringi',   email: 'dheerajshringi.aiml@charusat.ac.in', color: '#22d3ee' },
    { title: 'Charusat Startup & Innovation Center', img: '/img/cell/CSIC.png', faculty: 'Prof. Gaurang Patel',        email: 'gaurangpatel.me@charusat.ac.in',     color: '#fbbf24' },
    { title: 'Equal Opportunity Cell',               img: '/img/cell/EOC.png',  faculty: 'Prof. Gaurav Gautham Kumar', email: 'gauravkumar.aiml@charusat.ac.in',    color: '#4ade80' },
    { title: 'National Service Scheme',              img: '/img/cell/NSS.png',  faculty: 'Prof. Gaurav Gautham Kumar', email: 'gauravkumar.aiml@charusat.ac.in',    color: '#22d3ee' },
    { title: 'Women Development Cell',               img: '/img/cell/WDC.jpg',  faculty: 'Prof. Niyati V Patel',       email: 'niyatipatel.aiml@charusat.ac.in',    color: '#f472b6' },
];

export default function StudentChapter() {
    return (
        <>
            {/* NPTEL Chapter */}
            <section id="services" className="wow fadeInUp" style={{ background: 'var(--bg)', padding: '90px 0 60px' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <span className="ref-badge"><i className="fa fa-graduation-cap" />Student Chapters</span>
                    </div>
                    <h2 className="ref-heading" style={{ textAlign: 'center', marginBottom: '52px' }}>
                        Student&apos;s <span className="grad-cyan">Chapters</span>
                    </h2>
                    <div className="row" style={{ justifyContent: 'center' }}>
                        <div className="col-lg-3 col-md-6">
                            <div className="ref-card" style={{ padding: '32px 24px', textAlign: 'center' }}
                                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(34,211,238,.25)'; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = '0 16px 40px rgba(0,0,0,.5)'; }}
                                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none'; }}
                            >
                                <div style={{ background: '#fff', borderRadius: '12px', padding: '12px', display: 'inline-block', marginBottom: '18px' }}>
                                    <img src="/img/logo/nptel.png" height="70px" alt="NPTEL" style={{ display: 'block' }} />
                                </div>
                                <p style={{ margin: 0, color: '#f1f5f9', fontWeight: 600, fontSize: '15px' }}>SWAYAM-NPTEL Local Chapter</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cell Information — matches reference pic 4 exactly */}
            <section id="services" className="wow fadeInUp" style={{ background: 'var(--bg)', padding: '60px 0 90px' }}>
                <div className="container">
                    <h2 className="ref-heading" style={{ textAlign: 'center', marginBottom: '52px' }}>
                        Cell <span className="grad-amber">Information</span>
                    </h2>
                    <div className="row">
                        {cells.map((cell, i) => (
                            <div key={i} className="col-lg-4 col-md-6" style={{ marginBottom: '20px' }}>
                                <div className="ref-card" style={{ padding: '32px 24px', textAlign: 'center', height: '100%' }}
                                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = cell.color + '45'; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = `0 16px 40px rgba(0,0,0,.5), 0 0 20px ${cell.color}15`; }}
                                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none'; }}
                                >
                                    <h4 style={{ fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '15px', color: '#f1f5f9', marginBottom: '20px', lineHeight: 1.4 }}>{cell.title}</h4>
                                    <div style={{ background: '#fff', borderRadius: '12px', padding: '12px', display: 'inline-block', marginBottom: '20px' }}>
                                        <img src={cell.img} alt={cell.title} height="80px" style={{ display: 'block' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', marginTop: '8px' }}>
                                        <span style={{ fontWeight: 700, fontSize: '14px', color: '#f1f5f9' }}>{cell.faculty}</span>
                                        <a href={`mailto:${cell.email}`} style={{ color: 'var(--cyan)', fontSize: '12px', textDecoration: 'none', opacity: 0.85, letterSpacing: '0.01em' }}>
                                            <i className="fa fa-envelope" style={{ marginRight: '5px', fontSize: '11px' }} />{cell.email}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
