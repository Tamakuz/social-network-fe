import { MainLayout } from "@/components/layout/MainLayout";
import { Timeline } from "@/components/timeline/Timeline";

/**
 * Home Page
 *
 * Halaman utama aplikasi media sosial mirip Twitter.
 * Menggunakan MainLayout dengan Sidebar, Timeline, dan Widget area.
 *
 * Layout:
 * - Desktop: Grid 3 kolom (Sidebar, Timeline, Widget)
 * - Mobile: Stack vertikal dengan Sidebar collapsible
 *
 * Features:
 * - Timeline dengan dummy posts
 * - Sidebar navigasi dengan active state
 * - Widget area dengan trending topics dan suggested users
 * - Video promo placeholder
 * - Smooth scrolling dan responsive design
 */

export default function Home() {
  return (
    <MainLayout>
      <Timeline />
    </MainLayout>
  );
}
