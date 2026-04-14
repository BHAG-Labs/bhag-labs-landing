import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import MethodologySection from "@/components/MethodologySection";
import WhyUsSection from "@/components/WhyUsSection";
import ComparisonSection from "@/components/ComparisonSection";
import NeevSpotlight from "@/components/NeevSpotlight";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <SolutionsSection />
    <WhoWeServeSection />
    <MethodologySection />
    <WhyUsSection />
    <ComparisonSection />
    <NeevSpotlight />
    <CtaSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
