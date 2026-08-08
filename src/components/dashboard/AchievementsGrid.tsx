"use client";

import React from "react";
import { useChallenge } from "@/context/ChallengeContext";
import { Lock, Award } from "lucide-react";

export const AchievementsGrid: React.FC = () => {
  const { achievements } = useChallenge();

  return (
    <div className="bg-white border border-stone-200/90 rounded-3xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-stone-400">
            MILESTONES & BADGES
          </span>
          <h3 className="text-base font-extrabold text-stone-900 tracking-tight flex items-center gap-1.5">
            Achievements
          </h3>
        </div>
        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/80">
          4 Unlocked
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {achievements.map((badge) => {
          return (
            <div
              key={badge.id}
              className={`p-3 rounded-2xl border transition-all ${
                badge.unlocked
                  ? "bg-stone-50/80 border-stone-200/80 text-stone-900 shadow-2xs"
                  : "bg-stone-50/30 border-stone-200/40 text-stone-400 opacity-60"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-2xl">{badge.icon}</span>
                {badge.unlocked ? (
                  <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-md uppercase">
                    {badge.unlockedDate || "Earned"}
                  </span>
                ) : (
                  <Lock className="w-3.5 h-3.5 text-stone-400" />
                )}
              </div>
              <h4 className="text-xs font-extrabold tracking-tight">{badge.title}</h4>
              <p className="text-[10px] text-stone-500 font-medium leading-tight mt-0.5">
                {badge.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
