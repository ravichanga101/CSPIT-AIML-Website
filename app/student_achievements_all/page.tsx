'use client';

import { useState } from 'react';

export default function StudentAchievementsAll() {
    const [filter, setFilter] = useState('all');

    const achievements = [
        {
            category: 'competition',
            img: '/img/students/student7.jpg',
            onError: '/img/photos/1.jpg',
            title: 'Tirth, Manan & Nil',
            course: 'B.Tech AI-ML, 2024',
            description: 'The Department of Artificial Intelligence and Machine Learning at CHARUSAT continues to create opportunities that bring classroom learning into practical and engaging experiences. MathFlow AI was one such initiative, connecting mathematical thinking with AI, coding, problem-solving, and creativity while encouraging students to explore beyond conventional methods. Congratulations to Tirth Bhanderi (D25AIML081), Manan Panchal (24AIML024) and Nil Lad (24AIML020) — our 1st Prize winners — for their excellent performance.',
            tag: '1st Prize'
        },
        {
            category: 'competition',
            img: '/img/students/student8.jpg',
            onError: '/img/photos/3.jpg',
            title: 'Jugal, Anshu, Jash & Devansh',
            course: 'B.Tech AI-ML, 2023',
            description: 'What happens when innovation meets purpose? At NEF Innovation 2025, our students showcased "Veerdhristi: Drone System for Defensive Strategy During Combat," a project that reflects the real potential of artificial intelligence beyond classrooms. This project is not just about building a drone — it is about solving complex, real-world challenges where precision, speed, and smart decision-making matter the most. By integrating AI with defense-focused applications, the team demonstrated how technology can enhance situational awareness and strategic response. Behind this achievement lies countless hours of ideation, problem-solving, testing, and teamwork. Guided by Dr. Nirav Bhatt, the team has set an example of what it means to turn knowledge into impactful innovation. This is not just a project — it is a step towards building technology that matters. Team: Jugal Lachhwani (23AIML033), Anshu Trivedi (23AIML072), Jash Kapadia (23AIML001), Devansh Khatri (23AIML028). Funded by CHARUSAT.',
            tag: 'NEF Innovation 2025'
        },
        {
            category: 'competition',
            img: '/img/students/student9.jpg',
            onError: '/img/photos/4.jpg',
            title: 'Vaanimitra Team',
            course: 'B.Tech AI-ML, 2023',
            description: 'In a country as diverse as India, language should never be a barrier to learning. At NEF Innovation 2025, our students introduced "Vaanimitra: Multilingual Interactive Tutor for Indian Languages," a project focused on making education more inclusive and accessible. This innovation is built on a powerful idea — that every learner deserves access to knowledge in a language they are comfortable with. By leveraging artificial intelligence, the project aims to bridge communication gaps and create a more personalized and engaging learning experience. The effort behind this achievement reflects deep understanding, thoughtful design, and a commitment to solving real societal challenges. It is not just about technology, but about impact and inclusivity. Mentored by Mr. Deep Mendha, the team has created something that goes beyond innovation and moves towards meaningful change. This is what the future of education looks like.',
            tag: 'NEF Innovation 2025'
        },
        {
            category: 'competition',
            img: '/img/students/student10.jpg',
            onError: '/img/photos/5.jpg',
            title: 'TejaLens Team',
            course: 'B.Tech AI-ML, 2023',
            description: 'Every innovation starts with a simple idea, but it grows through persistence, creativity, and belief. At NEF Innovation 2025, our students presented "TejaLens," a project that reflects a strong vision to create meaningful and impactful technology. The journey behind this achievement goes beyond just building a solution — it is about identifying a problem, understanding it deeply, and designing something that can truly make a difference. Through continuous learning, experimentation, and refinement, the team has shown what focused effort can achieve. Under the mentorship of Mr. Deep Mendha, this project stands as a reflection of innovation driven by purpose and clarity. It highlights how students today are not just learners, but creators shaping the future. Achievements like these are a reminder that innovation is not about resources, but about mindset and consistency. This is just the beginning of a much bigger journey ahead.',
            tag: 'NEF Innovation 2025'
        },
        {
            category: 'competition',
            img: '/img/students/student11.jpg',
            onError: '/img/photos/5.jpg',
            title: 'Smart Trolly Team',
            course: 'B.Tech AI-ML, 2023',
            description: 'Innovation is driven by the ability to identify everyday challenges and transform them into smart, practical solutions. At NEF Innovation 2025, our students presented "Smart Trolly," a project that reflects a thoughtful approach toward enhancing convenience and efficiency in daily life. By applying artificial intelligence to a common real-world problem, the team demonstrated how technology can simplify and improve everyday experiences. The effort and creativity behind this project are commendable, and it stands as a great example of student-led innovation with practical impact.',
            tag: 'NEF Innovation 2025'
        },
        {
            category: 'topper',
            img: '/img/students/student12.jpg',
            onError: '/img/photos/6.jpg',
            title: 'Devarshi Dave & Kaushal Savaliya',
            course: 'B.Tech AI-ML, 2022–23',
            description: 'The Department of Artificial Intelligence and Machine Learning at CHARUSAT is happy to share another academic accomplishment by our students. We congratulate Devarshi Dave (22AIML007) and Kaushal Savaliya (23AIML063) for qualifying the GATE examination. Devarshi Dave secured a score of 362, while Kaushal Savaliya achieved a score of 395 in Computer Science. This achievement is a testament to their hard work, academic excellence, and perseverance.',
            tag: 'GATE Qualified'
        },
        {
            category: 'topper',
            img: '/img/students/student13.jpg',
            onError: '/img/photos/7.jpg',
            title: 'Hiren, Harsh & Krushna',
            course: 'B.Tech AI-ML, 2022–23',
            description: 'The Department of Artificial Intelligence and Machine Learning at CHARUSAT is delighted to highlight another noteworthy academic accomplishment by our students. We extend our sincere congratulations to Hiren Modhvadia (22AIML023), Harsh Kakadiya (23AIML025), and Krushna Parmar (22AIML028) for successfully qualifying the GATE examination. Hiren Modhvadia secured scores of DA: 339 and CS: 447, Harsh Kakadiya achieved DA: 357 and CS: 355, and Krushna Parmar scored DA: 345 and CS: 318. Their success across multiple streams is truly remarkable.',
            tag: 'GATE Qualified'
        },
        {
            category: 'topper',
            img: '/img/students/student14.jpg',
            onError: '/img/photos/8.jpg',
            title: 'Devang Dhandhukiya & Kunjalben Vala',
            course: 'B.Tech AI-ML, 2022–23',
            description: 'The Department of Artificial Intelligence and Machine Learning at CHARUSAT is proud to highlight another noteworthy student accomplishment. We congratulate Devang Dhandhukiya (23AIML014) and Kunjalben Vala (22AIML058) for qualifying the GATE examination. Devang secured an outstanding score of 635 in DA, while Kunjalben achieved 321 in DA. Their performance is a reflection of dedication and rigorous preparation.',
            tag: 'GATE Qualified'
        },
        {
            category: 'topper',
            img: '/img/students/student15.jpg',
            onError: '/img/photos/9.jpg',
            title: 'Yash Davda & Hari Patel',
            course: 'B.Tech AI-ML, 2023',
            description: 'The Department of Artificial Intelligence and Machine Learning at CHARUSAT is proud to share a significant academic achievement by our students. We extend our sincere congratulations to Yash Davda (23AIML012) and Hari Patel (23AIML049) for successfully qualifying the GATE examination. Yash Davda secured an impressive score of 518, while Hari Patel achieved a score of 377. Their performance reflects not only their subject knowledge but also their consistent effort, discipline, and determination.',
            tag: 'GATE Qualified'
        },
        {
            category: 'competition',
            img: '/img/students/student16.jpg',
            onError: '/img/photos/1.jpg',
            title: 'Hasti Bhalodia & Mahi Patel',
            course: 'B.Tech AI-ML',
            description: 'The Department of Artificial Intelligence and Machine Learning is pleased to announce that our students, Hasti Bhalodia and Mahi Patel, have been awarded a grant of ₹4.7 Lakhs under the Entrepreneur-in-Residence (EiR) Program in Biomedical Imaging through the MeitY Startup Hub – GENESIS Scheme. This prestigious grant recognizes their entrepreneurial spirit and innovative approach to leveraging AI in biomedical imaging, a field with tremendous real-world impact. This achievement reflects the department\'s commitment to fostering student entrepreneurship and translating academic learning into meaningful ventures.',
            tag: '₹4.7L Grant'
        },
        {
            category: 'competition',
            img: '/img/students/student17.jpg',
            onError: '/img/photos/2.jpg',
            title: 'Team HACKICONICS',
            course: 'B.Tech AI-ML',
            description: 'Celebrating innovation, teamwork, and excellence in AI! The Department of AIML proudly congratulates Team HACKICONICS for securing 2nd place at the WiBD GenAI Builders Hackathon 2026, held on 7th February 2026. This achievement is a testament to the team\'s creativity, technical depth, and ability to build impactful solutions using Generative AI. It reflects the department\'s focus on equipping students with cutting-edge AI skills that are relevant to industry and innovation.',
            tag: '2nd Place'
        },
        {
            category: 'competition',
            img: '/img/students/student18.jpg',
            onError: '/img/photos/3.jpg',
            title: 'Hriday, Anshu & Jugal',
            course: 'B.Tech AI-ML, 2023',
            description: 'We are happy to share that the team from CSPIT (AIML), CHARUSAT secured 1st place at the Odoo Gujarat Vidyapith 24-hour Hackathon 2026, organized by Odoo at Gujarat Vidyapith. This is a proud moment for the department and the institute. The team was awarded a cash prize of ₹45,000 for their outstanding performance. Their ability to ideate, build, and deliver a complete solution within 24 hours reflects strong technical skills, teamwork, and determination.',
            tag: '1st Place – ₹45,000'
        },
        {
            category: 'competition',
            img: '/img/students/student19.jpg',
            onError: '/img/photos/4.jpg',
            title: 'Team Coding Chimps',
            course: 'B.Tech AI-ML',
            description: 'The Department of Artificial Intelligence and Machine Learning, CSPIT, CHARUSAT, is proud to announce the achievement of team Coding Chimps at the DECODE X 24hr Hackathon, organized by N L Dalmia Institute of Management Studies and Research, held from February 28 to March 1, 2026. This participation and achievement demonstrates the team\'s technical excellence, problem-solving ability, and readiness to compete at national-level platforms.',
            tag: 'DECODE X 2026'
        },
        {
            category: 'competition',
            img: '/img/students/student1.jpg',
            onError: '/img/photos/2.jpg',
            title: 'Pankil, Neel and Sneh',
            course: 'B.Tech AI-ML, 2022',
            description: 'Winner Maverick Effect AI Challenge 2024, developed an innovative machine learning solution for healthcare diagnostics.',
            tag: 'Winner'
        },
        {
            category: 'competition',
            img: '/img/students/student2.jpg',
            onError: '/img/photos/3.jpg',
            title: 'AIML Girls Team',
            course: 'B.Tech AI-ML, 2023',
            description: 'AIML Girls team became the winner of Cricket tournament at charusat spoural competition',
            tag: 'Winner'
        },
        {
            category: 'competition',
            img: '/img/students/student3.jpg',
            onError: '/img/photos/4.jpg',
            title: 'Letscode',
            course: 'B.Tech AI-ML, 2023',
            description: 'Winner CVM University Hackathon 3.0 2024, developed an innovative solution for Life Science and Agriculture.',
            tag: 'Winner'
        },
        {
            category: 'topper',
            img: '/img/students/student4.jpg',
            onError: '/img/photos/5.jpg',
            title: 'Hari, Puja and Smit',
            course: 'B.Tech AI-ML, 2023',
            description: 'Toppers position in JUL-OCT-2024 NPTEL Course "DSA using JAVA"',
            tag: 'Topper'
        },
        {
            category: 'topper',
            img: '/img/students/student5.jpg',
            onError: '/img/photos/6.jpg',
            title: 'Kashak and Yash',
            course: 'B.Tech AI-ML, 2024',
            description: 'Toppers position in JAN-APR-2025 NPTEL Course "Database Management System"',
            tag: 'Topper'
        }
    ];

    const filtered = filter === 'all'
        ? achievements
        : achievements.filter(item => item.category === filter);

    return (
        <main id="main">
            <style dangerouslySetInnerHTML={{
                __html: `
        #student-achievements-all {
          padding: 60px 0 30px 0;
          background: #f8f9fa;
        }

        .achievement-item-full {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.08);
          margin-bottom: 40px;
          overflow: hidden;
          transition: all 0.3s ease-in-out;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .achievement-item-full:hover {
          transform: translateY(-8px);
          box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.15);
        }

        .achievement-row {
          display: flex;
          align-items: center;
          padding: 0;
        }

        .achievement-image-full {
          flex: 0 0 200px;
          height: 200px;
          overflow: hidden;
          position: relative;
        }

        .achievement-image-full img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.3s ease-in-out;
        }

        .achievement-item-full:hover .achievement-image-full img {
          transform: scale(1.1);
        }

        .achievement-content-full {
          flex: 1;
          padding: 30px;
        }

        .achievement-content-full h3 {
          font-size: 24px;
          font-weight: 700;
          color: #0c2e8a;
          margin-bottom: 8px;
          font-family: "Montserrat", sans-serif;
        }

        .achievement-course-full {
          color: #29cca3;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .achievement-description-full {
          color: #666;
          font-size: 16px;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .achievement-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .achievement-tag {
          background: linear-gradient(45deg, #0c2e8a 0%, #29cca3 100%);
          color: #fff;
          padding: 6px 15px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .filter-buttons {
          text-align: center;
          margin-bottom: 50px;
        }

        .filter-btn {
          background: #fff;
          border: 2px solid #0c2e8a;
          color: #0c2e8a;
          padding: 10px 25px;
          margin: 5px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: linear-gradient(45deg, #0c2e8a 0%, #29cca3 100%);
          color: #fff;
          border-color: transparent;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .achievement-row {
            flex-direction: column;
          }
          
          .achievement-image-full {
            flex: none;
            width: 100%;
            height: 250px;
          }
          
          .achievement-content-full {
            padding: 20px;
          }
          
          .achievement-content-full h3 {
            font-size: 20px;
          }
        }

        .stats-section {
          background: linear-gradient(45deg, #0c2e8a 0%, #29cca3 100%);
          color: #fff;
          padding: 60px 0;
          margin-bottom: 60px;
        }

        .stat-item {
          text-align: center;
          padding: 20px;
        }

        .stat-number {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 10px;
          font-family: "Montserrat", sans-serif;
        }

        .stat-label {
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        `}} />

            <section id="student-achievements-all">
                <div className="container">
                    <div className="section-header">
                        <h2 style={{ paddingTop: '20px' }}>All Student Achievements</h2>
                        <p>Discover the complete collection of our students' outstanding accomplishments and success stories</p>
                    </div>

                    {/* Statistics Section */}
                    <div className="stats-section">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="stat-item">
                                    <div className="stat-number">18</div>
                                    <div className="stat-label">Awards Won</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="stat-item">
                                    <div className="stat-number">0</div>
                                    <div className="stat-label">Research Papers</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="stat-item">
                                    <div className="stat-number">98%</div>
                                    <div className="stat-label">Placement Rate</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="stat-item">
                                    <div className="stat-number">0</div>
                                    <div className="stat-label">Startups Founded</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Filter Buttons */}
                    <div className="filter-buttons">
                        <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
                        <button className={`filter-btn ${filter === 'competition' ? 'active' : ''}`} onClick={() => setFilter('competition')}>Competitions</button>
                        <button className={`filter-btn ${filter === 'research' ? 'active' : ''}`} onClick={() => setFilter('research')}>Research</button>
                        <button className={`filter-btn ${filter === 'startup' ? 'active' : ''}`} onClick={() => setFilter('startup')}>Startups</button>
                        <button className={`filter-btn ${filter === 'placement' ? 'active' : ''}`} onClick={() => setFilter('placement')}>Placements</button>
                        <button className={`filter-btn ${filter === 'scholarship' ? 'active' : ''}`} onClick={() => setFilter('scholarship')}>Scholarships</button>
                        <button className={`filter-btn ${filter === 'topper' ? 'active' : ''}`} onClick={() => setFilter('topper')}>Topper</button>
                    </div>

                    {/* Achievements List */}
                    <div className="achievements-container">
                        {filtered.map((item, index) => (
                            <div key={index} className="achievement-item-full" data-category={item.category}>
                                <div className="achievement-row">
                                    <div className="achievement-image-full">
                                        <img src={item.img} alt={item.title} onError={(e) => e.currentTarget.src = item.onError} />
                                    </div>
                                    <div className="achievement-content-full">
                                        <h3>{item.title}</h3>
                                        <div className="achievement-course-full">{item.course}</div>
                                        <div className="achievement-description-full">
                                            {item.description}
                                        </div>
                                        <div className="achievement-tags">
                                            <span className="achievement-tag">{item.tag}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
