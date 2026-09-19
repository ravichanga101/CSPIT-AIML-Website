'use client';

const practices = [
    { icon: 'fa-user-circle-o', title: 'One-to-One Student Counseling' },
    { icon: 'fa-comments-o', title: 'Guided Project Work every semester' },
    { icon: 'fa-gamepad', title: 'Game Based Learnings' },
    { icon: 'fa-flask', title: 'Research and Project Based Learning' },
    { icon: 'fa-video-camera', title: 'AI Drops – AI Awareness by Reels' },
    { icon: 'fa-handshake-o', title: 'AI Meetup – A common platform for student and Industry' },
    { icon: 'fa-map-marker', title: 'AI Camp – Social inclusivity in rural areas' },
    { icon: 'fa-language', title: 'English Improvement Classes' },
    { icon: 'fa-laptop', title: 'Supplementary Education through MOOC Courses' },
    { icon: 'fa-desktop', title: 'Appropriate use of software for learning' },
    { icon: 'fa-refresh', title: 'Continuous Evaluation and Collaborative Learning' },
    { icon: 'fa-file-video-o', title: 'Learning through Workshops and Expert sessions' },
    { icon: 'fa-globe', title: 'Remedial classes for slow learners' },
    { icon: 'fa-users', title: 'Group / Team and Peer to Peer Learning' },
    { icon: 'fa-industry', title: 'Mechanism of collecting feedbacks from Students' },
];

const iconColors = [
    { bg: 'rgba(6,182,212,0.12)', border: 'rgba(6,182,212,0.3)', color: '#22d3ee' },
    { bg: 'rgba(139,92,246,0.12)', border: 'rgba(139,92,246,0.3)', color: '#a78bfa' },
    { bg: 'rgba(234,179,8,0.12)', border: 'rgba(234,179,8,0.3)', color: '#fbbf24' },
    { bg: 'rgba(45,212,191,0.12)', border: 'rgba(45,212,191,0.3)', color: '#2dd4bf' },
    { bg: 'rgba(99,102,241,0.12)', border: 'rgba(99,102,241,0.3)', color: '#818cf8' },
];

export default function BestPractices() {
    return (
        <section id="services" className="wow fadeInUp" style={{ background: 'var(--bg)', padding: '90px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <span className="ref-badge"><i className="fa fa-star" />Academic Distinction</span>
                </div>
                <h2 className="ref-heading" style={{ textAlign: 'center', marginBottom: '50px' }}>Best <span className="grad-cyan">Practices</span></h2>

                <div className="row">
                    {practices.map((item, i) => {
                        const c = iconColors[i % iconColors.length];
                        return (
                            <div key={i} className="col-lg-6 col-md-6" style={{ marginBottom: '12px' }}>
                                <div style={{
                                    background: 'var(--bg-card)', border: '1px solid var(--border)',
                                    borderRadius: '12px', padding: '16px 20px',
                                    display: 'flex', alignItems: 'center', gap: '16px',
                                    transition: 'all 0.3s ease', cursor: 'default',
                                }}
                                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = c.border; el.style.transform = 'translateX(5px)'; el.style.boxShadow = '0 4px 20px rgba(0,0,0,.3)'; }}
                                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.transform = 'translateX(0)'; el.style.boxShadow = 'none'; }}
                                >
                                    <div style={{
                                        width: '40px', height: '40px', minWidth: '40px',
                                        background: c.bg, border: `1px solid ${c.border}`,
                                        borderRadius: '10px', display: 'flex',
                                        alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <i className={`fa ${item.icon}`} style={{ color: c.color, fontSize: '16px' }} />
                                    </div>
                                    <span style={{ color: '#f0f6fc', fontWeight: 500, fontSize: '14px', lineHeight: 1.5 }}>
                                        {item.title}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
