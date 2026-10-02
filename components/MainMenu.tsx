"use client";

import { config, links } from '@/lib/config';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function MainMenu() {
    const [activeModal, setActiveModal] = useState<'peos' | 'pos' | 'psos' | null>(null);

    // Close on Escape key press & prevent background scroll
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setActiveModal(null);
            }
        };
        if (activeModal) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [activeModal]);

    // Handle clicks from mobile nav or hash anchors across the page
    useEffect(() => {
        const handleGlobalClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('a');
            if (!target) return;
            const href = target.getAttribute('href') || '';
            if (href.endsWith('#peos') || href === '#peos') {
                e.preventDefault();
                setActiveModal('peos');
                document.body.classList.remove('mobile-nav-active');
            } else if (href.endsWith('#pos') || href === '#pos') {
                e.preventDefault();
                setActiveModal('pos');
                document.body.classList.remove('mobile-nav-active');
            } else if (href.endsWith('#psos') || href === '#psos') {
                e.preventDefault();
                setActiveModal('psos');
                document.body.classList.remove('mobile-nav-active');
            }
        };
        document.addEventListener('click', handleGlobalClick);
        return () => document.removeEventListener('click', handleGlobalClick);
    }, []);

    return (
        <>
            {/* Header */}
            <header id="header">
                <div className="container">
                    <div id="logo">
                        <Link href="/" className="scrollto" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            {/* Department Logo */}
                            <img
                                src="/img/logo/aiml-logo.jpg"
                                alt="AIML Department Logo"
                                style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    flexShrink: 0,
                                    border: '2px solid #E5E7EB',
                                }}
                            />
                            <span style={{ lineHeight: 1.25 }}>
                                <span style={{
                                    display: 'block',
                                    fontSize: '11px',
                                    color: '#2563EB',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1.5px',
                                    fontWeight: 700,
                                    fontFamily: 'var(--font-b)',
                                }}>CSPIT</span>
                                <span style={{
                                    display: 'block',
                                    fontSize: '15px',
                                    color: '#1E3A5F',
                                    fontFamily: 'var(--font-h)',
                                    fontWeight: 700,
                                    whiteSpace: 'nowrap',
                                }}>{config.name_of_dept}</span>
                            </span>
                        </Link>
                    </div>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li><Link href="/">Home</Link></li>
                            <li className="menu-has-children"><Link href="/#about_us">About</Link>
                                <ul>
                                    <li><Link href="/#vision">Vision</Link></li>
                                    <li><Link href="/#mission">Mission</Link></li>
                                    <li>
                                        <a 
                                            href="#peos" 
                                            onClick={(e) => { e.preventDefault(); setActiveModal('peos'); }}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Program Education Objectives (PEOs)
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="#pos" 
                                            onClick={(e) => { e.preventDefault(); setActiveModal('pos'); }}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Program Outcomes (POs)
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="#psos" 
                                            onClick={(e) => { e.preventDefault(); setActiveModal('psos'); }}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Program Specific Outcomes (PSOs)
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li><Link href="#">Student Services</Link>
                                <ul>
                                    <li>
                                        <a href="https://drive.google.com/file/d/1R43bm9OBMy74JAz8SMx_-T4RMSyDhD0R/view" target="_blank">Academic Calender</a>
                                    </li>
                                    <li>
                                        <a href="https://drive.google.com/file/d/1UO1ZbYqAX5ongBuoIh-hh8BwQK8z3m_l/view?usp=sharing" target="_blank">Booklet 24-25</a>
                                    </li>
                                    <li>
                                        <a href="https://drive.google.com/drive/folders/1CsUApZYDwfpl44itkin-ubXCAD0-FF5i?usp=drive_link" target="_blank">Syllabus</a>
                                    </li>
                                    <li>
                                        <a href="https://charusat.edu.in:912/eGovernance/" target="_blank">Egovernance</a>
                                    </li>
                                    <li>
                                        <a href="https://charusat.edu.in:912/UniExamResult/" target="_blank">Exam Result</a>
                                    </li>
                                    <li>
                                        <Link href="/student_achievements_all">Student Achievements</Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-has-children">
                                <Link href="#">Research Labs</Link>
                                <ul>
                                    <li><Link href="/323A">323-A</Link></li>
                                    <li><Link href="/323B">323-B</Link></li>
                                    <li><Link href="/324A">324-A</Link></li>
                                    <li><Link href="/324D">324-D</Link></li>
                                    <li><Link href="/325">Motorola Lab(325)</Link></li>
                                </ul>
                            </li>
                            <li className="nav-admission"><a href="https://admission.charusat.ac.in/" target="_blank">Admission</a></li>
                        </ul>

                    </nav>
                </div>

            </header>

            {/* Academic Modals — React-controlled overlay with full z-index backdrop */}
            {activeModal && (
                <div 
                    className="academic-modal-overlay" 
                    onClick={(e) => { if (e.target === e.currentTarget) setActiveModal(null); }}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="academic-modal-container">
                        {/* Top decorative gradient bar */}
                        <div className="academic-modal-bar" />

                        {/* Modal Header */}
                        <div className="academic-modal-header">
                            <div>
                                <span className="academic-modal-badge">
                                    <i className="fa fa-graduation-cap" /> Academic Framework
                                </span>
                                <h3 className="academic-modal-title">
                                    {activeModal === 'peos' && 'Program Education Objectives (PEOs)'}
                                    {activeModal === 'pos' && 'Program Outcomes (POs)'}
                                    {activeModal === 'psos' && 'Program Specific Outcomes (PSOs)'}
                                </h3>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="academic-modal-body">
                            {activeModal === 'peos' && (
                                <div className="academic-modal-list">
                                    <div className="objective-item-card">
                                        <span className="objective-badge">Objective 1</span>
                                        <h5 className="objective-title">Career Readiness</h5>
                                        <p className="objective-text">To prepare the student(s) for a successful career as a technocrat.</p>
                                    </div>
                                    <div className="objective-item-card">
                                        <span className="objective-badge">Objective 2</span>
                                        <h5 className="objective-title">Professional Ambience</h5>
                                        <p className="objective-text">To create an ambience; where the students will get the opportunity to become excellent working professionals.</p>
                                    </div>
                                    <div className="objective-item-card">
                                        <span className="objective-badge">Objective 3</span>
                                        <h5 className="objective-title">Lifelong Learning &amp; Teamwork</h5>
                                        <p className="objective-text">To provide continued professional development and lifelong learning throughout their career to inculcate strong teamwork and ready young minds for tangible contributions to the society.</p>
                                    </div>
                                </div>
                            )}

                            {activeModal === 'pos' && (
                                <div className="academic-modal-list">
                                    {[
                                        { code: 'PO 1', title: 'Engineering Knowledge', desc: 'Apply knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.' },
                                        { code: 'PO 2', title: 'Problem Analysis', desc: 'Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.' },
                                        { code: 'PO 3', title: 'Design/Development of Solutions', desc: 'Design solutions for complex engineering problems and design system components or processes that meet specified needs with appropriate consideration for public health and safety, and the cultural, societal, and environmental considerations.' },
                                        { code: 'PO 4', title: 'Conduct Investigations of Complex Problems', desc: 'Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.' },
                                        { code: 'PO 5', title: 'Modern Tool Usage', desc: 'Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.' },
                                        { code: 'PO 6', title: 'The Engineer and Society', desc: 'Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.' },
                                        { code: 'PO 7', title: 'Environment and Sustainability', desc: 'Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.' },
                                        { code: 'PO 8', title: 'Ethics', desc: 'Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.' },
                                        { code: 'PO 9', title: 'Individual and Team Work', desc: 'Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.' },
                                        { code: 'PO 10', title: 'Communication', desc: 'Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.' },
                                        { code: 'PO 11', title: 'Project Management and Finance', desc: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments." },
                                        { code: 'PO 12', title: 'Life-long Learning', desc: 'Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.' },
                                    ].map((po, idx) => (
                                        <div key={idx} className="objective-item-card">
                                            <span className="objective-badge">{po.code}</span>
                                            <h5 className="objective-title">{po.title}</h5>
                                            <p className="objective-text">{po.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeModal === 'psos' && (
                                <div className="academic-modal-list">
                                    <div className="objective-item-card">
                                        <span className="objective-badge">PSO 1</span>
                                        <h5 className="objective-title">Algorithmic Problem Solving</h5>
                                        <p className="objective-text">Graduates will demonstrate the ability to analyze complex problems, apply appropriate algorithms and develop innovative solutions that meet real-world challenges.</p>
                                    </div>
                                    <div className="objective-item-card">
                                        <span className="objective-badge">PSO 2</span>
                                        <h5 className="objective-title">Emerging Technology Competence</h5>
                                        <p className="objective-text">Graduates will be practical competence with emerging technologies in the multi-disciplinary area for sustainable contributions to the academic, industrial, and societal communities.</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className="academic-modal-footer">
                            <button 
                                type="button" 
                                className="academic-modal-close-btn" 
                                onClick={() => setActiveModal(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
