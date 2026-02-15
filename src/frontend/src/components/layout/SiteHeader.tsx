import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <img
            src="/assets/generated/nexeme-logo.dim_512x512.png"
            alt="Nexeme Pest Control Logo"
            className="h-10 w-10"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight text-primary">NEXEME</span>
            <span className="text-xs font-medium text-muted-foreground">Pest Control</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.path)
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:9053146001" className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80">
            <Phone className="h-4 w-4" />
            <span>9053146001</span>
          </a>
          <Button asChild size="sm">
            <Link to="/contact">Get Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px]">
            <div className="flex flex-col gap-6 py-6">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/generated/nexeme-logo.dim_512x512.png"
                  alt="Nexeme Pest Control Logo"
                  className="h-10 w-10"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-tight text-primary">NEXEME</span>
                  <span className="text-xs font-medium text-muted-foreground">Pest Control</span>
                </div>
              </div>
              
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.path}>
                    <Link
                      to={link.path}
                      className={`rounded-md px-4 py-3 text-sm font-medium transition-colors hover:bg-accent ${
                        isActive(link.path)
                          ? 'bg-accent text-primary'
                          : 'text-foreground'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="flex flex-col gap-3 border-t pt-6">
                <a
                  href="tel:9053146001"
                  className="flex items-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-medium text-primary hover:bg-accent/80"
                >
                  <Phone className="h-4 w-4" />
                  <span>9053146001</span>
                </a>
                <SheetClose asChild>
                  <Button asChild className="w-full">
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
