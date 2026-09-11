'use client';
import { config } from '@/lib/config';

const stats = [
    {
        icon: 'fa-book',
        value: config.total_publications,
        label: 'Publications',
        iconBg: 'rgba(6, 182, 212, 0.12)',
        iconBorder: 'rgba(6, 182, 212, 0.35)',
        iconColor: '#22d3ee',
    },
    {
        icon: 'fa-users',
        value: config.student_teacher_ratio,
        label: 'Student Teacher Ratio',
        iconBg: 'rgba(139, 92, 246, 0.12)',
        iconBorder: 'rgba(139, 92, 246, 0.35)',
        iconColor: '#a78bfa',
    },
    {
        icon: 'fa-graduation-cap',
        value: config.Intake,
        label: 'No. of Seats',
        iconBg: 'rgba(234, 179, 8, 0.12)',
        iconBorder: 'rgba(234, 179, 8, 0.35)',
        iconColor: '#fbbf24',
    },
    {
        icon: 'fa-calendar-check-o',
        value: config.total_workshops_org,
        label: 'Events Organized',
        iconBg: 'rgba(6, 182, 212, 0.12)',
        iconBorder: 'rgba(6, 182, 212, 0.35)',
        iconColor: '#22d3ee',
    },
    {
        icon: 'fa-trophy',
        value: config.total_projects_and_grants,
        label: 'Projects & Grants Received',
        iconBg: 'rgba(99, 102, 241, 0.12)',
        iconBorder: 'rgba(99, 102, 241, 0.35)',
        iconColor: '#818cf8',
    },
];

export default function AboutUs() {
    return (
        <main id="main">
            <section id="about_us" className="wow fadeInUp" style={{
                background: 'var(--bg-primary)',
                padding: '90px 0 60px',
            }}>
                <div className="container">

                    {/* Badge */}
                    <div style={{ textAlign: 'center', marginBottom: '18px' }}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(6, 182, 212, 0.08)',
                            border: '1px solid rgba(6, 182, 212, 0.25)',
                            borderRadius: '9999px',
                            padding: '6px 18px',
                            fontSize: '11px',
                            fontWeight: 700,
                            letterSpacing: '1.5px',
                            textTransform: 'uppercase' as const,
                            color: '#22d3ee',
                            fontFamily: 'var(--font-body)',
                        }}>
                            <i className="fa fa-info-circle" style={{ fontSize: '12px' }} />
                            Institutional Overview
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 style={{
                        textAlign: 'center',
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 800,
                        color: '#f0f6fc',
                        letterSpacing: '-0.03em',
                        marginBottom: '18px',
                        lineHeight: 1.2,
                    }}>
                        About{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #06b6d4, #22d3ee)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>Us</span>
                    </h2>

                    {/* Description */}
                    <p style={{
                        textAlign: 'center',
                        color: '#8b99b0',
                        fontSize: '16px',
                        lineHeight: 1.8,
                        maxWidth: '620px',
                        margin: '0 auto 52px',
                    }}>
                        {config.name_of_dept} (Estd. {config.dept_esta}) offers {config.dept_b_tech_seats} seats for aspiring AI and Machine Learning professionals.
                    </p>

                    {/* Stat Cards */}
                    <div style={{
                        display: 'flex',
                        gap: '16px',
                        justifyContent: 'center',
                        flexWrap: 'wrap' as const,
                    }}>
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="about-stat-card"
                                style={{
                                    flex: '1 1 170px',
                                    maxWidth: '210px',
                                    background: '#0d1530',
                                    border: '1px solid rgba(34, 211, 238, 0.1)',
                                    borderRadius: '16px',
                                    padding: '28px 20px 24px',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                    cursor: 'default',
                                }}
                                onMouseEnter={e => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.borderColor = stat.iconBorder;
                                    el.style.transform = 'translateY(-6px)';
                                    el.style.boxShadow = `0 12px 30px rgba(0,0,0,0.3)`;
                                }}
                                onMouseLeave={e => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.borderColor = 'rgba(34, 211, 238, 0.1)';
                                    el.style.transform = 'translateY(0)';
                                    el.style.boxShadow = 'none';
                                }}
                            >
                                {/* Icon box */}
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    background: stat.iconBg,
                                    border: `1px solid ${stat.iconBorder}`,
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 20px',
                                }}>
                                    <i className={`fa ${stat.icon}`} style={{
                                        color: stat.iconColor,
                                        fontSize: '20px',
                                    }} />
                                </div>

                                {/* Value */}
                                <div style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '2rem',
                                    fontWeight: 800,
                                    color: '#f0f6fc',
                                    lineHeight: 1.1,
                                    marginBottom: '10px',
                                    letterSpacing: '-0.02em',
                                }}>
                                    {stat.value}
                                </div>

                                {/* Label */}
                                <div style={{
                                    fontSize: '10.5px',
                                    color: '#5a6a82',
                                    textTransform: 'uppercase' as const,
                                    letterSpacing: '1.2px',
                                    fontWeight: 600,
                                    lineHeight: 1.4,
                                }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </main>
    );
}
