'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const facultyAchievements = [
    {
        img: '/img/faculty/6.png',
        imgPos: 'top center',
        highlight: 'Award for Exemplary Dedication — CHARUSAT 26th Foundation Day',
        names: 'Dr. Nirav Bhatt',
        paper: 'Head of Department, CHARUSAT — Department of AIML (Artificial Intelligence and Machine Learning)',
        badge: 'Exemplary Dedication',
        badgeColor: '#f472b6',
        description: [
            'Heartiest congratulations to Dr. Nirav Bhatt, Head of the Department, CHARUSAT — Department of AIML on receiving the "Award for Exemplary Dedication" on the occasion of the 26th Foundation Day of CHARUSAT.',
            'This distinguished recognition reflects his sustained commitment to academic excellence, effective leadership, and the advancement of outcome-driven education, research, and innovation within the AIML domain.',
            'His contributions continue to inspire both faculty members and students toward professional excellence and societal impact.',
        ],
        links: {
            'Dr. Nirav Bhatt': 'https://www.linkedin.com/in/dr-nirav-bhatt/',
            'CHARUSAT - Department of AIML': 'https://www.linkedin.com/in/aimlcspit/',
        },
    },
    {
        img: '/img/faculty/5.png',
        imgPos: 'top center',
        highlight: 'Research Paper Award — CHARUSAT 26th Foundation Day',
        names: 'Jalpesh Vasa',
        paper: 'Honored with the Research Paper Award on the proud occasion of the 26th Foundation Day of CHARUSAT',
        badge: 'Research Paper Award',
        badgeColor: '#a78bfa',
        description: [
            'We are pleased to announce that Jalpesh Vasa has been honored with the Research Paper Award on the proud occasion of the 26th Foundation Day of CHARUSAT.',
            'This achievement recognizes his sincere involvement in research activities, systematic approach to problem-solving, and consistent efforts toward producing impactful scholarly work. His contribution reflects a strong dedication to exploring emerging ideas and strengthening the research culture within the academic community.',
            'Such recognition highlights the importance of perseverance, intellectual curiosity, and commitment to excellence. We extend our best wishes to him for continued growth and success in future research endeavors.',
            'We also acknowledge and appreciate the continuous support and encouragement from the university leadership and administration in promoting a vibrant and innovation-driven academic environment.',
        ],
        links: {
            'Jalpesh Vasa': 'https://www.linkedin.com/in/jalpesh-vasa/',
        },
    },
    {
        img: '/img/faculty/4.png',
        imgPos: 'top center',
        highlight: 'Book Chapter Published — CRC Press',
        names: 'Gaurang Patel',
        paper: '"ANN Applications in Polymer Tribology" — in Sustainable Smart Composites: Technology and Applications (CRC Press)',
        badge: 'Book Chapter',
        badgeColor: '#4ade80',
        description: [
            'Our esteemed faculty member Gaurang Patel has successfully published a book chapter titled "ANN Applications in Polymer Tribology" in the CRC Press book "Sustainable Smart Composites: Technology and Applications."',
            'The chapter explains how artificial neural networks can be used to study and predict friction and wear behavior in polymers, highlighting the growing importance of AI in solving engineering problems.',
            'This publication reflects the dedication, expertise, and strong research focus of our department, where innovative ideas are continuously developed into meaningful and practical contributions. It also strengthens our commitment to advancing knowledge that benefits both academic and industry.',
        ],
        links: {
            'Gaurang Patel': 'https://cspit.charusat.ac.in/faculty/Mr.%20Gaurang%20Patel',
        },
    },
    {
        img: '/img/faculty/7.png',
        imgPos: 'bottom center',
        highlight: 'Best Paper Award — ICRAIC 2026',
        names: 'Dr. Nirav Bhatt & Dr. Jalpesh Vasa',
        paper: '"Beyond Generic AI: RAG-Powered Question Answering for Specialized Knowledge Domains"',
        badge: 'Best Paper Award',
        badgeColor: '#fbbf24',
        description: [
            'Every research milestone represents months of exploration, analysis, and perseverance.',
            'The Department of Artificial Intelligence and Machine Learning at CHARUSAT is proud to announce that Dr. Nirav Bhatt and Dr. Jalpesh Vasa have received the Best Paper Award at ICRAIC 2026 for their paper, "Beyond Generic AI: RAG-Powered Question Answering for Specialized Knowledge Domains."',
            'This achievement reflects their dedication to advancing research in Artificial Intelligence and reinforces the department\'s commitment to promoting impactful research and knowledge creation. It is always encouraging to see the work of our faculty receiving recognition on such a platform.',
            'We congratulate both faculty members on this accomplishment and wish them continued success in their future academic and research pursuits.',
        ],
        links: {
            'Dr. Nirav Bhatt': 'https://www.linkedin.com/in/dr-nirav-bhatt/',
            'Dr. Jalpesh Vasa': 'https://www.linkedin.com/in/jalpesh-vasa/',
        },
    },
    {
        img: '/img/faculty/1.png',
        imgPos: 'top center',
        highlight: 'GUJCOST Approval — Generative AI Workshop',
        names: 'Dr. Nirav Bhatt',
        paper: '"Generative AI: Foundations, Tools and Hands-on Applications" — National Level Workshop',
        badge: '₹25,000 Grant',
        badgeColor: '#4ade80',
        description: [
            'Intelligence is no longer just about automation — it is all about creation, intelligence, and limitless possibilities through Generative AI.',
            'We are delighted to share that Dr. Nirav Bhatt from the Department of Artificial Intelligence and Machine Learning, CHARUSAT, has received GUJCOST approval of ₹25,000 for organizing a National Level Workshop on "Generative AI: Foundations, Tools and Hands-on Applications."',
            'This recognition by GUJCOST reflects the department\'s leadership in advancing cutting-edge AI knowledge and making it accessible to a national audience. It is a proud moment for the department and a testament to Dr. Bhatt\'s dedication to academic excellence and impactful outreach.',
        ],
        links: {
            'Dr. Nirav Bhatt': 'https://www.linkedin.com/in/dr-nirav-bhatt/',
        },
    },
    {
        img: '/img/faculty/2.png',
        imgPos: 'top center',
        highlight: 'GUJCOST Approval — Web 3.0 & DApps Workshop',
        names: 'Dr. Hardik Jayswal',
        paper: '"Web 3.0 and Decentralized Applications (DApps): Concepts, Tools and Hands-on Development" — National Level Workshop',
        badge: '₹25,000 Grant',
        badgeColor: '#22d3ee',
        description: [
            'Exploring Web 3.0 and decentralized technologies has become increasingly important as the next generation of the internet continues to take shape.',
            'We are pleased to share that Dr. Hardik Jayswal, from the Department of Artificial Intelligence and Machine Learning, CHARUSAT, has received GUJCOST approval of ₹25,000 for organizing a National Level Workshop on "Web 3.0 and Decentralized Applications (DApps): Concepts, Tools and Hands-on Development."',
            'This grant is a recognition of Dr. Jayswal\'s initiative to bring emerging and transformative technologies to students and professionals at a national level. We congratulate him on this achievement and look forward to the impact this workshop will create.',
        ],
        links: {
            'Dr. Hardik Jayswal': 'https://www.linkedin.com/in/hardik-jayswal-546706a0/',
        },
    },
    {
        img: '/img/faculty/3.png',
        imgPos: 'center',
        highlight: 'Session Chair — International Conference, Manila, Philippines',
        names: 'Dr. Nirav H. Bhatt',
        paper: 'International Conference on Machine and Computing Technologies for Sustainable Development — Manila, Philippines',
        badge: 'Session Chair',
        badgeColor: '#a78bfa',
        description: [
            'Academic leadership plays a vital role in shaping the global direction of Artificial Intelligence research and innovation.',
            'The Department of AIML, CSPIT, takes immense pride in sharing that Dr. Nirav H. Bhatt served as a Session Chair at the International Conference on Machine and Computing Technologies for Sustainable Development, held in Manila, Philippines.',
            'Being invited to chair a session at an international conference is a significant recognition of expertise, scholarly contributions, and standing in the global AI research community. This achievement reinforces the department\'s presence on the international stage and inspires our students and faculty to pursue excellence beyond boundaries.',
        ],
        links: {
            'Dr. Nirav Bhatt': 'https://www.linkedin.com/in/dr-nirav-bhatt/',
        },
    },
];

export default function FacultyAchievements() {
    const [selectedFaculty, setSelectedFaculty] = useState<typeof facultyAchievements[0] | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Escape key listener & body scroll lock
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedFaculty(null);
            }
        };

        if (selectedFaculty) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [selectedFaculty]);

    return (
        <section id="faculty-achievements" className="wow fadeInUp" style={{ background: '#f5f7fa', padding: '80px 0 96px' }}>
            <div className="container">
                {/* Section badge */}
                <div style={{ textAlign: 'center', marginBottom: '18px' }}>
                    <span className="ref-badge"><i className="fa fa-star" /> Faculty Excellence</span>
                </div>
                <h2 className="ref-heading" style={{ textAlign: 'center', margin: '0 auto 16px' }}>
                    Faculty <span className="grad-amber">Achievements</span>
                </h2>
                <div className="row">
                    {facultyAchievements.map((item, i) => (
                        <div key={i} className="col-lg-6 col-md-12" style={{ marginBottom: '28px' }}>
                            <div
                                className="ref-card"
                                style={{
                                    cursor: 'pointer',
                                    transition: 'all 0.35s ease',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    overflow: 'hidden'
                                }}
                                onClick={() => setSelectedFaculty(item)}
                                onMouseEnter={e => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.borderColor = item.badgeColor + '55';
                                    el.style.transform = 'translateY(-6px)';
                                    el.style.boxShadow = '0 18px 45px rgba(15,23,42,0.12)';
                                }}
                                onMouseLeave={e => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.borderColor = 'var(--border)';
                                    el.style.transform = 'translateY(0)';
                                    el.style.boxShadow = 'var(--shadow-sm)';
                                }}
                            >
                                {/* Image — top */}
                                <div style={{ height: '280px', overflow: 'hidden', position: 'relative', background: '#f1f5f9' }}>
                                    <img
                                        src={item.img}
                                        alt={item.names}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: item.imgPos ?? 'center', transition: 'transform 0.4s ease' }}
                                        onError={e => (e.currentTarget.style.display = 'none')}
                                    />
                                    {/* Badge overlay — compact pill on right */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '14px',
                                        right: '14px',
                                        left: 'auto',
                                        width: 'fit-content',
                                        maxWidth: 'fit-content',
                                        background: item.badgeColor,
                                        color: '#ffffff',
                                        padding: '4px 14px',
                                        borderRadius: '9999px',
                                        fontSize: '11px',
                                        fontWeight: 800,
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        zIndex: 3
                                    }}>
                                        {item.badge}
                                    </div>
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(255,255,255,0.9) 100%)' }} />
                                </div>

                                {/* Content below image */}
                                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                    <div style={{ color: item.badgeColor, fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                                        <i className="fa fa-trophy" style={{ marginRight: '6px' }} />{item.highlight}
                                    </div>
                                    <h4 style={{ fontFamily: 'var(--font-h)', fontWeight: 800, fontSize: '19px', color: '#0f172a', margin: '0 0 6px 0', lineHeight: 1.35 }}>
                                        {item.names}
                                    </h4>
                                    <p style={{ color: '#64748b', fontSize: '13.5px', margin: '0', fontStyle: 'italic', lineHeight: 1.55 }}>
                                        {item.paper}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Faculty Achievement Modal Popup — Compact Card Style */}
            {mounted && selectedFaculty && createPortal(
                <div
                    className="academic-modal-overlay"
                    onClick={(e) => { if (e.target === e.currentTarget) setSelectedFaculty(null); }}
                    role="dialog"
                    aria-modal="true"
                    style={{ padding: '20px' }}
                >
                    <div
                        style={{
                            maxWidth: '540px',
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
                            onClick={() => setSelectedFaculty(null)}
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

                        {/* Scrollable Container for Photo + Story + LinkedIn */}
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
                                    src={selectedFaculty.img}
                                    alt={selectedFaculty.names}
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

                            {/* Content: Story and LinkedIn Link */}
                            <div style={{ padding: '20px 8px 6px' }}>
                                <div style={{ color: selectedFaculty.badgeColor, fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
                                    <i className="fa fa-trophy" style={{ marginRight: '6px' }} />{selectedFaculty.highlight}
                                </div>
                                <h4 style={{ fontFamily: 'var(--font-h)', fontWeight: 800, fontSize: '19px', color: '#0f172a', margin: '0 0 14px 0' }}>
                                    {selectedFaculty.names}
                                </h4>

                                {/* Story (Paragraphs) */}
                                <div style={{ marginBottom: '16px' }}>
                                    {selectedFaculty.description.map((para, pi) => (
                                        <p
                                            key={pi}
                                            style={{
                                                color: '#475569',
                                                fontSize: '13.5px',
                                                lineHeight: 1.75,
                                                marginBottom: pi < selectedFaculty.description.length - 1 ? '12px' : 0,
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html: Object.entries(selectedFaculty.links).reduce(
                                                    (text, [name, url]) => text.replace(
                                                        new RegExp(name, 'g'),
                                                        `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color:#0c2e8a;text-decoration:none;font-weight:700;">${name}</a>`
                                                    ),
                                                    para
                                                )
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* LinkedIn links */}
                                {selectedFaculty.links && Object.keys(selectedFaculty.links).length > 0 && (
                                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px' }}>
                                        {Object.entries(selectedFaculty.links).map(([name, url]) => (
                                            <a
                                                key={name}
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '6px',
                                                    background: 'rgba(12,46,138,0.06)',
                                                    border: '1px solid rgba(12,46,138,0.18)',
                                                    color: '#0c2e8a',
                                                    fontSize: '12px',
                                                    fontWeight: 600,
                                                    padding: '6px 14px',
                                                    borderRadius: '999px',
                                                    textDecoration: 'none',
                                                    transition: 'all 0.2s ease'
                                                }}
                                            >
                                                <i className="fa fa-linkedin-square" style={{ color: '#0077b5', fontSize: '14px' }} />
                                                <span>{name}</span>
                                                <i className="fa fa-external-link" style={{ fontSize: '10px', opacity: 0.6 }} />
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
}
