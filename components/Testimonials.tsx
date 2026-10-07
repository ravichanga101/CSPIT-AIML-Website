'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import TestimonialsBackground from '@/components/TestimonialsBackground';

interface TestimonialItem {
    id: number;
    name: string;
    role: string;
    text: string;
    excerpt: string;
    color: string;
}

const testimonials: TestimonialItem[] = [
    {
        id: 1,
        name: 'Barai Aum Dhirenbhai',
        role: 'B.TECH AI-ML STUDENT',
        excerpt: 'As a part of the AI & ML department, I can confidently say that our department offers a program specializing in AI and ML that provides students with ample resources to pursue their passions. The faculties here are always supportive and encourage us to explore and grow.',
        text: `As a part of the AI & ML department, I can confidently say that our department offers a program specializing in AI and ML that provides students with ample resources to pursue their passions. The faculties here are committed to providing practical, hands-on learning in collaboration with leading tech companies such as NVIDIA and incorporating innovative learning experiences such as MOOCs. The faculty members are always approachable and encourage us to think outside the box, innovate, and contribute meaningfully to AI advancements.`,
        color: '#2563EB',
    },
    {
        id: 2,
        name: 'Om Bambhroliya',
        role: 'B.TECH AI-ML STUDENT',
        excerpt: 'Our AI & ML department features an exclusive program, offering students abundant resources for dedicated pursuits in the field. Committed faculty members ensure practical, hands-on learning, collaborating with tech industry experts to provide real-world exposure and valuable insights.',
        text: `Our AI & ML department features an exclusive program, offering students abundant resources for dedicated pursuits in the field. Committed faculty members ensure practical, hands-on learning, collaborating with tech leaders like Samatrix and industry mentors. Innovative learning experiences, including NPTEL courses, industry workshops, and hands-on lab sessions, enhance the curriculum's relevance and foster a supportive community that empowers every student to excel.`,
        color: '#2563EB',
    },
    {
        id: 3,
        name: 'Pooja Mehta',
        role: 'B.TECH AI-ML STUDENT',
        excerpt: 'I am delighted to share my heartfelt experience as a proud student of B.Tech, AIML at CSPIT. From the moment I stepped onto the campus, I was captivated by the vibrant academic atmosphere and the supportive community here.',
        text: `I am delighted to share my heartfelt experience as a proud student of B.Tech, AIML at CSPIT. From the moment I stepped onto the campus, I was captivated by the vibrant academic atmosphere and the commitment of the faculty to fostering a culture of excellence. The importance given to practical application has not only enhanced my technical skills but also cultivated holistic development, teamwork, and leadership readiness.`,
        color: '#2563EB',
    },
    {
        id: 4,
        name: 'Neel Shah',
        role: 'B.TECH AI-ML STUDENT',
        excerpt: 'Being part of this esteemed department has truly been a transformative journey for me, providing an enriching research environment and fostering a collaborative spirit that has opened up numerous opportunities.',
        text: `Being part of this esteemed department has truly been a transformative journey for me, providing an enriching research environment and fostering a collaborative spirit that has opened up numerous opportunities for academic and personal growth. The emphasis on teamwork, hackathons, and knowledge sharing has allowed me to engage in meaningful collaborations with fellow students and faculty members across diverse cutting-edge domains.`,
        color: '#2563EB',
    },
];

export default function Testimonials() {
    const [startIndex, setStartIndex] = useState(0);
    const [selectedStudent, setSelectedStudent] = useState<TestimonialItem | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Escape key listener & body scroll lock for modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedStudent(null);
            }
        };

        if (selectedStudent) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [selectedStudent]);

    const total = testimonials.length;
    const cardsPerPage = 3;

    const handlePrev = () => {
        setStartIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
    };

    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % total);
    };

    // Calculate visible items in cyclic carousel
    const visibleCards = Array.from({ length: cardsPerPage }).map((_, i) => {
        return testimonials[(startIndex + i) % total];
    });

    return (
        <section
            id="testimonials"
            className="wow fadeInUp testimonials-main-section"
            style={{
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 45%, #F0F6FF 100%)',
                borderTop: '1px solid rgba(226, 232, 240, 0.8)',
                borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
                padding: '90px 0 100px',
            }}
        >
            {/* Custom Dynamic Animated Background */}
            <TestimonialsBackground />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                {/* ── Section Header ── */}
                <div style={{ textAlign: 'center', marginBottom: '14px' }}>
                    <div className="test-badge-wrap">
                        <span className="test-top-badge">
                            <span className="test-badge-quote">❝</span>
                            STUDENT VOICES
                        </span>
                    </div>
                </div>

                <h2 className="test-section-title">
                    What Students <span className="test-title-highlight">Say</span>
                </h2>

                {/* Double Accent Bar from Reference Pic */}
                <div className="test-double-bars">
                    <span className="test-bar-top" />
                    <span className="test-bar-bottom" />
                </div>

                {/* ── Outer Frosted Carousel Frame Container ── */}
                <div className="test-carousel-frame">
                    {/* Left Circular Arrow Button */}
                    <button
                        type="button"
                        onClick={handlePrev}
                        className="test-nav-btn test-nav-prev"
                        aria-label="Previous Testimonials"
                    >
                        <i className="fa fa-chevron-left" />
                    </button>

                    {/* Right Circular Arrow Button */}
                    <button
                        type="button"
                        onClick={handleNext}
                        className="test-nav-btn test-nav-next"
                        aria-label="Next Testimonials"
                    >
                        <i className="fa fa-chevron-right" />
                    </button>

                    {/* ── 3 Cards Grid ── */}
                    <div className="test-cards-grid">
                        {visibleCards.map((item, idx) => (
                            <div
                                key={`${item.id}-${idx}`}
                                className="test-card-item"
                                onClick={() => setSelectedStudent(item)}
                                title="Click to read full message"
                            >
                                {/* Top-Right Decorative Arc Wave */}
                                <svg className="test-corner-wave" viewBox="0 0 75 75" fill="none">
                                    <path
                                        d="M 0,0 C 26,0 75,48 75,75 L 75,0 Z"
                                        fill="rgba(219, 234, 254, 0.6)"
                                    />
                                    <path
                                        d="M 0,0 C 26,0 75,48 75,75"
                                        stroke="#93C5FD"
                                        strokeWidth="1.2"
                                        strokeDasharray="4 4"
                                    />
                                </svg>

                                {/* Top-Left Big Stylized Double Quote */}
                                <div className="test-card-quote-mark">
                                    <svg width="34" height="28" viewBox="0 0 34 28" fill="none">
                                        <path
                                            d="M0 16.5C0 10.4 4.8 5.6 10.8 5.6H12.2V11.2H10.8C7.8 11.2 5.4 13.6 5.4 16.5V22.4H12.6V28H0V16.5ZM21.4 16.5C21.4 10.4 26.2 5.6 32.2 5.6H33.6V11.2H32.2C29.2 11.2 26.8 13.6 26.8 16.5V22.4H34V28H21.4V16.5Z"
                                            fill="#93C5FD"
                                            fillOpacity="0.85"
                                        />
                                    </svg>
                                </div>

                                {/* Excerpt Message (Clean preview snippet) */}
                                <p className="test-card-excerpt">
                                    {item.excerpt}
                                </p>

                                {/* Bottom Author Profile Block */}
                                <div className="test-card-footer">
                                    <div className="test-author-avatar">
                                        <i className="fa fa-user" />
                                    </div>
                                    <div className="test-author-info">
                                        <div className="test-author-name">{item.name}</div>
                                        <div className="test-author-role">{item.role}</div>
                                    </div>
                                </div>

                                {/* Subtle Click Cue Pill */}
                                <div className="test-click-hint">
                                    <span>Read Story</span>
                                    <i className="fa fa-arrow-right" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── Bottom Carousel Pagination Indicators ── */}
                    <div className="test-pagination-row">
                        {testimonials.map((_, dotIdx) => (
                            <button
                                key={dotIdx}
                                type="button"
                                onClick={() => setStartIndex(dotIdx)}
                                className={`test-dot ${startIndex === dotIdx ? 'test-dot-active' : ''}`}
                                aria-label={`Go to slide ${dotIdx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* ═══════════════════════════════════════════════════
               MODAL POPUP (MATCHING SECOND REFERENCE PIC FORMAT)
               (No image poster, with Name & B.Tech AIML as heading,
                and full message below)
               ═══════════════════════════════════════════════════ */}
            {mounted && selectedStudent && createPortal(
                <div
                    className="test-modal-backdrop"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setSelectedStudent(null);
                    }}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="testimonial-modal-name"
                >
                    <div className="test-modal-container">
                        {/* Circular Dark Close Button (Top-Right as in Ref Pic 2) */}
                        <button
                            type="button"
                            onClick={() => setSelectedStudent(null)}
                            className="test-modal-close-btn"
                            aria-label="Close dialog"
                        >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path
                                    d="M1 1L13 13M1 13L13 1"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>

                        {/* Top Gradient Accent Banner */}
                        <div className="test-modal-top-accent">
                            <div className="test-modal-badge">
                                <span className="test-modal-badge-quote">❝</span>
                                STUDENT VOICE &amp; EXPERIENCE
                            </div>

                            {/* Author Avatar Orb */}
                            <div className="test-modal-avatar-orb">
                                <i className="fa fa-user" />
                            </div>

                            {/* Heading: Student Name & Course/Program */}
                            <h3 id="testimonial-modal-name" className="test-modal-heading">
                                {selectedStudent.name}
                            </h3>
                            <div className="test-modal-subheading">
                                {selectedStudent.role}
                            </div>
                            <div className="test-modal-inst-tag">
                                CSPIT &bull; CHARUSAT UNIVERSITY
                            </div>
                        </div>

                        {/* Body: Full Testimonial Message */}
                        <div className="test-modal-body">
                            <div className="test-modal-quote-wrapper">
                                <span className="test-modal-open-quote">&ldquo;</span>
                                <p className="test-modal-full-text">
                                    {selectedStudent.text}
                                </p>
                                <span className="test-modal-close-quote">&rdquo;</span>
                            </div>

                            <div className="test-modal-footer-note">
                                <div className="test-modal-dept-badge">
                                    <i className="fa fa-graduation-cap" />
                                    Department of Artificial Intelligence &amp; Machine Learning
                                </div>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}

            <style jsx>{`
                /* ── Section Title & Accents ── */
                .test-badge-wrap {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }

                .test-top-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    background: #FFFFFF;
                    border: 1.5px solid #93C5FD;
                    border-radius: 9999px;
                    padding: 4px 14px;
                    font-size: 10.5px;
                    font-weight: 800;
                    letter-spacing: 0.9px;
                    text-transform: uppercase;
                    color: #2563EB;
                    font-family: var(--font-b, sans-serif);
                    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.08);
                }

                .test-badge-quote {
                    font-size: 13px;
                    line-height: 1;
                    color: #2563EB;
                }

                .test-section-title {
                    font-family: var(--font-h, 'Montserrat', sans-serif);
                    font-weight: 900;
                    font-size: clamp(2.4rem, 4.2vw, 3.6rem);
                    color: #0F172A !important;
                    text-align: center;
                    margin: 0 auto;
                    letter-spacing: -0.03em;
                    line-height: 1.08;
                }

                .test-title-highlight {
                    color: #2563EB !important;
                    display: inline-block;
                    background: none !important;
                    -webkit-text-fill-color: initial !important;
                }

                .test-double-bars {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 5px;
                    margin: 14px auto 44px;
                }

                .test-bar-top {
                    width: 32px;
                    height: 3.5px;
                    border-radius: 9999px;
                    background: #2563EB;
                }

                .test-bar-bottom {
                    width: 48px;
                    height: 3px;
                    border-radius: 9999px;
                    background: #60A5FA;
                }

                /* ── Outer Frosted Carousel Frame Container ── */
                .test-carousel-frame {
                    position: relative;
                    max-width: 1220px;
                    margin: 0 auto;
                    background: rgba(255, 255, 255, 0.82);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1.5px solid rgba(219, 234, 254, 0.9);
                    border-radius: 36px;
                    padding: 40px 32px 32px;
                    box-shadow: 0 20px 50px rgba(37, 99, 235, 0.08), 0 1px 3px rgba(0, 0, 0, 0.02);
                }

                /* Circular Navigation Arrows */
                .test-nav-btn {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 46px;
                    height: 46px;
                    border-radius: 50%;
                    background: #FFFFFF;
                    border: 1.5px solid #DBEAFE;
                    color: #1E3A8A;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 15px;
                    box-shadow: 0 6px 18px rgba(37, 99, 235, 0.14), 0 1px 3px rgba(0, 0, 0, 0.04);
                    cursor: pointer;
                    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
                    z-index: 10;
                }

                .test-nav-prev {
                    left: -23px;
                }

                .test-nav-next {
                    right: -23px;
                }

                .test-nav-btn:hover {
                    background: #EFF6FF;
                    border-color: #93C5FD;
                    color: #2563EB;
                    transform: translateY(-50%) scale(1.1);
                    box-shadow: 0 10px 24px rgba(37, 99, 235, 0.22);
                }

                /* ── 3-Column Grid ── */
                .test-cards-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                }

                /* ── Individual Testimonial Card ── */
                .test-card-item {
                    background: #FFFFFF;
                    border: 1.5px solid #E2E8F0;
                    border-radius: 22px;
                    padding: 28px 24px 22px;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    cursor: pointer;
                    user-select: none;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
                }

                .test-card-item:hover {
                    transform: translateY(-6px);
                    border-color: #93C5FD;
                    box-shadow: 0 18px 40px rgba(37, 99, 235, 0.13), 0 2px 8px rgba(0, 0, 0, 0.04);
                }

                /* Top-Right Decorative Arc Wave */
                .test-corner-wave {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 75px;
                    height: 75px;
                    pointer-events: none;
                }

                /* Top-Left Quote Mark */
                .test-card-quote-mark {
                    margin-bottom: 14px;
                    display: flex;
                    align-items: center;
                }

                /* Excerpt Message (Clamp 5 lines) */
                .test-card-excerpt {
                    font-family: var(--font-b, sans-serif);
                    font-size: 13.5px;
                    line-height: 1.68;
                    color: #475569;
                    margin: 0 0 24px;
                    flex: 1;
                    display: -webkit-box;
                    -webkit-line-clamp: 5;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                /* Bottom Author Footer */
                .test-card-footer {
                    display: flex;
                    align-items: center;
                    gap: 13px;
                    padding-top: 14px;
                    border-top: 1px solid #F1F5F9;
                }

                .test-author-avatar {
                    width: 42px;
                    height: 42px;
                    min-width: 42px;
                    border-radius: 50%;
                    background: #EFF6FF;
                    border: 1.5px solid #DBEAFE;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #2563EB;
                    font-size: 16px;
                    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.08);
                    transition: transform 0.25s ease;
                }

                .test-card-item:hover .test-author-avatar {
                    transform: scale(1.08);
                    background: #DBEAFE;
                }

                .test-author-info {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                    overflow: hidden;
                }

                .test-author-name {
                    font-family: var(--font-h, 'Montserrat', sans-serif);
                    font-size: 14.5px;
                    font-weight: 800;
                    color: #0F172A;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .test-author-role {
                    font-family: var(--font-b, sans-serif);
                    font-size: 10.5px;
                    font-weight: 700;
                    color: #2563EB;
                    letter-spacing: 0.8px;
                    text-transform: uppercase;
                }

                /* Click Cue Pill */
                .test-click-hint {
                    position: absolute;
                    bottom: 12px;
                    right: 14px;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 11px;
                    font-weight: 700;
                    color: #2563EB;
                    opacity: 0;
                    transform: translateX(-4px);
                    transition: all 0.25s ease;
                }

                .test-card-item:hover .test-click-hint {
                    opacity: 1;
                    transform: translateX(0);
                }

                /* ── Pagination Indicator Row ── */
                .test-pagination-row {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    margin-top: 28px;
                }

                .test-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #CBD5E1;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .test-dot:hover {
                    background: #93C5FD;
                }

                .test-dot-active {
                    width: 30px;
                    height: 8px;
                    border-radius: 9999px;
                    background: #2563EB;
                    box-shadow: 0 0 10px rgba(37, 99, 235, 0.4);
                }

                /* ═══════════════════════════════════════════════════
                   MODAL POPUP STYLES (MATCHING SECOND REFERENCE PIC)
                   ═══════════════════════════════════════════════════ */
                .test-modal-backdrop {
                    position: fixed;
                    inset: 0;
                    background: rgba(15, 23, 42, 0.68);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 999999;
                    padding: 20px;
                    animation: testFadeIn 0.25s ease-out;
                }

                .test-modal-container {
                    background: #FFFFFF;
                    width: 100%;
                    max-width: 620px;
                    border-radius: 28px;
                    overflow: hidden;
                    box-shadow: 0 25px 65px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.8);
                    position: relative;
                    animation: testScaleUp 0.28s cubic-bezier(0.16, 1, 0.3, 1);
                }

                /* Dark Circular Close Button from Ref Pic 2 */
                .test-modal-close-btn {
                    position: absolute;
                    top: 18px;
                    right: 18px;
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    background: #0F172A;
                    color: #FFFFFF;
                    border: 2px solid #FFFFFF;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
                    z-index: 20;
                    transition: all 0.2s ease;
                }

                .test-modal-close-btn:hover {
                    background: #2563EB;
                    transform: scale(1.1) rotate(90deg);
                }

                /* Top Header Accent Banner */
                .test-modal-top-accent {
                    background: linear-gradient(135deg, #0F172A 0%, #1E3A8A 55%, #2563EB 100%);
                    padding: 38px 32px 30px;
                    text-align: center;
                    color: #FFFFFF;
                    position: relative;
                }

                .test-modal-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    background: rgba(255, 255, 255, 0.15);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 9999px;
                    padding: 4px 14px;
                    font-size: 10.5px;
                    font-weight: 800;
                    letter-spacing: 0.9px;
                    color: #93C5FD;
                    margin-bottom: 18px;
                }

                .test-modal-badge-quote {
                    font-size: 13px;
                }

                .test-modal-avatar-orb {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    background: #FFFFFF;
                    border: 3px solid rgba(255, 255, 255, 0.4);
                    margin: 0 auto 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #2563EB;
                    font-size: 26px;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
                }

                .test-modal-heading {
                    font-family: var(--font-h, 'Montserrat', sans-serif);
                    font-size: 23px;
                    font-weight: 800;
                    color: #FFFFFF;
                    margin: 0 0 6px;
                    letter-spacing: -0.01em;
                }

                .test-modal-subheading {
                    font-family: var(--font-b, sans-serif);
                    font-size: 12px;
                    font-weight: 800;
                    color: #93C5FD;
                    letter-spacing: 1.2px;
                    text-transform: uppercase;
                    margin-bottom: 4px;
                }

                .test-modal-inst-tag {
                    font-size: 11px;
                    color: #CBD5E1;
                    letter-spacing: 0.5px;
                }

                /* Body with Full Message */
                .test-modal-body {
                    padding: 34px 36px 30px;
                    background: #FFFFFF;
                }

                .test-modal-quote-wrapper {
                    position: relative;
                }

                .test-modal-open-quote {
                    position: absolute;
                    top: -24px;
                    left: -12px;
                    font-size: 56px;
                    line-height: 1;
                    color: rgba(37, 99, 235, 0.12);
                    font-family: Georgia, serif;
                    user-select: none;
                    pointer-events: none;
                }

                .test-modal-close-quote {
                    position: absolute;
                    bottom: -36px;
                    right: -10px;
                    font-size: 56px;
                    line-height: 1;
                    color: rgba(37, 99, 235, 0.12);
                    font-family: Georgia, serif;
                    user-select: none;
                    pointer-events: none;
                }

                .test-modal-full-text {
                    font-family: var(--font-b, sans-serif);
                    font-size: 15px;
                    line-height: 1.85;
                    color: #334155;
                    margin: 0;
                    position: relative;
                    z-index: 1;
                }

                .test-modal-footer-note {
                    margin-top: 28px;
                    padding-top: 18px;
                    border-top: 1px solid #F1F5F9;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .test-modal-dept-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 12px;
                    font-weight: 600;
                    color: #64748B;
                    background: #F8FAFC;
                    padding: 6px 16px;
                    border-radius: 9999px;
                    border: 1px solid #E2E8F0;
                }

                .test-modal-dept-badge i {
                    color: #2563EB;
                    font-size: 13px;
                }

                @keyframes testFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes testScaleUp {
                    from {
                        opacity: 0;
                        transform: scale(0.92) translateY(12px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }

                /* ── Responsive Adaptation ── */
                @media (max-width: 1080px) {
                    .test-cards-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .test-cards-grid > div:last-child {
                        display: none;
                    }
                }

                @media (max-width: 768px) {
                    .test-carousel-frame {
                        padding: 30px 18px 24px;
                        border-radius: 26px;
                    }
                    .test-nav-btn {
                        width: 38px;
                        height: 38px;
                        font-size: 13px;
                    }
                    .test-nav-prev {
                        left: -12px;
                    }
                    .test-nav-next {
                        right: -12px;
                    }
                    .test-cards-grid {
                        grid-template-columns: 1fr;
                    }
                    .test-cards-grid > div:nth-child(2),
                    .test-cards-grid > div:last-child {
                        display: none;
                    }
                    .test-modal-body {
                        padding: 24px 20px 20px;
                    }
                    .test-modal-top-accent {
                        padding: 32px 20px 24px;
                    }
                }
            `}</style>
        </section>
    );
}
