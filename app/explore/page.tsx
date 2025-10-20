"use client";

import * as React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { SearchBar } from "@/components/explore/SearchBar";
import { TrendingSection } from "@/components/explore/TrendingSection";
import { SuggestedUsers } from "@/components/explore/SuggestedUsers";

/**
 * Explore Page (Modern & Engaging)
 *
 * Halaman explore untuk discover konten dan user baru.
 * Menggunakan MainLayout untuk konsistensi dengan halaman lain.
 *
 * Features:
 * - Search bar untuk cari topics, people, posts
 * - Trending topics section dengan grid layout
 * - Suggested users section
 * - Responsive design
 * - Smooth animations
 * - Interactive cards
 *
 * Layout:
 * - Desktop: Sidebar (kiri) | Explore (tengah) | Widget (kanan)
 * - Mobile: Stack vertikal
 *
 * Dependencies:
 * - MainLayout (sudah ada)
 * - SearchBar (baru dibuat)
 * - TrendingSection (baru dibuat)
 * - SuggestedUsers (baru dibuat)
 */

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // TODO: Implement search functionality
  };

  const handleTopicClick = (topic: any) => {
    console.log("Topic clicked:", topic);
    // TODO: Navigate to topic page or filter posts
  };

  const handleFollowClick = (user: any) => {
    console.log("Follow clicked:", user);
    // TODO: Implement follow functionality
  };

  return (
    <MainLayout>
      <div className="w-full min-h-screen relative">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        {/* Header with Search */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-xl border-b border-border/50">
          <div className="p-4 md:p-6 space-y-4">
            {/* Title Section */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                  Explore
                </h1>
                <p className="text-sm text-muted-foreground">
                  Discover trending topics and connect with new people
                </p>
              </div>
              
              {/* Stats Badge */}
              <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-muted/30 border border-border/50">
                <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-muted-foreground">
                  Live Updates
                </span>
              </div>
            </div>

            {/* Search Bar */}
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onSearch={handleSearch}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative p-4 md:p-6 space-y-12">
          {/* Trending Topics Section */}
          <TrendingSection onTopicClick={handleTopicClick} />

          {/* Decorative Divider */}
          <div className="relative py-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/50" />
            </div>
            <div className="relative flex justify-center">
              <div className="px-4 bg-background">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/30 border border-border/50">
                  <div className="size-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-medium text-muted-foreground">
                    Discover More
                  </span>
                  <div className="size-2 rounded-full bg-accent animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Suggested Users Section */}
          <SuggestedUsers onFollowClick={handleFollowClick} />

          {/* Bottom Spacer */}
          <div className="h-16" />
        </div>
      </div>
    </MainLayout>
  );
}
