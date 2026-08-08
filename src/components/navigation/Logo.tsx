import React from "react";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTag?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = "md", showTag = false }) => {
  const sizeClasses = {
    sm: "text-lg font-bold tracking-tight",
    md: "text-xl font-extrabold tracking-tight",
    lg: "text-2xl font-black tracking-tight",
  };

  return (
    <Link href="/" className="inline-flex items-center gap-3 group focus:outline-none rounded-lg p-0.5">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-lg btn-accent flex items-center justify-center shadow-md transform group-hover:scale-105 transition-transform duration-200">
          {/* Unique abstract mark: two diagonal bars forming an A-like emblem */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="6" width="4" height="12" rx="1" fill="rgba(255,255,255,0.9)" transform="rotate(-18 4 6)" />
            <rect x="12" y="6" width="4" height="12" rx="1" fill="rgba(255,255,255,0.9)" transform="rotate(18 12 6)" />
            <circle cx="12" cy="16.5" r="1.2" fill="rgba(255,255,255,0.92)" />
          </svg>
        </div>
        <div className="ml-0">
          <span className={`text-stone-900 font-extrabold ${sizeClasses[size]}`}>AB</span>
          <span className="ml-1 text-indigo-600 uppercase tracking-wider font-semibold text-xs">Talks</span>
        </div>
      </div>
      {showTag && (
        <span className="bg-indigo-50 text-indigo-700 text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full border border-indigo-100/80 ml-2">
          60 Days Code
        </span>
      )}
    </Link>
  );
};
