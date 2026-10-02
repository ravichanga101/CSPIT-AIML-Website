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

        /* ── Subtle floating nodes (AI-inspired) ── */
        const NODE_COUNT = Math.min(Math.floor(W * H / 12000), 80);
        const nodes = Array.from({ length: NODE_COUNT }, () => ({
            x: rand(0, W), y: rand(0, H),
            r: rand(1.5, 3),
            vx: rand(-0.15, 0.15),
            vy: rand(-0.15, 0.15),
            alpha: rand(0.08, 0.2),
        }));

        /* ── Soft ambient circles ── */
        const blobs = [
            { x: W * 0.12, y: H * 0.2, r: 350, color: '12, 46, 138', alpha: 0.022, vx: 0.02, vy: 0.015, phase: 0, ps: 0.002 },
            { x: W * 0.85, y: H * 0.15, r: 300, color: '37, 99, 235', alpha: 0.018, vx: -0.02, vy: 0.02, phase: 1, ps: 0.003 },
            { x: W * 0.5, y: H * 0.75, r: 380, color: '59, 130, 246', alpha: 0.015, vx: 0.015, vy: -0.018, phase: 2, ps: 0.002 },
        ];

        const CONNECTION_DIST = 120;

        const onMove = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY }; };
        const onResize = () => {
            W = window.innerWidth; H = window.innerHeight;
            canvas.width = W; canvas.height = H;
        };

        window.addEventListener('mousemove', onMove);
        window.addEventListener('resize', onResize);

        const draw = () => {
            ctx.clearRect(0, 0, W, H);

            /* ── Ambient blobs ── */
            for (const b of blobs) {
                b.phase += b.ps;
                b.x += b.vx; b.y += b.vy;
                if (b.x < -b.r) b.x = W + b.r;
                if (b.x > W + b.r) b.x = -b.r;
                if (b.y < -b.r) b.y = H + b.r;
                if (b.y > H + b.r) b.y = -b.r;

                const pulse = 1 + 0.06 * Math.sin(b.phase);
                const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r * pulse);
                g.addColorStop(0, `rgba(${b.color}, ${b.alpha * 1.5})`);
                g.addColorStop(0.5, `rgba(${b.color}, ${b.alpha * 0.5})`);
                g.addColorStop(1, `rgba(${b.color}, 0)`);
                ctx.beginPath();
                ctx.arc(b.x, b.y, b.r * pulse, 0, Math.PI * 2);
                ctx.fillStyle = g;
                ctx.fill();
            }

            /* ── Nodes + connections ── */
            for (const n of nodes) {
                n.x += n.vx; n.y += n.vy;
                if (n.x < 0 || n.x > W) n.vx *= -1;
                if (n.y < 0 || n.y > H) n.vy *= -1;
            }

            // Draw connections
            ctx.lineWidth = 0.5;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < CONNECTION_DIST) {
                        const alpha = (1 - dist / CONNECTION_DIST) * 0.06;
                        ctx.strokeStyle = `rgba(12, 46, 138, ${alpha})`;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes
            for (const n of nodes) {
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(12, 46, 138, ${n.alpha})`;
                ctx.fill();
            }

            /* ── Mouse proximity glow ── */
            const mx = mouse.current.x, my = mouse.current.y;
            if (mx > 0 && mx < W && my > 0 && my < H) {
                const mg = ctx.createRadialGradient(mx, my, 0, mx, my, 100);
                mg.addColorStop(0, 'rgba(37, 99, 235, 0.04)');
                mg.addColorStop(0.6, 'rgba(12, 46, 138, 0.015)');
                mg.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.beginPath();
                ctx.arc(mx, my, 100, 0, Math.PI * 2);
                ctx.fillStyle = mg;
                ctx.fill();

                // Highlight nearby nodes
                for (const n of nodes) {
                    const dx = mx - n.x;
                    const dy = my - n.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        const lineAlpha = (1 - dist / 150) * 0.1;
                        ctx.strokeStyle = `rgba(37, 99, 235, ${lineAlpha})`;
                        ctx.lineWidth = 0.6;
                        ctx.beginPath();
                        ctx.moveTo(mx, my);
                        ctx.lineTo(n.x, n.y);
                        ctx.stroke();
                    }
                }
            }

            animRef.current = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('mousemove', onMove);
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
