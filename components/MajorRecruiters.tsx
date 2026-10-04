'use client';

import React from 'react';

// Row 1: 11 Companies (Continuously moving Left -> Right)
// Row 2: 11 Companies (Continuously moving Right -> Left)

interface RecruiterItem {
    name: string;
    logo: React.ReactNode;
}

const row1Recruiters: RecruiterItem[] = [
    {
        name: 'TCS',
        logo: (
            <svg viewBox="0 0 180 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '42px', width: 'auto', maxWidth: '170px' }}>
                <text x="6" y="33" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="900" fontSize="30" fill="#003865" letterSpacing="-0.5">TCS</text>
                <circle cx="78" cy="27" r="4.5" fill="#E21875" />
                <g transform="translate(90, 14)">
                    <text x="0" y="9" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="800" fontSize="8" fill="#003865" letterSpacing="0.8">TATA</text>
                    <text x="0" y="18" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="600" fontSize="7" fill="#64748B" letterSpacing="0.2">CONSULTANCY</text>
                    <text x="0" y="26" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="600" fontSize="7" fill="#64748B" letterSpacing="0.2">SERVICES</text>
                </g>
            </svg>
        ),
    },
    {
        name: 'Infosys',
        logo: (
            <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '40px', width: 'auto', maxWidth: '160px' }}>
                <text x="8" y="32" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="700" fontSize="28" fill="#007CC3" letterSpacing="-0.5">infosys</text>
                <circle cx="114" cy="18" r="3.5" fill="#00A3E0" />
                <text x="10" y="44" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="600" fontSize="7.5" fill="#64748B" letterSpacing="1">NAVIGATE YOUR NEXT</text>
            </svg>
        ),
    },
    {
        name: 'Wipro',
        logo: (
            <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '40px', width: 'auto', maxWidth: '155px' }}>
                <g transform="translate(10, 8)">
                    <circle cx="10" cy="10" r="5" fill="#EA1821" />
                    <circle cx="22" cy="10" r="4.5" fill="#F37021" />
                    <circle cx="10" cy="22" r="4.5" fill="#78BE20" />
                    <circle cx="22" cy="22" r="5" fill="#00A3E0" />
                    <circle cx="16" cy="16" r="3.2" fill="#262262" />
                </g>
                <text x="46" y="32" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="800" fontSize="26" fill="#262262" letterSpacing="-0.5">wipro</text>
            </svg>
        ),
    },
    {
        name: 'IBM',
        logo: (
            <svg viewBox="0 0 140 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '36px', width: 'auto', maxWidth: '135px' }}>
                <g fill="#0F62FE">
                    {/* I */}
                    <rect x="10" y="10" width="16" height="2.6" />
                    <rect x="10" y="14.5" width="16" height="2.6" />
                    <rect x="14.5" y="19" width="7" height="2.6" />
                    <rect x="14.5" y="23.5" width="7" height="2.6" />
                    <rect x="14.5" y="28" width="7" height="2.6" />
                    <rect x="14.5" y="32.5" width="7" height="2.6" />
                    <rect x="10" y="37" width="16" height="2.6" />
                    <rect x="10" y="41.5" width="16" height="2.6" />

                    {/* B */}
                    <rect x="33" y="10" width="22" height="2.6" />
                    <rect x="33" y="14.5" width="25" height="2.6" />
                    <rect x="33" y="19" width="7" height="2.6" /><rect x="52" y="19" width="7" height="2.6" />
                    <rect x="33" y="23.5" width="23" height="2.6" />
                    <rect x="33" y="28" width="24" height="2.6" />
                    <rect x="33" y="32.5" width="7" height="2.6" /><rect x="53" y="32.5" width="7" height="2.6" />
                    <rect x="33" y="37" width="25" height="2.6" />
                    <rect x="33" y="41.5" width="22" height="2.6" />

                    {/* M */}
                    <rect x="67" y="10" width="7" height="2.6" /><rect x="85" y="10" width="7" height="2.6" /><rect x="103" y="10" width="7" height="2.6" />
                    <rect x="67" y="14.5" width="9" height="2.6" /><rect x="84" y="14.5" width="9" height="2.6" /><rect x="101" y="14.5" width="9" height="2.6" />
                    <rect x="67" y="19" width="11" height="2.6" /><rect x="83" y="19" width="11" height="2.6" /><rect x="99" y="19" width="11" height="2.6" />
                    <rect x="67" y="23.5" width="13" height="2.6" /><rect x="82" y="23.5" width="13" height="2.6" /><rect x="97" y="23.5" width="13" height="2.6" />
                    <rect x="67" y="28" width="7" height="2.6" /><rect x="80" y="28" width="7" height="2.6" /><rect x="92" y="28" width="7" height="2.6" /><rect x="103" y="28" width="7" height="2.6" />
                    <rect x="67" y="32.5" width="7" height="2.6" /><rect x="78" y="32.5" width="7" height="2.6" /><rect x="94" y="32.5" width="7" height="2.6" /><rect x="103" y="32.5" width="7" height="2.6" />
                    <rect x="67" y="37" width="7" height="2.6" /><rect x="103" y="37" width="7" height="2.6" />
                    <rect x="67" y="41.5" width="7" height="2.6" /><rect x="103" y="41.5" width="7" height="2.6" />
                </g>
            </svg>
        ),
    },
    {
        name: 'Tech Mahindra',
        logo: (
            <svg viewBox="0 0 180 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '38px', width: 'auto', maxWidth: '175px' }}>
                <g transform="translate(10, 11)">
                    <rect x="0" y="0" width="11" height="11" rx="2" fill="#E31837" />
                    <rect x="15" y="0" width="11" height="11" rx="2" fill="#E31837" opacity="0.85" />
                    <rect x="8" y="15" width="11" height="11" rx="2" fill="#E31837" />
                </g>
                <text x="44" y="23" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="800" fontSize="15" fill="#E31837">Tech</text>
                <text x="44" y="37" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="700" fontSize="15" fill="#1E293B">Mahindra</text>
            </svg>
        ),
    },
    {
        name: 'Capgemini',
        logo: (
            <svg viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '38px', width: 'auto', maxWidth: '165px' }}>
                <g transform="translate(8, 10)">
                    <path d="M14 2 C10 6 7 9 7 13 C7 16 9 18 12 18 C14 18 15 17 17 15.5 C18 17 20 18 22 18 C25 18 27 16 27 13 C27 9 24 6 20 2 Z" fill="#0070AD" />
                    <path d="M15 16 L15 22 L19 22 L19 16 Z" fill="#0070AD" />
                </g>
                <text x="44" y="31" fontFamily="Georgia, Cambria, 'Times New Roman', serif" fontWeight="700" fontSize="21" fill="#002B49" letterSpacing="-0.3">Capgemini</text>
            </svg>
        ),
    },
    {
        name: 'Cognizant',
        logo: (
            <svg viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '38px', width: 'auto', maxWidth: '165px' }}>
                <g transform="translate(10, 11)">
                    <circle cx="14" cy="14" r="13" stroke="#0033A0" strokeWidth="3" fill="none" strokeDasharray="55 15" />
                    <path d="M14 5 A9 9 0 0 1 23 14" stroke="#00B4D8" strokeWidth="3" strokeLinecap="round" fill="none" />
                    <circle cx="14" cy="14" r="4" fill="#0033A0" />
                </g>
                <text x="45" y="32" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="700" fontSize="21" fill="#0033A0" letterSpacing="-0.3">cognizant</text>
            </svg>
        ),
    },
    {
        name: 'Amazon',
        logo: (
            <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '38px', width: 'auto', maxWidth: '150px' }}>
                <text x="16" y="28" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="800" fontSize="26" fill="#141920" letterSpacing="-0.5">amazon</text>
                <path d="M22 34 C42 42 75 42 98 33" stroke="#FF9900" strokeWidth="3.2" strokeLinecap="round" fill="none" />
                <polygon points="96,30 103,33 97,37" fill="#FF9900" />
            </svg>
        ),
    },
    {
        name: 'eInfochips',
        logo: (
            <svg viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '38px', width: 'auto', maxWidth: '165px' }}>
                <g transform="translate(10, 8)">
                    <ellipse cx="16" cy="17" rx="13" ry="7" transform="rotate(-30 16 17)" stroke="#E31837" strokeWidth="2.2" fill="none" />
                    <text x="11" y="23" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="800" fontSize="20" fill="#002D62">e</text>
                </g>
                <text x="44" y="27" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="800" fontSize="18" fill="#002D62">infochips</text>
                <text x="45" y="38" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="700" fontSize="7" fill="#E31837" letterSpacing="0.4">AN ARROW COMPANY</text>
            </svg>
        ),
    },
    {
        name: 'CREST Data System',
        logo: (
            <svg viewBox="0 0 180 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '38px', width: 'auto', maxWidth: '175px' }}>
                <g transform="translate(12, 10)">
                    <polygon points="12,2 23,8 12,14 1,8" fill="#E63946" />
                    <polygon points="12,15 23,21 12,27 1,21" fill="#1D3557" />
                </g>
                <text x="44" y="24" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="900" fontSize="16" fill="#1D3557" letterSpacing="1">CREST</text>
                <text x="44" y="37" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="700" fontSize="8.5" fill="#E63946" letterSpacing="0.8">DATA SYSTEMS</text>
            </svg>
        ),
    },
    {
        name: 'RapidOps',
        logo: (
            <svg viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '38px', width: 'auto', maxWidth: '165px' }}>
                <g transform="translate(12, 11)">
                    <polygon points="4,2 14,14 4,26" fill="#6366F1" />
                    <polygon points="14,2 24,14 14,26" fill="#06B6D4" />
                </g>
                <text x="44" y="31" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="800" fontSize="21" fill="#1E293B">Rapid<tspan fill="#6366F1">Ops</tspan></text>
            </svg>
        ),
    },
];

const row2Recruiters: RecruiterItem[] = [
    {
        name: 'Tatvasoft',
        logo: (
            <svg viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '38px', width: 'auto', maxWidth: '165px' }}>
                <g transform="translate(12, 10)">
                    <path d="M12 2 C18 6, 22 14, 18 22 C14 28, 4 26, 4 18 C4 10, 10 4, 12 2 Z" fill="#BA256E" />
                    <circle cx="16" cy="18" r="4" fill="#334155" />
                </g>
                <text x="42" y="27" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="700" fontSize="18" fill="#1E293B">Tatva<tspan fill="#BA256E">Soft</tspan></text>
                <text x="43" y="38" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontStyle="italic" fontSize="7.5" fill="#64748B">sculpting thoughts...</text>
            </svg>
        ),
    },
    {
        name: 'L&T',
        logo: (
            <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '38px', width: 'auto', maxWidth: '155px' }}>
                <g transform="translate(12, 9)">
                    <circle cx="16" cy="16" r="15" stroke="#00205B" strokeWidth="2.5" fill="#00205B" />
                    <circle cx="16" cy="16" r="12" stroke="#EDB810" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
                    <text x="16" y="21" fontFamily="Georgia, serif" fontWeight="900" fontSize="13" fill="#FFFFFF" textAnchor="middle">L&amp;T</text>
                </g>
                <text x="50" y="26" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="800" fontSize="15" fill="#00205B">Larsen &amp; Toubro</text>
                <text x="50" y="37" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="600" fontSize="8" fill="#EDB810" letterSpacing="0.4">ENGINEERING &amp; TECH</text>
            </svg>
        ),
    },
    {
        name: 'Adani Group',
        logo: (
            <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '38px', width: 'auto', maxWidth: '155px' }}>
                <defs>
                    <linearGradient id="recruiterAdaniGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1F4788" />
                        <stop offset="50%" stopColor="#43A047" />
                        <stop offset="100%" stopColor="#6B2D82" />
                    </linearGradient>
                </defs>
                <text x="14" y="33" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="700" fontSize="30" fill="url(#recruiterAdaniGrad)" letterSpacing="-0.5">adani</text>
                <text x="98" y="23" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="600" fontSize="8.5" fill="#475569" letterSpacing="1">GROUP</text>
            </svg>
        ),
    },
    {
        name: 'Torrent Power',
        logo: (
            <svg viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '38px', width: 'auto', maxWidth: '165px' }}>
                <g transform="translate(10, 10)">
                    <path d="M14 4 A11 11 0 0 1 25 15 A11 11 0 0 1 14 26 A6 6 0 0 0 20 15 A6 6 0 0 0 14 4 Z" fill="#00843D" />
                    <path d="M14 26 A11 11 0 0 1 3 15 A11 11 0 0 1 14 4 A6 6 0 0 0 8 15 A6 6 0 0 0 14 26 Z" fill="#ED1C24" />
                </g>
                <text x="42" y="26" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="800" fontSize="16" fill="#00843D">torrent</text>
                <text x="42" y="38" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="900" fontSize="12" fill="#ED1C24" letterSpacing="1">POWER</text>
            </svg>
        ),
    },
    {
        name: 'BOSCH',
        logo: (
            <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '38px', width: 'auto', maxWidth: '155px' }}>
                <g transform="translate(12, 11)">
                    <circle cx="14" cy="14" r="13" stroke="#EA1B23" strokeWidth="2.8" fill="none" />
                    <rect x="7" y="11" width="14" height="6" rx="1.5" stroke="#EA1B23" strokeWidth="2" fill="none" />
                    <line x1="7" y1="14" x2="21" y2="14" stroke="#EA1B23" strokeWidth="1.8" />
                </g>
                <text x="48" y="33" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="900" fontSize="22" fill="#EA1B23" letterSpacing="1">BOSCH</text>
            </svg>
        ),
    },
    {
        name: 'Tata',
        logo: (
            <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '38px', width: 'auto', maxWidth: '155px' }}>
                <g transform="translate(14, 10)">
                    <ellipse cx="18" cy="15" rx="17" ry="14" fill="#00478F" />
                    <path d="M9 10 L27 10 M18 10 L18 22" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                </g>
                <text x="58" y="33" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="900" fontSize="23" fill="#00478F" letterSpacing="2">TATA</text>
            </svg>
        ),
    },
    {
        name: 'Amul',
        logo: (
            <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '38px', width: 'auto', maxWidth: '155px' }}>
                <text x="14" y="30" fontFamily="'Segoe Script', 'Brush Script MT', cursive, sans-serif" fontWeight="bold" fontSize="30" fill="#ED1C24" letterSpacing="1">Amul</text>
                <text x="16" y="42" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="600" fontSize="7.5" fill="#003366" letterSpacing="0.5">The Taste of India</text>
            </svg>
        ),
    },
    {
        name: 'Reliance',
        logo: (
            <svg viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '38px', width: 'auto', maxWidth: '165px' }}>
                <g transform="translate(10, 10)">
                    <circle cx="15" cy="15" r="14" fill="#003B75" />
                    <polygon points="15,4 18,12 26,15 18,18 15,26 12,18 4,15 12,12" fill="#DC2626" />
                    <circle cx="15" cy="15" r="3" fill="#FFFFFF" />
                </g>
                <text x="46" y="27" fontFamily="Georgia, serif" fontWeight="900" fontSize="18" fill="#003B75">Reliance</text>
                <text x="46" y="38" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="600" fontSize="7" fill="#64748B" letterSpacing="0.5">INDUSTRIES LIMITED</text>
            </svg>
        ),
    },
    {
        name: 'ICICI Bank',
        logo: (
            <svg viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '38px', width: 'auto', maxWidth: '165px' }}>
                <g transform="translate(12, 11)">
                    <rect x="0" y="0" width="28" height="28" rx="6" fill="#F58220" />
                    <text x="14" y="21" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="900" fontSize="18" fill="#FFFFFF" textAnchor="middle">i</text>
                </g>
                <text x="48" y="30" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="800" fontSize="18" fill="#990000">ICICI Bank</text>
            </svg>
        ),
    },
    {
        name: 'Motorola',
        logo: (
            <svg viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '38px', width: 'auto', maxWidth: '165px' }}>
                <g transform="translate(12, 10)">
                    <circle cx="15" cy="15" r="14" fill="#001489" />
                    <path d="M7 21 C10 12, 12 9, 14 9 C16 9, 15 15, 16 15 C17 15, 16 9, 18 9 C20 9, 22 12, 25 21 C21 17, 18 17, 16 21 C14 17, 11 17, 7 21 Z" fill="#FFFFFF" />
                </g>
                <text x="48" y="32" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="700" fontSize="20" fill="#001489" letterSpacing="-0.3">motorola</text>
            </svg>
        ),
    },
    {
        name: 'Philips',
        logo: (
            <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '38px', width: 'auto', maxWidth: '155px' }}>
                <g transform="translate(12, 9)">
                    <path d="M6 3 L24 3 C24 3, 27 18, 15 28 C3 18, 6 3, 6 3 Z" fill="#0C549C" />
                    <circle cx="15" cy="10" r="1.5" fill="#FFFFFF" />
                    <circle cx="15" cy="20" r="1.5" fill="#FFFFFF" />
                    <circle cx="10" cy="15" r="1.5" fill="#FFFFFF" />
                    <circle cx="20" cy="15" r="1.5" fill="#FFFFFF" />
                    <path d="M9 13 Q15 17 21 13 M9 17 Q15 21 21 17" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />
                </g>
                <text x="46" y="32" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="900" fontSize="19" fill="#0C549C" letterSpacing="1">PHILIPS</text>
            </svg>
        ),
    },
];

// Repeat items 3 times for a flawless, smooth, seamless infinite loop
const row1Items = [...row1Recruiters, ...row1Recruiters, ...row1Recruiters];
const row2Items = [...row2Recruiters, ...row2Recruiters, ...row2Recruiters];

export default function MajorRecruiters() {
    return (
        <section id="clients" className="wow fadeInUp recruiters-section">
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <span className="ref-badge">
                        <i className="fa fa-briefcase" />Placement Partners
                    </span>
                </div>
                <h2 className="ref-heading" style={{ textAlign: 'center', marginBottom: '12px' }}>
                    Major <span className="grad-cyan">Recruiters</span>
                </h2>
                <p style={{ textAlign: 'center', color: '#64748b', fontSize: '15px', maxWidth: '640px', margin: '0 auto 40px', lineHeight: 1.6 }}>
                    Top tech enterprises, unicorns, and Fortune 500 multinationals recruiting AI &amp; Machine Learning talent from CSPIT.
                </p>
            </div>

            {/* Marquee Wrapper with side gradient masks */}
            <div className="recruiters-marquee-container">
                {/* Row 1: Left -> Right */}
                <div className="recruiters-row-wrapper">
                    <div className="recruiters-track row-ltr">
                        {row1Items.map((company, index) => (
                            <div key={`r1-${index}`} className="recruiter-card" title={company.name} aria-label={company.name}>
                                {company.logo}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Right -> Left */}
                <div className="recruiters-row-wrapper" style={{ marginTop: '20px' }}>
                    <div className="recruiters-track row-rtl">
                        {row2Items.map((company, index) => (
                            <div key={`r2-${index}`} className="recruiter-card" title={company.name} aria-label={company.name}>
                                {company.logo}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scoped CSS for seamless animation, grid background, and responsive card styling */}
            <style jsx>{`
                .recruiters-section {
                    position: relative;
                    padding: 85px 0 95px;
                    background-color: #f8fafc;
                    /* Subtle technical grid pattern from screenshot */
                    background-image: 
                        linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px);
                    background-size: 24px 24px;
                    overflow: hidden;
                }

                .recruiters-marquee-container {
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                    /* Smooth edge fade mask */
                    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
                    mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
                    padding: 10px 0;
                }

                .recruiters-row-wrapper {
                    display: flex;
                    width: 100%;
                    overflow: hidden;
                }

                .recruiters-track {
                    display: flex;
                    gap: 20px;
                    width: max-content;
                    will-change: transform;
                }

                /* Pause row animation when user hovers */
                .recruiters-track:hover {
                    animation-play-state: paused;
                }

                /* Row 1: Left -> Right */
                .row-ltr {
                    animation: scrollLeftToRight 38s linear infinite;
                }

                /* Row 2: Right -> Left */
                .row-rtl {
                    animation: scrollRightToLeft 38s linear infinite;
                }

                @keyframes scrollLeftToRight {
                    0% {
                        transform: translateX(calc(-100% / 3));
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                @keyframes scrollRightToLeft {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-100% / 3));
                    }
                }

                /* Recruiter Card styling matching user image with rich colors */
                .recruiter-card {
                    flex: 0 0 auto;
                    width: 215px;
                    height: 86px;
                    background: #ffffff;
                    border: 1px solid rgba(15, 23, 42, 0.08);
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 12px 20px;
                    box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.02);
                    transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                                box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                                border-color 0.28s ease;
                    cursor: pointer;
                    user-select: none;
                }

                .recruiter-card:hover {
                    transform: translateY(-4px) scale(1.02);
                    box-shadow: 0 14px 30px -4px rgba(12, 46, 138, 0.12), 0 4px 10px rgba(0, 0, 0, 0.04);
                    border-color: rgba(12, 46, 138, 0.24);
                }

                @media (max-width: 768px) {
                    .recruiters-section {
                        padding: 60px 0 70px;
                    }
                    .recruiter-card {
                        width: 175px;
                        height: 74px;
                        padding: 10px 14px;
                        border-radius: 12px;
                    }
                    .row-ltr {
                        animation-duration: 28s;
                    }
                    .row-rtl {
                        animation-duration: 28s;
                    }
                }
            `}</style>
        </section>
    );
}
