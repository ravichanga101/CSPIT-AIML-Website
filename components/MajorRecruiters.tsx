import { links } from '@/lib/config';

export default function MajorRecruiters() {
    return (
        <section id="clients" className="wow fadeInUp" style={{ background: 'var(--bg)', padding: '90px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <span className="ref-badge"><i className="fa fa-briefcase" />Placement Partners</span>
                </div>
                <h2 className="ref-heading" style={{ textAlign: 'center', marginBottom: '16px' }}>Major <span className="grad-cyan">Recruiters</span></h2>
                <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '15px', marginBottom: '50px' }}>
                    Our graduates are placed at top companies across the globe
                </p>
                <div className="owl-carousel clients-carousel" suppressHydrationWarning>
                    {Object.entries(links.recruiter).map(([key, value]) => (
                        <img key={key} src={value} alt="" />
                    ))}
                </div>
            </div>
        </section>
    );
}
