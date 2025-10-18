import heroImage from "@/assets/hero-portrait.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 z-0" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-white">
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Mr. Praveenkumar Lade
              </h1>
              <div className="space-y-2 text-xl md:text-2xl text-white/90">
                <p className="font-semibold">Principal – Chhatrapati Shivaji High School & Junior College</p>
                <p className="font-semibold">President – BJP Teachers' Front, Dhule Metropolitan</p>
                <p className="font-semibold">BJP Candidate – Political Leader and Businessman</p>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-white/80 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Dedicated to serving the community through education, political leadership, 
              and social development in Dhule.
            </p>

            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant transition-all hover:scale-105"
              >
                Get in Touch
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-105"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-150">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Mr. Praveenkumar Lade" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-56 h-56 bg-accent/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
