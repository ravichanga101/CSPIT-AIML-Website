'use client';

import React from 'react';
import SectionBackground from '@/components/SectionBackground';

export default function LeadershipMessages() {
    return (
        <section id="leadership" className="wow fadeInUp leadership-section">
            <SectionBackground />
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <span className="ref-badge">
                        <i className="fa fa-university" />
                        Institutional Leadership
                    </span>
                </div>
                <h2 className="ref-heading" style={{ textAlign: 'center', margin: '0 auto' }}>
                    Leadership <span className="grad-cyan">Desk</span>
                </h2>
                <div className="about-title-accent-bar" style={{ marginBottom: '16px' }} />
                <p style={{ textAlign: 'center', color: '#64748b', fontSize: '15px', maxWidth: '640px', margin: '0 auto 52px', lineHeight: 1.6 }}>
                    Strategic vision, educational excellence, and inspirational guidance from our academic leaders.
                </p>

                {/* Dean's Message Card */}
                <div className="leadership-card">
                    {/* Left: Square Photo Vertically Centered */}
                    <div className="leadership-photo-col">
                        <div className="leadership-avatar-frame">
                            <img
                                src="/img/faculty/dean.png"
                                alt="Dr. Vijaykumar Chaudhary - Dean, FTE"
                                className="leadership-avatar-img"
                            />
                        </div>
                    </div>

                    {/* Right: Premium Editorial Message */}
                    <div className="leadership-content-col">
                        <div className="leadership-meta-header">
                            <span className="leadership-badge">Dean&apos;s Message</span>
                            <span className="leadership-badge-sub">Faculty of Technology &amp; Engineering</span>
                        </div>

                        <h3 className="leadership-card-title">Message from Dean&apos;s Desk</h3>

                        <div className="leadership-quote-block">
                            <p className="leadership-quote-text">
                                &ldquo;Welcome to CSPIT, CHARUSAT! As Dean, I&apos;m thrilled to lead our community of scholars, learners, and innovators. Together, let&apos;s embrace excellence, diversity, and collaboration. Students, seize every opportunity to grow and make a difference. Faculty, your dedication shapes futures. Staff, your efforts keep our institute thriving. Let&apos;s foster an inclusive environment where every voice matters. As we embark on this journey, let&apos;s uphold the values of integrity and empathy. I&apos;m excited to witness our collective achievements.&rdquo;
                            </p>
                        </div>

                        <div className="leadership-signoff">
                            <div className="author-name">Dr. Vijaykumar Chaudhary</div>
                            <div className="author-role">Dean, Faculty of Technology &amp; Engineering (FTE)</div>
                            <div className="author-inst">CSPIT &bull; CHARUSAT</div>
                        </div>
                    </div>
                </div>

                {/* Principal's Message Card */}
                <div className="leadership-card">
                    {/* Left: Square Photo Vertically Centered */}
                    <div className="leadership-photo-col">
                        <div className="leadership-avatar-frame">
                            <img
                                src="/img/faculty/principal.png"
                                alt="Dr. Trushit Upadhyaya - Principal, CSPIT"
                                className="leadership-avatar-img"
                            />
                        </div>
                    </div>

                    {/* Right: Premium Editorial Message */}
                    <div className="leadership-content-col">
                        <div className="leadership-meta-header">
                            <span className="leadership-badge">Principal&apos;s Message</span>
                            <span className="leadership-badge-sub">Institutional Vision</span>
                        </div>

                        <h3 className="leadership-card-title">Message from Principal&apos;s Desk</h3>

                        <div className="leadership-quote-block">
                            <p className="leadership-quote-text">
                                &ldquo;Welcome to CSPIT, where we foster excellence and innovation in engineering education. To our students: Embrace opportunities, challenge yourself, and cultivate a passion for lifelong learning. Faculty: Your dedication molds future leaders; continue to inspire and innovate. Staff: Your commitment ensures our success; thank you for your invaluable contributions. Together, let&apos;s uphold integrity, excellence, and inclusivity. As Principal, I&apos;m excited about the journey ahead. Let&apos;s collaborate, learn, and grow as we shape the future of engineering together.&rdquo;
                            </p>
                        </div>

                        <div className="leadership-signoff">
                            <div className="author-name">Dr. Trushit Upadhyaya</div>
                            <div className="author-role">Principal, CSPIT</div>
                            <div className="author-inst">Chandubhai S. Patel Institute of Technology &bull; CHARUSAT</div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .leadership-section {
                    position: relative;
                    padding: 90px 0 100px;
                    background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 45%, #F0F6FF 100%);
                    border-top: 1px solid rgba(226, 232, 240, 0.8);
                    border-bottom: 1px solid rgba(226, 232, 240, 0.8);
                    overflow: hidden;
                }

                .leadership-card {
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-top: 4px solid #2563eb;
                    border-radius: 20px;
                    padding: 38px 46px;
                    display: flex;
                    /* Align items CENTER so photo is perfectly vertically balanced */
                    align-items: center;
                    gap: 40px;
                    margin-bottom: 32px;
                    box-shadow: 0 4px 20px rgba(30, 58, 95, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02);
                    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                                box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                                border-color 0.3s ease;
                }

                .leadership-card:last-child {
                    margin-bottom: 0;
                }

                .leadership-card:hover {
                    transform: translateY(-5px);
                    border-top-color: #1d4ed8;
                    border-color: #93c5fd;
                    box-shadow: 0 18px 45px rgba(37, 99, 235, 0.12), 0 4px 12px rgba(0, 0, 0, 0.04);
                }

                /* Photo Column - Balanced & Centered */
                .leadership-photo-col {
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .leadership-avatar-frame {
                    width: 180px;
                    height: 180px;
                    border-radius: 20px;
                    border: 3px solid #ffffff;
                    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12), 0 2px 8px rgba(15, 23, 42, 0.04);
                    overflow: hidden;
                    background: #f1f5f9;
                    position: relative;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .leadership-card:hover .leadership-avatar-frame {
                    transform: scale(1.02);
                    box-shadow: 0 14px 34px rgba(37, 99, 235, 0.18);
                }

                .leadership-avatar-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 17px;
                    display: block;
                }

                /* Content Column */
                .leadership-content-col {
                    flex: 1;
                    min-width: 0;
                }

                .leadership-meta-header {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 10px;
                    flex-wrap: wrap;
                }

                .leadership-badge {
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.8px;
                    text-transform: uppercase;
                    color: #2563eb;
                    background: #eff6ff;
                    border: 1px solid #bfdbfe;
                    border-radius: 9999px;
                    padding: 4px 12px;
                }

                .leadership-badge-sub {
                    font-size: 12px;
                    font-weight: 600;
                    color: #94a3b8;
                }

                .leadership-card-title {
                    font-size: clamp(1.35rem, 2vw, 1.65rem);
                    font-weight: 800;
                    color: #0f172a;
                    margin: 0 0 14px 0;
                    letter-spacing: -0.02em;
                    font-family: var(--font-h, 'Montserrat', sans-serif);
                    line-height: 1.3;
                }

                /* Editorial Quote Styling with Left Blue Line */
                .leadership-quote-block {
                    border-left: 3.5px solid #2563eb;
                    background: rgba(248, 250, 252, 0.7);
                    padding: 14px 20px 14px 22px;
                    border-radius: 0 12px 12px 0;
                    margin: 0 0 20px 0;
                }

                .leadership-quote-text {
                    font-size: 14.5px;
                    color: #334155;
                    line-height: 1.82;
                    margin: 0;
                    font-weight: 400;
                    font-style: italic;
                    text-align: left !important;
                    text-align-last: left !important;
                    word-spacing: normal !important;
                    letter-spacing: -0.01em;
                }

                /* Executive Signoff */
                .leadership-signoff {
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                    padding-left: 4px;
                }

                .author-name {
                    font-size: 17px;
                    font-weight: 800;
                    color: #0f172a;
                    font-family: var(--font-h, 'Montserrat', sans-serif);
                    letter-spacing: -0.01em;
                }

                .author-role {
                    font-size: 13.5px;
                    font-weight: 700;
                    color: #2563eb;
                    letter-spacing: 0.2px;
                }

                .author-inst {
                    font-size: 12.5px;
                    font-weight: 500;
                    color: #64748b;
                }

                @media (max-width: 900px) {
                    .leadership-card {
                        flex-direction: column;
                        padding: 30px 24px;
                        gap: 24px;
                        align-items: center;
                        text-align: center;
                    }

                    .leadership-avatar-frame {
                        width: 150px;
                        height: 150px;
                    }

                    .leadership-meta-header {
                        justify-content: center;
                    }

                    .leadership-quote-block {
                        border-left: none;
                        border-top: 3px solid #2563eb;
                        border-radius: 12px;
                        padding: 16px 18px;
                    }

                    .leadership-quote-text {
                        text-align: center !important;
                        text-align-last: center !important;
                        font-size: 14px;
                    }

                    .leadership-signoff {
                        padding-left: 0;
                        align-items: center;
                    }
                }
            `}</style>
        </section>
    );
}
