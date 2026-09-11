'use client';

const clubs = [
    { img: '/img/clubs/IMG_0817.JPG', fallback: '/img/portfolio/1.JPG', name: 'Innoveters Club', type: 'Technical Innovation Club', desc: 'Fostering creativity and innovation among students through hands-on projects, workshops, and collaborative problem-solving in emerging technologies.', color: '#22d3ee' },
    { img: '/img/clubs/LOGO AI FOR ALL.jpg', fallback: '/img/portfolio/2.JPG', name: 'AI For All Club', type: 'AI Awareness & Learning', desc: 'Democratizing artificial intelligence education for all students, promoting AI literacy and ethical AI practices through interactive sessions.', color: '#a78bfa' },
    { img: '/img/clubs/Math for AI.JPG', fallback: '/img/portfolio/3.JPG', name: 'Math For AI Club', type: 'Mathematical Foundation', desc: 'Building strong mathematical foundations for AI, exploring the critical role of mathematics in machine learning algorithms and model development.', color: '#2dd4bf' },
];

export default function StudentClubs() {
    return (
        <section id="student-achievements" className="wow fadeInUp" style={{ background: 'var(--bg-surface)', padding: '90px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.25)',
                        borderRadius: '9999px', padding: '6px 18px', fontSize: '11px',
                        fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' as const,
                        color: '#22d3ee', fontFamily: 'var(--font-body)',
                    }}>
                        <i className="fa fa-users" style={{ fontSize: '11px' }} />
                        Student Community
                    </span>
                </div>
                <h2 style={{
                    textAlign: 'center', fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 800,
                    color: '#f0f6fc', letterSpacing: '-0.03em', marginBottom: '16px',
                }}>
                    Student{' '}
                    <span style={{ background: 'linear-gradient(135deg,#06b6d4,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        Clubs
                    </span>
                </h2>
                <p style={{ textAlign: 'center', color: '#8b99b0', fontSize: '15px', marginBottom: '50px' }}>
                    Empowering student excellence through innovation, collaboration, and achievement
                </p>

                <div className="row" style={{ justifyContent: 'center' }}>
                    {clubs.map((club, i) => (
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
                                    <img src={club.img} alt={club.name} onError={e => e.currentTarget.src = club.fallback}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 40%,rgba(6,11,24,0.85) 100%)' }} />
                                </div>
                                <div style={{ padding: '24px', textAlign: 'center' }}>
                                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: club.color, margin: '0 auto 12px', boxShadow: `0 0 8px ${club.color}` }} />
                                    <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: '#f0f6fc', marginBottom: '6px' }}>{club.name}</h4>
                                    <div style={{ color: club.color, fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>{club.type}</div>
                                    <p style={{ color: '#8b99b0', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>{club.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
