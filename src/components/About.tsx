import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-20 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <Card className="p-10 md:p-14 lg:p-16 shadow-card border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <div className="space-y-8 text-foreground/80">
              <p className="text-lg md:text-xl leading-relaxed">
                Mr. Praveenkumar Lade is a distinguished educational leader in Dhule, serving as the 
                <span className="font-semibold text-foreground"> Principal of Chhatrapati Shivaji High School & Junior College</span>. 
                His commitment to academic excellence and holistic education has shaped countless students' futures.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                As the <span className="font-semibold text-foreground">President of the Bharatiya Janata Party (BJP) Teachers' Front</span> in 
                Dhule Metropolitan, he champions the rights and welfare of educators, advocating for progressive 
                education policies that empower both teachers and students across the region.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                Through his dual roles in education and political leadership, Mr. Lade works tirelessly to 
                create lasting positive change in the community, fostering an environment where quality education 
                and teacher empowerment go hand in hand.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
