"use client";

import * as React from "react";
import { Heart, MessageCircle, Repeat2, UserPlus, AtSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * NotificationItem Component (Modern & Interactive)
 *
 * Component untuk menampilkan item notifikasi dengan berbagai tipe.
 * Terletak di /components/notifications/ sebagai bagian dari Notifications Page.
 *
 * Features:
 * - Berbagai tipe notifikasi (like, comment, retweet, follow, mention)
 * - Icon yang berbeda untuk setiap tipe
 * - Avatar user yang melakukan aksi
 * - Timestamp
 * - Read/unread state
 * - Hover effects
 * - Action buttons (Follow back, Reply, dll)
 *
 * Props:
 * - notification: object dengan data notifikasi
 * - onRead: function (callback saat notifikasi dibaca)
 * - onClick: function (callback saat notifikasi diklik)
 *
 * Dependencies: lucide-react (npm install lucide-react)
 */

export type NotificationType = "like" | "comment" | "retweet" | "follow" | "mention";

export interface Notification {
  id: string;
  type: NotificationType;
  user: {
    name: string;
    username: string;
    avatarUrl?: string;
  };
  content?: string;
  timestamp: string;
  isRead: boolean;
  postPreview?: string;
}

interface NotificationItemProps {
  notification: Notification;
  onRead?: (id: string) => void;
  onClick?: (notification: Notification) => void;
}

const notificationConfig = {
  like: {
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    ringColor: "ring-red-500/20",
    text: "liked your post",
  },
  comment: {
    icon: MessageCircle,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    ringColor: "ring-blue-500/20",
    text: "commented on your post",
  },
  retweet: {
    icon: Repeat2,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    ringColor: "ring-green-500/20",
    text: "retweeted your post",
  },
  follow: {
    icon: UserPlus,
    color: "text-primary",
    bgColor: "bg-primary/10",
    ringColor: "ring-primary/20",
    text: "started following you",
  },
  mention: {
    icon: AtSign,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    ringColor: "ring-purple-500/20",
    text: "mentioned you in a post",
  },
};

export function NotificationItem({
  notification,
  onRead,
  onClick,
}: NotificationItemProps) {
  const config = notificationConfig[notification.type];
  const Icon = config.icon;

  const handleClick = () => {
    if (!notification.isRead) {
      onRead?.(notification.id);
    }
    onClick?.(notification);
  };

  return (
    <Card
      onClick={handleClick}
      className={`group relative cursor-pointer border-border/40 transition-all duration-300 hover:scale-[1.005] hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 overflow-hidden ${
        notification.isRead
          ? "bg-card/50"
          : "bg-gradient-to-br from-card via-card/90 to-primary/5"
      }`}
    >
      {/* Unread Indicator */}
      {!notification.isRead && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-accent">
          <div className="absolute inset-0 bg-primary blur-sm opacity-50" />
        </div>
      )}

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <CardContent className="relative p-5">
        <div className="flex gap-4">

          {/* Content */}
          <div className="flex-1 min-w-0 space-y-3">
            {/* User & Action */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="size-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 p-0.5 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <div className="size-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                      {notification.user.avatarUrl ? (
                        <img
                          src={notification.user.avatarUrl}
                          alt={notification.user.name}
                          className="size-full object-cover"
                        />
                      ) : (
                        <span className="text-base font-bold text-primary">
                          {notification.user.name.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Online indicator for follow notifications */}
                  {notification.type === "follow" && (
                    <div className="absolute bottom-0 right-0 size-3.5 rounded-full bg-green-500 ring-2 ring-background" />
                  )}
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-foreground leading-relaxed">
                    <span className="font-bold hover:underline cursor-pointer">
                      {notification.user.name}
                    </span>{" "}
                    <span className="text-muted-foreground">
                      {config.text}
                    </span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <span className="size-1 rounded-full bg-muted-foreground/50" />
                    {notification.timestamp}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              {notification.type === "follow" && (
                <Button
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Follow back:", notification.user.username);
                  }}
                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30 flex-shrink-0"
                >
                  <UserPlus className="size-4 mr-1.5" />
                  Follow
                </Button>
              )}
            </div>

            {/* Content Preview */}
            {notification.content && (
              <div className="ml-15">
                <div className="relative group/content">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover/content:opacity-100 transition-opacity duration-300" />
                  <p className="relative text-sm text-foreground line-clamp-2 bg-muted/40 rounded-xl p-4 border border-border/40 group-hover/content:border-primary/30 transition-colors duration-300">
                    {notification.content}
                  </p>
                </div>
              </div>
            )}

            {/* Post Preview */}
            {notification.postPreview && (
              <div className="ml-15">
                <div className="relative group/post">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover/post:opacity-100 transition-opacity duration-300" />
                  <div className="relative text-sm text-muted-foreground bg-muted/40 rounded-xl p-4 border border-border/40 group-hover/post:border-primary/30 transition-colors duration-300">
                    <p className="line-clamp-2">{notification.postPreview}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
