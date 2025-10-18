import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <Card className="p-8 md:p-12 shadow-card animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Mr. Praveenkumar Lade is a respected educational leader and political figure in Dhule. 
                As the Principal of <span className="font-semibold text-secondary">Chhatrapati Shivaji High School & Junior College</span>, 
                he is committed to academic excellence and nurturing the next generation of leaders.
              </p>
              
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                In his role as <span className="font-semibold text-primary">President of the BJP Teachers' Front</span> in 
                Dhule Metropolitan, he actively supports teachers and advocates for progressive education policies 
                that benefit both educators and students.
              </p>
              
              <p className="text-lg text-foreground/90 leading-relaxed">
                He is also a dedicated <span className="font-semibold text-accent">BJP candidate</span> working tirelessly 
                to serve his community through political leadership and business initiatives that promote economic 
                growth and social development in the region.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
