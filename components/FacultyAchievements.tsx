'use client';
import { useState } from 'react';

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
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
        <section className="wow fadeInUp" style={{ background: '#f5f7fa', padding: '60px 0 0' }}>
            <div className="container">

                {/* Section badge */}
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <span className="ref-badge"><i className="fa fa-star" /> Faculty Excellence</span>
                </div>
                <h2 className="ref-heading" style={{ textAlign: 'center', marginBottom: '48px' }}>
                    Faculty <span className="grad-amber">Achievements</span>
                </h2>

                <div className="row">
                    {facultyAchievements.map((item, i) => {
                        const isOpen = expanded === i;
                        return (
                            <div key={i} className="col-lg-6 col-md-12" style={{ marginBottom: '24px' }}>
                                <div
                                    className="ref-card"
                                    style={{
                                        cursor: 'pointer',
                                        transition: 'all 0.35s ease',
                                        height: '100%',
                                        borderColor: isOpen ? item.badgeColor + '33' : 'var(--border)',
                                        boxShadow: isOpen ? `0 16px 48px rgba(15,23,42,0.12), 0 0 0 1px ${item.badgeColor}15` : 'var(--shadow-sm)',
                                    }}
                                    onClick={() => setExpanded(isOpen ? null : i)}
                                    onMouseEnter={e => {
                                        if (!isOpen) {
                                            const el = e.currentTarget as HTMLElement;
                                            el.style.borderColor = item.badgeColor + '22';
                                            el.style.transform = 'translateY(-4px)';
                                            el.style.boxShadow = '0 12px 40px rgba(15,23,42,0.1)';
                                        }
                                    }}
                                    onMouseLeave={e => {
                                        if (!isOpen) {
                                            const el = e.currentTarget as HTMLElement;
                                            el.style.borderColor = 'var(--border)';
                                            el.style.transform = 'translateY(0)';
                                            el.style.boxShadow = 'var(--shadow-sm)';
                                        }
                                    }}
                                >
                                    {/* Image — top, full width */}
                                    <div style={{ height: '280px', overflow: 'hidden', position: 'relative', borderRadius: '12px 12px 0 0', background: '#f1f5f9' }}>
                                        <img
                                            src={item.img}
                                            alt={item.names}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: item.imgPos ?? 'center', transition: 'transform 0.4s ease' }}
                                            onError={e => (e.currentTarget.style.display = 'none')}
                                        />
                                        {/* Badge overlay */}
                                        <div style={{
                                            position: 'absolute', top: '12px', left: '12px',
                                            background: item.badgeColor, color: '#ffffff',
                                            padding: '3px 12px', borderRadius: '9999px',
                                            fontSize: '11px', fontWeight: 800,
                                        }}>{item.badge}</div>
                                        {/* Dark gradient at bottom */}
                                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(255,255,255,0.85) 100%)' }} />
                                    </div>

                                    {/* Highlight strip below image */}
                                    <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                        <div style={{ color: item.badgeColor, fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                                            <i className="fa fa-trophy" style={{ marginRight: '6px' }} />{item.highlight}
                                        </div>
                                        <h4 style={{ fontFamily: 'var(--font-h)', fontWeight: 800, fontSize: '18px', color: '#0f172a', margin: 0, lineHeight: 1.3 }}>
                                            {item.names}
                                        </h4>
                                        <p style={{ color: '#64748b', fontSize: '13px', margin: 0, fontStyle: 'italic', lineHeight: 1.5 }}>
                                            {item.paper}
                                        </p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                                            <span style={{
                                                fontSize: '12px', color: '#0c2e8a', fontWeight: 600,
                                                display: 'flex', alignItems: 'center', gap: '5px',
                                            }}>
                                                <i className={`fa ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} style={{ fontSize: '10px' }} />
                                                {isOpen ? 'Show Less' : 'Read Full Story'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Expandable full description */}
                                    <div style={{
                                        maxHeight: isOpen ? '600px' : '0',
                                        overflow: 'hidden',
                                        transition: 'max-height 0.45s ease',
                                    }}>
                                        <div style={{
                                            padding: '0 30px 30px',
                                            borderTop: `1px solid ${item.badgeColor}33`,
                                            marginTop: '0',
                                            paddingTop: '24px',
                                        }}>
                                            {item.description.map((para, pi) => (
                                                <p key={pi} style={{
                                                    color: pi === 0 ? '#64748b' : '#475569',
                                                    fontSize: '14px', lineHeight: 1.85,
                                                    marginBottom: pi < item.description.length - 1 ? '14px' : 0,
                                                }}
                                                    dangerouslySetInnerHTML={{
                                                        __html: Object.entries(item.links).reduce(
                                                            (text, [name, url]) => text.replace(
                                                                new RegExp(name, 'g'),
                                                                `<a href="${url}" target="_blank" style="color:#0c2e8a;text-decoration:none;font-weight:700;">${name}</a>`
                                                            ),
                                                            para
                                                        )
                                                    }}
                                                />
                                            ))}

                                            {/* LinkedIn links row */}
                                            <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
                                                {Object.entries(item.links).map(([name, url]) => (
                                                    <a key={name} href={url} target="_blank" rel="noopener noreferrer"
                                                        onClick={e => e.stopPropagation()}
                                                        style={{
                                                            display: 'inline-flex', alignItems: 'center', gap: '7px',
                                                            background: 'rgba(12,46,138,0.06)',
                                                            border: '1px solid rgba(12,46,138,0.15)',
                                                            color: '#0c2e8a', fontSize: '12px', fontWeight: 600,
                                                            padding: '7px 16px', borderRadius: '9999px',
                                                            textDecoration: 'none', transition: 'all 0.2s ease',
                                                        }}
                                                        onMouseEnter={e => {
                                                            (e.currentTarget as HTMLElement).style.background = 'rgba(12,46,138,0.12)';
                                                        }}
                                                        onMouseLeave={e => {
                                                            (e.currentTarget as HTMLElement).style.background = 'rgba(12,46,138,0.06)';
                                                        }}
                                                    >
                                                        <i className="fa fa-linkedin" /> {name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
