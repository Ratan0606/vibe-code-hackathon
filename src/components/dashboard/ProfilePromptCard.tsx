"use client";

import React, { useState } from "react";
import { UserPlus, ArrowRight } from "lucide-react";
import { ProfileModal } from "../ui/ProfileModal";

export const ProfilePromptCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white rounded-3xl p-4 shadow-md border border-indigo-800 relative overflow-hidden">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-2xl bg-indigo-500 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
            <UserPlus className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <span className="bg-indigo-500/30 text-indigo-300 text-[10px] font-bold uppercase px-2 py-0.5 rounded-md tracking-wider border border-indigo-400/30">
              ACTION REQUIRED
            </span>
            <h4 className="text-sm font-black text-white tracking-tight">
              Complete your profile
            </h4>
            <p className="text-xs text-indigo-200/90 leading-relaxed font-normal">
              Add your college and learning track so your public challenge profile tells a clearer story to recruiters and peers.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center gap-1.5 bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-sm active:scale-95"
              >
                <span>Complete profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProfileModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
