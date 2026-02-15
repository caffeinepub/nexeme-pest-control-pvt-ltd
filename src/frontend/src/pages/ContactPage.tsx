import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Ready to solve your pest problem? Contact us today for a free consultation and quote. We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Cards */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-8">
                Reach out to us through any of the following methods. We're available to answer your questions and schedule service.
              </p>
            </div>

            <Card className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <CardTitle>Phone</CardTitle>
                <CardDescription>Call us directly for immediate assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="tel:9053146001"
                  className="text-2xl font-bold text-primary hover:underline"
                >
                  9053146001
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription>Send us a message anytime</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:inkhiya14@gmail.com"
                  className="text-lg font-semibold text-primary hover:underline break-all"
                >
                  inkhiya14@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <CardTitle>Business Hours</CardTitle>
                <CardDescription>We're here when you need us</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday:</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday:</span>
                  <span className="font-medium">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday:</span>
                  <span className="font-medium">Emergency Only</span>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  * Emergency services available 24/7
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Card */}
          <div className="flex flex-col gap-6">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Request a Free Quote</CardTitle>
                <CardDescription className="text-base">
                  Get a customized solution for your pest control needs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Contact Us</h4>
                      <p className="text-sm text-muted-foreground">
                        Call or email us with details about your pest problem
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Free Inspection</h4>
                      <p className="text-sm text-muted-foreground">
                        We'll schedule a convenient time to assess your situation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Custom Solution</h4>
                      <p className="text-sm text-muted-foreground">
                        Receive a detailed quote and treatment plan
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 pt-4">
                  <Button asChild className="w-full" size="lg">
                    <a href="tel:9053146001">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now: 9053146001
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full" size="lg">
                    <a href="mailto:inkhiya14@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Us
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <CardTitle>Service Areas</CardTitle>
                <CardDescription>We serve residential and commercial properties</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We provide professional pest control services throughout the region. Contact us to confirm service availability in your area.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Customers Choose Nexeme
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-left">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Fast Response</h3>
                  <p className="text-sm text-muted-foreground">
                    Same-day service available for urgent pest problems
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Expert Team</h3>
                  <p className="text-sm text-muted-foreground">
                    Licensed professionals with years of experience
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Guaranteed Results</h3>
                  <p className="text-sm text-muted-foreground">
                    We stand behind our work with service guarantees
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
