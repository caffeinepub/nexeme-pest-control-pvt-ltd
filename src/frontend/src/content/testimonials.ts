export interface Testimonial {
  name: string;
  rating: number;
  review: string;
  service?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    review: "Excellent service! The team was professional and thorough. They eliminated our cockroach problem completely. Highly recommend Nexeme for anyone dealing with pest issues.",
    service: "General Pest Control"
  },
  {
    name: "Priya Sharma",
    rating: 5,
    review: "Very impressed with their termite treatment. They explained everything clearly and the results were fantastic. Our home is now protected and we have peace of mind.",
    service: "Termite Treatment"
  },
  {
    name: "Amit Patel",
    rating: 5,
    review: "Fast response and effective rodent control. The technicians were knowledgeable and sealed all entry points. Haven't seen a single mouse since their visit!",
    service: "Rodent Control"
  },
  {
    name: "Sneha Reddy",
    rating: 5,
    review: "Outstanding mosquito control service! We can finally enjoy our garden in the evenings. The team was punctual and used safe products around our children and pets.",
    service: "Mosquito Control"
  },
  {
    name: "Vikram Singh",
    rating: 5,
    review: "Professional bed bug treatment that actually worked! After trying other companies, Nexeme finally solved our problem. Great communication throughout the process.",
    service: "Bed Bug Treatment"
  },
  {
    name: "Meera Iyer",
    rating: 5,
    review: "We use Nexeme for our restaurant's pest control needs. They're reliable, discreet, and help us maintain health compliance. Excellent commercial service!",
    service: "Commercial Pest Control"
  }
];
