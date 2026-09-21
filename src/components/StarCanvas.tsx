import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  depth: number;
  driftX: number;
  driftY: number;
  // Disney sparkle attributes
  isSparkler: boolean;
  sparkleRadius: number;
  rotation: number;
  rotationSpeed: number;
  burstFlare: number; // 0..1 intensity when cursor hits or sparkles
  hasDiagonals: boolean;
}

interface PixieSpark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  maxAlpha: number;
  rotation: number;
  rotSpeed: number;
  life: number;
  maxLife: number;
  isDiamond: boolean;
  twinklePhase: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  alpha: number;
  life: number;
  maxLife: number;
}

interface StarCanvasProps {
  className?: string;
  density?: number;
  interactive?: boolean;
}

// Helper to draw iconic Disney 4-pointed (or 8-pointed) concave diamond sparkle
function drawDiamondSparkle(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  outerRadius: number,
  alpha: number,
  rotation: number = 0,
  hasDiagonals: boolean = false
) {
  if (alpha <= 0.01 || outerRadius <= 0.5) return;

  ctx.save();
  ctx.translate(cx, cy);
  if (rotation !== 0) ctx.rotate(rotation);

  // Radiant center glow aura
  const glowR = outerRadius * 0.65;
  const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, glowR);
  gradient.addColorStop(0, `rgba(255, 255, 255, ${(alpha * 0.75).toFixed(3)})`);
  gradient.addColorStop(0.35, `rgba(255, 255, 255, ${(alpha * 0.25).toFixed(3)})`);
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(0, 0, glowR, 0, Math.PI * 2);
  ctx.fill();

  // 4 Primary Cardinal Ray Spikes (Concave Disney Diamond Star)
  ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1.0, alpha).toFixed(3)})`;
  ctx.beginPath();
  ctx.moveTo(0, -outerRadius);
  ctx.quadraticCurveTo(0, 0, outerRadius, 0);
  ctx.quadraticCurveTo(0, 0, 0, outerRadius);
  ctx.quadraticCurveTo(0, 0, -outerRadius, 0);
  ctx.quadraticCurveTo(0, 0, 0, -outerRadius);
  ctx.closePath();
  ctx.fill();

  // Optional 4 smaller diagonal rays for prominent 8-point fairy-tale stars
  if (hasDiagonals) {
    const diagR = outerRadius * 0.42;
    ctx.rotate(Math.PI / 4);
    ctx.fillStyle = `rgba(255, 255, 255, ${(alpha * 0.65).toFixed(3)})`;
    ctx.beginPath();
    ctx.moveTo(0, -diagR);
    ctx.quadraticCurveTo(0, 0, diagR, 0);
    ctx.quadraticCurveTo(0, 0, 0, diagR);
    ctx.quadraticCurveTo(0, 0, -diagR, 0);
    ctx.quadraticCurveTo(0, 0, 0, -diagR);
    ctx.closePath();
    ctx.fill();
  }

  // Brilliant crystal white core
  const coreRadius = Math.max(0.5, outerRadius * 0.15);
  ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1.0, alpha * 1.05).toFixed(3)})`;
  ctx.beginPath();
  ctx.arc(0, 0, coreRadius, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

export const StarCanvas: React.FC<StarCanvasProps> = ({
  className = '',
  density = 160,
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<Star[]>([]);
  const pixieSparksRef = useRef<PixieSpark[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const nextShootingStarTimeRef = useRef<number>(performance.now() + 3000);

  const mouseRef = useRef({
    x: -9999,
    y: -9999,
    vx: 0,
    vy: 0,
    active: false,
    lastTime: 0,
    targetParallaxX: 0,
    targetParallaxY: 0,
    parallaxX: 0,
    parallaxY: 0,
  });

  const animFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Initialize bright white stars with medium Disney sparkle behavior
    const initStars = () => {
      const count = Math.floor((width * height) / 8800);
      const actualCount = Math.min(Math.max(count, 90), density);
      const stars: Star[] = [];

      for (let i = 0; i < actualCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;

        // ~18% of stars are medium Disney sparklers with clear diamond rays
        const isSparkler = Math.random() < 0.18;
        const hasDiagonals = isSparkler && Math.random() < 0.35;
        // Medium star core radius (0.75px to 1.6px)
        const radius = isSparkler ? Math.random() * 0.4 + 1.2 : Math.random() * 0.5 + 0.75;
        // Medium sparkle ray length (4.5px to 7.5px)
        const sparkleRadius = isSparkler ? Math.random() * 3.0 + 4.5 : Math.random() * 1.8 + 2.8;

        // Brighter base alphas for vivid, sparkling starlight (0.75 to 1.0)
        const baseAlpha = Math.random() * 0.25 + 0.75;
        const depth = radius / 1.6;

        stars.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: 0,
          vy: 0,
          radius,
          baseAlpha,
          alpha: baseAlpha,
          twinkleSpeed: Math.random() * 0.038 + 0.016,
          twinklePhase: Math.random() * Math.PI * 2,
          depth,
          driftX: (Math.random() - 0.5) * 0.09,
          driftY: (Math.random() - 0.5) * 0.05,
          isSparkler,
          sparkleRadius,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.014,
          burstFlare: 0,
          hasDiagonals,
        });
      }
      starsRef.current = stars;
      pixieSparksRef.current = [];
      shootingStarsRef.current = [];
    };

    initStars();

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    // Track mouse / pointer & spawn medium Disney pixie dust trail
    const updatePointer = (clientX: number, clientY: number) => {
      if (!interactive || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      const currentX = clientX - rect.left;
      const currentY = clientY - rect.top;

      const now = performance.now();
      const dt = Math.max(now - (mouseRef.current.lastTime || now), 8);
      mouseRef.current.lastTime = now;

      // Track cursor velocity
      if (mouseRef.current.active) {
        mouseRef.current.vx = ((currentX - mouseRef.current.x) / dt) * 16;
        mouseRef.current.vy = ((currentY - mouseRef.current.y) / dt) * 16;
      }

      mouseRef.current.x = currentX;
      mouseRef.current.y = currentY;

      const isOver =
        currentX >= -50 && currentX <= width + 50 && currentY >= -50 && currentY <= height + 50;
      mouseRef.current.active = isOver;

      if (isOver) {
        // Parallax
        const normX = (currentX - width / 2) / (width / 2);
        const normY = (currentY - height / 2) / (height / 2);
        mouseRef.current.targetParallaxX = normX * 22;
        mouseRef.current.targetParallaxY = normY * 16;

        // Spawn medium Disney Pixie Dust sparkles along cursor movement
        const speed = Math.hypot(mouseRef.current.vx, mouseRef.current.vy);
        const spawnCount = speed > 3 ? 2 : 1;

        if (pixieSparksRef.current.length < 45 && Math.random() < 0.75) {
          for (let s = 0; s < spawnCount; s++) {
            const spread = Math.random() * 10;
            const angle = Math.random() * Math.PI * 2;
            const isDiamond = Math.random() < 0.65;

            pixieSparksRef.current.push({
              x: currentX + Math.cos(angle) * spread,
              y: currentY + Math.sin(angle) * spread,
              vx: (Math.random() - 0.5) * 1.6 - mouseRef.current.vx * 0.07,
              vy: (Math.random() - 0.5) * 1.6 - mouseRef.current.vy * 0.07 - 0.18,
              // Medium particle size (2.0px to 3.8px diamond sparkles)
              size: isDiamond ? Math.random() * 1.8 + 2.0 : Math.random() * 0.8 + 1.0,
              alpha: 1.0,
              maxAlpha: 1.0,
              rotation: Math.random() * Math.PI * 2,
              rotSpeed: (Math.random() - 0.5) * 0.09,
              life: 0,
              maxLife: Math.random() * 28 + 22, // ~0.45s to 0.8s duration
              isDiamond,
              twinklePhase: Math.random() * Math.PI * 2,
            });
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      updatePointer(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updatePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.targetParallaxX = 0;
      mouseRef.current.targetParallaxY = 0;
      mouseRef.current.vx = 0;
      mouseRef.current.vy = 0;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('mouseleave', handlePointerLeave);
      window.addEventListener('touchend', handlePointerLeave);
    }

    // Main animation loop
    let lastTime = performance.now();
    const HIT_RADIUS = 120;
    const HIT_RADIUS_SQ = HIT_RADIUS * HIT_RADIUS;

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 16.66, 2.0);
      lastTime = time;

      const mouse = mouseRef.current;

      // Parallax smooth lerp
      mouse.parallaxX += (mouse.targetParallaxX - mouse.parallaxX) * 0.06 * dt;
      mouse.parallaxY += (mouse.targetParallaxY - mouse.parallaxY) * 0.06 * dt;

      mouse.vx *= Math.pow(0.85, dt);
      mouse.vy *= Math.pow(0.85, dt);

      ctx.clearRect(0, 0, width, height);

      // --- 1. Periodic Disney Shooting Star / Comet Arc ---
      if (time > nextShootingStarTimeRef.current && shootingStarsRef.current.length < 2) {
        // Spawn an elegant diagonal shooting star from top-left quadrant
        const startX = Math.random() * width * 0.7;
        const startY = Math.random() * (height * 0.4);
        const speed = Math.random() * 8 + 12;
        const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.25; // ~45 deg downward arc

        shootingStarsRef.current.push({
          x: startX,
          y: startY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          length: Math.random() * 80 + 70,
          alpha: 1.0,
          life: 0,
          maxLife: Math.random() * 30 + 35,
        });

        nextShootingStarTimeRef.current = time + Math.random() * 5000 + 4500;
      }

      // Render shooting stars
      const shootingStars = shootingStarsRef.current;
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        star.life += dt;
        if (star.life >= star.maxLife) {
          shootingStars.splice(i, 1);
          continue;
        }

        star.x += star.vx * dt;
        star.y += star.vy * dt;

        const progress = star.life / star.maxLife;
        const currentAlpha = Math.sin(progress * Math.PI) * star.alpha;

        const tailX = star.x - (star.vx / Math.hypot(star.vx, star.vy)) * star.length;
        const tailY = star.y - (star.vy / Math.hypot(star.vx, star.vy)) * star.length;

        // Luminous gradient tail
        const grad = ctx.createLinearGradient(star.x, star.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${currentAlpha.toFixed(3)})`);
        grad.addColorStop(0.3, `rgba(255, 255, 255, ${(currentAlpha * 0.6).toFixed(3)})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Delicate head sparkle
        drawDiamondSparkle(ctx, star.x, star.y, 3.5, currentAlpha, 0, false);
      }

      // --- 2. Stars: Physics, Disney Sparkles & Cursor Hit ---
      const stars = starsRef.current;
      const total = stars.length;
      const activeMouse = mouse.active;
      const mouseX = mouse.x;
      const mouseY = mouse.y;
      const mouseVx = mouse.vx;
      const mouseVy = mouse.vy;

      for (let i = 0; i < total; i++) {
        const star = stars[i];

        // Twinkle & rotation
        star.twinklePhase += star.twinkleSpeed * dt;
        star.rotation += star.rotationSpeed * dt;

        // Pure white sparkling twinkle: wave reaches high peaks (up to 1.0)
        const twinkleSine = Math.sin(star.twinklePhase);
        star.alpha = Math.min(1.0, star.baseAlpha + twinkleSine * 0.28);

        // Drift
        star.baseX += star.driftX * dt;
        star.baseY += star.driftY * dt;

        // Wrap around
        if (star.baseX < -25) {
          star.baseX = width + 25;
          star.x = star.baseX;
        } else if (star.baseX > width + 25) {
          star.baseX = -25;
          star.x = star.baseX;
        }
        if (star.baseY < -25) {
          star.baseY = height + 25;
          star.y = star.baseY;
        } else if (star.baseY > height + 25) {
          star.baseY = -25;
          star.y = star.baseY;
        }

        // CURSOR HIT & REPEL DYNAMICS
        if (activeMouse) {
          const dx = star.x - mouseX;
          const dy = star.y - mouseY;
          const distSq = dx * dx + dy * dy;

          if (distSq < HIT_RADIUS_SQ && distSq > 0.01) {
            const dist = Math.sqrt(distSq);
            const normalX = dx / dist;
            const normalY = dy / dist;

            const proximity = (HIT_RADIUS - dist) / HIT_RADIUS;
            // Explosive dispersal force away from cursor
            const repelPower = Math.pow(proximity, 1.35) * 8.5;

            star.vx += normalX * repelPower * dt + mouseVx * proximity * 0.35 * dt;
            star.vy += normalY * repelPower * dt + mouseVy * proximity * 0.35 * dt;

            // When cursor hits the star, it bursts with a vibrant Disney flare!
            star.burstFlare = Math.min(1.0, star.burstFlare + proximity * 1.6);

            // Directly hit stars release medium pixie dust sparkles
            if (proximity > 0.65 && Math.random() < 0.3 && pixieSparksRef.current.length < 45) {
              pixieSparksRef.current.push({
                x: star.x,
                y: star.y,
                vx: normalX * 1.8 + (Math.random() - 0.5),
                vy: normalY * 1.8 + (Math.random() - 0.5),
                size: Math.random() * 1.5 + 1.8,
                alpha: 1.0,
                maxAlpha: 1.0,
                rotation: Math.random() * Math.PI,
                rotSpeed: (Math.random() - 0.5) * 0.1,
                life: 0,
                maxLife: 26,
                isDiamond: true,
                twinklePhase: 0,
              });
            }
          }
        }

        // Spring-back to original base position
        const springK = 0.045;
        const friction = Math.pow(0.88, dt);

        const targetX = star.baseX - mouse.parallaxX * star.depth;
        const targetY = star.baseY - mouse.parallaxY * star.depth;

        star.vx = (star.vx + (targetX - star.x) * springK * dt) * friction;
        star.vy = (star.vy + (targetY - star.y) * springK * dt) * friction;

        star.x += star.vx * dt;
        star.y += star.vy * dt;

        // Flare decay
        star.burstFlare *= Math.pow(0.91, dt);

        // --- DRAWING THE STAR ---
        // Natural flare-up during twinkle peak
        const naturalFlare = star.isSparkler
          ? Math.max(0, Math.sin(star.twinklePhase) * 1.15 - 0.15)
          : 0;

        const isTwinklePeak = star.isSparkler && naturalFlare > 0.25;
        const shouldDrawSparkle = isTwinklePeak || star.burstFlare > 0.18;
        const effectiveFlare = Math.min(1.0, star.burstFlare * 1.25 + naturalFlare);
        const finalAlpha = Math.min(1.0, star.alpha + star.burstFlare * 0.45);

        // Medium Disney Diamond Starburst with good sparkle
        if (shouldDrawSparkle) {
          const currentSparkleR =
            star.sparkleRadius * (1 + naturalFlare * 0.3 + star.burstFlare * 0.5);
          drawDiamondSparkle(
            ctx,
            star.x,
            star.y,
            currentSparkleR,
            finalAlpha * effectiveFlare,
            star.rotation,
            star.hasDiagonals || star.burstFlare > 0.4
          );
        }

        // Brilliant pure white round core
        const coreR = star.radius * (1 + star.burstFlare * 0.25);
        ctx.fillStyle = `rgba(255, 255, 255, ${finalAlpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, coreR, 0, Math.PI * 2);
        ctx.fill();

        // Soft radiant halo for bright stars
        if (finalAlpha > 0.75 || star.burstFlare > 0.15) {
          const haloR = coreR * (2.0 + star.burstFlare * 0.5);
          ctx.fillStyle = `rgba(255, 255, 255, ${(finalAlpha * (0.2 + star.burstFlare * 0.18)).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, haloR, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // --- 3. Render Disney Pixie Dust Particles (Cursor Trail) ---
      const sparks = pixieSparksRef.current;
      for (let s = sparks.length - 1; s >= 0; s--) {
        const sp = sparks[s];
        sp.life += dt;
        if (sp.life >= sp.maxLife) {
          sparks.splice(s, 1);
          continue;
        }

        sp.x += sp.vx * dt;
        sp.y += sp.vy * dt;
        sp.rotation += sp.rotSpeed * dt;
        sp.twinklePhase += 0.2 * dt;

        // Gentle cosmic air resistance + tiny gravity
        sp.vx *= 0.96;
        sp.vy = sp.vy * 0.96 + 0.03 * dt;

        const progress = sp.life / sp.maxLife;
        const fade = Math.sin((1 - progress) * Math.PI * 0.5);
        const twinkle = 0.8 + 0.2 * Math.sin(sp.twinklePhase);
        const currentAlpha = Math.min(1.0, sp.maxAlpha * fade * twinkle);

        if (sp.isDiamond) {
          // Render as rotating Disney diamond twinkle
          drawDiamondSparkle(
            ctx,
            sp.x,
            sp.y,
            sp.size * (1 - progress * 0.3),
            currentAlpha,
            sp.rotation,
            false
          );
        } else {
          // Render as bright glowing stardust dot
          const r = sp.size * (1 - progress * 0.4);
          ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(sp.x, sp.y, r, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = `rgba(255, 255, 255, ${(currentAlpha * 0.3).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(sp.x, sp.y, r * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('mouseleave', handlePointerLeave);
        window.removeEventListener('touchend', handlePointerLeave);
      }
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [density, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
};


