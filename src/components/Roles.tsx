import { GraduationCap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const Roles = () => {
  const roles = [
    {
      icon: GraduationCap,
      title: "Principal",
      organization: "Chhatrapati Shivaji High School & Junior College, Dhule",
      description: "Leading educational excellence and fostering holistic development of students through innovative teaching methodologies and strong academic values."
    },
    {
      icon: Users,
      title: "President",
      organization: "BJP Teachers' Front, Dhule Metropolitan",
      description: "Advocating for teacher welfare, driving educational policy reforms, and strengthening the education system across Dhule Metropolitan region."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16 md:mb-20 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Leadership Roles
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto pt-2">
            Serving the community through education and political leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <Card 
                key={index}
                className="group p-10 md:p-12 hover:shadow-hover transition-all duration-500 border-border/50 bg-card hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {role.title}
                      </h3>
                      <p className="text-primary font-medium text-sm md:text-base leading-relaxed">
                        {role.organization}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {role.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roles;
