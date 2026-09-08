'use client';
export default function BestPractices() {
    const practices = [
        { icon: 'fa-universal-access', title: 'One-to-One Student Counseling' },
        { icon: 'fa-comments-o', title: 'Guided Project Work every semester' },
        { icon: 'fa-gamepad', title: 'Game Based Learnings' },
        { icon: 'fa-flask', title: 'Research and Project Based Learning' },
        { icon: 'fa-video-camera', title: 'AI Drops- AI Awareness by Reels' },
        { icon: 'fa-handshake-o', title: 'AI Meetup - A common platform for student and Industry to share their ideas' },
        { icon: 'fa-map-marker', title: 'AI Camp - Social inclusivity and awareness by organizing camps in rural area' },
        { icon: 'fa-language', title: 'English Improvement Classes' },
        { icon: 'fa-laptop', title: 'Supplementary Education through MOOC Courses' },
        { icon: 'fa-desktop', title: 'Appropriate use of software for learning and tracking Education' },
        { icon: 'fa-handshake-o', title: 'Continuous Evaluation and Collaborative Learning Environment' },
        { icon: 'fa-file-video-o', title: 'Learning through Workshops and Expert sessions' },
        { icon: 'fa-globe', title: 'Provision for separate remedial classes for slow learners' },
        { icon: 'fa-universal-access', title: 'Group / Team and Peer to Peer Learning' },
        { icon: 'fa-industry', title: 'Mechanism of collecting the feedbacks from Students' },
    ];

    return (
        <section id="services" className="wow fadeInUp" style={{ 
            textAlign: 'left', 
            background: 'var(--bg-primary)',
            padding: '60px 0',
        }}>
            <div className="container">
                {/* Section Badge & Title */}
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <div className="ds-badge" style={{ display: 'inline-flex' }}>
                        Academic Distinction
                    </div>
                </div>
                <div className="section-header" style={{ marginBottom: '40px' }}>
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                    }}>
                        Best <span className="gradient-text">Practices</span>
                    </h2>
                </div>

                <div className="row">
                    {practices.map((item, index) => (
                        <div key={index} className="col-lg-6 col-md-6 col-sm-12" style={{ marginBottom: '12px' }}>
                            <div style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-subtle)',
                                borderRadius: 'var(--radius-md)',
                                padding: '16px 20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                transition: 'all 0.3s ease',
                                cursor: 'default',
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.borderColor = 'var(--border-glow)';
                                el.style.boxShadow = '0 0 15px rgba(6, 182, 212, 0.1)';
                                el.style.transform = 'translateX(4px)';
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.borderColor = 'var(--border-subtle)';
                                el.style.boxShadow = 'none';
                                el.style.transform = 'translateX(0)';
                            }}
                            >
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    minWidth: '40px',
                                    background: 'rgba(6, 182, 212, 0.1)',
                                    border: '1px solid rgba(6, 182, 212, 0.2)',
                                    borderRadius: 'var(--radius-sm)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <i className={`fa ${item.icon}`} style={{
                                        color: 'var(--cyan-400)',
                                        fontSize: '16px',
                                    }}></i>
                                </div>
                                <span style={{
                                    color: 'var(--text-white)',
                                    fontWeight: 500,
                                    fontSize: '14px',
                                    lineHeight: 1.5,
                                }}>{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
