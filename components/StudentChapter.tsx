'use client';

import React from 'react';

const chapters = [
    {
        title: 'IEEE Student Branch',
        img: '/img/logo/ieee.svg',
        role: 'Student Branch',
        badge: 'CHARUSAT Student Branch',
        description: 'Promoting technological innovation, research, and engineering excellence.',
    },
    {
        title: 'ACM Student Chapter',
        img: '/img/logo/acm.svg',
        role: 'Student Chapter',
        badge: 'CHARUSAT ACM Chapter',
        description: 'Advancing computing as a science and profession through education and leadership.',
    },
    {
        title: 'CSI Student Chapter',
        img: '/img/logo/csi.svg',
        role: 'Student Chapter',
        badge: 'Computer Society of India',
        description: 'Facilitating research, technical knowledge sharing, and student career enhancement.',
    },
    {
        title: 'SWAYAM-NPTEL',
        img: '/img/logo/nptel.png',
        role: 'Local Chapter',
        badge: 'CSPIT AI-ML Active Chapter',
        description: 'Providing premier online certification courses directly from IITs and IISc.',
    },
];

const cells = [
    { title: 'Anti-Ragging Cell',                    img: '/img/cell/ARC.png',  faculty: 'Prof. Niyati V Patel',       email: 'niyatipatel.aiml@charusat.ac.in',    color: '#e11d48' },
    { title: 'Career Development & Placement Cell',  img: '/img/cell/CDPC.jpg', faculty: 'Prof. Dheeraj K. Shringi',   email: 'dheerajshringi.aiml@charusat.ac.in', color: '#0c2e8a' },
    { title: 'Charusat Startup & Innovation Center', img: '/img/cell/CSIC.png', faculty: 'Prof. Gaurang Patel',        email: 'gaurangpatel.me@charusat.ac.in',     color: '#d97706' },
    { title: 'Equal Opportunity Cell',               img: '/img/cell/EOC.png',  faculty: 'Prof. Gaurav Gautham Kumar', email: 'gauravkumar.aiml@charusat.ac.in',    color: '#059669' },
    { title: 'National Service Scheme',              img: '/img/cell/NSS.png',  faculty: 'Prof. Gaurav Gautham Kumar', email: 'gauravkumar.aiml@charusat.ac.in',    color: '#2563eb' },
    { title: 'Women Development Cell',               img: '/img/cell/WDC.jpg',  faculty: 'Prof. Niyati V Patel',       email: 'niyatipatel.aiml@charusat.ac.in',    color: '#db2777' },
];

export default function StudentChapter() {
    return (
        <>
            {/* Student Chapters */}
            <section id="student-chapter" className="wow fadeInUp" style={{ background: '#ffffff', padding: '90px 0 60px' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <span className="ref-badge"><i className="fa fa-graduation-cap" />Student Chapters</span>
                    </div>
                    <h2 className="ref-heading" style={{ textAlign: 'center', marginBottom: '52px' }}>
                        Student&apos;s <span className="grad-cyan">Chapters</span>
                    </h2>
                    <div className="row" style={{ justifyContent: 'center' }}>
                        {chapters.map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-6" style={{ marginBottom: '24px' }}>
                                <div
                                    className="ref-card cell-card chapter-card"
                                    style={{
                                        padding: '30px 22px 26px',
                                        textAlign: 'center',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    {/* Card Title */}
                                    <h4 className="cell-card-title" style={{ fontSize: '16.5px', fontWeight: 700, color: '#1e3a5f', minHeight: '44px', marginBottom: '16px', lineHeight: 1.35 }}>
                                        {item.title}
                                    </h4>

                                    {/* Logo Container */}
                                    <div className="cell-logo-wrapper" style={{ margin: '0 auto 18px', width: '136px', height: '90px' }}>
                                        <img src={item.img} alt={item.title} className="cell-logo-img" />
                                    </div>

                                    {/* Clean, centered professional description (no justify, no gaps) */}
                                    <p className="chapter-desc">
                                        {item.description}
                                    </p>

                                    {/* Refined single badge footer */}
                                    <div className="chapter-footer" style={{ marginTop: 'auto', paddingTop: '12px', width: '100%' }}>
                                        <span className="chapter-role-label">
                                            {item.role}
                                        </span>
                                        <span className="chapter-pill-badge">
                                            {item.badge}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cell Information */}
            <section id="cell-information" className="wow fadeInUp" style={{ background: '#f5f7fa', padding: '60px 0 90px' }}>
                <div className="container">
                    <h2 className="ref-heading" style={{ textAlign: 'center', marginBottom: '52px' }}>
                        Cell <span className="grad-amber">Information</span>
                    </h2>
                    <div className="row">
                        {cells.map((cell, i) => (
                            <div key={i} className="col-lg-4 col-md-6" style={{ marginBottom: '24px' }}>
                                <div className="ref-card cell-card" style={{ padding: '30px 24px', textAlign: 'center', height: '100%' }}>
                                    <h4 className="cell-card-title">{cell.title}</h4>
                                    <div className="cell-logo-wrapper">
                                        <img src={cell.img} alt={cell.title} className="cell-logo-img" />
                                    </div>
                                    <div className="cell-faculty-info">
                                        <span className="cell-faculty-name">{cell.faculty}</span>
                                        <a href={`mailto:${cell.email}`} className="cell-email-link">
                                            <i className="fa fa-envelope" style={{ fontSize: '11px' }} />
                                            <span>{cell.email}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .chapter-desc {
                    font-size: 13.5px !important;
                    color: #64748b !important;
                    line-height: 1.6 !important;
                    text-align: center !important;
                    text-align-last: center !important;
                    word-spacing: normal !important;
                    letter-spacing: -0.01em !important;
                    margin: 0 0 16px 0 !important;
                    font-weight: 400 !important;
                    padding: 0 4px !important;
                }

                .chapter-footer {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 6px;
                }

                .chapter-role-label {
                    font-size: 12px;
                    font-weight: 600;
                    color: #94a3b8;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                }

                .chapter-pill-badge {
                    background: #eff6ff;
                    border: 1px solid #bfdbfe;
                    color: #2563eb;
                    font-weight: 600;
                    font-size: 12px;
                    border-radius: 9999px;
                    padding: 5px 14px;
                    letter-spacing: 0.2px;
                    display: inline-block;
                    transition: all 0.2s ease;
                }

                .chapter-card:hover .chapter-pill-badge {
                    background: #2563eb;
                    color: #ffffff;
                    border-color: #2563eb;
                }
            `}</style>
        </>
    );
}
