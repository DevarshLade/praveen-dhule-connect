import Hero from "@/components/Hero";
import About from "@/components/About";
import Roles from "@/components/Roles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Hero />
      <About />
      <Roles />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
