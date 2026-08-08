"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { Header } from "@/components/navigation/Header";
import { BottomNav } from "@/components/navigation/BottomNav";
import { StateSwitcher } from "@/components/ui/StateSwitcher";
import { useChallenge, ChallengeContext } from "@/context/ChallengeContext";
import { day12Data, defaultStudent } from "@/data/mockData";
import { DoneLooksLikeCard } from "@/components/challenge/DoneLooksLikeCard";
import { ProofSubmission } from "@/components/challenge/ProofSubmission";
import {
  ArrowLeft,
  Clock,
  Code2,
  CheckSquare,
  Sparkles,
  Target,
  PlusCircle,
  HelpCircle,
} from "lucide-react";

export default function DayChallengePage({ params }: { params: { day: string } }) {
  const dayNumber = params?.day || "12";
  // Try to read context; if not provided, fall back to static mock data so this page
  // can render independently of the ChallengeProvider (another agent).
  const ctx = (useContext(ChallengeContext as any) ?? {}) as any;
  const day12 = ctx?.day12 || day12Data;
  const student = ctx?.student || defaultStudent;

  const mustHaveRequirements = [
    "Responsive mobile layout (optimized for 390px viewport)",
    "Create a new habit item with title & frequency",
    "Mark habit complete with interactive checkbox state",
    "Remove/delete a habit item",
    "Simple weekly completion progress indicator",
  ];

  const bonusRequirements = [
    "Persist habit data using localStorage",
    "Add dark mode / light mode toggle",
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col pb-24">
      {/* Evaluator Preset Bar */}
      <StateSwitcher />

      {/* Header */}
      <Header />

      {/* Main Container - 390px Mobile Viewport Primary */}
      <main className="flex-1 max-w-md w-full mx-auto px-4 pt-3 space-y-5">
        {/* Back Link Row */}
        <div className="flex items-center justify-between">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1 text-xs font-bold text-stone-600 hover:text-stone-950 py-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Dashboard</span>
          </Link>

          <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
            {student.completedDays} days completed
          </span>
        </div>

        {/* DAY HEADER CARD */}
        <section className="bg-white border border-stone-200/90 rounded-3xl p-5 shadow-sm space-y-3">
          <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-indigo-600">
            <Target className="w-4 h-4 text-indigo-600" />
            <span>DAY {dayNumber} OF 60</span>
          </div>

          <h1 className="text-2xl font-black text-stone-950 tracking-tight leading-snug">
            {day12.title}
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-stone-600">
            <span className="bg-stone-100 px-2.5 py-1 rounded-lg border border-stone-200 flex items-center gap-1">
              <Code2 className="w-3.5 h-3.5 text-indigo-600" /> {day12.category}
            </span>
            <span className="bg-amber-50 text-amber-800 px-2.5 py-1 rounded-lg border border-amber-200 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-600" /> {day12.estimatedTime}
            </span>
            <span className="bg-stone-100 px-2.5 py-1 rounded-lg border border-stone-200">
              {day12.difficulty}
            </span>
          </div>
        </section>

        {/* TASK DESCRIPTION */}
        <section className="bg-white border border-stone-200/90 rounded-3xl p-5 shadow-sm space-y-2">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-stone-400">
            Today’s Challenge
          </h2>
          <p className="text-xs text-stone-700 leading-relaxed font-medium">
            Build a mobile-first habit tracker that lets users create habits, mark them complete, and see their weekly progress.
          </p>
          <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-3 text-xs text-indigo-900 font-normal leading-relaxed">
            <span className="font-bold text-indigo-950">Pro Tip: </span>
            The goal isn’t to build a production-ready app. The goal is to practice turning a product idea into a working, touch-friendly interface.
          </div>
        </section>

        {/* REQUIREMENTS CHECKLIST */}
        <section className="bg-white border border-stone-200/90 rounded-3xl p-5 shadow-sm space-y-3">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-stone-400">
            Requirements Checklist
          </h2>

          {/* Must Have */}
          <div className="space-y-2">
            <h3 className="text-xs font-extrabold text-stone-900 flex items-center gap-1.5">
              <CheckSquare className="w-4 h-4 text-indigo-600" /> Must Have
            </h3>
            <ul className="space-y-1.5 pl-1">
              {mustHaveRequirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-stone-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bonus */}
          <div className="pt-2 border-t border-stone-100 space-y-1.5">
            <h3 className="text-xs font-extrabold text-amber-800 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Bonus Criteria
            </h3>
            <ul className="space-y-1 pl-1">
              {bonusRequirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* THOUGHTFUL UX FEATURE — DONE LOOKS LIKE */}
        <DoneLooksLikeCard />

        {/* SUBMIT PROOF OF WORK */}
        {/* Render interactive submission only when the ChallengeProvider is present. */}
        {ctx ? (
          <ProofSubmission />
        ) : (
          <div className="bg-white border rounded-3xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-0.5 rounded-md">
                PROOF OF WORK
              </span>
              <span className="text-stone-500 text-xs font-medium">Daily Verification</span>
            </div>
            <p className="text-xs text-stone-700">Interactive proof submission disabled — no profile connected.</p>
            <p className="text-xs text-stone-500 mt-2">Start the challenge or open the student profile to enable submissions.</p>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
