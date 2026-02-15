import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { Shield, Users, Award, Target, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We prioritize the safety of your family, pets, and the environment in every service we provide.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our top priority. We listen to your concerns and deliver personalized solutions.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of service quality and professionalism in everything we do.',
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'We are committed to delivering effective, long-lasting solutions that solve your pest problems.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About <span className="text-primary">Nexeme</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Your trusted partner in professional pest control services. We are dedicated to protecting homes and businesses from unwanted pests.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Who We Are
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-base leading-relaxed">
                Nexeme Pest Control Pvt Ltd is a professional pest management company committed to providing safe, effective, and reliable pest control solutions. We understand that pest problems can be stressful and disruptive, which is why we work quickly and efficiently to restore your peace of mind.
              </p>
              <p className="text-base leading-relaxed">
                Our team of certified technicians brings years of experience and expertise to every job. We stay current with the latest industry developments, technologies, and best practices to ensure we deliver the most effective treatments available.
              </p>
              <p className="text-base leading-relaxed">
                Whether you're dealing with a minor pest issue or a major infestation, we have the knowledge, tools, and dedication to solve your problem. We serve both residential and commercial clients, offering customized solutions tailored to each unique situation.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="/assets/generated/nexeme-hero.dim_1600x900.png"
              alt="Nexeme Pest Control team"
              className="rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our customers.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground">
              We go above and beyond to deliver exceptional service and results.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">Licensed & Insured</h3>
                <p className="text-sm text-muted-foreground">
                  Fully licensed professionals with comprehensive insurance coverage for your protection and peace of mind.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">Advanced Technology</h3>
                <p className="text-sm text-muted-foreground">
                  We use the latest equipment and proven treatment methods to ensure effective pest elimination.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">Eco-Friendly Options</h3>
                <p className="text-sm text-muted-foreground">
                  Environmentally responsible treatments that are safe for your family, pets, and the planet.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">Satisfaction Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  We stand behind our work with service guarantees and will return if pests come back.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">Transparent Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  Clear, upfront pricing with no hidden fees. You'll know exactly what to expect before we start.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-sm text-muted-foreground">
                  Same-day and emergency services available. We work around your schedule for your convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Experience the Nexeme Difference
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Let us show you why customers trust us for their pest control needs. Contact us today for a free consultation.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <Link to="/contact">Get Free Quote</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/services">View Services</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
