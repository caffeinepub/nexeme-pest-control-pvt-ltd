import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { Bug, AlertTriangle, Shield, ArrowRight } from 'lucide-react';
import { pestsData } from '@/content/pests';

export default function PestsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Bug className="h-4 w-4" />
              <span>Pest Identification Guide</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Common <span className="text-primary">Pests & Insects</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Learn to identify common household pests, recognize signs of infestation, and discover prevention tips to protect your home and family.
            </p>
          </div>
        </div>
      </section>

      {/* Pests Grid */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pestsData.map((pest, index) => (
            <Card key={index} className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Bug className="h-6 w-6 text-primary" />
                  {pest.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Bug className="h-4 w-4 text-primary" />
                    How to Identify
                  </h3>
                  <CardDescription className="text-sm leading-relaxed">
                    {pest.identification}
                  </CardDescription>
                </div>
                
                <div>
                  <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    Signs of Infestation
                  </h3>
                  <ul className="space-y-1">
                    {pest.signs.map((sign, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    Prevention Tips
                  </h3>
                  <ul className="space-y-1">
                    {pest.prevention.map((tip, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Found Signs of Pests?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Don't wait for the problem to get worse. Contact our expert team today for a free inspection and customized treatment plan.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <Link to="/contact">
                      Get Free Inspection
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/services">View Our Services</Link>
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
