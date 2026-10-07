'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CertificationItem {
    id: string;
    num: string;
    name: string;
    description?: string;
    coordinator: string;
    email: string;
    logo: string;
}

const certifications: CertificationItem[] = [
    {
        id: 'redhat',
        num: '01',
        name: 'Red Hat Academy',
        description: 'Enterprise Linux, cloud, and container certifications',
        coordinator: 'Prof. Sarita Thummar',
        email: 'saritathummar.ce@charusat.ac.in',
        logo: '/img/certifications/redhat_partner.svg',
    },
    {
        id: 'aws',
        num: '02',
        name: 'AWS Academy',
        description: 'Cloud computing certifications from Amazon Web Services',
        coordinator: 'Prof. Sanket Suthar',
        email: 'sanketsuthar.it@charusat.ac.in',
        logo: '/img/certifications/aws_academy.svg',
    },
    {
        id: 'ec-council',
        num: '03',
        name: 'EC Council',
        description: 'Ethical hacking and security certifications',
        coordinator: 'Prof. Pritesh Prajapati',
        email: 'priteshprajapati.it@charusat.ac.in',
        logo: '/img/certifications/ec_council.svg',
    },
    {
        id: 'comptia',
        num: '04',
        name: 'Comptia Academy Partner',
        description: 'Certifications in IT, security, and cloud.',
        coordinator: 'Prof. Pritesh Prajapati',
        email: 'priteshprajapati.it@charusat.ac.in',
        logo: '/img/certifications/comptia.svg',
    },
    {
        id: 'cisco',
        num: '05',
        name: 'Cisco Networking Academy',
        description: 'Network engineering, routing & switching, and cybersecurity',
        coordinator: 'Prof. Abhishek Patel',
        email: 'abhishekpatel.cse@charusat.ac.in',
        logo: '/img/certifications/cisco_academy.svg',
    },
    {
        id: 'oracle',
        num: '06',
        name: 'Oracle Academy',
        description: 'Database design, Java programming, and cloud infrastructure',
        coordinator: 'Prof. Vidisha Pradhan',
        email: 'vidishapradhan.cse@charusat.ac.in',
        logo: '/img/certifications/oracle_academy.svg',
    },
];

export default function Certifications() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.12 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="certifications"
            className="certifications-section"
            style={{ scrollMarginTop: '85px' }}
        >
            {/* ── Ambient Background Layer Matching Reference ── */}
            <div className="cert-bg-layer">
                {/* Fluid Organic Curves (Top Left & Right) */}
                <div className="cert-curve cert-curve-tl" />
                <div className="cert-curve cert-curve-tr" />
                <div className="cert-curve cert-curve-bl" />
                <div className="cert-curve cert-curve-br" />

                {/* Left Curved Connection Line with Glowing Node */}
                <svg className="cert-node-svg-left" viewBox="0 0 240 600" preserveAspectRatio="none">
                    <path
                        d="M -40,120 Q 80,240 10,480"
                        fill="none"
                        stroke="rgba(147, 197, 253, 0.55)"
                        strokeWidth="1.5"
                    />
                    <circle cx="45" cy="275" r="4.5" fill="#2563eb" className="cert-node-pulse" />
                    <circle cx="45" cy="275" r="9" fill="none" stroke="rgba(37, 99, 235, 0.4)" strokeWidth="1.5" />
                    <circle cx="10" cy="480" r="4" fill="#38bdf8" />
                </svg>

                {/* Right Curved Connection Line with Glowing Node */}
                <svg className="cert-node-svg-right" viewBox="0 0 240 600" preserveAspectRatio="none">
                    <path
                        d="M 280,100 Q 140,280 260,540"
                        fill="none"
                        stroke="rgba(147, 197, 253, 0.55)"
                        strokeWidth="1.5"
                    />
                    <circle cx="192" cy="305" r="4.5" fill="#2563eb" className="cert-node-pulse" />
                    <circle cx="192" cy="305" r="9" fill="none" stroke="rgba(37, 99, 235, 0.4)" strokeWidth="1.5" />
                    <circle cx="215" cy="510" r="4" fill="#38bdf8" />
                </svg>

                {/* Dot Matrix Top-Left (Near Heading) */}
                <div className="cert-dot-matrix cert-dots-tl">
                    {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="cert-dot" />
                    ))}
                </div>

                {/* Dot Matrix Bottom-Right */}
                <div className="cert-dot-matrix cert-dots-br">
                    {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="cert-dot" />
                    ))}
                </div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                {/* ── Header ── */}
                <div className={`cert-header ${isVisible ? 'cert-visible' : ''}`}>
                    {/* Top Subtitle with Lines */}
                    <div className="cert-subtitle-wrap">
                        <span className="cert-line cert-line-left" />
                        <span className="cert-badge-text">INDUSTRY RECOGNIZED</span>
                        <span className="cert-line cert-line-right" />
                    </div>

                    {/* Main Heading */}
                    <h2 className="cert-main-heading">
                        Certification <span className="cert-heading-blue">Courses</span>
                    </h2>
                    <div className="cert-title-accent-bar" />
                </div>

                {/* ── 2-Column Cards Grid ── */}
                <div className="certs-grid">
                    {certifications.map((item, index) => (
                        <div
                            key={item.id}
                            className={`cert-card ${isVisible ? 'cert-card-visible' : ''}`}
                            style={{
                                transitionDelay: `${0.12 + index * 0.08}s`,
                            }}
                        >
                            {/* Left Logo Box */}
                            <div className="cert-logo-box">
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="cert-logo-img"
                                />
                            </div>

                            {/* Right Content */}
                            <div className="cert-info">
                                {/* Top Row: Partner Badge & Number Watermark */}
                                <div className="cert-top-row">
                                    <span className="cert-partner-badge">
                                        <i className="fa fa-graduation-cap" />
                                        CERTIFICATION PARTNER
                                    </span>
                                    <span className="cert-watermark-num">{item.num}</span>
                                </div>

                                {/* Course Title */}
                                <h3 className="cert-name">{item.name}</h3>

                                {/* Description */}
                                {item.description && (
                                    <p className="cert-desc">{item.description}</p>
                                )}

                                {/* Bottom Coordinator & Email Row */}
                                <div className="cert-footer-row">
                                    {/* Coordinator */}
                                    <div className="cert-coord-block">
                                        <div className="cert-coord-avatar">
                                            <i className="fa fa-user" />
                                        </div>
                                        <div className="cert-coord-text">
                                            <span className="cert-coord-label">COURSE COORDINATOR</span>
                                            <span className="cert-coord-name">{item.coordinator}</span>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    {item.email && (
                                        <a
                                            href={`mailto:${item.email}`}
                                            className="cert-email-link"
                                            title={`Email ${item.coordinator}`}
                                        >
                                            <i className="fa fa-envelope" />
                                            <span>{item.email}</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                /* ═══════════════════════════════════════════════
                   CERTIFICATION COURSES — EXACT REFERENCE DESIGN
                   ═══════════════════════════════════════════════ */

                .certifications-section {
                    position: relative;
                    padding: 85px 0 95px;
                    background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 40%, #F0F7FF 100%);
                    overflow: hidden;
                    border-top: 1px solid rgba(226, 232, 240, 0.8);
                    border-bottom: 1px solid rgba(226, 232, 240, 0.8);
                }

                /* ── Ambient Background Layer ── */
                .cert-bg-layer {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    overflow: hidden;
                    z-index: 1;
                }

                /* Fluid Organic Curves */
                .cert-curve {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(45px);
                    pointer-events: none;
                }

                .cert-curve-tl {
                    top: -120px;
                    left: -140px;
                    width: 480px;
                    height: 480px;
                    background: radial-gradient(circle, rgba(191, 219, 254, 0.45) 0%, rgba(224, 242, 254, 0.2) 60%, transparent 80%);
                    animation: certFloat 12s ease-in-out infinite alternate;
                }

                .cert-curve-tr {
                    top: -60px;
                    right: -120px;
                    width: 520px;
                    height: 520px;
                    background: radial-gradient(circle, rgba(147, 197, 253, 0.38) 0%, rgba(219, 234, 254, 0.18) 55%, transparent 75%);
                    animation: certFloat 10s ease-in-out infinite alternate-reverse;
                }

                .cert-curve-bl {
                    bottom: -100px;
                    left: -100px;
                    width: 440px;
                    height: 440px;
                    background: radial-gradient(circle, rgba(191, 219, 254, 0.35) 0%, rgba(224, 242, 254, 0.15) 60%, transparent 80%);
                }

                .cert-curve-br {
                    bottom: -80px;
                    right: -80px;
                    width: 480px;
                    height: 480px;
                    background: radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, rgba(219, 234, 254, 0.15) 60%, transparent 80%);
                    animation: certFloat 11s ease-in-out infinite alternate;
                }

                @keyframes certFloat {
                    0% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(15px, 12px) scale(1.04); }
                    100% { transform: translate(-10px, -8px) scale(0.97); }
                }

                /* Node Connector SVGs */
                .cert-node-svg-left {
                    position: absolute;
                    top: 80px;
                    left: 0;
                    width: 140px;
                    height: 480px;
                    z-index: 1;
                }

                .cert-node-svg-right {
                    position: absolute;
                    top: 100px;
                    right: 0;
                    width: 150px;
                    height: 480px;
                    z-index: 1;
                }

                .cert-node-pulse {
                    animation: certRadarPulse 2.5s infinite;
                }

                @keyframes certRadarPulse {
                    0% { filter: drop-shadow(0 0 2px #38bdf8); }
                    50% { filter: drop-shadow(0 0 8px #2563eb); }
                    100% { filter: drop-shadow(0 0 2px #38bdf8); }
                }

                /* Dot Matrices */
                .cert-dot-matrix {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 12px;
                    position: absolute;
                    z-index: 1;
                }

                .cert-dots-tl {
                    top: 55px;
                    left: 12%;
                }

                .cert-dots-br {
                    bottom: 60px;
                    right: 4%;
                }

                .cert-dot {
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    background: #93C5FD;
                    opacity: 0.65;
                }

                /* ── Header ── */
                .cert-header {
                    text-align: center;
                    margin-bottom: 46px;
                    opacity: 0;
                    transform: translateY(24px);
                    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .cert-header.cert-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .cert-subtitle-wrap {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 14px;
                    margin-bottom: 8px;
                }

                .cert-line {
                    display: inline-block;
                    width: 40px;
                    height: 1.5px;
                    background: #3B82F6;
                    opacity: 0.6;
                    border-radius: 2px;
                }

                .cert-line-left {
                    background: linear-gradient(90deg, transparent, #3B82F6);
                }

                .cert-line-right {
                    background: linear-gradient(90deg, #3B82F6, transparent);
                }

                .cert-badge-text {
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 0.22em;
                    color: #475569;
                    text-transform: uppercase;
                    font-family: var(--font-b, sans-serif);
                }

                .cert-main-heading {
                    font-family: var(--font-h, 'Montserrat', sans-serif);
                    font-size: clamp(2.4rem, 4.2vw, 3.6rem);
                    font-weight: 900;
                    color: #0F172A;
                    letter-spacing: -0.03em;
                    line-height: 1.08;
                    margin: 0 auto;
                    text-align: center;
                }

                .cert-heading-blue {
                    color: #2563EB;
                    display: inline-block;
                }

                .cert-title-accent-bar {
                    width: 52px;
                    height: 4px;
                    border-radius: 999px;
                    background: linear-gradient(90deg, #2563EB 0%, #60A5FA 100%);
                    margin: 14px auto 24px;
                    box-shadow: 0 0 10px rgba(37, 99, 235, 0.35);
                    display: block;
                }

                /* ── 2-Column Cards Grid ── */
                .certs-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 26px;
                }

                /* ── Card Component ── */
                .cert-card {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1.5px solid #E2E8F0;
                    border-radius: 24px;
                    padding: 24px 28px;
                    display: flex;
                    align-items: center;
                    gap: 24px;
                    box-shadow: 0 4px 20px rgba(30, 58, 95, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02);
                    position: relative;
                    overflow: hidden;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                                box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                                border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                                opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .cert-card.cert-card-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .cert-card:hover {
                    transform: translateY(-6px);
                    border-color: #93C5FD;
                    box-shadow: 0 18px 45px rgba(37, 99, 235, 0.12), 0 2px 6px rgba(0, 0, 0, 0.03);
                }

                /* Logo Box */
                .cert-logo-box {
                    width: 120px;
                    height: 120px;
                    min-width: 120px;
                    background: #FFFFFF;
                    border: 1.5px solid #EDF2F7;
                    border-radius: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 12px;
                    box-shadow: 0 2px 10px rgba(15, 23, 42, 0.03);
                    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                    overflow: hidden;
                    flex-shrink: 0;
                }

                .cert-card:hover .cert-logo-box {
                    transform: scale(1.05) translateY(-2px);
                    border-color: #BFDBFE;
                    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.12);
                }

                .cert-logo-img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    display: block;
                    transition: transform 0.3s ease;
                }

                /* Text Information */
                .cert-info {
                    flex: 1;
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                }

                /* Top Row: Partner Badge & Watermark Number */
                .cert-top-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 6px;
                }

                .cert-partner-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    background: #EFF6FF;
                    border: 1px solid #DBEAFE;
                    color: #2563EB;
                    font-size: 9.5px;
                    font-weight: 800;
                    letter-spacing: 0.6px;
                    text-transform: uppercase;
                    padding: 3px 8px;
                    border-radius: 6px;
                    font-family: var(--font-b, sans-serif);
                    transition: all 0.25s ease;
                }

                .cert-partner-badge i {
                    font-size: 11px;
                    color: #2563EB;
                }

                .cert-card:hover .cert-partner-badge {
                    background: #DBEAFE;
                    border-color: #93C5FD;
                }

                .cert-watermark-num {
                    font-family: var(--font-h, 'Montserrat', sans-serif);
                    font-size: 38px;
                    font-weight: 900;
                    color: #BFDBFE;
                    opacity: 0.85;
                    line-height: 1;
                    letter-spacing: -0.02em;
                    user-select: none;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .cert-card:hover .cert-watermark-num {
                    color: #93C5FD;
                    transform: scale(1.06);
                }

                /* Name & Description */
                .cert-name {
                    font-size: 19px;
                    font-weight: 800;
                    color: #0F172A;
                    margin: 0 0 4px 0;
                    line-height: 1.3;
                    letter-spacing: -0.01em;
                    font-family: var(--font-h, 'Montserrat', sans-serif);
                    transition: color 0.25s ease;
                }

                .cert-card:hover .cert-name {
                    color: #1E3A5F;
                }

                .cert-desc {
                    font-size: 12.5px;
                    color: #64748B;
                    line-height: 1.45;
                    margin: 0 0 16px 0;
                    font-weight: 400;
                    font-family: var(--font-b, sans-serif);
                    text-align: left !important;
                    text-align-last: left !important;
                    word-spacing: normal !important;
                }

                /* Footer Row: Coordinator & Email */
                .cert-footer-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    flex-wrap: wrap;
                }

                .cert-coord-block {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .cert-coord-avatar {
                    width: 24px;
                    height: 24px;
                    min-width: 24px;
                    border-radius: 50%;
                    background: #EFF6FF;
                    border: 1px solid #DBEAFE;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #2563EB;
                    font-size: 11px;
                    transition: all 0.25s ease;
                }

                .cert-card:hover .cert-coord-avatar {
                    background: #DBEAFE;
                    color: #1D4ED8;
                }

                .cert-coord-text {
                    display: flex;
                    flex-direction: column;
                }

                .cert-coord-label {
                    font-size: 9px;
                    font-weight: 800;
                    color: #94A3B8;
                    letter-spacing: 0.6px;
                    text-transform: uppercase;
                    line-height: 1.1;
                    font-family: var(--font-b, sans-serif);
                }

                .cert-coord-name {
                    font-size: 12.5px;
                    font-weight: 700;
                    color: #1E293B;
                    line-height: 1.25;
                    font-family: var(--font-b, sans-serif);
                }

                .cert-email-link {
                    color: #2563EB;
                    font-size: 12px;
                    font-weight: 600;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    transition: all 0.2s ease;
                    word-break: break-all;
                    font-family: var(--font-b, sans-serif);
                }

                .cert-email-link i {
                    font-size: 11px;
                    color: #2563EB;
                    transition: transform 0.2s ease;
                }

                .cert-email-link:hover {
                    color: #1D4ED8;
                    text-decoration: underline;
                }

                .cert-email-link:hover i {
                    transform: scale(1.15);
                }

                /* ── Responsive ── */
                @media (max-width: 1024px) {
                    .certs-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                    .cert-dots-tl {
                        left: 4%;
                    }
                }

                @media (max-width: 640px) {
                    .cert-card {
                        flex-direction: column;
                        align-items: flex-start;
                        padding: 22px 20px;
                        gap: 16px;
                    }

                    .cert-logo-box {
                        width: 100px;
                        height: 100px;
                        min-width: 100px;
                    }

                    .cert-footer-row {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 10px;
                    }

                    .cert-dots-tl,
                    .cert-dots-br,
                    .cert-node-svg-left,
                    .cert-node-svg-right {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
}
