"use client";

import { useId } from "react";

type MiniRobotProps = {
  variant?: "ai" | "ads" | "social" | "default";
  className?: string;
  label?: string;
};

export function MiniRobot({
  variant = "default",
  className = "",
  label,
}: MiniRobotProps) {
  const uid = useId().replace(/:/g, "");

  const eyeColor =
    variant === "ads" ? "#f59e0b" : variant === "social" ? "#ec4899" : "#38bdf8";

  return (
    <figure
      className={`robot-float inline-flex flex-col items-center ${className}`}
      aria-hidden={!label}
    >
      {label && (
        <figcaption className="mb-2 rounded-full bg-navy/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-navy/70">
          {label}
        </figcaption>
      )}
      <svg
        viewBox="0 0 100 120"
        className="h-auto w-[88px] drop-shadow-md sm:w-[100px]"
        role={label ? "img" : undefined}
        aria-label={label}
      >
        <defs>
          <linearGradient id={`body-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8f0ff" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
          <linearGradient id={`face-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e4a7a" />
            <stop offset="100%" stopColor="#0b1d3a" />
          </linearGradient>
        </defs>

        <line x1="50" y1="8" x2="50" y2="18" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
        <circle cx="50" cy="6" r="4" fill={eyeColor} className="robot-pulse" />

        <rect x="28" y="18" width="44" height="38" rx="14" fill={`url(#body-${uid})`} stroke="#0b1d3a" strokeWidth="2" />
        <rect x="34" y="26" width="32" height="22" rx="8" fill={`url(#face-${uid})`} />

        <circle cx="42" cy="36" r="4" fill={eyeColor} />
        <circle cx="58" cy="36" r="4" fill={eyeColor} />
        <circle cx="43" cy="35" r="1.2" fill="white" />
        <circle cx="59" cy="35" r="1.2" fill="white" />

        <path d="M40 44 Q50 48 60 44" stroke={eyeColor} strokeWidth="1.5" fill="none" strokeLinecap="round" />

        <rect x="32" y="58" width="36" height="32" rx="12" fill={`url(#body-${uid})`} stroke="#0b1d3a" strokeWidth="2" />

        {variant === "ads" && <AdsAccessory />}
        {variant === "social" && <SocialAccessory uid={uid} />}
        {variant === "ai" && <AiAccessory />}
        {variant === "default" && <DefaultArms />}

        <rect x="36" y="88" width="12" height="16" rx="6" fill={`url(#body-${uid})`} stroke="#0b1d3a" strokeWidth="1.5" />
        <rect x="52" y="88" width="12" height="16" rx="6" fill={`url(#body-${uid})`} stroke="#0b1d3a" strokeWidth="1.5" />
      </svg>
    </figure>
  );
}

function DefaultArms() {
  return (
    <>
      <ellipse cx="24" cy="72" rx="6" ry="8" fill="#b8cce8" stroke="#0b1d3a" strokeWidth="1.5" />
      <ellipse cx="76" cy="72" rx="6" ry="8" fill="#b8cce8" stroke="#0b1d3a" strokeWidth="1.5" />
    </>
  );
}

function AiAccessory() {
  return (
    <>
      <ellipse cx="22" cy="70" rx="5" ry="7" fill="#b8cce8" stroke="#0b1d3a" strokeWidth="1.5" />
      <rect x="62" y="62" width="28" height="36" rx="6" fill="#0b1d3a" stroke="#25D366" strokeWidth="1.5" />
      <rect x="66" y="66" width="20" height="28" rx="4" fill="#111" />
      <circle cx="76" cy="74" r="5" fill="#25D366" />
      <text x="76" y="76" fill="white" fontSize="5" textAnchor="middle" fontWeight="bold">
        IA
      </text>
    </>
  );
}

function AdsAccessory() {
  return (
    <>
      <ellipse cx="22" cy="70" rx="5" ry="7" fill="#b8cce8" stroke="#0b1d3a" strokeWidth="1.5" />
      <rect x="58" y="58" width="34" height="28" rx="5" fill="white" stroke="#0b1d3a" strokeWidth="1.5" />
      <text x="64" y="70" fill="#4285F4" fontSize="6" fontWeight="bold" fontFamily="system-ui">
        Ads
      </text>
      <rect x="64" y="74" width="22" height="3" rx="1" fill="#e2e8f0" />
      <rect x="64" y="74" width="16" height="3" rx="1" fill="#f59e0b" />
      <path d="M64 80 L70 76 L76 79 L82 73" stroke="#22c55e" strokeWidth="1.5" fill="none" />
    </>
  );
}

function SocialAccessory({ uid }: { uid: string }) {
  return (
    <>
      <ellipse cx="22" cy="70" rx="5" ry="7" fill="#b8cce8" stroke="#0b1d3a" strokeWidth="1.5" />
      <rect x="58" y="58" width="34" height="34" rx="8" fill="white" stroke="#0b1d3a" strokeWidth="1.5" />
      <defs>
        <linearGradient id={`ig-${uid}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect x="62" y="62" width="26" height="26" rx="6" fill={`url(#ig-${uid})`} opacity="0.9" />
      <circle cx="75" cy="75" r="6" fill="none" stroke="white" strokeWidth="1.5" />
      <circle cx="79" cy="71" r="1" fill="white" />
    </>
  );
}
