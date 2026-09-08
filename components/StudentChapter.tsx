'use client';
export default function StudentChapter() {
    const cells = [
        {
            title: 'Anti-Ragging Cell',
            img: '/img/cell/ARC.png',
            alt: 'Anti-Ragging Cell',
            faculty: 'Prof. Niyati V Patel',
            email: 'niyatipatel.aiml@charusat.ac.in',
            mailto: 'niyatipate.aiml@charusat.ac.in',
        },
        {
            title: 'Career Development & Placement Cell',
            img: '/img/cell/CDPC.jpg',
            alt: 'Career Development & Placement Cell',
            faculty: 'Prof. Dheeraj K. Shringi',
            email: 'dheerajshringi.aiml@charusat.ac.in',
            mailto: 'dheerajshringi@charusat.ac.in',
        },
        {
            title: 'Charusat Startup & Innovation Center',
            img: '/img/cell/CSIC.png',
            alt: 'Charusat Startup & Innovation Center',
            faculty: 'Prof. Gaurang Patel',
            email: 'gaurangpatel.me@charusat.ac.in',
            mailto: 'gaurangpatel@charusat.ac.in',
        },
        {
            title: 'Equal Opportunity Cell',
            img: '/img/cell/EOC.png',
            alt: 'Equal Opportunity Cell',
            faculty: 'Prof. Gaurav Gautham Kumar',
            email: 'gauravkumar.aiml@charusat.ac.in',
            mailto: 'gauravkumar@charusat.ac.in',
        },
        {
            title: 'National Service Scheme',
            img: '/img/cell/NSS.png',
            alt: 'National Service Scheme',
            faculty: 'Prof. Gaurav Gautham Kumar',
            email: 'gauravkumar.aiml@charusat.ac.in',
            mailto: 'gauravkumar@charusat.ac.in',
        },
        {
            title: 'Women Development Cell',
            img: '/img/cell/WDC.jpg',
            alt: 'Women Development Cell',
            faculty: 'Prof. Niyati V Patel',
            email: 'niyatipatel.aiml@charusat.ac.in',
            mailto: 'niyatipate.aiml@charusat.ac.in',
        },
    ];

    return (
        <>
            {/* Student Chapters */}
            <section id="services" className="wow fadeInUp" style={{
                background: 'var(--bg-primary)',
                padding: '60px 0 30px 0',
            }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                        <div className="ds-badge" style={{ display: 'inline-flex' }}>
                            Student Chapters
                        </div>
                    </div>
                    <div className="section-header" style={{ marginBottom: '40px' }}>
                        <h2 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '2.5rem',
                            fontWeight: 800,
                            letterSpacing: '-0.03em',
                        }}>
                            Student&apos;s <span className="gradient-text">Chapters</span>
                        </h2>
                    </div>
                    <div className="row" style={{ justifyContent: 'center' }}>
                        <div className="col-lg-3 col-md-6 col-xs-12" style={{ marginBottom: '16px' }}>
                            <div style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-card)',
                                borderRadius: 'var(--radius-lg)',
                                padding: '28px 20px',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                height: '100%',
                            }}>
                                <div style={{
                                    background: 'rgba(255,255,255,0.9)',
                                    borderRadius: 'var(--radius-md)',
                                    padding: '8px',
                                    display: 'inline-block',
                                    marginBottom: '12px',
                                }}>
                                    <img src="/img/logo/nptel.png" height="90px" alt="NPTEL" />
                                </div>
                                <p style={{ margin: 0, textAlign: 'center', color: 'var(--text-white)', fontWeight: 600 }}>
                                    SWAYAM-NPTEL Local Chapter
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cell Information */}
            <section id="services" className="wow fadeInUp" style={{
                background: 'var(--bg-primary)',
                padding: '40px 0 60px 0',
            }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                        <div className="ds-badge" style={{ display: 'inline-flex' }}>
                            Department Cells
                        </div>
                    </div>
                    <div className="section-header" style={{ marginBottom: '40px' }}>
                        <h2 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '2.5rem',
                            fontWeight: 800,
                            letterSpacing: '-0.03em',
                        }}>
                            Cell <span className="gradient-text">Information</span>
                        </h2>
                    </div>
                    <div className="row">
                        {cells.map((cell, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '20px' }}>
                                <div style={{
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border-card)',
                                    borderRadius: 'var(--radius-lg)',
                                    padding: '28px',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                    height: '100%',
                                    cursor: 'default',
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
                                    <h4 style={{
                                        fontFamily: 'var(--font-display)',
                                        fontWeight: 700,
                                        fontSize: '17px',
                                        color: 'var(--text-white)',
                                        marginBottom: '16px',
                                        minHeight: '44px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>{cell.title}</h4>
                                    <div style={{
                                        background: 'rgba(255,255,255,0.95)',
                                        borderRadius: 'var(--radius-md)',
                                        padding: '10px',
                                        display: 'inline-block',
                                        marginBottom: '16px',
                                    }}>
                                        <img src={cell.img} alt={cell.alt} height="80px" />
                                    </div>
                                    <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                                        <b style={{ color: 'var(--text-white)' }}>{cell.faculty}</b><br />
                                        <a href={`mailto:${cell.mailto}`} style={{ 
                                            color: 'var(--cyan-400)', 
                                            textDecoration: 'none',
                                            fontSize: '13px',
                                        }}>{cell.email}</a>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
