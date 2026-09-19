'use client';
import { config } from '@/lib/config';

const stats = [
    { icon: 'fa-book',             value: config.total_publications,      label: 'Publications',              color: '#22d3ee' },
    { icon: 'fa-users',            value: config.student_teacher_ratio,   label: 'Student Teacher Ratio',     color: '#a78bfa' },
    { icon: 'fa-graduation-cap',   value: config.Intake,                  label: 'No. of Seats',              color: '#fbbf24' },
    { icon: 'fa-calendar',         value: config.total_workshops_org,     label: 'Events Organized',          color: '#22d3ee' },
    { icon: 'fa-trophy',           value: config.total_projects_and_grants, label: 'Projects & Grants Received', color: '#818cf8' },
];

export default function AboutUs() {
    return (
        <main id="main">
            <section id="about_us" className="wow fadeInUp" style={{ background: 'var(--bg)', padding: '90px 0 80px' }}>
                <div className="container">
                    {/* Badge */}
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <span className="ref-badge">
                            <i className="fa fa-info-circle" />
                            Institutional Overview
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="ref-heading" style={{ textAlign: 'center', marginBottom: '18px' }}>
                        About <span className="grad-cyan">Us</span>
                    </h2>

                    {/* Description */}
                    <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '16px', lineHeight: 1.8, maxWidth: '640px', margin: '0 auto 60px' }}>
                        {config.name_of_dept} (Estd. {config.dept_esta}) offers {config.dept_b_tech_seats} seats for aspiring AI and Machine Learning professionals.
                    </p>

                    {/* Stat cards — 5 in a row like reference */}
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {stats.map((s, i) => (
                            <div key={i} className="ref-card" style={{ flex: '1 1 160px', maxWidth: '200px', padding: '32px 16px 24px', textAlign: 'center', cursor: 'default' }}
                                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = s.color + '55'; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = `0 16px 40px rgba(0,0,0,.5), 0 0 20px ${s.color}18`; }}
                                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none'; }}
                            >
                                {/* Icon box */}
                                <div style={{ width: '52px', height: '52px', background: s.color + '18', border: `1px solid ${s.color}40`, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                                    <i className={`fa ${s.icon}`} style={{ color: s.color, fontSize: '22px' }} />
                                </div>
                                <div style={{ fontFamily: 'var(--font-h)', fontSize: '2.1rem', fontWeight: 800, color: '#f1f5f9', lineHeight: 1, marginBottom: '10px' }}>{s.value}</div>
                                <div style={{ fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1.2px', fontWeight: 600, lineHeight: 1.4 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
