'use client';

import React from 'react';

export default function SectionBackground() {
    return (
        <div className="section-premium-bg" aria-hidden="true">
            {/* ── Soft Ambient Glow Blobs ── */}
            <div className="sec-blob sec-blob-tl" />
            <div className="sec-blob sec-blob-tr" />
            <div className="sec-blob sec-blob-bl" />
            <div className="sec-blob sec-blob-br" />

            {/* ── Left Decorative SVG Graphics (Curves, Arc Band & Node Dot) ── */}
            <svg
                className="sec-svg-decor sec-svg-left"
                viewBox="0 0 360 700"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMid slice"
            >
                <defs>
                    {/* Top-Left Thick Arc Gradient */}
                    <linearGradient id="secGradArcTL" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.45" />
                        <stop offset="60%" stopColor="#BFDBFE" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.05" />
                    </linearGradient>

                    {/* Bottom-Left Arc Gradient */}
                    <linearGradient id="secGradArcBL" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.4" />
                        <stop offset="70%" stopColor="#BFDBFE" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#EFF6FF" stopOpacity="0" />
                    </linearGradient>

                    {/* Soft Center Disc Gradient */}
                    <radialGradient id="secRadLeft" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#BFDBFE" stopOpacity="0.3" />
                        <stop offset="70%" stopColor="#DBEAFE" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Top-Left Crescent Arc Swoosh */}
                <path
                    d="M -120 180 C -40 20 60 -40 220 -80 L 170 -120 C 30 -80 -70 -20 -150 140 Z"
                    fill="url(#secGradArcTL)"
                    className="sec-arc-float-1"
                />

                {/* Secondary Outer Arc Band */}
                <path
                    d="M -90 320 A 300 300 0 0 1 180 -50 A 240 240 0 0 0 -90 220 Z"
                    fill="url(#secGradArcTL)"
                    opacity="0.75"
                    className="sec-arc-float-2"
                />

                {/* Thin Connector Arc Path with Node */}
                <path
                    d="M -30 140 Q 160 170 145 255"
                    stroke="#93C5FD"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.85"
                />
                {/* Node Target Circle & Glowing Halo */}
                <circle cx="145" cy="255" r="5" fill="#3B82F6" className="sec-node-pulse" />
                <circle cx="145" cy="255" r="11" stroke="#60A5FA" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />

                {/* Secondary Faint Connector Arc */}
                <path
                    d="M -60 380 Q 90 420 50 560"
                    stroke="#BFDBFE"
                    strokeWidth="1.4"
                    strokeDasharray="4 4"
                    fill="none"
                    opacity="0.6"
                />
                <circle cx="50" cy="560" r="3.5" fill="#60A5FA" opacity="0.8" />

                {/* Bottom-Left Overlapping Arc Crescent */}
                <path
                    d="M -140 560 A 260 260 0 0 1 120 740 A 200 200 0 0 0 -140 640 Z"
                    fill="url(#secGradArcBL)"
                    className="sec-arc-float-1"
                />
                <circle cx="-20" cy="620" r="120" fill="url(#secRadLeft)" />
            </svg>

            {/* ── Right Decorative SVG Graphics (Curves, Arc Band & Node Dot) ── */}
            <svg
                className="sec-svg-decor sec-svg-right"
                viewBox="0 0 360 700"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMaxYMid slice"
            >
                <defs>
                    {/* Right Arc Gradient */}
                    <linearGradient id="secGradArcRight" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.42" />
                        <stop offset="65%" stopColor="#BFDBFE" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#EFF6FF" stopOpacity="0.05" />
                    </linearGradient>

                    {/* Bottom-Right Large Radial Sphere */}
                    <radialGradient id="secRadBR" cx="60%" cy="60%" r="50%">
                        <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.38" />
                        <stop offset="50%" stopColor="#BFDBFE" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </radialGradient>

                    <radialGradient id="secRadTR" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#BFDBFE" stopOpacity="0.3" />
                        <stop offset="65%" stopColor="#DBEAFE" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Top-Right Soft Glowing Disc */}
                <circle cx="280" cy="90" r="130" fill="url(#secRadTR)" className="sec-arc-float-2" />

                {/* Right Connector Arc with Node Dot */}
                <path
                    d="M 390 280 Q 220 330 235 440"
                    stroke="#93C5FD"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.85"
                />
                {/* Node Target Circle & Glowing Halo */}
                <circle cx="235" cy="440" r="5" fill="#3B82F6" className="sec-node-pulse" />
                <circle cx="235" cy="440" r="11" stroke="#60A5FA" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />

                {/* Right Thick Swoosh Arc Ribbon */}
                <path
                    d="M 450 320 A 300 300 0 0 1 230 620 A 250 250 0 0 0 450 410 Z"
                    fill="url(#secGradArcRight)"
                    className="sec-arc-float-1"
                />

                {/* Bottom-Right Overlapping Translucent Discs (Matching Screenshot) */}
                <circle cx="310" cy="650" r="170" fill="url(#secRadBR)" className="sec-arc-float-2" />
                <circle cx="260" cy="690" r="130" fill="url(#secRadBR)" opacity="0.8" />
            </svg>

            {/* ── Technical Dot Matrix Grids (Matching Screenshot) ── */}
            {/* Bottom-Left Dot Matrix */}
            <div className="sec-dot-matrix sec-matrix-bl">
                {Array.from({ length: 24 }).map((_, i) => (
                    <div key={`bl-${i}`} className="sec-matrix-dot" />
                ))}
            </div>

            {/* Top-Right Dot Matrix */}
            <div className="sec-dot-matrix sec-matrix-tr">
                {Array.from({ length: 24 }).map((_, i) => (
                    <div key={`tr-${i}`} className="sec-matrix-dot" />
                ))}
            </div>

            <style jsx>{`
                .section-premium-bg {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                    pointer-events: none;
                    z-index: 1;
                    user-select: none;
                }

                /* ── Ambient Radial Glow Blobs ── */
                .sec-blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(50px);
                    pointer-events: none;
                }

                .sec-blob-tl {
                    top: -110px;
                    left: -110px;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(191, 219, 254, 0.42) 0%, rgba(224, 242, 254, 0.2) 60%, transparent 80%);
                    animation: secBlobFloat 13s ease-in-out infinite alternate;
                }

                .sec-blob-tr {
                    top: -70px;
                    right: -90px;
                    width: 480px;
                    height: 480px;
                    background: radial-gradient(circle, rgba(147, 197, 253, 0.36) 0%, rgba(219, 234, 254, 0.16) 55%, transparent 75%);
                    animation: secBlobFloat 11s ease-in-out infinite alternate-reverse;
                }

                .sec-blob-bl {
                    bottom: -90px;
                    left: -90px;
                    width: 460px;
                    height: 460px;
                    background: radial-gradient(circle, rgba(191, 219, 254, 0.36) 0%, rgba(224, 242, 254, 0.16) 60%, transparent 80%);
                    animation: secBlobFloat 12s ease-in-out infinite alternate;
                }

                .sec-blob-br {
                    bottom: -90px;
                    right: -90px;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, rgba(219, 234, 254, 0.16) 60%, transparent 80%);
                    animation: secBlobFloat 14s ease-in-out infinite alternate-reverse;
                }

                @keyframes secBlobFloat {
                    0% {
                        transform: translate(0, 0) scale(1);
                    }
                    50% {
                        transform: translate(14px, 12px) scale(1.05);
                    }
                    100% {
                        transform: translate(-10px, -8px) scale(0.96);
                    }
                }

                /* ── SVG Decorative Graphic Positioning ── */
                .sec-svg-decor {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    height: 100%;
                    pointer-events: none;
                    z-index: 1;
                }

                .sec-svg-left {
                    left: 0;
                    width: 320px;
                    max-width: 35vw;
                }

                .sec-svg-right {
                    right: 0;
                    width: 320px;
                    max-width: 35vw;
                }

                /* Floating keyframe for SVG arc paths */
                .sec-arc-float-1 {
                    animation: secArcFloat1 15s ease-in-out infinite alternate;
                    transform-origin: center;
                }

                .sec-arc-float-2 {
                    animation: secArcFloat2 18s ease-in-out infinite alternate;
                    transform-origin: center;
                }

                @keyframes secArcFloat1 {
                    0% {
                        transform: translateY(0) scale(1);
                    }
                    50% {
                        transform: translateY(-8px) scale(1.02);
                    }
                    100% {
                        transform: translateY(6px) scale(0.98);
                    }
                }

                @keyframes secArcFloat2 {
                    0% {
                        transform: translateY(0) scale(1);
                    }
                    50% {
                        transform: translateY(10px) scale(1.03);
                    }
                    100% {
                        transform: translateY(-6px) scale(0.98);
                    }
                }

                /* ── Glowing Node Pulse ── */
                .sec-node-pulse {
                    animation: secRadarPulse 2.8s ease-in-out infinite;
                    transform-origin: center;
                }

                @keyframes secRadarPulse {
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

                /* ── Dot Matrix Grids ── */
                .sec-dot-matrix {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 12px;
                    position: absolute;
                    z-index: 1;
                    pointer-events: none;
                }

                .sec-matrix-bl {
                    bottom: 75px;
                    left: 3%;
                }

                .sec-matrix-tr {
                    top: 65px;
                    right: 4%;
                }

                .sec-matrix-dot {
                    width: 4.5px;
                    height: 4.5px;
                    border-radius: 50%;
                    background: #93C5FD;
                    opacity: 0.7;
                    transition: opacity 0.3s ease;
                    animation: secDotBreathe 6s ease-in-out infinite alternate;
                }

                .sec-matrix-dot:nth-child(even) {
                    animation-delay: 1.5s;
                }

                .sec-matrix-dot:nth-child(3n) {
                    animation-delay: 3s;
                }

                @keyframes secDotBreathe {
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

                /* ── Mobile Adaptation ── */
                @media (max-width: 768px) {
                    .sec-svg-left {
                        width: 200px;
                        max-width: 45vw;
                    }
                    .sec-svg-right {
                        width: 200px;
                        max-width: 45vw;
                    }
                    .sec-dot-matrix {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
}
