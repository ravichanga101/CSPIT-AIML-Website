import { links } from '@/lib/config';

export default function MajorRecruiters() {
    return (
        <section id="clients" className="wow fadeInUp">
            <div className="container">
                <div className="section-header">
                    <h2></h2><h2 style={{ paddingTop: '20px' }}>Major Recruiters</h2>
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
