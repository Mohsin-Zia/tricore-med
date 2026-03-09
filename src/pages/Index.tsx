import { PageWrapper } from "@/components/layout/PageWrapper";
import { Hero } from "@/components/sections/Hero";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { DMESection } from "@/components/sections/DMESection";
import { HIPAASecuritySection } from "@/components/sections/HIPAASecuritySection";
import { SpecialtiesSection } from "@/components/sections/SpecialtiesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import WhoWeAreSection from "@/components/common/WhoWeAreSection";

const Index = () => {
  return (
    <PageWrapper>
      <Hero />
      <TrustBadges />
      <WhoWeAreSection />
      <ServicesSection />
      <StatsSection />
      <DMESection />
      <HIPAASecuritySection />
      <SpecialtiesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection limit={5} />
      <CTASection
        title="Why Healthcare Providers Choose Tricore Med Billing "
        description="Healthcare providers partner with Tricore Med Billing for our precision, transparency, and proven results. Our advanced billing systems and experienced consultants reduce claim errors, increase reimbursements, and help practices stay compliant with constantly evolving payer regulations."
      />
    </PageWrapper>
  );
};

export default Index;
