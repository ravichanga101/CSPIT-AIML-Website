'use client';

const cells = [
    { title: 'Anti-Ragging Cell', img: '/img/cell/ARC.png', faculty: 'Prof. Niyati V Patel', email: 'niyatipatel.aiml@charusat.ac.in', color: { bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.3)', top: '#f87171' } },
    { title: 'Career Development & Placement Cell', img: '/img/cell/CDPC.jpg', faculty: 'Prof. Dheeraj K. Shringi', email: 'dheerajshringi.aiml@charusat.ac.in', color: { bg: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.3)', top: '#22d3ee' } },
    { title: 'Charusat Startup & Innovation Center', img: '/img/cell/CSIC.png', faculty: 'Prof. Gaurang Patel', email: 'gaurangpatel.me@charusat.ac.in', color: { bg: 'rgba(234,179,8,0.1)', border: 'rgba(234,179,8,0.3)', top: '#fbbf24' } },
    { title: 'Equal Opportunity Cell', img: '/img/cell/EOC.png', faculty: 'Prof. Gaurav Gautham Kumar', email: 'gauravkumar.aiml@charusat.ac.in', color: { bg: 'rgba(45,212,191,0.1)', border: 'rgba(45,212,191,0.3)', top: '#2dd4bf' } },
    { title: 'National Service Scheme', img: '/img/cell/NSS.png', faculty: 'Prof. Gaurav Gautham Kumar', email: 'gauravkumar.aiml@charusat.ac.in', color: { bg: 'rgba(99,102,241,0.1)', border: 'rgba(99,102,241,0.3)', top: '#818cf8' } },
    { title: 'Women Development Cell', img: '/img/cell/WDC.jpg', faculty: 'Prof. Niyati V Patel', email: 'niyatipatel.aiml@charusat.ac.in', color: { bg: 'rgba(236,72,153,0.1)', border: 'rgba(236,72,153,0.3)', top: '#f472b6' } },
];

const sectionBadge = (icon: string, label: string) => (
    <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.25)',
            borderRadius: '9999px', padding: '6px 18px', fontSize: '11px',
            fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' as const,
            color: '#22d3ee', fontFamily: 'var(--font-body)',
        }}>
            <i className={`fa ${icon}`} style={{ fontSize: '11px' }} />
            {label}
        </span>
    </div>
);

export default function StudentChapter() {
    return (
        <>
            {/* Student Chapters */}
            <section id="services" className="wow fadeInUp" style={{ background: 'var(--bg-primary)', padding: '90px 0 50px' }}>
                <div className="container">
                    {sectionBadge('fa-graduation-cap', 'Student Chapters')}
                    <h2 style={{
                        textAlign: 'center', fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 800,
                        color: '#f0f6fc', letterSpacing: '-0.03em', marginBottom: '52px',
                    }}>
                        Student&apos;s{' '}
                        <span style={{ background: 'linear-gradient(135deg,#06b6d4,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            Chapters
                        </span>
                    </h2>
                    <div className="row" style={{ justifyContent: 'center' }}>
                        <div className="col-lg-3 col-md-6">
                            <div style={{
                                background: '#0d1530', border: '1px solid rgba(34,211,238,0.1)',
                                borderRadius: '16px', padding: '32px 24px', textAlign: 'center',
                                transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden',
                            }}
                                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(34,211,238,0.3)'; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = '0 12px 30px rgba(0,0,0,0.3)'; }}
                                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(34,211,238,0.1)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none'; }}
                            >
                                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg,#06b6d4,#22d3ee)' }} />
                                <div style={{ background: 'rgba(255,255,255,0.92)', borderRadius: '10px', padding: '10px', display: 'inline-block', marginBottom: '16px' }}>
                                    <img src="/img/logo/nptel.png" height="80px" alt="NPTEL" style={{ display: 'block' }} />
                                </div>
                                <p style={{ margin: 0, color: '#f0f6fc', fontWeight: 600, fontSize: '15px' }}>SWAYAM-NPTEL Local Chapter</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cell Information */}
            <section id="services" className="wow fadeInUp" style={{ background: 'var(--bg-surface)', padding: '50px 0 90px' }}>
                <div className="container">
                    {sectionBadge('fa-building-o', 'Department Cells')}
                    <h2 style={{
                        textAlign: 'center', fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 800,
                        color: '#f0f6fc', letterSpacing: '-0.03em', marginBottom: '52px',
                    }}>
                        Cell{' '}
                        <span style={{ background: 'linear-gradient(135deg,#06b6d4,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            Information
                        </span>
                    </h2>
                    <div className="row">
                        {cells.map((cell, i) => (
                            <div key={i} className="col-lg-4 col-md-6" style={{ marginBottom: '20px' }}>
                                <div style={{
                                    background: '#0d1530', border: '1px solid rgba(34,211,238,0.08)',
                                    borderRadius: '16px', padding: '28px', textAlign: 'center',
                                    height: '100%', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden',
                                }}
                                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = cell.color.border; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = '0 12px 30px rgba(0,0,0,0.3)'; }}
                                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(34,211,238,0.08)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none'; }}
                                >
                                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg,${cell.color.top},transparent)` }} />
                                    <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', color: '#f0f6fc', marginBottom: '16px', lineHeight: 1.4 }}>{cell.title}</h4>
                                    <div style={{ background: 'rgba(255,255,255,0.95)', borderRadius: '10px', padding: '10px', display: 'inline-block', marginBottom: '16px' }}>
                                        <img src={cell.img} alt={cell.title} height="70px" style={{ display: 'block' }} />
                                    </div>
                                    <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.7, color: '#8b99b0' }}>
                                        <b style={{ color: '#f0f6fc', display: 'block', marginBottom: '4px' }}>{cell.faculty}</b>
                                        <a href={`mailto:${cell.email}`} style={{ color: '#22d3ee', textDecoration: 'none', fontSize: '12px' }}>{cell.email}</a>
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
