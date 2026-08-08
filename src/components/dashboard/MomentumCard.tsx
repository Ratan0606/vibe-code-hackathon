"use client";

import React from "react";
import { useChallenge } from "@/context/ChallengeContext";
import { TrendingUp, ShieldCheck, Zap } from "lucide-react";

export const MomentumCard: React.FC = () => {
  const { student } = useChallenge();

  let level = "Building Foundation";
  let statusColor = "text-indigo-600 bg-indigo-50 border-indigo-200";

  if (student.streak >= 10) {
    level = "Strong Momentum 🔥";
    statusColor = "text-emerald-700 bg-emerald-50 border-emerald-200";
  } else if (student.streak >= 5) {
    level = "Steady Progress ⚡";
    statusColor = "text-amber-700 bg-amber-50 border-amber-200";
  }

  return (
    <div className="bg-white border border-stone-200/90 rounded-3xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-stone-400">
            STUDENT STANDING
          </span>
          <h3 className="text-base font-extrabold text-stone-900 tracking-tight flex items-center gap-1.5">
            Your Momentum
          </h3>
        </div>
        <TrendingUp className="w-5 h-5 text-indigo-600" />
      </div>

      <div className="bg-stone-50 border border-stone-200/60 rounded-2xl p-3.5 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-stone-600">Streak Standing</span>
          <span className="text-xs font-black text-stone-900">{student.streak}-day streak</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-stone-600">Consistency Rating</span>
          <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${statusColor}`}>
            {level}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-stone-600">Public Proof Portfolio</span>
          <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> 11 Verified Builds
          </span>
        </div>
      </div>

      <p className="text-[11px] text-stone-500 font-normal mt-3 leading-relaxed">
        Consistency is the strongest signal tech recruiters look for. Every verified day proves you show up even when motivation fades.
      </p>
    </div>
  );
};
