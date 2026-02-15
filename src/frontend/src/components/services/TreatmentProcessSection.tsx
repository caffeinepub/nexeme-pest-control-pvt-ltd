import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Bug, Sparkles, Shield, ClipboardCheck } from 'lucide-react';

export default function TreatmentProcessSection() {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: 'Inspection',
      description: 'Our certified technicians conduct a thorough inspection of your property to identify pest types, infestation levels, and entry points.'
    },
    {
      number: 2,
      icon: Bug,
      title: 'Identification',
      description: 'We accurately identify the pest species and assess the extent of the problem to determine the most effective treatment approach.'
    },
    {
      number: 3,
      icon: Sparkles,
      title: 'Treatment',
      description: 'We apply targeted treatments using safe, EPA-approved products. Methods vary based on pest type and may include sprays, baits, or traps.'
    },
    {
      number: 4,
      icon: Shield,
      title: 'Prevention',
      description: 'We implement preventive measures including sealing entry points, removing attractants, and creating protective barriers around your property.'
    },
    {
      number: 5,
      icon: ClipboardCheck,
      title: 'Follow-Up',
      description: 'We schedule follow-up visits to monitor results, ensure complete elimination, and provide ongoing protection with maintenance plans.'
    }
  ];

  return (
    <section className="container py-16 md:py-24">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Our Treatment Process
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We follow a systematic, proven approach to ensure effective pest elimination and long-term protection for your property.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <Card key={step.number} className="border-2 transition-all hover:border-primary/50 hover:shadow-lg relative">
            <div className="absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-lg">
              {step.number}
            </div>
            <CardHeader>
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <step.icon className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
