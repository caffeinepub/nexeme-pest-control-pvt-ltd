import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { Bug, Home, Rat, Droplets, Bed, Shield, CheckCircle } from 'lucide-react';
import TreatmentProcessSection from '@/components/services/TreatmentProcessSection';
import SafetyNotesSection from '@/components/services/SafetyNotesSection';

export default function ServicesPage() {
  const services = [
    {
      icon: Bug,
      title: 'General Pest Control',
      description: 'Comprehensive protection against ants, spiders, cockroaches, and other common household pests. Our treatments create a protective barrier around your property.',
      features: ['Interior & exterior treatment', 'Quarterly maintenance plans', 'Safe for pets & children', 'Guaranteed results'],
    },
    {
      icon: Home,
      title: 'Termite Treatment',
      description: 'Advanced termite detection and elimination services to protect your property from costly structural damage. We use the latest technology and proven methods.',
      features: ['Pre & post-construction treatment', 'Soil treatment barriers', 'Wood treatment solutions', 'Annual inspections'],
    },
    {
      icon: Rat,
      title: 'Rodent Control',
      description: 'Effective solutions for eliminating rats and mice from your property. We identify entry points, remove existing populations, and prevent future infestations.',
      features: ['Humane trapping methods', 'Entry point sealing', 'Sanitation guidance', 'Follow-up monitoring'],
    },
    {
      icon: Droplets,
      title: 'Mosquito Control',
      description: 'Reduce mosquito populations around your home or business with targeted treatments. Enjoy your outdoor spaces without the nuisance and health risks of mosquitoes.',
      features: ['Breeding site elimination', 'Barrier spray treatments', 'Larvicide applications', 'Seasonal programs'],
    },
    {
      icon: Bed,
      title: 'Bed Bug Treatment',
      description: 'Thorough bed bug elimination using heat treatment and chemical solutions. We ensure complete eradication of all life stages from your home or hotel.',
      features: ['Heat & chemical options', 'Mattress encasements', 'Multiple treatment visits', 'Prevention education'],
    },
    {
      icon: Shield,
      title: 'Commercial Pest Control',
      description: 'Customized pest management programs for businesses, restaurants, hotels, and commercial properties. Maintain compliance and protect your reputation.',
      features: ['Scheduled service visits', 'Documentation & reporting', 'Industry compliance', 'Discreet service'],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Professional pest control solutions for residential and commercial properties. We offer comprehensive services to protect your space from all types of pests.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <service.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Treatment Process Section */}
      <TreatmentProcessSection />

      {/* Safety Notes Section */}
      <SafetyNotesSection />

      {/* Why Choose Us */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose Our Services?
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Licensed & Certified</h3>
                  <p className="text-sm text-muted-foreground">
                    Our technicians are fully licensed, trained, and certified in the latest pest control methods.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Eco-Friendly Solutions</h3>
                  <p className="text-sm text-muted-foreground">
                    We prioritize environmentally responsible products that are safe for your family and pets.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Guaranteed Results</h3>
                  <p className="text-sm text-muted-foreground">
                    We stand behind our work with service guarantees and follow-up visits as needed.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Flexible Scheduling</h3>
                  <p className="text-sm text-muted-foreground">
                    Same-day and emergency services available. We work around your schedule.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Card className="w-full border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-bold">Ready to Schedule Service?</h3>
                <p className="text-muted-foreground">
                  Contact us today for a free inspection and quote. Our team will assess your situation and recommend the best solution.
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full" size="lg">
                    <Link to="/contact">Get Free Quote</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full" size="lg">
                    <a href="tel:9053146001">Call 9053146001</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
