"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * LoginForm Component (Modern & Improved)
 *
 * Komponen UI untuk halaman login pada aplikasi media sosial mirip Twitter.
 * Terletak di /components/auth/ sesuai struktur foldering untuk komponen autentikasi.
 *
 * Fitur Modern:
 * - Form input dengan icon dari lucide-react (Mail, Lock)
 * - Focus ring yang halus dan border glow pada input
 * - Tombol submit dengan hover effect (scale & shadow transition)
 * - Link redirect ke halaman register dengan underline hover minimalis
 * - Desain premium: rounded corners besar, spacing luas, gradient subtle
 * - Dark mode only dengan Tailwind CSS dan shadcn/ui
 * - Responsif (mobile-first)
 *
 * Design Improvements:
 * - Gradient background pada card untuk efek modern
 * - Icon pada setiap input field untuk visual clarity
 * - Smooth transitions pada semua interaksi
 * - Typography yang clean dengan font sans-serif
 * - Konsisten dengan RegisterForm untuk kohesi visual
 *
 * Catatan: Komponen ini hanya fokus pada UI, tanpa logika autentikasi atau API calls.
 * Props onSubmit bisa ditambahkan untuk form handling di parent component.
 *
 * Dependencies: lucide-react (npm install lucide-react)
 */

export function LoginForm() {
  return (
    <Card className="w-full max-w-md border-border/40 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-xl">
      <CardHeader className="space-y-2 pb-8">
        <CardTitle className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
          Selamat datang kembali
        </CardTitle>
        <CardDescription className="text-base text-muted-foreground/90">
          Masuk ke akun Anda untuk melanjutkan
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Email Input with Icon */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/70" />
            <Input
              id="email"
              type="email"
              placeholder="nama@example.com"
              className="pl-10 h-11 transition-all duration-200 hover:border-primary/50 focus:border-primary"
              required
            />
          </div>
        </div>

        {/* Password Input with Icon */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <Link
              href="/forgot-password"
              className="text-xs text-primary hover:underline underline-offset-4 transition-colors"
            >
              Lupa password?
            </Link>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/70" />
            <Input
              id="password"
              type="password"
              placeholder="Masukkan password Anda"
              className="pl-10 h-11 transition-all duration-200 hover:border-primary/50 focus:border-primary"
              required
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-5 pt-2">
        <Button
          className="w-full h-11 font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
          size="lg"
        >
          Masuk
        </Button>
        <div className="text-sm text-muted-foreground/80 text-center">
          Belum punya akun?{" "}
          <Link
            href="/register"
            className="text-primary font-semibold hover:underline underline-offset-4 transition-all duration-200 hover:text-primary/90"
          >
            Daftar sekarang
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
