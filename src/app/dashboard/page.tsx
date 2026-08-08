"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/navigation/Header";
import { BottomNav } from "@/components/navigation/BottomNav";
import { StateSwitcher } from "@/components/ui/StateSwitcher";
import { useChallenge } from "@/context/ChallengeContext";
import { StreakCard } from "@/components/dashboard/StreakCard";
import { FinishLineCard } from "@/components/dashboard/FinishLineCard";
import { DayTimeline } from "@/components/dashboard/DayTimeline";
import { AchievementsGrid } from "@/components/dashboard/AchievementsGrid";
import { MomentumCard } from "@/components/dashboard/MomentumCard";
import { MissedDayBanner } from "@/components/dashboard/MissedDayBanner";
import { ProfilePromptCard } from "@/components/dashboard/ProfilePromptCard";
import {
  Target,
  ArrowRight,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Code2,
} from "lucide-react";

export default function DashboardPage() {
  const { student, day12, mode, isDay12Completed } = useChallenge();

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col pb-24">
      {/* Evaluator Preset Toolbar */}
      <StateSwitcher />

      {/* Header */}
      <Header />

      {/* Main Dashboard Container - 390px Mobile Viewport Optimized */}
      <main className="flex-1 max-w-md w-full mx-auto px-4 pt-4 space-y-4">
        {/* STUDENT GREETING HEADER */}
        <section className="bg-white border border-stone-200/90 rounded-3xl p-4 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-xs text-stone-500 font-semibold uppercase tracking-wider">
              Student Dashboard
            </p>
            <h1 className="text-xl font-black text-stone-950 tracking-tight">
              Good evening, {student.firstName}
            </h1>
            <p className="text-xs font-bold text-indigo-600 mt-0.5">
              Day {student.currentDay} of {student.totalDays} Challenge
            </p>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold text-stone-400 uppercase">Track</span>
            <span className="text-xs font-extrabold text-stone-900 bg-stone-100 px-2.5 py-1 rounded-xl border border-stone-200">
              {student.track || "Full Stack"}
            </span>
          </div>
        </section>

        {/* EDGE CASE: MISSED DAY BANNER (Shown if mode === 'missedDay') */}
        {mode === "missedDay" && <MissedDayBanner />}

        {/* EDGE CASE: EMPTY PROFILE PROMPT (Shown if mode === 'emptyProfile' or college missing) */}
        {(mode === "emptyProfile" || !student.college) && <ProfilePromptCard />}

        {/* HERO PROGRESS AREA */}
        <StreakCard />

        {/* TODAY'S TASK — MOST IMPORTANT CARD */}
        <section className="bg-gradient-to-br from-indigo-900 via-indigo-950 to-stone-900 text-white rounded-3xl p-5 shadow-xl border border-indigo-800 relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5 bg-indigo-500/30 text-indigo-200 border border-indigo-400/30 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
              <Target className="w-3.5 h-3.5 text-indigo-400" />
              <span>TODAY — DAY {day12.day}</span>
            </div>

            {isDay12Completed ? (
              <span className="bg-emerald-500/20 text-emerald-300 text-[11px] font-bold px-2.5 py-1 rounded-full border border-emerald-400/40 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Submitted
              </span>
            ) : (
              <span className="bg-amber-500/20 text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-full border border-amber-400/40">
                Not submitted
              </span>
            )}
          </div>

          <h2 className="text-xl font-black text-white tracking-tight mb-2">
            {day12.title}
          </h2>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-indigo-200/90 mb-4">
            <span className="bg-indigo-900/80 px-2.5 py-1 rounded-lg border border-indigo-700/60 flex items-center gap-1">
              <Code2 className="w-3.5 h-3.5 text-indigo-400" /> {day12.category}
            </span>
            <span className="bg-indigo-900/80 px-2.5 py-1 rounded-lg border border-indigo-700/60 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> {day12.estimatedTime}
            </span>
            <span className="bg-indigo-900/80 px-2.5 py-1 rounded-lg border border-indigo-700/60">
              {day12.difficulty}
            </span>
          </div>

          <p className="text-xs text-indigo-100/80 leading-relaxed font-normal mb-4">
            {day12.description}
          </p>

          <Link
            href="/day/12"
            className="w-full py-3.5 bg-indigo-500 hover:bg-indigo-400 active:scale-[0.98] text-white text-xs font-extrabold rounded-2xl shadow-md transition-all flex items-center justify-center gap-1.5"
          >
            <span>Continue Day 12 →</span>
          </Link>
        </section>

        {/* THOUGHTFUL UX FEATURE — TONIGHT'S FINISH LINE */}
        <FinishLineCard />

        {/* CHALLENGE TIMELINE GRID */}
        <DayTimeline />

        {/* ACHIEVEMENTS SECTION */}
        <AchievementsGrid />

        {/* STUDENT STANDING & MOMENTUM */}
        <MomentumCard />
      </main>

      {/* Bottom Nav */}
      <BottomNav />
    </div>
  );
}
