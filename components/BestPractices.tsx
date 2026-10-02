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
    { bg: 'rgba(12, 46, 138, 0.06)', border: 'rgba(12, 46, 138, 0.12)', color: '#0c2e8a' },
    { bg: 'rgba(109, 40, 217, 0.06)', border: 'rgba(109, 40, 217, 0.12)', color: '#6d28d9' },
    { bg: 'rgba(217, 119, 6, 0.06)', border: 'rgba(217, 119, 6, 0.12)', color: '#d97706' },
    { bg: 'rgba(5, 150, 105, 0.06)', border: 'rgba(5, 150, 105, 0.12)', color: '#059669' },
    { bg: 'rgba(37, 99, 235, 0.06)', border: 'rgba(37, 99, 235, 0.12)', color: '#2563eb' },
];

export default function BestPractices() {
    return (
        <section id="services" className="wow fadeInUp" style={{ background: '#ffffff', padding: '90px 0' }}>
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
                                    background: '#ffffff', border: '1px solid rgba(15, 23, 42, 0.06)',
                                    borderRadius: '12px', padding: '16px 20px',
                                    display: 'flex', alignItems: 'center', gap: '16px',
                                    transition: 'all 0.3s ease', cursor: 'default',
                                    boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)',
                                }}
                                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = c.border; el.style.transform = 'translateX(5px)'; el.style.boxShadow = '0 4px 16px rgba(15,23,42,0.08)'; }}
                                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(15, 23, 42, 0.06)'; el.style.transform = 'translateX(0)'; el.style.boxShadow = '0 1px 3px rgba(15, 23, 42, 0.04)'; }}
                                >
                                    <div style={{
                                        width: '40px', height: '40px', minWidth: '40px',
                                        background: c.bg, border: `1px solid ${c.border}`,
                                        borderRadius: '10px', display: 'flex',
                                        alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <i className={`fa ${item.icon}`} style={{ color: c.color, fontSize: '16px' }} />
                                    </div>
                                    <span style={{ color: '#1e293b', fontWeight: 500, fontSize: '14px', lineHeight: 1.5 }}>
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
