import Link from "next/link";
import Hero from "@/components/Hero";
import AIInsights from "@/components/AIInsights";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AIInsights />
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <FAQSection />
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}
