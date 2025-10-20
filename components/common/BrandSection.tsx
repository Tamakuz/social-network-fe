import { Sparkles } from "lucide-react";

/**
 * BrandSection Component
 * 
 * Komponen reusable untuk menampilkan brand/logo aplikasi dengan tagline.
 * Terletak di /components/common/ karena bisa digunakan di berbagai halaman.
 * 
 * Fitur:
 * - Brand icon dengan background rounded
 * - App name/title
 * - Tagline/description
 * - Responsive text alignment (center di mobile, left di desktop)
 * - Customizable via props
 * 
 * Props:
 * - title: Nama aplikasi (default: "Social Network")
 * - tagline: Tagline aplikasi (default: "Terhubung dengan orang-orang di seluruh dunia")
 * - icon: React component untuk icon (default: Sparkles)
 * - align: Text alignment - "center" | "left" (default: "center-md-left")
 * 
 * Usage:
 * <BrandSection />
 * <BrandSection title="MyApp" tagline="Connect with friends" />
 */

interface BrandSectionProps {
  title?: string;
  tagline?: string;
  icon?: React.ComponentType<{ className?: string }>;
  align?: "center" | "left" | "center-md-left";
}

export function BrandSection({
  title = "Social Network",
  tagline = "Terhubung dengan orang-orang di seluruh dunia",
  icon: Icon = Sparkles,
  align = "center-md-left",
}: BrandSectionProps) {
  const alignmentClass =
    align === "center"
      ? "text-center"
      : align === "left"
      ? "text-left"
      : "text-center md:text-left";

  return (
    <div className={`space-y-3 ${alignmentClass}`}>
      <div className="inline-flex items-center gap-2 mb-2">
        <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="size-6 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          {title}
        </h1>
      </div>
      <p className="text-muted-foreground text-base md:text-lg">{tagline}</p>
    </div>
  );
}
