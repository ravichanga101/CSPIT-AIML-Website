'use client';
export default function StudentAchievements() {
    const achievements = [
        {
            img: '/img/students/student1.jpg',
            fallback: '/img/portfolio/1.JPG',
            badge: 'Winner',
            name: 'Pankil, Neel and Sneh',
            course: 'B.Tech AI-ML, 2022',
            desc: 'Winner Maverick Effect AI Challenge 2024, developed an innovative machine learning solution for healthcare diagnostics.',
        },
        {
            img: '/img/students/student2.jpg',
            fallback: '/img/portfolio/2.JPG',
            badge: 'Winner',
            name: 'AIML Girls Team',
            course: 'B.Tech AI-ML, 2023',
            desc: 'AIML Girls team became the winner of Cricket tournament at charusat spoural competition',
        },
        {
            img: '/img/students/student3.jpg',
            fallback: '/img/portfolio/3.JPG',
            badge: 'Winner',
            name: 'Letscode',
            course: 'B.Tech AI-ML, 2023',
            desc: 'Winner CVM University Hackathon 3.0 2024, developed an innovative solution for Life Science and Agriculture.',
        },
        {
            img: '/img/students/student4.jpg',
            fallback: '/img/portfolio/4.jpg',
            badge: 'Topper',
            name: 'Hari, Puja and Smit',
            course: 'B.Tech AI-ML, 2023',
            desc: 'Toppers position in JUL-OCT-2024 NPTEL Course "DSA using JAVA"',
        },
        {
            img: '/img/students/student5.jpg',
            fallback: '/img/portfolio/5.JPG',
            badge: 'Topper',
            name: 'Kashak and Yash',
            course: 'B.Tech AI-ML, 2024',
            desc: 'Toppers position in JAN-APR-2025 NPTEL Course "Database Management System"',
        },
        {
            img: '/img/students/student6.jpg',
            fallback: '/img/portfolio/4.jpg',
            badge: 'Winner',
            name: 'Pradeep Chandravadiya',
            course: 'B.Tech AI-ML, 2023',
            desc: 'First Runner-up in Hackathon Conducted by Odoo x Amalthea at IIT Gandhinagar',
        },
    ];

    return (
        <section id="student-achievements" className="wow fadeInUp" style={{
            background: 'var(--bg-primary)',
            padding: '80px 0 40px 0',
        }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <div className="ds-badge" style={{ display: 'inline-flex' }}>
                        Our Pride
                    </div>
                </div>
                <div className="section-header" style={{ marginBottom: '50px' }}>
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                    }}>
                        Student <span className="gradient-text">Achievements</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
                        Celebrating our outstanding students and their remarkable accomplishments
                    </p>
                </div>

                <div className="row">
                    {achievements.map((a, i) => (
                        <div key={i} className="col-lg-4 col-md-6" style={{ marginBottom: '24px' }}>
                            <div style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-card)',
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                height: '100%',
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.borderColor = 'var(--border-glow)';
                                el.style.boxShadow = '0 0 25px rgba(6, 182, 212, 0.15)';
                                el.style.transform = 'translateY(-6px)';
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.borderColor = 'var(--border-card)';
                                el.style.boxShadow = 'none';
                                el.style.transform = 'translateY(0)';
                            }}
                            >
                                {/* Image */}
                                <div style={{
                                    height: '220px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                }}>
                                    <img
                                        src={a.img}
                                        alt={a.name}
                                        onError={(e) => e.currentTarget.src = a.fallback}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease',
                                        }}
                                    />
                                    {/* Badge */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '12px',
                                        right: '12px',
                                        background: 'var(--gradient-primary)',
                                        color: 'var(--bg-primary)',
                                        padding: '4px 14px',
                                        borderRadius: 'var(--radius-pill)',
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                    }}>{a.badge}</div>
                                    {/* Gradient overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(180deg, transparent 50%, rgba(6, 11, 24, 0.8) 100%)',
                                    }} />
                                </div>

                                {/* Content */}
                                <div style={{ padding: '24px', textAlign: 'center' }}>
                                    <h4 style={{
                                        fontFamily: 'var(--font-display)',
                                        fontWeight: 700,
                                        fontSize: '18px',
                                        color: 'var(--text-white)',
                                        marginBottom: '6px',
                                    }}>{a.name}</h4>
                                    <div style={{
                                        color: 'var(--cyan-400)',
                                        fontSize: '12px',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        marginBottom: '12px',
                                    }}>{a.course}</div>
                                    <p style={{
                                        color: 'var(--text-secondary)',
                                        fontSize: '14px',
                                        lineHeight: 1.6,
                                        margin: 0,
                                    }}>{a.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="row">
                    <div className="col-12 text-center" style={{ marginTop: '30px' }}>
                        <a href="/student_achievements_all" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'var(--gradient-primary)',
                            color: 'var(--bg-primary)',
                            padding: '12px 30px',
                            borderRadius: 'var(--radius-pill)',
                            fontWeight: 700,
                            fontSize: '14px',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                        }}>
                            View All Achievements
                            <i className="fa fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
