"use client";

import * as React from "react";
import { TrendingUp, Hash } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * TrendingSection Component (Modern & Engaging)
 *
 * Section untuk menampilkan trending topics dengan desain menarik.
 * Terletak di /components/explore/ sebagai bagian dari Explore Page.
 *
 * Features:
 * - Grid layout untuk trending topics
 * - Hover effects yang smooth
 * - Stats untuk setiap topic (posts count)
 * - Clickable cards
 * - Gradient backgrounds
 * - Responsive design
 *
 * Props:
 * - topics: array of trending topics
 * - onTopicClick: function (callback saat topic diklik)
 *
 * Dependencies: lucide-react (npm install lucide-react)
 */

interface TrendingTopic {
  id: string;
  topic: string;
  posts: string;
  category?: string;
}

interface TrendingSectionProps {
  topics?: TrendingTopic[];
  onTopicClick?: (topic: TrendingTopic) => void;
}

const defaultTopics: TrendingTopic[] = [
  { id: "1", topic: "#WebDevelopment", posts: "125.5K", category: "Technology" },
  { id: "2", topic: "#NextJS", posts: "89.3K", category: "Technology" },
  { id: "3", topic: "#UIDesign", posts: "67.8K", category: "Design" },
  { id: "4", topic: "#DarkMode", posts: "45.2K", category: "Design" },
  { id: "5", topic: "#TypeScript", posts: "38.9K", category: "Technology" },
  { id: "6", topic: "#React", posts: "156.7K", category: "Technology" },
  { id: "7", topic: "#TailwindCSS", posts: "72.4K", category: "Design" },
  { id: "8", topic: "#JavaScript", posts: "234.1K", category: "Technology" },
];

export function TrendingSection({
  topics = defaultTopics,
  onTopicClick,
}: TrendingSectionProps) {
  const handleTopicClick = (topic: TrendingTopic) => {
    onTopicClick?.(topic);
    console.log("Topic clicked:", topic);
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="size-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ring-2 ring-primary/20">
                <TrendingUp className="size-6 text-primary" />
              </div>
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-50" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Trending Now
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Discover what's popular today
              </p>
            </div>
          </div>
          
          {/* View All Button */}
          <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-muted/30 hover:bg-primary/20 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
            <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
              View All
            </span>
            <TrendingUp className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        </div>
        
        {/* Decorative Line */}
        <div className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      </div>

      {/* Trending Topics Grid - 3 Columns Max */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic, index) => (
          <Card
            key={topic.id}
            onClick={() => handleTopicClick(topic)}
            className="group relative cursor-pointer border-border/40 bg-gradient-to-br from-card via-card/80 to-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>

            <CardContent className="relative p-6 space-y-4">
              {/* Header with Rank & Category */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  {/* Rank Badge */}
                  <div className="relative flex-shrink-0">
                    <div className="size-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300">
                      <span className="text-base font-bold text-primary">
                        #{index + 1}
                      </span>
                    </div>
                    {index < 3 && (
                      <div className="absolute -top-1 -right-1 size-3 rounded-full bg-primary animate-pulse" />
                    )}
                  </div>
                  
                  {/* Category Badge */}
                  {topic.category && (
                    <span className="px-3 py-1.5 rounded-lg bg-muted/50 text-xs font-medium text-muted-foreground whitespace-nowrap">
                      {topic.category}
                    </span>
                  )}
                </div>
              </div>

              {/* Topic */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {topic.topic}
                </h3>
                <div className="h-1 w-0 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-500" />
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between pt-4 border-t border-border/30">
                <span className="text-sm text-muted-foreground">Posts</span>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {topic.posts}
                  </span>
                  <div className="size-2 rounded-full bg-primary/50 group-hover:bg-primary animate-pulse" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
