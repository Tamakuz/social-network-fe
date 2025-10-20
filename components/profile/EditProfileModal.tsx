"use client";

import * as React from "react";
import { X, Camera, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/**
 * EditProfileModal Component (Modern & Smooth)
 *
 * Modal untuk edit profil user dengan desain modern dan premium.
 * Terletak di /components/profile/ sebagai bagian dari Profile Page.
 *
 * Features:
 * - Modal dengan backdrop blur
 * - Form untuk edit nama, username, bio, location
 * - Upload foto profil dan cover (placeholder)
 * - Smooth animations
 * - Validation feedback
 * - Save & Cancel buttons
 *
 * Props:
 * - open: boolean (modal terbuka/tertutup)
 * - onOpenChange: function (callback saat modal berubah)
 * - profile: object dengan data profil saat ini
 * - onSave: function (callback saat save)
 *
 * Dependencies:
 * - shadcn/ui Dialog, Input, Textarea, Label
 * - lucide-react icons
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

interface EditProfileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  profile: ProfileData;
  onSave?: (updatedProfile: ProfileData) => void;
}

export function EditProfileModal({
  open,
  onOpenChange,
  profile,
  onSave,
}: EditProfileModalProps) {
  const [formData, setFormData] = React.useState<ProfileData>(profile);
  const [isSaving, setIsSaving] = React.useState(false);

  // Update form data when profile changes
  React.useEffect(() => {
    setFormData(profile);
  }, [profile]);

  const handleInputChange = (
    field: keyof ProfileData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    onSave?.(formData);
    setIsSaving(false);
    onOpenChange(false);
  };

  const handleCancel = () => {
    setFormData(profile); // Reset to original
    onOpenChange(false);
  };

  const handleCoverUpload = () => {
    // Placeholder untuk upload cover
    console.log("Upload cover image");
  };

  const handleAvatarUpload = () => {
    // Placeholder untuk upload avatar
    console.log("Upload avatar image");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden p-0">
        {/* Header */}
        <DialogHeader className="sticky top-0 z-10 bg-background/95 backdrop-blur-md border-b border-border/50 px-6 py-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">Edit Profile</DialogTitle>
          </div>
        </DialogHeader>

        {/* Content - Scrollable */}
        <div className="px-6 pb-6 space-y-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Cover & Avatar Section */}
          <div className="relative -mx-6 -mt-0">
            {/* Cover Image */}
            <div className="relative h-48 bg-gradient-to-br from-primary/20 via-muted/40 to-accent/20 group">
              {formData.coverImage && (
                <img
                  src={formData.coverImage}
                  alt="Cover"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              
              {/* Upload Cover Button */}
              <button
                onClick={handleCoverUpload}
                className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="size-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
                  <Camera className="size-6 text-foreground" />
                </div>
              </button>
            </div>

            {/* Avatar */}
            <div className="absolute -bottom-16 left-6">
              <div className="relative group">
                <div className="size-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 p-1 ring-4 ring-background">
                  <div className="size-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                    {formData.avatarUrl ? (
                      <img
                        src={formData.avatarUrl}
                        alt={formData.name}
                        className="size-full object-cover"
                      />
                    ) : (
                      <span className="text-4xl font-bold text-primary">
                        {formData.name.charAt(0).toUpperCase()}
                      </span>
                    )}
                  </div>
                </div>

                {/* Upload Avatar Button */}
                <button
                  onClick={handleAvatarUpload}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="size-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
                    <Camera className="size-6 text-foreground" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6 mt-20">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Name
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Your name"
                className="bg-background border-border/50 focus:border-primary transition-colors"
                maxLength={50}
              />
              <p className="text-xs text-muted-foreground text-right">
                {formData.name.length}/50
              </p>
            </div>

            {/* Username */}
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium">
                Username
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  @
                </span>
                <Input
                  id="username"
                  value={formData.username}
                  onChange={(e) => handleInputChange("username", e.target.value)}
                  placeholder="username"
                  className="bg-background border-border/50 focus:border-primary transition-colors pl-8"
                  maxLength={30}
                />
              </div>
              <p className="text-xs text-muted-foreground text-right">
                {formData.username.length}/30
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <Label htmlFor="bio" className="text-sm font-medium">
                Bio
              </Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => handleInputChange("bio", e.target.value)}
                placeholder="Tell us about yourself..."
                className="bg-background border-border/50 focus:border-primary transition-colors min-h-[100px] resize-none"
                maxLength={160}
              />
              <p className="text-xs text-muted-foreground text-right">
                {formData.bio.length}/160
              </p>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm font-medium">
                Location
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  id="location"
                  value={formData.location || ""}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  placeholder="Where are you located?"
                  className="bg-background border-border/50 focus:border-primary transition-colors pl-10"
                  maxLength={50}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-border/50">
            <Button
              variant="outline"
              onClick={handleCancel}
              disabled={isSaving}
              className="rounded-full px-6 border-border/50 hover:bg-accent/50"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={isSaving}
              className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              {isSaving ? (
                <span className="flex items-center gap-2">
                  <span className="size-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Saving...
                </span>
              ) : (
                "Save"
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
