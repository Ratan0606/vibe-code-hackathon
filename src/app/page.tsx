"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/navigation/Header";
import { BottomNav } from "@/components/navigation/BottomNav";
import { StateSwitcher } from "@/components/ui/StateSwitcher";
import { useChallenge } from "@/context/ChallengeContext";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import {
  ArrowRight,
  Flame,
  CheckCircle2,
  Code,
  Sparkles,
  Zap,
  Target,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

export default function LandingPage() {
  const { student, timelineDays } = useChallenge();

  const scrollToHowItWorks = () => {
    const el = document.getElementById("how-it-works");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col pb-24">
      {/* Evaluator State Switcher Bar */}
      <StateSwitcher />

      {/* App Header */}
      <Header />

      {/* Main Content Shell - Mobile First 390px Optimized Container */}
      <main className="flex-1 max-w-md w-full mx-auto px-4 pt-4 space-y-6">
        {/* HERO SECTION */}
        <section className="space-y-4 text-center sm:text-left pt-2">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1.5 bg-indigo-100/80 border border-indigo-200/80 text-indigo-900 text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>60 DAYS. 60 BUILDS.</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight leading-[1.15]">
            Build every day. <br />
            <span className="text-indigo-600 underline decoration-amber-400 decoration-wavy decoration-2">
              Become impossible to ignore.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-sm text-stone-600 leading-relaxed font-normal">
            A 60-day coding challenge for Indian college students. Build real projects, publish your progress daily, and turn consistency into proof of work.
          </p>

          {/* CTAs */}
          <div className="pt-1 space-y-2.5">
            <Link
              href="/dashboard"
              className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white text-sm font-extrabold rounded-2xl shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Start the 60-Day Challenge</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={scrollToHowItWorks}
              className="w-full py-3 bg-white hover:bg-stone-100 border border-stone-200 text-stone-700 text-xs font-bold rounded-2xl transition-all flex items-center justify-center gap-1.5"
            >
              <span>See how it works</span>
              <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
            </button>
          </div>

          {/* VISUAL REPRESENTATION OF STREAK & PROOF */}
          <div className="bg-white border border-stone-200/90 rounded-3xl p-4 shadow-sm mt-4 text-left">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-xs font-extrabold text-stone-900">
                  Live Challenge Matrix
                </span>
              </div>
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-200">
                11-Day Active Streak
              </span>
            </div>

            {/* 60 Mini Day Blocks Matrix */}
            <div className="grid grid-cols-10 gap-1 my-2">
              {Array.from({ length: 60 }).map((_, idx) => {
                const day = idx + 1;
                const isCompleted = day <= 11;
                const isCurrent = day === 12;

                return (
                  <div
                    key={day}
                    className={`h-5 rounded-md flex items-center justify-center text-[9px] font-bold transition-all ${
                      isCompleted
                        ? "bg-emerald-600 text-white"
                        : isCurrent
                        ? "bg-indigo-600 text-white ring-2 ring-indigo-400 font-black animate-pulse"
                        : "bg-stone-100 text-stone-300"
                    }`}
                  >
                    {isCompleted ? "✓" : isCurrent ? "→" : ""}
                  </div>
                );
              })}
            </div>

            {/* Proof Icons Footer */}
            <div className="flex items-center justify-between text-[11px] font-medium text-stone-500 pt-2 border-t border-stone-100">
              <span className="flex items-center gap-1 text-stone-700 font-bold">
                <GithubIcon className="w-3.5 h-3.5" /> Public Commits
              </span>
              <span className="flex items-center gap-1 text-stone-700 font-bold">
                <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" /> Daily Posts
              </span>
              <span className="text-emerald-700 font-black">100% Verifiable</span>
            </div>
          </div>
        </section>

        {/* TRUST & CREDIBILITY SECTION */}
        <section className="bg-stone-900 text-stone-100 rounded-3xl p-5 shadow-xl space-y-3">
          <div className="inline-block bg-indigo-500/20 text-indigo-300 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border border-indigo-500/30">
            STUDENT-FIRST CREDIBILITY
          </div>
          <h3 className="text-lg font-black text-white tracking-tight">
            Built for students who want more than certificates.
          </h3>
          <p className="text-xs text-stone-300 leading-relaxed">
            Certificates don't get you hired. Code and consistency do. ABTalks replaces passive watching with daily project execution.
          </p>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="bg-stone-800/80 p-3 rounded-2xl border border-stone-700/70">
              <ShieldCheck className="w-4 h-4 text-emerald-400 mb-1" />
              <h4 className="text-xs font-bold text-white">Daily Proof of Work</h4>
              <p className="text-[10px] text-stone-400">Verifiable GitHub & LinkedIn submission</p>
            </div>
            <div className="bg-stone-800/80 p-3 rounded-2xl border border-stone-700/70">
              <Flame className="w-4 h-4 text-amber-400 mb-1" />
              <h4 className="text-xs font-bold text-white">Public Streak</h4>
              <p className="text-[10px] text-stone-400">Build accountability in public</p>
            </div>
            <div className="bg-stone-800/80 p-3 rounded-2xl border border-stone-700/70">
              <Code className="w-4 h-4 text-indigo-400 mb-1" />
              <h4 className="text-xs font-bold text-white">Real Projects</h4>
              <p className="text-[10px] text-stone-400">No todo apps or toy tutorials</p>
            </div>
            <div className="bg-stone-800/80 p-3 rounded-2xl border border-stone-700/70">
              <Zap className="w-4 h-4 text-amber-400 mb-1" />
              <h4 className="text-xs font-bold text-white">Recruiter Visible</h4>
              <p className="text-[10px] text-stone-400">Portfolio that speaks for itself</p>
            </div>
          </div>
        </section>

        {/* 3-STEP HOW IT WORKS */}
        <section id="how-it-works" className="space-y-3 pt-2">
          <div className="text-center sm:text-left">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
              SIMPLE 3-STEP SYSTEM
            </span>
            <h3 className="text-xl font-black text-stone-950 mt-1 tracking-tight">
              How ABTalks Works
            </h3>
          </div>

          <div className="space-y-2.5">
            {/* Step 1 */}
            <div className="bg-white border border-stone-200/90 rounded-2xl p-4 shadow-sm flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                01
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">Pick your track</h4>
                <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">
                  Choose between Full Stack, Frontend UI, or Backend Systems depending on your career goal.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-stone-200/90 rounded-2xl p-4 shadow-sm flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                02
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">Build every day</h4>
                <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">
                  Complete one meaningful, bite-sized coding task each day (~60–90 min).
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-stone-200/90 rounded-2xl p-4 shadow-sm flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                03
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">Prove the work</h4>
                <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">
                  Submit your public GitHub commit & LinkedIn post to keep your streak alive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CHALLENGE PREVIEW TIMELINE */}
        <section className="bg-white border border-stone-200/90 rounded-3xl p-5 shadow-sm space-y-3">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-stone-400">
              CHALLENGE PREVIEW
            </span>
            <h3 className="text-base font-extrabold text-stone-950 tracking-tight">
              What your 60 days look like
            </h3>
          </div>

          {/* Timeline snippet */}
          <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200/60 font-mono text-xs font-bold text-stone-700 flex items-center justify-between overflow-x-auto">
            <span className="text-emerald-700">01 ✓</span>
            <span className="text-emerald-700">02 ✓</span>
            <span className="text-emerald-700">03 ✓</span>
            <span className="text-emerald-700">04 ✓</span>
            <span className="text-indigo-600 font-extrabold underline">12 →</span>
            <span className="text-stone-300">...</span>
            <span className="text-stone-400">60</span>
          </div>

          <p className="text-xs text-stone-600 font-medium italic text-center">
            "Your goal isn't perfection. It's showing up every single day."
          </p>
        </section>

        {/* MOTIVATION CARD */}
        <section className="bg-amber-50 border border-amber-200/90 rounded-3xl p-5 text-amber-950 space-y-2 text-center">
          <div className="w-9 h-9 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center mx-auto shadow-sm">
            💡
          </div>
          <h4 className="text-sm font-black text-amber-950">You don't need 60 perfect projects.</h4>
          <p className="text-xs text-amber-900/90 font-medium">
            You need 60 days of proof that you kept going when others quit.
          </p>
        </section>

        {/* FINAL CTA */}
        <section className="bg-stone-900 text-white rounded-3xl p-6 text-center space-y-4 shadow-xl">
          <h3 className="text-xl font-black tracking-tight">
            Ready to build your streak?
          </h3>
          <p className="text-xs text-stone-300 max-w-xs mx-auto">
            Join thousands of ambitious Indian college students turning daily practice into real proof of work.
          </p>
          <Link
            href="/dashboard"
            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black rounded-2xl shadow-lg transition-all flex items-center justify-center gap-1.5"
          >
            <span>Start Day 1 →</span>
          </Link>
        </section>
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
