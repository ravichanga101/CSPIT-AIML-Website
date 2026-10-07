'use client';
import { useEffect, useRef, useState } from 'react';
import { config } from '@/lib/config';

export default function VisionMission() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section
                ref={sectionRef}
                id="vision-mission"
                className="v_m wow fadeInUp"
                style={{ scrollMarginTop: '85px' }}
            >
                {/* ── Ambient Background Layer ── */}
                <div className="vm-bg-layer">
                    {/* Left concentric rings */}
                    <div className="vm-rings vm-rings-left">
                        <div className="vm-ring vm-ring-1" />
                        <div className="vm-ring vm-ring-2" />
                        <div className="vm-ring vm-ring-3" />
                    </div>

                    {/* Right concentric rings */}
                    <div className="vm-rings vm-rings-right">
                        <div className="vm-ring vm-ring-1" />
                        <div className="vm-ring vm-ring-2" />
                        <div className="vm-ring vm-ring-3" />
                    </div>

                    {/* Dot matrices */}
                    <div className="vm-dot-matrix vm-dots-tl">
                        {Array.from({ length: 25 }).map((_, i) => (
                            <div key={i} className="vm-dot" />
                        ))}
                    </div>
                    <div className="vm-dot-matrix vm-dots-tr">
                        {Array.from({ length: 25 }).map((_, i) => (
                            <div key={i} className="vm-dot" />
                        ))}
                    </div>
                    <div className="vm-dot-matrix vm-dots-bl">
                        {Array.from({ length: 25 }).map((_, i) => (
                            <div key={i} className="vm-dot" />
                        ))}
                    </div>
                    <div className="vm-dot-matrix vm-dots-br">
                        {Array.from({ length: 25 }).map((_, i) => (
                            <div key={i} className="vm-dot" />
                        ))}
                    </div>

                    {/* Floating background icons */}
                    <div className={`vm-float-icon vm-float-eye ${isVisible ? 'vm-anim-in' : ''}`}>
                        <i className="fa fa-eye" />
                    </div>
                    <div className={`vm-float-icon vm-float-rocket ${isVisible ? 'vm-anim-in' : ''}`}>
                        <i className="fa fa-rocket" />
                    </div>

                    {/* Dashed curved connector lines */}
                    <svg className="vm-connector-svg" viewBox="0 0 1200 500" preserveAspectRatio="none">
                        <path
                            d="M0,180 Q300,50 600,200 T1200,140"
                            fill="none"
                            stroke="rgba(147,197,253,0.35)"
                            strokeWidth="1.5"
                            strokeDasharray="8,8"
                        />
                        <path
                            d="M0,350 Q400,250 700,380 T1200,300"
                            fill="none"
                            stroke="rgba(147,197,253,0.25)"
                            strokeWidth="1.5"
                            strokeDasharray="8,8"
                        />
                    </svg>

                    {/* Campus skyline background */}
                    <div className="vm-campus-skyline" />
                </div>

                {/* ── Content ── */}
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    {/* Header */}
                    <div className={`vm-header ${isVisible ? 'vm-header-visible' : ''}`}>
                        <span className="ref-badge">
                            <i className="fa fa-compass" />
                            Our Foundation
                        </span>
                        <h2 className="ref-heading" style={{ textAlign: 'center', margin: '0 auto' }}>
                            Vision &amp; <span className="grad-cyan">Mission</span>
                        </h2>
                        <div className="about-title-accent-bar" style={{ marginBottom: '16px' }} />
                        <p className="vm-subtitle">
                            Guiding our commitment towards excellence in AI and Machine Learning
                            <br />education, research, and innovation.
                        </p>
                    </div>

                    {/* Cards Row */}
                    <div className="row" style={{ justifyContent: 'center', gap: '0' }}>
                        {/* Vision Card */}
                        <div
                            className="col-lg-5 col-md-6"
                            id="vision"
                            style={{ marginBottom: '20px', scrollMarginTop: '260px' }}
                        >
                            <div className={`vm-card vm-card-vision ${isVisible ? 'vm-card-visible' : ''}`}>
                                <div className="vm-card-accent vm-accent-vision" />
                                <div className="vm-card-inner">
                                    <div className="vm-card-header">
                                        <div className="vm-icon-circle vm-icon-vision">
                                            <i className="fa fa-eye" />
                                        </div>
                                        <h4 className="vm-card-title">Vision</h4>
                                    </div>
                                    <div className="vm-card-body">
                                        <span className="vm-quote-open">&ldquo;</span>
                                        <p className="vm-card-text">
                                            {config.vision}
                                        </p>
                                        <span className="vm-quote-close">&rdquo;</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mission Card */}
                        <div
                            className="col-lg-5 col-md-6"
                            id="mission"
                            style={{ marginBottom: '20px', scrollMarginTop: '260px' }}
                        >
                            <div className={`vm-card vm-card-mission ${isVisible ? 'vm-card-visible' : ''}`}>
                                <div className="vm-card-accent vm-accent-mission" />
                                <div className="vm-card-inner">
                                    <div className="vm-card-header">
                                        <div className="vm-icon-circle vm-icon-mission">
                                            <i className="fa fa-rocket" />
                                        </div>
                                        <h4 className="vm-card-title">Mission</h4>
                                    </div>
                                    <div className="vm-card-body">
                                        <span className="vm-quote-open">&ldquo;</span>
                                        <p className="vm-card-text">
                                            To provide educational excellence in Artificial Intelligence and Machine Learning, fostering critical thinking and ethical practices.
                                        </p>
                                        <span className="vm-quote-close">&rdquo;</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                /* ═══════════════════════════════════════════════
                   VISION & MISSION — PREMIUM REDESIGN
                   ═══════════════════════════════════════════════ */

                /* ── Background Layer ── */
                .vm-bg-layer {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    overflow: hidden;
                    z-index: 1;
                }

                /* Concentric Rings */
                .vm-rings {
                    position: absolute;
                    width: 500px;
                    height: 500px;
                }

                .vm-rings-left {
                    left: -180px;
                    top: 50%;
                    transform: translateY(-50%);
                }

                .vm-rings-right {
                    right: -180px;
                    top: 50%;
                    transform: translateY(-50%);
                }

                .vm-ring {
                    position: absolute;
                    border-radius: 50%;
                    border: 1.5px solid rgba(191, 219, 254, 0.45);
                    box-shadow: 0 0 25px rgba(219, 234, 254, 0.3);
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .vm-ring-1 {
                    width: 460px;
                    height: 460px;
                    border-color: rgba(191, 219, 254, 0.4);
                    animation: vmRingPulse 9s ease-in-out infinite alternate;
                }

                .vm-ring-2 {
                    width: 320px;
                    height: 320px;
                    border-color: rgba(147, 197, 253, 0.5);
                    animation: vmRingPulse 7s ease-in-out infinite alternate 1s;
                }

                .vm-ring-3 {
                    width: 180px;
                    height: 180px;
                    border-color: rgba(96, 165, 250, 0.35);
                    animation: vmRingPulse 5s ease-in-out infinite alternate 0.5s;
                }

                @keyframes vmRingPulse {
                    0% { transform: translate(-50%, -50%) scale(0.97); opacity: 0.6; }
                    100% { transform: translate(-50%, -50%) scale(1.03); opacity: 1; }
                }

                /* Dot Matrices */
                .vm-dot-matrix {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 12px;
                    position: absolute;
                    z-index: 1;
                }

                .vm-dots-tl { top: 60px; left: 4%; }
                .vm-dots-tr { top: 60px; right: 4%; }
                .vm-dots-bl { bottom: 80px; left: 8%; }
                .vm-dots-br { bottom: 80px; right: 8%; }

                .vm-dot {
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    background: #93C5FD;
                    opacity: 0.55;
                }

                /* Floating Background Icons */
                .vm-float-icon {
                    position: absolute;
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.85);
                    border: 2px solid rgba(191, 219, 254, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 8px 32px rgba(37, 99, 235, 0.12);
                    z-index: 2;
                    opacity: 0;
                    transform: scale(0.6);
                    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .vm-float-icon.vm-anim-in {
                    opacity: 1;
                    transform: scale(1);
                }

                .vm-float-eye {
                    top: 90px;
                    left: 7%;
                    animation: vmFloatBob 6s ease-in-out infinite;
                    transition-delay: 0.3s;
                }

                .vm-float-rocket {
                    top: 90px;
                    right: 7%;
                    animation: vmFloatBob 6s ease-in-out infinite 1.5s;
                    transition-delay: 0.5s;
                }

                .vm-float-icon i {
                    font-size: 24px;
                    color: #2563EB;
                }

                @keyframes vmFloatBob {
                    0%, 100% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(-12px) scale(1.03); }
                }

                /* Connector SVG */
                .vm-connector-svg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    opacity: 0.6;
                }

                /* Campus Skyline */
                .vm-campus-skyline {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 160px;
                    background-image: url('/img/campus_skyline.jpg');
                    background-size: cover;
                    background-position: center bottom;
                    opacity: 0.12;
                    mix-blend-mode: multiply;
                    -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%);
                    mask-image: linear-gradient(to top, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%);
                    pointer-events: none;
                    z-index: 1;
                }

                /* ── Header ── */
                .vm-header {
                    text-align: center;
                    margin-bottom: 48px;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.7s ease, transform 0.7s ease;
                }

                .vm-header-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .vm-subtitle {
                    color: #64748B;
                    font-size: 14.5px;
                    line-height: 1.6;
                    max-width: 520px;
                    margin: 0 auto;
                    font-family: var(--font-b);
                    font-weight: 400;
                    text-align: center;
                }

                /* ── Cards ── */
                .vm-card {
                    background: rgba(255, 255, 255, 0.75);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(219, 234, 254, 0.8);
                    border-radius: 20px;
                    padding: 0;
                    height: 100%;
                    display: flex;
                    overflow: hidden;
                    position: relative;
                    box-shadow: 0 4px 24px rgba(30, 58, 95, 0.06);
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    opacity: 0;
                    transform: translateY(40px);
                }

                .vm-card-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .vm-card-vision {
                    transition-delay: 0.2s;
                }

                .vm-card-mission {
                    transition-delay: 0.4s;
                }

                .vm-card:hover {
                    transform: translateY(-6px) !important;
                    border-color: #93C5FD !important;
                    box-shadow: 0 20px 50px rgba(37, 99, 235, 0.14) !important;
                }

                /* Left accent border */
                .vm-card-accent {
                    width: 5px;
                    min-height: 100%;
                    flex-shrink: 0;
                    border-radius: 20px 0 0 20px;
                }

                .vm-accent-vision {
                    background: linear-gradient(180deg, #2563EB 0%, #60A5FA 100%);
                }

                .vm-accent-mission {
                    background: linear-gradient(180deg, #3B82F6 0%, #38BDF8 100%);
                }

                /* Card inner */
                .vm-card-inner {
                    padding: 36px 32px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                /* Card header with icon and title */
                .vm-card-header {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    margin-bottom: 20px;
                }

                .vm-icon-circle {
                    width: 52px;
                    height: 52px;
                    min-width: 52px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .vm-icon-vision {
                    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
                    border: 1.5px solid #BFDBFE;
                }

                .vm-icon-mission {
                    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
                    border: 1.5px solid #BFDBFE;
                }

                .vm-icon-circle i {
                    font-size: 22px;
                    color: #2563EB;
                    transition: all 0.3s ease;
                }

                .vm-card:hover .vm-icon-circle {
                    background: #DBEAFE !important;
                    border-color: #60A5FA !important;
                    transform: scale(1.1) rotate(5deg);
                    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.2);
                }

                .vm-card:hover .vm-icon-circle i {
                    color: #1D4ED8;
                }

                .vm-card-title {
                    font-family: var(--font-h) !important;
                    font-weight: 800 !important;
                    font-size: 1.4rem !important;
                    color: #0F172A !important;
                    margin: 0 !important;
                    letter-spacing: -0.01em;
                }

                /* Quote body */
                .vm-card-body {
                    position: relative;
                    flex: 1;
                    padding-left: 4px;
                }

                .vm-quote-open,
                .vm-quote-close {
                    font-family: Georgia, serif;
                    font-size: 42px;
                    line-height: 1;
                    color: #3B82F6;
                    opacity: 0.4;
                    user-select: none;
                    display: inline-block;
                }

                .vm-quote-open {
                    vertical-align: top;
                    margin-right: 4px;
                    margin-top: -4px;
                }

                .vm-quote-close {
                    vertical-align: bottom;
                    margin-left: 4px;
                    float: right;
                    margin-top: -10px;
                }

                .vm-card-text {
                    color: #475569 !important;
                    font-size: 15px !important;
                    line-height: 1.85 !important;
                    font-style: italic !important;
                    margin: 0 !important;
                    display: inline;
                }

                /* ── Responsive ── */
                @media (max-width: 768px) {
                    .vm-float-icon {
                        width: 48px;
                        height: 48px;
                    }

                    .vm-float-icon i {
                        font-size: 18px;
                    }

                    .vm-float-eye {
                        left: 3%;
                        top: 70px;
                    }

                    .vm-float-rocket {
                        right: 3%;
                        top: 70px;
                    }

                    .vm-card-inner {
                        padding: 28px 22px;
                    }

                    .vm-rings {
                        width: 350px;
                        height: 350px;
                    }

                    .vm-dots-tl, .vm-dots-bl { left: 2%; }
                    .vm-dots-tr, .vm-dots-br { right: 2%; }
                }

                @media (max-width: 576px) {
                    .vm-subtitle br { display: none; }

                    .vm-card-accent {
                        width: 4px;
                    }
                }
            `}</style>
        </>
    );
}
