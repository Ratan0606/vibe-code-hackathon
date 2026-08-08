"use client";

import React, { useState } from "react";
import { useChallenge } from "@/context/ChallengeContext";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { CheckCircle2, ArrowRight, Sparkles, ExternalLink, RefreshCw } from "lucide-react";

export const ProofSubmission: React.FC = () => {
  const {
    githubProof,
    setGithubProof,
    githubSubmitted,
    verifyGithub,
    linkedinProof,
    setLinkedinProof,
    linkedinSubmitted,
    verifyLinkedin,
    isDay12Completed,
    resetDay12Submission,
  } = useChallenge();

  const [ghInput, setGhInput] = useState(githubProof || "");
  const [liInput, setLiInput] = useState(linkedinProof || "");

  const handleGithubSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ghInput) {
      setGhInput("https://github.com/aaravsharma/abtalks-habit-tracker");
      verifyGithub("https://github.com/aaravsharma/abtalks-habit-tracker");
    } else {
      verifyGithub(ghInput);
    }
  };

  const handleLinkedinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!liInput) {
      setLiInput("https://linkedin.com/posts/aaravsharma-day12-habittracker");
      verifyLinkedin("https://linkedin.com/posts/aaravsharma-day12-habittracker");
    } else {
      verifyLinkedin(liInput);
    }
  };

  const completedCount = (githubSubmitted ? 1 : 0) + (linkedinSubmitted ? 1 : 0);

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-0.5 rounded-md">
            PROOF OF WORK
          </span>
          <span className="text-stone-500 text-xs font-medium">Daily Verification</span>
        </div>
        <h3 className="text-xl font-black text-stone-900 mt-1 tracking-tight">
          Prove today’s work
        </h3>
        <p className="text-xs text-stone-600 font-normal mt-0.5">
          Your streak is updated when you submit both pieces of proof.
        </p>
      </div>

      {/* 01 — GitHub Card */}
      <div
        className={`bg-white border rounded-3xl p-4 transition-all shadow-sm ${
          githubSubmitted
            ? "border-emerald-200 bg-emerald-50/30"
            : "border-stone-200/90 hover:border-stone-300"
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center">
              <GithubIcon className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                Step 01
              </span>
              <h4 className="text-sm font-bold text-stone-900">GitHub Repository</h4>
            </div>
          </div>

          {githubSubmitted && (
            <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified</span>
            </span>
          )}
        </div>

        <p className="text-xs text-stone-600 mb-3 font-normal">
          Show the code you built today. Submit your public GitHub repository or commit URL.
        </p>

        {githubSubmitted ? (
          <div className="bg-white border border-emerald-200 rounded-2xl p-3 flex items-center justify-between">
            <div className="truncate pr-2">
              <span className="text-[10px] text-emerald-700 font-bold uppercase block">
                ✓ GitHub proof added
              </span>
              <a
                href={githubProof}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-indigo-600 font-mono font-medium truncate block hover:underline flex items-center gap-1"
              >
                <span className="truncate">{githubProof}</span>
                <ExternalLink className="w-3 h-3 shrink-0 text-stone-400" />
              </a>
            </div>
            <button
              onClick={() => setGithubProof("")}
              className="text-[11px] text-stone-400 hover:text-stone-700 font-medium underline shrink-0"
            >
              Edit
            </button>
          </div>
        ) : (
          <form onSubmit={handleGithubSubmit} className="space-y-2">
            <div>
              <label className="block text-[11px] font-bold text-stone-700 mb-1">
                Paste repository or commit URL
              </label>
              <input
                type="url"
                value={ghInput}
                onChange={(e) => setGhInput(e.target.value)}
                placeholder="https://github.com/username/project/commit/..."
                className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-stone-900"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5"
            >
              <span>Verify GitHub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>

      {/* 02 — LinkedIn Card */}
      <div
        className={`bg-white border rounded-3xl p-4 transition-all shadow-sm ${
          linkedinSubmitted
            ? "border-emerald-200 bg-emerald-50/30"
            : "border-stone-200/90 hover:border-stone-300"
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center">
              <LinkedinIcon className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                Step 02
              </span>
              <h4 className="text-sm font-bold text-stone-900">LinkedIn Public Post</h4>
            </div>
          </div>

          {linkedinSubmitted && (
            <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified</span>
            </span>
          )}
        </div>

        <p className="text-xs text-stone-600 mb-3 font-normal">
          Share what you built today and what you learned. Turn your consistency into public proof.
        </p>

        {linkedinSubmitted ? (
          <div className="bg-white border border-emerald-200 rounded-2xl p-3 flex items-center justify-between">
            <div className="truncate pr-2">
              <span className="text-[10px] text-emerald-700 font-bold uppercase block">
                ✓ LinkedIn proof added
              </span>
              <a
                href={linkedinProof}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-indigo-600 font-mono font-medium truncate block hover:underline flex items-center gap-1"
              >
                <span className="truncate">{linkedinProof}</span>
                <ExternalLink className="w-3 h-3 shrink-0 text-stone-400" />
              </a>
            </div>
            <button
              onClick={() => setLinkedinProof("")}
              className="text-[11px] text-stone-400 hover:text-stone-700 font-medium underline shrink-0"
            >
              Edit
            </button>
          </div>
        ) : (
          <form onSubmit={handleLinkedinSubmit} className="space-y-2">
            <div>
              <label className="block text-[11px] font-bold text-stone-700 mb-1">
                Paste your LinkedIn post URL
              </label>
              <input
                type="url"
                value={liInput}
                onChange={(e) => setLiInput(e.target.value)}
                placeholder="https://linkedin.com/posts/username-day12-..."
                className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-stone-900"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-bold rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5"
            >
              <span>Add LinkedIn proof</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>

      {/* Submission Progress Footer */}
      <div className="bg-stone-900 text-white rounded-2xl p-4 shadow-md border border-stone-800">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-black uppercase tracking-wider text-stone-400">
            TODAY’S SUBMISSION STATUS
          </span>
          <span className="text-xs font-bold text-indigo-400">{completedCount} of 2 Completed</span>
        </div>

        <div className="space-y-1.5 text-xs mb-3">
          <div className="flex items-center justify-between py-1 border-b border-stone-800">
            <span className="text-stone-300 flex items-center gap-1.5 font-medium">
              <GithubIcon className="w-3.5 h-3.5" /> GitHub Code Proof
            </span>
            {githubSubmitted ? (
              <span className="text-emerald-400 font-bold">✓</span>
            ) : (
              <span className="text-stone-500 font-normal">Pending</span>
            )}
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-stone-300 flex items-center gap-1.5 font-medium">
              <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" /> LinkedIn Post Proof
            </span>
            {linkedinSubmitted ? (
              <span className="text-emerald-400 font-bold">✓</span>
            ) : (
              <span className="text-stone-500 font-normal">Pending</span>
            )}
          </div>
        </div>

        {isDay12Completed ? (
          <div className="bg-emerald-900/60 border border-emerald-700/80 rounded-xl p-3 text-center animate-in zoom-in-95 duration-200">
            <p className="text-sm font-black text-emerald-300 flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-400" /> Day 12 Complete 🎉
            </p>
            <p className="text-[11px] text-emerald-200/90 mt-0.5">
              Streak updated to 12 days! See you tomorrow for Day 13.
            </p>
          </div>
        ) : (
          <div className="text-center bg-stone-800/80 p-2.5 rounded-xl border border-stone-700/60">
            <p className="text-xs text-stone-300 font-medium">
              {githubSubmitted
                ? "Add your LinkedIn post to complete Day 12."
                : linkedinSubmitted
                ? "Add your GitHub repository to complete Day 12."
                : "Submit both GitHub + LinkedIn links above to complete Day 12."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
