"use client";

import * as React from "react";
import { Post, type PostData } from "@/components/post/Post";

/**
 * Timeline Component (Modern & Improved)
 *
 * Komponen untuk menampilkan feed/timeline posting.
 * Terletak di /components/timeline/ sebagai container untuk daftar Post.
 *
 * Fitur Modern:
 * - Daftar posting dengan smooth scrolling
 * - Spacing nyaman antar kartu posting
 * - Responsive layout (full width di mobile, constrained di desktop)
 * - Placeholder data untuk demo
 * - Header "For You" untuk menunjukkan feed type
 * - Infinite scroll ready (bisa ditambahkan nanti)
 *
 * Design Features:
 * - Clean layout dengan padding konsisten
 * - Smooth scrolling dengan overflow handling
 * - Typography hierarchy yang jelas
 * - Spacing optimal untuk readability
 *
 * Props:
 * - posts: Array of PostData (optional, menggunakan dummy data jika tidak ada)
 *
 * Dependencies: lucide-react (npm install lucide-react)
 */

// Dummy data untuk demo
const dummyPosts: PostData[] = [
  {
    id: "1",
    author: {
      name: "John Doe",
      username: "johndoe",
    },
    content:
      "Just launched my new project! 🚀 Excited to share it with everyone. Check it out and let me know what you think!",
    timestamp: "2h ago",
    stats: {
      likes: 124,
      comments: 23,
      retweets: 45,
    },
  },
  {
    id: "2",
    author: {
      name: "Jane Smith",
      username: "janesmith",
    },
    content:
      "Beautiful sunset today 🌅 Sometimes you just need to take a moment and appreciate the little things in life.",
    timestamp: "4h ago",
    stats: {
      likes: 89,
      comments: 12,
      retweets: 8,
    },
  },
  {
    id: "3",
    author: {
      name: "Alex Johnson",
      username: "alexj",
    },
    content:
      "Hot take: Dark mode is not just a preference, it's a lifestyle. Who else agrees? 🌙",
    timestamp: "6h ago",
    stats: {
      likes: 256,
      comments: 67,
      retweets: 34,
    },
  },
  {
    id: "4",
    author: {
      name: "Sarah Williams",
      username: "sarahw",
    },
    content:
      "Just finished reading an amazing book on UI/UX design. The principles are timeless and so applicable to modern web development!",
    timestamp: "8h ago",
    stats: {
      likes: 178,
      comments: 45,
      retweets: 23,
    },
  },
  {
    id: "5",
    author: {
      name: "Mike Chen",
      username: "mikechen",
    },
    content:
      "Coffee + Code = Productivity ☕️💻 What's your favorite coding setup?",
    timestamp: "10h ago",
    stats: {
      likes: 312,
      comments: 89,
      retweets: 56,
    },
  },
  {
    id: "6",
    author: {
      name: "Emily Davis",
      username: "emilyd",
    },
    content:
      "Reminder: Take breaks, drink water, and don't forget to stretch! Your body will thank you later. 💪",
    timestamp: "12h ago",
    stats: {
      likes: 445,
      comments: 34,
      retweets: 78,
    },
  },
  {
    id: "7",
    author: {
      name: "David Brown",
      username: "davidb",
    },
    content:
      "Working on a new feature for our app. The team is amazing and I'm so grateful to be part of this journey! 🙌",
    timestamp: "14h ago",
    stats: {
      likes: 201,
      comments: 28,
      retweets: 19,
    },
  },
  {
    id: "8",
    author: {
      name: "Lisa Anderson",
      username: "lisaa",
    },
    content:
      "Just discovered this amazing new restaurant downtown. The food is incredible! 🍕 Highly recommend checking it out.",
    timestamp: "16h ago",
    stats: {
      likes: 167,
      comments: 42,
      retweets: 15,
    },
  },
  {
    id: "9",
    author: {
      name: "Ryan Martinez",
      username: "ryanm",
    },
    content:
      "Finally finished that side project I've been working on for months! The feeling of accomplishment is unreal. Time to ship it! 🚢",
    timestamp: "18h ago",
    stats: {
      likes: 289,
      comments: 56,
      retweets: 41,
    },
  },
  {
    id: "10",
    author: {
      name: "Sophie Taylor",
      username: "sophiet",
    },
    content:
      "Pro tip: Always write tests before you push to production. Trust me, your future self will thank you! 🧪✨",
    timestamp: "20h ago",
    stats: {
      likes: 423,
      comments: 78,
      retweets: 92,
    },
  },
  {
    id: "11",
    author: {
      name: "Chris Wilson",
      username: "chrisw",
    },
    content:
      "The new React 19 features are mind-blowing! Can't wait to implement them in our next project. The future of web dev is here! 🔥",
    timestamp: "22h ago",
    stats: {
      likes: 567,
      comments: 134,
      retweets: 156,
    },
  },
  {
    id: "12",
    author: {
      name: "Emma Garcia",
      username: "emmag",
    },
    content:
      "Morning motivation: Every expert was once a beginner. Keep learning, keep growing! 💪📚",
    timestamp: "1d ago",
    stats: {
      likes: 892,
      comments: 45,
      retweets: 234,
    },
  },
  {
    id: "13",
    author: {
      name: "James Lee",
      username: "jamesl",
    },
    content:
      "Debugging for 3 hours straight... turns out it was a missing semicolon. Classic developer moment 😅",
    timestamp: "1d ago",
    stats: {
      likes: 1203,
      comments: 189,
      retweets: 267,
    },
  },
  {
    id: "14",
    author: {
      name: "Olivia Brown",
      username: "oliviab",
    },
    content:
      "Just attended an amazing tech conference! So many brilliant minds in one place. Feeling inspired and ready to build something awesome! 🎯",
    timestamp: "1d ago",
    stats: {
      likes: 345,
      comments: 67,
      retweets: 89,
    },
  },
  {
    id: "15",
    author: {
      name: "Daniel Kim",
      username: "danielk",
    },
    content:
      "Hot take: Documentation is just as important as the code itself. Good docs = happy developers = better products. 📝",
    timestamp: "1d ago",
    stats: {
      likes: 678,
      comments: 123,
      retweets: 178,
    },
  },
  {
    id: "16",
    author: {
      name: "Ava Martinez",
      username: "avam",
    },
    content:
      "Weekend project: Built a Chrome extension that saves me 2 hours a week. Small automations make a big difference! 🤖",
    timestamp: "2d ago",
    stats: {
      likes: 456,
      comments: 89,
      retweets: 123,
    },
  },
  {
    id: "17",
    author: {
      name: "Noah Johnson",
      username: "noahj",
    },
    content:
      "Shoutout to all the open source contributors out there! You make the dev community amazing. Thank you! 🙏💚",
    timestamp: "2d ago",
    stats: {
      likes: 1567,
      comments: 234,
      retweets: 456,
    },
  },
  {
    id: "18",
    author: {
      name: "Isabella White",
      username: "isabellaw",
    },
    content:
      "Just deployed to production on a Friday... I like to live dangerously 😎 (jk, we have great CI/CD and tests)",
    timestamp: "2d ago",
    stats: {
      likes: 892,
      comments: 156,
      retweets: 201,
    },
  },
  {
    id: "19",
    author: {
      name: "Ethan Davis",
      username: "ethand",
    },
    content:
      "Learning a new programming language is like learning a new way to think. Currently diving into Rust and loving it! 🦀",
    timestamp: "2d ago",
    stats: {
      likes: 534,
      comments: 98,
      retweets: 145,
    },
  },
  {
    id: "20",
    author: {
      name: "Mia Rodriguez",
      username: "miar",
    },
    content:
      "Remember: Code is read more often than it's written. Write for humans first, computers second. Clean code matters! ✨",
    timestamp: "3d ago",
    stats: {
      likes: 1234,
      comments: 267,
      retweets: 389,
    },
  },
];

interface TimelineProps {
  posts?: PostData[];
}

export function Timeline({ posts = dummyPosts }: TimelineProps) {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border/50 px-4 py-3">
        <h2 className="text-xl font-bold text-foreground">For You</h2>
      </div>

      {/* Posts List */}
      <div className="space-y-4 p-4">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}

        {/* Load More Indicator (Placeholder) */}
        <div className="text-center py-8">
          <p className="text-sm text-muted-foreground">
            You're all caught up! 🎉
          </p>
        </div>
      </div>
    </div>
  );
}
