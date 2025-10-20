"use client";

import * as React from "react";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EditProfileModal } from "./EditProfileModal";

/**
 * ProfileHeader Component (Modern & Premium)
 *
 * Header profil yang menampilkan identitas user dengan desain premium.
 * Terletak di /components/profile/ sebagai bagian dari Profile Page.
 *
 * Features:
 * - Cover image dengan gradien gelap
 * - Foto profil besar dengan ring glow effect
 * - Nama, username, dan bio yang jelas
 * - Stats followers/following yang clickable
 * - Tombol Edit Profile / Follow dengan animasi
 * - Info tambahan (joined date, location)
 * - Responsive design
 *
 * Props:
 * - isOwnProfile: boolean (untuk menentukan tampil Edit Profile atau Follow)
 * - profile: object dengan data profil (nama, username, bio, dll)
 *
 * Dependencies: lucide-react (npm install lucide-react)
 */

interface ProfileData {
  name: string;
  username: string;
  bio: string;
  followers: number;
  following: number;
  joinedDate: string;
  location?: string;
  coverImage?: string;
  avatarUrl?: string;
}

interface ProfileHeaderProps {
  isOwnProfile?: boolean;
  profile: ProfileData;
}

export function ProfileHeader({
  isOwnProfile = true,
  profile,
}: ProfileHeaderProps) {
  const [isFollowing, setIsFollowing] = React.useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  const handleEditProfile = () => {
    setIsEditModalOpen(true);
  };

  const handleSaveProfile = (updatedProfile: ProfileData) => {
    console.log("Profile updated:", updatedProfile);
    // Placeholder untuk update profile via API
  };

  const handleStatsClick = (type: "followers" | "following") => {
    // Placeholder untuk buka modal/page followers/following
    console.log(`Show ${type}`);
  };

  return (
    <div className="relative">
      {/* Cover Image */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-muted/40 to-accent/20"
          style={{
            backgroundImage: profile.coverImage
              ? `url(${profile.coverImage})`
              : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay untuk memastikan foto profil terlihat */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
        </div>
      </div>

      {/* Profile Content */}
      <div className="relative px-4 md:px-6">
        {/* Avatar - Overlapping cover */}
        <div className="relative -mt-16 md:-mt-20 mb-4">
          <div className="inline-block">
            <div className="relative group">
              {/* Avatar dengan ring glow */}
              <div className="size-28 md:size-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 p-1 ring-4 ring-background transition-all duration-300 group-hover:ring-primary/50 group-hover:scale-105">
                <div className="size-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  {profile.avatarUrl ? (
                    <img
                      src={profile.avatarUrl}
                      alt={profile.name}
                      className="size-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl md:text-5xl font-bold text-primary">
                      {profile.name.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
              </div>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          </div>

          {/* Edit Profile / Follow Button */}
          <div className="absolute top-0 right-0">
            {isOwnProfile ? (
              <Button
                variant="outline"
                onClick={handleEditProfile}
                className="rounded-full px-6 border-border/50 hover:bg-accent/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                Edit Profile
              </Button>
            ) : (
              <Button
                onClick={handleFollowClick}
                className={`rounded-full px-6 transition-all duration-300 hover:scale-105 ${
                  isFollowing
                    ? "bg-accent text-foreground hover:bg-accent/80"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {isFollowing ? "Following" : "Follow"}
              </Button>
            )}
          </div>
        </div>

        {/* Profile Info */}
        <div className="space-y-3 pb-4">
          {/* Name & Username */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              {profile.name}
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              @{profile.username}
            </p>
          </div>

          {/* Bio */}
          {profile.bio && (
            <div className="max-w-2xl">
              <p className="text-sm md:text-base text-foreground leading-relaxed">
                {profile.bio}
              </p>
            </div>
          )}

          {/* Additional Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {profile.location && (
              <div className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer">
                <MapPin className="size-4" />
                <span>{profile.location}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer">
              <Calendar className="size-4" />
              <span>Joined {profile.joinedDate}</span>
            </div>
          </div>

          {/* Stats - Followers & Following */}
          <div className="flex items-center gap-6 text-sm">
            <button
              onClick={() => handleStatsClick("following")}
              className="group hover:underline transition-all duration-200"
            >
              <span className="font-bold text-foreground group-hover:text-primary transition-colors">
                {profile.following.toLocaleString()}
              </span>
              <span className="text-muted-foreground ml-1">Following</span>
            </button>
            <button
              onClick={() => handleStatsClick("followers")}
              className="group hover:underline transition-all duration-200"
            >
              <span className="font-bold text-foreground group-hover:text-primary transition-colors">
                {profile.followers.toLocaleString()}
              </span>
              <span className="text-muted-foreground ml-1">Followers</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="border-b border-border/50" />

      {/* Edit Profile Modal */}
      {isOwnProfile && (
        <EditProfileModal
          open={isEditModalOpen}
          onOpenChange={setIsEditModalOpen}
          profile={profile}
          onSave={handleSaveProfile}
        />
      )}
    </div>
  );
}
