"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutDashboard, Target, User } from "lucide-react";
import { ProfileModal } from "../ui/ProfileModal";

export const BottomNav: React.FC = () => {
  const pathname = usePathname();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Day 12", href: "/day/12", icon: Target },
  ];

  return (
    <>
      <nav aria-label="Bottom Navigation" className="fixed bottom-0 left-0 right-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-stone-200/80 px-2 py-2">
        <div className="max-w-md mx-auto flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-colors duration-150 min-w-[64px] min-h-[44px] ${
                  isActive
                    ? "text-indigo-600 font-bold bg-indigo-50/80"
                    : "text-stone-500 hover:text-stone-900 font-medium"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "stroke-[2.5px]" : "stroke-[1.8px]"}`} />
                <span className="text-[11px] mt-0.5 tracking-tight">{item.label}</span>
              </Link>
            );
          })}

          {/* Profile Tab */}
          <button
            onClick={() => setIsProfileOpen(true)}
            className="flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-colors duration-150 text-stone-500 hover:text-stone-900 font-medium min-w-[64px] min-h-[44px]"
          >
            <User className="w-5 h-5 stroke-[1.8px]" />
            <span className="text-[11px] mt-0.5 tracking-tight">Profile</span>
          </button>
        </div>
      </nav>

      {/* Profile Modal */}
      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </>
  );
};
