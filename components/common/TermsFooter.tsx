/**
 * TermsFooter Component
 * 
 * Komponen reusable untuk menampilkan teks terms & conditions dan privacy policy.
 * Terletak di /components/common/ karena bisa digunakan di berbagai halaman auth.
 * 
 * Fitur:
 * - Link ke Terms & Conditions
 * - Link ke Privacy Policy
 * - Responsive text alignment
 * - Hover effects pada links
 * 
 * Props:
 * - align: Text alignment - "center" | "left" (default: "center-md-left")
 * - termsUrl: URL untuk terms & conditions (default: "#")
 * - privacyUrl: URL untuk privacy policy (default: "#")
 * 
 * Usage:
 * <TermsFooter />
 * <TermsFooter align="center" termsUrl="/terms" privacyUrl="/privacy" />
 */

interface TermsFooterProps {
  align?: "center" | "left" | "center-md-left";
  termsUrl?: string;
  privacyUrl?: string;
}

export function TermsFooter({
  align = "center-md-left",
  termsUrl = "#",
  privacyUrl = "#",
}: TermsFooterProps) {
  const alignmentClass =
    align === "center"
      ? "text-center"
      : align === "left"
      ? "text-left"
      : "text-center md:text-left";

  return (
    <p className={`text-xs text-muted-foreground/60 px-4 ${alignmentClass}`}>
      Dengan mendaftar, Anda menyetujui{" "}
      <a
        href={termsUrl}
        className="text-primary hover:underline cursor-pointer transition-colors"
      >
        Syarat & Ketentuan
      </a>{" "}
      dan{" "}
      <a
        href={privacyUrl}
        className="text-primary hover:underline cursor-pointer transition-colors"
      >
        Kebijakan Privasi
      </a>{" "}
      kami.
    </p>
  );
}
