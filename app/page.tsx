import Navbar from '@/components/landing/navbar';
import Hero from '@/components/landing/hero';
import TrustedBy from '@/components/landing/trusted-by';
import Features from '@/components/landing/features';
import HowItWorks from '@/components/landing/how-it-works';
import Testimonials from '@/components/landing/testimonials';
import FAQ from '@/components/landing/faq';
import CTA from '@/components/landing/cta';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
