"use client";

import React from "react";
import { useChallenge } from "@/context/ChallengeContext";
import { Check, ArrowRight, Lock, AlertCircle } from "lucide-react";
import Link from "next/link";

export const DayTimeline: React.FC = () => {
  const { timelineDays, student } = useChallenge();

  // Display first 21 days (3 weeks) in a tight mobile-first matrix grid
  const daysToShow = timelineDays.slice(0, 21);

  return (
    <div className="bg-white border border-stone-200/90 rounded-3xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-stone-400">
            CHALLENGE TIMELINE
          </span>
          <h3 className="text-base font-extrabold text-stone-900 tracking-tight">
            60-Day Progress Grid
          </h3>
        </div>
        <span className="text-xs text-indigo-600 font-bold bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
          Day {student.currentDay} Active
        </span>
      </div>

      <p className="text-xs text-stone-500 mb-4 leading-relaxed font-normal">
        Your goal isn’t perfection. It’s showing up every single day.
      </p>

      {/* Week Labels Header */}
      <div className="grid grid-cols-3 text-center text-[10px] font-extrabold uppercase tracking-wider text-stone-400 mb-2">
        <span>Week 1</span>
        <span>Week 2</span>
        <span>Week 3</span>
      </div>

      {/* 21 Days Visual Grid */}
      <div className="grid grid-cols-7 gap-1.5 mb-4">
        {daysToShow.map((item) => {
          const isCompleted = item.status === "completed";
          const isCurrent = item.status === "current";
          const isMissed = item.status === "missed";
          const isUpcoming = item.status === "upcoming";

          let content = <span className="text-[11px] font-bold">{item.day}</span>;
          if (isCompleted) {
            content = <Check className="w-3.5 h-3.5 stroke-[3]" />;
          } else if (isCurrent) {
            content = <ArrowRight className="w-3.5 h-3.5 stroke-[3] animate-pulse" />;
          } else if (isMissed) {
            content = <span className="text-[10px] font-bold">!</span>;
          }

          const dayNode = (
            <div
              className={`h-9 rounded-xl flex items-center justify-center transition-all ${
                isCompleted
                  ? "bg-emerald-600 text-white font-bold shadow-xs"
                  : isCurrent
                  ? "bg-indigo-600 text-white ring-2 ring-indigo-400 ring-offset-1 font-black shadow-md"
                  : isMissed
                  ? "bg-amber-100 text-amber-800 border border-amber-300 font-bold"
                  : "bg-stone-50 text-stone-400 border border-stone-200/60 font-medium"
              }`}
              title={`Day ${item.day}: ${item.status}`}
            >
              {content}
            </div>
          );

          if (isCurrent || isCompleted) {
            return (
              <Link key={item.day} href={item.day === 12 ? "/day/12" : "#"}>
                {dayNode}
              </Link>
            );
          }

          return <div key={item.day}>{dayNode}</div>;
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-around text-[10px] font-medium text-stone-500 pt-3 border-t border-stone-100">
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
          <span>Completed</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
          <span>Current</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-200 border border-amber-400" />
          <span>Missed</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-stone-100 border border-stone-300" />
          <span>Upcoming</span>
        </div>
      </div>
    </div>
  );
};
