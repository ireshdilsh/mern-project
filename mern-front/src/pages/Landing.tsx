import AboutSection from "../sections/AboutSection";
import BlogSection from "../sections/BlogSection";
import ContentSection from "../sections/ContentSection";
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";
import PricingSection from "../sections/PricingSection";
import TeamSection from "../sections/TeamSection";

export default function Landing() {

  return (
    <div>
      <HeroSection/>
      <FeaturesSection/>
      <PricingSection/>
      <AboutSection/>
      <TeamSection/>
      <BlogSection/>
      <ContentSection/>
    </div>
  )
}
