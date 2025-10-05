
import HeroSection from "./HeroSection";
import Footer from "./Footer";

export default function TodoHero({ onGetStarted }) {
  return (
    <div className="pt-1"> 
      <HeroSection onGetStarted={onGetStarted} />

      <Footer />
    </div>
  );
}
