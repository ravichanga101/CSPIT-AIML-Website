'use client';
import { useEffect, useRef } from 'react';

export default function DynamicBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: -9999, y: -9999 });
    const animRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let W = window.innerWidth;
        let H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;

        const rand = (a: number, b: number) => Math.random() * (b - a) + a;

        /* ── Stars ── */
        const STAR_COUNT = Math.min(Math.floor(W * H / 4000), 280);
        const stars = Array.from({ length: STAR_COUNT }, () => ({
            x: rand(0, W), y: rand(0, H),
            r: rand(0.3, 1.6),
            alpha: rand(0.2, 1),
            twinkleSpeed: rand(0.005, 0.02),
            twinklePhase: rand(0, Math.PI * 2),
            color: Math.random() > 0.85
                ? (Math.random() > 0.5 ? '#a78bfa' : '#22d3ee')
                : '#ffffff',
        }));

        /* ── Nebula clouds ── */
        const nebulae = [
            { x: W * 0.15, y: H * 0.25, r: 320, color: '#06b6d4', alpha: 0.028, vx: 0.04, vy: 0.02, phase: 0, ps: 0.003 },
            { x: W * 0.80, y: H * 0.15, r: 280, color: '#7c3aed', alpha: 0.025, vx: -0.03, vy: 0.03, phase: 1, ps: 0.004 },
            { x: W * 0.55, y: H * 0.70, r: 350, color: '#0d9488', alpha: 0.022, vx: 0.02, vy: -0.025, phase: 2, ps: 0.0025 },
            { x: W * 0.90, y: H * 0.65, r: 240, color: '#a78bfa', alpha: 0.02,  vx: -0.04, vy: -0.02, phase: 3, ps: 0.005 },
            { x: W * 0.30, y: H * 0.80, r: 260, color: '#22d3ee', alpha: 0.02,  vx: 0.035, vy: 0.015, phase: 4, ps: 0.003 },
        ];

        /* ── Ripples on click ── */
        interface Ripple { x: number; y: number; r: number; maxR: number; alpha: number; color: string; }
        const ripples: Ripple[] = [];
        const RIPPLE_COLORS = ['#22d3ee', '#a78bfa', '#34d399', '#fbbf24'];
        const onClick = (e: MouseEvent) => {
            ripples.push({
                x: e.clientX, y: e.clientY,
                r: 0, maxR: rand(80, 160),
                alpha: 0.7,
                color: RIPPLE_COLORS[Math.floor(Math.random() * RIPPLE_COLORS.length)],
            });
        };

        const onMove = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY }; };
        const onResize = () => {
            W = window.innerWidth; H = window.innerHeight;
            canvas.width = W; canvas.height = H;
        };

        window.addEventListener('mousemove', onMove);
        window.addEventListener('click', onClick);
        window.addEventListener('resize', onResize);

        const draw = () => {
            ctx.clearRect(0, 0, W, H);

            /* ── Nebula clouds ── */
            for (const n of nebulae) {
                n.phase += n.ps;
                n.x += n.vx; n.y += n.vy;
                // Soft bounce
                if (n.x < -n.r) n.x = W + n.r;
                if (n.x > W + n.r) n.x = -n.r;
                if (n.y < -n.r) n.y = H + n.r;
                if (n.y > H + n.r) n.y = -n.r;

                const pulse = 1 + 0.08 * Math.sin(n.phase);
                const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * pulse);
                g.addColorStop(0,   n.color + Math.round(n.alpha * 2.2 * 255).toString(16).padStart(2,'0'));
                g.addColorStop(0.4, n.color + Math.round(n.alpha * 1.0 * 255).toString(16).padStart(2,'0'));
                g.addColorStop(1,   n.color + '00');
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r * pulse, 0, Math.PI * 2);
                ctx.fillStyle = g;
                ctx.fill();
            }

            /* ── Stars ── */
            for (const s of stars) {
                s.twinklePhase += s.twinkleSpeed;
                const a = s.alpha * (0.5 + 0.5 * Math.sin(s.twinklePhase));
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = s.color + Math.round(a * 255).toString(16).padStart(2, '0');
                ctx.fill();
                // Tiny cross sparkle for brighter stars
                if (s.r > 1.1 && a > 0.7) {
                    ctx.strokeStyle = s.color + Math.round(a * 0.4 * 255).toString(16).padStart(2, '0');
                    ctx.lineWidth = 0.5;
                    ctx.beginPath(); ctx.moveTo(s.x - s.r * 2.5, s.y); ctx.lineTo(s.x + s.r * 2.5, s.y); ctx.stroke();
                    ctx.beginPath(); ctx.moveTo(s.x, s.y - s.r * 2.5); ctx.lineTo(s.x, s.y + s.r * 2.5); ctx.stroke();
                }
            }

            /* ── Mouse glow ── */
            const mx = mouse.current.x, my = mouse.current.y;
            if (mx > 0 && mx < W && my > 0 && my < H) {
                const mg = ctx.createRadialGradient(mx, my, 0, mx, my, 120);
                mg.addColorStop(0,   'rgba(34,211,238,0.07)');
                mg.addColorStop(0.5, 'rgba(167,139,250,0.03)');
                mg.addColorStop(1,   'rgba(0,0,0,0)');
                ctx.beginPath();
                ctx.arc(mx, my, 120, 0, Math.PI * 2);
                ctx.fillStyle = mg;
                ctx.fill();
            }

            /* ── Ripples ── */
            for (let i = ripples.length - 1; i >= 0; i--) {
                const rp = ripples[i];
                rp.r += 3.5;
                rp.alpha *= 0.94;
                ctx.beginPath();
                ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
                ctx.strokeStyle = rp.color + Math.round(rp.alpha * 255).toString(16).padStart(2, '0');
                ctx.lineWidth = 1.5;
                ctx.stroke();
                // Second inner ring
                if (rp.r > 20) {
                    ctx.beginPath();
                    ctx.arc(rp.x, rp.y, rp.r * 0.55, 0, Math.PI * 2);
                    ctx.strokeStyle = rp.color + Math.round(rp.alpha * 0.5 * 255).toString(16).padStart(2, '0');
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
                if (rp.alpha < 0.02 || rp.r > rp.maxR) ripples.splice(i, 1);
            }

            animRef.current = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('click', onClick);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0, left: 0,
                width: '100%', height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
            }}
            aria-hidden="true"
        />
    );
}
