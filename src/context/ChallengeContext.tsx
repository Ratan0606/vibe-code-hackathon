"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  Student,
  defaultStudent,
  firstDayStudent,
  emptyProfileStudent,
  day12Data,
  ChallengeDay,
  generateTimelineDays,
  DayStatus,
  Achievement,
  sampleAchievements,
} from "@/data/mockData";
import confetti from "canvas-confetti";

export type PresetMode = "normal" | "firstDay" | "missedDay" | "emptyProfile";

interface ChallengeContextType {
  mode: PresetMode;
  setMode: (mode: PresetMode) => void;
  student: Student;
  updateProfile: (college: string, track: string) => void;
  day12: ChallengeDay;
  timelineDays: DayStatus[];
  achievements: Achievement[];
  githubProof: string;
  setGithubProof: (url: string) => void;
  githubSubmitted: boolean;
  verifyGithub: (url: string) => boolean;
  linkedinProof: string;
  setLinkedinProof: (url: string) => void;
  linkedinSubmitted: boolean;
  verifyLinkedin: (url: string) => boolean;
  isDay12Completed: boolean;
  resetDay12Submission: () => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const ChallengeContext = createContext<ChallengeContextType | undefined>(undefined);

export const ChallengeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<PresetMode>("normal");
  const [student, setStudent] = useState<Student>(defaultStudent);
  const [githubProof, setGithubProof] = useState<string>("https://github.com/aaravsharma/abtalks-day12");
  const [githubSubmitted, setGithubSubmitted] = useState<boolean>(true); // Default verified for demo, user can clear/toggle
  const [linkedinProof, setLinkedinProof] = useState<string>("");
  const [linkedinSubmitted, setLinkedinSubmitted] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("dashboard");

  // Sync mode changes to student data
  const setMode = (newMode: PresetMode) => {
    setModeState(newMode);
    if (newMode === "firstDay") {
      setStudent(firstDayStudent);
      setGithubSubmitted(false);
      setGithubSubmitted(false);
      setGithubProof("");
      setLinkedinSubmitted(false);
      setLinkedinProof("");
    } else if (newMode === "emptyProfile") {
      setStudent(emptyProfileStudent);
      setGithubSubmitted(false);
      setLinkedinSubmitted(false);
    } else if (newMode === "missedDay") {
      setStudent({
        ...defaultStudent,
        streak: 2, // Reset streak on missed day
        completedDays: 10,
      });
      setGithubSubmitted(false);
      setLinkedinSubmitted(false);
    } else {
      setStudent(defaultStudent);
      setGithubSubmitted(true);
      setGithubProof("https://github.com/aaravsharma/abtalks-day12");
      setLinkedinSubmitted(false);
      setLinkedinProof("");
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const updateProfile = (college: string, track: string) => {
    setStudent((prev) => ({
      ...prev,
      college,
      track,
      name: prev.name === "New Student" ? "Aarav Sharma" : prev.name,
      firstName: prev.firstName === "Student" ? "Aarav" : prev.firstName,
    }));
    showToast("Profile details updated successfully! 🎉");
  };

  const verifyGithub = (url: string): boolean => {
    if (!url || !url.trim().includes("github.com")) {
      showToast("Please enter a valid GitHub URL (e.g. https://github.com/...)");
      return false;
    }
    setGithubProof(url.trim());
    setGithubSubmitted(true);
    showToast("✓ GitHub proof verified & saved!");
    checkOverallCompletion(true, linkedinSubmitted);
    return true;
  };

  const verifyLinkedin = (url: string): boolean => {
    if (!url || !url.trim().includes("linkedin.com")) {
      showToast("Please enter a valid LinkedIn post URL (e.g. https://linkedin.com/...)");
      return false;
    }
    setLinkedinProof(url.trim());
    setLinkedinSubmitted(true);
    showToast("✓ LinkedIn proof verified & saved!");
    checkOverallCompletion(githubSubmitted, true);
    return true;
  };

  const checkOverallCompletion = (ghDone: boolean, liDone: boolean) => {
    if (ghDone && liDone) {
      // Trigger confetti!
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#4F46E5", "#10B981", "#F59E0B", "#3B82F6"],
        });
      } catch {
        // Fallback silently if confetti unsupported
      }
      showToast("🎉 Day 12 Complete! Streak updated to " + (student.streak + 1) + " days!");
      setStudent((prev) => ({
        ...prev,
        completedDays: Math.min(60, prev.completedDays + 1),
        streak: prev.streak + 1,
        completionPercentage: Math.round(((prev.completedDays + 1) / 60) * 100),
      }));
    }
  };

  const resetDay12Submission = () => {
    setGithubSubmitted(false);
    setGithubProof("");
    setLinkedinSubmitted(false);
    setLinkedinProof("");
    showToast("Submission state reset for testing.");
  };

  const isDay12Completed = githubSubmitted && linkedinSubmitted;
  const timelineDays = generateTimelineDays(mode);

  return (
    <ChallengeContext.Provider
      value={{
        mode,
        setMode,
        student,
        updateProfile,
        day12: day12Data,
        timelineDays,
        achievements: sampleAchievements,
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
        toastMessage,
        showToast,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};

export const useChallenge = () => {
  const context = useContext(ChallengeContext);
  if (!context) {
    throw new Error("useChallenge must be used within a ChallengeProvider");
  }
  return context;
};
