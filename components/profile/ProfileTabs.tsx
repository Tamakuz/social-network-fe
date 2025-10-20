"use client";

import * as React from "react";

/**
 * ProfileTabs Component (Modern & Smooth)
 *
 * Tab navigasi untuk profile page dengan animasi smooth.
 * Terletak di /components/profile/ sebagai bagian dari Profile Page.
 *
 * Features:
 * - Tab untuk Posts, Followers, Following
 * - Active indicator dengan animasi sliding
 * - Responsive design (horizontal scroll di mobile)
 * - Smooth transitions
 * - Hover effects
 *
 * Props:
 * - activeTab: string (tab yang aktif)
 * - onTabChange: function (callback saat tab berubah)
 *
 * Dependencies: None (pure React)
 */

type TabType = "posts" | "followers" | "following";

interface ProfileTabsProps {
  activeTab?: TabType;
  onTabChange?: (tab: TabType) => void;
}

const tabs: { id: TabType; label: string }[] = [
  { id: "posts", label: "Posts" },
  { id: "followers", label: "Followers" },
  { id: "following", label: "Following" },
];

export function ProfileTabs({
  activeTab = "posts",
  onTabChange,
}: ProfileTabsProps) {
  const [activeIndex, setActiveIndex] = React.useState(
    tabs.findIndex((tab) => tab.id === activeTab)
  );

  const handleTabClick = (tab: TabType, index: number) => {
    setActiveIndex(index);
    onTabChange?.(tab);
  };

  return (
    <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="relative">
        {/* Tabs Container */}
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id, index)}
              className={`relative flex-1 min-w-[100px] px-4 py-4 text-sm md:text-base font-semibold transition-all duration-300 hover:bg-accent/30 ${
                activeIndex === index
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {/* Tab Label */}
              <span className="relative z-10">{tab.label}</span>

              {/* Hover effect */}
              <div
                className={`absolute inset-0 bg-accent/20 transition-opacity duration-300 ${
                  activeIndex === index ? "opacity-0" : "opacity-0 hover:opacity-100"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Active Indicator - Sliding underline */}
        <div
          className="absolute bottom-0 h-1 bg-primary rounded-full transition-all duration-300 ease-out"
          style={{
            left: `${(activeIndex / tabs.length) * 100}%`,
            width: `${100 / tabs.length}%`,
          }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary blur-sm opacity-50" />
        </div>
      </div>
    </div>
  );
}
