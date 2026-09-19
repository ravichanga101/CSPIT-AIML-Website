'use client';

const achievements = [
    { img: '/img/students/student7.jpg', fallback: '/img/photos/1.jpg',  badge: '1st Prize',  badgeColor: '#fbbf24', name: 'Tirth, Manan & Nil',             course: 'B.Tech AI-ML, 2024', desc: '1st Prize winners at MathFlow AI — connecting mathematical thinking with AI, coding, and creative problem-solving at CHARUSAT.' },
    { img: '/img/students/student8.jpg', fallback: '/img/photos/2.jpg',  badge: 'NEF 2025',   badgeColor: '#4ade80', name: 'Jugal, Anshu, Jash & Devansh',    course: 'B.Tech AI-ML, 2023', desc: 'Showcased "Veerdhristi: Drone System for Defensive Strategy During Combat" at NEF Innovation 2025 — AI-powered defense tech guided by Dr. Nirav Bhatt.' },
    { img: '/img/students/student9.jpg', fallback: '/img/photos/3.jpg',  badge: 'NEF 2025',   badgeColor: '#818cf8', name: 'Vaanimitra Team',                  course: 'B.Tech AI-ML, 2023', desc: 'Presented "Vaanimitra: Multilingual Interactive Tutor for Indian Languages" at NEF Innovation 2025 — making education inclusive through AI, mentored by Mr. Deep Mendha.' },
    { img: '/img/students/student10.jpg', fallback: '/img/photos/4.jpg',  badge: 'NEF 2025',   badgeColor: '#fb923c', name: 'TejaLens Team',                    course: 'B.Tech AI-ML, 2023', desc: 'Presented "TejaLens" at NEF Innovation 2025 — purpose-driven innovation designed to make a meaningful difference, mentored by Mr. Deep Mendha.' },
    { img: '/img/students/student11.jpg', fallback: '/img/photos/5.jpg',  badge: 'NEF 2025',   badgeColor: '#34d399', name: 'Smart Trolly Team',                course: 'B.Tech AI-ML, 2023', desc: 'Presented "Smart Trolly" at NEF Innovation 2025 — transforming everyday convenience through intelligent, practical AI-driven design.' },
    { img: '/img/students/student12.jpg', fallback: '/img/photos/6.jpg',  badge: 'GATE',       badgeColor: '#60a5fa', name: 'Devarshi Dave & Kaushal Savaliya', course: 'B.Tech AI-ML, 2022–23', desc: 'GATE qualified — Devarshi Dave (22AIML007) scored 362 and Kaushal Savaliya (23AIML063) scored 395 in Computer Science.' },
    { img: '/img/students/student13.jpg', fallback: '/img/photos/7.jpg',  badge: 'GATE',       badgeColor: '#60a5fa', name: 'Hiren, Harsh & Krushna',          course: 'B.Tech AI-ML, 2022–23', desc: 'GATE qualified — Hiren Modhvadia (DA:339, CS:447), Harsh Kakadiya (DA:357, CS:355), Krushna Parmar (DA:345, CS:318).' },
    { img: '/img/students/student14.jpg', fallback: '/img/photos/8.jpg',  badge: 'GATE',       badgeColor: '#60a5fa', name: 'Devang Dhandhukiya & Kunjalben Vala', course: 'B.Tech AI-ML, 2022–23', desc: 'GATE qualified — Devang Dhandhukiya (23AIML014) scored 635 in DA, Kunjalben Vala (22AIML058) scored 321 in DA.' },
    { img: '/img/students/student15.jpg', fallback: '/img/photos/9.jpg',  badge: 'GATE',       badgeColor: '#60a5fa', name: 'Yash Davda & Hari Patel',         course: 'B.Tech AI-ML, 2023', desc: 'GATE qualified — Yash Davda (23AIML012) scored 518 and Hari Patel (23AIML049) scored 377, reflecting discipline and consistent effort.' },
    { img: '/img/students/student16.jpg', fallback: '/img/photos/1.jpg',  badge: '₹4.7L Grant', badgeColor: '#f472b6', name: 'Hasti Bhalodia & Mahi Patel',       course: 'B.Tech AI-ML',          desc: 'Awarded ₹4.7 Lakhs grant under MeitY Startup Hub – GENESIS Scheme\'s EiR Program in Biomedical Imaging — turning entrepreneurial vision into reality.' },
    { img: '/img/students/student17.jpg', fallback: '/img/photos/2.jpg',  badge: '2nd Place',   badgeColor: '#a78bfa', name: 'Team HACKICONICS',                  course: 'B.Tech AI-ML',          desc: '2nd place at WiBD GenAI Builders Hackathon 2026 (7th Feb 2026) — showcasing innovation, teamwork, and excellence in Generative AI.' },
    { img: '/img/students/student18.jpg', fallback: '/img/photos/3.jpg',  badge: '1st Place',   badgeColor: '#fbbf24', name: 'Hriday, Anshu & Jugal',            course: 'B.Tech AI-ML, 2023',    desc: '1st place & ₹45,000 cash prize at Odoo Gujarat Vidyapith 24-hour Hackathon 2026 — a proud moment for CSPIT AIML, CHARUSAT.' },
    { img: '/img/students/student19.jpg', fallback: '/img/photos/4.jpg',  badge: 'Winner',      badgeColor: '#22d3ee', name: 'Team Coding Chimps',                course: 'B.Tech AI-ML',          desc: 'Achievement at DECODE X 24hr Hackathon by N L Dalmia Institute (Feb 28 – Mar 1, 2026) — demonstrating real-world problem-solving and technical excellence.' },
    { img: '/img/students/student1.jpg', fallback: '/img/photos/2.jpg',      badge: 'Winner',     badgeColor: '#22d3ee', name: 'Pankil, Neel and Sneh',    course: 'B.Tech AI-ML, 2022', desc: 'Winner Maverick Effect AI Challenge 2024 — innovative ML solution for healthcare diagnostics.' },
    { img: '/img/students/student2.jpg', fallback: '/img/photos/3.jpg',      badge: 'Winner',     badgeColor: '#22d3ee', name: 'AIML Girls Team',           course: 'B.Tech AI-ML, 2023', desc: 'Winner of Cricket tournament at CHARUSAT Spoural competition.' },
    { img: '/img/students/student3.jpg', fallback: '/img/photos/4.jpg',      badge: 'Winner',     badgeColor: '#22d3ee', name: 'Letscode',                  course: 'B.Tech AI-ML, 2023', desc: 'Winner CVM University Hackathon 3.0 2024 — innovative solution for Life Science and Agriculture.' },
    { img: '/img/students/student4.jpg', fallback: '/img/photos/5.jpg',      badge: 'Topper',     badgeColor: '#fbbf24', name: 'Hari, Puja and Smit',      course: 'B.Tech AI-ML, 2023', desc: 'Toppers in JUL-OCT-2024 NPTEL Course "DSA using JAVA".' },
    { img: '/img/students/student5.jpg', fallback: '/img/photos/6.jpg',      badge: 'Topper',     badgeColor: '#fbbf24', name: 'Kashak and Yash',           course: 'B.Tech AI-ML, 2024', desc: 'Toppers in JAN-APR-2025 NPTEL Course "Database Management System".' },
    { img: '/img/students/student6.jpg', fallback: '/img/photos/7.jpg',      badge: 'Runner-up',  badgeColor: '#a78bfa', name: 'Pradeep Chandravadiya',    course: 'B.Tech AI-ML, 2023', desc: 'First Runner-up in Hackathon by Odoo x Amalthea at IIT Gandhinagar.' },
];

export default function StudentAchievements() {
    return (
        <section id="student-achievements" className="wow fadeInUp" style={{ background: 'var(--bg)', padding: '90px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <span className="ref-badge"><i className="fa fa-trophy" />Our Pride</span>
                </div>
                <h2 className="ref-heading" style={{ textAlign: 'center', marginBottom: '16px' }}>
                    Student <span className="grad-amber">Achievements</span>
                </h2>
                <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '15px', marginBottom: '50px' }}>
                    Celebrating our outstanding students and their remarkable accomplishments
                </p>

                <div className="row">
                    {achievements.map((a, i) => (
                        <div key={i} className="col-lg-4 col-md-6" style={{ marginBottom: '24px' }}>
                            <div className="ref-card" style={{ overflow: 'hidden', height: '100%' }}
                                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = a.badgeColor + '44'; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = `0 20px 48px rgba(0,0,0,.5)`; }}
                                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none'; }}
                            >
                                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                    <img src={a.img} alt={a.name} onError={e => e.currentTarget.src = a.fallback}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', top: '12px', right: '12px', background: a.badgeColor, color: '#08090e', padding: '3px 12px', borderRadius: '9999px', fontSize: '11px', fontWeight: 800 }}>{a.badge}</div>
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 40%,rgba(8,9,14,.9) 100%)' }} />
                                </div>
                                <div style={{ padding: '22px', textAlign: 'center' }}>
                                    <h4 style={{ fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '17px', color: '#f1f5f9', marginBottom: '5px' }}>{a.name}</h4>
                                    <div style={{ color: a.badgeColor, fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>{a.course}</div>
                                    <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>{a.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <a href="/student_achievements_all" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg,#06b6d4,#22d3ee)', color: '#08090e', padding: '12px 32px', borderRadius: '9999px', fontWeight: 700, fontSize: '14px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(6,182,212,.3)', transition: 'all .3s ease' }}
                        onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-3px)'; el.style.boxShadow = '0 10px 30px rgba(6,182,212,.5)'; }}
                        onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 4px 20px rgba(6,182,212,.3)'; }}
                    >
                        View All Achievements <i className="fa fa-arrow-right" />
                    </a>
                </div>
            </div>
        </section>
    );
}
