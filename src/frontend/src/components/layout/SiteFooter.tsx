import { Link } from '@tanstack/react-router';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'nexeme-pest-control';

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/nexeme-logo.dim_512x512.png"
                alt="Nexeme Pest Control Logo"
                className="h-12 w-12"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight text-primary">NEXEME</span>
                <span className="text-sm font-medium text-muted-foreground">Pest Control Pvt Ltd</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional pest control services for homes and businesses. Safe, effective, and reliable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Home
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Services
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Our Services</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/services" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                General Pest Control
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Termite Treatment
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Rodent Control
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Mosquito Control
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:9053146001"
                className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>9053146001</span>
              </a>
              <a
                href="mailto:inkhiya14@gmail.com"
                className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span className="break-all">inkhiya14@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>Serving residential and commercial properties</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {currentYear} Nexeme Pest Control Pvt Ltd. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="h-4 w-4 fill-destructive text-destructive" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
