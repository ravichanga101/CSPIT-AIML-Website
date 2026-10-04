'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const achievements = [
    { img: '/img/students/student20.jpg', fallback: '/img/photos/1.jpg', badge: 'MathFlow AI', badgeColor: '#6366f1', name: 'AIML Students', course: 'B.Tech AI-ML', desc: 'Strong fundamentals meet effective AI education — students demonstrated outstanding performance at MathFlow AI, conducted by the Math for AI Club at CSPIT.' },
    { img: '/img/students/student21.jpg', fallback: '/img/photos/2.jpg', badge: 'Top 2%', badgeColor: '#e11d48', name: 'India AI Summit Finalists', course: 'India AI Summit 2026', desc: 'Rising as Top 2% Finalists at India AI Summit 2026, Bharat Mandapam, New Delhi — a remarkable achievement among thousands of participants across the country.' },
    { img: '/img/students/student7.jpg', fallback: '/img/photos/1.jpg', badge: '1st Prize', badgeColor: '#d97706', name: 'Tirth, Manan & Nil', course: 'B.Tech AI-ML, 2024', desc: '1st Prize winners at MathFlow AI — connecting mathematical thinking with AI, coding, and creative problem-solving at CHARUSAT.' },
    { img: '/img/students/student8.jpg', fallback: '/img/photos/2.jpg', badge: 'NEF 2025', badgeColor: '#059669', name: 'Jugal, Anshu, Jash & Devansh', course: 'B.Tech AI-ML, 2023', desc: 'Showcased "Veerdhristi: Drone System for Defensive Strategy During Combat" at NEF Innovation 2025 — AI-powered defense tech guided by Dr. Nirav Bhatt.' },
    { img: '/img/students/student9.jpg', fallback: '/img/photos/3.jpg', badge: 'NEF 2025', badgeColor: '#6366f1', name: 'Vaanimitra Team', course: 'B.Tech AI-ML, 2023', desc: 'Presented "Vaanimitra: Multilingual Interactive Tutor for Indian Languages" at NEF Innovation 2025 — making education inclusive through AI, mentored by Mr. Deep Mendha.' },
    { img: '/img/students/student10.jpg', fallback: '/img/photos/4.jpg', badge: 'NEF 2025', badgeColor: '#ea580c', name: 'TejaLens Team', course: 'B.Tech AI-ML, 2023', desc: 'Presented "TejaLens" at NEF Innovation 2025 — purpose-driven innovation designed to make a meaningful difference, mentored by Mr. Deep Mendha.' },
    { img: '/img/students/student11.jpg', fallback: '/img/photos/5.jpg', badge: 'NEF 2025', badgeColor: '#059669', name: 'Smart Trolly Team', course: 'B.Tech AI-ML, 2023', desc: 'Presented "Smart Trolly" at NEF Innovation 2025 — transforming everyday convenience through intelligent, practical AI-driven design.' },
    { img: '/img/students/student12.jpg', fallback: '/img/photos/6.jpg', badge: 'GATE', badgeColor: '#2563eb', name: 'Devarshi Dave & Kaushal Savaliya', course: 'B.Tech AI-ML, 2022–23', desc: 'GATE qualified — Devarshi Dave (22AIML007) scored 362 and Kaushal Savaliya (23AIML063) scored 395 in Computer Science.' },
    { img: '/img/students/student13.jpg', fallback: '/img/photos/7.jpg', badge: 'GATE', badgeColor: '#2563eb', name: 'Hiren, Harsh & Krushna', course: 'B.Tech AI-ML, 2022–23', desc: 'GATE qualified — Hiren Modhvadia (DA:339, CS:447), Harsh Kakadiya (DA:357, CS:355), Krushna Parmar (DA:345, CS:318).' },
    { img: '/img/students/student14.jpg', fallback: '/img/photos/8.jpg', badge: 'GATE', badgeColor: '#2563eb', name: 'Devang Dhandhukiya & Kunjalben Vala', course: 'B.Tech AI-ML, 2022–23', desc: 'GATE qualified — Devang Dhandhukiya (23AIML014) scored 635 in DA, Kunjalben Vala (22AIML058) scored 321 in DA.' },
    { img: '/img/students/student15.jpg', fallback: '/img/photos/9.jpg', badge: 'GATE', badgeColor: '#2563eb', name: 'Yash Davda & Hari Patel', course: 'B.Tech AI-ML, 2023', desc: 'GATE qualified — Yash Davda (23AIML012) scored 518 and Hari Patel (23AIML049) scored 377, reflecting discipline and consistent effort.' },
    { img: '/img/students/student16.jpg', fallback: '/img/photos/1.jpg', badge: '₹4.7L Grant', badgeColor: '#e11d48', name: 'Hasti Bhalodia & Mahi Patel', course: 'B.Tech AI-ML', desc: 'Awarded ₹4.7 Lakhs grant under MeitY Startup Hub – GENESIS Scheme\'s EiR Program in Biomedical Imaging — turning entrepreneurial vision into reality.' },
    { img: '/img/students/student17.jpg', fallback: '/img/photos/2.jpg', badge: '2nd Place', badgeColor: '#7c3aed', name: 'Team HACKICONICS', course: 'B.Tech AI-ML', desc: '2nd place at WiBD GenAI Builders Hackathon 2026 (7th Feb 2026) — showcasing innovation, teamwork, and excellence in Generative AI.' },
    { img: '/img/students/student18.jpg', fallback: '/img/photos/3.jpg', badge: '1st Place', badgeColor: '#d97706', name: 'Hriday, Anshu & Jugal', course: 'B.Tech AI-ML, 2023', desc: '1st place & ₹45,000 cash prize at Odoo Gujarat Vidyapith 24-hour Hackathon 2026 — a proud moment for CSPIT AIML, CHARUSAT.' },
    { img: '/img/students/student19.jpg', fallback: '/img/photos/4.jpg', badge: 'Winner', badgeColor: '#0c2e8a', name: 'Team Coding Chimps', course: 'B.Tech AI-ML', desc: 'Achievement at DECODE X 24hr Hackathon by N L Dalmia Institute (Feb 28 – Mar 1, 2026) — demonstrating real-world problem-solving and technical excellence.' },
    { img: '/img/students/student1.jpg', fallback: '/img/photos/2.jpg', badge: 'Winner', badgeColor: '#0c2e8a', name: 'Pankil, Neel and Sneh', course: 'B.Tech AI-ML, 2022', desc: 'Winner Maverick Effect AI Challenge 2024 — innovative ML solution for healthcare diagnostics.' },
    { img: '/img/students/student2.jpg', fallback: '/img/photos/3.jpg', badge: 'Winner', badgeColor: '#0c2e8a', name: 'AIML Girls Team', course: 'B.Tech AI-ML, 2023', desc: 'Winner of Cricket tournament at CHARUSAT Spoural competition.' },
    { img: '/img/students/student3.jpg', fallback: '/img/photos/4.jpg', badge: 'Winner', badgeColor: '#0c2e8a', name: 'Letscode', course: 'B.Tech AI-ML, 2023', desc: 'Winner CVM University Hackathon 3.0 2024 — innovative solution for Life Science and Agriculture.' },
    { img: '/img/students/student4.jpg', fallback: '/img/photos/5.jpg', badge: 'Topper', badgeColor: '#d97706', name: 'Hari, Puja and Smit', course: 'B.Tech AI-ML, 2023', desc: 'Toppers in JUL-OCT-2024 NPTEL Course "DSA using JAVA".' },
    { img: '/img/students/student5.jpg', fallback: '/img/photos/6.jpg', badge: 'Topper', badgeColor: '#d97706', name: 'Kashak and Yash', course: 'B.Tech AI-ML, 2024', desc: 'Toppers in JAN-APR-2025 NPTEL Course "Database Management System".' },
    { img: '/img/students/student6.jpg', fallback: '/img/photos/7.jpg', badge: 'Runner-up', badgeColor: '#7c3aed', name: 'Pradeep Chandravadiya', course: 'B.Tech AI-ML, 2023', desc: 'First Runner-up in Hackathon by Odoo x Amalthea at IIT Gandhinagar.' },
];

export default function StudentAchievements() {
    const [selectedAchievement, setSelectedAchievement] = useState<typeof achievements[0] | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Escape key listener & body scroll lock
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedAchievement(null);
            }
        };

        if (selectedAchievement) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [selectedAchievement]);

    return (
        <section id="student-achievements" className="wow fadeInUp" style={{ background: '#ffffff', padding: '90px 0', scrollMarginTop: '100px' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <span className="ref-badge"><i className="fa fa-trophy" />Our Pride</span>
                </div>
                <h2 className="ref-heading" style={{ textAlign: 'center', marginBottom: '16px' }}>
                    Student <span className="grad-amber">Achievements</span>
                </h2>
                <div className="row">
                    {achievements.map((a, i) => (
                        <div key={i} className="col-lg-4 col-md-6" style={{ marginBottom: '28px' }}>
                            <div
                                className="ref-card"
                                style={{
                                    overflow: 'hidden',
                                    height: '100%',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.3s ease'
                                }}
                                onClick={() => setSelectedAchievement(a)}
                                onMouseEnter={e => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.borderColor = a.badgeColor + '55';
                                    el.style.transform = 'translateY(-6px)';
                                    el.style.boxShadow = `0 18px 45px rgba(15,23,42,0.12)`;
                                }}
                                onMouseLeave={e => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.borderColor = 'var(--border)';
                                    el.style.transform = 'translateY(0)';
                                    el.style.boxShadow = 'var(--shadow-sm)';
                                }}
                            >
                                <div style={{ height: '280px', overflow: 'hidden', position: 'relative', background: '#f1f5f9' }}>
                                    <img
                                        src={a.img}
                                        alt={a.name}
                                        onError={e => e.currentTarget.src = a.fallback}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        top: '12px',
                                        right: '12px',
                                        background: a.badgeColor,
                                        color: '#ffffff',
                                        padding: '3px 12px',
                                        borderRadius: '9999px',
                                        fontSize: '11px',
                                        fontWeight: 800
                                    }}>
                                        {a.badge}
                                    </div>
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 40%,rgba(255,255,255,0.9) 100%)' }} />
                                </div>
                                <div style={{ padding: '22px', textAlign: 'center', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                    <h4 style={{ fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '17px', color: '#0f172a', marginBottom: '5px' }}>{a.name}</h4>
                                    <div style={{ color: a.badgeColor, fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>{a.course}</div>
                                    <p style={{ color: '#64748b', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>{a.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Student Achievement Modal Popup — Compact Card Style */}
            {mounted && selectedAchievement && createPortal(
                <div
                    className="academic-modal-overlay"
                    onClick={(e) => { if (e.target === e.currentTarget) setSelectedAchievement(null); }}
                    role="dialog"
                    aria-modal="true"
                    style={{ padding: '20px' }}
                >
                    <div
                        style={{
                            maxWidth: '520px',
                            width: '100%',
                            maxHeight: '90vh',
                            background: '#ffffff',
                            borderRadius: '22px',
                            boxShadow: '0 25px 60px -15px rgba(0,0,0,0.4), 0 0 0 1px rgba(226, 232, 240, 0.8)',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            animation: 'academicModalZoomIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                        }}
                    >
                        {/* Circular Close Cross Button on Top-Right */}
                        <button
                            type="button"
                            onClick={() => setSelectedAchievement(null)}
                            aria-label="Close"
                            style={{
                                position: 'absolute',
                                top: '24px',
                                right: '24px',
                                zIndex: 40,
                                width: '34px',
                                height: '34px',
                                borderRadius: '50%',
                                background: 'rgba(15, 23, 42, 0.82)',
                                backdropFilter: 'blur(6px)',
                                border: '2px solid #ffffff',
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 4px 14px rgba(0,0,0,0.35)',
                                transition: 'all 0.2s ease',
                                outline: 'none',
                                padding: 0
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.background = '#dc2626';
                                (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.background = 'rgba(15, 23, 42, 0.82)';
                                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                            }}
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        {/* Scrollable Container for Photo + Description */}
                        <div
                            className="academic-modal-body"
                            style={{
                                padding: '16px 16px 24px 16px',
                                overflowY: 'auto',
                                flex: 1,
                                background: '#ffffff'
                            }}
                        >
                            {/* Photo with Curvature / Radius */}
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                background: '#0f172a',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 20px rgba(15, 23, 42, 0.12)',
                                border: '1px solid #e2e8f0'
                            }}>
                                <img
                                    src={selectedAchievement.img}
                                    alt={selectedAchievement.name}
                                    onError={e => { e.currentTarget.src = selectedAchievement.fallback; }}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        maxHeight: '460px',
                                        objectFit: 'contain',
                                        display: 'block',
                                        background: '#0f172a',
                                        borderRadius: '16px'
                                    }}
                                />
                            </div>

                            {/* Same Information as Main Page Card */}
                            <div style={{ padding: '20px 10px 4px', textAlign: 'center' }}>
                                <h4 style={{ fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '18px', color: '#0f172a', marginBottom: '5px' }}>
                                    {selectedAchievement.name}
                                </h4>
                                <div style={{ color: selectedAchievement.badgeColor, fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                                    {selectedAchievement.course}
                                </div>
                                <p style={{ color: '#475569', fontSize: '13.5px', lineHeight: 1.7, margin: 0 }}>
                                    {selectedAchievement.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
}
