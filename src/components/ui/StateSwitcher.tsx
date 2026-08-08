"use client";

import React, { useState } from "react";
import { useChallenge, PresetMode } from "@/context/ChallengeContext";
import { SlidersHorizontal, Check, RefreshCw } from "lucide-react";

export const StateSwitcher: React.FC = () => {
  const { mode, setMode, resetDay12Submission } = useChallenge();
  const [isOpen, setIsOpen] = useState(false);

  const presets: { id: PresetMode; label: string; desc: string }[] = [
    { id: "normal", label: "Normal (Day 12 Active)", desc: "11 day streak, Aarav Sharma profile" },
    { id: "firstDay", label: "First Day (Day 1)", desc: "0 day streak, Day 1 starting clean" },
    { id: "missedDay", label: "Missed Day (Day 9)", desc: "Handled encouragingly without shame" },
    { id: "emptyProfile", label: "Empty Profile State", desc: "No college/track filled yet" },
  ];

  return (
    <div className="fixed top-16 right-3 z-40">
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-stone-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-stone-700 flex items-center gap-1.5 hover:bg-stone-800 transition-transform active:scale-95"
        title="Evaluator Preset Switcher"
      >
        <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
        <span className="hidden sm:inline">Preview</span> State: <span className="text-amber-300 capitalize font-bold">{mode}</span>
      </button>

      {/* Preset Modal Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-stone-200 p-3.5 z-50 text-stone-900 animate-in fade-in zoom-in duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100 mb-2">
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-stone-500">
                Evaluator Edge-Case Bar
              </h4>
              <p className="text-[11px] text-stone-500 font-medium">Instant preview mock states</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-stone-700 text-xs font-bold px-1"
            >
              ✕
            </button>
          </div>

          <div className="space-y-1.5">
            {presets.map((preset) => {
              const isSelected = mode === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => {
                    setMode(preset.id);
                  }}
                  className={`w-full text-left p-2 rounded-xl text-xs transition-all flex items-start justify-between ${
                    isSelected
                      ? "bg-indigo-50 border border-indigo-200 text-indigo-950 font-semibold"
                      : "hover:bg-stone-50 text-stone-700 border border-transparent"
                  }`}
                >
                  <div>
                    <div className="font-bold flex items-center gap-1.5">
                      {preset.label}
                    </div>
                    <div className="text-[10px] text-stone-500 mt-0.5">{preset.desc}</div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />}
                </button>
              );
            })}
          </div>

          <div className="pt-2.5 mt-2 border-t border-stone-100 flex items-center justify-between">
            <button
              onClick={() => resetDay12Submission()}
              className="text-[11px] text-stone-600 hover:text-indigo-600 font-semibold flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-stone-100"
            >
              <RefreshCw className="w-3 h-3" /> Reset Submissions
            </button>
            {mode !== "emptyProfile" && (
              <span className="text-[10px] text-stone-400 font-mono">390px mobile</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
