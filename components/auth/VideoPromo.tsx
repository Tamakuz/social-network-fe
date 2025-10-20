"use client";

import { Sparkles } from "lucide-react";

/**
 * VideoPromo Component
 * 
 * Komponen untuk menampilkan video promo atau demo aplikasi di halaman register/login.
 * Terletak di /components/auth/ karena spesifik untuk halaman autentikasi.
 * 
 * Fitur:
 * - Video container dengan aspect ratio square dan max-height 70vh
 * - Fixed positioning untuk tidak ikut scroll
 * - Placeholder content dengan animasi pulse
 * - Feature highlights (statistik pengguna, posts, negara)
 * - Decorative blur elements untuk efek modern
 * - Fully responsive (hidden di mobile, visible di desktop)
 * 
 * Props:
 * - videoSrc (optional): URL video untuk ditampilkan
 * - videoPoster (optional): Poster/thumbnail video
 * 
 * Catatan: Komponen ini UI-only, video bisa ditambahkan dengan mengganti videoSrc prop.
 */

interface VideoPromoProps {
  videoSrc?: string;
  videoPoster?: string;
}

export function VideoPromo({ videoSrc, videoPoster }: VideoPromoProps) {
  return (
    <div className="hidden md:flex md:fixed md:right-0 md:top-0 md:w-1/2 md:h-screen items-center justify-center bg-gradient-to-br from-muted/30 to-muted/10 p-8 lg:p-12 relative overflow-hidden">
      <div className="w-full max-w-lg space-y-6 relative z-10">
        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
          {/* Video Content */}
          <div className="aspect-square max-h-[70vh] bg-gradient-to-br from-primary/20 via-muted/40 to-accent/20 flex items-center justify-center relative">
            {/* Video Element */}
            {videoSrc && (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                poster={videoPoster}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            )}

            {/* Placeholder Content (Shown when no video) */}
            {!videoSrc && (
              <div className="relative z-10 text-center space-y-4 p-8">
                <div className="size-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Sparkles className="size-10 text-primary animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Jelajahi Dunia Baru
                </h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  Bagikan momen, terhubung dengan teman, dan temukan konten
                  menarik setiap hari
                </p>
                <div className="flex gap-2 justify-center pt-4">
                  <div className="size-2 rounded-full bg-primary animate-pulse" />
                  <div className="size-2 rounded-full bg-primary/60 animate-pulse delay-100" />
                  <div className="size-2 rounded-full bg-primary/40 animate-pulse delay-200" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="space-y-1">
            <p className="text-2xl font-bold text-foreground">10M+</p>
            <p className="text-xs text-muted-foreground">Pengguna Aktif</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-foreground">50M+</p>
            <p className="text-xs text-muted-foreground">Post Harian</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-foreground">100+</p>
            <p className="text-xs text-muted-foreground">Negara</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 size-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 size-40 bg-accent/10 rounded-full blur-3xl" />
    </div>
  );
}
