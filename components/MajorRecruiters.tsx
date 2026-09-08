import { links } from '@/lib/config';

export default function MajorRecruiters() {
    return (
        <section id="clients" className="wow fadeInUp" style={{
            background: 'var(--bg-surface)',
            padding: '80px 0',
        }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <div className="ds-badge" style={{ display: 'inline-flex' }}>
                        Placement Partners
                    </div>
                </div>
                <div className="section-header" style={{ marginBottom: '50px' }}>
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                    }}>
                        Major <span className="gradient-text">Recruiters</span>
                    </h2>
                </div>

                <div className="owl-carousel clients-carousel" suppressHydrationWarning>
                    {Object.entries(links.recruiter).map(([key, value]) => (
                        <img key={key} src={value} alt="" />
                    ))}
                </div>
            </div>
        </section>
    );
}
