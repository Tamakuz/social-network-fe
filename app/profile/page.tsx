"use client";

import * as React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileTabs } from "@/components/profile/ProfileTabs";
import { Post } from "@/components/post/Post";
import type { PostData } from "@/components/post/Post";

/**
 * Profile Page (Modern & Personal)
 *
 * Halaman profil user dengan desain modern dan personal.
 * Menggunakan MainLayout untuk konsistensi dengan halaman lain.
 *
 * Features:
 * - ProfileHeader dengan cover, avatar, bio, stats
 * - ProfileTabs untuk navigasi Posts/Followers/Following
 * - Daftar posting user (dummy data)
 * - Responsive design
 * - Smooth animations
 *
 * Layout:
 * - Desktop: Sidebar (kiri) | Profile (tengah) | Widget (kanan)
 * - Mobile: Stack vertikal
 *
 * Dependencies:
 * - MainLayout (sudah ada)
 * - ProfileHeader (baru dibuat)
 * - ProfileTabs (baru dibuat)
 * - Post (sudah ada)
 */

// Dummy profile data
const dummyProfile = {
  name: "John Doe",
  username: "johndoe",
  bio: "Full-stack developer | Coffee enthusiast ☕ | Building cool stuff with React & Next.js | Open source contributor 🚀",
  followers: 1234,
  following: 567,
  joinedDate: "January 2023",
  location: "San Francisco, CA",
  // coverImage: "/assets/cover.jpg", // Optional
  // avatarUrl: "/assets/avatar.jpg", // Optional
};

// Dummy posts data (user's posts)
const dummyUserPosts: PostData[] = [
  {
    id: "1",
    author: {
      name: "John Doe",
      username: "johndoe",
    },
    content:
      "Just shipped a new feature! 🚀 The new dark mode toggle is now live. Check it out and let me know what you think!",
    timestamp: "2h ago",
    stats: {
      likes: 245,
      comments: 34,
      retweets: 67,
    },
  },
  {
    id: "2",
    author: {
      name: "John Doe",
      username: "johndoe",
    },
    content:
      "Working on a new project with Next.js 14 and it's amazing! The app router is a game changer. Who else is using it?",
    timestamp: "5h ago",
    stats: {
      likes: 189,
      comments: 28,
      retweets: 45,
    },
  },
  {
    id: "3",
    author: {
      name: "John Doe",
      username: "johndoe",
    },
    content:
      "Hot take: TypeScript makes you a better JavaScript developer. The type safety catches so many bugs before they reach production! 🐛",
    timestamp: "1d ago",
    stats: {
      likes: 567,
      comments: 123,
      retweets: 234,
    },
  },
  {
    id: "4",
    author: {
      name: "John Doe",
      username: "johndoe",
    },
    content:
      "Just finished reading 'Clean Code' by Robert C. Martin. Highly recommend it to all developers! 📚 What's your favorite programming book?",
    timestamp: "2d ago",
    stats: {
      likes: 423,
      comments: 89,
      retweets: 156,
    },
  },
  {
    id: "5",
    author: {
      name: "John Doe",
      username: "johndoe",
    },
    content:
      "Coffee + Code = Productivity ☕💻 What's your go-to coding setup? Share your workspace pics!",
    timestamp: "3d ago",
    stats: {
      likes: 678,
      comments: 145,
      retweets: 201,
    },
  },
  {
    id: "6",
    author: {
      name: "John Doe",
      username: "johndoe",
    },
    content:
      "Reminder: Take breaks, stretch, and stay hydrated! Your code will be better when you're taking care of yourself. 💪",
    timestamp: "4d ago",
    stats: {
      likes: 892,
      comments: 67,
      retweets: 312,
    },
  },
];

// Dummy followers list (placeholder)
const dummyFollowers = [
  { name: "Tech Guru", username: "techguru", followers: "125K" },
  { name: "Design Pro", username: "designpro", followers: "89K" },
  { name: "Code Master", username: "codemaster", followers: "67K" },
  { name: "Dev Ninja", username: "devninja", followers: "45K" },
  { name: "UI Wizard", username: "uiwizard", followers: "34K" },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState<
    "posts" | "followers" | "following"
  >("posts");

  const handleTabChange = (tab: "posts" | "followers" | "following") => {
    setActiveTab(tab);
  };

  return (
    <MainLayout>
      <div className="w-full">
        {/* Profile Header */}
        <ProfileHeader isOwnProfile={true} profile={dummyProfile} />

        {/* Profile Tabs */}
        <ProfileTabs activeTab={activeTab} onTabChange={handleTabChange} />

        {/* Tab Content */}
        <div className="min-h-screen">
          {/* Posts Tab */}
          {activeTab === "posts" && (
            <div className="space-y-4 p-4">
              {dummyUserPosts.map((post) => (
                <Post key={post.id} post={post} />
              ))}

              {/* End of posts indicator */}
              <div className="text-center py-8">
                <p className="text-sm text-muted-foreground">
                  You've seen all posts 🎉
                </p>
              </div>
            </div>
          )}

          {/* Followers Tab */}
          {activeTab === "followers" && (
            <div className="p-4 space-y-3">
              {dummyFollowers.map((follower, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/40 hover:bg-accent/30 transition-all duration-300 cursor-pointer group"
                >
                  <div className="size-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-semibold text-primary">
                      {follower.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                      {follower.name}
                    </p>
                    <p className="text-sm text-muted-foreground truncate">
                      @{follower.username} · {follower.followers} followers
                    </p>
                  </div>
                  <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105">
                    Follow
                  </button>
                </div>
              ))}

              {/* Load more button */}
              <button className="w-full p-4 rounded-xl text-sm text-primary hover:bg-accent/50 transition-colors font-medium">
                Load more followers
              </button>
            </div>
          )}

          {/* Following Tab */}
          {activeTab === "following" && (
            <div className="p-4 space-y-3">
              {dummyFollowers.slice(0, 3).map((follower, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/40 hover:bg-accent/30 transition-all duration-300 cursor-pointer group"
                >
                  <div className="size-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-semibold text-primary">
                      {follower.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                      {follower.name}
                    </p>
                    <p className="text-sm text-muted-foreground truncate">
                      @{follower.username} · {follower.followers} followers
                    </p>
                  </div>
                  <button className="px-4 py-2 rounded-full bg-accent text-foreground text-sm font-semibold hover:bg-accent/80 transition-all duration-300 hover:scale-105">
                    Following
                  </button>
                </div>
              ))}

              {/* Load more button */}
              <button className="w-full p-4 rounded-xl text-sm text-primary hover:bg-accent/50 transition-colors font-medium">
                Load more following
              </button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
