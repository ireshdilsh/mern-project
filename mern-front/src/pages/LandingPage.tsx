import NavBar from "../components/NavBar.tsx";
import About from "./About.tsx";
import Features from "./Features.tsx";
import HeroSection from "./HeroSection.tsx";

export default function LandingPage() {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <Features/>
            <About/>
        </div>
    )
}
