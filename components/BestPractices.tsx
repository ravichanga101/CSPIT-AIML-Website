'use client';

import React from 'react';

interface PracticeItem {
    title: string;
    description: string;
    color: string;
    icon: React.ReactNode;
}

const practices: PracticeItem[] = [
    {
        title: 'MOOC Certifications',
        description: 'Enhancing knowledge through online courses.',
        color: '#4338ca', // Deep Royal Indigo
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 8.55L3.82 9 12 4.55 20.18 9 12 11.55zM5 13.18v4C5 19.84 8.13 22 12 22s7-2.16 7-4.82v-4l-7 3.82-7-3.82z" />
            </svg>
        ),
    },
    {
        title: 'Industry Certifications',
        description: 'Professional credentials from tech giants.',
        color: '#ef4444', // Coral Red
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M12 2l2.4 2.1 3.1-.6 1.4 2.8 3 .9-.3 3.2 2.1 2.4-1.5 2.8.9 3-2.8 1.4-.6 3.1-3.2-.3-2.4 2.1-2.4-2.1-3.2.3-.6-3.1-2.8-1.4.9-3-1.5-2.8 2.1-2.4-.3-3.2 3-.9 1.4-2.8 3.1.6L12 2z" />
            </svg>
        ),
    },
    {
        title: 'Expert Faculty',
        description: 'Learning from highly experienced educators.',
        color: '#db2777', // Rose / Pink
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M20 3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h4v2H6v2h12v-2h-2v-2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H4V5h16v10z" />
                <circle cx="9" cy="8.5" r="2" />
                <path d="M12.5 13.5c0-1.7-1.6-3-3.5-3s-3.5 1.3-3.5 3v.5h7v-.5z" />
                <rect x="14" y="7" width="4" height="1.8" rx="0.9" />
                <rect x="14" y="10" width="4" height="1.8" rx="0.9" />
            </svg>
        ),
    },
    {
        title: 'Advanced Laboratories',
        description: 'Hands-on experience with modern facilities.',
        color: '#8b5cf6', // Electric Purple
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M19 20L14 8V4h1V2H9v2h1v4L5 20c-.8 1.3.1 3 1.7 3h10.6c1.6 0 2.5-1.7 1.7-3zM8.3 18l3.1-7.5V4h1.2v6.5l3.1 7.5H8.3z" />
                <circle cx="10.5" cy="15" r="1" />
                <circle cx="13.5" cy="16.5" r="1.2" />
            </svg>
        ),
    },
    {
        title: 'Placement Excellence',
        description: 'Strong placement record with dedicated support.',
        color: '#16a34a', // Emerald Green
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10-2h4v2h-4V4zm10 15H4V8h16v11z" />
                <rect x="10" y="10" width="4" height="3" rx="1" />
            </svg>
        ),
    },
    {
        title: 'Competitive Exam Prep',
        description: 'Guidance and resources for national exams.',
        color: '#f59e0b', // Amber Orange
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.1 11.9 1 10.5 1S8 2.1 8 3.5V5H4c-1.1 0-2 .9-2 2v3.8h1.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V22H17c1.1 0 2-.9 2-2v-4h1.5c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5z" />
            </svg>
        ),
    },
    {
        title: 'Collaborative Learning',
        description: 'Continuous evaluation and teamwork-focused environment.',
        color: '#2563eb', // Royal Cobalt Blue
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
        ),
    },
    {
        title: 'Vibrant Student Clubs',
        description: 'Active participation in extracurricular activities.',
        color: '#f97316', // Red-Orange
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
                <circle cx="12" cy="7" r="3.2" />
                <path d="M12 11.5c-2.7 0-6 1.4-6 3.8V17h12v-1.7c0-2.4-3.3-3.8-6-3.8z" />
                <circle cx="5" cy="9" r="2.2" />
                <path d="M5 12.2c-.8 0-1.8.2-2.5.6-.9.5-1.5 1.4-1.5 2.5V17h3.8v-1.7c0-1.3.5-2.3 1.2-3.1-.3 0-.7 0-1 0z" />
                <circle cx="19" cy="9" r="2.2" />
                <path d="M19 12.2c.3 0 .7 0 1 0 .7.8 1.2 1.8 1.2 3.1V17H23v-1.7c0-1.1-.6-2-1.5-2.5-.7-.4-1.7-.6-2.5-.6z" />
            </svg>
        ),
    },
    {
        title: 'Personalized Mentoring',
        description: 'One-to-one guidance for all-round development.',
        color: '#475569', // Slate Teal / Charcoal
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
                <circle cx="10" cy="8" r="4" />
                <path d="M10 13.5c-3.3 0-8 1.7-8 4.5V20h10.5c-.3-.6-.5-1.3-.5-2 0-1.8 1-3.3 2.5-4.1-.7-.3-1.6-.4-2.5-.4z" />
                <path d="M18 13c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm-1 7.2l-2.5-2.5 1.4-1.4 1.1 1.1 3.1-3.1 1.4 1.4-4.5 4.5z" />
            </svg>
        ),
    },
    {
        title: 'Smart Learning Tools',
        description: 'Effective use of modern educational software.',
        color: '#06b6d4', // Bright Cyan
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M20 15V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v9c-1.1 0-2 .9-2 2v1h20v-1c0-1.1-.9-2-2-2zm-14-9h12v9H6V6zm-2 12c0-.5.5-1 1-1h14c.5 0 1 .5 1 1H4z" />
            </svg>
        ),
    },
];

export default function BestPractices() {
    return (
        <section id="best-practices" className="wow fadeInUp best-practices-section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <span className="ref-badge">
                        <i className="fa fa-star" />Academic Distinction
                    </span>
                </div>
                <h2 className="ref-heading" style={{ textAlign: 'center', marginBottom: '14px' }}>
                    Best <span className="grad-cyan">Practices</span>
                </h2>
                <p style={{ textAlign: 'center', color: '#64748b', fontSize: '15px', maxWidth: '640px', margin: '0 auto 50px', lineHeight: 1.6 }}>
                    Nurturing holistic development, industry-readiness, and academic excellence through modern pedagogy and world-class educational practices.
                </p>

                {/* 10 Cards Grid (2 rows of 5 on desktop) */}
                <div className="best-practices-grid">
                    {practices.map((item, index) => (
                        <div key={index} className="practice-card" style={{ '--accent-color': item.color } as React.CSSProperties}>
                            {/* Icon Box */}
                            <div className="practice-icon-box" style={{ backgroundColor: item.color }}>
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h4 className="practice-title">{item.title}</h4>

                            {/* Description */}
                            <p className="practice-desc">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .best-practices-section {
                    position: relative;
                    padding: 90px 0 100px;
                    background-color: #f8fafc;
                    /* Subtle technical grid pattern from screenshot */
                    background-image: 
                        linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px);
                    background-size: 24px 24px;
                    overflow: hidden;
                }

                .best-practices-grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 22px;
                }

                .practice-card {
                    background: #ffffff;
                    border: 1px solid rgba(15, 23, 42, 0.08);
                    border-radius: 20px;
                    padding: 34px 20px 28px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    box-shadow: 0 4px 18px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.02);
                    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                                box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                                border-color 0.3s ease;
                    cursor: default;
                    position: relative;
                }

                .practice-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 18px 36px -6px rgba(15, 23, 42, 0.12),
                                0 6px 16px -2px rgba(15, 23, 42, 0.06);
                    border-color: rgba(15, 23, 42, 0.16);
                }

                .practice-icon-box {
                    width: 58px;
                    height: 58px;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 22px;
                    box-shadow: 0 8px 18px -4px rgba(15, 23, 42, 0.18);
                    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .practice-card:hover .practice-icon-box {
                    transform: scale(1.08) translateY(-2px);
                }

                .practice-title {
                    font-size: 16px;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0 0 10px 0;
                    line-height: 1.35;
                    font-family: var(--font-h, 'Montserrat', sans-serif);
                }

                .practice-desc {
                    font-size: 13.5px;
                    color: #64748b;
                    line-height: 1.55;
                    margin: 0;
                }

                @media (max-width: 1200px) {
                    .best-practices-grid {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 20px;
                    }
                }

                @media (max-width: 768px) {
                    .best-practices-section {
                        padding: 60px 0 75px;
                    }
                    .best-practices-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 16px;
                    }
                    .practice-card {
                        padding: 26px 16px 22px;
                        border-radius: 16px;
                    }
                    .practice-icon-box {
                        width: 50px;
                        height: 50px;
                        border-radius: 14px;
                        margin-bottom: 16px;
                    }
                    .practice-title {
                        font-size: 15px;
                    }
                    .practice-desc {
                        font-size: 12.5px;
                    }
                }

                @media (max-width: 480px) {
                    .best-practices-grid {
                        grid-template-columns: 1fr;
                        max-width: 340px;
                        margin: 0 auto;
                    }
                }
            `}</style>
        </section>
    );
}
