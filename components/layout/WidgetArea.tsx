"use client";

import * as React from "react";
import { TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * WidgetArea Component (Simplified)
 *
 * Widget area untuk menampilkan trending topics dan suggested users.
 * Terletak di /components/layout/ sebagai bagian dari MainLayout.
 *
 * Features:
 * - Trending topics widget
 * - Who to follow widget
 * - Sticky positioning dengan max-height screen
 * - Overflow scroll jika konten terlalu panjang
 *
 * Dependencies:
 * - lucide-react (npm install lucide-react)
 */

export function WidgetArea() {
  return (
    <aside className="sticky top-0 h-screen p-3 space-y-3 overflow-y-auto overflow-x-hidden w-full">
      {/* Trending Topics Widget */}
      <Card className="border-border/40 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm w-full overflow-hidden">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <TrendingUp className="size-4 text-primary" />
            Trending Topics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1 pt-0">
          {[
            { topic: "#WebDevelopment", posts: "12.5K" },
            { topic: "#NextJS", posts: "8.3K" },
            { topic: "#UIDesign", posts: "6.7K" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-2 rounded-md hover:bg-accent/50 transition-colors cursor-pointer group"
            >
              <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                {item.topic}
              </p>
              <p className="text-xs text-muted-foreground">{item.posts} posts</p>
            </div>
          ))}
          
          {/* View More Button */}
          <button className="w-full p-2 rounded-md text-sm text-primary hover:bg-accent/50 transition-colors font-medium">
            View more
          </button>
        </CardContent>
      </Card>

      {/* Suggested Users Widget */}
      <Card className="border-border/40 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm w-full overflow-hidden">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Users className="size-4 text-primary" />
            Who to Follow
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1 pt-0">
          {[
            { name: "Tech Guru", username: "techguru" },
            { name: "Design Pro", username: "designpro" },
            { name: "Code Master", username: "codemaster" },
          ].map((user, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-accent/50 transition-colors cursor-pointer group"
            >
              <div className="size-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-semibold text-primary">
                  {user.name.charAt(0)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm truncate group-hover:text-primary transition-colors">
                  {user.name}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  @{user.username}
                </p>
              </div>
              <button className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors">
                Follow
              </button>
            </div>
          ))}
          
          {/* View More Button */}
          <button className="w-full p-2 rounded-md text-sm text-primary hover:bg-accent/50 transition-colors font-medium">
            View more
          </button>
        </CardContent>
      </Card>

      {/* Footer Links */}
      <div className="px-3 py-2 text-xs text-muted-foreground space-x-2">
        <a href="#" className="hover:underline">Terms</a>
        <span>·</span>
        <a href="#" className="hover:underline">Privacy</a>
        <span>·</span>
        <a href="#" className="hover:underline">About</a>
        <p className="mt-1">© 2025 Social Network</p>
      </div>
    </aside>
  );
}
