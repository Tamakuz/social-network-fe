"use client"

import * as React from "react"
import Link from "next/link"
import { User, Mail, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

/**
 * RegisterForm Component (Modern & Improved)
 * 
 * Komponen UI untuk halaman registrasi pada aplikasi media sosial mirip Twitter.
 * Terletak di /components/auth/ sesuai struktur foldering untuk komponen autentikasi.
 * 
 * Fitur Modern:
 * - Form input dengan icon dari lucide-react (User, Mail, Lock)
 * - Focus ring yang halus dan border glow pada input
 * - Tombol submit dengan hover effect (scale & shadow transition)
 * - Link redirect ke halaman login dengan underline hover minimalis
 * - Desain premium: rounded corners besar, spacing luas, gradient subtle
 * - Dark mode only dengan Tailwind CSS dan shadcn/ui
 * - Responsif (mobile-first)
 * 
 * Design Improvements:
 * - Gradient background pada card untuk efek modern
 * - Icon pada setiap input field untuk visual clarity
 * - Smooth transitions pada semua interaksi
 * - Typography yang clean dengan font sans-serif
 * 
 * Catatan: Komponen ini hanya fokus pada UI, tanpa logika autentikasi atau API calls.
 * Props onSubmit bisa ditambahkan untuk form handling di parent component.
 */

export function RegisterForm() {
  return (
    <Card className="w-full max-w-md border-border/40 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-xl">
      <CardHeader className="space-y-2 pb-8">
        <CardTitle className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
          Buat akun baru
        </CardTitle>
        <CardDescription className="text-base text-muted-foreground/90">
          Bergabunglah dengan komunitas kami hari ini
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Nama Lengkap Input with Icon */}
        <div className="space-y-2">
          <Label htmlFor="fullname" className="text-sm font-medium">
            Nama Lengkap
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/70" />
            <Input
              id="fullname"
              type="text"
              placeholder="Masukkan nama lengkap"
              className="pl-10 h-11 transition-all duration-200 hover:border-primary/50 focus:border-primary"
              required
            />
          </div>
        </div>

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
          <Label htmlFor="password" className="text-sm font-medium">
            Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/70" />
            <Input
              id="password"
              type="password"
              placeholder="Buat password yang kuat"
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
          Daftar Sekarang
        </Button>
        <div className="text-sm text-muted-foreground/80 text-center">
          Sudah punya akun?{" "}
          <Link
            href="/login"
            className="text-primary font-semibold hover:underline underline-offset-4 transition-all duration-200 hover:text-primary/90"
          >
            Masuk di sini
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
