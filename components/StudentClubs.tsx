'use client';

const clubs = [
    { img: '/img/clubs/IMG_0817.JPG',        fallback: '/img/portfolio/1.JPG', name: 'Innoveters Club',   type: 'Technical Innovation',    desc: 'Fostering creativity and innovation through hands-on projects, workshops, and collaborative problem-solving in emerging technologies.', color: '#22d3ee' },
    { img: '/img/clubs/LOGO AI FOR ALL.jpg', fallback: '/img/portfolio/2.JPG', name: 'AI For All Club',   type: 'AI Awareness & Learning', desc: 'Democratizing artificial intelligence education, promoting AI literacy and ethical AI practices through interactive sessions.', color: '#a78bfa' },
    { img: '/img/clubs/Math for AI.JPG',     fallback: '/img/portfolio/3.JPG', name: 'Math For AI Club',  type: 'Mathematical Foundation', desc: 'Building strong mathematical foundations for AI, exploring the critical role of mathematics in machine learning algorithms.', color: '#4ade80' },
];

export default function StudentClubs() {
    return (
        <section id="student-achievements" className="wow fadeInUp" style={{ background: 'var(--bg)', padding: '90px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <span className="ref-badge"><i className="fa fa-users" />Student Community</span>
                </div>
                <h2 className="ref-heading" style={{ textAlign: 'center', marginBottom: '16px' }}>
                    Student <span className="grad-green">Clubs</span>
                </h2>
                <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '15px', marginBottom: '50px' }}>
                    Empowering student excellence through innovation, collaboration, and achievement
                </p>

                <div className="row" style={{ justifyContent: 'center' }}>
                    {clubs.map((club, i) => (
                        <div key={i} className="col-lg-4 col-md-6" style={{ marginBottom: '24px' }}>
                            <div className="ref-card" style={{ overflow: 'hidden', height: '100%' }}
                                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = club.color + '44'; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = `0 20px 48px rgba(0,0,0,.5), 0 0 20px ${club.color}15`; }}
                                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none'; }}
                            >
                                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                    <img src={club.img} alt={club.name} onError={e => e.currentTarget.src = club.fallback}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 40%,rgba(8,9,14,.9) 100%)' }} />
                                </div>
                                <div style={{ padding: '24px', textAlign: 'center' }}>
                                    <div style={{ display: 'inline-block', background: club.color + '18', border: `1px solid ${club.color}35`, borderRadius: '9999px', padding: '3px 14px', fontSize: '10px', fontWeight: 700, color: club.color, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>{club.type}</div>
                                    <h4 style={{ fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '18px', color: '#f1f5f9', marginBottom: '10px' }}>{club.name}</h4>
                                    <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>{club.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
