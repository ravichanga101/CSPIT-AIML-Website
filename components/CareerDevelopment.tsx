export default function CareerDevelopment() {
    const activities = [
        'Internship Support',
        'Higher Education / Foreign Education Guidance',
        'Aptitude Training',
        'Soft Skills / Personality Development',
        'Mock Interview',
        'On-Campus and Off-Campus Recruitment',
        'Training for IELTS, TOEFL, GRE, GMAT, CAT, GPSC, UPSC and more',
    ];

    return (
        <section id="about" className="wow fadeInUp" style={{
            background: 'var(--bg-primary)',
            padding: '80px 0',
        }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <div className="ds-badge" style={{ display: 'inline-flex' }}>
                        Career Support
                    </div>
                </div>
                <div className="section-header" style={{ marginBottom: '40px' }}>
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                    }}>
                        Career Development & <span className="gradient-text">Placement</span>
                    </h2>
                </div>

                <div className="row" style={{ justifyContent: 'center' }}>
                    <div className="col-lg-10">
                        <div style={{
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-card)',
                            borderRadius: 'var(--radius-lg)',
                            padding: '36px 40px',
                        }}>
                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '15px',
                                lineHeight: 1.8,
                                marginBottom: '28px',
                            }}>
                                The Career Development and Placement Cell (CDPC) is a vital cell that supports students&apos; professional growth and connects them with lucrative opportunities. It provides career counseling, skill development workshops, resume-building assistance, interview preparation, and partnerships with employers. Its mission is to empower students with the resources and knowledge needed for a successful career journey.
                            </p>

                            <h5 style={{
                                color: 'var(--text-white)',
                                fontFamily: 'var(--font-display)',
                                fontWeight: 700,
                                fontSize: '16px',
                                marginBottom: '20px',
                            }}>Activities Carried Out:</h5>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '10px' }}>
                                {activities.map((activity, i) => (
                                    <div key={i} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        padding: '8px 0',
                                    }}>
                                        <i className="fa fa-check-circle" style={{
                                            color: 'var(--cyan-400)',
                                            fontSize: '14px',
                                            minWidth: '14px',
                                        }}></i>
                                        <span style={{
                                            color: 'var(--text-secondary)',
                                            fontSize: '14px',
                                        }}>{activity}</span>
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
