import { GraduationCap, Users, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const Roles = () => {
  const roles = [
    {
      icon: GraduationCap,
      title: "Principal",
      organization: "Chhatrapati Shivaji High School & Junior College, Dhule",
      description: "Leading with vision to provide quality education and shape future leaders",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Users,
      title: "President",
      organization: "BJP Teachers' Front, Dhule Metropolitan",
      description: "Championing teachers' rights and advocating for educational reforms",
      gradient: "from-secondary to-secondary/80"
    },
    {
      icon: Briefcase,
      title: "BJP Candidate",
      organization: "Political Leader and Businessman",
      description: "Serving the community through dedicated political service and business development",
      gradient: "from-accent to-accent/80"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Roles & Responsibilities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <Card 
                key={index}
                className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 border-border/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${role.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {role.title}
                </h3>
                
                <p className="text-primary font-semibold mb-4 text-sm">
                  {role.organization}
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  {role.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roles;
