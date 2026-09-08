'use client';
export default function StudentClubs() {
    const clubs = [
        {
            img: '/img/clubs/IMG_0817.JPG',
            fallback: '/img/portfolio/1.JPG',
            name: 'Innoveters Club',
            type: 'Technical Innovation Club',
            desc: 'Fostering creativity and innovation among students through hands-on projects, workshops, and collaborative problem-solving experiences in emerging technologies.',
        },
        {
            img: '/img/clubs/LOGO AI FOR ALL.jpg',
            fallback: '/img/portfolio/2.JPG',
            name: 'AI For All Club',
            type: 'AI Awareness & Learning',
            desc: 'Democratizing artificial intelligence education for all students, promoting AI literacy and ethical AI practices through interactive sessions and real-world applications.',
        },
        {
            img: '/img/clubs/Math for AI.JPG',
            fallback: '/img/portfolio/3.JPG',
            name: 'Math For AI Club',
            type: 'Mathematical Foundation',
            desc: 'Building strong mathematical foundations for artificial intelligence, exploring the critical role of mathematics in machine learning algorithms and AI model development.',
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
                        Student Community
                    </div>
                </div>
                <div className="section-header" style={{ marginBottom: '50px' }}>
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                    }}>
                        Student <span className="gradient-text">Clubs</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
                        Empowering student excellence through innovation, collaboration, and achievement in technology and AI
                    </p>
                </div>

                <div className="row" style={{ justifyContent: 'center' }}>
                    {clubs.map((club, i) => (
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
                                        src={club.img}
                                        alt={club.name}
                                        onError={(e) => e.currentTarget.src = club.fallback}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease',
                                        }}
                                    />
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
                                    }}>{club.name}</h4>
                                    <div style={{
                                        color: 'var(--cyan-400)',
                                        fontSize: '12px',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        marginBottom: '12px',
                                    }}>{club.type}</div>
                                    <p style={{
                                        color: 'var(--text-secondary)',
                                        fontSize: '14px',
                                        lineHeight: 1.6,
                                        margin: 0,
                                    }}>{club.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
