"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CoinIcon, DownloadIcon } from "@/components/ui/icons";

const coinPositions = [
  { top: "12%", left: "72%", size: 44, delay: 0 },
  { top: "62%", left: "84%", size: 32, delay: 0.6 },
  { top: "78%", left: "62%", size: 26, delay: 1.1 },
  { top: "22%", left: "90%", size: 22, delay: 1.6 },
  { top: "42%", left: "68%", size: 18, delay: 0.3 },
];

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const coinsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let removeMouseListener = () => {};
    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    import("gsap").then(({ default: gsap }) => {
      if (cancelled) return;

      ctx = gsap.context(() => {
        // Only animate transform (never opacity) on content that's already
        // visible in the static HTML — animating opacity here would mean a
        // visible flash (rendered -> yanked to invisible -> replayed) once
        // this dynamically-imported script finally executes on slower
        // connections. Purely decorative bits (floating coins) can still
        // use opacity since they're not core content and hidden on mobile.
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from("[data-hero-badge]", { y: 16, duration: 0.6 })
          .from("[data-hero-line]", { y: 40, duration: 0.8, stagger: 0.12 }, "-=0.3")
          .from("[data-hero-desc]", { y: 16, duration: 0.6 }, "-=0.4")
          .from("[data-hero-cta]", { y: 16, duration: 0.6, stagger: 0.1 }, "-=0.4")
          .from("[data-hero-frame]", { scale: 0.96, duration: 0.9, ease: "power3.out" }, "-=0.9")
          .from(
            "[data-hero-coin]",
            { scale: 0, opacity: 0, duration: 0.6, stagger: 0.08, ease: "back.out(1.7)" },
            "-=0.6"
          );

        const handleMove = (e: MouseEvent) => {
          if (!rootRef.current) return;
          const { innerWidth, innerHeight } = window;
          const x = (e.clientX / innerWidth - 0.5) * 2;
          const y = (e.clientY / innerHeight - 0.5) * 2;
          gsap.to("[data-hero-coin]", {
            x: (i) => x * (10 + i * 4),
            y: (i) => y * (10 + i * 4),
            duration: 1.2,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to("[data-hero-ray]", {
            x: x * 20,
            y: y * 10,
            duration: 1.5,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to("[data-hero-frame]", {
            rotateY: x * 6,
            rotateX: y * -6,
            duration: 1.2,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        window.addEventListener("mousemove", handleMove);
        removeMouseListener = () => window.removeEventListener("mousemove", handleMove);
      }, rootRef);
    });

    return () => {
      cancelled = true;
      removeMouseListener();
      ctx?.revert();
    };
  }, []);

  return (
    <section ref={rootRef} className="relative flex min-h-[100svh] items-center overflow-hidden bg-base pt-32">
      {/* Background layer — placeholder cover banner. Swap for a real photo via <Image> when available. */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(107,16,25,0.55),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(247,71,71,0.18),transparent_45%),linear-gradient(180deg,#0B0B0F_0%,#121212_60%,#0B0B0F_100%)]" />
      <div
        data-hero-ray
        className="pointer-events-none absolute -right-1/4 -top-1/3 -z-10 h-[140%] w-[140%] rotate-12 opacity-40"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, transparent 0deg, rgba(244,201,107,0.12) 25deg, transparent 60deg, transparent 300deg, rgba(244,201,107,0.08) 340deg, transparent 360deg)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-radial-fade" />

      {/* Subtle particles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 animate-pulse-glow rounded-full bg-gold-light/40"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              animationDelay: `${(i % 6) * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Floating coins */}
      <div ref={coinsRef} className="pointer-events-none absolute inset-0 -z-10 hidden sm:block">
        {coinPositions.map((coin, i) => (
          <div
            key={i}
            data-hero-coin
            className="absolute animate-float"
            style={{
              top: coin.top,
              left: coin.left,
              animationDelay: `${coin.delay}s`,
            }}
          >
            <CoinIcon style={{ width: coin.size, height: coin.size }} className="drop-shadow-[0_0_18px_rgba(244,201,107,0.35)]" />
          </div>
        ))}
      </div>

      <div className="section-container relative grid items-center gap-10 pb-16 pt-4 sm:gap-14 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="max-w-2xl">
          <span
            data-hero-badge
            className="inline-flex max-w-full items-center gap-2 rounded-2xl border border-gold/25 bg-gold/5 px-3 py-1.5 text-[10px] font-semibold uppercase leading-snug tracking-wide text-gold-light sm:rounded-full sm:px-4 sm:text-xs sm:tracking-[0.2em]"
          >
            Dgclub Login — India&apos;s Trusted Gaming Club
          </span>

          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.08] text-cream sm:text-6xl lg:text-7xl">
            <span data-hero-line className="block">
              Play.
            </span>
            <span data-hero-line className="block">
              Win.
            </span>
            <span data-hero-line className="block gradient-text">
              Withdraw Instantly.
            </span>
          </h1>

          <p data-hero-desc className="mt-6 max-w-lg text-base leading-relaxed text-cream/60 sm:text-lg">
            Step into a premium gaming club built for speed, security and reward — lottery, Win Go, slots,
            sports, fishing and live casino, all in one elevated experience.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <span data-hero-cta className="sm:inline-block">
              <Button href="/register/" size="lg" className="w-full sm:w-auto">
                Register Now
              </Button>
            </span>
            <span data-hero-cta className="sm:inline-block">
              <Button href="/download-app/" variant="secondary" size="lg" className="w-full sm:w-auto">
                <DownloadIcon className="h-4 w-4" />
                Download App
              </Button>
            </span>
          </div>
        </div>

        {/* Hero visual — no frame/border, sized to the image's real aspect ratio so nothing gets cropped */}
        <div data-hero-frame className="relative mx-auto w-full max-w-lg [perspective:1200px] lg:max-w-none">
          <div className="relative aspect-[1000/548] w-full">
            <Image
              src="/hero-banner.webp"
              alt="Dg Club — India's premium gaming platform"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
