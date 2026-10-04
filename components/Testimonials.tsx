const testimonials = [
    { text: `I am delighted to share my heartfelt experience as a proud student of B.Tech, AIML at CSPIT. From the moment I stepped onto the campus, I was captivated by the vibrant academic atmosphere and the commitment of the faculty to fostering a culture of excellence. The importance given to practical application has not only enhanced my technical skills but also cultivated holistic development.`, name: 'Pooja Mehta', role: 'B.Tech AI-ML Student', color: '#0c2e8a' },
    { text: `Being part of this esteemed department has truly been a transformative journey for me, providing an enriching research environment and fostering a collaborative spirit that has opened up numerous opportunities for academic and personal growth. The emphasis on teamwork and knowledge sharing has allowed me to engage in meaningful collaborations with fellow students and faculty members.`, name: 'Neel Shah', role: 'B.Tech AI-ML Student', color: '#6d28d9' },
    { text: `As a part of the AI & ML department, I can confidently say that our department offers a program specializing in AI and ML that provides students with ample resources to pursue their passions. The faculties here are committed to providing practical, hands-on learning in collaboration with leading tech companies such as NVIDIA and incorporating innovative learning experiences such as MOOCs.`, name: 'Barai Aum Dhirenbhai', role: 'B.Tech AI-ML Student', color: '#059669' },
    { text: `Our AI & ML department features an exclusive program, offering students abundant resources for dedicated pursuits in the field. Committed faculty members ensure practical, hands-on learning, collaborating with tech leaders like Samatrix. Innovative learning experiences, including NPTEL courses, enhance the curriculum's relevance and foster a supportive community.`, name: 'Om Bambhroliya', role: 'B.Tech AI-ML Student', color: '#d97706' },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="wow fadeInUp" style={{ background: '#ffffff', padding: '90px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <span className="ref-badge"><i className="fa fa-quote-left" />Student Voices</span>
                </div>
                <h2 className="ref-heading" style={{ textAlign: 'center', marginBottom: '16px' }}>
                    What Students <span className="grad-cyan">Say</span>
                </h2>


                <div className="owl-carousel testimonials-carousel" suppressHydrationWarning>
                    {testimonials.map((t, i) => (
                        <div key={i} className="ref-card" style={{ padding: '32px', margin: '10px', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg,${t.color},transparent)` }} />
                            <div style={{ fontSize: '52px', color: t.color + '18', fontFamily: 'Georgia,serif', lineHeight: 1, marginBottom: '8px' }}>&ldquo;</div>
                            <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.8, height: '180px', overflow: 'auto', margin: '0 0 20px' }}>{t.text}</p>
                            <div style={{ borderTop: '1px solid rgba(15, 23, 42, 0.06)', paddingTop: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '40px', height: '40px', background: t.color + '10', border: `1px solid ${t.color}22`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <i className="fa fa-user" style={{ color: t.color, fontSize: '15px' }} />
                                </div>
                                <div>
                                    <div style={{ color: '#0f172a', fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '15px' }}>{t.name}</div>
                                    <div style={{ color: t.color, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, marginTop: '2px' }}>{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
