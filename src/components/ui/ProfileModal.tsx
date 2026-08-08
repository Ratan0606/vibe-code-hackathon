"use client";

import React, { useState } from "react";
import { useChallenge } from "@/context/ChallengeContext";
import { X, UserCheck, GraduationCap, Code2, Award, CheckCircle2 } from "lucide-react";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const { student, updateProfile } = useChallenge();
  const [college, setCollege] = useState(student.college || "");
  const [track, setTrack] = useState(student.track || "Full Stack Development");
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(college || "KIET Group of Institutions", track);
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] border border-stone-200 rounded-3xl max-w-sm w-full p-5 shadow-2xl relative overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-stone-200/80 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-stone-900 text-base">Challenge Profile</h3>
              <p className="text-xs text-stone-500 font-medium">ABTalks 60-Day Student</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-500 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Current Stats Summary */}
        <div className="bg-white border border-stone-200/80 rounded-2xl p-3.5 mb-4 grid grid-cols-3 gap-2 text-center shadow-xs">
          <div>
            <div className="text-[10px] text-stone-500 uppercase tracking-wider font-semibold">Streak</div>
            <div className="text-base font-black text-amber-600">🔥 {student.streak}d</div>
          </div>
          <div>
            <div className="text-[10px] text-stone-500 uppercase tracking-wider font-semibold">Completed</div>
            <div className="text-base font-black text-indigo-600">{student.completedDays}/60</div>
          </div>
          <div>
            <div className="text-[10px] text-stone-500 uppercase tracking-wider font-semibold">Progress</div>
            <div className="text-base font-black text-emerald-600">{student.completionPercentage}%</div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-600" /> College / Institution
            </label>
            <input
              type="text"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              placeholder="e.g. ABES Engineering College, Ghaziabad"
              className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-stone-900"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-indigo-600" /> Learning Track
            </label>
            <select
              value={track}
              onChange={(e) => setTrack(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-stone-900"
            >
              <option value="Full Stack Development">Full Stack Web Development</option>
              <option value="Frontend Engineering">Frontend & UI Engineering</option>
              <option value="Backend Engineering">Backend & Systems Programming</option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              {isSaved ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" /> Saved Profile!
                </>
              ) : (
                "Save Challenge Profile"
              )}
            </button>
          </div>
        </form>

        <div className="mt-3 text-center">
          <p className="text-[10px] text-stone-500">
            Public proof portfolio visible to verified tech recruiters.
          </p>
        </div>
      </div>
    </div>
  );
};
