import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ActivitiesSection } from "@/components/activities-section"
import { ConservationSection } from "@/components/conservation-section"
import { GallerySection } from "@/components/gallery-section"
import { VisitorInfoSection } from "@/components/visitor-info-section"
import { Footer } from "@/components/footer"

export default function EcoturismoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
        <ConservationSection />
        <GallerySection />
        <VisitorInfoSection />
      </main>
      <Footer />
    </div>
  )
}
