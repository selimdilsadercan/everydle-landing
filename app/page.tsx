import Hero from "@/components/Hero";
import GamesSection from "@/components/GamesSection";
import AppPreviewSection from "@/components/AppPreviewSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQ from "@/components/FAQ";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <GamesSection />
      <AppPreviewSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQ />
    </>
  );
};

export default HomePage;
