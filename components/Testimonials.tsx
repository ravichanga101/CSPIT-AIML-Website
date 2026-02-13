export default function Testimonials() {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
       .scroll{
       padding-top:5px;
       padding-right:8px;
       height:275px;overflow:auto;
       }
       ::-webkit-scrollbar-track
       {
       //-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
       border-radius: 10px;
       //background-color: #F5F5F5;
       }
       ::-webkit-scrollbar
       {
       width: 5px;
       height:20px
       //background-color: #F5F5F5;
       }
       ::-webkit-scrollbar-thumb
       {
       border-radius: 10px;
       -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
       background-color: #D3D3D3;
       }
    `}} />
            <section id="testimonials" className="wow fadeInUp">
                <div className="container">
                    <div className="section-header">
                        <h2></h2>
                        <h2 style={{ paddingTop: '20px' }}>Testimonials</h2>
                        {/*          <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                */}
                    </div>
                    <div className="owl-carousel testimonials-carousel" suppressHydrationWarning>
                        <div className="testimonial-item">
                            <p className="scroll">
                                <img src="/img/quote-sign-left.png" className="quote-sign-left" alt="" />
                                I am delighted to share my heartfelt experience as a proud student of B.Tech, AIML
                                at CSPIT, Charotar University of Science and Technology. From the moment I stepped
                                onto the campus, I was captivated by the vibrant academic atmosphere and the
                                commitment of the faculty to fostering a culture of excellence. The importance given
                                to practical application, along with extra-curricular opportunities, has not only
                                enhanced my technical skills but also cultivated holistic development. The plethora
                                of extracurricular activities and events have not only allowed me to pursue my
                                passion but also provided a platform to develop essential life skills such as
                                teamwork, leadership, and effective communication. I am grateful for this
                                transformative journey and confident that the knowledge, skills, and values imbibed
                                here have become the cornerstone of my success in the professional world.
                                <img src="/img/quote-sign-right.png" className="quote-sign-right" alt="" />
                            </p>
                            {/* <img src="img/testimonial-1.png" className="testimonial-img" alt=""> */}
                            <h3>Pooja Mehta </h3>
                            <h4>Student</h4>
                        </div>
                        <div className="testimonial-item">
                            <p className="scroll">
                                <img src="/img/quote-sign-left.png" className="quote-sign-left" alt="" />
                                Being part of this esteemed department has truly been a transformative journey for
                                me, providing an enriching research environment and fostering a collaborative spirit
                                that has opened up numerous opportunities for academic and personal growth. The
                                collaborative atmosphere within the department has been a key factor in my
                                academic success. The emphasis on teamwork and knowledge sharing has allowed
                                me to engage in meaningful collaborations with fellow students and faculty
                                members. Additionally, the department&apos;s support for extracurricular activities has
                                provided me with a myriad of opportunities to participate in various clubs and
                                initiatives. These experiences have not only enhanced my technical skills but have
                                also allowed me to develop essential soft skills such as leadership, communication,
                                and teamwork.
                                <img src="/img/quote-sign-right.png" className="quote-sign-right" alt="" />
                            </p>
                            {/* <img src="img/testimonial-2.jpg" className="testimonial-img" alt=""> */}
                            <h3>Neel Shah</h3>
                            <h4>Student  </h4>
                        </div>
                        <div className="testimonial-item">
                            <p className="scroll">
                                <img src="/img/quote-sign-left.png" className="quote-sign-left" alt="" />
                                As a part of the AI &amp; ML department, I can confidently say that our department
                                offers a program specializing in AI and ML that provides students with ample
                                resources to pursue their passions in the field. The faculties here are committed to
                                providing practical, hands-on learning in Collaboration with leading tech companies
                                such as NVIDIA and incorporating innovative learning experiences such as MOOCs.
                                The program emphasizes collaboration and community, providing opportunities for
                                group projects and mentorship, and enabling students to learn and grow alongside
                                their peers. Students can build valuable relationships and connections that will
                                undoubtedly serve them well in the future.
                                <br />
                                <img src="/img/quote-sign-right.png" className="quote-sign-right" alt="" />
                            </p>
                            {/* <img src="img/testimonial-3.png" className="testimonial-img" alt=""> */}
                            <h3>BARAI AUM DHIRENBHAI
                                <br />
                            </h3>
                            <h4>Student</h4>
                        </div>
                        <div className="testimonial-item">
                            <p className="scroll">
                                <img src="/img/quote-sign-left.png" className="quote-sign-left" alt="" />
                                Our AI &amp; ML department features an exclusive program, offering students abundant
                                resources for dedicated pursuits in the field. Committed faculty members ensure
                                practical, hands-on learning, collaborating with tech leaders like Samatrix. Innovative
                                learning experiences, including NPTEL courses, enhance the curriculum&apos;s relevance.
                                Emphasizing collaboration, students engage in group projects and benefit from
                                mentorship, fostering a supportive community. The program not only imparts
                                technical skills but also encourages networking and personal growth. Joining us
                                opens avenues for students to build valuable connections, ensuring a future
                                brimming with success in the ever-evolving realms of AI and ML.
                                <img src="/img/quote-sign-right.png" className="quote-sign-right" alt="" />
                            </p>
                            {/* <img src="img/testimonial-4.png" className="testimonial-img" alt=""> */}
                            <h3>OM BAMBHROLIYA</h3>
                            <h4>Student  </h4>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}
