import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import BrandStorySection from "@/components/sections/BrandStorySection";
import SignatureCollectionSection from "@/components/sections/SignatureCollectionSection";
import CraftsmanshipSection from "@/components/sections/CraftsmanshipSection";
import EditorialLookbookSection from "@/components/sections/EditorialLookbookSection";
import PrivateAppointmentsSection from "@/components/sections/PrivateAppointmentsSection";
import ShopCollectionSection from "@/components/sections/ShopCollectionSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <BrandStorySection />
      <SignatureCollectionSection />
      <CraftsmanshipSection />
      <EditorialLookbookSection />
      <PrivateAppointmentsSection />
      <ShopCollectionSection />
      <Footer />
    </main>
  );
}
