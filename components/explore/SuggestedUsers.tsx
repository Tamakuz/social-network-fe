"use client";

import * as React from "react";
import { Users, UserPlus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * SuggestedUsers Component (Modern & Interactive)
 *
 * Component untuk menampilkan suggested users dengan desain menarik.
 * Terletak di /components/explore/ sebagai bagian dari Explore Page.
 *
 * Features:
 * - Grid layout untuk user cards
 * - Follow button dengan state
 * - Hover effects
 * - User stats (followers)
 * - Avatar dengan gradient
 * - Responsive design
 *
 * Props:
 * - users: array of suggested users
 * - onFollowClick: function (callback saat follow diklik)
 *
 * Dependencies: lucide-react (npm install lucide-react)
 */

interface SuggestedUser {
  id: string;
  name: string;
  username: string;
  followers: string;
  bio?: string;
  avatarUrl?: string;
}

interface SuggestedUsersProps {
  users?: SuggestedUser[];
  onFollowClick?: (user: SuggestedUser) => void;
}

const defaultUsers: SuggestedUser[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    username: "sarahj",
    followers: "125K",
    bio: "UI/UX Designer | Creating beautiful experiences",
  },
  {
    id: "2",
    name: "Mike Chen",
    username: "mikechen",
    followers: "89K",
    bio: "Full-stack developer | Open source enthusiast",
  },
  {
    id: "3",
    name: "Emily Davis",
    username: "emilyd",
    followers: "67K",
    bio: "Product Manager | Tech & Innovation",
  },
  {
    id: "4",
    name: "Alex Rodriguez",
    username: "alexr",
    followers: "45K",
    bio: "Frontend Developer | React & Next.js",
  },
  {
    id: "5",
    name: "Jessica Lee",
    username: "jessical",
    followers: "38K",
    bio: "Content Creator | Digital Marketing",
  },
  {
    id: "6",
    name: "David Kim",
    username: "davidk",
    followers: "52K",
    bio: "Software Engineer | AI & ML",
  },
];

export function SuggestedUsers({
  users = defaultUsers,
  onFollowClick,
}: SuggestedUsersProps) {
  const [followedUsers, setFollowedUsers] = React.useState<Set<string>>(
    new Set()
  );

  const handleFollowClick = (user: SuggestedUser) => {
    setFollowedUsers((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(user.id)) {
        newSet.delete(user.id);
      } else {
        newSet.add(user.id);
      }
      return newSet;
    });
    onFollowClick?.(user);
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="size-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ring-2 ring-primary/20">
                <Users className="size-6 text-primary" />
              </div>
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-50" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Who to Follow
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Connect with amazing people
              </p>
            </div>
          </div>
          
          {/* Refresh Button */}
          <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-muted/30 hover:bg-primary/20 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
            <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
              Refresh
            </span>
            <Users className="size-4 text-muted-foreground group-hover:text-primary transition-colors group-hover:rotate-180 duration-500" />
          </button>
        </div>
        
        {/* Decorative Line */}
        <div className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      </div>

      {/* Suggested Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => {
          const isFollowing = followedUsers.has(user.id);

          return (
            <Card
              key={user.id}
              className="group relative border-border/40 bg-gradient-to-br from-card via-card/80 to-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              <CardContent className="relative p-6 space-y-5">
                {/* Avatar Section - Centered */}
                <div className="flex flex-col items-center space-y-3">
                  <div className="relative">
                    {/* Avatar */}
                    <div className="size-20 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 p-1 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                      <div className="size-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                        {user.avatarUrl ? (
                          <img
                            src={user.avatarUrl}
                            alt={user.name}
                            className="size-full object-cover"
                          />
                        ) : (
                          <span className="text-3xl font-bold text-primary">
                            {user.name.charAt(0).toUpperCase()}
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Online Indicator */}
                    <div className="absolute bottom-1 right-1 size-4 rounded-full bg-green-500 ring-2 ring-background" />
                    {/* Glow */}
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* User Info */}
                  <div className="text-center space-y-1 w-full">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors truncate">
                      {user.name}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      @{user.username}
                    </p>
                    <div className="h-1 w-0 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-500 mx-auto" />
                  </div>
                </div>

                {/* Bio */}
                <div className="min-h-[3rem] flex items-center justify-center">
                  {user.bio && (
                    <p className="text-sm text-muted-foreground text-center line-clamp-2">
                      {user.bio}
                    </p>
                  )}
                </div>

                {/* Stats */}
                <div className="pt-3 border-t border-border/30">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Followers</span>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {user.followers}
                      </span>
                      <div className="size-2 rounded-full bg-primary/50 group-hover:bg-primary animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Follow Button - Full Width */}
                <Button
                  onClick={() => handleFollowClick(user)}
                  className={`w-full rounded-full transition-all duration-300 hover:scale-105 shadow-lg ${
                    isFollowing
                      ? "bg-accent text-foreground hover:bg-accent/80 shadow-accent/20"
                      : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/20"
                  }`}
                >
                  {isFollowing ? (
                    <span className="flex items-center gap-2">
                      <Users className="size-4" />
                      Following
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <UserPlus className="size-4" />
                      Follow
                    </span>
                  )}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
