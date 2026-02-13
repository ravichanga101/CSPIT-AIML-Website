'use client';
export default function StudentAchievements() {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
        #student-achievements {
            padding: 60px 0 30px 0;
            background: #f8f9fa;
        }
    
        #student-achievements .achievement-item {
            background: #fff;
            border-radius: 8px;
            box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
            margin-bottom: 30px;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            position: relative;
        }
    
        #student-achievements .achievement-item:hover {
            transform: translateY(-5px);
            box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.15);
        }
    
        #student-achievements .achievement-image {
            position: relative;
            overflow: hidden;
            height: 250px;
        }
    
        #student-achievements .achievement-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.3s ease-in-out;
        }
    
        #student-achievements .achievement-item:hover .achievement-image img {
            transform: scale(1.05);
        }
    
        #student-achievements .achievement-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, rgba(12, 46, 138, 0.8) 0%, rgba(41, 204, 163, 0.8) 100%);
            opacity: 0;
            transition: all 0.3s ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    
        #student-achievements .achievement-item:hover .achievement-overlay {
            opacity: 1;
        }
    
        #student-achievements .achievement-badge {
            position: absolute;
            top: 15px;
            right: 15px;
            background: linear-gradient(45deg, #0c2e8a 0%, #29cca3 100%);
            color: #fff;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
    
        #student-achievements .achievement-content {
            padding: 25px;
            text-align: center;
        }
    
        #student-achievements .achievement-content h4 {
            font-size: 20px;
            font-weight: 700;
            color: #0c2e8a;
            margin-bottom: 10px;
            font-family: "Montserrat", sans-serif;
        }
    
        #student-achievements .achievement-content .student-course {
            color: #29cca3;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
    
        #student-achievements .achievement-content p {
            color: #666;
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 0;
        }
    
        #student-achievements .achievement-icon {
            font-size: 48px;
            color: #fff;
        }
    
        /* Responsive design */
        @media (max-width: 768px) {
            #student-achievements .achievement-image {
                height: 200px;
            }
    
            #student-achievements .achievement-content {
                padding: 20px 15px;
            }
    
            #student-achievements .achievement-content h4 {
                font-size: 18px;
            }
        }
    
        /* Animation for section reveal */
        .achievement-item {
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.6s ease-out forwards;
        }
    
        .achievement-item:nth-child(1) {
            animation-delay: 0.1s;
        }
    
        .achievement-item:nth-child(2) {
            animation-delay: 0.2s;
        }
    
        .achievement-item:nth-child(3) {
            animation-delay: 0.3s;
        }
    
        .achievement-item:nth-child(4) {
            animation-delay: 0.4s;
        }
    
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `}} />

            <section id="student-achievements" className="wow fadeInUp">
                <div className="container">
                    <div className="section-header">
                        <h2 style={{ paddingTop: '20px' }}>Student Achievements</h2>
                        <p>Celebrating our outstanding students and their remarkable accomplishments</p>
                    </div>

                    <div className="row">
                        {/* Achievement 1 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="achievement-item">
                                <div className="achievement-image">
                                    <img src="/img/students/student1.jpg" alt="Student Achievement" onError={(e) => e.currentTarget.src = '/img/portfolio/1.JPG'} />
                                    <div className="achievement-overlay">
                                        <i className="fa fa-trophy achievement-icon"></i>
                                    </div>
                                    <div className="achievement-badge">Winner</div>
                                </div>
                                <div className="achievement-content">
                                    <h4>Pankil, Neel and Sneh</h4>
                                    <div className="student-course">B.Tech AI-ML, 2022</div>
                                    <p>Winner Maverick Effect AI Challenge 2024, developed an innovative machine learning solution for healthcare diagnostics.</p>
                                </div>
                            </div>
                        </div>

                        {/* Achievement 2 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="achievement-item">
                                <div className="achievement-image">
                                    <img src="/img/students/student2.jpg" alt="Student Achievement" onError={(e) => e.currentTarget.src = '/img/portfolio/2.JPG'} />
                                    <div className="achievement-overlay">
                                        <i className="fa fa-medal achievement-icon"></i>
                                    </div>
                                    <div className="achievement-badge">Winnner</div>
                                </div>
                                <div className="achievement-content">
                                    <h4>AIML Girls Team</h4>
                                    <div className="student-course">B.Tech AI-ML, 2023</div>
                                    <p>AIML Girls team became the winner of Cricket tournament at charusat spoural competition</p>
                                </div>
                            </div>
                        </div>

                        {/* Achievement 3 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="achievement-item">
                                <div className="achievement-image">
                                    <img src="/img/students/student3.jpg" alt="Student Achievement" onError={(e) => e.currentTarget.src = '/img/portfolio/3.JPG'} />
                                    <div className="achievement-overlay">
                                        <i className="fa fa-star achievement-icon"></i>
                                    </div>
                                    <div className="achievement-badge">Winner</div>
                                </div>
                                <div className="achievement-content">
                                    <h4>Letscode</h4>
                                    <div className="student-course">B.Tech AI-ML, 2023</div>
                                    <p>Winner CVM University Hackathon 3.0 2024, developed an innovative solution for Life Science and Agriculture..</p>
                                </div>
                            </div>
                        </div>

                        {/* Achievement 4 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="achievement-item">
                                <div className="achievement-image">
                                    <img src="/img/students/student4.jpg" alt="Student Achievement" onError={(e) => e.currentTarget.src = '/img/portfolio/4.jpg'} />
                                    <div className="achievement-overlay">
                                        <i className="fa fa-rocket achievement-icon"></i>
                                    </div>
                                    <div className="achievement-badge">Topper</div>
                                </div>
                                <div className="achievement-content">
                                    <h4>Hari, Puja and Smit</h4>
                                    <div className="student-course">B.Tech AI-ML, 2023</div>
                                    <p>Toppers position in JUL-OCT-2024 NPTEL Course &quot;DSA using JAVA&quot;</p>
                                </div>
                            </div>
                        </div>

                        {/* Achievement 5 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="achievement-item">
                                <div className="achievement-image">
                                    <img src="/img/students/student5.jpg" alt="Student Achievement" onError={(e) => e.currentTarget.src = '/img/portfolio/5.JPG'} />
                                    <div className="achievement-overlay">
                                        <i className="fa fa-graduation-cap achievement-icon"></i>
                                    </div>
                                    <div className="achievement-badge">Topper</div>
                                </div>
                                <div className="achievement-content">
                                    <h4>Kashak and Yash</h4>
                                    <div className="student-course">B.Tech AI-ML, 2024</div>
                                    <p>Toppers position in JAN-APR-2025 NPTEL Course &quot;Database Management System&quot;</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="achievement-item">
                                <div className="achievement-image">
                                    <img src="/img/students/student6.jpg" alt="Student Achievement" onError={(e) => e.currentTarget.src = '/img/portfolio/4.jpg'} />
                                    <div className="achievement-overlay">
                                        <i className="fa fa-trophy achievement-icon"></i>
                                    </div>
                                    <div className="achievement-badge">Winner</div>
                                </div>
                                <div className="achievement-content">
                                    <h4>Pradeep Chandravadiya</h4>
                                    <div className="student-course">B.Tech AI-ML, 2023</div>
                                    <p>First Runner-up in Hackathon Conducted by Odoo x Amalthea at IIT Gandhinagar</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* View More Button */}
                    <div className="row">
                        <div className="col-12 text-center" style={{ marginTop: '30px' }}>
                            <a href="?v=student_achievements_all" className="btn" style={{ background: 'linear-gradient(45deg, #0c2e8a 0%, #29cca3 100%)', color: '#fff', padding: '12px 30px', borderRadius: '25px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                                View All Achievements
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
