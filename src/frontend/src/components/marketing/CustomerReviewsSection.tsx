import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { testimonials } from '@/content/testimonials';

export default function CustomerReviewsSection() {
  return (
    <section className="container py-16 md:py-24">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Customer Reviews
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Don't just take our word for it. See what our satisfied customers have to say about our pest control services.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              {testimonial.service && (
                <p className="text-xs font-medium text-primary">{testimonial.service}</p>
              )}
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                "{testimonial.review}"
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
