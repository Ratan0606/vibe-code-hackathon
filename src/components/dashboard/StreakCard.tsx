"use client";

import React from "react";
import { useChallenge } from "@/context/ChallengeContext";
import { Flame, Calendar, Award, Zap } from "lucide-react";

export const StreakCard: React.FC = () => {
  const { student } = useChallenge();
  const daysLeft = student.totalDays - student.completedDays;

  return (
    <div className="bg-white border border-stone-200/90 rounded-3xl p-5 shadow-sm relative overflow-hidden">
      {/* Decorative subtle gradient pill background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* Top Banner Row */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-stone-400">
            CHALLENGE PROGRESS
          </span>
          <h2 className="text-xl font-black text-stone-900 tracking-tight flex items-center gap-1.5">
            Day {student.currentDay} <span className="text-stone-400 font-normal text-sm">of 60</span>
          </h2>
        </div>

        {/* Flame Badge */}
        <div className="bg-amber-50 border border-amber-200/80 rounded-2xl px-3.5 py-2 flex items-center gap-2 shadow-2xs">
          <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600">
            <Flame className="w-5 h-5 fill-amber-500 text-amber-600" />
          </div>
          <div>
            <div className="text-sm font-black text-amber-900 leading-none">
              {student.streak} Days
            </div>
            <div className="text-[10px] text-amber-700 font-semibold mt-0.5">
              Active Streak
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1.5 mb-4">
        <div className="flex justify-between text-xs font-bold text-stone-700">
          <span>Overall Progress</span>
          <span className="text-indigo-600 font-black">{student.completionPercentage}%</span>
        </div>
        <div className="w-full bg-stone-100 h-3 rounded-full overflow-hidden p-0.5 border border-stone-200/60">
          <div
            className="bg-indigo-600 h-full rounded-full transition-all duration-500 shadow-xs"
            style={{ width: `${Math.max(4, student.completionPercentage)}%` }}
          />
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-stone-100">
        <div className="bg-stone-50/80 rounded-xl p-2 border border-stone-100">
          <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Completed</div>
          <div className="text-sm font-black text-stone-900 mt-0.5">{student.completedDays} / 60</div>
        </div>
        <div className="bg-stone-50/80 rounded-xl p-2 border border-stone-100">
          <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Days Left</div>
          <div className="text-sm font-black text-stone-900 mt-0.5">{daysLeft} Days</div>
        </div>
        <div className="bg-stone-50/80 rounded-xl p-2 border border-stone-100">
          <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Best Streak</div>
          <div className="text-sm font-black text-amber-600 mt-0.5">{student.longestStreak} Days</div>
        </div>
      </div>
    </div>
  );
};
