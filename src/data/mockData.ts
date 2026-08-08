export interface Student {
  name: string;
  firstName: string;
  college: string | null;
  track: string | null;
  avatar: string | null;
  currentDay: number;
  streak: number;
  longestStreak: number;
  completedDays: number;
  totalDays: number;
  completionPercentage: number;
  githubUrl?: string;
  linkedinUrl?: string;
}

export interface ChallengeDay {
  day: number;
  title: string;
  category: string;
  estimatedTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  goals: string[];
  bonus: string;
  finishLineSteps: { title: string; time: string; done?: boolean }[];
  doneCriteria: string[];
}

export interface Achievement {
  id: string;
  icon: string;
  title: string;
  description: string;
  unlocked: boolean;
  unlockedDate?: string;
}

export interface DayStatus {
  day: number;
  status: "completed" | "current" | "missed" | "upcoming";
  title?: string;
}

export const defaultStudent: Student = {
  name: "Aarav Sharma",
  firstName: "Aarav",
  college: "ABES Engineering College",
  track: "Full Stack Development",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
  currentDay: 12,
  streak: 11,
  longestStreak: 11,
  completedDays: 11,
  totalDays: 60,
  completionPercentage: 18,
  githubUrl: "https://github.com/aaravsharma/abtalks-60days",
  linkedinUrl: "https://linkedin.com/in/aaravsharma-dev",
};

export const firstDayStudent: Student = {
  name: "Aarav Sharma",
  firstName: "Aarav",
  college: "ABES Engineering College",
  track: "Full Stack Development",
  avatar: null,
  currentDay: 1,
  streak: 0,
  longestStreak: 0,
  completedDays: 0,
  totalDays: 60,
  completionPercentage: 0,
};

export const emptyProfileStudent: Student = {
  name: "New Student",
  firstName: "Student",
  college: null,
  track: null,
  avatar: null,
  currentDay: 12,
  streak: 11,
  longestStreak: 11,
  completedDays: 11,
  totalDays: 60,
  completionPercentage: 18,
};

export const day12Data: ChallengeDay = {
  day: 12,
  title: "Build a Responsive Habit Tracker",
  category: "Frontend",
  estimatedTime: "60–90 min",
  difficulty: "Intermediate",
  description:
    "Build a mobile-first habit tracker where users can create habits, mark them complete, and see their weekly progress. The goal isn't to build a production-ready app. The goal is to practice turning a product idea into a working interface.",
  goals: [
    "Create a responsive mobile-first layout (390px optimized)",
    "Allow users to add and remove habits",
    "Track daily completion with interactive checkboxes",
    "Show a simple weekly progress view",
  ],
  bonus: "Add localStorage persistence & smooth toggle animations.",
  finishLineSteps: [
    { title: "Build the mobile habit card layout", time: "25 min" },
    { title: "Implement habit state & completion toggle", time: "20 min" },
    { title: "Commit clean code to your GitHub repo", time: "15 min" },
    { title: "Share screenshot & learnings on LinkedIn", time: "15 min" },
  ],
  doneCriteria: [
    "A user can create at least one habit item",
    "A habit can be marked complete with instant visual feedback",
    "The UI is touch-friendly and crisp at 390px mobile width",
    "Your code is pushed to a public GitHub repository",
    "You've posted your daily proof of work on LinkedIn",
  ],
};

export const sampleAchievements: Achievement[] = [
  {
    id: "streak-7",
    icon: "🔥",
    title: "7 Day Streak",
    description: "Built consistently for 7 straight days",
    unlocked: true,
    unlockedDate: "Day 7",
  },
  {
    id: "first-proj",
    icon: "🚀",
    title: "First Project",
    description: "Submitted Day 1 GitHub proof",
    unlocked: true,
    unlockedDate: "Day 1",
  },
  {
    id: "first-post",
    icon: "📣",
    title: "First Public Post",
    description: "Shared proof of work on LinkedIn",
    unlocked: true,
    unlockedDate: "Day 1",
  },
  {
    id: "built-10",
    icon: "🧱",
    title: "10 Days Built",
    description: "Crossed double digits in challenge builds",
    unlocked: true,
    unlockedDate: "Day 10",
  },
  {
    id: "halfway-30",
    icon: "⚡",
    title: "30 Days Halfway",
    description: "Reach the 50% milestone",
    unlocked: false,
  },
  {
    id: "master-60",
    icon: "👑",
    title: "60 Days Master",
    description: "Complete all 60 coding challenges",
    unlocked: false,
  },
];

export const generateTimelineDays = (mode: "normal" | "firstDay" | "missedDay" | "emptyProfile" = "normal"): DayStatus[] => {
  return Array.from({ length: 60 }, (_, i) => {
    const dayNum = i + 1;
    if (mode === "firstDay") {
      return {
        day: dayNum,
        status: dayNum === 1 ? "current" : "upcoming",
      };
    }

    if (mode === "missedDay" && dayNum === 9) {
      return {
        day: dayNum,
        status: "missed",
        title: "Build a Weather Widget (Missed)",
      };
    }

    if (dayNum < 12) {
      return {
        day: dayNum,
        status: "completed",
      };
    } else if (dayNum === 12) {
      return {
        day: dayNum,
        status: "current",
        title: "Build a Responsive Habit Tracker",
      };
    } else {
      return {
        day: dayNum,
        status: "upcoming",
      };
    }
  });
};

export const sampleTracks = [
  { id: "fullstack", name: "Full Stack Web Dev", icon: "💻", count: "60 Builds", popular: true },
  { id: "frontend", name: "Frontend & UI Engineering", icon: "🎨", count: "60 Builds", popular: false },
  { id: "backend", name: "Backend Systems & APIs", icon: "⚡", count: "60 Builds", popular: false },
];
