'use client';
import { config } from '@/lib/config';

export default function AboutUs() {
    const stats = [
        { icon: 'fa-book', value: config.total_publications, label: 'Publications' },
        { icon: 'fa-users', value: config.student_teacher_ratio, label: 'Student Teacher Ratio' },
        { icon: 'fa-graduation-cap', value: config.Intake, label: 'No. of Seats' },
        { icon: 'fa-calendar', value: config.total_workshops_org, label: 'Events Organized' },
        { icon: 'fa-trophy', value: config.total_projects_and_grants, label: 'Projects & Grants Received' },
    ];

    return (
        <>
            <main id="main">
                <section id="about_us" className="wow fadeInUp" style={{ 
                    background: 'var(--bg-primary)', 
                    padding: '80px 0 40px 0' 
                }}>
                    <div className="container">
                        {/* Section Badge & Title */}
                        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <div className="ds-badge" style={{ display: 'inline-flex' }}>
                                Institutional Overview
                            </div>
                        </div>
                        <div className="section-header" style={{ marginBottom: '40px' }}>
                            <h2 style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '2.5rem',
                                fontWeight: 800,
                                color: 'var(--text-white)',
                                letterSpacing: '-0.03em',
                            }}>
                                About <span className="gradient-text">Us</span>
                            </h2>
                        </div>
                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '16px',
                            lineHeight: 1.8,
                            maxWidth: '600px',
                            margin: '0 auto 50px auto',
                            textAlign: 'center',
                        }}>
                            {config.name_of_dept} (Estd. {config.dept_esta}) offers {config.dept_b_tech_seats} seats for aspiring AI and Machine Learning professionals.
                        </p>

                        {/* Stats Grid */}
                        <div className="row" style={{ justifyContent: 'center' }}>
                            {stats.map((stat, index) => (
                                <div key={index} className="col-lg col-md-4 col-sm-6" style={{ marginBottom: '16px' }}>
                                    <div style={{
                                        background: 'var(--bg-card)',
                                        border: '1px solid var(--border-card)',
                                        borderRadius: 'var(--radius-lg)',
                                        padding: '28px 20px',
                                        textAlign: 'center',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default',
                                        height: '100%',
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
                                        {/* Icon */}
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            background: 'rgba(6, 182, 212, 0.1)',
                                            border: '1px solid rgba(6, 182, 212, 0.2)',
                                            borderRadius: 'var(--radius-md)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 16px auto',
                                        }}>
                                            <i className={`fa ${stat.icon}`} style={{
                                                color: 'var(--cyan-400)',
                                                fontSize: '20px',
                                            }}></i>
                                        </div>
                                        {/* Number */}
                                        <div style={{
                                            fontFamily: 'var(--font-display)',
                                            fontSize: '2rem',
                                            fontWeight: 800,
                                            color: 'var(--text-white)',
                                            lineHeight: 1.2,
                                            marginBottom: '6px',
                                        }}>{stat.value}</div>
                                        {/* Label */}
                                        <div style={{
                                            fontSize: '11px',
                                            color: 'var(--text-muted)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            fontWeight: 500,
                                        }}>{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
