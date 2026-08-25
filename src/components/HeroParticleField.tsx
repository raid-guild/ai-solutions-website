"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
  pulseSpeed: number;
  isHub: boolean;
  hue: "primary" | "accent" | "soft";
};

const colors = {
  accent: [136, 229, 234],
  primary: [238, 57, 126],
  soft: [236, 229, 205],
};

const getParticleCount = (width: number) => {
  if (width < 640) return 38;
  if (width < 1024) return 58;
  return 86;
};

const createParticle = (
  width: number,
  height: number,
  isHub = false,
): Particle => {
  const hueRoll = Math.random();

  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * (isHub ? 0.18 : 0.42),
    vy: (Math.random() - 0.5) * (isHub ? 0.14 : 0.32),
    radius: isHub ? 5.5 + Math.random() * 6 : 1.25 + Math.random() * 2.25,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: isHub
      ? 0.006 + Math.random() * 0.008
      : 0.012 + Math.random() * 0.018,
    isHub,
    hue: isHub
      ? hueRoll > 0.75
        ? "primary"
        : "accent"
      : hueRoll > 0.88
        ? "primary"
        : hueRoll > 0.5
          ? "accent"
          : "soft",
  };
};

const HeroParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    const pointer = { active: false, x: 0, y: 0 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const hubCount = width < 640 ? 3 : 6;
      particles = [
        ...Array.from({ length: getParticleCount(width) }, () =>
          createParticle(width, height),
        ),
        ...Array.from({ length: hubCount }, () =>
          createParticle(width, height, true),
        ),
      ];
    };

    const drawBackground = () => {
      const glow = context.createRadialGradient(
        width * 0.7,
        height * 0.46,
        0,
        width * 0.7,
        height * 0.46,
        Math.max(width, height) * 0.62,
      );

      glow.addColorStop(0, "rgba(136, 229, 234, 0.12)");
      glow.addColorStop(0.3, "rgba(238, 57, 126, 0.06)");
      glow.addColorStop(1, "rgba(3, 16, 22, 0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      drawBackground();

      for (const particle of particles) {
        if (!motionQuery.matches) {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.pulse += particle.pulseSpeed;

          if (pointer.active) {
            const dx = pointer.x - particle.x;
            const dy = pointer.y - particle.y;
            const distance = Math.hypot(dx, dy);
            if (distance < 220 && distance > 0) {
              const pull = (1 - distance / 220) * 0.016;
              particle.x += dx * pull;
              particle.y += dy * pull;
            }
          }
        }

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;
      }

      const maxDistance = width < 640 ? 125 : 170;

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);

          if (distance < maxDistance) {
            const opacity =
              (1 - distance / maxDistance) * (a.isHub || b.isHub ? 0.38 : 0.24);
            context.strokeStyle = `rgba(136, 229, 234, ${opacity})`;
            context.lineWidth = a.isHub || b.isHub ? 1.35 : 1;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      for (const particle of particles) {
        const [red, green, blue] = colors[particle.hue];
        const pulse = 0.75 + Math.sin(particle.pulse) * 0.25;
        const alpha =
          particle.hue === "primary"
            ? 0.4 + pulse * (particle.isHub ? 0.42 : 0.28)
            : 0.34 + pulse * (particle.isHub ? 0.44 : 0.3);

        context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
        context.beginPath();
        context.arc(
          particle.x,
          particle.y,
          particle.radius * (0.78 + pulse * (particle.isHub ? 0.52 : 0.3)),
          0,
          Math.PI * 2,
        );
        context.fill();

        if (particle.isHub) {
          for (let ring = 0; ring < 3; ring += 1) {
            const phase = (particle.pulse / (Math.PI * 2) + ring / 3) % 1;
            const ringRadius = particle.radius * (3.5 + phase * 11);
            const ringAlpha = (1 - phase) * 0.2;

            context.strokeStyle = `rgba(${red}, ${green}, ${blue}, ${ringAlpha})`;
            context.lineWidth = 1.2;
            context.beginPath();
            context.arc(particle.x, particle.y, ringRadius, 0, Math.PI * 2);
            context.stroke();
          }
        }

        if (particle.hue !== "soft") {
          const glow = context.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.radius * (particle.isHub ? 15 : 10),
          );
          glow.addColorStop(
            0,
            `rgba(${red}, ${green}, ${blue}, ${alpha * (particle.isHub ? 0.32 : 0.2)})`,
          );
          glow.addColorStop(1, `rgba(${red}, ${green}, ${blue}, 0)`);
          context.fillStyle = glow;
          context.beginPath();
          context.arc(
            particle.x,
            particle.y,
            particle.radius * (particle.isHub ? 15 : 10),
            0,
            Math.PI * 2,
          );
          context.fill();
        }
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.active = true;
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-95"
      aria-hidden="true"
    />
  );
};

export default HeroParticleField;
