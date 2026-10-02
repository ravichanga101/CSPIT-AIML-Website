'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ClubMember {
    role: string;
    name: string;
    email: string;
    phone: string;
}

interface ClubInfo {
    name: string;
    type: string;
    desc: string;
    img: string;
    fallback: string;
    color: string;
    website?: string;
    facultyCoordinator: string;
    facultyEmail?: string;
    leadership: ClubMember[];
}

const clubs: ClubInfo[] = [
    {
        img: '/img/clubs/IMG_0817.JPG',
        fallback: '/img/portfolio/1.JPG',
        name: 'Innovators Club',
        type: 'Technical Innovation',
        desc: 'Fostering creativity and innovation through hands-on projects, workshops, and collaborative problem-solving in emerging technologies.',
        color: '#0c2e8a',
        website: 'https://cspit.charusat.ac.in/club/Innovators%20Club',
        facultyCoordinator: 'Prof. Niyati Patel',
        facultyEmail: 'niyatipatel.aiml@charusat.ac.in',
        leadership: [
            {
                role: 'Club Mentor',
                name: 'Dhairya Harivadan Patel',
                email: '24aiml032@charusat.edu.in',
                phone: '8799606710'
            },
            {
                role: 'Club Mentor',
                name: 'Jiya Bhavik Sadaria',
                email: '24aiml054@charusat.edu.in',
                phone: '8160338177'
            },
            {
                role: 'President',
                name: 'Mayur Maghrola',
                email: '24aiml021@charusat.edu.in',
                phone: '7777982625'
            }
        ]
    },
    {
        img: '/img/clubs/LOGO AI FOR ALL.jpg',
        fallback: '/img/portfolio/2.JPG',
        name: 'AI For All Club',
        type: 'AI Awareness & Learning',
        desc: 'Democratizing artificial intelligence education, promoting AI literacy and ethical AI practices through interactive sessions.',
        color: '#6d28d9',
        website: '',
        facultyCoordinator: 'Dr. Nirav Bhatt',
        facultyEmail: 'niravbhatt.it@charusat.ac.in',
        leadership: [
            {
                role: 'Club Mentor',
                name: 'Have Patel',
                email: '24aiml036@charusat.edu.in',
                phone: '9327198199'
            },
            {
                role: 'Club Mentor',
                name: 'Prajapati Rudra',
                email: '24aiml053@charusat.edu.in',
                phone: '6353479871'
            },
            {
                role: 'President',
                name: 'Khushi Vadadoriya',
                email: '24aiml071@charusat.edu.in',
                phone: '8487829686'
            }
        ]
    },
    {
        img: '/img/clubs/Math for AI.JPG',
        fallback: '/img/portfolio/3.JPG',
        name: 'Math For AI Club',
        type: 'Mathematical Foundation',
        desc: 'Building strong mathematical foundations for AI, exploring the critical role of mathematics in machine learning algorithms.',
        color: '#059669',
        website: '',
        facultyCoordinator: 'Prof. Mukti Patel',
        facultyEmail: 'muktipatel.aiml@charusat.ac.in',
        leadership: [
            {
                role: 'Club Mentor',
                name: 'Krish Singh',
                email: '24aiml065@charusat.edu.in',
                phone: '7715959442'
            },
            {
                role: 'Club Mentor',
                name: 'Harshil N Thakkar',
                email: '24aiml068@charusat.edu.in',
                phone: '9825293431'
            },
            {
                role: 'President',
                name: 'Smit Sureja',
                email: '24aiml066@charusat.edu.in',
                phone: '8160041789'
            }
        ]
    },
];

export default function StudentClubs() {
    const [selectedClub, setSelectedClub] = useState<ClubInfo | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Escape key listener & body scroll lock
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedClub(null);
            }
        };

        if (selectedClub) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [selectedClub]);

    return (
        <section id="student-achievements" className="wow fadeInUp" style={{ background: '#f5f7fa', padding: '90px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <span className="ref-badge"><i className="fa fa-users" />Student Community</span>
                </div>
                <h2 className="ref-heading" style={{ textAlign: 'center', marginBottom: '16px' }}>
                    Student <span className="grad-green">Clubs</span>
                </h2>
                <p style={{ textAlign: 'center', color: '#64748b', fontSize: '15px', marginBottom: '50px' }}>
                    Empowering student excellence through innovation, collaboration, and achievement
                </p>

                <div className="row" style={{ justifyContent: 'center' }}>
                    {clubs.map((club, i) => (
                        <div key={i} className="col-lg-4 col-md-6" style={{ marginBottom: '28px' }}>
                            <div 
                                className="ref-card club-card-container" 
                                style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}
                                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = club.color + '22'; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = `0 16px 48px rgba(15,23,42,0.1), 0 0 0 1px ${club.color}10`; }}
                                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'var(--shadow-sm)'; }}
                            >
                                <div style={{ height: '240px', overflow: 'hidden', position: 'relative', background: '#f1f5f9' }}>
                                    <img 
                                        src={club.img} 
                                        alt={club.name} 
                                        onError={e => e.currentTarget.src = club.fallback}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} 
                                    />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 40%,rgba(255,255,255,0.9) 100%)' }} />
                                </div>
                                <div style={{ padding: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                    <div style={{ display: 'inline-block', alignSelf: 'center', background: club.color + '0c', border: `1px solid ${club.color}18`, borderRadius: '9999px', padding: '3px 14px', fontSize: '10px', fontWeight: 700, color: club.color, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                                        {club.type}
                                    </div>
                                    <h4 style={{ fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '18px', color: '#0f172a', marginBottom: '10px' }}>
                                        {club.name}
                                    </h4>
                                    <p style={{ color: '#64748b', fontSize: '13px', lineHeight: 1.7, margin: '0 0 20px 0', flex: 1 }}>
                                        {club.desc}
                                    </p>

                                    {/* Action Button - Single View Details */}
                                    <div className="club-card-actions">
                                        <button 
                                            type="button" 
                                            onClick={() => setSelectedClub(club)} 
                                            className="club-btn club-btn-details"
                                        >
                                            <span>View Details</span>
                                            <i className="fa fa-arrow-right" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Club Details Modal Popup */}
            {mounted && selectedClub && createPortal(
                <div 
                    className="academic-modal-overlay club-modal-overlay" 
                    onClick={(e) => { if (e.target === e.currentTarget) setSelectedClub(null); }}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="academic-modal-container club-modal-container">
                        {/* Top Accent Bar */}
                        <div 
                            className="academic-modal-bar" 
                            style={{ background: `linear-gradient(90deg, #1E3A5F 0%, ${selectedClub.color} 50%, #38BDF8 100%)` }} 
                        />

                        {/* Modal Header */}
                        <div className="academic-modal-header">
                            <div>
                                <span className="academic-modal-badge" style={{ background: selectedClub.color + '12', color: selectedClub.color }}>
                                    <i className="fa fa-users" /> Student Club Leadership &amp; Details
                                </span>
                                <h3 className="academic-modal-title">
                                    {selectedClub.name}
                                </h3>
                                <p style={{ margin: '4px 0 0 0', fontSize: '13.5px', color: '#64748B' }}>
                                    {selectedClub.type} · Department of AIML, CSPIT
                                </p>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="academic-modal-body" style={{ background: '#FAFBFD' }}>
                            {/* Club Overview Card */}
                            <div className="club-modal-desc-card">
                                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.7, color: '#334155' }}>
                                    {selectedClub.desc}
                                </p>
                            </div>

                            {/* Faculty Coordinator Card */}
                            {selectedClub.facultyCoordinator && (
                                <div className="club-faculty-card">
                                    <div className="club-faculty-icon">
                                        <i className="fa fa-user-circle" />
                                    </div>
                                    <div className="club-faculty-info">
                                        <span className="club-role-tag">Club Faculty Coordinator</span>
                                        <h4 className="club-faculty-name">{selectedClub.facultyCoordinator}</h4>
                                        <span className="club-faculty-dept">Department of Artificial Intelligence &amp; Machine Learning</span>
                                        {selectedClub.facultyEmail && (
                                            <div style={{ marginTop: '10px' }}>
                                                <a 
                                                    href={`mailto:${selectedClub.facultyEmail}`} 
                                                    className="club-contact-link"
                                                    style={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '8px',
                                                        fontSize: '12.5px',
                                                        fontWeight: 500,
                                                        color: '#475569',
                                                        textDecoration: 'none',
                                                        padding: '6px 12px',
                                                        borderRadius: '8px',
                                                        background: '#F8FAFC',
                                                        border: '1px solid #E2E8F0',
                                                        transition: 'all 0.2s ease',
                                                        wordBreak: 'break-all'
                                                    }}
                                                    onMouseEnter={e => {
                                                        const el = e.currentTarget as HTMLElement;
                                                        el.style.background = '#EFF6FF';
                                                        el.style.color = '#2563EB';
                                                        el.style.borderColor = '#BFDBFE';
                                                        el.style.transform = 'translateY(-1px)';
                                                        el.style.boxShadow = '0 3px 8px rgba(37,99,235,0.08)';
                                                    }}
                                                    onMouseLeave={e => {
                                                        const el = e.currentTarget as HTMLElement;
                                                        el.style.background = '#F8FAFC';
                                                        el.style.color = '#475569';
                                                        el.style.borderColor = '#E2E8F0';
                                                        el.style.transform = 'translateY(0)';
                                                        el.style.boxShadow = 'none';
                                                    }}
                                                >
                                                    <i className="fa fa-envelope-o" style={{ color: '#2563EB', fontSize: '13px', flexShrink: 0 }} />
                                                    <span>{selectedClub.facultyEmail}</span>
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Leadership Structure (3 Cards in 1 Row: 2 Mentors & 1 President) */}
                            {selectedClub.leadership && selectedClub.leadership.length > 0 && (
                                <div className="club-leadership-section">
                                    <h5 className="club-section-title">
                                        <i className="fa fa-id-badge" /> Executive Committee &amp; Mentors
                                    </h5>

                                    <div className="club-members-row">
                                        {selectedClub.leadership.map((member, idx) => (
                                            <div key={idx} className="club-member-card">
                                                <div className="club-member-header">
                                                    <span className={`club-member-badge ${member.role === 'President' ? 'president-badge' : 'mentor-badge'}`}>
                                                        <i className={`fa ${member.role === 'President' ? 'fa-star' : 'fa-graduation-cap'}`} /> {member.role}
                                                    </span>
                                                </div>
                                                <h4 className="club-member-name">{member.name}</h4>
                                                <div className="club-member-contacts">
                                                    <a href={`mailto:${member.email}`} className="club-contact-link">
                                                        <i className="fa fa-envelope-o" />
                                                        <span>{member.email}</span>
                                                    </a>
                                                    <a href={`tel:${member.phone}`} className="club-contact-link">
                                                        <i className="fa fa-phone" />
                                                        <span>{member.phone}</span>
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className="academic-modal-footer club-modal-footer">
                            {selectedClub.website ? (
                                <a 
                                    href={selectedClub.website} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="club-modal-portal-btn"
                                >
                                    <span>Visit Official Club Website</span>
                                    <i className="fa fa-external-link" />
                                </a>
                            ) : <div />}
                            <button 
                                type="button" 
                                className="academic-modal-close-btn" 
                                onClick={() => setSelectedClub(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
}
