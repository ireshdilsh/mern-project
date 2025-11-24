import AboutSection from "../sections/AboutSection";
import FeaturesSection from "../sections/FeaturesSection";
import GallerySection from "../sections/GallerySection";
import HeroSection from "../sections/HeroSection";
import HowItWorks from "../sections/HowItWorks";
import PricingSection from "../sections/PricingSection";

export default function Landing() {

  return (
    <div>
      <HeroSection/>
      <FeaturesSection/>
      <HowItWorks/>
      <PricingSection/>
      <AboutSection/>
      <GallerySection/>
    </div>
  )
}
