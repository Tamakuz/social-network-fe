"use client";

import * as React from "react";
import { Bell, Heart, MessageCircle, Repeat2, UserPlus, AtSign, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * NotificationFilter Component (Modern & Compact)
 *
 * Component untuk filter notifikasi berdasarkan tipe dengan design pills.
 * Terletak di /components/notifications/ sebagai bagian dari Notifications Page.
 *
 * Features:
 * - Filter pills yang compact dan responsive
 * - Icon untuk setiap tipe
 * - Badge count untuk setiap filter
 * - Wrap layout (tidak horizontal scroll)
 * - Active state yang jelas
 *
 * Props:
 * - activeFilter: string (filter yang aktif)
 * - onFilterChange: function (callback saat filter berubah)
 * - counts: object dengan count untuk setiap filter
 *
 * Dependencies: lucide-react (npm install lucide-react)
 */

export type FilterType = "all" | "like" | "comment" | "retweet" | "follow" | "mention";

interface NotificationFilterProps {
  activeFilter?: FilterType;
  onFilterChange?: (filter: FilterType) => void;
  counts?: Record<FilterType, number>;
}

const filters: { id: FilterType; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "all", label: "All", icon: Bell },
  { id: "like", label: "Likes", icon: Heart },
  { id: "comment", label: "Comments", icon: MessageCircle },
  { id: "retweet", label: "Retweets", icon: Repeat2 },
  { id: "follow", label: "Follows", icon: UserPlus },
  { id: "mention", label: "Mentions", icon: AtSign },
];

export function NotificationFilter({
  activeFilter = "all",
  onFilterChange,
  counts,
}: NotificationFilterProps) {
  const handleFilterClick = (filter: FilterType) => {
    onFilterChange?.(filter);
  };

  return (
    <div className="bg-card/30 backdrop-blur-sm border-b border-border/50 p-4">
      {/* Filters Container - Wrap Layout */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const count = counts?.[filter.id] || 0;
          const isActive = activeFilter === filter.id;

          return (
            <button
              key={filter.id}
              onClick={() => handleFilterClick(filter.id)}
              className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {/* Glow Effect */}
              {isActive && (
                <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-30 -z-10" />
              )}

              {/* Label */}
              <span>{filter.label}</span>98/++

              {/* Count Badge */}
              {count > 0 && (
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-background/50 text-foreground"
                  }`}
                >
                  {count > 99 ? "99+" : count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
