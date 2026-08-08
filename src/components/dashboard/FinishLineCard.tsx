"use client";

import React, { useState } from "react";
import { Clock, CheckCircle2, Circle, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

interface TaskStep {
  id: string;
  title: string;
  time: string;
}

export const FinishLineCard: React.FC = () => {
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({
    s1: true,
    s2: false,
    s3: false,
    s4: false,
  });

  const steps: TaskStep[] = [
    { id: "s1", title: "Build the mobile habit card layout", time: "25 min" },
    { id: "s2", title: "Add habit creation logic", time: "20 min" },
    { id: "s3", title: "Commit your code to GitHub", time: "15 min" },
    { id: "s4", title: "Share your progress on LinkedIn", time: "15 min" },
  ];

  const toggleStep = (id: string) => {
    setCompletedSteps((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / steps.length) * 100);

  return (
    <div className="bg-stone-900 text-stone-100 rounded-3xl p-5 shadow-xl border border-stone-800 relative overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="bg-indigo-500/20 text-indigo-300 p-1.5 rounded-lg border border-indigo-500/30">
            <Sparkles className="w-4 h-4 text-indigo-400" />
          </span>
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-indigo-400">
              Thoughtful UX Feature
            </h3>
            <h4 className="text-base font-extrabold text-white tracking-tight">
              TONIGHT’S FINISH LINE
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-stone-800/90 text-stone-300 text-xs font-semibold px-2.5 py-1 rounded-full border border-stone-700">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span>~75 min</span>
        </div>
      </div>

      <p className="text-xs text-stone-400 mb-4 leading-relaxed font-normal">
        No need to feel overwhelmed. Complete these 4 bite-sized milestones to finish Day 12 tonight.
      </p>

      {/* Micro Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-[11px] font-semibold text-stone-400 mb-1.5">
          <span>{completedCount} of 4 milestones completed</span>
          <span className="text-indigo-400">{progressPercent}%</span>
        </div>
        <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Steps Checklist */}
      <div className="space-y-2 mb-4">
        {steps.map((step) => {
          const isDone = !!completedSteps[step.id];
          return (
            <button
              key={step.id}
              onClick={() => toggleStep(step.id)}
              className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs font-medium ${
                isDone
                  ? "bg-emerald-950/40 border-emerald-800/60 text-emerald-200"
                  : "bg-stone-800/60 hover:bg-stone-800 border-stone-700/80 text-stone-200"
              }`}
            >
              <div className="flex items-center gap-2.5">
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : (
                  <Circle className="w-4 h-4 text-stone-500 shrink-0" />
                )}
                <span className={isDone ? "line-through text-stone-400 font-normal" : "font-semibold"}>
                  {step.title}
                </span>
              </div>
              <span className="text-[10px] text-stone-400 font-mono bg-stone-900/60 px-2 py-0.5 rounded-md border border-stone-800">
                {step.time}
              </span>
            </button>
          );
        })}
      </div>

      {/* Action Footer */}
      <Link
        href="/day/12"
        className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md"
      >
        <span>Open Day 12 Workspace</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};
