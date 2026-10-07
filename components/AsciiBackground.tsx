'use client';

import { useEffect, useRef } from 'react';

// Light-to-dense character ramp; the blob's edge uses the light end, its core the dense end
const RAMP = '.:-=+*#%@';
const FPS = 20;
const FONT_SIZE = 14;
// Monospace glyphs are roughly 0.6em wide
const CELL_WIDTH = FONT_SIZE * 0.6;
const CELL_HEIGHT = FONT_SIZE;
// Dims the blob behind the centred text column so the text stays readable
const CENTER_FADE =
  'linear-gradient(to right, black, rgba(0, 0, 0, 0.25) 35%, rgba(0, 0, 0, 0.25) 65%, black)';

// Each ball orbits the centre on its own path; where they overlap they merge into one blob.
// radius and orbit are fractions of the blob's overall size.
const BALLS = [
  { radius: 0.42, orbit: 0.1, speedX: 0.31, speedY: 0.23, phase: 0 },
  { radius: 0.3, orbit: 0.42, speedX: 0.47, speedY: 0.39, phase: 1.7 },
  { radius: 0.26, orbit: 0.5, speedX: -0.35, speedY: 0.52, phase: 3.1 },
  { radius: 0.24, orbit: 0.46, speedX: 0.58, speedY: -0.29, phase: 4.6 },
  { radius: 0.2, orbit: 0.58, speedX: -0.43, speedY: -0.61, phase: 5.9 },
];

export function AsciiBackground() {
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let cols = 0;
    let rows = 0;
    let size = 0;
    let frame = 0;
    let last = 0;

    const resize = () => {
      cols = Math.ceil(window.innerWidth / CELL_WIDTH);
      rows = Math.ceil(window.innerHeight / CELL_HEIGHT);
      size = Math.min(window.innerWidth, window.innerHeight) * 0.42;
    };

    const draw = (t: number) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const balls = BALLS.map((ball) => ({
        x: centerX + Math.cos(t * ball.speedX + ball.phase) * ball.orbit * size,
        y: centerY + Math.sin(t * ball.speedY + ball.phase) * ball.orbit * size,
        radiusSq: (ball.radius * size) ** 2,
      }));

      let out = '';
      for (let row = 0; row < rows; row++) {
        const y = (row + 0.5) * CELL_HEIGHT;
        for (let col = 0; col < cols; col++) {
          const x = (col + 0.5) * CELL_WIDTH;
          // Metaball field: at least 1 means the cell is inside the blob
          let field = 0;
          for (const ball of balls) {
            field += ball.radiusSq / ((x - ball.x) ** 2 + (y - ball.y) ** 2 + 1);
          }
          if (field < 1) {
            out += ' ';
          } else {
            const depth = Math.min((field - 1) / 3, 1);
            out += RAMP[Math.floor(depth * (RAMP.length - 1))];
          }
        }
        out += '\n';
      }
      pre.textContent = out;
    };

    const loop = (now: number) => {
      frame = requestAnimationFrame(loop);
      if (now - last < 1000 / FPS) return;
      last = now;
      draw(now / 1000);
    };

    const handleResize = () => {
      resize();
      if (reduceMotion) draw(0);
    };

    resize();
    draw(0);
    window.addEventListener('resize', handleResize);
    if (!reduceMotion) frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <pre
      ref={preRef}
      aria-hidden
      className="commit-mono fixed inset-0 -z-10 m-0 overflow-hidden pointer-events-none select-none text-neutral-700 opacity-50"
      style={{
        fontSize: FONT_SIZE,
        lineHeight: 1,
        letterSpacing: 0,
        maskImage: CENTER_FADE,
        WebkitMaskImage: CENTER_FADE,
      }}
    />
  );
}
