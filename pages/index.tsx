import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ShoppingBag, 
  Sparkles, 
  Heart, 
  Zap, 
  Bell, 
  Camera,
  Search,
  CreditCard,
  TrendingUp,
  Instagram,
  Linkedin,
  Twitter
} from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const Index = () => {
  const features = [
    {
      icon: ShoppingBag,
      title: "Product Saving Engine",
      description: "Save items from any website with a single click. Build your personalized wishlist effortlessly."
    },
    {
      icon: Sparkles,
      title: "AI Shopping Assistant",
      description: "Visual and natural language search powered by AI. Find exactly what you're looking for."
    },
    {
      icon: Heart,
      title: "sVipe Mode",
      description: "Tinder-style product discovery. Swipe through curated products tailored to your taste."
    },
    {
      icon: CreditCard,
      title: "One-Click Checkout",
      description: "Buy instantly across platforms. No more repetitive form filling or complicated checkouts."
    },
    {
      icon: Bell,
      title: "Price Alerts & Recommendations",
      description: "Get notified when prices drop and discover smart alternatives that match your preferences."
    }
  ];

  const workflow = [
    {
      icon: Camera,
      title: "Snap or Save",
      description: "Capture any product online with our browser extension or mobile app."
    },
    {
      icon: Bell,
      title: "Track & Alert",
      description: "Vish tracks prices, alerts you on deals, and suggests better alternatives."
    },
    {
      icon: Heart,
      title: "Swipe to Discover",
      description: "Explore curated products in sVipe Mode – fun, fast, and personalized."
    },
    {
      icon: Zap,
      title: "Smart Checkout",
      description: "Complete purchases with one-click across multiple platforms instantly."
    }
  ];

  const benefits = [
    {
      stat: "₹5,000+",
      label: "Average monthly savings per user"
    },
    {
      stat: "50+",
      label: "Products tracked in one place"
    },
    {
      stat: "10x",
      label: "Faster checkout process"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[image:var(--gradient-hero)] px-6 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                  Shop Smarter,{" "}
                  <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent">
                    Not Harder
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground md:text-2xl">
                  Snap, Search, Save, and Buy with AI-powered Vishlyst – your ultimate shopping assistant.
                </p>
              </div>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" variant="hero">
                  Get Started
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in [animation-delay:200ms]">
              <img 
                src={heroMockup} 
                alt="Vishlyst App Interface" 
                className="rounded-2xl shadow-[var(--shadow-glow)] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Everything You Need to Shop Smart
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features that make online shopping effortless, enjoyable, and efficient.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group p-8 hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105 animate-fade-in border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="h-12 w-12 mb-4 text-primary group-hover:text-accent transition-colors" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              How Vishlyst Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to transform your shopping experience forever.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step, index) => (
              <div 
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-full blur-xl opacity-30"></div>
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-card border-2 border-primary/20">
                      <step.icon className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-primary">Step {index + 1}</div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {index < workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Why Choose Vishlyst?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of smart shoppers who save time and money every day.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="p-8 text-center animate-fade-in border-primary/20 bg-gradient-to-br from-card to-primary/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent mb-2">
                  {benefit.stat}
                </div>
                <div className="text-muted-foreground">{benefit.label}</div>
              </Card>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="p-8 border-primary/20">
              <Search className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-2xl font-semibold mb-3">All-in-One Experience</h3>
              <p className="text-muted-foreground">
                No more juggling between multiple apps and tabs. Everything you need in one beautiful, intuitive interface.
              </p>
            </Card>

            <Card className="p-8 border-primary/20">
              <Sparkles className="h-12 w-12 mb-4 text-accent" />
              <h3 className="text-2xl font-semibold mb-3">AI with Personality</h3>
              <p className="text-muted-foreground">
                Your shopping assistant understands context, learns your preferences, and feels like a friend who knows your style.
              </p>
            </Card>

            <Card className="p-8 border-primary/20">
              <TrendingUp className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-2xl font-semibold mb-3">Real-Time Intelligence</h3>
              <p className="text-muted-foreground">
                Stay ahead with price tracking, deal alerts, and trend insights that help you make smarter purchase decisions.
              </p>
            </Card>

            <Card className="p-8 border-primary/20">
              <Heart className="h-12 w-12 mb-4 text-accent" />
              <h3 className="text-2xl font-semibold mb-3">Personalized Just for You</h3>
              <p className="text-muted-foreground">
                From recommendations to sVipe Mode curation, every feature adapts to your unique taste and shopping habits.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:py-32 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Your Ultimate AI Shopping Assistant Awaits!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy shoppers who save time, money, and stress with Vishlyst.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button size="lg" variant="cta" className="text-lg px-8 py-6 h-auto">
              Sign Up Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card px-6 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent">
                Vishlyst
              </h3>
              <p className="text-sm text-muted-foreground">
                Your AI-powered shopping companion for smarter decisions.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Connect</h4>
              <div className="flex gap-4">
                <a href="#instagram" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#linkedin" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#twitter" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Vishlyst. All rights reserved. Built with ❤️ for smarter shopping.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
