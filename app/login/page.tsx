import { LoginForm } from "@/components/auth/LoginForm";
import { VideoPromo } from "@/components/auth/VideoPromo";
import { BrandSection } from "@/components/common/BrandSection";
import { TermsFooter } from "@/components/common/TermsFooter";
import type { Metadata } from "next";

/**
 * Login Page (Modern & Improved)
 *
 * Halaman login untuk aplikasi media sosial mirip Twitter.
 * Menggunakan Next.js 14 App Router dengan komponen-komponen terpisah yang terorganisir.
 *
 * Struktur Komponen:
 * - LoginForm: Form login dari /components/auth/
 * - VideoPromo: Video promo/demo dari /components/auth/
 * - BrandSection: Brand/logo section dari /components/common/
 * - TermsFooter: Terms & privacy links dari /components/common/
 *
 * Layout Modern:
 * - Grid dua kolom di desktop: Form di kiri, video promo di kanan (fixed)
 * - Stack vertikal di mobile: Form di atas, video hidden
 * - Gradient background untuk efek premium
 * - Smooth transitions dan modern spacing
 *
 * Design Features:
 * - Responsive grid layout (grid-cols-1 md:grid-cols-2)
 * - Video fixed position tidak ikut scroll
 * - Dark mode only dengan visual engaging
 * - Komponen reusable dan maintainable
 * - Konsisten dengan halaman register untuk kohesi visual
 */

export const metadata: Metadata = {
  title: "Masuk | Social Network",
  description: "Masuk ke akun Anda untuk terhubung dengan komunitas kami",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left Column - Login Form */}
        <div className="flex items-center justify-center p-6 md:p-8 lg:p-12">
          <div className="w-full max-w-md space-y-8">
            {/* Brand Section */}
            <BrandSection />

            {/* Login Form Component */}
            <LoginForm />

            {/* Terms & Privacy Footer */}
            <TermsFooter />
          </div>
        </div>

        {/* Right Column - Video Promo (Fixed, Hidden on Mobile) */}
        <VideoPromo />
      </div>
    </main>
  );
}
