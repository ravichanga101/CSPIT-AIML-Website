'use client';

import React from 'react';

export default function GalleryBackground() {
    return (
        <div className="gallery-dynamic-bg" aria-hidden="true">
            {/* ── Soft Ambient Glow Blobs ── */}
            <div className="gal-blob gal-blob-tl" />
            <div className="gal-blob gal-blob-tr" />
            <div className="gal-blob gal-blob-bl" />
            <div className="gal-blob gal-blob-br" />

            {/* ── Fullscreen Vector Graphic Stage ── */}
            <svg
                className="gal-svg-stage"
                viewBox="0 0 1440 760"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    {/* Gradients for Waves */}
                    <linearGradient id="galWaveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DBEAFE" stopOpacity="0.55" />
                        <stop offset="50%" stopColor="#EFF6FF" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#BFDBFE" stopOpacity="0.35" />
                    </linearGradient>

                    <linearGradient id="galWaveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#BFDBFE" stopOpacity="0.5" />
                        <stop offset="60%" stopColor="#DBEAFE" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#EFF6FF" stopOpacity="0.1" />
                    </linearGradient>

                    <linearGradient id="galWaveGrad3" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.35" />
                        <stop offset="50%" stopColor="#BFDBFE" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.5" />
                    </linearGradient>

                    {/* Camera Body Gradient */}
                    <linearGradient id="galCamBody" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                        <stop offset="30%" stopColor="#EFF6FF" stopOpacity="0.92" />
                        <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.85" />
                    </linearGradient>

                    {/* Camera Lens Outer Bezel */}
                    <linearGradient id="galLensRim" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="50%" stopColor="#DBEAFE" />
                        <stop offset="100%" stopColor="#BFDBFE" />
                    </linearGradient>

                    {/* Camera Lens Core Glass */}
                    <radialGradient id="galLensGlass" cx="45%" cy="40%" r="55%">
                        <stop offset="0%" stopColor="#93C5FD" />
                        <stop offset="45%" stopColor="#60A5FA" />
                        <stop offset="85%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#2563EB" />
                    </radialGradient>

                    {/* Photo Card Landscape Gradients */}
                    <linearGradient id="galCardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#BFDBFE" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.5" />
                    </linearGradient>

                    <linearGradient id="galCardGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.6" />
                    </linearGradient>

                    {/* Drop shadow filter for floating elements */}
                    <filter id="galShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#2563EB" floodOpacity="0.12" />
                    </filter>
                    <filter id="galShadowCard" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#1E3A8A" floodOpacity="0.1" />
                    </filter>
                </defs>

                {/* ── Background Fluid Flowing Waves (Dynamic Layer 1) ── */}
                <g className="gal-wave-layer-back">
                    <path
                        d="M -100 620 C 180 540 380 730 680 640 C 980 550 1200 660 1550 590 L 1550 780 L -100 780 Z"
                        fill="url(#galWaveGrad1)"
                    />
                </g>

                <g className="gal-wave-layer-mid">
                    <path
                        d="M -60 670 C 220 600 480 740 820 660 C 1120 590 1340 700 1540 640 L 1540 780 L -60 780 Z"
                        fill="url(#galWaveGrad2)"
                    />
                </g>

                <g className="gal-wave-layer-front">
                    <path
                        d="M -80 710 C 260 660 520 750 890 690 C 1180 640 1380 720 1560 680 L 1560 780 L -80 780 Z"
                        fill="url(#galWaveGrad3)"
                    />
                </g>

                {/* ── Left Side Dynamic Circular Rings & Node Connectors ── */}
                <g className="gal-left-arcs">
                    {/* Large Concentric Sweeping Arcs */}
                    <circle cx="50" cy="380" r="280" stroke="#BFDBFE" strokeWidth="2.5" strokeOpacity="0.45" fill="none" />
                    <circle cx="50" cy="380" r="210" fill="#DBEAFE" fillOpacity="0.35" />
                    <circle cx="50" cy="380" r="140" fill="#BFDBFE" fillOpacity="0.25" />
                    <circle cx="50" cy="380" r="50" fill="#93C5FD" fillOpacity="0.4" />

                    {/* Left Connector Curve with Pulsing Nodes */}
                    <path
                        d="M -40 180 Q 220 220 180 380"
                        stroke="#93C5FD"
                        strokeWidth="1.8"
                        strokeDasharray="5 5"
                        fill="none"
                        opacity="0.8"
                    />
                    <path
                        d="M -20 200 Q 140 230 145 320"
                        stroke="#60A5FA"
                        strokeWidth="1.6"
                        fill="none"
                        opacity="0.85"
                    />

                    {/* Node 1 */}
                    <circle cx="145" cy="320" r="5.5" fill="#2563EB" className="gal-node-pulse" />
                    <circle cx="145" cy="320" r="12" stroke="#60A5FA" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />

                    {/* Node 2 */}
                    <circle cx="20" cy="200" r="4" fill="#3B82F6" className="gal-node-pulse" />
                </g>

                {/* ── Right Side Arc Rings & Node Connector ── */}
                <g className="gal-right-arcs">
                    <circle cx="1380" cy="620" r="240" stroke="#BFDBFE" strokeWidth="2" strokeOpacity="0.5" fill="none" />
                    <circle cx="1380" cy="620" r="180" fill="#DBEAFE" fillOpacity="0.35" />
                    <circle cx="1380" cy="620" r="110" fill="#93C5FD" fillOpacity="0.25" />

                    {/* Right Arc Connector Path */}
                    <path
                        d="M 1480 380 Q 1240 440 1260 580"
                        stroke="#93C5FD"
                        strokeWidth="1.8"
                        strokeDasharray="4 4"
                        fill="none"
                        opacity="0.8"
                    />
                    {/* Right Pulsing Node */}
                    <circle cx="1260" cy="580" r="5.5" fill="#2563EB" className="gal-node-pulse" />
                    <circle cx="1260" cy="580" r="12" stroke="#60A5FA" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />
                </g>

                {/* ── Floating Polaroid Photos on Lower-Left (Dynamic Hover Float) ── */}
                <g className="gal-photos-left" filter="url(#galShadowCard)">
                    {/* Back Card */}
                    <g transform="translate(140, 520) rotate(14)" className="gal-card-anim-1">
                        <rect x="0" y="0" width="76" height="66" rx="8" fill="#FFFFFF" stroke="#DBEAFE" strokeWidth="1.5" />
                        <rect x="7" y="7" width="62" height="42" rx="4" fill="url(#galCardGrad1)" />
                        {/* Mountain Peaks & Sun */}
                        <path d="M 12 49 L 32 29 L 46 41 L 54 33 L 65 49 Z" fill="#93C5FD" opacity="0.9" />
                        <circle cx="48" cy="20" r="5" fill="#FFFFFF" opacity="0.95" />
                    </g>

                    {/* Front Card */}
                    <g transform="translate(60, 480) rotate(-12)" className="gal-card-anim-2">
                        <rect x="0" y="0" width="88" height="76" rx="9" fill="#FFFFFF" stroke="#BFDBFE" strokeWidth="1.5" />
                        <rect x="8" y="8" width="72" height="50" rx="5" fill="url(#galCardGrad2)" />
                        {/* Mountain Peaks & Sun */}
                        <path d="M 14 58 L 38 34 L 54 48 L 62 40 L 76 58 Z" fill="#60A5FA" opacity="0.95" />
                        <circle cx="58" cy="22" r="6" fill="#FFFFFF" />
                    </g>
                </g>

                {/* ── Floating Polaroid Photos on Upper-Right (Near Camera) ── */}
                <g className="gal-photos-right" filter="url(#galShadowCard)">
                    {/* Back Card */}
                    <g transform="translate(930, 160) rotate(12)" className="gal-card-anim-2">
                        <rect x="0" y="0" width="72" height="62" rx="8" fill="#FFFFFF" stroke="#DBEAFE" strokeWidth="1.5" />
                        <rect x="6" y="6" width="60" height="40" rx="4" fill="url(#galCardGrad1)" />
                        <path d="M 10 46 L 28 28 L 42 38 L 48 32 L 62 46 Z" fill="#93C5FD" opacity="0.9" />
                        <circle cx="46" cy="18" r="4.5" fill="#FFFFFF" opacity="0.95" />
                    </g>

                    {/* Front Card */}
                    <g transform="translate(860, 150) rotate(-10)" className="gal-card-anim-1">
                        <rect x="0" y="0" width="82" height="70" rx="8" fill="#FFFFFF" stroke="#BFDBFE" strokeWidth="1.5" />
                        <rect x="7" y="7" width="68" height="46" rx="5" fill="url(#galCardGrad2)" />
                        <path d="M 12 53 L 34 31 L 48 43 L 56 35 L 70 53 Z" fill="#60A5FA" opacity="0.95" />
                        <circle cx="52" cy="20" r="5.5" fill="#FFFFFF" />
                    </g>
                </g>

                {/* ── The Stylized Camera Illustration (Floating & Breathing) ── */}
                <g className="gal-camera-container" filter="url(#galShadow)">
                    {/* Camera Flash Sparkle Rays (Twinkling Animation) */}
                    <g className="gal-flash-rays" transform="translate(1220, 155)">
                        <line x1="-16" y1="16" x2="-26" y2="26" stroke="#60A5FA" strokeWidth="3.5" strokeLinecap="round" />
                        <line x1="0" y1="0" x2="0" y2="16" stroke="#3B82F6" strokeWidth="3.5" strokeLinecap="round" />
                        <line x1="16" y1="16" x2="26" y2="26" stroke="#60A5FA" strokeWidth="3.5" strokeLinecap="round" />
                    </g>

                    {/* Camera Body and Elements */}
                    <g transform="translate(970, 190)" className="gal-camera-body-wrap">
                        {/* Shutter Button Top-Left */}
                        <rect x="28" y="4" width="38" height="16" rx="6" fill="#DBEAFE" stroke="#BFDBFE" strokeWidth="1.5" />

                        {/* Top Viewfinder Bump */}
                        <path
                            d="M 80 18 L 88 4 C 89 2 92 0 95 0 L 155 0 C 158 0 161 2 162 4 L 170 18 Z"
                            fill="#EFF6FF"
                            stroke="#DBEAFE"
                            strokeWidth="1.5"
                        />

                        {/* Flash Sensor Right */}
                        <rect x="240" y="28" width="22" height="14" rx="4" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="1.5" />

                        {/* Main Body */}
                        <rect
                            x="0"
                            y="14"
                            width="280"
                            height="195"
                            rx="34"
                            fill="url(#galCamBody)"
                            stroke="#BFDBFE"
                            strokeWidth="2.5"
                        />

                        {/* Camera Grip Detail on Left */}
                        <rect x="24" y="60" width="18" height="75" rx="9" fill="#DBEAFE" opacity="0.6" />

                        {/* ── Camera Lens (Multi-layered 3D-styled concentric rings) ── */}
                        {/* Lens Outer Rim Base */}
                        <circle cx="160" cy="115" r="76" fill="url(#galLensRim)" stroke="#93C5FD" strokeWidth="2.5" />

                        {/* Lens Bevel Ring 1 */}
                        <circle cx="160" cy="115" r="64" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.8" />

                        {/* Lens Bevel Ring 2 */}
                        <circle cx="160" cy="115" r="54" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1.5" />

                        {/* Lens Core Glass with Rich Radial Blue Gradient */}
                        <circle cx="160" cy="115" r="44" fill="url(#galLensGlass)" className="gal-lens-glow" />

                        {/* Inner Iris Ring */}
                        <circle cx="160" cy="115" r="28" fill="#60A5FA" opacity="0.75" />
                        <circle cx="160" cy="115" r="16" fill="#93C5FD" opacity="0.65" />

                        {/* Glass Reflections / Glare Highlights */}
                        <ellipse cx="150" cy="104" rx="10" ry="18" transform="rotate(-30 150 104)" fill="#FFFFFF" opacity="0.75" />
                        <circle cx="172" cy="128" r="4.5" fill="#FFFFFF" opacity="0.85" />
                    </g>
                </g>

                {/* ── Floating Soft Orbs/Bubbles ── */}
                <circle cx="1150" cy="100" r="38" fill="#DBEAFE" fillOpacity="0.45" className="gal-orb-float-1" />
                <circle cx="360" cy="440" r="54" fill="#BFDBFE" fillOpacity="0.3" className="gal-orb-float-2" />
                <circle cx="1220" cy="680" r="50" fill="#93C5FD" fillOpacity="0.35" className="gal-orb-float-1" />
            </svg>

            {/* ── Technical Dot Matrix Grids (Matching Screenshot) ── */}
            {/* Top-Left Dot Matrix */}
            <div className="gal-dot-matrix gal-matrix-tl">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={`tl-${i}`} className="gal-matrix-dot" />
                ))}
            </div>

            {/* Bottom-Left Dot Matrix */}
            <div className="gal-dot-matrix gal-matrix-bl">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={`bl-${i}`} className="gal-matrix-dot" />
                ))}
            </div>

            {/* Top-Right Dot Matrix */}
            <div className="gal-dot-matrix gal-matrix-tr">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={`tr-${i}`} className="gal-matrix-dot" />
                ))}
            </div>

            <style jsx>{`
                .gallery-dynamic-bg {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                    pointer-events: none;
                    z-index: 1;
                    user-select: none;
                }

                /* ── Ambient Radial Glow Blobs ── */
                .gal-blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(55px);
                    pointer-events: none;
                }

                .gal-blob-tl {
                    top: -120px;
                    left: -120px;
                    width: 520px;
                    height: 520px;
                    background: radial-gradient(circle, rgba(191, 219, 254, 0.45) 0%, rgba(224, 242, 254, 0.22) 60%, transparent 80%);
                    animation: galBlobFloat 14s ease-in-out infinite alternate;
                }

                .gal-blob-tr {
                    top: -80px;
                    right: -100px;
                    width: 560px;
                    height: 560px;
                    background: radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, rgba(219, 234, 254, 0.2) 55%, transparent 75%);
                    animation: galBlobFloat 12s ease-in-out infinite alternate-reverse;
                }

                .gal-blob-bl {
                    bottom: -100px;
                    left: -100px;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(191, 219, 254, 0.38) 0%, rgba(224, 242, 254, 0.18) 60%, transparent 80%);
                    animation: galBlobFloat 13s ease-in-out infinite alternate;
                }

                .gal-blob-br {
                    bottom: -100px;
                    right: -100px;
                    width: 540px;
                    height: 540px;
                    background: radial-gradient(circle, rgba(147, 197, 253, 0.45) 0%, rgba(219, 234, 254, 0.18) 60%, transparent 80%);
                    animation: galBlobFloat 15s ease-in-out infinite alternate-reverse;
                }

                @keyframes galBlobFloat {
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

                /* ── SVG Stage Stretcher ── */
                .gal-svg-stage {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 1;
                }

                /* ── Dynamic Wave Motion ── */
                .gal-wave-layer-back {
                    animation: galWaveSway1 16s ease-in-out infinite alternate;
                    transform-origin: center bottom;
                }

                .gal-wave-layer-mid {
                    animation: galWaveSway2 12s ease-in-out infinite alternate;
                    transform-origin: center bottom;
                }

                .gal-wave-layer-front {
                    animation: galWaveSway1 10s ease-in-out infinite alternate-reverse;
                    transform-origin: center bottom;
                }

                @keyframes galWaveSway1 {
                    0% {
                        transform: translateX(0) scaleY(1);
                    }
                    50% {
                        transform: translateX(-18px) scaleY(1.03);
                    }
                    100% {
                        transform: translateX(12px) scaleY(0.98);
                    }
                }

                @keyframes galWaveSway2 {
                    0% {
                        transform: translateX(0) scaleY(1);
                    }
                    50% {
                        transform: translateX(16px) scaleY(1.02);
                    }
                    100% {
                        transform: translateX(-14px) scaleY(0.97);
                    }
                }

                /* ── Stylized Camera Dynamic Floating ── */
                .gal-camera-container {
                    animation: galCamFloat 8s ease-in-out infinite alternate;
                    transform-origin: 1110px 280px;
                }

                @keyframes galCamFloat {
                    0% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-14px) rotate(-1.2deg);
                    }
                    100% {
                        transform: translateY(8px) rotate(1deg);
                    }
                }

                /* Camera Lens Glow Breathing */
                .gal-lens-glow {
                    animation: galLensPulse 4s ease-in-out infinite alternate;
                }

                @keyframes galLensPulse {
                    0% {
                        filter: drop-shadow(0 0 2px #38bdf8);
                    }
                    50% {
                        filter: drop-shadow(0 0 10px #2563eb);
                    }
                    100% {
                        filter: drop-shadow(0 0 2px #38bdf8);
                    }
                }

                /* Flash Sparkle Rays Twinkle */
                .gal-flash-rays {
                    animation: galFlashTwinkle 3s ease-in-out infinite;
                    transform-origin: 1220px 165px;
                }

                @keyframes galFlashTwinkle {
                    0%, 100% {
                        opacity: 0.35;
                        transform: translate(1220px, 155px) scale(0.85);
                    }
                    50% {
                        opacity: 1;
                        transform: translate(1220px, 155px) scale(1.18);
                        filter: drop-shadow(0 0 6px #60a5fa);
                    }
                }

                /* ── Floating Polaroid Cards Animation ── */
                .gal-card-anim-1 {
                    animation: galCardDrift1 9s ease-in-out infinite alternate;
                    transform-box: fill-box;
                    transform-origin: center;
                }

                .gal-card-anim-2 {
                    animation: galCardDrift2 11s ease-in-out infinite alternate;
                    transform-box: fill-box;
                    transform-origin: center;
                }

                @keyframes galCardDrift1 {
                    0% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-12px) rotate(-3deg);
                    }
                    100% {
                        transform: translateY(6px) rotate(2deg);
                    }
                }

                @keyframes galCardDrift2 {
                    0% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(10px) rotate(3deg);
                    }
                    100% {
                        transform: translateY(-8px) rotate(-2deg);
                    }
                }

                /* ── Glowing Node Pulse ── */
                .gal-node-pulse {
                    animation: galRadarPulse 2.8s ease-in-out infinite;
                    transform-origin: center;
                }

                @keyframes galRadarPulse {
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
                .gal-orb-float-1 {
                    animation: galOrbDrift 10s ease-in-out infinite alternate;
                }

                .gal-orb-float-2 {
                    animation: galOrbDrift 14s ease-in-out infinite alternate-reverse;
                }

                @keyframes galOrbDrift {
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
                .gal-dot-matrix {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 12px;
                    position: absolute;
                    z-index: 1;
                    pointer-events: none;
                }

                .gal-matrix-tl {
                    top: 60px;
                    left: 17%;
                }

                .gal-matrix-bl {
                    bottom: 70px;
                    left: 2.5%;
                }

                .gal-matrix-tr {
                    top: 65px;
                    right: 4%;
                }

                .gal-matrix-dot {
                    width: 4.5px;
                    height: 4.5px;
                    border-radius: 50%;
                    background: #93C5FD;
                    opacity: 0.7;
                    transition: opacity 0.3s ease;
                    animation: galDotBreathe 6s ease-in-out infinite alternate;
                }

                .gal-matrix-dot:nth-child(even) {
                    animation-delay: 1.5s;
                }

                .gal-matrix-dot:nth-child(3n) {
                    animation-delay: 3s;
                }

                @keyframes galDotBreathe {
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

                /* ── Mobile Responsiveness ── */
                @media (max-width: 992px) {
                    .gal-camera-container {
                        opacity: 0.45;
                        transform: scale(0.85);
                        transform-origin: top right;
                    }
                    .gal-matrix-tl {
                        display: none;
                    }
                }

                @media (max-width: 640px) {
                    .gal-camera-container {
                        opacity: 0.3;
                        transform: scale(0.7);
                    }
                    .gal-photos-left,
                    .gal-photos-right {
                        opacity: 0.5;
                    }
                    .gal-dot-matrix {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
}
