'use client';

import React from 'react';

export default function TestimonialsBackground() {
    return (
        <div className="testimonials-dynamic-bg" aria-hidden="true">
            {/* ── Soft Ambient Glow Blobs ── */}
            <div className="test-blob test-blob-tl" />
            <div className="test-blob test-blob-tr" />
            <div className="test-blob test-blob-bl" />
            <div className="test-blob test-blob-br" />

            {/* ── Fullscreen Vector Graphic Elements ── */}
            <svg
                className="test-svg-stage"
                viewBox="0 0 1440 760"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <linearGradient id="testBubbleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                        <stop offset="40%" stopColor="#EFF6FF" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#BFDBFE" stopOpacity="0.8" />
                    </linearGradient>

                    <linearGradient id="testArcGradTL" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#BFDBFE" stopOpacity="0.45" />
                        <stop offset="70%" stopColor="#DBEAFE" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#EFF6FF" stopOpacity="0.05" />
                    </linearGradient>

                    <linearGradient id="testArcGradBR" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.4" />
                        <stop offset="60%" stopColor="#DBEAFE" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#EFF6FF" stopOpacity="0" />
                    </linearGradient>

                    <filter id="testBubbleShadow" x="-30%" y="-30%" width="160%" height="160%">
                        <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#2563EB" floodOpacity="0.14" />
                    </filter>
                </defs>

                {/* ── Left Side Concentric Circular Swooshes ── */}
                <g className="test-left-arcs">
                    <circle cx="20" cy="380" r="280" stroke="#BFDBFE" strokeWidth="2.5" strokeOpacity="0.45" fill="none" />
                    <circle cx="20" cy="380" r="210" fill="#DBEAFE" fillOpacity="0.32" />
                    <circle cx="20" cy="380" r="140" fill="#BFDBFE" fillOpacity="0.25" />
                    <circle cx="20" cy="380" r="50" fill="#93C5FD" fillOpacity="0.38" />

                    {/* Left Arc Connector Line with Pulsing Nodes */}
                    <path
                        d="M -30 150 Q 180 190 140 320"
                        stroke="#93C5FD"
                        strokeWidth="1.8"
                        strokeDasharray="5 5"
                        fill="none"
                        opacity="0.8"
                    />
                    <path
                        d="M -10 170 Q 120 195 130 270"
                        stroke="#60A5FA"
                        strokeWidth="1.6"
                        fill="none"
                        opacity="0.85"
                    />

                    {/* Pulsing Nodes */}
                    <circle cx="130" cy="270" r="5.5" fill="#2563EB" className="test-node-pulse" />
                    <circle cx="130" cy="270" r="12" stroke="#60A5FA" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />
                    <circle cx="30" cy="180" r="4" fill="#3B82F6" className="test-node-pulse" />
                </g>

                {/* ── Right Side Concentric Circular Swooshes ── */}
                <g className="test-right-arcs">
                    <circle cx="1420" cy="540" r="260" stroke="#BFDBFE" strokeWidth="2" strokeOpacity="0.5" fill="none" />
                    <circle cx="1420" cy="540" r="190" fill="#DBEAFE" fillOpacity="0.3" />
                    <circle cx="1420" cy="540" r="120" fill="#93C5FD" fillOpacity="0.22" />

                    {/* Right Arc Connector Path */}
                    <path
                        d="M 1480 340 Q 1280 400 1310 520"
                        stroke="#93C5FD"
                        strokeWidth="1.8"
                        strokeDasharray="4 4"
                        fill="none"
                        opacity="0.8"
                    />
                    <circle cx="1310" cy="520" r="5.5" fill="#2563EB" className="test-node-pulse" />
                    <circle cx="1310" cy="520" r="12" stroke="#60A5FA" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />
                </g>

                {/* ── Top-Left Floating 3D Chat Speech Bubble (Matching Reference Pic) ── */}
                <g className="test-chat-bubble" filter="url(#testBubbleShadow)" transform="translate(150, 110)">
                    {/* Speech Bubble Shape */}
                    <path
                        d="M 20 0 C 8.95 0 0 8.95 0 20 L 0 52 C 0 63.05 8.95 72 20 72 L 56 72 L 72 84 L 68 72 L 80 72 C 91.05 72 100 63.05 100 52 L 100 20 C 100 8.95 91.05 0 80 0 Z"
                        fill="url(#testBubbleGrad)"
                        stroke="#BFDBFE"
                        strokeWidth="2"
                    />
                    {/* Three Dots (...) inside Bubble */}
                    <circle cx="32" cy="36" r="5" fill="#93C5FD" />
                    <circle cx="50" cy="36" r="5" fill="#60A5FA" />
                    <circle cx="68" cy="36" r="5" fill="#93C5FD" />
                </g>

                {/* ── Floating Translucent Ambient Orbs ── */}
                <circle cx="1200" cy="140" r="44" fill="#DBEAFE" fillOpacity="0.4" className="test-orb-float-1" />
                <circle cx="380" cy="460" r="56" fill="#BFDBFE" fillOpacity="0.25" className="test-orb-float-2" />
                <circle cx="1260" cy="660" r="50" fill="#93C5FD" fillOpacity="0.3" className="test-orb-float-1" />
            </svg>

            {/* ── Technical Dot Matrix Grids (Matching Reference Pic) ── */}
            {/* Top-Left Dot Matrix */}
            <div className="test-dot-matrix test-matrix-tl">
                {Array.from({ length: 24 }).map((_, i) => (
                    <div key={`tl-${i}`} className="test-matrix-dot" />
                ))}
            </div>

            {/* Bottom-Left Dot Matrix */}
            <div className="test-dot-matrix test-matrix-bl">
                {Array.from({ length: 24 }).map((_, i) => (
                    <div key={`bl-${i}`} className="test-matrix-dot" />
                ))}
            </div>

            {/* Top-Right Dot Matrix */}
            <div className="test-dot-matrix test-matrix-tr">
                {Array.from({ length: 24 }).map((_, i) => (
                    <div key={`tr-${i}`} className="test-matrix-dot" />
                ))}
            </div>

            <style jsx>{`
                .testimonials-dynamic-bg {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                    pointer-events: none;
                    z-index: 1;
                    user-select: none;
                }

                /* ── Ambient Radial Glow Blobs ── */
                .test-blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(55px);
                    pointer-events: none;
                }

                .test-blob-tl {
                    top: -120px;
                    left: -120px;
                    width: 520px;
                    height: 520px;
                    background: radial-gradient(circle, rgba(191, 219, 254, 0.44) 0%, rgba(224, 242, 254, 0.22) 60%, transparent 80%);
                    animation: testBlobFloat 14s ease-in-out infinite alternate;
                }

                .test-blob-tr {
                    top: -80px;
                    right: -100px;
                    width: 560px;
                    height: 560px;
                    background: radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, rgba(219, 234, 254, 0.2) 55%, transparent 75%);
                    animation: testBlobFloat 12s ease-in-out infinite alternate-reverse;
                }

                .test-blob-bl {
                    bottom: -100px;
                    left: -100px;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(191, 219, 254, 0.38) 0%, rgba(224, 242, 254, 0.18) 60%, transparent 80%);
                    animation: testBlobFloat 13s ease-in-out infinite alternate;
                }

                .test-blob-br {
                    bottom: -100px;
                    right: -100px;
                    width: 540px;
                    height: 540px;
                    background: radial-gradient(circle, rgba(147, 197, 253, 0.45) 0%, rgba(219, 234, 254, 0.18) 60%, transparent 80%);
                    animation: testBlobFloat 15s ease-in-out infinite alternate-reverse;
                }

                @keyframes testBlobFloat {
                    0% {
                        transform: translate(0, 0) scale(1);
                    }
                    50% {
                        transform: translate(16px, 14px) scale(1.06);
                    }
                    100% {
                        transform: translate(-12px, -10px) scale(0.95);
                    }
                }

                /* ── SVG Canvas Stage ── */
                .test-svg-stage {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 1;
                }

                /* ── Floating 3D Chat Speech Bubble ── */
                .test-chat-bubble {
                    animation: testBubbleFloat 8s ease-in-out infinite alternate;
                    transform-origin: 200px 150px;
                }

                @keyframes testBubbleFloat {
                    0% {
                        transform: translate(150px, 110px) rotate(-6deg) scale(1);
                    }
                    50% {
                        transform: translate(150px, 96px) rotate(-2deg) scale(1.05);
                    }
                    100% {
                        transform: translate(150px, 116px) rotate(-8deg) scale(0.98);
                    }
                }

                /* ── Glowing Node Pulse ── */
                .test-node-pulse {
                    animation: testRadarPulse 2.8s ease-in-out infinite;
                    transform-origin: center;
                }

                @keyframes testRadarPulse {
                    0% {
                        filter: drop-shadow(0 0 2px #38bdf8);
                        transform: scale(1);
                    }
                    50% {
                        filter: drop-shadow(0 0 9px #2563eb);
                        transform: scale(1.15);
                    }
                    100% {
                        filter: drop-shadow(0 0 2px #38bdf8);
                        transform: scale(1);
                    }
                }

                /* ── Floating Orbs ── */
                .test-orb-float-1 {
                    animation: testOrbDrift 10s ease-in-out infinite alternate;
                }

                .test-orb-float-2 {
                    animation: testOrbDrift 14s ease-in-out infinite alternate-reverse;
                }

                @keyframes testOrbDrift {
                    0% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                    100% {
                        transform: translateY(10px);
                    }
                }

                /* ── Dot Matrix Grids ── */
                .test-dot-matrix {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 12px;
                    position: absolute;
                    z-index: 1;
                    pointer-events: none;
                }

                .test-matrix-tl {
                    top: 60px;
                    left: 17%;
                }

                .test-matrix-bl {
                    bottom: 60px;
                    left: 2%;
                }

                .test-matrix-tr {
                    top: 65px;
                    right: 4%;
                }

                .test-matrix-dot {
                    width: 4.5px;
                    height: 4.5px;
                    border-radius: 50%;
                    background: #93C5FD;
                    opacity: 0.7;
                    transition: opacity 0.3s ease;
                    animation: testDotBreathe 6s ease-in-out infinite alternate;
                }

                .test-matrix-dot:nth-child(even) {
                    animation-delay: 1.5s;
                }

                .test-matrix-dot:nth-child(3n) {
                    animation-delay: 3s;
                }

                @keyframes testDotBreathe {
                    0% {
                        opacity: 0.45;
                        transform: scale(0.9);
                    }
                    50% {
                        opacity: 0.85;
                        transform: scale(1.1);
                    }
                    100% {
                        opacity: 0.55;
                        transform: scale(0.95);
                    }
                }

                @media (max-width: 860px) {
                    .test-chat-bubble {
                        display: none;
                    }
                    .test-dot-matrix {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
}
