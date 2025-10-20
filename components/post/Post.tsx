"use client";

import * as React from "react";
import Link from "next/link";
import { Heart, MessageCircle, Repeat2, Share } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Post Component (Modern & Improved)
 *
 * Komponen untuk menampilkan posting individu di Timeline.
 * Terletak di /components/post/ sebagai komponen reusable untuk feed.
 *
 * Fitur Modern:
 * - Card dengan rounded-xl dan gradient background halus
 * - Avatar pengguna dengan hover ring glow effect
 * - Nama, username, dan timestamp yang informatif
 * - Konten post (max 280 karakter, text-only)
 * - Tombol aksi (Like, Comment, Retweet, Share) dengan ikon lucide-react
 * - Hover effects pada semua tombol (scale, warna aksen)
 * - Timestamp clickable untuk detail post
 * - Shadow subtle untuk depth
 *
 * Design Features:
 * - Background gradient (from-background to-muted/20)
 * - Rounded corners dan padding nyaman
 * - Typography clean dengan hierarchy jelas
 * - Interactive elements dengan smooth transitions
 * - Responsive layout (full width di mobile, constrained di desktop)
 *
 * Props:
 * - post: Object dengan data posting (author, content, timestamp, stats)
 *
 * Dependencies: lucide-react (npm install lucide-react)
 */

export interface PostData {
  id: string;
  author: {
    name: string;
    username: string;
    avatar?: string;
  };
  content: string;
  timestamp: string;
  stats: {
    likes: number;
    comments: number;
    retweets: number;
  };
}

interface PostProps {
  post: PostData;
}

export function Post({ post }: PostProps) {
  const [isLiked, setIsLiked] = React.useState(false);
  const [isRetweeted, setIsRetweeted] = React.useState(false);

  return (
    <Card className="p-4 bg-gradient-to-br from-card to-card/50 border-border/40 hover:border-border/60 transition-all duration-200 hover:shadow-lg">
      <div className="flex gap-3">
        {/* Avatar */}
        <Link
          href={`/profile/${post.author.username}`}
          className="flex-shrink-0 group"
        >
          <div className="size-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ring-2 ring-transparent group-hover:ring-primary/50 transition-all duration-200">
            {post.author.avatar ? (
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="size-full rounded-full object-cover"
              />
            ) : (
              <span className="text-lg font-semibold text-primary">
                {post.author.name.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
        </Link>

        {/* Content */}
        <div className="flex-1 min-w-0 space-y-2">
          {/* Header */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <Link
                href={`/profile/${post.author.username}`}
                className="font-semibold text-foreground hover:underline"
              >
                {post.author.name}
              </Link>
              <Link
                href={`/profile/${post.author.username}`}
                className="text-sm text-muted-foreground hover:underline"
              >
                @{post.author.username}
              </Link>
              <span className="text-sm text-muted-foreground">·</span>
              <Link
                href={`/post/${post.id}`}
                className="text-sm text-muted-foreground hover:underline"
              >
                {post.timestamp}
              </Link>
            </div>
          </div>

          {/* Post Content */}
          <p className="text-foreground leading-relaxed whitespace-pre-wrap break-words">
            {post.content}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-2 max-w-md">
            {/* Comment */}
            <Button
              variant="ghost"
              size="sm"
              className="group hover:bg-blue-500/10 hover:text-blue-500 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="size-4 mr-1.5 group-hover:fill-blue-500/20" />
              <span className="text-xs">{post.stats.comments}</span>
            </Button>

            {/* Retweet */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsRetweeted(!isRetweeted)}
              className={cn(
                "group hover:bg-green-500/10 transition-all duration-200 hover:scale-105 active:scale-95",
                isRetweeted
                  ? "text-green-500"
                  : "hover:text-green-500"
              )}
            >
              <Repeat2
                className={cn(
                  "size-4 mr-1.5 transition-transform",
                  isRetweeted && "fill-green-500/20"
                )}
              />
              <span className="text-xs">{post.stats.retweets}</span>
            </Button>

            {/* Like */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsLiked(!isLiked)}
              className={cn(
                "group hover:bg-pink-500/10 transition-all duration-200 hover:scale-105 active:scale-95",
                isLiked ? "text-pink-500" : "hover:text-pink-500"
              )}
            >
              <Heart
                className={cn(
                  "size-4 mr-1.5 transition-all",
                  isLiked && "fill-pink-500"
                )}
              />
              <span className="text-xs">{post.stats.likes}</span>
            </Button>

            {/* Share */}
            <Button
              variant="ghost"
              size="sm"
              className="group hover:bg-primary/10 hover:text-primary transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Share className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
