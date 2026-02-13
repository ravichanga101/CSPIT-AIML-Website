'use client';
export default function StudentClubs() {
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
                        <h2 style={{ paddingTop: '20px' }}>Student Clubs</h2>
                        <p>Empowering student excellence through innovation, collaboration, and achievement in technology and AI</p>
                    </div>

                    <div className="row">
                        {/* Club 1 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="achievement-item">
                                <div className="achievement-image">
                                    <img src="/img/clubs/IMG_0817.JPG" alt="Student Achievement" onError={(e) => e.currentTarget.src = '/img/portfolio/1.JPG'} />
                                    <div className="achievement-overlay">
                                        <i className="fa fa-trophy achievement-icon"></i>
                                    </div>
                                    {/* <div className="achievement-badge">Winner</div> */}
                                </div>
                                <div className="achievement-content">
                                    <h4>Innoveters Club</h4>
                                    <div className="student-course">Technical Innovation Club</div>
                                    <p>Fostering creativity and innovation among students through hands-on projects, workshops, and collaborative problem-solving experiences in emerging technologies.</p>
                                </div>
                            </div>
                        </div>

                        {/* Club 2 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="achievement-item">
                                <div className="achievement-image">
                                    <img src="/img/clubs/LOGO AI FOR ALL.jpg" alt="Student Achievement" onError={(e) => e.currentTarget.src = '/img/portfolio/2.JPG'} />
                                    <div className="achievement-overlay">
                                        <i className="fa fa-trophy achievement-icon"></i>
                                    </div>
                                    {/* <div className="achievement-badge">Winnner</div> */}
                                </div>
                                <div className="achievement-content">
                                    <h4>AI For All Club</h4>
                                    <div className="student-course">AI Awareness & Learning</div>
                                    <p>Democratizing artificial intelligence education for all students, promoting AI literacy and ethical AI practices through interactive sessions and real-world applications.</p>
                                </div>
                            </div>
                        </div>

                        {/* Club 3 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="achievement-item">
                                <div className="achievement-image">
                                    <img src="/img/clubs/Math for AI.JPG" alt="Student Achievement" onError={(e) => e.currentTarget.src = '/img/portfolio/3.JPG'} />
                                    <div className="achievement-overlay">
                                        <i className="fa fa-trophy achievement-icon"></i>
                                    </div>
                                    {/* <div className="achievement-badge">Winner</div> */}
                                </div>
                                <div className="achievement-content">
                                    <h4>Math For AI Club</h4>
                                    <div className="student-course">Mathematical Foundation</div>
                                    <p>Building strong mathematical foundations for artificial intelligence, exploring the critical role of mathematics in machine learning algorithms and AI model development.</p>
                                </div>
                            </div>
                        </div>


                    </div>



                    {/* View More Button
            <div className="row">
                <div className="col-12 text-center" style={{marginTop: '30px'}}>
                    <a href="?v=student_achievements_all" className="btn" style={{background: 'linear-gradient(45deg, #0c2e8a 0%, #29cca3 100%)', color: '#fff', padding: '12px 30px', borderRadius: '25px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.3s ease'}}>
                        View All Achievements
                    </a>
                </div>
            </div> */}
                </div>
            </section>
        </>
    );
}
