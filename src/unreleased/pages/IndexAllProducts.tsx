import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ComparisonSection from "../components/ComparisonSection";
import SolutionsSection from "../components/SolutionsSection";
import WhoWeServeSection from "../components/WhoWeServeSection";
import NeevSpotlight from "../components/NeevSpotlight";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ComparisonSection />
    <SolutionsSection />
    <WhoWeServeSection />
    <NeevSpotlight />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
