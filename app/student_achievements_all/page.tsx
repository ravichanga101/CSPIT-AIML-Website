'use client';

import { useState } from 'react';

export default function StudentAchievementsAll() {
    const [filter, setFilter] = useState('all');

    const achievements = [
        {
            category: 'competition',
            img: '/img/students/student1.jpg',
            onError: '/img/portfolio/1.JPG',
            title: 'Pankil, Neel and Sneh',
            course: 'B.Tech AI-ML, 2022',
            description: 'Winner Maverick Effect AI Challenge 2024, developed an innovative machine learning solution for healthcare diagnostics.',
            tag: 'Winner'
        },
        {
            category: 'competition',
            img: '/img/students/student2.jpg',
            onError: '/img/portfolio/2.JPG',
            title: 'AIML Girls Team',
            course: 'B.Tech AI-ML, 2023',
            description: 'AIML Girls team became the winner of Cricket tournament at charusat spoural competition',
            tag: 'Winner'
        },
        {
            category: 'competition',
            img: '/img/students/student3.jpg',
            onError: '/img/portfolio/3.JPG',
            title: 'Letscode',
            course: 'B.Tech AI-ML, 2023',
            description: 'Winner CVM University Hackathon 3.0 2024, developed an innovative solution for Life Science and Agriculture.',
            tag: 'Winner'
        },
        {
            category: 'topper',
            img: '/img/students/student4.jpg',
            onError: '/img/portfolio/4.jpg',
            title: 'Hari, Puja and Smit',
            course: 'B.Tech AI-ML, 2023',
            description: 'Toppers position in JUL-OCT-2024 NPTEL Course "DSA using JAVA"',
            tag: 'Topper'
        },
        {
            category: 'topper',
            img: '/img/students/student5.jpg',
            onError: '/img/portfolio/5.JPG',
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
                                    <div className="stat-number">5</div>
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
