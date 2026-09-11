'use client';

const achievements = [
    { img: '/img/students/student1.jpg', fallback: '/img/portfolio/1.JPG', badge: 'Winner', badgeColor: '#22d3ee', name: 'Pankil, Neel and Sneh', course: 'B.Tech AI-ML, 2022', desc: 'Winner Maverick Effect AI Challenge 2024 — innovative ML solution for healthcare diagnostics.' },
    { img: '/img/students/student2.jpg', fallback: '/img/portfolio/2.JPG', badge: 'Winner', badgeColor: '#22d3ee', name: 'AIML Girls Team', course: 'B.Tech AI-ML, 2023', desc: 'Winner of Cricket tournament at CHARUSAT Spoural competition.' },
    { img: '/img/students/student3.jpg', fallback: '/img/portfolio/3.JPG', badge: 'Winner', badgeColor: '#22d3ee', name: 'Letscode', course: 'B.Tech AI-ML, 2023', desc: 'Winner CVM University Hackathon 3.0 2024 — innovative solution for Life Science and Agriculture.' },
    { img: '/img/students/student4.jpg', fallback: '/img/portfolio/4.jpg', badge: 'Topper', badgeColor: '#fbbf24', name: 'Hari, Puja and Smit', course: 'B.Tech AI-ML, 2023', desc: 'Toppers in JUL-OCT-2024 NPTEL Course "DSA using JAVA".' },
    { img: '/img/students/student5.jpg', fallback: '/img/portfolio/5.JPG', badge: 'Topper', badgeColor: '#fbbf24', name: 'Kashak and Yash', course: 'B.Tech AI-ML, 2024', desc: 'Toppers in JAN-APR-2025 NPTEL Course "Database Management System".' },
    { img: '/img/students/student6.jpg', fallback: '/img/portfolio/4.jpg', badge: 'Runner-up', badgeColor: '#a78bfa', name: 'Pradeep Chandravadiya', course: 'B.Tech AI-ML, 2023', desc: 'First Runner-up in Hackathon by Odoo x Amalthea at IIT Gandhinagar.' },
];

export default function StudentAchievements() {
    return (
        <section id="student-achievements" className="wow fadeInUp" style={{ background: 'var(--bg-primary)', padding: '90px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.25)',
                        borderRadius: '9999px', padding: '6px 18px', fontSize: '11px',
                        fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' as const,
                        color: '#22d3ee', fontFamily: 'var(--font-body)',
                    }}>
                        <i className="fa fa-trophy" style={{ fontSize: '11px' }} />
                        Our Pride
                    </span>
                </div>
                <h2 style={{
                    textAlign: 'center', fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 800,
                    color: '#f0f6fc', letterSpacing: '-0.03em', marginBottom: '16px',
                }}>
                    Student{' '}
                    <span style={{ background: 'linear-gradient(135deg,#06b6d4,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        Achievements
                    </span>
                </h2>
                <p style={{ textAlign: 'center', color: '#8b99b0', fontSize: '15px', marginBottom: '50px' }}>
                    Celebrating our outstanding students and their remarkable accomplishments
                </p>

                <div className="row">
                    {achievements.map((a, i) => (
                        <div key={i} className="col-lg-4 col-md-6" style={{ marginBottom: '24px' }}>
                            <div style={{
                                background: '#0d1530', border: '1px solid rgba(34,211,238,0.08)',
                                borderRadius: '16px', overflow: 'hidden',
                                transition: 'all 0.3s ease', height: '100%',
                            }}
                                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(34,211,238,0.3)'; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = '0 16px 40px rgba(0,0,0,0.4)'; }}
                                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(34,211,238,0.08)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none'; }}
                            >
                                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                    <img src={a.img} alt={a.name} onError={e => e.currentTarget.src = a.fallback}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', top: '12px', right: '12px', background: a.badgeColor, color: '#060b18', padding: '3px 12px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.5px' }}>{a.badge}</div>
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 40%,rgba(6,11,24,0.85) 100%)' }} />
                                </div>
                                <div style={{ padding: '22px', textAlign: 'center' }}>
                                    <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '17px', color: '#f0f6fc', marginBottom: '5px' }}>{a.name}</h4>
                                    <div style={{ color: '#22d3ee', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>{a.course}</div>
                                    <p style={{ color: '#8b99b0', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>{a.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <a href="/student_achievements_all" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: 'linear-gradient(135deg,#06b6d4,#22d3ee)', color: '#060b18',
                        padding: '12px 32px', borderRadius: '9999px', fontWeight: 700,
                        fontSize: '14px', textDecoration: 'none', transition: 'all 0.3s ease',
                        boxShadow: '0 4px 20px rgba(6,182,212,0.3)',
                    }}>
                        View All Achievements <i className="fa fa-arrow-right" />
                    </a>
                </div>
            </div>
        </section>
    );
}
