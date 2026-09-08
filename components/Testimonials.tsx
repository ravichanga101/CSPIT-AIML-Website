export default function Testimonials() {
    const testimonials = [
        {
            text: `I am delighted to share my heartfelt experience as a proud student of B.Tech, AIML at CSPIT, Charotar University of Science and Technology. From the moment I stepped onto the campus, I was captivated by the vibrant academic atmosphere and the commitment of the faculty to fostering a culture of excellence. The importance given to practical application, along with extra-curricular opportunities, has not only enhanced my technical skills but also cultivated holistic development. The plethora of extracurricular activities and events have not only allowed me to pursue my passion but also provided a platform to develop essential life skills such as teamwork, leadership, and effective communication. I am grateful for this transformative journey and confident that the knowledge, skills, and values imbibed here have become the cornerstone of my success in the professional world.`,
            name: 'Pooja Mehta',
            role: 'Student',
        },
        {
            text: `Being part of this esteemed department has truly been a transformative journey for me, providing an enriching research environment and fostering a collaborative spirit that has opened up numerous opportunities for academic and personal growth. The collaborative atmosphere within the department has been a key factor in my academic success. The emphasis on teamwork and knowledge sharing has allowed me to engage in meaningful collaborations with fellow students and faculty members. Additionally, the department's support for extracurricular activities has provided me with a myriad of opportunities to participate in various clubs and initiatives. These experiences have not only enhanced my technical skills but have also allowed me to develop essential soft skills such as leadership, communication, and teamwork.`,
            name: 'Neel Shah',
            role: 'Student',
        },
        {
            text: `As a part of the AI & ML department, I can confidently say that our department offers a program specializing in AI and ML that provides students with ample resources to pursue their passions in the field. The faculties here are committed to providing practical, hands-on learning in Collaboration with leading tech companies such as NVIDIA and incorporating innovative learning experiences such as MOOCs. The program emphasizes collaboration and community, providing opportunities for group projects and mentorship, and enabling students to learn and grow alongside their peers. Students can build valuable relationships and connections that will undoubtedly serve them well in the future.`,
            name: 'BARAI AUM DHIRENBHAI',
            role: 'Student',
        },
        {
            text: `Our AI & ML department features an exclusive program, offering students abundant resources for dedicated pursuits in the field. Committed faculty members ensure practical, hands-on learning, collaborating with tech leaders like Samatrix. Innovative learning experiences, including NPTEL courses, enhance the curriculum's relevance. Emphasizing collaboration, students engage in group projects and benefit from mentorship, fostering a supportive community. The program not only imparts technical skills but also encourages networking and personal growth. Joining us opens avenues for students to build valuable connections, ensuring a future brimming with success in the ever-evolving realms of AI and ML.`,
            name: 'OM BAMBHROLIYA',
            role: 'Student',
        },
    ];

    return (
        <section id="testimonials" className="wow fadeInUp" style={{
            background: 'var(--bg-surface)',
            padding: '80px 0',
        }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <div className="ds-badge" style={{ display: 'inline-flex' }}>
                        Student Voices
                    </div>
                </div>
                <div className="section-header" style={{ marginBottom: '50px' }}>
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                    }}>
                        <span className="gradient-text">Testimonials</span>
                    </h2>
                </div>

                <div className="owl-carousel testimonials-carousel" suppressHydrationWarning>
                    {testimonials.map((t, i) => (
                        <div key={i} className="testimonial-item" style={{
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-card)',
                            borderRadius: 'var(--radius-lg)',
                            padding: '32px',
                            margin: '10px',
                            position: 'relative',
                        }}>
                            {/* Quote icon */}
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                right: '24px',
                                fontSize: '48px',
                                color: 'rgba(6, 182, 212, 0.1)',
                                fontFamily: 'Georgia, serif',
                                lineHeight: 1,
                            }}>&ldquo;</div>

                            <p className="scroll" style={{
                                color: 'var(--text-secondary)',
                                fontSize: '14px',
                                lineHeight: 1.7,
                                height: '250px',
                                overflow: 'auto',
                                paddingRight: '8px',
                                paddingTop: '5px',
                            }}>
                                {t.text}
                            </p>
                            <div style={{
                                borderTop: '1px solid var(--border-subtle)',
                                paddingTop: '16px',
                                marginTop: '16px',
                            }}>
                                <h3 style={{
                                    color: 'var(--text-white)',
                                    fontFamily: 'var(--font-display)',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    margin: '0 0 4px 0',
                                }}>{t.name}</h3>
                                <h4 style={{
                                    color: 'var(--cyan-400)',
                                    fontSize: '12px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    fontWeight: 500,
                                    margin: 0,
                                }}>{t.role}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
