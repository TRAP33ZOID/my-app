import CallToAction from "@/components/call-to-action";
import ContactSection from "@/components/contact";
import ContentSection from "@/components/content-7";
import FAQsThree from "@/components/faqs-3";
import Features from "@/components/features-2";
import FooterSection from "@/components/footer";
import ForgotPasswordPage from "@/components/forgot-password";
import HeroSection from "@/components/hero-section";
import LoginPage from "@/components/login";

import Pricing from "@/components/pricing";
import PricingComparator from "@/components/pricing-comparator";
import SignUp from "@/components/sign-up";
import StatsSection from "@/components/stats-4";
//import IntegrationsSection from "@/components/integrations-5";
//import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <ContentSection />
      <StatsSection />
      <CallToAction />
      <FooterSection />
      <Pricing />
      <PricingComparator />
      <FAQsThree />
      <LoginPage />
      <SignUp />
      <ForgotPasswordPage />
      <ContactSection />
      {/* <IntegrationsSection /> */}
    </div>
  );
}
