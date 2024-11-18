import FaqSection from "@/components/HomePageComponents/FaqSection";
import AllTreatmentSection from "@/components/ServicePageComponents/AllTreatmentSection";
import HeroSection from "@/components/ServicePageComponents/HeroSection";

function ServicePage() {
  return (
    <div>
      <HeroSection />
      <AllTreatmentSection />
      <FaqSection />
    </div>
  );
}

export default ServicePage;
