"use client";

import React, { useState } from "react";
import { Logo } from "./Logo";
import { useChallenge } from "@/context/ChallengeContext";
import { User, Flame } from "lucide-react";
import { ProfileModal } from "../ui/ProfileModal";

export const Header: React.FC = () => {
  const { student } = useChallenge();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/60 px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <Logo size="sm" showTag />

          <div className="flex items-center gap-2.5">
            {/* Streak Counter Badge */}
            <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/70 text-amber-800 px-2.5 py-1 rounded-full text-xs font-semibold">
              <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-600 animate-pulse" />
              <span>{student.streak}d streak</span>
            </div>

            {/* Profile Avatar Button */}
            <button
              onClick={() => setIsProfileOpen(true)}
              className="relative focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full p-0.5"
              aria-label="Open student profile"
            >
              {student.avatar ? (
                // Using standard img element for absolute reliability with mock/external avatar URLs
                // eslint-disable-next-next/no-img-element
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-8 h-8 rounded-full object-cover border border-stone-300 shadow-sm"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center border border-indigo-200 shadow-sm">
                  {student.firstName[0]}
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Interactive Profile Modal */}
      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </>
  );
};
