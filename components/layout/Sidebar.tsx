"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Search,
  Bell,
  User,
  Plus,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CreatePostModal } from "@/components/post/CreatePostModal";

/**
 * Sidebar Component (Modern & Improved)
 *
 * Komponen navigasi utama untuk aplikasi media sosial mirip Twitter.
 * Terletak di /components/layout/ sebagai bagian dari struktur layout aplikasi.
 *
 * Fitur Modern:
 * - Menu navigasi vertikal dengan ikon besar dari lucide-react
 * - Logo aplikasi di atas dengan icon Sparkles
 * - Active state dengan visual jelas (border kiri tebal + warna aksen)
 * - Hover effects dengan scale dan background change
 * - Tombol "Post" yang menonjol dengan warna aksen
 * - Collapsible di mobile dengan hamburger menu
 * - Animasi slide-in/out yang smooth
 * - Sticky positioning di desktop
 *
 * Design Features:
 * - Background gelap dengan teks putih/abu
 * - Rounded edges pada button dengan hover effect
 * - Active state ditandai dengan border kiri dan warna aksen
 * - Responsive: Full sidebar di desktop, hamburger menu di mobile
 * - Smooth transitions pada semua interaksi
 *
 * Dependencies: lucide-react (npm install lucide-react)
 */

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "Explore", href: "/explore", icon: Search },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Profile", href: "/profile", icon: User },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isPostModalOpen, setIsPostModalOpen] = React.useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handlePost = (content: string, images?: string[]) => {
    console.log("Post created:", { content, images });
    // TODO: Implement post creation API call
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </Button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen w-64 bg-background border-r border-border/50 z-40 transition-transform duration-300 ease-in-out",
          "lg:sticky lg:top-0 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full p-4 space-y-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 p-3 rounded-xl hover:bg-accent/50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="size-6 text-primary" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Social Network
            </span>
          </Link>

          {/* Navigation Items */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200",
                    "hover:bg-accent/50 hover:scale-[1.02] active:scale-[0.98]",
                    "relative group",
                    isActive
                      ? "bg-accent/30 text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
                  )}

                  <Icon
                    className={cn(
                      "size-6 transition-colors",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )}
                  />
                  <span className="text-lg">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Post Button */}
          <Button
            className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] group"
            onClick={() => {
              setIsPostModalOpen(true);
              setIsOpen(false);
            }}
          >
            <Plus className="size-5 mr-2 group-hover:rotate-90 transition-transform duration-200" />
            Post
          </Button>

          {/* User Profile Section */}
          <Link
            href="/profile"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent/50 transition-colors"
          >
            <div className="size-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <User className="size-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">
                Your Name
              </p>
              <p className="text-xs text-muted-foreground truncate">
                @username
              </p>
            </div>
          </Link>
        </div>
      </aside>

      {/* Create Post Modal */}
      <CreatePostModal
        open={isPostModalOpen}
        onOpenChange={setIsPostModalOpen}
        onPost={handlePost}
      />
    </>
  );
}
