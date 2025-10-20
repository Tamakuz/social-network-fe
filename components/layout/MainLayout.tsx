"use client";

import * as React from "react";
import { Sidebar } from "./Sidebar";
import { WidgetArea } from "./WidgetArea";

/**
 * MainLayout Component (Modern & Improved)
 *
 * Layout utama untuk aplikasi media sosial mirip Twitter.
 * Terletak di /components/layout/ sebagai wrapper untuk halaman utama.
 *
 * Fitur Modern:
 * - Grid tiga kolom di desktop: Sidebar (20-25%), Content (50%), Widget (25-30%)
 * - Stack vertikal di mobile: Sidebar collapsible, Content full width, Widget hidden
 * - Sticky Sidebar di desktop untuk navigasi yang selalu terlihat
 * - Widget area dengan trending topics dan suggested users
 * - Video promo placeholder di widget area
 * - Smooth scrolling untuk content area
 * - Gradient background untuk efek premium
 *
 * Design Features:
 * - Responsive grid layout dengan breakpoints optimal
 * - Background gradient (from-background via-background to-muted/20)
 * - Widget cards dengan rounded-xl dan shadow
 * - Smooth transitions dan hover effects
 * - Visual hierarchy yang jelas
 *
 * Props:
 * - children: React.ReactNode (content area, biasanya Timeline)
 *
 * Dependencies: lucide-react (npm install lucide-react)
 */

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-[1600px] mx-auto px-32">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_320px] gap-0">
          {/* Sidebar - Left Column */}
          <Sidebar />

          {/* Main Content - Center Column */}
          <main className="min-h-screen border-x border-border/50 min-w-0">
            {children}
          </main>

          {/* Widget Area - Right Column (Hidden on Mobile) */}
          <div className="hidden lg:block min-w-0">
            <WidgetArea />
          </div>
        </div>
      </div>
    </div>
  );
}
