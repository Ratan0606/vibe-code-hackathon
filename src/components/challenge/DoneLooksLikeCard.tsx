"use client";

import React, { useState } from "react";
import { CheckSquare, Square, ShieldCheck, Sparkles } from "lucide-react";

export const DoneLooksLikeCard: React.FC = () => {
  const [checkedCriteria, setCheckedCriteria] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: false,
    4: false,
  });

  const criteria = [
    "A user can create at least one habit card",
    "A habit can be marked complete with instant visual state",
    "The UI is touch-friendly and crisp at 390px mobile width",
    "Your code is committed and pushed to a public GitHub repository",
    "You've shared your daily screenshot & learnings on LinkedIn",
  ];

  const toggle = (idx: number) => {
    setCheckedCriteria((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const doneCount = Object.values(checkedCriteria).filter(Boolean).length;

  return (
    <div className="glass-card text-emerald-900 rounded-3xl p-5 shadow-xl relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-tr from-emerald-300/30 to-transparent rounded-full blur-3xl pointer-events-none float-slow" />

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="bg-emerald-50 p-1.5 rounded-lg border border-emerald-200 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
          </span>
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-emerald-700">
              Thoughtful UX Feature
            </h3>
            <h4 className="text-base font-extrabold text-emerald-900 tracking-tight">
              DONE LOOKS LIKE
            </h4>
          </div>
        </div>
        <span className="text-[11px] font-mono font-bold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200">
          {doneCount}/{criteria.length} Met
        </span>
      </div>

      <p className="text-sm text-stone-700 mb-4 leading-relaxed font-medium">
        Don’t let perfectionism block you. If your project meets these 5 concrete criteria, your build is complete and ready to ship!
      </p>

      {/* Criteria Checklist */}
      <div className="space-y-2">
        {criteria.map((item, index) => {
          const isChecked = !!checkedCriteria[index];
          return (
            <button
              key={index}
              onClick={() => toggle(index)}
              className={`w-full text-left p-3 rounded-xl border transition-all flex items-start gap-3 text-sm font-medium ${
                isChecked
                  ? "bg-emerald-600/10 border-emerald-300 text-emerald-900"
                  : "bg-white/60 border-stone-100 text-stone-700 hover:shadow-sm"
              }`}
            >
              <div className="w-6 h-6 rounded-full flex items-center justify-center border">
                {isChecked ? (
                  <CheckSquare className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Square className="w-4 h-4 text-stone-400" />
                )}
              </div>
              <div className={isChecked ? "font-semibold" : "font-medium"}>{item}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
