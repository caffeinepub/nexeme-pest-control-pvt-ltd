import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Clock, Award, CheckCircle, Phone, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: Shield,
      title: 'Safe & Effective',
      description: 'Eco-friendly solutions that are safe for your family and pets while being tough on pests.',
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'Fast scheduling and prompt service to address your pest problems when you need us.',
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in pest management and control.',
    },
  ];

  const services = [
    { name: 'General Pest Control', description: 'Comprehensive protection against common household pests' },
    { name: 'Termite Treatment', description: 'Advanced solutions to protect your property from termite damage' },
    { name: 'Rodent Control', description: 'Effective elimination and prevention of rats and mice' },
    { name: 'Mosquito Control', description: 'Reduce mosquito populations for a safer outdoor environment' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container py-16 md:py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Professional Pest Control{' '}
                  <span className="text-primary">Solutions</span>
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  Protect your home and business with expert pest management services. Safe, reliable, and effective treatments for all your pest control needs.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="text-base">
                  <Link to="/contact">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <a href="tel:9053146001">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Licensed & Insured • Same-Day Service Available</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/nexeme-hero.dim_1600x900.png"
                alt="Professional pest control services"
                className="rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why Choose Nexeme?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine expertise, safety, and customer satisfaction to deliver the best pest control services.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive pest control solutions tailored to your specific needs.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {services.map((service, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col items-center text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Contact us today for a free consultation and quote. Our team is ready to help you solve your pest problems.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="text-base">
                  <Link to="/contact">
                    Get Free Quote
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <a href="tel:9053146001">
                    <Phone className="mr-2 h-4 w-4" />
                    9053146001
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
