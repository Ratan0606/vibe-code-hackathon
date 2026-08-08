"use client";

import React from "react";
import { AlertCircle, ArrowRight, HeartHandshake } from "lucide-react";
import Link from "next/link";

export const MissedDayBanner: React.FC = () => {
  return (
    <div className="bg-amber-500/10 border border-amber-500/30 rounded-3xl p-4 text-amber-950 relative overflow-hidden shadow-xs">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
          <HeartHandshake className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-1.5">
            <span className="bg-amber-500 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-md tracking-wider">
              Missed Day Notice
            </span>
            <span className="text-xs font-bold text-amber-900">Day 9 wasn't completed</span>
          </div>
          <h4 className="text-sm font-black text-amber-950 tracking-tight">
            That's okay. Your challenge isn't over.
          </h4>
          <p className="text-xs text-amber-900/90 leading-relaxed font-normal">
            You missed a day. Life happens. Consistency isn't about being 100% flawless; it's about picking up today and keeping your Momentum alive.
          </p>

          <div className="pt-2">
            <Link
              href="/day/12"
              className="inline-flex items-center gap-1.5 bg-amber-900 hover:bg-amber-950 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-sm active:scale-95"
            >
              <span>Continue today's challenge</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
