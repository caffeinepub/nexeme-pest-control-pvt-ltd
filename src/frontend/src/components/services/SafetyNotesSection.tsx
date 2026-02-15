import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Users, Leaf, CheckCircle } from 'lucide-react';

export default function SafetyNotesSection() {
  const safetyInfo = [
    {
      icon: Users,
      title: 'Family & Pet Safety',
      points: [
        'All products used are EPA-approved and safe when applied correctly',
        'Keep children and pets away from treated areas until dry (typically 2-4 hours)',
        'Inform us about any allergies or sensitivities before treatment',
        'We provide detailed safety instructions for each service'
      ]
    },
    {
      icon: AlertCircle,
      title: 'Preparation Guidelines',
      points: [
        'Clear countertops and store food items in sealed containers',
        'Remove pets and their food/water bowls during treatment',
        'Provide access to all areas requiring treatment',
        'Cover or remove fish tanks and turn off aquarium pumps'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Aftercare Instructions',
      points: [
        'Avoid mopping or cleaning treated surfaces for 2-3 days',
        'Ventilate treated areas by opening windows after treatment',
        'Do not disturb bait stations or traps placed by technicians',
        'Contact us immediately if you have any concerns or reactions'
      ]
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Options',
      points: [
        'We offer green pest control solutions using botanical products',
        'Integrated Pest Management (IPM) minimizes chemical use',
        'Non-toxic options available for sensitive environments',
        'All treatments designed to minimize environmental impact'
      ]
    }
  ];

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Safety & Care Information
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your safety is our top priority. Here's what you need to know about our treatments and how to prepare.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {safetyInfo.map((info, index) => (
            <Card key={index} className="border-2">
              <CardHeader>
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <info.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {info.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
