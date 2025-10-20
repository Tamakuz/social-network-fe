"use client";

import * as React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { NotificationItem, type Notification } from "@/components/notifications/NotificationItem";
import { NotificationFilter, type FilterType } from "@/components/notifications/NotificationFilter";
import { Button } from "@/components/ui/button";
import { CheckCheck, Trash2 } from "lucide-react";

/**
 * Notifications Page (Modern & Interactive)
 *
 * Halaman notifikasi untuk melihat semua aktivitas.
 * Menggunakan MainLayout untuk konsistensi dengan halaman lain.
 *
 * Features:
 * - Filter notifikasi berdasarkan tipe
 * - Mark all as read
 * - Clear all notifications
 * - Berbagai tipe notifikasi (like, comment, retweet, follow, mention)
 * - Real-time updates (placeholder)
 * - Responsive design
 *
 * Layout:
 * - Desktop: Sidebar (kiri) | Notifications (tengah) | Widget (kanan)
 * - Mobile: Stack vertikal
 *
 * Dependencies:
 * - MainLayout (sudah ada)
 * - NotificationItem (baru dibuat)
 * - NotificationFilter (baru dibuat)
 */

// Dummy notifications data
const dummyNotifications: Notification[] = [
  {
    id: "1",
    type: "like",
    user: {
      name: "Sarah Johnson",
      username: "sarahj",
    },
    timestamp: "2m ago",
    isRead: false,
    postPreview: "Just shipped a new feature! 🚀 The new dark mode toggle is now live.",
  },
  {
    id: "2",
    type: "comment",
    user: {
      name: "Mike Chen",
      username: "mikechen",
    },
    content: "This is amazing! Can't wait to try it out. How did you implement the smooth transitions?",
    timestamp: "5m ago",
    isRead: false,
    postPreview: "Working on a new project with Next.js 14 and it's amazing!",
  },
  {
    id: "3",
    type: "follow",
    user: {
      name: "Emily Davis",
      username: "emilyd",
    },
    timestamp: "15m ago",
    isRead: false,
  },
  {
    id: "4",
    type: "retweet",
    user: {
      name: "Alex Rodriguez",
      username: "alexr",
    },
    timestamp: "1h ago",
    isRead: true,
    postPreview: "Hot take: TypeScript makes you a better JavaScript developer.",
  },
  {
    id: "5",
    type: "mention",
    user: {
      name: "Jessica Lee",
      username: "jessical",
    },
    content: "@johndoe What do you think about this new design pattern? Would love to hear your thoughts!",
    timestamp: "2h ago",
    isRead: true,
  },
  {
    id: "6",
    type: "like",
    user: {
      name: "David Kim",
      username: "davidk",
    },
    timestamp: "3h ago",
    isRead: true,
    postPreview: "Coffee + Code = Productivity ☕💻",
  },
  {
    id: "7",
    type: "comment",
    user: {
      name: "Lisa Wang",
      username: "lisaw",
    },
    content: "Great advice! I've been doing this for years and it really works.",
    timestamp: "5h ago",
    isRead: true,
    postPreview: "Reminder: Take breaks, stretch, and stay hydrated!",
  },
  {
    id: "8",
    type: "follow",
    user: {
      name: "Tom Anderson",
      username: "toma",
    },
    timestamp: "1d ago",
    isRead: true,
  },
  {
    id: "9",
    type: "retweet",
    user: {
      name: "Nina Patel",
      username: "ninap",
    },
    timestamp: "1d ago",
    isRead: true,
    postPreview: "Just finished reading 'Clean Code' by Robert C. Martin.",
  },
  {
    id: "10",
    type: "mention",
    user: {
      name: "Chris Brown",
      username: "chrisb",
    },
    content: "Hey @johndoe, check out this cool library I found! It might be useful for your project.",
    timestamp: "2d ago",
    isRead: true,
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = React.useState(dummyNotifications);
  const [activeFilter, setActiveFilter] = React.useState<FilterType>("all");

  // Filter notifications
  const filteredNotifications = React.useMemo(() => {
    if (activeFilter === "all") {
      return notifications;
    }
    return notifications.filter((n) => n.type === activeFilter);
  }, [notifications, activeFilter]);

  // Count notifications by type
  const counts = React.useMemo(() => {
    const result: Record<FilterType, number> = {
      all: notifications.length,
      like: 0,
      comment: 0,
      retweet: 0,
      follow: 0,
      mention: 0,
    };

    notifications.forEach((n) => {
      result[n.type]++;
    });

    return result;
  }, [notifications]);

  // Unread count
  const unreadCount = React.useMemo(() => {
    return notifications.filter((n) => !n.isRead).length;
  }, [notifications]);

  const handleMarkAllRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({ ...n, isRead: true }))
    );
  };

  const handleClearAll = () => {
    if (confirm("Are you sure you want to clear all notifications?")) {
      setNotifications([]);
    }
  };

  const handleNotificationRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const handleNotificationClick = (notification: Notification) => {
    console.log("Notification clicked:", notification);
    // TODO: Navigate to relevant page
  };

  return (
    <MainLayout>
      <div className="w-full min-h-screen relative">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        {/* Header */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-xl border-b border-border/50">
          <div className="p-4 md:p-6">
            {/* Title & Actions */}
            <div className="flex items-center justify-between mb-4">
              <div className="space-y-1">
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                  Notifications
                </h1>
                <p className="text-sm text-muted-foreground">
                  {unreadCount > 0 ? (
                    <>
                      You have{" "}
                      <span className="font-semibold text-primary">
                        {unreadCount} unread
                      </span>{" "}
                      notification{unreadCount > 1 ? "s" : ""}
                    </>
                  ) : (
                    "You're all caught up!"
                  )}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                {unreadCount > 0 && (
                  <Button
                    onClick={handleMarkAllRead}
                    variant="outline"
                    size="sm"
                    className="rounded-full border-border/50 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                  >
                    <CheckCheck className="size-4 mr-2" />
                    Mark all read
                  </Button>
                )}
                {notifications.length > 0 && (
                  <Button
                    onClick={handleClearAll}
                    variant="outline"
                    size="sm"
                    className="rounded-full border-border/50 hover:bg-destructive/20 hover:border-destructive/50 transition-all duration-300"
                  >
                    <Trash2 className="size-4 mr-2" />
                    Clear all
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <NotificationFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            counts={counts}
          />
        </div>

        {/* Notifications List */}
        <div className="relative p-4 md:p-6">
          {filteredNotifications.length > 0 ? (
            <div className="space-y-4 max-w-3xl mx-auto">
              {filteredNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  onRead={handleNotificationRead}
                  onClick={handleNotificationClick}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 max-w-md mx-auto text-center">
              <div className="relative">
                <div className="size-32 rounded-full bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center mb-6">
                  <CheckCheck className="size-16 text-muted-foreground" />
                </div>
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl opacity-50" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                No notifications
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {activeFilter === "all"
                  ? "You don't have any notifications yet. When you get notifications, they'll show up here."
                  : `No ${activeFilter} notifications at the moment.`}
              </p>
            </div>
          )}

          {/* Bottom Spacer */}
          <div className="h-20" />
        </div>
      </div>
    </MainLayout>
  );
}
