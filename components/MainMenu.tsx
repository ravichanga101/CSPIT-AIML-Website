"use client";

import { config, links } from '@/lib/config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function MainMenu() {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const [activeModal, setActiveModal] = useState<'peos' | 'pos' | 'psos' | null>(null);
    const [isPastSlider, setIsPastSlider] = useState(false);
    const [activeNav, setActiveNav] = useState<'home' | 'about' | 'services' | 'labs'>(() => {
        if (!isHome) {
            if (pathname?.startsWith('/32')) return 'labs';
            return 'services';
        }
        return 'home';
    });

    // Check hash on mount or pathname change
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const hash = window.location.hash;
            if (hash === '#about_us' || hash === '#vision' || hash === '#mission' || hash === '#peos' || hash === '#pos' || hash === '#psos') {
                setActiveNav('about');
            } else if (hash === '#student-achievements' || hash === '#student-clubs') {
                setActiveNav('services');
            }
        }
    }, [pathname]);

    // Track scroll to detect when the home slider has passed AND update activeNav via scroll-spy
    useEffect(() => {
        const handleScroll = () => {
            const intro = document.getElementById('intro');
            if (intro) {
                const rect = intro.getBoundingClientRect();
                // When bottom of intro slider is near or above the navbar (<= 90px), switch to light theme
                setIsPastSlider(rect.bottom <= 90);
            } else {
                // Pages without hero slider use light theme
                setIsPastSlider(true);
            }

            // Scroll-spy on home page
            if (isHome) {
                const scrollY = window.scrollY;
                const introBottom = intro ? intro.getBoundingClientRect().bottom : 0;

                // When user is viewing the hero/slider section
                if (scrollY < 200 || introBottom > 150) {
                    setActiveNav('home');
                } else {
                    const servicesEl = document.getElementById('student-achievements') || document.getElementById('student-chapter') || document.getElementById('student-clubs');
                    const aboutEl = document.getElementById('about_us') || document.getElementById('services');

                    const servicesTop = servicesEl ? servicesEl.getBoundingClientRect().top : 99999;
                    const aboutTop = aboutEl ? aboutEl.getBoundingClientRect().top : 99999;

                    if (servicesTop <= 200) {
                        setActiveNav('services');
                    } else if (aboutTop <= 350) {
                        setActiveNav('about');
                    } else {
                        setActiveNav('home');
                    }
                }
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [pathname, isHome]);

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
                setActiveNav('about');
                document.body.classList.remove('mobile-nav-active');
            } else if (href.endsWith('#pos') || href === '#pos') {
                e.preventDefault();
                setActiveModal('pos');
                setActiveNav('about');
                document.body.classList.remove('mobile-nav-active');
            } else if (href.endsWith('#psos') || href === '#psos') {
                e.preventDefault();
                setActiveModal('psos');
                setActiveNav('about');
                document.body.classList.remove('mobile-nav-active');
            }
        };
        document.addEventListener('click', handleGlobalClick);
        return () => document.removeEventListener('click', handleGlobalClick);
    }, []);

    return (
        <>
            {/* Header: Floating Frosted Glass Navbar */}
            <header 
                id="header" 
                className={`header-floating-pill ${isPastSlider ? 'header-theme-light' : 'header-theme-dark'}`}
            >
                <div className="container header-pill-container">
                    <div id="logo">
                        <Link href="/" className="scrollto" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            {/* Department Logo */}
                            <img
                                src="/img/logo/aiml-logo.jpg"
                                alt="AIML Department Logo"
                                className="nav-dept-logo"
                            />
                            <span style={{ lineHeight: 1.25 }}>
                                <span className="nav-logo-sub">CSPIT</span>
                                <span className="nav-logo-main">{config.name_of_dept}</span>
                            </span>
                        </Link>
                    </div>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li className={activeNav === 'home' ? "menu-active" : ""}>
                                <Link 
                                    href="/" 
                                    onClick={(e) => { 
                                        setActiveNav('home'); 
                                        if (isHome) {
                                            e.preventDefault();
                                            window.history.pushState(null, '', '/');
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    <span>Home</span>
                                    <span className="nav-item-indicator" />
                                </Link>
                            </li>
                            <li className={`menu-has-children ${activeNav === 'about' ? "menu-active" : ""}`}>
                                <Link 
                                    href="/#about_us" 
                                    onClick={(e) => { 
                                        setActiveNav('about'); 
                                        const el = document.getElementById('about_us');
                                        if (el) {
                                            e.preventDefault();
                                            window.history.pushState(null, '', '#about_us');
                                            const y = el.getBoundingClientRect().top + window.scrollY - 85;
                                            window.scrollTo({ top: y, behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    <span>About</span>
                                    <span className="nav-item-indicator" />
                                </Link>
                                <ul>
                                    <li>
                                        <Link 
                                            href="/#vision-mission" 
                                            onClick={(e) => { 
                                                setActiveNav('about'); 
                                                const el = document.getElementById('vision-mission');
                                                if (el) {
                                                    e.preventDefault();
                                                    window.history.pushState(null, '', '#vision');
                                                    const y = el.getBoundingClientRect().top + window.scrollY - 85;
                                                    window.scrollTo({ top: y, behavior: 'smooth' });
                                                }
                                            }}
                                        >
                                            Vision
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="/#vision-mission" 
                                            onClick={(e) => { 
                                                setActiveNav('about'); 
                                                const el = document.getElementById('vision-mission');
                                                if (el) {
                                                    e.preventDefault();
                                                    window.history.pushState(null, '', '#mission');
                                                    const y = el.getBoundingClientRect().top + window.scrollY - 85;
                                                    window.scrollTo({ top: y, behavior: 'smooth' });
                                                }
                                            }}
                                        >
                                            Mission
                                        </Link>
                                    </li>
                                    <li>
                                        <a 
                                            href="#peos" 
                                            onClick={(e) => { e.preventDefault(); setActiveModal('peos'); setActiveNav('about'); }}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Program Education Objectives (PEOs)
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="#pos" 
                                            onClick={(e) => { e.preventDefault(); setActiveModal('pos'); setActiveNav('about'); }}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Program Outcomes (POs)
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="#psos" 
                                            onClick={(e) => { e.preventDefault(); setActiveModal('psos'); setActiveNav('about'); }}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Program Specific Outcomes (PSOs)
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className={`menu-has-children ${activeNav === 'services' ? "menu-active" : ""}`}>
                                <Link href="#" onClick={(e) => { e.preventDefault(); setActiveNav('services'); }}>
                                    <span>Student Services</span>
                                    <span className="nav-item-indicator" />
                                </Link>
                                <ul>
                                    <li>
                                        <a href="https://drive.google.com/file/d/1R43bm9OBMy74JAz8SMx_-T4RMSyDhD0R/view" target="_blank" rel="noopener noreferrer">Academic Calender</a>
                                    </li>
                                    <li>
                                        <a href="https://drive.google.com/file/d/1UO1ZbYqAX5ongBuoIh-hh8BwQK8z3m_l/view?usp=sharing" target="_blank" rel="noopener noreferrer">Booklet 24-25</a>
                                    </li>
                                    <li>
                                        <a href="https://drive.google.com/drive/folders/1CsUApZYDwfpl44itkin-ubXCAD0-FF5i?usp=drive_link" target="_blank" rel="noopener noreferrer">Syllabus</a>
                                    </li>
                                    <li>
                                        <a href="https://drive.google.com/drive/folders/1aYBRcmhJJXvYBq8ojPKlc5AVUqZa6Cpi" target="_blank" rel="noopener noreferrer">Old Question Paper</a>
                                    </li>
                                    <li>
                                        <a href="https://charusat.edu.in:912/eGovernance/" target="_blank" rel="noopener noreferrer">Egovernance</a>
                                    </li>
                                    <li>
                                        <a href="http://egov.charusat//" target="_blank" rel="noopener noreferrer">
                                            <span>Egovernance for Event Entry</span>
                                            <span className="nav-sub-note" style={{ display: 'block', fontSize: '11px', fontWeight: 400, opacity: 0.82, marginTop: '3px', lineHeight: 1.3 }}>
                                                (only accesible if you connect with charusat wifi)
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://charusat.edu.in:912/UniExamResult/" target="_blank" rel="noopener noreferrer">Exam Result</a>
                                    </li>
                                    <li>
                                        <Link href="/#student-achievements" onClick={() => setActiveNav('services')}>Student Achievements</Link>
                                    </li>
                                </ul>
                            </li>

                            <li className={`menu-has-children ${activeNav === 'labs' ? "menu-active" : ""}`}>
                                <Link href="#" onClick={(e) => { e.preventDefault(); setActiveNav('labs'); }}>
                                    <span>Research Labs</span>
                                    <span className="nav-item-indicator" />
                                </Link>
                                <ul>
                                    <li><Link href="/323A" onClick={() => setActiveNav('labs')}>323-A</Link></li>
                                    <li><Link href="/323B" onClick={() => setActiveNav('labs')}>323-B</Link></li>
                                    <li><Link href="/324A" onClick={() => setActiveNav('labs')}>324-A</Link></li>
                                    <li><Link href="/324D" onClick={() => setActiveNav('labs')}>324-D</Link></li>
                                    <li><Link href="/325" onClick={() => setActiveNav('labs')}>Motorola Lab(325)</Link></li>
                                </ul>
                            </li>
                            <li className="nav-admission">
                                <a href="https://admission.charusat.ac.in/" target="_blank" rel="noopener noreferrer" className="nav-admission-btn">
                                    <i className="fa fa-graduation-cap" />
                                    <span>Admission</span>
                                    <i className="fa fa-arrow-right" />
                                </a>
                            </li>
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
