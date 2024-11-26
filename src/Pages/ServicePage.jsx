import InnerSection from "@/components/Common/InnerSection";
import FaqSection from "@/components/HomePageComponents/FaqSection";
import AllTreatmentSection from "@/components/ServicePageComponents/AllTreatmentSection";
import serviceHeroBg from "../assets/images/service-hero-bg.png";

function ServicePage() {
  return (
    <div>
      {/* <HeroSection /> */}
      <InnerSection bgImg={serviceHeroBg} service="HealthCare Services" />
      <AllTreatmentSection />
      <FaqSection />
    </div>
  );
}

export default ServicePage;
