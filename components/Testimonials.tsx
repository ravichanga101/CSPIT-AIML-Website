const testimonials = [
    { text: `I am delighted to share my heartfelt experience as a proud student of B.Tech, AIML at CSPIT, Charotar University of Science and Technology. From the moment I stepped onto the campus, I was captivated by the vibrant academic atmosphere and the commitment of the faculty to fostering a culture of excellence. The importance given to practical application, along with extra-curricular opportunities, has not only enhanced my technical skills but also cultivated holistic development.`, name: 'Pooja Mehta', role: 'B.Tech AI-ML Student' },
    { text: `Being part of this esteemed department has truly been a transformative journey for me, providing an enriching research environment and fostering a collaborative spirit that has opened up numerous opportunities for academic and personal growth. The collaborative atmosphere within the department has been a key factor in my academic success. The emphasis on teamwork and knowledge sharing has allowed me to engage in meaningful collaborations with fellow students and faculty members.`, name: 'Neel Shah', role: 'B.Tech AI-ML Student' },
    { text: `As a part of the AI & ML department, I can confidently say that our department offers a program specializing in AI and ML that provides students with ample resources to pursue their passions in the field. The faculties here are committed to providing practical, hands-on learning in collaboration with leading tech companies such as NVIDIA and incorporating innovative learning experiences such as MOOCs.`, name: 'Barai Aum Dhirenbhai', role: 'B.Tech AI-ML Student' },
    { text: `Our AI & ML department features an exclusive program, offering students abundant resources for dedicated pursuits in the field. Committed faculty members ensure practical, hands-on learning, collaborating with tech leaders like Samatrix. Innovative learning experiences, including NPTEL courses, enhance the curriculum's relevance. Emphasizing collaboration, students engage in group projects and benefit from mentorship, fostering a supportive community.`, name: 'Om Bambhroliya', role: 'B.Tech AI-ML Student' },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="wow fadeInUp" style={{ background: 'var(--bg-primary)', padding: '90px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.25)',
                        borderRadius: '9999px', padding: '6px 18px', fontSize: '11px',
                        fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' as const,
                        color: '#22d3ee', fontFamily: 'var(--font-body)',
                    }}>
                        <i className="fa fa-quote-left" style={{ fontSize: '11px' }} />
                        Student Voices
                    </span>
                </div>
                <h2 style={{
                    textAlign: 'center', fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 800,
                    color: '#f0f6fc', letterSpacing: '-0.03em', marginBottom: '16px',
                }}>
                    What Students{' '}
                    <span style={{ background: 'linear-gradient(135deg,#06b6d4,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        Say
                    </span>
                </h2>
                <p style={{ textAlign: 'center', color: '#8b99b0', fontSize: '15px', marginBottom: '50px' }}>
                    Hear from our students about their experience at CSPIT AI-ML
                </p>

                <div className="owl-carousel testimonials-carousel" suppressHydrationWarning>
                    {testimonials.map((t, i) => (
                        <div key={i} style={{
                            background: '#0d1530', border: '1px solid rgba(34,211,238,0.1)',
                            borderRadius: '16px', padding: '32px', margin: '10px',
                            position: 'relative', overflow: 'hidden',
                        }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(135deg,#06b6d4,#22d3ee)' }} />
                            {/* Big quote */}
                            <div style={{ fontSize: '56px', color: 'rgba(6,182,212,0.15)', fontFamily: 'Georgia,serif', lineHeight: 1, marginBottom: '8px' }}>&ldquo;</div>
                            <p style={{
                                color: '#8b99b0', fontSize: '14px', lineHeight: 1.8,
                                height: '200px', overflow: 'auto', paddingRight: '4px', margin: '0 0 20px',
                            }}>{t.text}</p>
                            <div style={{ borderTop: '1px solid rgba(34,211,238,0.1)', paddingTop: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg,#06b6d4,#22d3ee)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <i className="fa fa-user" style={{ color: '#060b18', fontSize: '16px' }} />
                                </div>
                                <div>
                                    <h3 style={{ color: '#f0f6fc', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', margin: '0 0 2px' }}>{t.name}</h3>
                                    <h4 style={{ color: '#22d3ee', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, margin: 0 }}>{t.role}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
