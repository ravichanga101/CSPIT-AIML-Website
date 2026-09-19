const activities = [
    { icon: 'fa-suitcase', text: 'Internship Support' },
    { icon: 'fa-plane', text: 'Higher Education / Foreign Education Guidance' },
    { icon: 'fa-pencil-square-o', text: 'Aptitude Training' },
    { icon: 'fa-user', text: 'Soft Skills / Personality Development' },
    { icon: 'fa-microphone', text: 'Mock Interview' },
    { icon: 'fa-building', text: 'On-Campus and Off-Campus Recruitment' },
    { icon: 'fa-book', text: 'Training for IELTS, TOEFL, GRE, GMAT, CAT, GPSC, UPSC and more' },
];

export default function CareerDevelopment() {
    return (
        <section id="about" className="wow fadeInUp" style={{ background: 'var(--bg)', padding: '90px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <span className="ref-badge"><i className="fa fa-line-chart" />Career Support</span>
                </div>
                <h2 className="ref-heading" style={{ textAlign: 'center', marginBottom: '52px' }}>Career Development &amp; <span className="grad-cyan">Placement</span></h2>

                <div className="row" style={{ justifyContent: 'center' }}>
                    <div className="col-lg-10">
                        {/* Description card */}
                        <div style={{
                            background: 'var(--bg-card)', border: '1px solid rgba(34,211,238,0.1)',
                            borderRadius: '16px', padding: '36px 40px', marginBottom: '24px',
                            position: 'relative', overflow: 'hidden',
                        }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(135deg,#06b6d4,#22d3ee)' }} />
                            <p style={{ color: '#8b99b0', fontSize: '15px', lineHeight: 1.8, margin: 0 }}>
                                The Career Development and Placement Cell (CDPC) supports students&apos; professional growth and connects them with lucrative opportunities. It provides career counseling, skill development workshops, resume-building assistance, interview preparation, and partnerships with employers.
                            </p>
                        </div>

                        {/* Activities grid */}
                        <div style={{
                            background: 'var(--bg-card)', border: '1px solid rgba(34,211,238,0.08)',
                            borderRadius: '16px', padding: '32px 40px',
                        }}>
                            <h5 style={{ color: '#f0f6fc', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px', marginBottom: '24px' }}>
                                Activities Carried Out
                            </h5>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '12px' }}>
                                {activities.map((a, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'rgba(6,182,212,0.05)', borderRadius: '10px', border: '1px solid rgba(6,182,212,0.08)' }}>
                                        <div style={{ width: '32px', height: '32px', minWidth: '32px', background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.25)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <i className={`fa ${a.icon}`} style={{ color: '#22d3ee', fontSize: '13px' }} />
                                        </div>
                                        <span style={{ color: '#8b99b0', fontSize: '13px', lineHeight: 1.4 }}>{a.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
