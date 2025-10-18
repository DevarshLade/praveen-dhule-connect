import heroImage from "@/assets/hero-portrait.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-secondary/98 to-secondary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,131,0,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          <div className="space-y-10 text-white">
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="inline-block">
                <div className="h-1 w-16 bg-primary mb-6 rounded-full" />
              </div>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                Mr. Praveenkumar Lade
              </h1>
              <div className="space-y-4 text-lg md:text-xl text-white/85 leading-relaxed">
                <p>Principal – Chhatrapati Shivaji High School & Junior College, Dhule</p>
                <p>President – Bharatiya Janata Party (BJP) Teachers' Front, Dhule Metropolitan</p>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Committed to educational excellence and empowering teachers across Dhule Metropolitan.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] group"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-[1.02]"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-150">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Mr. Praveenkumar Lade - Educational Leader" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
